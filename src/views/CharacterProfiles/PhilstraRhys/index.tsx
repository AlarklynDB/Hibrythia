import { Link } from "react-router-dom";

export default function PhilstraRhys() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/characters"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Background Characters
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Philstra Rhys
        </h1>
      </div>

      {/* Story Info Callout */}
      <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4">
        <p className="font-display text-sm text-[#f2ebeb] uppercase tracking-widest">Story Information</p>
        <hr className="border-[#2e2b26]" />
        <div className="space-y-1">
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Story Role</p>
          <p className="font-body text-sm text-[#c8c2ba]">Worldbuilding Character</p>
          <p className="font-body text-sm text-[#c8c2ba]">Richest Man of Planet Hetra</p>
          <p className="font-body text-sm text-[#c8c2ba]">Species: Demon Wizard</p>
        </div>
        <hr className="border-[#2e2b26]" />
        <div>
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Character Type</p>
          <p className="font-body text-sm text-[#c8c2ba]">Round</p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-64 rounded-xl bg-[#1a1714] border border-[#2e2b26] flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4844]">[ Philstra Rhys illustration — coming soon ]</p>
      </div>

      {/* Origin and Backstory */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Philstra Rhys — The Richest Man on Hetra</h3>
          <p className="font-display text-base text-[#f2ebeb] mb-2">A World United under a sense of common decency</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Philstra Rhys. He&apos;s a Demon Wizard from the beast creature side. But demons in this world aren&apos;t under-appreciated. They&apos;re respected because they&apos;re not evil or demonic — these creatures hold not just power, but beauty, wealth, and knowledge. But he didn&apos;t become rich over night, nor through sheer magic. He worked his way out of the toughest situations despite the backlash, and became a man well known not just because of his wealth, but his recognition and contributions to society.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Most of the backlash comes from nhuemyns themselves, thinking that a &quot;demon wizard&quot; should not influence his culture onto others. It&apos;s mainly from the haters at least, because stereotypes are just wrongful convictions and rumors. He, however, didn&apos;t care about stereotypes. That&apos;s because other people support his ideals, not just him being a demon, but him as a person of being. It&apos;s not just his wealth that gets him around, he has numerous connections and backings at the same time.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            He&apos;s lived through ages, eons, and centuries to know the difference of:
          </p>
          <div className="space-y-2 pl-4">
            {[
              "The Right from Wrong",
              "The Wrong from Right",
              "When to act and when to stop",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#c9a84c] mt-1 shrink-0">•</span>
                <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            And when to know when enough is enough.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Coming from a line of Demons, Philstra is a descendant of Khalfvyskov but bred with a Dragonkin, he doesn&apos;t age as normally, nor does he have the quick death process. That&apos;s because his dragon blood cells override his demon cells by a wide margin. 75% dragon, 25% demon.
          </p>
        </div>

        {/* Money in Demon Culture */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Money (Hetrix) in Demon Culture</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Hetrix, which is Planet Hetra&apos;s worldwide currency shapes a lot of cultures around the world, and that includes Demon Culture. Money isn&apos;t defined just by wealth or value — it&apos;s about Worth. That&apos;s what demons define it as a whole.
          </p>
          <div className="border-l-4 border-[#c9a84c] pl-6 space-y-4">
            <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
              &quot;How much money is worth it when enough is enough? We can&apos;t define value based on value or wealth or popularity. This world is united under the Oakgnar Grand Tree and The Erbgeroger Flower. A symbol of unity. So whatever we think or act upon, money should only be defined based on Worth, not in value, but in spirit, discernment, and knowledge.&quot;
            </p>
            <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
              &quot;Money has a monetary value. It&apos;s an important aspect of how things flow and converge. But let it not cloud or twist thy judgment, because money is another form of authority and power.&quot;
            </p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            These were words spoken by Philstra himself, after he founded the continent of Rynel (in 155 AD), and he believes that human value should be placed above surface values, not just its importance, but as <em>gifts</em>. That&apos;s what he got famous on.
          </p>
        </div>
      </div>

      {/* His Influence on Hetra's Global Economy */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">His Influence on Hetra&apos;s Global Economy</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          If Hetrix is the blood of Planet Hetra, then Philstra Rhys is the heart that first got it pumping.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          His contributions to the global economy didn&apos;t happen through inheritance or luck. They were built deliberately, over centuries, with the full weight of his philosophy behind them. When Philstra founded the <strong className="text-[#f2ebeb]">continent of Rynel in 155 AD (the name, not the shape nor continent)</strong>, he didn&apos;t just claim land. He shaped and built a civilization shaped around his core belief: that Worth (not value, but as a gift/trait) is what money should stand for.
        </p>

        {/* Founding New Rynels */}
        <div className="border border-[#2e2b26] rounded-xl px-5 py-5 bg-[#1a1714] space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Founding New Rynels</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            New Rynels, the largest coastline city in the entire world, stands today as the economic powerhouse of Planet Hetra, and it would not exist without Philstra. He didn&apos;t just found it; he <em>designed</em> its identity. The city became a hub for entrepreneurs, high finance, and space exploration: industries that reflect Philstra&apos;s own belief that ambition paired with discernment leads to genuine contribution.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Home to the richest individuals on the planet (personal net worths reaching into the <strong className="text-[#f2ebeb]">quadrillions</strong>), New Rynels operates as a testament to what happens when the right person builds with the right intent.
          </p>
        </div>

        {/* The World's First Multi-Sextillionaire */}
        <div className="border border-[#2e2b26] rounded-xl px-5 py-5 bg-[#1a1714] space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">The World&apos;s First Multi-Sextillionaire</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            As of today, Philstra Rhys holds a personal net worth of{" "}
            <Link
              to="/world/databases/EconomyOfPlanetHetra"
              className="text-[#c9a84c] hover:underline transition-colors duration-200"
            >
              <strong>55 Sextillion Hetrix</strong>
            </Link>
            , making him the first and only multi-sextillionaire in Hetra&apos;s recorded history. A number that large has no clean real-world comparison, and that&apos;s almost fitting. He lived long enough (through ages, eons, and centuries) to watch that number grow not just through accumulation, but through <em>compounding contribution</em>.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            He doesn&apos;t treat his wealth as a trophy. He treats it as responsibility, which is perhaps why it kept growing.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This is also why Planet Hetra&apos;s worth is around ~250 Octillion Hetrix.
          </p>
        </div>

        {/* HetraSEAP */}
        <div className="border border-[#2e2b26] rounded-xl px-5 py-5 bg-[#1a1714] space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">HetraSEAP — Backing the Stars</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            One of Philstra&apos;s most ambitious ventures is his backing of{" "}
            <Link
              to="/world/locales/HetraSEAPSpaceProgram"
              className="text-[#c9a84c] hover:underline transition-colors duration-200"
            >
              <strong>HetraSEAP</strong>
            </Link>
            , Hetra&apos;s premier space exploration organization, currently valued at approximately <strong className="text-[#f2ebeb]">25 Quintillion Hetrix</strong>. His support isn&apos;t just financial; it&apos;s ideological. HetraSEAP represents the next frontier of what Philstra has always believed: that Hetra&apos;s people deserve to reach further than what&apos;s in front of them.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Funding the stars is, in many ways, the ultimate expression of his belief that human (and creature) value should be placed above surface worth.
          </p>
        </div>

        {/* What He Actually Built */}
        <div className="border border-[#2e2b26] rounded-xl px-5 py-5 bg-[#1a1714] space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-2">What He Actually Built</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Beyond titles and numbers, what Philstra built was <em>trust</em> at scale. His connections span continents and cultures. His philosophy on money (that it should reflect Worth in spirit, discernment, and knowledge) quietly shaped how Demon Culture views currency, and through Rynel&apos;s global influence, that worldview rippled outward.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The <strong className="text-[#f2ebeb]">Erbgeroger Flower</strong> engraved on every Hetrix bill? That symbol of Unity? Philstra understood it before it became global policy. He just lived it first.
          </p>
        </div>
      </div>

      {/* Beast Hierarchy */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Place within The Beast Hierarchy System</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          He&apos;s not just the wealthiest man alive as of 2245 AD. He&apos;s a Demon, and a very cool one. Demons are one of the powerhouses within Hetra, placed as #2 in Rank One of the Beast Hierarchy. Not only he has The Skypeak Obelisk as his backing, co-owner with Gregory Polth, the governor of Grelladore (Nharvenile), he has at least 50 sports-hover cars since he&apos;s based in New Rynels.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          In fact, Philstra Rhys is the world&apos;s first Demon Wizard to be at #1 in terms of the Demon Hierarchy place of the umbrella rank in the beast kingdom.
        </p>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">In Comparison</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Rank 1 */}
          <div className="border border-[#2e2b26] rounded-xl px-5 py-4 bg-[#1a1714] space-y-3">
            <p className="font-display text-sm text-[#c9a84c] uppercase tracking-widest mb-2">Rank 1 — Beast Kingdom</p>
            <div className="space-y-2">
              <p className="font-body text-sm text-[#f2ebeb]">Tier 1) The Dregalosaurus</p>
              <div className="space-y-1 pl-3">
                <p className="font-body text-sm text-[#f2ebeb]">Tier 2) Demons</p>
                <div className="pl-3 space-y-1">
                  <p className="font-body text-sm text-[#c8c2ba]">
                    No.1 of Tier 2: <strong className="text-[#f2ebeb]">Philstra Rhys</strong>
                  </p>
                  <p className="font-body text-sm text-[#c8c2ba]">
                    No.2 of Tier 2:{" "}
                    <Link to="/characters/QueenRachnaea" className="text-[#c9a84c] hover:underline transition-colors duration-200">
                      Queen Rachnaea
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rank 2 */}
          <div className="border border-[#2e2b26] rounded-xl px-5 py-4 bg-[#1a1714] space-y-3">
            <p className="font-display text-sm text-[#c9a84c] uppercase tracking-widest mb-2">Rank 2 — Beast Kingdom</p>
            <div className="space-y-2">
              <div className="space-y-1">
                <p className="font-body text-sm text-[#f2ebeb]">Tier 1) Killer Rabbits (Werebels / Moonbel)</p>
                <div className="pl-3">
                  <p className="font-body text-sm text-[#c8c2ba]">
                    No.1 of Tier 2:{" "}
                    <Link to="/characters/EphelTheMoonbel" className="text-[#c9a84c] hover:underline transition-colors duration-200">
                      Ephel the Moonbel
                    </Link>
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-body text-sm text-[#f2ebeb]">Tier 2) Hetranian Direwolves</p>
                <div className="pl-3">
                  <p className="font-body text-sm text-[#c8c2ba]">
                    No.1 of Tier 2:{" "}
                    <Link to="/characters/KydelRhunes" className="text-[#c9a84c] hover:underline transition-colors duration-200">
                      Kydel Rhunes
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Philstra being number one in Tier 2 means that he&apos;s not just a wealthy individual, he&apos;s also extremely powerful in terms of demon abilities and powers.
        </p>

        {/* Tony Stark closer */}
        <div className="border-l-4 border-[#c9a84c] pl-6 mt-4">
          <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
            Tony Stark? More like Philstra Rhys — who built a goddamn continent from the ground up!
          </p>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Character Profiles</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
