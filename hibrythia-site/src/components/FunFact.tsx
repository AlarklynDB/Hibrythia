// ─── FunFact.tsx ──────────────────────────────────────────────────────────────
// Home page "fact of the moment" card.
//
// Facts come from public/fun-facts.json, which scripts/build-fun-facts.mjs
// regenerates on every dev/build from the world-lore pages (never the books,
// ministories, or character profiles). New lore shows up automatically.
//
// A new fact is picked on every page load. A fact that has been shown is
// remembered (localStorage) and is not shown again until every other fact has
// had its turn. Weekday names are Hetra's, derived from the visitor's clock.
// ──────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type Raw = { pages: { r: string; t: string; c: string }[]; facts: [number, string][] };
type Fact = { id: string; text: string; page: number };

// Date.getDay(): 0 = Sunday
const HETRA_DAYS = ['Hynsday', 'Iyonsday', 'Bhuseday', 'Runesday', 'Yhursday', 'Draxday', 'Sethraday'];

const SEEN_KEY = 'hib-fact-seen';
const LAST_KEY = 'hib-fact-last';

const hash = (s: string) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
};

const readJson = <T,>(key: string, fallback: T): T => {
  try {
    const v = window.localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
};
const writeJson = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode / blocked storage: the card still works, it just can't remember */
  }
};

// Pick an unseen fact, favouring a different page than the last one so the
// card doesn't linger on a single topic. When everything has been seen, the
// cycle starts over (never opening on the fact just shown).
function pick(all: Fact[]): Fact {
  const ids = new Set(all.map((f) => f.id));
  const last = readJson<{ id: string; page: number } | null>(LAST_KEY, null);
  let seen = new Set(readJson<string[]>(SEEN_KEY, []).filter((id) => ids.has(id)));

  let pool = all.filter((f) => !seen.has(f.id));
  if (pool.length === 0) {
    seen = new Set();
    pool = all.filter((f) => f.id !== last?.id);
    if (pool.length === 0) pool = all;
  }

  const byPage = new Map<number, Fact[]>();
  for (const f of pool) byPage.set(f.page, [...(byPage.get(f.page) ?? []), f]);
  let pages = [...byPage.keys()];
  if (pages.length > 1 && last) pages = pages.filter((p) => p !== last.page);

  const page = pages[Math.floor(Math.random() * pages.length)];
  const group = byPage.get(page)!;
  const fact = group[Math.floor(Math.random() * group.length)];

  seen.add(fact.id);
  writeJson(SEEN_KEY, [...seen]);
  writeJson(LAST_KEY, { id: fact.id, page: fact.page });
  return fact;
}

// ── three layouts so consecutive facts don't all look the same ──────────────
function FactText({ text }: { text: string }) {
  const base =
    'font-display text-[clamp(1.2rem,1rem+0.9vw,1.6rem)] leading-[1.45] max-w-[58ch]';

  // 1. Numbers get pulled out in gold
  if (/\d/.test(text)) {
    const parts = text.split(/(Ħ?\d[\d,.]*\s?(?:%|k\b|[A-Za-z]*illion\b)?)/);
    return (
      <p className={`${base} text-[#a8a29a]`}>
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-[#c9a84c]">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </p>
    );
  }

  // 2. A short leading subject is lifted out in brighter text
  const m = text.match(/^((?:[A-Z][\w'’-]*\s){0,4}[A-Z][\w'’-]*)\s+((?:is|are|was|were|has|have)\b[\s\S]*)$/);
  if (m) {
    return (
      <p className={`${base} text-[#a8a29a]`}>
        <span className="text-[#f2ebeb]">{m[1]}</span> {m[2]}
      </p>
    );
  }

  // 3. Everything else reads as a pull quote
  return (
    <p className={`${base} text-[#d8d4cc] border-l-2 border-[#c9a84c]/40 pl-5`}>{text}</p>
  );
}

export default function FunFact() {
  const [data, setData] = useState<{ raw: Raw; facts: Fact[] } | null>(null);
  const [fact, setFact] = useState<Fact | null>(null);
  const [day, setDay] = useState('');
  const [shown, setShown] = useState(false);
  const [failed, setFailed] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    setDay(HETRA_DAYS[new Date().getDay()]);
    fetch('/fun-facts.json')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((raw: Raw) => {
        const facts = raw.facts.map(([page, text]) => ({ id: hash(text), text, page }));
        if (!facts.length) return setFailed(true);
        setData({ raw, facts });
        setFact(pick(facts));
        requestAnimationFrame(() => setShown(true));
      })
      .catch(() => setFailed(true)); // no facts available: render nothing
  }, []);

  const another = useCallback(() => {
    if (!data) return;
    setShown(false);
    window.setTimeout(() => {
      setFact(pick(data.facts));
      setShown(true);
    }, 180);
  }, [data]);

  if (failed) return null;

  const page = data && fact ? data.raw.pages[fact.page] : null;

  return (
    <section
      aria-label="A piece of Hetra lore"
      className="my-14 border border-[#2e2b26] bg-[#141210] rounded-sm px-6 sm:px-10 py-10 min-h-[17rem] flex flex-col"
    >
      <div
        className={`flex items-center justify-between gap-4 transition-opacity duration-300 ${shown ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="font-body text-xs tracking-[0.25em] uppercase text-[#c9a84c]">{day}</span>
        {page && (
          <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">{page.c}</span>
        )}
      </div>

      <div
        className={`flex-1 flex items-center py-8 transition-opacity duration-[180ms] ${shown ? 'opacity-100' : 'opacity-0'}`}
        aria-live="polite"
      >
        {fact && <FactText text={fact.text} />}
      </div>

      <div
        className={`flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#2e2b26] transition-opacity duration-300 ${shown ? 'opacity-100' : 'opacity-0'}`}
      >
        {page ? (
          <Link
            to={page.r}
            className="font-body text-xs text-[#7a7670] hover:text-[#c9a84c] transition-colors duration-[180ms]"
          >
            From {page.t} →
          </Link>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={another}
          className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-[#2e2b26] text-[#7a7670] rounded-sm hover:border-[#c9a84c]/30 hover:text-[#d8d4cc] transition-all duration-[180ms]"
        >
          Another one
        </button>
      </div>
    </section>
  );
}
