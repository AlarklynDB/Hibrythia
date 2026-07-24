// ============================================================
// count-lore-words.mjs
// ------------------------------------------------------------
// Walks every lore page under the target view folders, extracts
// the human-readable text that actually renders on the page
// (paragraphs, headings, list items, bullet-array strings), and
// tallies a total word count + page count across the whole site.
//
// Hyphenated words (e.g. "well-known") are NOT split apart —
// we only split on whitespace, so a hyphenated compound counts
// as exactly one word, per site convention.
//
// Output -> src/data/loreWordCount.json, consumed by Footer.tsx.
//
// Runs automatically before every `astro dev` / `astro build`
// (see package.json scripts), so the footer total silently
// re-syncs itself the moment new lore is written or edited —
// no manual step required.
// ============================================================

import { readFileSync, readdirSync, statSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC_ROOT = join(__dirname, '..', 'src')

// Folders that count as "lore" for this tally.
// Bookshelf (book blurbs/TBD placeholders) and Multimedia (interactive
// pages) are intentionally excluded — everything else is in scope.
const LORE_DIRS = [
  'views/WorldbuildingContents',
  'views/LocalesAndSights',
  'views/CharacterProfiles',
  'views/LegendsAndMyths',
  'views/MetaWorldbuilding',
]

// Vol 0 - HTHGOE lives inside Bookshelf, but it's real published lore
// (not a TBD placeholder like the other volumes). It gets its own
// standalone tally — "Vol0GenesisLore" — rather than being folded into
// the generic Lore bucket, so the footer can show it as its own line.
const BOOKSHELF_DIR = 'views/Bookshelf'
const VOL0_HTHGOE_DIR = 'views/Bookshelf/Vol0HTHGOE'

// Hibryds Ministories (also inside Bookshelf) get their own separate
// tally — see MINISTORY logic below. Finished episodes/TOC pages count
// toward "Ministory Word Count"; scaffolds still showing the TBD
// placeholder (Ministory2, Ministory3, future unwritten episodes) are
// tracked as their own "Not Yet Tallied: Ministories" bucket, same
// spirit as the Bookshelf TBD bucket but scoped to Ministories.
const MINISTORY_ROOT = 'views/Bookshelf/HibrydsMinistories'
const TBD_MARKER = 'To Be Determined'

// Folders intentionally left OUT of the tally, shown in the footer
// card so it's transparent about what "Total Lore" does NOT include.
// (Bookshelf's excluded count below excludes Vol 0 - HTHGOE and all of
// HibrydsMinistories, since those are tracked in their own buckets.)
const EXCLUDED_DIRS = [
  { label: 'Multimedia', dir: 'views/Multimedia' },
]

// ---- entity decode -----------------------------------------
const ENTITY_MAP = {
  '&apos;': "'",
  '&amp;': '&',
  '&quot;': '"',
  '&nbsp;': ' ',
  '&mdash;': '—',
  '&ndash;': '–',
  '&hellip;': '…',
  '&lt;': '<',
  '&gt;': '>',
}
function decodeEntities(str) {
  let out = str.replace(/&[a-z]+;/gi, (m) => ENTITY_MAP[m.toLowerCase()] ?? m)
  // Numeric entities, e.g. &#39; (used throughout Vol 0 - HTHGOE prose)
  out = out.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
  return out
}

// ---- recursive .tsx finder -----------------------------------
function findIndexFiles(dir) {
  let results = []
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return results
  }
  for (const entry of entries) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      results = results.concat(findIndexFiles(full))
    } else if (entry === 'index.tsx') {
      results.push(full)
    }
  }
  return results
}

// ---- extract rendered text from a raw .tsx source string ----
function extractRenderedText(source) {
  // 1. Strip JSX block comments: {/* ... */}
  let cleaned = source.replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')

  const chunks = []

  // 1b. dangerouslySetInnerHTML={{__html: `...`}} template-literal prose
  //     (used by Vol 0 - HTHGOE's episodes) — pulled out FIRST and blanked
  //     from `cleaned` so the raw HTML tags inside these backtick strings
  //     (e.g. <em>) don't also get picked up by the generic >text< pass
  //     below, which would double-count that text.
  cleaned = cleaned.replace(/dangerouslySetInnerHTML=\{\{\s*__html:\s*`([\s\S]*?)`\s*\}\}/g, (_, inner) => {
    chunks.push(inner.replace(/<[^>]+>/g, ' '))
    return ' '
  })

  // 2a. Plain text nodes between tags: >text<   (no nested { } or < > inside)
  for (const m of cleaned.matchAll(/>([^<>{}]+)</g)) {
    chunks.push(m[1])
  }

  // 2b. Bare quoted-string lines — the array-of-strings-for-.map()
  //     bullet-list pattern used across this codebase, e.g.
  //     'Some bullet point text.',
  for (const m of cleaned.matchAll(/^\s*['"]([^'"]{2,})['"],?\s*$/gm)) {
    chunks.push(m[1])
  }

  // 2c. Inline string JSX-expression children: {'literal text'}
  for (const m of cleaned.matchAll(/\{\s*['"]([^'"]*)['"]\s*\}/g)) {
    if (m[1].trim().length > 0) chunks.push(m[1])
  }

  let text = chunks.join(' ')
  text = decodeEntities(text)

  // 3. Drop obvious dev-only chrome: "[ ... Image Placeholder ... ]"
  text = text.replace(/\[[^\]]*Image Placeholder[^\]]*\]/gi, ' ')

  return text
}

