// ─── WhatsNew.tsx ─────────────────────────────────────────────────────────────
// Home page "What's New" and "What's Updated and Fixed" rows.
//
// Entries come from src/data/changelog.json, regenerated from git history by
// scripts/build-changelog.mjs before every dev/build (worldbuilding and
// character pages only; Bookshelf and ministories are never included).
// ──────────────────────────────────────────────────────────────────────────────

import { Link } from 'react-router-dom';
import changelog from '../data/changelog.json';

type Entry = {
  title: string;
  route: string;
  category: string;
  art: string | null;
  date: string;
  kind?: 'art' | 'fix' | 'link' | 'edit';
};

const NEW_LINES = [
  'Just opened its doors',
  'A new corner of Hetra to explore',
  'Fresh on the site',
  'Newly added to the world',
  'Another page joins the saga',
  'Hot off the drafting table',
];

const UPDATE_LINES: Record<NonNullable<Entry['kind']>, string[]> = {
  art: [
    'Real art now stands where the placeholder was',
    'New artwork has been unveiled',
    'Fresh art has arrived',
    'A brand new visual joins the page',
  ],
  fix: ['Typos squashed and details cleaned up', 'Small fixes tucked in', 'Polished and proofread'],
  link: ['New links wired in', 'More paths between pages', 'Fresh cross-references added'],
  edit: [
    'Updated with the latest lore',
    'Revised to match the newest notes',
    'Expanded and refined',
    'Lore refreshed straight from the source',
  ],
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

// stable pick so a row always reads the same between builds
const pick = <T,>(list: T[], seed: string) => {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return list[Math.abs(h) % list.length];
};

function Row({ entry, line }: { entry: Entry; line: string }) {
  return (
    <li className="max-w-none">
      <Link
        to={entry.route}
        className="group flex items-center gap-5 py-5 transition-colors duration-[180ms]"
      >
        <div className="shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-sm overflow-hidden border border-[#2e2b26] bg-[#0e0d0b] group-hover:border-[#c9a84c]/40 transition-colors duration-[180ms]">
          {entry.art ? (
            <img src={entry.art} alt="" loading="lazy" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-display text-lg text-[#2e2b26]" aria-hidden="true">
              {entry.title.replace(/^The\s+/i, '').charAt(0)}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]/80 mb-1">{entry.category}</p>
          <p className="font-display text-base text-[#f2ebeb] leading-snug group-hover:text-[#c9a84c] transition-colors duration-[180ms]">
            {entry.title}
          </p>
          <p className="font-body text-sm text-[#7a7670] mt-1 leading-relaxed max-w-none">{line}</p>
        </div>

        <p className="hidden sm:block shrink-0 font-body text-xs text-[#4a4844] tracking-wide">{formatDate(entry.date)}</p>
      </Link>
    </li>
  );
}

function Rows({ heading, entries, lines }: { heading: string; entries: Entry[]; lines: (e: Entry) => string }) {
  if (!entries.length) return null;
  return (
    <section className="py-14">
      <h2 className="font-display text-lg text-[#d8d4cc] mb-3 tracking-wide">{heading}</h2>
      <ul className="divide-y divide-[#2e2b26] border-y border-[#2e2b26]">
        {entries.map((e) => (
          <Row key={e.route + e.date} entry={e} line={lines(e)} />
        ))}
      </ul>
    </section>
  );
}

export default function WhatsNew() {
  const fresh = changelog.new as Entry[];
  const updated = changelog.updated as Entry[];
  return (
    <>
      <Rows heading="What's New" entries={fresh} lines={(e) => pick(NEW_LINES, e.route + e.date)} />
      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />
      <Rows
        heading="What's Updated and Fixed"
        entries={updated}
        lines={(e) => pick(UPDATE_LINES[e.kind ?? 'edit'], e.route + e.date)}
      />
    </>
  );
}
