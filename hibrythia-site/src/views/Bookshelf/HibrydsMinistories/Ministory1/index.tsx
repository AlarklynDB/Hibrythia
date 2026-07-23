import { Link } from "react-router-dom";

// NOTE: Repo-structure scaffold only — not yet wired into live
// routing/nav. "Ministory1" and "EpisodeNo" are placeholder names.
const EPISODES = [
  { to: '/bookshelf/ministories/ministory1/episodeno', label: 'Episode No. (placeholder name)' },
];

export default function Ministory1() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/bookshelf/ministories"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Hibryds — Ministories
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Hibryds · Ministories
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          Ministory 1 (placeholder name)
        </h1>
      </div>

      {/* TBD Message */}
      <div className="border border-[#2e2b26] rounded-xl bg-[#1a1714] px-8 py-12 flex flex-col items-center text-center gap-4">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Content Status</p>
        <h2 className="font-display text-lg text-[#f2ebeb]">To Be Determined</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed max-w-[480px]">
          Content: To Be Determined. Explore the Website for great lore and worldbuilding!
        </p>
        <Link
          to="/world"
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#2e2b26] bg-[#131210] text-[#c9a84c] font-display text-sm hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
        >
          Explore Worldbuilding &#8594;
        </Link>
      </div>

      {/* Table of Contents */}
      <section>
        <h2 className="font-display text-base text-[#f2ebeb] mb-1">Table of Contents</h2>
        <p className="font-body text-xs text-[#4a4844] mb-6 leading-relaxed">
          Episodes coming soon — entries will be added here as they go live.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EPISODES.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col justify-center min-h-[64px] border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
            >
              <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1.5">
                Episode {i}
              </p>
              <span className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors duration-200">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/bookshelf/ministories"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Hibryds — Ministories</p>
          </div>
        </Link>
        <div />
      </div>

    </div>
  );
}
