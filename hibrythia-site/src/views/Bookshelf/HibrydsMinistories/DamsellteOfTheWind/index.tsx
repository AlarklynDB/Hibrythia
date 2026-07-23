import { Link } from 'react-router-dom';

const EPISODES = [
  { to: '/bookshelf/ministories/damsellete-of-the-wind/episode-1', label: 'Episode I — The Caged Wind' },
  { to: '/bookshelf/ministories/damsellete-of-the-wind/episode-2', label: 'Episode II — The Wind who Caught The Wolf' },
  { to: '/bookshelf/ministories/damsellete-of-the-wind/episode-3', label: "Episode III — Raeya's Loving Sacrifice" },
  { to: '/bookshelf/ministories/damsellete-of-the-wind/episode-4', label: 'Episode IV — Timed Revival' },
  { to: '/bookshelf/ministories/damsellete-of-the-wind/episode-5', label: 'Episode V — Back From the Dead' },
];

export default function DamsellteOfTheWind() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-20">
      <div className="gold-rule mb-6" aria-hidden="true" />
      <Link
        to="/bookshelf/ministories"
        className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 mb-6 inline-block"
      >
        ← Back to Hibryds — Ministories
      </Link>

      <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Hibryds · Ministories</p>
      <h1 className="font-display text-[clamp(1.5rem,1.2rem+1.25vw,2.25rem)] text-[#f2ebeb] mb-2 leading-tight">
        Hibryds — Damsellete of The Wind (Raeya's Ministory)
      </h1>
      <p className="font-body text-xs text-[#4a4844] tracking-widest uppercase mb-10">
        Also Known As HDOTW
      </p>

      {/* Premise */}
      <section className="mb-10 space-y-5 max-w-[680px]">
        <h2 className="font-display text-base text-[#f2ebeb] mb-4">
          Hibryds - The Wind Damsellete (HDOTW)
        </h2>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          This is a Ministory about Raeya! From a proper in dialogue backstory, to two reunions, this Ministory explains Raeya's characterization and growth across a structural device!
        </p>
      </section>

      {/* Read-in-order notice */}
      <div className="mb-10 border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] max-w-[600px]">
        <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-2">Reading Order</p>
        <p className="font-body text-xs text-[#7a7670] leading-relaxed">
          This story must be read in order, since this is canon to the main story.
        </p>
      </div>

      {/* Book 1 promo + buy link */}
      <section className="mb-10 space-y-4 max-w-[680px]">
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          If you haven't read Book 1 (Hibryds - A Grand Voyage) yet, go support this series by picking it up on our B&N page!
        </p>
        <a
          href="https://www.barnesandnoble.com/w/hibryds-a-grand-voyage-book-1-alarkius-elvya-jay/1149652259?ean=9798994097670"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-[10px] tracking-widest uppercase px-5 py-2.5 border border-[#c9a84c]/40 text-[#c9a84c] rounded-sm hover:bg-[#c9a84c]/8 hover:border-[#c9a84c]/70 transition-all duration-[180ms]"
        >
          Click here to get redirected! ↗
        </a>
        <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
          This story picks up after <span className="text-[#c9a84c] italic">Hibryds - A Grand Voyage, EP 11 - The Battle of Conflicts</span> after a few parts.
        </p>
      </section>

      {/* Status block */}
      <div className="mb-16 border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] max-w-[600px] space-y-1.5">
        <p className="font-body text-sm text-[#c8c2ba]">
          <span className="text-[#f2ebeb] font-semibold">Ministory Status:</span> Ministory Completed
        </p>
        <p className="font-body text-sm text-[#c8c2ba]">
          <span className="text-[#f2ebeb] font-semibold">Series Status:</span> Ongoing to concurrent series
        </p>
        <p className="font-body text-sm text-[#c8c2ba]">
          <span className="text-[#f2ebeb] font-semibold">Story Type:</span> Canon to the main series
        </p>
        <p className="font-body text-sm text-[#c8c2ba]">
          <span className="text-[#f2ebeb] font-semibold">Adjacency:</span> Structure and In-story Characterization for{' '}
          <Link to="/characters/RaeyaFlutters" className="text-[#c9a84c] hover:text-[#f2ebeb] transition-colors duration-200 underline">
            Raeya Flutters
          </Link>
        </p>
      </div>

      {/* Episodes in Order */}
      <section>
        <h2 className="font-display text-base text-[#f2ebeb] mb-1">Episodes in Order</h2>
        <p className="font-body text-xs text-[#4a4844] mb-6 leading-relaxed">
          5 episodes. Content coming soon — chapters will be added here as they go live.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {EPISODES.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col justify-center min-h-[64px] border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#131210] hover:border-[#c9a84c]/40 hover:bg-[#1a1814] transition-all duration-200"
            >
              <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1.5">
                Episode {i + 1}
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
