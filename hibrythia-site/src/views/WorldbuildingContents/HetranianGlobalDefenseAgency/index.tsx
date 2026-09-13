import { Link } from "react-router-dom";

// ─── Small helpers (defined above the main export) ───────────────────────────

function GoldLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-[#c9a84c] hover:underline">
      {children}
    </Link>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{children}</p>
    </div>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{children}</p>;
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="text-[#f2ebeb] font-medium">{children}</span>;
}

const seeAlso = [
  { to: "/world/locales/lynneria", label: "The Continent of Lynneria" },
  { to: "/world/locales/rynel", label: "The Continent of Rynel" },
  { to: "/world/locales/eulerich", label: "The Continent of Eulerich" },
  { to: "/world/databases/EconomyOfPlanetHetra", label: "Economy of Planet Hetra" },
  { to: "/world/locales/HetraSEAPSpaceProgram", label: "HetraSEAP" },
  { to: "/world/locales/HetraSEAMSpaceMuseum", label: "HetraSEAM" },
  { to: "/world/locales/AQTFC", label: "Adventurer Quarter Task Force Centre" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HetranianGlobalDefenseAgency() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/world/databases"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to World Databases
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          III. The Inner Gears
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">&#128660; The Hetranian Global Defense Agency</h1>

        {/* Callout */}
        <div className="flex gap-4 items-start bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5">
          <span className="text-2xl shrink-0">&#128660;</span>
          <Para>
            The <Strong>Hetranian Global Defense Agency</Strong>, also known as <Strong>HetraGDA</Strong>, is an international police task force that operates across Planet Hetra. Its purpose is to protect populated regions, investigate crimes, enforce regional laws, and allow police departments from different parts of the world to collaborate with one another.
          </Para>
        </div>
      </div>

      {/* ── The HetraGDA ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The HetraGDA</h2>
        <Para>
          HetraGDA has departments and police buildings located in population-dense cities, districts, and kingdoms. Each department carries its own regional name, branch identity, and issued badge, but all departments remain connected to the larger global agency.
        </Para>
        <Para>
          The primary base of operations for HetraGDA is located in <GoldLink to="/world/locales/rynel">New Rynels, Rynel</GoldLink>. This headquarters oversees worldwide police records, intercontinental investigations, department registrations, and communications between every active branch. It is another prominent global force alongside <GoldLink to="/world/locales/HetraSEAPSpaceProgram">HetraSEAP</GoldLink>, <GoldLink to="/world/locales/HetraSEAMSpaceMuseum">HetraSEAM</GoldLink>, and the <GoldLink to="/world/locales/AQTFC">AQTFC</GoldLink>.
        </Para>
        <Para>
          HetraGDA is financially backed by <GoldLink to="/characters/PhilstraRhys">Philstra Rhys</GoldLink>, with the agency standing at a total valuation of approximately <GoldLink to="/world/databases/EconomyOfPlanetHetra">&#294;24.55 quintillion Hetrix</GoldLink>. This funding supports police facilities, transportation, officer equipment, worldwide databases, badge production, and the advanced security systems used by every registered department.
        </Para>
      </section>

      {/* ── Jurisdiction and Regional Operations ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Jurisdiction and Regional Operations</h2>
        <Para>
          Unlike the AQTFC, HetraGDA departments can only operate within populated jurisdictions. This includes cities, towns, districts, kingdoms, public roads, and other regions recognized as part of organized civilization.
        </Para>
        <Para>
          A police department cannot freely operate beyond its assigned jurisdiction without first collaborating with the department responsible for the neighboring region. Officers may still communicate, exchange records, share warrants, and participate in joint investigations. However, they must follow the authority and laws of whichever district or kingdom they enter.
        </Para>
        <Para>
          HetraGDA officers are generally prohibited from entering the <GoldLink to="/world/locales/lynneria">Wildernaught Wilds</GoldLink> for ordinary police work. The Wilderness is inhabited by monsters, creatures, dangerous beasts, and other threats that regular police units are not equipped to confront. Any case that crosses beyond a protected district border is transferred to the <GoldLink to="/world/locales/AQTFC">Adventurer Quarter Task Force Centre</GoldLink>.
        </Para>
        <p className="font-body text-base text-[#7a746e] leading-relaxed">This creates a clear separation between the two organizations:</p>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          <Bullet><Strong>HetraGDA</Strong> protects populated regions from crime and civil threats.</Bullet>
          <Bullet><Strong>The AQTFC</Strong> protects district borders and handles dangers originating from the Wilderness.</Bullet>
          <Bullet>Both organizations may collaborate when a criminal escapes into the Wilderness or when a creature-related threat reaches a populated district.</Bullet>
          <Bullet>HetraGDA officers cannot accept AQTFC missions unless they also possess a registered HetraID and the required adventurer qualifications.</Bullet>
        </div>
      </section>

      {/* ── Police Departments of Lynneria ── */}
      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Police Departments of Lynneria</h2>
          <Para>
            Because <GoldLink to="/world/locales/lynneria">Lynneria</GoldLink> is divided into several fortified districts, each district operates its own HetraGDA police department. The district walls establish clear boundaries between police jurisdictions, while the connected roads allow neighboring departments to collaborate when necessary.
          </Para>
        </div>

        {/* Riverchnaut */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 space-y-4 hover:border-[#c9a84c]/40 transition-colors">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Riverchnaut Departments</h3>
          <Para>The country of <Strong>Riverchnaut</Strong> contains three major police departments:</Para>
          <div className="space-y-2 pl-2">
            <Bullet><Strong>Kharphan Executive Police Department</Strong></Bullet>
            <Bullet><Strong>Lenoria Police Department</Strong></Bullet>
            <Bullet><Strong>Eldreule District Police Department</Strong></Bullet>
          </div>
          <Para>
            The <Strong>Kharphan Executive Police Department</Strong>, commonly shortened to <Strong>KEPD</Strong>, serves the District of Kharphan and its main city. It handles criminal investigations, public safety, airship traffic incidents, commercial disputes, and activity surrounding Kharphan&apos;s busy entertainment and tourism industries.
          </Para>
          <Para>
            The <Strong>Lenoria Police Department</Strong> operates throughout Lenoria&apos;s inner city and its many outer towns. Because Lenoria is home to numerous races, cultures, caf&eacute;s, confectioneries, and marketplaces, its officers receive additional training for cultural disputes and community-based policing.
          </Para>
          <Para>
            The <Strong>Eldreule District Police Department</Strong> operates within Riverchnaut&apos;s district capital. Eldreule&apos;s cybermagic technology, robots, film industry, and hyperspace research require officers who are familiar with magical technology, artificial intelligence, digital crimes, and high-security scientific facilities.
          </Para>
        </div>

        {/* Nharvenile */}
        <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 space-y-4 hover:border-[#c9a84c]/40 transition-colors">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Nharvenile Departments</h3>
          <Para>The country of <Strong>Nharvenile</Strong> contains active departments in:</Para>
          <div className="space-y-2 pl-2">
            <Bullet>Grelladore District</Bullet>
            <Bullet>Quentyn District</Bullet>
            <Bullet>Ironbark District</Bullet>
          </div>
          <Para>
            Grelladore&apos;s department works closely with scientific institutions, libraries, the Governor&apos;s Building, and security forces surrounding the <GoldLink to="/world/locales/skypeak-obelisk">Skypeak Obelisk</GoldLink>. The department may collaborate with the AQTFC, but it does not control the Obelisk&apos;s internal security. That responsibility belongs to the Obelisk&apos;s own systems and the <Strong>Obelisk Transportation Security Administration</Strong>.
          </Para>
          <Para>
            Quentyn&apos;s department primarily protects East City Harbor and monitors underwater transportation routes. Ironbark&apos;s department protects its university, museums, research centers, and the many students and scholars living within the district.
          </Para>
          <Para>
            A HetraGDA department was once active in <Strong>Amberwick</Strong>, but it stopped operating after the district was overtaken by the Demon Witch Rachnaea. Its former jurisdiction is no longer recognized as safe for ordinary police activity. Any operation within Amberwick requires specialized forces, adventurers, and authorization from outside the district.
          </Para>
        </div>
      </section>

      {/* ── The Eulerich Police Department and Military Services ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Eulerich Police Department and Military Services</h2>
        <Para>
          <GoldLink to="/world/locales/eulerich">Eulerich</GoldLink> operates differently from Lynneria. Since the continent does not contain the same number of dangerous creatures, its cities and kingdoms are not separated by fortified district walls. Because of this, Eulerich does not require several individual police departments.
        </Para>
        <Para>
          Instead, the continent is protected by a single shared department known as the <Strong>Eulerich Police Department and Military Services</Strong>, shortened to <Strong>EPDMS</Strong>.
        </Para>
        <Para>
          The EPDMS is positioned near the border between the <Strong>Eulan Kingdom</Strong> and the <Strong>Oelen Kingdom</Strong>, allowing it to serve both royal territories. Its central location gives officers access to the trading roads leading between Eulanis, Endriel, Oelenis, and the smaller towns throughout the continent.
        </Para>
        <Para>
          The department works alongside several military outposts positioned across Eulerich. Police officers handle civil crimes, investigations, trade disputes, and public safety, while military personnel protect royal borders, mining operations, ancient ruins, and areas occupied by monsters.
        </Para>
        <Para>
          This shared system also prevents either kingdom from holding complete control over the continent&apos;s police force. The EPDMS serves both royal families and acts as a neutral law-enforcement body between the Briehale and Eckhart monarchies.
        </Para>
      </section>

      {/* ── Rynel's GDA Department ── */}
      <section className="space-y-4">
        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Rynel&apos;s GDA Department</h3>
        <Para>
          The Continent of Rynel doesn&apos;t have just its own department&mdash;this is where the main headquarters building is located. It is called the HetraGDA Headquarters, or HGDA-HQ for short.
        </Para>
        <Para>
          It serves as the central command facility for the <Strong>Hetranian Global Defense Agency</Strong>, acting as the nerve center that every department across the planet answers to. Whether it is the Kharphan Executive Police Department in Lynneria or the Eulerich Police Department and Military Services, all branches route their oversight, records filing, officer registration, badge issuance, and case escalations through this building.
        </Para>
        <Para>
          Street-level policing falls outside the headquarters&apos; scope. It operates on a strategic and administrative level instead, tracking the broader state of law enforcement across all continents, coordinating between departments that span different jurisdictions, maintaining the global warrant and track record database, and serving as the final authority whenever interdepartmental disputes require resolution.
        </Para>
      </section>

      {/* ── HetraGDA Police-Issued Badges ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">HetraGDA Police-Issued Badges</h2>
        <Para>
          Every officer registered under HetraGDA receives an advanced police badge connected to the agency&apos;s global information network. The shape, colors, lettering, and branch name of each badge change depending on the officer&apos;s department and jurisdiction.
        </Para>
        <Para>
          A Kharphan officer&apos;s badge, for example, displays the initials <Strong>KEPD</Strong> and identifies the officer as a member of the Kharphan Executive Police Department.
        </Para>
        <Para>
          Each badge contains a retractable holographic screen. Pressing and pulling the release button causes the screen to slide outward from the side of the badge. The mechanism can fling the screen open, but it cannot automatically pull it back inside. The officer must activate the retracting mechanism to close it securely.
        </Para>
        <Para>
          The screen is made from flexible LCD materials and powered by a small Hexicule Core. It can rotate regardless of how the badge is being held, allowing officers to present information from different angles.
        </Para>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] pt-2">The digital screen can display:</p>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {[
            "Officer information",
            "Department and branch registration",
            "Active warrants",
            "Police history",
            "Past records and assignments",
            "Professional affiliations",
            "Hibryd affiliations",
            "Jurisdiction clearance",
            "Identification photographs",
            "Interdepartmental authorization",
          ].map((item, i) => (
            <Bullet key={i}>{item}</Bullet>
          ))}
        </div>
        <Para>
          The back of the badge contains a reusable adhesive substance that can attach to fabric, armor, uniforms, vehicles, walls, and other solid surfaces. It can even attach to surfaces with very little friction. However, the substance cannot stick to human skin or exposed flesh, preventing the badge from becoming painful or dangerous when worn.
        </Para>
        <Para>
          Because the badge is connected to HetraGDA&apos;s worldwide police network, it cannot be legally transferred to another individual. If a badge is stolen, dismissed from the network, or reported missing, its screen becomes inaccessible and its department identification is immediately flagged.
        </Para>
      </section>

      {/* ── See Also ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">See Also</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {seeAlso.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="group flex items-center justify-between gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200"
            >
              <span className="font-display text-sm text-[#f2ebeb] group-hover:text-[#c9a84c] transition-colors">{item.label}</span>
              <span className="text-[#c9a84c] text-lg opacity-0 group-hover:opacity-100 transition-opacity">&#8594;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/databases/WeatherClimateSeasons"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Weather, Climate &amp; Seasons</p>
          </div>
        </Link>
        <Link
          to="/world/databases/CalendarAndTime"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Calendar &amp; Time &mdash; The 32-Hour System</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
