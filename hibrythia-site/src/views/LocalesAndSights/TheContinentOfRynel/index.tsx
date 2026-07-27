import { Link } from 'react-router-dom';

export default function TheContinentOfRynel() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          Locales &amp; Sights / The Continent of Rynel
        </p>

        {/* Hero */}
        <div className="space-y-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">The Continent of Rynel</h1>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The continent of Rynel sits smack-dab at the center of the globe, west of Varleqe, Hetrania, and Lynneria. Unlike other continents, Rynel does not operate on a large Hexicule crystal. Instead, it is anchored by the <span className="text-[#f2ebeb] font-semibold">Oakgnar Grand Tree</span>, considered the biggest and tallest tree in the entire world. Rynel is home to six notable locations: four Oakgnar Districts that surround the Grand Tree, one sealed ruin, and one of the most economically powerful cities on Planet Hetra, New Rynels.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Rynel is also the birthplace of the <Link to="/world/locales/erbgeroger-flower" className="text-[#c9a84c] hover:underline">Erbgeroger Flower</Link>, the sacred mountain flower that serves as the world symbol for Unity. Its likeness is engraved on every single Hetrix bill in circulation, meaning every transaction on the planet carries a quiet reminder of Rynel&apos;s cultural significance.
          </p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Continent of Rynel — Image Placeholder ]</p>
      </div>

      {/* The Oakgnar Grand Tree */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Oakgnar Grand Tree</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The heart of Rynel and the symbolic center of Planet Hetra. The Oakgnar Grand Tree is not just a natural landmark. It is a living institution that holds the continent together spiritually, culturally, and structurally.
        </p>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed">
          Locales: The Oakgnar Grand Tree, The Sethranian Church, Oakgnar Verns, Oakgnar Grelt, Oakgnar Maple, Oakgnar Astel
        </p>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Oakgnar Grand Tree</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Oakgnar Grand Tree is composed of three main materials: a single Hexicule Core, Hardwood, and Stonewood. The Hexicule Core keeps the tree rooted within the ground, serves as a light beacon for the surrounding area, and is nearly indestructible. It can also regenerate its own roots and wood when damaged, making it essentially self-sustaining.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The tree sits at UCC-0, the world&apos;s base time zone, making it the geographic and temporal reference point of the entire planet. More than just a natural wonder, the Oakgnar Grand Tree is a symbol of world unity, representing a place where all four corners of Hetra come together, bound by their differences and their shared connection to the land.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">
            <Link to="/world/locales/sethranian-church" className="hover:underline">The Sethranian Church</Link>
          </h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Sethranian Church was built by one of the Seven Architects, Sethra, back in the Greungerian Era. It was the last structure built by Sethra, completed on a Sethraday, which is the final day of the week. The church still holds deep significance across the world to this day.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            People often come here to send wishes and prayers to <Link to="/characters/QueenEiraValthorne" className="text-[#c9a84c] hover:underline">Queen Eira</Link>, as the <Link to="/world/databases/HibrythianReligions" className="text-[#c9a84c] hover:underline">Religion of Valthoreia</Link> is Planet Hetra&apos;s main modern religion. It is a quiet, sacred place that draws visitors from across the continent.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Oakgnar Districts</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            There are four Oakgnar Districts that surround the Grand Tree, each one named and governed by one of the Lynn Brothers, who serve as the towns&apos; Mayors.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { dir: "N", name: "Oakgnar Verns", mayor: "Tyle Lynn" },
              { dir: "S", name: "Oakgnar Grelt", mayor: "Kyle Lynn" },
              { dir: "E", name: "Oakgnar Maple", mayor: "Nyle Lynn" },
              { dir: "W", name: "Oakgnar Astel", mayor: "Eli Lynn" },
            ].map(({ dir, name, mayor }) => (
              <div key={name} className="border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#0f0d0c]">
                <p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">{dir}</p>
                <h4 className="font-display text-base text-[#f2ebeb] mb-1">{name}</h4>
                <p className="font-body text-sm text-[#7a746e]">Mayor: {mayor}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#7a746e] leading-relaxed">
            These four towns form a ring of community life around the Grand Tree, serving as the residential and cultural backbone of central Rynel.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Oakgnar Grand Festivities</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Every year, for a full month during <span className="text-[#f2ebeb] font-semibold">Muhulmber</span> (a 60-day month), festivities, weddings, and world-wide celebrations are held on Rynel. People come from across Planet Hetra, regardless of their differences, to celebrate the life they were given. The spirit of the event is simple: set aside the pain and the hardship for a month and enjoy being alive.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The main celebration takes place on the <span className="text-[#f2ebeb] font-semibold">45th day of Muhulmber</span>. It is a time of relaxation, peace, and games, and it is widely considered the most beloved recurring event on the planet.
          </p>
        </div>
      </div>

      {/* New Rynels */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">New Rynels</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          New Rynels is the largest coastline city in the entire world, spanning around two state-wide lengths. Think of it as the counterpart to New York, only bigger, busier, and far wealthier. This city is home to the richest individuals on Planet Hetra, with personal net worths reaching up into the quadrillions.
        </p>

        <div className="space-y-3">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            New Rynels was founded by <Link to="/characters/PhilstraRhys" className="text-[#f2ebeb] font-semibold hover:underline">Philstra Rhys</Link>, the world&apos;s first Multi-Sextillionaire, with a personal worth of <span className="text-[#f2ebeb] font-semibold">55 Sextillion Hetrix</span>. Philstra is the founder of many major institutions and is the primary backer of <Link to="/world/locales/HetraSEAPSpaceProgram" className="text-[#c9a84c] hover:underline">HetraSEAP</Link>, the Hetranian Space Exploration and Aeronautics Program, which alone carries a worth of around <span className="text-[#f2ebeb] font-semibold">25 quintillion Hetrix</span>.
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><span className="text-[#f2ebeb] font-semibold">Minimum Wage:</span> &#294;25.35 Hetrix (~$8.45 USD)</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><span className="text-[#f2ebeb] font-semibold">Key Industries:</span> Entrepreneurship, Space Exploration (HetraSEAP), High Finance</span>
            </li>
            <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
              <span className="text-[#c9a84c] shrink-0">—</span>
              <span><span className="text-[#f2ebeb] font-semibold">Founded by:</span> Philstra Rhys</span>
            </li>
          </ul>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          New Rynels is the economic powerhouse of Planet Hetra and the hub where Hetrix bills are actually minted. The Artificial Intelligent Bill Minting Automation machinery responsible for producing every Hetrix denomination in circulation is housed and operated here, because the process demands a level of gyroscopic precision that no person can replicate by hand. The EBLGrid, Polyhetral Labels, and 3812-bit Encryption Layers stamped on every bill all come out of this city.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Beyond finance and minting, New Rynels is a city that rewards ambition. Many of the most famous scientists and graduates from Ironbark Hibryds University have migrated here for entrepreneurship opportunities, and the city draws talent from across every continent on the planet.
        </p>
      </div>

      {/* Rynel Ruins */}
      <div className="space-y-3">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Rynel Ruins</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Rynel Ruins sits south of both the Oakgnar Districts and New Rynels. The ruins lead underground and are said to be the exact size of the continent itself in terms of their spread beneath the surface.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Scientists speculate that the Rynel Ruins lead to an underground ancient animal kingdom called <span className="text-[#f2ebeb] font-semibold">The Feathered Dinosaurs</span>. Texts and myths suggest these creatures may have been real, though it remains a speculation to this day. For now, the question stays open.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Currently, there is no way to enter the ruins. The entrance is sealed off with a divine seal, and no known force has been able to break through it. Whether what lies beneath is truly an ancient kingdom, a repository of lost knowledge, or something else entirely, remains one of the great mysteries of Planet Hetra.
        </p>
      </div>        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
                  <Link to="/world/locales" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Locales &amp; Sights</p>
            </div>
          </Link>
                  <Link to="/world/locales/varleqe" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">The Super-Continent of Varleqe</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
      </div>

    </div>
  );
}
