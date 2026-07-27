import { Link } from 'react-router-dom';

export default function AQTFC() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          Locales &amp; Sights / Adventurer Quarters Task Force Centre (AQTFC)
        </p>

        {/* Hero */}
        <div className="space-y-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Adventurer Quarters Task Force Centre (AQTFC)</h1>

          {/* Callout */}
          <div className="border border-[#2e2b26] rounded-sm px-5 py-4 bg-[#0f0d0c]">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              <span className="font-display text-[#f2ebeb]">The Adventurer Quarters Task Force Centre</span>, commonly known as <strong>AQTFC</strong>, is the mandatory registration and dispatch authority for every adventurer who steps outside <Link to="/world/locales/skypeak-obelisk" className="text-[#c9a84c] hover:underline">The Skypeak Obelisk</Link> and into the real world of Planet Hetra.
            </p>
          </div>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ AQTFC &mdash; Image Placeholder ]</p>
      </div>

      {/* Overview */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Overview</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Every adventurer, Hibryd, and magic user who trains, farms XP, or battles within <Link to="/world/locales/skypeak-obelisk" className="text-[#c9a84c] hover:underline">The Skypeak Obelisk</Link> eventually has to come back down into the real world. The AQTFC exists to manage that transition. It is the official bridge between the game-like systems of the Obelisk and the day-to-day economy, safety, and labor structure of Planet Hetra.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Registration with the AQTFC is not optional. With a world overridden with dangerous beasts and monsters, protection needs to be given to those who live outside of the Skypeak Obelisk. An adventurer&apos;s current in-system rank is carried over and set accordingly for the real world through a system called <strong>HetraID</strong>, which is entirely different from a plain, real-world ID Card.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Beyond registration, AQTFC branches also function as job centres, dispatching adventurers on real-world contracts ranging from beast suppression to disaster relief, and connecting Obelisk-honed skills to Hetra&apos;s broader <Link to="/world/databases/EconomyOfPlanetHetra" className="text-[#c9a84c] hover:underline">economy</Link>.
        </p>
      </div>

      {/* Locations */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Locations</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          AQTFC operates branches across Planet Hetra, with its two largest and most active centres located in:
        </p>
        <ul className="space-y-2">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><strong className="text-[#f2ebeb]">Lynneria</strong> &mdash; home to the scientific city of Eldreule, this branch works closely with research-focused contracts and expedition-support missions.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><strong className="text-[#f2ebeb]">New Rynels</strong>, on the continent of <Link to="/world/locales/rynel" className="hover:underline">Rynel</Link> &mdash; the largest and busiest branch, given the city&apos;s status as Hetra&apos;s economic and infrastructural capital.</span>
          </li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Smaller satellite branches exist throughout the continents, typically positioned near town squares and adventurer hubs so that field workers never have to travel far to register, retire, or pick up a new contract.
        </p>
      </div>

      {/* The HetraID System */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The HetraID System</h2>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">What HetraID Does</h3>
          <ul className="space-y-2">
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span>Converts an adventurer&apos;s Skypeak Obelisk rank into a recognized, real-world credential.</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span>Grants access to AQTFC contracts, mission boards, and dispatch assignments.</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span>Acts as proof of ability and legal accountability while operating outside the Obelisk.</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span>Is required by <strong className="text-[#f2ebeb]">OTSA</strong> security whenever an adventurer moves between the Skypeak Obelisk and the outside world.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">HetraID Rank Locking</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Once issued, a HetraID locks in an adventurer&apos;s current rank for use in the outside world. If that adventurer wants their real-world rank updated to reflect further progress made inside the Obelisk, the HetraID must be re-registered with the AQTFC.
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span>Re-registration costs around <strong className="text-[#f2ebeb]">Ħ357 Hetrix</strong>, which is a lot. But it&apos;s a mandated price so that nothing can freely go in and out.</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><strong className="text-[#f2ebeb]">OTSA</strong>, the Obelisk Transportation Security Administration, will need to run a hard session to bring the adventurer back inside the Obelisk once re-registration is complete. OTSA security is exclusive to The Skypeak Obelisk.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">You Can Retire the HetraID</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The HetraID outside isn&apos;t just mandatory for protection &mdash; it can be retired at any point through any AQTFC branch. Some people don&apos;t need jobs from the AQTFC at all, since a normal life outside adventuring can also be lived just fine.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Retiring a HetraID simply removes an adventurer from active contract eligibility. It does not erase their Obelisk progress, and they&apos;re free to re-register at a later time should they choose to return to fieldwork.
          </p>
        </div>
      </div>

      {/* Mission & Contract System */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Mission &amp; Contract System</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Once registered, an adventurer can pick up real-world contracts posted at any AQTFC branch. These contracts are separate from the quests, domains, and boss fights found inside the Obelisk, they take place out in the actual world of Hetra, dealing with actual threats and actual people.
        </p>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Contract Tiers</h3>
          <ul className="space-y-2">
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><strong className="text-[#f2ebeb]">Frontier Patrol</strong> &mdash; routine patrols along the outer edges of settled territory to deter beast activity before it reaches populated areas.</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><strong className="text-[#f2ebeb]">Escort &amp; Transit Guard</strong> &mdash; protecting travelers, merchants, and cargo moving between cities and continents.</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><strong className="text-[#f2ebeb]">Beast Suppression Bounties</strong> &mdash; direct contracts to neutralize dangerous monsters and beasts threatening a specific region.</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><strong className="text-[#f2ebeb]">Disaster Relief Assistance</strong> &mdash; deploying adventurer strength and skill to support recovery efforts after natural or magical disasters.</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><strong className="text-[#f2ebeb]">Intelligence &amp; Scouting</strong> &mdash; gathering information on threats, unexplored territory, or unusual activity for AQTFC and allied institutions.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* The OTSA Connection */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The OTSA Connection</h2>
        <ul className="space-y-2">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><strong className="text-[#f2ebeb]">OTSA</strong>, the Obelisk Transportation Security Administration, is the security body exclusive to The Skypeak Obelisk that manages movement in and out of it.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Taking your Status and ID out of the Obelisk requires registration with the AQTFC. It is not optional, given how dangerous the outside world can be for those unregistered.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Re-entering the Obelisk after HetraID re-registration costs <strong className="text-[#f2ebeb]">Ħ357 Hetrix</strong> and requires an OTSA hard session before access is restored.</span>
          </li>
        </ul>
      </div>

      {/* Culture & Philosophy */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Culture &amp; Philosophy</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          AQTFC field workers hold a distinct culture from the players who never leave the Obelisk&apos;s towers. There&apos;s a certain grounded pride to it, a sense that XP and rank only mean something once they&apos;re tested against the real, unscripted dangers of Hetra&apos;s wilds.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          This mentality is often summed up by a common saying passed around AQTFC field workers:
        </p>
        <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">&ldquo;You trained in a floating tower. The world still needs you in the mud.&rdquo;</p>
          <p className="font-body text-sm text-[#7a746e] mt-2">&mdash; Common saying among AQTFC field workers</p>
        </blockquote>
      </div>

      {/* Relationship to the Broader Economy */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Relationship to the Broader Economy</h2>
        <ul className="space-y-2">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>AQTFC contracts pay out in real Hetrix, feeding directly into Hetra&apos;s wider <Link to="/world/databases/EconomyOfPlanetHetra" className="hover:underline">economy</Link> rather than in-Obelisk currency.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>High-ranking adventurers who take on consistent AQTFC work can generate substantial, legitimate income outside of the Obelisk&apos;s own conversion systems.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>The AQTFC effectively functions as the labor pipeline that keeps Obelisk-trained skill invested back into the safety and development of Planet Hetra as a whole.</span>
          </li>
        </ul>
      </div>

      {/* See Also */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">See Also</h2>
        <ul className="space-y-2">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <Link to="/world/locales/skypeak-obelisk" className="text-[#c9a84c] hover:underline">The Skypeak Obelisk</Link>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <Link to="/world/databases/EconomyOfPlanetHetra" className="text-[#c9a84c] hover:underline">Economy of Planet Hetra</Link>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <Link to="/world/locales/rynel" className="text-[#c9a84c] hover:underline">The Continent of Rynel</Link>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <Link to="/world/locales/eulerich" className="text-[#c9a84c] hover:underline">The Continent of Eulerich</Link>
          </li>
        </ul>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/world/locales/HetraSEAMSpaceMuseum" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">HetraS.E.A.M Space Museum</p>
          </div>
        </Link>
        <Link to="/world/locales" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Locales &amp; Sights</p>
          </div>
          <span className="text-[#c9a84c] text-lg">→</span>
        </Link>
      </div>

    </div>
  );
}
