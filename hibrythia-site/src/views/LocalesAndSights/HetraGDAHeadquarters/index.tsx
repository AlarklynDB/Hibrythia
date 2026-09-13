import { Link } from "react-router-dom";

// ─── Small helpers (defined above the main export) ───────────────────────────

function GoldLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-[#c9a84c] hover:underline">
      {children}
    </Link>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{children}</p>;
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="text-[#f2ebeb] font-medium">{children}</span>;
}

const functions = [
  { term: "Global Warrant Management", desc: "issuing, tracking, and closing active warrants across all registered departments" },
  { term: "Intercontinental Records", desc: "maintaining a centralized database of officer histories, criminal records, and case files from every department on Hetra" },
  { term: "Department Registration", desc: "approving new regional departments, assigning jurisdictions, and issuing official branch identifications" },
  { term: "Badge Production Oversight", desc: "coordinating with production facilities to supply every department with properly programmed, network-connected HetraGDA badges" },
  { term: "Interdepartmental Communications", desc: "facilitating official correspondence between departments that cannot independently communicate across jurisdictions" },
  { term: "Case Escalation Review", desc: "receiving and reviewing cases that exceed the capacity or jurisdiction of a regional department" },
];

const seeAlso = [
  { to: "/world/databases/HetranianGlobalDefenseAgency", label: "The Hetranian Global Defense Agency" },
  { to: "/world/locales/rynel", label: "The Continent of Rynel" },
  { to: "/world/locales/lynneria", label: "The Continent of Lynneria" },
  { to: "/world/locales/eulerich", label: "The Continent of Eulerich" },
  { to: "/world/databases/EconomyOfPlanetHetra", label: "Economy of Planet Hetra" },
  { to: "/world/locales/HetraSEAPSpaceProgram", label: "HetraSEAP" },
  { to: "/world/locales/HetraSEAMSpaceMuseum", label: "HetraSEAM" },
  { to: "/world/locales/AQTFC", label: "Adventurer Quarter Task Force Centre" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HetraGDAHeadquarters() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/world/locales"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Locales &amp; Sights
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Locales &amp; Sights
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">&#128640; HetraGDA Headquarters</h1>

        {/* Callout */}
        <div className="flex gap-4 items-start bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5">
          <span className="text-2xl shrink-0">&#128660;</span>
          <Para>
            The <Strong>HetraGDA Headquarters</Strong> is the central command facility of the <Strong>Hetranian Global Defense Agency</Strong>, located in <Strong>New Rynels, Rynel</Strong>. It serves as the nerve center for all worldwide police operations, intercontinental coordination, and agency-wide administrative functions across Planet Hetra.
          </Para>
        </div>
      </div>

      {/* ── Overview ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Overview</h2>
        <Para>
          The <Strong>HetraGDA Headquarters</Strong> is the primary base of operations for the <GoldLink to="/world/databases/HetranianGlobalDefenseAgency">Hetranian Global Defense Agency</GoldLink>. Every active department across the planet, from the Kharphan Executive Police Department in Lynneria to the Eulerich Police Department and Military Services, reports back to this building for oversight, records filing, officer registration, badge issuance, and case escalation.
        </Para>
        <Para>
          The headquarters does not handle street-level policing. Its role is strategic and administrative. It monitors the broader state of law enforcement across all continents, coordinates between departments that span different jurisdictions, manages the global warrant and track record database, and acts as the final authority when interdepartmental disputes arise.
        </Para>
      </section>

      {/* ── Location ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Location</h2>
        <p className="font-body text-xs text-[#7a746e] tracking-wider">
          <span className="text-[#f2ebeb]">Location:</span> New Rynels, Rynel Continent, Planet Hetra
        </p>
        <Para>
          <GoldLink to="/world/locales/rynel">New Rynels</GoldLink> is the largest coastline city in the entire world and the economic powerhouse of Planet Hetra. It is home to the wealthiest individuals on the planet and serves as the hub for entrepreneurship, space exploration, and high finance. Its global reach, dense population, and position as the city where Hetrix bills are minted made it the natural choice for HetraGDA&apos;s central command.
        </Para>
        <Para>
          The headquarters building sits within New Rynels alongside the offices and facilities of <GoldLink to="/world/locales/HetraSEAPSpaceProgram">HetraSEAP</GoldLink> and <GoldLink to="/world/locales/HetraSEAMSpaceMuseum">HetraSEAM</GoldLink>, forming a district of globally significant institutions in the city&apos;s core.
        </Para>
        <Para>
          The entire operation is financially backed by <GoldLink to="/characters/PhilstraRhys">Philstra Rhys</GoldLink>, with HetraGDA standing at a total valuation of approximately <GoldLink to="/world/databases/EconomyOfPlanetHetra">&#294;24.55 quintillion Hetrix</GoldLink>.
        </Para>
      </section>

      {/* ── Functions and Responsibilities ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Functions and Responsibilities</h2>
        <Para>
          The HetraGDA Headquarters is responsible for the full administrative and strategic operation of the agency on a planetary scale. Its core functions include:
        </Para>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          {functions.map((f, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                <Strong>{f.term}</Strong> &mdash; {f.desc}
              </p>
            </div>
          ))}
          <div className="flex gap-3 items-start">
            <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              <Strong>AQTFC Liaison</Strong> &mdash; coordinating with the <GoldLink to="/world/locales/AQTFC">Adventurer Quarter Task Force Centre</GoldLink> when criminal activity or creature-related threats cross the border between populated districts and the Wildernaught Wilds
            </p>
          </div>
        </div>
        <Para>
          The headquarters does not override a regional department&apos;s authority within its own jurisdiction. It steps in only when an escalation request is filed, when an interdepartmental conflict requires mediation, or when a threat operates across multiple jurisdictions simultaneously.
        </Para>
      </section>

      {/* ── The Global Badge Network ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Global Badge Network</h2>
        <Para>
          One of the most critical systems managed out of the HetraGDA Headquarters is the <Strong>Global Badge Network</Strong>, the digital infrastructure that connects every police-issued badge across the planet to a single live database.
        </Para>
        <Para>
          Every badge issued under HetraGDA is registered to the network at this headquarters. When a badge is activated, the holographic LCD screen pulls live data directly from the network, including the officer&apos;s current status, active warrants, jurisdictional clearance, and case assignments.
        </Para>
        <Para>
          If a badge is reported stolen, flagged for misconduct, or formally deactivated, the headquarters can remotely lock the badge&apos;s screen and remove it from the network in real time. A locked badge becomes non-functional and its identification is immediately invalidated across every department simultaneously.
        </Para>
        <Para>
          New badge registrations, department branch assignments, and officer profile updates all pass through the headquarters before they go live on the network.
        </Para>
      </section>

      {/* ── Relationship with Regional Departments ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Relationship with Regional Departments</h2>
        <Para>
          The HetraGDA Headquarters operates as the apex of a layered structure. Below it sit the regional departments, each with its own jurisdiction, officers, and command structure.
        </Para>
        <Para>
          Regional departments operate independently in their day-to-day work. The headquarters does not micromanage individual cases or assign street-level duties. However, every department submits regular reports to the headquarters, and any case that requires cross-jurisdictional authority must be cleared through New Rynels before proceeding.
        </Para>
        <Para>
          Currently active departments include those across <GoldLink to="/world/locales/lynneria">Lynneria</GoldLink> in both Riverchnaut and Nharvenile, and the <GoldLink to="/world/locales/eulerich">Eulerich</GoldLink> Police Department and Military Services, which serves both the Eulan and Oelen Kingdoms from a shared facility near the border between them.
        </Para>
        <Para>
          The department formerly active in <Strong>Amberwick</Strong> has been suspended indefinitely following the district&apos;s occupation by the Demon Witch Rachnaea. Its case files and officer records have been archived at the headquarters.
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
          to="/world/locales/skypeak-obelisk"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Skypeak Obelisk</p>
          </div>
        </Link>
        <Link
          to="/world/locales/HetraSEAPSpaceProgram"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">HetraS.E.A.P &mdash; Space Program</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
