// ============================================================
// build-fun-facts.mjs
// ------------------------------------------------------------
// Scans the world-lore view folders, pulls out standalone sentences
// that read well on their own, and writes public/fun-facts.json for
// the Home page "fact of the moment" card.
//
// Scope is world lore ONLY: WorldbuildingContents, LocalesAndSights,
// LegendsAndMyths, MetaWorldbuilding. Bookshelf (books, ministories)
// and CharacterProfiles are never read.
//
// Because it re-runs before every dev/build (see package.json), new
// lore is picked up automatically. To keep something off the Home
// page, add it to src/data/funFactsExclude.json.
// ============================================================

import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC = join(__dirname, '..', 'src')
const OUT = join(__dirname, '..', 'public', 'fun-facts.json')

const SOURCES = [
  { dir: 'views/WorldbuildingContents', category: 'World Database' },
  { dir: 'views/LocalesAndSights',      category: 'Locales' },
  { dir: 'views/LegendsAndMyths',       category: 'Legends' },
  { dir: 'views/MetaWorldbuilding',     category: 'Beyond Hetra' },
]

const exclude = existsSync(join(SRC, 'data/funFactsExclude.json'))
  ? JSON.parse(readFileSync(join(SRC, 'data/funFactsExclude.json'), 'utf-8'))
  : {}
const exPages = (exclude.pages ?? []).map((s) => s.toLowerCase())
const exPhrases = (exclude.phrases ?? []).map((s) => s.toLowerCase())
const exSentences = new Set(exclude.sentences ?? [])

// Phrases the card must never show, plus dev chrome.
const BANNED = ['daily fun fact', 'fun fact!', 'did you know', 'to be determined', 'tbd', 'placeholder', 'click ', 'see below', 'see above', 'scroll']

