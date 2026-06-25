import { Link } from 'react-router-dom';

const PAGES = [
  {
    to: '/world/meta/TheMultiverseOfMultitudes',
    label: 'The Multiverse of Multitudes',
    description: 'The layered multiverse structure and how the planes of existence interact across all of creation.',
  },
  {
    to: '/world/meta/TheSigilOfHibrythia',
    label: 'The Sigil of Hibrytheia',
    description: 'The six cosmic realms that compose the spiritual and dimensional architecture of the Hibrythian universe.',
  },
  {
    to: '/world/meta/TheCosmicTrainFromBeyond',
    label: 'The Cosmic Train from Beyond',
    description: 'A mysterious entity or vessel said to travel between the planes — its origin and purpose unknown.',
  },
  {
    to: '/world/meta/TheOuterbounds',
    label: 'The Outerbounds',
    description: 'The space beyond all known dimensions — a meta-realm that exists outside the Sigil of Hibrytheia.',
  },
];

export default function MetaWorldbuilding() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <Link to="/world" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 mb-6 inline-block">
        ← Back to World
      </Link>
      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Cosmic & Meta</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-4">
        Meta Worldbuilding
      </h1>
      <p className="font-body text-sm text-[#7a7670] mb-10 max-w-[600px] leading-relaxed">
        The cosmic architecture beyond Hetra itself — multiverses, spiritual realms, and the mysterious forces that exist outside the known world.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PAGES.map(({ to, label, description }) => (
          <Link
            key={to}
            to={to}
            className="group block border border-[#2e2b26] rounded-sm p-5 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
          >
            <h2 className="font-display text-sm text-[#f2ebeb] mb-2 group-hover:text-[#c9a84c] transition-colors duration-200">
              {label}
            </h2>
            <p className="font-body text-xs text-[#7a7670] leading-relaxed mb-3">{description}</p>
            <span className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c]/60 group-hover:text-[#c9a84c] transition-colors duration-200">
              Read →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
