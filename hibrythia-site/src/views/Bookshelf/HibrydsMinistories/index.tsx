import { Link } from 'react-router-dom';

// NOTE: This is a repo-structure scaffold only — not yet wired into
// live routing/nav. Folder + title names below are placeholders and
// may be renamed once real content is ready.
const MINISTORIES = [
  { to: '/bookshelf/ministories/damsellete-of-the-wind', label: "Hibryds - Damsellete of The Wind ( HDoTW | Raeya's Ministory)" },
  { to: '/bookshelf/ministories/ministory2', label: 'Ministory 2 (TBD)' },
  { to: '/bookshelf/ministories/ministory3', label: 'Ministory 3 (TBD)' },
];

export default function HibrydsMinistories() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <Link
        to="/bookshelf"
        className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 mb-6 inline-block"
      >
        ← Back to Bookshelf
      </Link>

      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Hibryds · Ministories</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-2 leading-tight">
        Hibryds — Ministories
      </h1>
      <p className="font-body text-xs text-[#4a4844] tracking-widest uppercase mb-10">
        A Collection of Shorter Side-Stories Within The Hibrythian Saga
      </p>

      {/* Premise */}
      <section className="mb-16 space-y-5 max-w-[680px]">
        <h2 className="font-display text-base text-[#f2ebeb] mb-4">
          What Are Ministories?
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          Ministories are bite-sized side-stories set within The Hibrythian Saga — smaller in scope than the mainline Volumes, but still canon to the universe. Some of these stories will serve as either lore, character arcs, and more!
        </p>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          All of our Ministories are free to read on this website. If you want to support this world and its main story, consider finding our main books on Barnes & Noble!
        </p>
      </section>

      {/* Table of Contents */}
      <section>
        <h2 className="font-display text-base text-[#f2ebeb] mb-1">Table of Contents</h2>
        <p className="font-body text-xs text-[#4a4844] mb-6 leading-relaxed">
          3 Ministories planned. Content coming soon — entries will be added here as they go live.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MINISTORIES.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col justify-center min-h-[64px] border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
            >
              <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1.5">
                Ministory {i + 1}
              </p>
              <span className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors duration-200">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
