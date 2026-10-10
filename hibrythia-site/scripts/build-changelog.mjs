// ============================================================
// build-changelog.mjs
// ------------------------------------------------------------
// Reads git history for the lore pages and writes
// src/data/changelog.json for the Home page "What's New" and
// "What's Updated and Fixed" rows.
//
//   New      = a lore page whose file was first added (newest first)
//   Updated  = a lore page edited after it was added (newest first)
//
// Scope: worldbuilding + character pages only. Bookshelf (books,
// ministories) and Multimedia are never read.
//
// Re-runs before every dev/build, so each push lands at the top on
// the next deploy. If the checkout has no usable git history (a
// shallow CI clone), the previously saved file is kept as is.
// ============================================================

import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = join(__dirname, '..')
const SRC = join(SITE, 'src')
const OUT = join(SRC, 'data', 'changelog.json')

const LIMIT = 6              // entries kept per row
const BULK = 10              // a commit touching more lore pages than this is a sitewide sweep, not a page update
const SETTLE_MS = 86400000   // an edit within a day of the page being added is part of "new", not an update

const SOURCES = [
  { dir: 'views/WorldbuildingContents', category: 'World Database' },
  { dir: 'views/LocalesAndSights',      category: 'Locales' },
  { dir: 'views/CharacterProfiles',     category: 'Characters' },
  { dir: 'views/LegendsAndMyths',       category: 'Legends' },
  { dir: 'views/MetaWorldbuilding',     category: 'Beyond Hetra' },
]

const git = (...args) => execFileSync('git', args, { cwd: SITE, encoding: 'utf-8', maxBuffer: 1 << 28 })

function keepExisting(reason) {
  console.log(`[changelog] ${reason}; keeping saved src/data/changelog.json`)
  process.exit(0)
}
try {
  if (git('rev-parse', '--is-shallow-repository').trim() === 'true') keepExisting('shallow clone')
  git('rev-parse', '--git-dir')
} catch {
  keepExisting('no git history available')
}

function walk(dir, test) {
  let out = []
  let entries = []
  try { entries = readdirSync(dir) } catch { return out }
  for (const e of entries) {
    const full = join(dir, e)
    if (statSync(full).isDirectory()) out = out.concat(walk(full, test))
    else if (test(e)) out.push(full)
  }
  return out
}

// view folder -> route + page title, read from the .astro pages
const routeByView = new Map()
for (const f of walk(join(SRC, 'pages'), (n) => n.endsWith('.astro'))) {
  const s = readFileSync(f, 'utf-8')
  const imp = s.match(/import\s+\w+\s+from\s+'[^']*views\/([^']+)'/)
  const path = s.match(/path=\{'([^']+)'\}/)
  const title = s.match(/title=\{'(.+?)\s*\|\s*The Hibrythian Saga'\}/)
  if (imp && path) routeByView.set(imp[1].replace(/\/index$/, ''), { route: path[1], title: title?.[1] ?? '' })
}

// ---- one pass over history (newest first) -----------------------------
const dirsArg = SOURCES.map((s) => `src/${s.dir}`)
const raw = git('log', '-M', '--relative', '--name-status', '--format=@@%H\t%aI\t%s', '--', ...dirsArg.map((d) => d))
const pages = new Map() // path -> { added, edits: [{ date, hash, subject }] }
let current = null
const commits = []
for (const line of raw.split('\n')) {
  if (line.startsWith('@@')) {
    const [hash, date, ...subj] = line.slice(2).split('\t')
    current = { hash, date, subject: subj.join('\t'), files: [] }
    commits.push(current)
  } else if (line.trim() && current) {
    const parts = line.split('\t')
    current.files.push({ status: parts[0], path: parts[parts.length - 1] })
  }
}
for (const c of commits) {
  const lore = c.files.filter((f) => f.path.endsWith('/index.tsx'))
  const bulk = lore.length > BULK
  for (const f of lore) {
    const p = pages.get(f.path) ?? { added: null, edits: [] }
    if (f.status === 'A') p.added = c // overwritten by older commits, so ends as the first add
    else if (f.status.startsWith('M') || (f.status.startsWith('R') && f.status !== 'R100')) {
      if (!bulk) p.edits.push(c)
    }
    pages.set(f.path, p)
  }
}

const IMG = /https:\/\/i\.ibb\.co\/[^"'\s)`]+\.(?:png|jpe?g|webp|gif)/i
const addsArt = (hash, path) => {
  try {
    return git('show', '--relative', '--format=', '-U0', hash, '--', path).split('\n').some((l) => l.startsWith('+') && IMG.test(l))
  } catch { return false }
}

const exists = (path) => existsSync(join(SITE, path))
const items = []
for (const [path, p] of pages) {
  if (!exists(path) || !p.added) continue
  const rel = path.replace(/^src\/views\//, '').replace(/\/index\.tsx$/, '')
  const info = routeByView.get(rel)
  if (!info) continue
  const src = SOURCES.find((s) => path.startsWith(`src/${s.dir}/`))
  if (!src) continue
  const art = readFileSync(join(SITE, path), 'utf-8').match(IMG)?.[0] ?? null
  items.push({ path, p, info, category: src.category, art, rel })
}

const base = (it) => ({ title: it.info.title || basename(it.rel), route: it.info.route, category: it.category, art: it.art })

const fresh = items
  .map((it) => ({ ...base(it), date: it.p.added.date.slice(0, 10), ts: Date.parse(it.p.added.date) }))
  .sort((a, b) => b.ts - a.ts)
  .slice(0, LIMIT)

const updated = items
  .map((it) => {
    const later = it.p.edits.filter((c) => Date.parse(c.date) - Date.parse(it.p.added.date) > SETTLE_MS)
    return later.length ? { it, last: later[0], later } : null
  })
  .filter(Boolean)
  .sort((a, b) => Date.parse(b.last.date) - Date.parse(a.last.date))
  .slice(0, LIMIT)
  .map(({ it, last, later }) => {
    // art flagged if this edit, or another within the week before it, brought in an image
    const window = later.filter((c) => Date.parse(last.date) - Date.parse(c.date) < 7 * 86400000)
    const newArt = it.art && window.some((c) => addsArt(c.hash, it.path))
    const s = last.subject.toLowerCase()
    const kind = newArt ? 'art' : /typo|fix|correct|spell/.test(s) ? 'fix' : /link/.test(s) ? 'link' : 'edit'
    return { ...base(it), date: last.date.slice(0, 10), kind }
  })

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, JSON.stringify({ new: fresh.map(({ ts, ...r }) => r), updated }, null, 2) + '\n')
console.log(`[changelog] ${fresh.length} new, ${updated.length} updated -> src/data/changelog.json`)
