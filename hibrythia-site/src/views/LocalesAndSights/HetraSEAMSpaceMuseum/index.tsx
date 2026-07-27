import { Link } from 'react-router-dom';

export default function HetraSEAMSpaceMuseum() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          Locales &amp; Sights / HetraS.E.A.M Space Museum
        </p>

        {/* Hero */}
        <div className="space-y-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">HetraS.E.A.M &mdash; Space Museum</h1>

          {/* Callout */}
          <div className="border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#0f0d0c]">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              <span className="font-display text-[#f2ebeb]">The Hetranian Space Exploration &amp; Aeronautics Museum</span> is Hetra&apos;s premier government-funded museum dedicated to the exploration, study, and colonization of the Nhumela Cluster and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ HetraSEAM &mdash; Image Placeholder ]</p>
      </div>

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Overview</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The <strong>Hetranian Space Exploration &amp; Aeronautics Museum</strong>, commonly known as <strong>HetraSEAM</strong>, is the leading interplanetary space museum of Planet Hetra. Headquartered in the city of <Link to="/world/locales/rynel" className="text-[#c9a84c] hover:underline">New Rynels</Link> on the continent of Rynel, HetraSEAM operates as a government-funded museum next to <Link to="/world/locales/HetraSEAPSpaceProgram" className="text-[#c9a84c] hover:underline">HetraSEAP</Link>.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          It is responsible for documentation and education of the <strong>Nhumela Cluster</strong>, the home solar system of Planet Hetra.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          With access to cutting-edge technology and close collaboration with scientific institutions, most notably the scientists of <strong>Eldreule</strong> (City of Science, Lynneria), HetraSEAM has been central to normalizing space travel across the solar system. As of the current year <strong>2245 A.D.</strong>, interplanetary transportation between Hetra and its neighboring inhabited planet, <strong>Planet Schavel</strong>, is a routine part of life.
        </p>
      </div>

      {/* Headquarters */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Headquarters</h2>
        <p className="font-body text-sm text-[#4a4844] tracking-widest uppercase mb-2">Location: New Rynels, Rynel Continent, Planet Hetra</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          New Rynels is the largest coastline city on Planet Hetra and is considered the economic and infrastructural capital of the world. Its vast wealth (home to individuals with net-worth(s) reaching into the quadrillions) and its concentration of entrepreneurs, engineers, and high-paying institutions made it the natural home of HetraSEAM. The city&apos;s resources and global reach allow HetraSEAP to fund large-scale missions with consistent backing.
        </p>
      </div>

      {/* History & Founding */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">History &amp; Founding</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          HetraSEAM is founded alongside <Link to="/world/locales/HetraSEAPSpaceProgram" className="text-[#c9a84c] hover:underline">HetraSEAP</Link>, as stated on that page. Founded in 1975, a period of explosive technological growth that preceded the Year 2000. As Hetra&apos;s global civilization advanced, and more people came back and forth from analyzing the Great Unknown, this museum was made as a way to preserve and document unexplained things out in space.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          There are two active satellites as of the year 2245.
        </p>
        <div className="grid gap-3">
          {[
            {
              name: "CalderiaX",
              desc: "The first satellite that uses both solar and lunar energy to get around. It has a 350-Megapixel Camera Array built into it. Launched on Calderia 12th. The direction this satellite went was due north, away from the sun. This satellite discovered nearly dangerous phenomenon out in space. It can travel back and forth from the great unknown back to the Nhumela Cluster for repairs."
            },
            {
              name: "GristelZ1A",
              desc: "The second satellite. Uses the same Camera Array, but it has 250MP. However, it uses a thermal and heat signature array that detects heatwaves and body signatures of any space-like object. Launched on Griselmber 5th. This was how Schavel was found. It can be recalled back and forth too, much like CalderiaX."
            },
          ].map(({ name, desc }) => (
            <div key={name} className="border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#0f0d0c]">
              <h4 className="font-display text-base text-[#f2ebeb] mb-2">{name}</h4>
              <p className="font-body text-sm text-[#7a746e] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Discoveries */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Discoveries</h2>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">
            The First <Link to="/world/databases/TheNhumelaCluster/PlanetSchavel" className="hover:underline">Schavel</Link> Expedition &mdash; Year 2000
          </h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The most monumental milestone in HetraSEAP&apos;s history was the <strong>First Schavel Expedition</strong>, launched in Hetra Year 2000. With growing confidence from the success of both the CalderiaX and GristelZ1A satellite missions, the scientific community of <strong>Eldreule</strong> partnered directly with HetraSEAP to send the first crewed vessel toward <strong>Planet Schavel</strong>, the rogue world that had drifted into the Nhumela Cluster and was placed onto the system&apos;s vertical orbital axis by the Spirit of Creation, <Link to="/characters/ZohlCelestreule" className="text-[#f2ebeb] font-semibold hover:underline">Zohl</Link> himself.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Unlike the other planets in the Cluster, Schavel had already formed native animal life before the crew ever touched down. This made the mission significantly more viable from a survival and environmental standpoint. The crew landed successfully, made first contact with Schavel&apos;s conditions and ecosystems, and began laying the groundwork for every expedition that would follow.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Over the next decade, from <strong>Year 2000 to 2010</strong>, HetraSEAP dedicated a full research series to Schavel. They documented its <strong>540-day year</strong>, its <strong>15 months of 36 days each</strong>, and adapted Hetra&apos;s familiar 32/16 hour time system to the planet given their nearly identical sizes and rotational speeds. The geography, atmospheric conditions, and ecosystems were mapped in full. Moon <strong>Scavnar</strong>, a former comet that now permanently orbits Schavel and maintains the planet&apos;s spherical shape through its magnetic and orbital field, was also thoroughly studied during this period.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            All physical samples, environmental recordings, and documented findings from the Schavel expeditions have since been transported back to HetraSEAM. These collections form the backbone of the museum&apos;s interplanetary wing, serving as both public education and a living documentary of what life looks like beyond Hetra.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Aqualivia Sun and the Passion Star Classification</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            One of the earliest and most celebrated scientific findings preserved in HetraSEAM is the formal classification of the <Link to="/world/databases/TheNaturalLawOfSpaceTime/PassionStarFormation" className="text-[#c9a84c] hover:underline">Aqualivia Sun</Link> as a <strong>Passion Star</strong>, one of the rarest types of stars recorded in the known space-time continuum.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Unlike conventional stars, Passion Stars emit light so brilliantly and so gently that they can be looked at from open space without harm, and even from the surface of Planet Hetra, the Aqualivia Sun appears as a soft, iridescent glow of sky blue, teal, pink, orange, and red. It produces moderate heat, better light distribution, and significantly less radiation than a standard star, which directly contributes to the brightness and livability of Hetra&apos;s surface.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The reason behind its unique color traces back to a single element at its core: a <strong>Lyecerianite Core</strong>, a crystal geode that glows sky-blue and magenta and drives a process known as <strong>Bio-Lyceionic Fusion</strong>. This is where elemental particles and the Lyecerianite Core fuse together, keeping energy flowing in a laminar, torrent-like state that sustains the star&apos;s output without aggressive radiation spikes.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Aqualivia Sun measures roughly <strong>178,270 Heunix</strong> in size. Its gravitational waves extend horizontally, diagonally, and vertically, which is the reason planets in the Nhumela Cluster can orbit at entirely different angles around it. Passion Stars are extraordinarily long-lived and the Aqualivia Sun is not projected to burn out for at least <strong>51 million years</strong>.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Solar flares do occur from the Aqualivia Sun occasionally, but they typically dissipate within <strong>3 minutes or less</strong>. When these flares scatter across Planet Hetra&apos;s atmosphere, they produce vivid aurora borealis displays across the night sky. HetraSEAM houses scale models of the Aqualivia Sun alongside collected aurora recordings from across Hetra&apos;s continents.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">CalderiaX Discoveries: Dangerous Phenomena in Deep Space</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When the <strong>CalderiaX</strong> satellite launched due north away from the Aqualivia Sun, it was the first instrument to document dangerous deep-space phenomena far beyond the reach of the Nhumela Cluster. These discoveries remain some of the most significant in HetraSEAM&apos;s records.
          </p>

          <div className="border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#0f0d0c] space-y-3">
            <h4 className="font-display text-base text-[#f2ebeb]">Ionized Dark Implosion Bursts (IDIBs)</h4>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              IDIBs are classified as the most powerful and dangerous form of explosion that can occur in the space-time continuum. They rank above even Gamma Ray Bursts, Supernovas, and HZE Ions in their destructive potential. An IDIB occurs when a <strong className="text-[#f2ebeb]">Black Star</strong> fails to ionize and fuse, then collides with a massive supernova. The resulting collision collapses inward and causes an implosion stronger than a black hole. It pulls in dark matter, helium, hydrogen, carbon, and <strong className="text-[#f2ebeb]">Pheronic Cells</strong> from surrounding stars, triggering an unstable chain reaction that shoots beams of bright white light outward in every direction before the entire event disintegrates into itself.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Within those beams, the four pulled elements fuse into <strong className="text-[#f2ebeb]">Pheronic Plasma</strong>, a substance that destroys nearly anything in its path as it travels at faster-than-light speeds. Despite this, there is a strange silver lining to IDIBs: the excess plasma that lingers after the energy wave decreases has been recorded to occasionally spark new stars, clusters, and even universes. CalderiaX captured partial imaging of an IDIB event from a safe distance, and the original footage is preserved in HetraSEAM&apos;s deep-space archive.
            </p>
          </div>

          <div className="border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#0f0d0c] space-y-3">
            <h4 className="font-display text-base text-[#f2ebeb]">Black Stars</h4>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Black Stars are super-cold stellar objects, reaching temperatures of <strong className="text-[#f2ebeb]">-892K NF (Nullfrost)</strong>, far outside of the standard temperature metric used on Hetra. Their surfaces absorb all light, making them nearly invisible to standard optical imaging. They were first detected by CalderiaX through heat-signature anomalies rather than direct visual confirmation. HetraSEAM displays simulation models of Black Stars alongside the satellite data that first identified them.
            </p>
          </div>

          <div className="border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#0f0d0c] space-y-3">
            <h4 className="font-display text-base text-[#f2ebeb]">Time Vortexes</h4>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Time Vortexes are rotating masses of unstable space-time energy that appear and disappear throughout the continuum. They function as wormholes, pulling in planets, asteroids, comets, and even stars and sending them toward <strong className="text-[#f2ebeb]">Ellhumhellm</strong> for unknown reasons. Their coloring is shades of green, blue, and white from the light they absorb, and green lightning shoots from the vortex core.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Time Vortexes cannot form inside solar systems where planets and stars maintain stable orbital planes. The stability of the time in those systems acts as a natural repellent. However, they have been recorded appearing near impending IDIBs, where they can accelerate or slow the collapse depending on proximity. When Pheronic Plasma drizzles through a nearby Time Vortex, it creates a spiraling effect that has been described by HetraSEAM researchers as strangely beautiful.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">White Buffers: The Opposite of Black Holes</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            One of the most fascinating and well-documented passive phenomena in the space-time continuum is the <strong>White Buffer</strong>, the structural opposite of a black hole. Where black holes pull, consume, and destroy, White Buffers push outward and restore.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            At their core, White Buffers emit a dense pearl-white luminescence so full of light they appear almost solid from a distance. Wide rings of radiant energy drift outward in blooming waves rather than spiraling inward. The closer you approach, the more visible the individual streams of purified elements become, hydrogen, helium, carbon, and other restored particles flowing outward in gentle cascades.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            White Buffers absorb deteriorated matter, corrupted particles, decayed stardust, and depleted elemental energy. What they expel is the clean, restored version of those same elements, scattered back into the continuum. This function makes the space surrounding a White Buffer unusually element-rich, and those regions are considered prime zones for new star formation.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A natural boundary called the <strong>Passive Threshold</strong> protects living and stable objects from absorption. Planets in healthy orbits, active stars in fusion, and even Cosmic Parasites drifting nearby are gently pushed away rather than consumed. Ships that drift too close without degraded matter simply drift back, calm and unbothered.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            White Buffers are predominantly found in <strong>The Pure Zone</strong> of the space-time continuum. In rare cases, one forming near the border of the <strong>Molten Ring Disk</strong> will slowly neutralize the corrupted dark matter leaking from the Dark Zone, cleaning the edges without disrupting the Dark Zone&apos;s function. Scholars of Hetra theorize that White Buffers are among the oldest objects in the continuum, with no natural end state, continuing to give back as long as deteriorated matter exists for them to process.
          </p>
        </div>

        <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">The HetraSEAM museum isn&apos;t just a catalog. It gives humanity the proper information of what goes out beyond the Nhumela Cluster in space.</p>
        </blockquote>
      </div>        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
                  <Link to="/world/locales" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Locales &amp; Sights</p>
            </div>
          </Link>
                  <Link to="/world/locales/AQTFC" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">Adventurer Quarters Task Force Centre</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
      </div>

    </div>
  );
}
