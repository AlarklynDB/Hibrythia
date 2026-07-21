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
// Bookshelf (book blurbs) and Multimedia (interactive pages) are
// intentionally excluded — everything else is in scope.
const LORE_DIRS = [
  'views/WorldbuildingContents',
  'views/LocalesAndSights',
  'views/CharacterProfiles',
  'views/LegendsAndMyths',
  'views/MetaWorldbuilding',
]

// Folders intentionally left OUT of the tally, shown in the footer
// card so it's transparent about what "Total Lore" does NOT include.
const EXCLUDED_DIRS = [
  { label: 'Bookshelf', dir: 'views/Bookshelf' },
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
  return str.replace(/&[a-z]+;/gi, (m) => ENTITY_MAP[m.toLowerCase()] ?? m)
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
  let totalWords = 0
  let totalPages = 0
  let specialCharacterCount = 0

  for (const relDir of LORE_DIRS) {
    const absDir = join(SRC_ROOT, relDir)
    const files = findIndexFiles(absDir)
    for (const file of files) {
      const source = readFileSync(file, 'utf-8')
      const text = extractRenderedText(source)
      totalWords += countWords(text)
      specialCharacterCount += countSpecialChars(text)
      totalPages += 1
    }
  }

  const excluded = {}
  let excludedTotal = 0
  for (const { label, dir } of EXCLUDED_DIRS) {
    const count = findIndexFiles(join(SRC_ROOT, dir)).length
    excluded[label] = count
    excludedTotal += count
  }
  excluded.total = excludedTotal

  const outDir = join(SRC_ROOT, 'data')
  mkdirSync(outDir, { recursive: true })
  const outPath = join(outDir, 'loreWordCount.json')
  const payload = {
    totalWords,
    totalPages,
    specialCharacterCount,
    excluded,
    generatedAt: new Date().toISOString(),
  }
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n')

  console.log(
    `[count-lore-words] ${totalWords.toLocaleString('en-US')} words, ${specialCharacterCount.toLocaleString('en-US')} special chars, across ${totalPages.toLocaleString('en-US')} lore pages (${excludedTotal} pages excluded) -> ${outPath}`
  )
}

main()
