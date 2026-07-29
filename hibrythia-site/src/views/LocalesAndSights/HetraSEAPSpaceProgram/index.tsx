import { Link } from 'react-router-dom';

export default function HetraSEAPSpaceProgram() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          Locales &amp; Sights / HetraS.E.A.P Space Program
        </p>

        {/* Hero */}
        <div className="space-y-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">HetraS.E.A.P &mdash; Space Program</h1>

          {/* Callout */}
          <div className="border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#0f0d0c]">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              <span className="font-display text-[#f2ebeb]">The Hetranian Space Exploration &amp; Aeronautics Program</span> is Hetra&apos;s premier government-funded space agency dedicated to the exploration, study, and colonization of the Nhumela Cluster and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ HetraSEAP &mdash; Image Placeholder ]</p>
      </div>

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Overview</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The <strong>Hetranian Space Exploration &amp; Aeronautics Program</strong>, commonly known as <strong>HetraS.E.A.P</strong>, is the leading interplanetary space agency of Planet Hetra. Headquartered in the city of <strong>New Rynels</strong> on the continent of Rynel, HetraSEAP operates as a government-funded program responsible for the exploration and documentation of the <strong>Nhumela Cluster</strong>, the home solar system of Planet Hetra.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          With access to cutting-edge technology and close collaboration with scientific institutions, most notably the scientists of <strong>Eldreule</strong> (City of Science, Lynneria), HetraSEAP has been central to normalizing space travel across the solar system. As of the current year <strong>2245 A.D.</strong>, interplanetary transportation between Hetra and its neighboring inhabited planet, <strong>Planet Schavel</strong>, is a routine part of life.
        </p>
      </div>

      {/* Headquarters */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Headquarters</h2>
        <p className="font-body text-sm text-[#4a4844] tracking-widest uppercase mb-2">Location: New Rynels, Rynel Continent, Planet Hetra</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          New Rynels is the largest coastline city on Planet Hetra and is considered the economic and infrastructural capital of the world. Its vast wealth (home to individuals with net-worths reaching into the quadrillions) and its concentration of entrepreneurs, engineers, and high-paying institutions made it the natural home of HetraSEAP. The city&apos;s resources and global reach allow HetraSEAP to fund large-scale missions with consistent backing.
        </p>
      </div>

      {/* History & Founding */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">History &amp; Founding</h2>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The First Space Age &mdash; Before Year 2000</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The origins of HetraSEAP trace back to Hetra&apos;s <strong>First Space Age</strong>, founded in 1975, a period of explosive technological growth that preceded the Year 2000. As Hetra&apos;s global civilization advanced, the scientific community, led primarily by researchers from the City of <strong>Eldreule</strong> on the continent of Lynneria, began developing the technology necessary for interplanetary travel.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            As rocketry and propulsion science matured, the need for a centralized, government-level space agency became clear. HetraSEAP was formally established and funded through New Rynels, bringing together the brightest minds from across Hetra to pursue a singular mission:
          </p>
          <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
            <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">Reach the stars.</p>
          </blockquote>
        </div>

        {/* Deep Explorations */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Deep Explorations</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Space Exploration is currently confined in the Nhumela Cluster because the fuel is only limited to this range. However, HetraSEAP has sent long range missions deep into space with rocket satellites to explore more of the outer known. Camera Rocket Satellites have been sent further, which only uses the power of solar light to travel around further in the great unknown. Most of these satellites are named after the names of the calendar.
          </p>
          <div className="grid gap-3">
            {[
              {
                name: "CalderiaX",
                desc: "The first satellite that uses both solar and lunar energy to get around. It has a 350-Megapixel Camera Array built into it. Launched on Calderia 12th. The direction this satellite went was due north, away from the sun. This satellite discovered nearly dangerous phenomena out in space. It can travel back and forth from the great unknown back to the Nhumela Cluster for repairs."
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

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The First Schavel Expedition &mdash; Year 2000</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The most monumental milestone in HetraSEAP&apos;s history was the <strong>First Schavel Expedition</strong> in Hetra Year 2000. Scientists from Eldreule partnered directly with HetraSEAP to launch the first crewed mission to <strong>Planet Schavel</strong>, a rogue planet that had drifted into the Nhumela Cluster and was placed on the solar system&apos;s vertical orbital axis by the Spirit of Creation, <strong>Zohl</strong>.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Schavel had already developed native animal life prior to the expedition, which made the mission significantly more viable. The first crew successfully landed, made contact with the planet&apos;s environment, and laid the groundwork for future visits.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Studying Schavel &mdash; Years 2000 to 2010</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Over the following decade, HetraSEAP dedicated intensive research missions to Schavel. Among the primary objectives were:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>Documenting the planet&apos;s time system:</strong> Schavel operates on a 540-day year with 15 months of 36 days each, a notably different system from Hetra&apos;s 444-day year.</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>Adapting Hetra&apos;s 32/16 hour system</strong> to Schavel, given that the planets share nearly identical sizes and rotational speeds.</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>Mapping the planet&apos;s geography,</strong> ecosystems, and atmospheric conditions.</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>Studying Moon Scavnar,</strong> Schavel&apos;s companion moon, a former comet that now maintains the planet&apos;s perfect spherical shape through its magnetic and orbital field.</li>
          </ul>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            By the end of this period, Schavel had been fully named and documented, and the first wave of Hetranian emigrants began settling on the planet.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When Schavel falls through the horizontal orbit, it meets Hetra at a safe distance where the planet can be seen from the surface of Hetra and Schavel itself. The gravitational waves between these two planets will not interfere with each other because the distance is greater in the goldilocks zone.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In some regions of the green zone and at a certain point in time, Planet Schavel will meet closely with Hetra without causing any gravitational disturbance. You can see Schavel up close with the naked eye when the time comes.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Normalization of Space Travel &mdash; 2010 to Present (2245+)</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Following the success of the Schavel expeditions, including CalderiaX and GristelZ1A, HetraSEAP oversaw the development of commercial and civilian space travel. The journey between Hetra and Schavel takes approximately <strong>two days</strong>, and a standard time adjustment period is required upon arrival due to the difference in planetary time systems. There is also a Space Tour.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Today, the population of Hetranian-born citizens living on Schavel is significant enough that a distinct cultural identity has formed. People who live on Schavel are known as <strong>&ldquo;Schavelia-Hetrans.&rdquo;</strong> HetraSEAP continues to manage and oversee the routes, safety protocols, and scientific monitoring of all interplanetary travel.
          </p>
        </div>
      </div>

      {/* Space Tour */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">HetraSEAP Space Tour</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          This fun space activity was implemented in the year 2150 AD. It uses Lhureanium as a source of renewable fuel and energy. This fuel is a special kind bio-chemical that is used for Hyperspace Travels and for these kinds of space tours. Lhureanium uses a mix of hexicules, lunar energy, plasma, and Vesselyte Crystals.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Hetranians and also Schavelia-Hetrans will need to make a reservation to book a ticket which costs <strong>Ħ75.85 Hetrix Dollars</strong>. Schavelia-Hetrans will need to emigrate back to Hetra for this tour, since Planet Schavel doesn&apos;t have nearly as enough resources as Hetra. Don&apos;t worry, people make it in time for this. There&apos;s a huge window before the liftoff.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A Spaceship is prepared in The Gulf of New Rynels, where a massive platform floats on the water. This ship is called the <strong>United Hetral Shuttle Spaceship</strong>, or the <strong>UHSS</strong>. It will take you on a massive tour of the Nhumela Cluster using a stable drive. There are multiple checkpoints within the solar system which allows the ship to halt. There is a sundeck on this ship that you can view the open space from within.
        </p>
      </div>

      {/* Known Missions Table */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Known Missions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#2e2b26]">
                <th className="font-display text-xs text-[#4a4844] tracking-widest uppercase text-left py-3 pr-4">Mission Name</th>
                <th className="font-display text-xs text-[#4a4844] tracking-widest uppercase text-left py-3 pr-4">Year</th>
                <th className="font-display text-xs text-[#4a4844] tracking-widest uppercase text-left py-3 pr-4">Destination</th>
                <th className="font-display text-xs text-[#4a4844] tracking-widest uppercase text-left py-3">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  mission: "CalderiaX Launch",
                  year: "Pre-2000 (Calderia 12th)",
                  dest: "Deep Space (Due North)",
                  outcome: "First satellite launched by HetraSEAP. Solar and lunar powered with a 350MP Camera Array. Explored outer space due north, away from the Aqualivia Sun."
                },
                {
                  mission: "GristelZ1A Launch",
                  year: "Pre-2000 (Griselmber 5th)",
                  dest: "Deep Space / Nhumela Cluster",
                  outcome: "Second satellite. 250MP Camera Array with a thermal and heat signature detection system. Responsible for the initial discovery of Planet Schavel."
                },
                {
                  mission: "First Schavel Expedition",
                  year: "2000 A.D.",
                  dest: "Planet Schavel",
                  outcome: "Successful landing; first contact with Schavel's environment. Planet formally named and documented."
                },
                {
                  mission: "Schavel Research Series",
                  year: "2000\u20132010 A.D.",
                  dest: "Planet Schavel",
                  outcome: "Full time system study, geological mapping, and Moon Scavnar research. Paved the way for colonization."
                },
              ].map(({ mission, year, dest, outcome }) => (
                <tr key={mission} className="border-b border-[#2e2b26]/50">
                  <td className="font-display text-sm text-[#f2ebeb] py-3 pr-4 align-top">{mission}</td>
                  <td className="font-body text-sm text-[#7a746e] py-3 pr-4 align-top whitespace-nowrap">{year}</td>
                  <td className="font-body text-sm text-[#c8c2ba] py-3 pr-4 align-top">{dest}</td>
                  <td className="font-body text-sm text-[#7a746e] py-3 align-top leading-relaxed">{outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Planetary Research Targets */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Planetary Research Targets: Nhumela Cluster</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Beyond Schavel, HetraSEAP has documented and studied all known planets within the <strong>Nhumela Cluster</strong>, the home solar system of Planet Hetra, which orbits the <strong>Aqualivia Sun</strong>, a rare Passion Star known for its iridescent sky-blue and teal glow.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#2e2b26]">
                <th className="font-display text-xs text-[#4a4844] tracking-widest uppercase text-left py-3 pr-4">Planet</th>
                <th className="font-display text-xs text-[#4a4844] tracking-widest uppercase text-left py-3 pr-4">Position</th>
                <th className="font-display text-xs text-[#4a4844] tracking-widest uppercase text-left py-3 pr-4">Status</th>
                <th className="font-display text-xs text-[#4a4844] tracking-widest uppercase text-left py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  planet: "Netryl",
                  pos: "1st from Sun",
                  status: "Uninhabitable",
                  notes: "One side scorching hot, the other frozen. Cannot rotate due to cold-side magnetic pull. No moons."
                },
                {
                  planet: "Ackpek",
                  pos: "2nd from Sun",
                  status: "Uninhabitable",
                  notes: "Gas planet, hued-green with blue and yellow mixtures. Red spot near center. No moons."
                },
                {
                  planet: "Hetra",
                  pos: "3rd from Sun",
                  status: "Inhabited",
                  notes: "HetraSEAP's home planet. Super-planet in the Goldilocks Zone. Moons: Anzeya and Zenya."
                },
                {
                  planet: "Schavel",
                  pos: "4th / 1st (Vertical)",
                  status: "Inhabited",
                  notes: "Rogue planet on vertical orbital axis. Also in the Goldilocks Zone. Moon: Scavnar."
                },
                {
                  planet: "Quilk",
                  pos: "5th from Sun",
                  status: "Uninhabitable",
                  notes: "Ice, water, and methane composition. Extreme cold, reaching below -55 Helphieus. No moons."
                },
                {
                  planet: "Ackteq",
                  pos: "6th from Sun",
                  status: "Unknown",
                  notes: "Orbits at a 45\u00b0 angle. Ackteqrium core, gas surface. Bizarre composition."
                },
              ].map(({ planet, pos, status, notes }) => (
                <tr key={planet} className="border-b border-[#2e2b26]/50">
                  <td className="font-display text-sm text-[#f2ebeb] py-3 pr-4 align-top">{planet}</td>
                  <td className="font-body text-sm text-[#7a746e] py-3 pr-4 align-top whitespace-nowrap">{pos}</td>
                  <td className="py-3 pr-4 align-top">
                    <span className={`font-body text-xs tracking-widest uppercase px-2 py-1 rounded-sm ${
                      status === "Inhabited"
                        ? "bg-[#1a2e1a] text-[#6ab06a] border border-[#2e4a2e]"
                        : status === "Unknown"
                        ? "bg-[#2a2820] text-[#c9a84c] border border-[#3a3620]"
                        : "bg-[#2e2b26] text-[#4a4844] border border-[#3a3830]"
                    }`}>{status}</span>
                  </td>
                  <td className="font-body text-sm text-[#7a746e] py-3 align-top leading-relaxed">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The H.O.S.S */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The H.O.S.S &mdash; Hetranian Orbital Space Station</h2>

        <div className="space-y-4">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The H.O.S.S is Hetra&apos;s first Orbital Space Station. It isn&apos;t just a station, it is a piece of technology that is a part of HetraSEAP&apos;s program, along with brands and products at an infrastructure level of production. The H.O.S.S is backed by <strong>Philstra Rhys</strong> himself (who so funded HetraSEAP) which costed nearly <strong>Ħ10.35 trillion hetrix</strong> to build.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            All station parts are made one by one per each unit down on Hetra, and is later deployed using the UHSS.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Each of the parts of H.O.S.S are deployed piece by piece to Hetra&apos;s orbit by the UHSS (United Hetral Shuttle Spaceship) when it&apos;s not being used for tourism, which is then assembled in orbit.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-base text-[#f2ebeb] mb-3">H.O.S.S Station Tech Specs</h4>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">105,550 eXpH based on Hexicule Energy. Renewable by Solar, Lunar, and Stellar energy.</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">Carries up to 23 TB of storage and information which could be relayed back to HetraSEAP.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-base text-[#f2ebeb] mb-3">What it&apos;s made out of</h4>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Made out of Hardwood Lucid Metal, Nitinol infused Copper Tungsten for heat reformation and damage reformation. This is an Artificial metal alloy which is called <strong>Ossitanium-24</strong>. It sits on the Periodic Table in Hetra&apos;s custom periodic elements. Ossitanium-24 can be shortened to <strong>Oss24</strong>. Non-corrosive and is super resistant to the cold.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The H.O.S.S orbits around Planet Hetra, matching the planet&apos;s rotational speed. This piece of technology serves as a station deployment for space satellites and other technological innovation. Since the H.O.S.S orbits the planet matching its speed, it uses the same time system depending on the timezone it orbits (lands in).
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Communication between HetraSEAP and the space station is super fast because the networking system within uses an enhanced network of Wifi-7 known as <strong>HOSSNet-8</strong>.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The space station is bigger than Earth&apos;s ISS, roughly around six football fields in size. It has a platform so flat and around, most rocketry and tech are made on the H.O.S.S without having to go back to New Rynels. This platform is called the <strong>HOSS Innovation Deck</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>H.O.S.S Dimension Specs</strong></p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">630 Meters Long</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">408 Meters Wide</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">560 Meters Tall</li>
          </ul>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            HOSS Innovation Deck: it runs at exactly 292 ft x 167 ft which makes it a perfect platform to engineer and invent spacecraft and more.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Of course, it runs on Hexicule Power, combined with solar, lunar, and stellar energy. The hexicules can be seen on both the top and bottom of the HOSS and they shine a very nice color in space. It would sometimes leave a trail of pink light near Hetra&apos;s atmosphere like a ring of light which slowly fades away when the light dissolves. The trail of pink light is visible down on the planet&apos;s surface and is very faint.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>HOSS Satellites</strong></p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">CalderiaX</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">GristelZ1A</li>
          </ul>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The H.O.S.S serves not just as a laboratory but also has its own rockets that help ship materials back and forth from New Rynels on Hetra so that all space technology can be made. There are currently <strong>five astronauts</strong> and <strong>ten scientists</strong> living aboard the station.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-base text-[#f2ebeb] mb-3">Natural Gravity on the H.O.S.S</h4>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Station itself has natural gravity since it orbits the planet matching the rotational speed. The station itself has a type of technology called <strong>MagGrav</strong>, a piece of Magnetic Hexicule Suspension that is synced (or linked) to Planet Hetra&apos;s orbital field and spin. Since most of Planet Hetra has raw hexicule energy near its core, the condensation of that energy is pure and stable.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The MagGrav detects that kind of energy and locks it in as it own gravity system for the station itself. It will feel like you&apos;re walking on Planet Hetra despite being on the station. The north and south magnetic fields from the planet are also attached to the MagGrav which puts it in a stable position in a stable orbital plane.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The MagGrav can be turned on and off depending on situations that require extensive study, and can also be simulated to different levels.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-base text-[#f2ebeb] mb-3">Artificial Atmosphere on the H.O.S.S</h4>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Among the H.O.S.S&apos;s other technology, scientists have engineered Artificial Atmosphere by pulling the planets&apos; natural elements of carbon, hydrogen, oxygen and nitrogen into the station by creating a &ldquo;bubble like wrap&rdquo; that coats around the whole station. This bubble like atmosphere is called <strong>HOSS Airfield</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-base text-[#f2ebeb] mb-3">HOSS Laser Array</h4>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The HOSS Laser Array is pre-built into the station and can be rotated 360 in all directions. This helps with space exploration and deep space identification. It looks like a giant camera&apos;s lens and has up to 100 different kinds of mirrors and glass which makes it super powerful. The laser array doesn&apos;t shoot out normal red infrared light. It shoots out <strong>Hetranium-Hexicule light energy</strong>, a pink like infrared light that is not harmful (since it&apos;s powered by a Hetranium Hexicule Core).
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The laser array has been used multiple times, detecting strange space phenomena and sending information of it back to HetraSEAP. The data down in Hetra is then processed into viable information for HetraSEAP&apos;s Space Museum, HetraSEAM.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-base text-[#f2ebeb] mb-3">The H.O.S.S Autopilot Assistant</h4>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            H.O.S.S doesn&apos;t run on human pilots. It has it&apos;s own AI agent named <strong>Agent Hoss</strong>, which helps steer and maintain the station&apos;s speed and stability. Agent Hoss is different from Giatus since it&apos;s main directives are different than it&apos;s surface counterpart. Agent Hoss has a very distinct personality: dad jokes, space facts, and a very gentleman tone.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>Agent Hoss Directives</strong></p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">Help maintain the station&apos;s control and stability</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">Configure the MagGrav and the Airfield</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">Enhance, Repair and Fix certain tech issues. It guides the scientists on board and tells them how to prevent further issues.</li>
            <li className="font-body text-base text-[#c8c2ba] leading-relaxed">Inject smaller agents into different satellites or probes with clearer, distinct directives.</li>
          </ul>
        </div>
      </div>

      {/* Each Planet has its own H.O.S.S */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Each Planet has its own H.O.S.S</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Planet Hetra&apos;s H.O.S.S is the main station out in The Nhumela Cluster. It&apos;s also the main station for Planet Schavel that sits vertically in the Goldilocks zone. And each planet gets its own H.O.S.S Station. These stations also serve as checkpoints for the Space Tour.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>H.O.S.S Netryl</strong> &mdash; Orbitally locked to the cold side. The intense heat from the scorching side will fry and melt all technological devices, including the Airfield.</li>
          <li className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>H.O.S.S Ackpeck</strong> &mdash; Planet Ackpeck gets its own H.O.S.S Station. It sits close to the planet in orbit.</li>
          <li className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>H.O.S.S Quilk</strong> &mdash; Also has its own H.O.S.S Station. It rotates along the vertical orbit of the planet.</li>
          <li className="font-body text-base text-[#c8c2ba] leading-relaxed"><strong>H.O.S.S Ackteq</strong> &mdash; Another H.O.S.S Station for the last planet of the solar system.</li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Each of these H.O.S.S Stations help deploy missions to each of the planets surface to study. Although these four planets are uninhabitable, all data and information are relayed back to H.O.S.S Hetra.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Planet Hetra&apos;s HOSS isn&apos;t just a space station. It&apos;s a station where scientists and astrophysicist nerds come together to explore the great unknown.
        </p>
      </div>

        {/* Bottom Nav */}
        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
          <Link to="/world/locales" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Locales & Sights</p>
            </div>
          </Link>
        </div>

    </div>
  );
}