// ---- word count (whitespace-only split => hyphens stay intact) ----
function countWords(text) {
  return text
    .split(/\s+/)
    .filter((tok) => tok.replace(/[^a-zA-Z0-9]/g, '').length > 0)
    .length
}

// ---- special character count (punctuation/symbols, not letters/digits/whitespace) ----
function countSpecialChars(text) {
  return (text.match(/[^a-zA-Z0-9\s]/g) || []).length
}

// ---- main -----------------------------------------------------
function main() {
  let loreWords = 0
  let lorePages = 0
  let loreSpecialCharacterCount = 0

  for (const relDir of LORE_DIRS) {
    const absDir = join(SRC_ROOT, relDir)
    const files = findIndexFiles(absDir)
    for (const file of files) {
      const source = readFileSync(file, 'utf-8')
      const text = extractRenderedText(source)
      loreWords += countWords(text)
      loreSpecialCharacterCount += countSpecialChars(text)
      lorePages += 1
    }
  }

  // ---- Vol 0 - HTHGOE: its own standalone "Vol0GenesisLore" tally ---
  let vol0Words = 0
  let vol0Pages = 0
  let vol0SpecialCharacterCount = 0

  const vol0Files = findIndexFiles(join(SRC_ROOT, VOL0_HTHGOE_DIR))
  for (const file of vol0Files) {
    const source = readFileSync(file, 'utf-8')
    const text = extractRenderedText(source)
    vol0Words += countWords(text)
    vol0SpecialCharacterCount += countSpecialChars(text)
    vol0Pages += 1
  }

  // ---- Ministories: split finished pages from TBD scaffolds --------
  let ministoryWords = 0
  let ministoryPages = 0
  let ministorySpecialCharacterCount = 0
  let ministoryTBDPages = 0

  const ministoryFiles = findIndexFiles(join(SRC_ROOT, MINISTORY_ROOT))
  for (const file of ministoryFiles) {
    const source = readFileSync(file, 'utf-8')
    if (source.includes(TBD_MARKER)) {
      ministoryTBDPages += 1
      continue
    }
    const text = extractRenderedText(source)
    ministoryWords += countWords(text)
    ministorySpecialCharacterCount += countSpecialChars(text)
    ministoryPages += 1
  }

  const excluded = {}
  let excludedTotal = 0
  for (const { label, dir } of EXCLUDED_DIRS) {
    const count = findIndexFiles(join(SRC_ROOT, dir)).length
    excluded[label] = count
    excludedTotal += count
  }
  // Bookshelf excluded count = everything in Bookshelf MINUS Vol 0 - HTHGOE
  // (counted as lore above) MINUS all of HibrydsMinistories (counted/
  // tracked separately above, whether finished or TBD).
  const bookshelfAll = findIndexFiles(join(SRC_ROOT, BOOKSHELF_DIR)).length
  const vol0Count = findIndexFiles(join(SRC_ROOT, VOL0_HTHGOE_DIR)).length
  const ministoryAll = ministoryFiles.length
  const bookshelfExcluded = bookshelfAll - vol0Count - ministoryAll
  excluded.Bookshelf = bookshelfExcluded
  excludedTotal += bookshelfExcluded
  // Ministories excluded count = only the TBD ministory scaffolds
  // (finished ministory pages are tallied above, not excluded).
  excluded.Ministories = ministoryTBDPages
  excludedTotal += ministoryTBDPages
  excluded.total = excludedTotal

  const overallWords = loreWords + vol0Words + ministoryWords
  const overallPages = lorePages + vol0Pages + ministoryPages
  const overallSpecialCharacterCount = loreSpecialCharacterCount + vol0SpecialCharacterCount + ministorySpecialCharacterCount

  const outDir = join(SRC_ROOT, 'data')
  mkdirSync(outDir, { recursive: true })
  const outPath = join(outDir, 'loreWordCount.json')
  const payload = {
    loreWords,
    lorePages,
    loreSpecialCharacterCount,
    vol0Words,
    vol0Pages,
    vol0SpecialCharacterCount,
    ministoryWords,
    ministoryPages,
    ministorySpecialCharacterCount,
    overallWords,
    overallPages,
    overallSpecialCharacterCount,
    excluded,
    generatedAt: new Date().toISOString(),
  }
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n')

  console.log(
    `[count-lore-words] Lore: ${loreWords.toLocaleString('en-US')} words / ${lorePages.toLocaleString('en-US')} pages. Vol0GenesisLore: ${vol0Words.toLocaleString('en-US')} words / ${vol0Pages.toLocaleString('en-US')} pages. Ministory: ${ministoryWords.toLocaleString('en-US')} words / ${ministoryPages.toLocaleString('en-US')} pages. Overall: ${overallWords.toLocaleString('en-US')} words / ${overallPages.toLocaleString('en-US')} pages (${excludedTotal} pages excluded) -> ${outPath}`
  )
}

main()
