// ─── Home.tsx ─────────────────────────────────────────────────────────────────
// HAXL | The Hibrythian Saga — Home Page
// Content sourced word-for-word from Notion: alarkiusej/HAXL-The-Hibrythian-Saga
// ──────────────────────────────────────────────────────────────────────────────

import { Link } from 'react-router-dom';
import FunFact from '../components/FunFact';

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">


      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-16 pb-14 flex flex-col items-start gap-5">
        <div className="gold-rule" aria-hidden="true" />
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase">
          An Adventure Fantasy World &amp; Book Series
        </p>
        <h1 className="font-display text-[clamp(1.75rem,1rem+2.5vw,3rem)] text-[#d8d4cc] leading-[1.1]">
          The Hibrythian Saga
        </h1>
        <p className="font-body text-sm text-[#7a7670] max-w-[56ch] leading-relaxed">
          Official Website for "Hibryds — A Grand Voyage" and many more Books in this Series!
        </p>
        <p className="font-body text-xs text-[#c9a84c]/60">
          © {new Date().getFullYear()} All Rights Reserved | Alarkius Elvya Jay / AlarkiusEJ |{' '}
          <a
            href="https://www.alarkiusej.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#c9a84c] transition-colors"
          >
            alarkiusej.com
          </a>
        </p>

        {/* Nav CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            to="/world"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-[#c9a84c]/30 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 transition-all duration-[180ms]"
          >
            The World Database →
          </Link>
          <Link
            to="/characters"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-[#c9a84c]/30 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 transition-all duration-[180ms]"
          >
            Character Profiles →
          </Link>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent" aria-hidden="true" />

      {/* ── WHAT DO I DO HERE? ────────────────────────────────────────────── */}
      <section className="py-10 bg-[#141210] border border-[#2e2b26] rounded-sm px-6 my-10">
        <h2 className="font-display text-lg text-[#d8d4cc] mb-2">💡 What do I do here?</h2>
        <p className="font-body text-sm text-[#7a7670] mb-5 leading-relaxed">
          Don't know where to start? You can either explore this website, or....
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.thehibrythiansaga.com/bookshelf/vol0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-[#c9a84c]/30 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 transition-all duration-[180ms]"
          >
            Read our World Introduction
          </a>
          <Link
            to="/bookshelf"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 border border-[#2e2b26] text-[#7a7670] rounded-sm hover:border-[#c9a84c]/30 hover:text-[#d8d4cc] transition-all duration-[180ms]"
          >
            Check out our Bookshelf
          </Link>
          <a
            href="https://www.alarkiusej.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase px-4 py-2 bg-[#c9a84c] text-[#141210] font-semibold rounded-sm hover:bg-[#d8b95e] transition-all duration-[180ms]"
          >
            Buy The Books
          </a>

        </div>
        <p className="font-body text-xs text-[#4a4844] mt-5 leading-relaxed">
          All references here that relate to our Books, Worldbuilding, or Quotes, are coded in:{' '}
          <span className="text-[#c9a84c]">Yellow</span>,{' '}
          <span className="text-[#c9985a]">Pastel Orange</span>, and{' '}
          <span className="text-[#888] underline">Gray links</span>!
        </p>
      </section>

      {/* ── FACT OF THE MOMENT ─────────────────────────────────────────────── */}
      <FunFact />

      <div className="h-px bg-gradient-to-r from-transparent via-[#2e2b26] to-transparent mb-16" aria-hidden="true" />

    </div>
  );
}