const ENT = { '&plusmn;': '±', '&aelig;': 'æ', '&eacute;': 'é', '&egrave;': 'è', '&agrave;': 'à', '&ccedil;': 'ç', '&ouml;': 'ö', '&uuml;': 'ü', '&times;': '×', '&mdash;': '—', '&ndash;': '–', '&apos;': "'", '&amp;': '&', '&quot;': '"', '&nbsp;': ' ', '&hellip;': '…', '&lt;': '<', '&gt;': '>', '&rsquo;': '’', '&lsquo;': '‘', '&ldquo;': '“', '&rdquo;': '”' }
const decode = (s) =>
  s.replace(/&#(\d+);/g, (_, c) => String.fromCharCode(+c)).replace(/&[a-z]+;/gi, (m) => ENT[m.toLowerCase()] ?? m)

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

// view folder -> { route, title } by reading the .astro pages that import it
const routeByView = new Map()
for (const f of walk(join(SRC, 'pages'), (n) => n.endsWith('.astro'))) {
  const s = readFileSync(f, 'utf-8')
  const imp = s.match(/import\s+\w+\s+from\s+'[^']*views\/([^']+)'/)
  const path = s.match(/path=\{'([^']+)'\}/)
  const title = s.match(/title=\{'([^']+?)\s*\|/)
  if (imp && path) routeByView.set(imp[1].replace(/\/index$/, ''), { route: path[1], title: title?.[1] ?? '' })
}

// ---- text extraction ------------------------------------------------------
function stripJsx(inner) {
  let t = inner
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/\{\s*(['"`])((?:\\.|(?!\1)[^\\])*)\1\s*\}/g, (_, __, str) => str)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
  if (/[{}]/.test(t)) return null
  return decode(t).replace(/\\'/g, "'").replace(/\s+/g, ' ').replace(/\s+([,.;:!?)])/g, '$1').replace(/\(\s+/g, '(').trim()
}

function paragraphs(source) {
  const out = []
  for (const m of source.matchAll(/<(p|li)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
    const t = stripJsx(m[2])
    if (t) out.push(t)
  }
  // long prose strings kept in arrays: 'Sentence.',  `Sentence.`
  for (const m of source.matchAll(/^\s*(['"`])((?:\\.|(?!\1)[^\\\n])+)\1,?\s*$/gm)) {
    const t = decode(m[2]).replace(/\\'/g, "'").replace(/\s+/g, ' ').trim()
    if (t.length >= 60 && /\s/.test(t) && /[.!?]$/.test(t)) out.push(t)
  }
  return out
}

const ABBR = [['vs.', 'vs§'], ['Dr.', 'Dr§'], ['Mr.', 'Mr§'], ['Mrs.', 'Mrs§'], ['St.', 'St§'], ['No.', 'No§'], ['approx.', 'approx§'], ['etc.', 'etc§'], ['e.g.', 'e§g§'], ['i.e.', 'i§e§']]
function sentences(par) {
  let p = par
  for (const [a, b] of ABBR) p = p.split(a).join(b)
  return p
    .split(/(?<=[.!?]["”’)]?)\s+(?=["“‘(]?[A-Z])/)
    .map((s) => s.split('§').join('.').trim())
}

const BAD_START = /^(It|Its|This|That|These|Those|They|Their|Them|He|She|His|Her|Hers|However|But|And|Also|Because|Which|Who|Whom|Thus|Therefore|Then|There|Here|So|Or|Yet|Still|Meanwhile|Instead|Otherwise|Although|Though|While|Since|As|Such|Both|Each|Another|Other|Some|Many|Most|How|What|Where|When|Why|Whose|If|Not|Only|Within|Over|Under|With|Without|For|From|To|Like|Unlike|Despite|Following|Once|Until|Upon|Per|Via|Between|Across|Along|Among|The result|The results|The following|The rest|The other|The same)\b/
const HAS_VERB = /\b(is|are|was|were|has|have|had|can|could|will|would|must|does|did|exists?|serves?|keeps?|holds?|makes?|uses?|lives?|calls?|called|known|named|built|found|created|made|born|ranges?|stands?|sits?|spans?|rises?|flows?|forms?|contains?|houses?|powers?|runs?|grows?|stretch(es)?|covers?|reaches|reach)\b/
function good(s) {
  if (s.length < 55 || s.length > 240) return false
  if (!/^["“]?[A-Z0-9Ħ]/.test(s) || !/[.!?]["”]?$/.test(s)) return false
  if (BAD_START.test(s) || /^[A-Z]{3,}\s/.test(s) && /^(BUT|AND|ALSO|NOTE|WARNING)\b/.test(s)) return false
  if (/[—–]/.test(s) || / - /.test(s)) return false
  if (/[\[\]{}<>|]/.test(s) || /&[a-z#0-9]+;/i.test(s)) return false
  const q = (s.match(/["“”]/g) ?? []).length
  if (q % 2) return false
  const par = (s.match(/\(/g) ?? []).length - (s.match(/\)/g) ?? []).length
  if (par !== 0) return false
  if (s.split(/\s+/).length < 9) return false
  // needs a real verb to stand alone, and no pointing at surrounding text
  if (!HAS_VERB.test(s)) return false
  if (/\b(this|these|those|above|below|previous|previously mentioned|aforementioned|earlier|later in|next section)\b/i.test(s)) return false
  const l = s.toLowerCase()
  if (BANNED.some((b) => l.includes(b))) return false
  if (exPhrases.some((b) => l.includes(b))) return false
  if (exSentences.has(s)) return false
  return true
}

// ---- main -----------------------------------------------------------------
const pages = []
const facts = []
const seen = new Set()
for (const { dir, category } of SOURCES) {
  for (const file of walk(join(SRC, dir), (n) => n === 'index.tsx')) {
    const rel = file.slice(join(SRC, 'views').length + 1).replace(/\/index\.tsx$/, '')
    const info = routeByView.get(rel)
    if (!info) continue // hub/index pages and anything without a route
    if (exPages.some((x) => info.route.toLowerCase().includes(x))) continue
    const source = readFileSync(file, 'utf-8')
    const picked = []
    for (const par of paragraphs(source)) for (const s of sentences(par)) {
      if (good(s) && !seen.has(s)) { seen.add(s); picked.push(s) }
    }
    if (!picked.length) continue
    const idx = pages.push({ r: info.route, t: info.title || basename(rel), c: category }) - 1
    for (const s of picked) facts.push([idx, s])
  }
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, JSON.stringify({ pages, facts }))
console.log(`[fun-facts] ${facts.length} facts from ${pages.length} pages -> public/fun-facts.json`)
