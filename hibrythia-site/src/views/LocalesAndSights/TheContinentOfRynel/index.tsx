import { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Art helper component ---
function RynelArt() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Thumbnail — clickable */}
      <div
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer w-full overflow-hidden rounded-sm border border-[#2e2b26]"
      >
        <img
          src="https://i.ibb.co/Y799SRqx/Rynel-Map.png"
          alt="The Continent of Rynel — map"
          className="w-full h-auto rounded-sm transition-transform duration-300 group-hover:scale-[1.01]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-[#f2ebeb] text-xs tracking-widest uppercase border border-[#f2ebeb]/40 px-3 py-1 rounded-sm transition-opacity duration-300">
            Click to expand
          </span>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {open && (
        <div
          style={{ zIndex: 9999 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center pt-24 pb-12 px-10"
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute top-16 right-6 text-[#f2ebeb]/70 hover:text-[#f2ebeb] text-xl font-light transition-colors"
          >
            &#x2715;
          </button>
          <img
            src="https://i.ibb.co/Y799SRqx/Rynel-Map.png"
            alt="The Continent of Rynel — map, fullscreen"
            className="max-w-[95vw] max-h-[95vh] h-auto rounded-sm object-contain"
          />
        </div>
      )}
    </>
  );
}

export default function TheContinentOfRynel() {
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
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Locales &amp; Sights</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Continent of Rynel</h1>
        <div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The continent of Rynel sits smack-dab at the center of the globe, west of Varleqe, Hetrania, and Lynneria. Unlike other continents, Rynel does not operate on a large Hexicule crystal. Instead, it is anchored by the <span className="text-[#f2ebeb] font-semibold">Oakgnar Grand Tree</span>, considered the biggest and tallest tree in the entire world. Rynel is home to six notable locations: four Oakgnar Districts that surround the Grand Tree, one sealed ruin, and one of the most economically powerful cities on Planet Hetra, New Rynels.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Rynel is also the birthplace of the <span className="text-[#f2ebeb] font-semibold">Erbgeroger Flower</span>, the sacred mountain flower that serves as the world symbol for Unity. Its likeness is engraved on every single Hetrix bill in circulation, meaning every transaction on the planet carries a quiet reminder of Rynel&apos;s cultural significance.
</p>
        </div>
      </div>

      <RynelArt />

      {/* Megalo-District of New Rynels */}
<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Megalo-District of New Rynels</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
New Rynels is the largest coastline city in the entire world, and it takes up the entire length from the northeastern coast that stretches to the southwestern coast. Think of it as the counterpart to Tokyo (Japan) combined with Chongqing (China)&mdash;but multiply the density by eight times. New Rynels is the wealthiest city in the entire planet of Hetra. This city is home to the richest individuals on Planet Hetra, with personal net worths reaching up into the quadrillions. From surface level of the continent, there are up to six different sky-high ground levels that sit on super strong support from buildings among each elevation.
</p>
<p className="font-body text-xs tracking-[0.4em] text-[#4a4844] select-none" aria-hidden="true">&#9472;&#9472;&#9472;&#9472;&#9472;&#8880;</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
New Rynels was founded by <Link to="/characters/PhilstraRhys" className="text-[#c9a84c] hover:underline"><strong>Philstra Rhys</strong></Link>, the world&apos;s first <Link to="/characters/PhilstraRhys" className="text-[#c9a84c] hover:underline">Multi-Sextillionaire</Link>, with a personal worth of 55 Sextillion Hetrix. Philstra is the founder of many major institutions and is the primary backer of HetraSEAP, the Hetranian Space Exploration and Aeronautics Program, which alone carries a worth of around 25 quintillion Hetrix.
</p>
<ul className="space-y-2">
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><span className="text-[#f2ebeb] font-semibold">Minimum Wage:</span> &#294;25.35 Hetrix (~$8.45 USD)</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><span className="text-[#f2ebeb] font-semibold">Key Industries:</span> Entrepreneurship, Space Exploration (HetraSEAP), High Finance</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><span className="text-[#f2ebeb] font-semibold">Founded by:</span> Philstra Rhys</span>
</li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
New Rynels is the economic powerhouse of Planet Hetra and the hub where Hetrix bills are actually minted. The <span className="text-[#f2ebeb] font-semibold">Artificial Intelligent Bill Minting Automation</span> machinery responsible for producing every Hetrix denomination in circulation is housed and operated here, because the process demands a level of gyroscopic precision that no person can replicate by hand. The EBLGrid, Polyhetral Labels, and 3812-bit Encryption Layers stamped on every bill all come out of this city.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Beyond finance and minting, New Rynels is a city that rewards ambition. Many of the most famous scientists and graduates from Ironbark Hibryds University have migrated here for entrepreneurship opportunities, and the city draws talent from across every continent on the planet.
</p>
<div className="space-y-3">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Two Regions, One Megalopolis District</h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The District of New Rynels is split into two different regions that offer different work cultures, social activity, and more.
</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-4 border border-[#2e2b26] rounded-sm px-5 py-5 bg-[#0f0d0c]">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">New Westward Rynels</h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
From the north-west that stretches to the south-west, this region is called New Westward Rynels, abbreviated to NWRynels. Most citizens of NWRynels also refer to this region as North Westward Rynels.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
NWRynels is home to many famous cuisines and restaurants, along with luxury hotels and homes. There are also companies here but they are more centered on luxury and fine goods. The work labor here isn&rsquo;t as punishing as it may seem, but given that this megalopolis has a lot of people living here NWRynels is actually fairly chill in terms of economic trade, activity, and competitiveness.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The border of this region meets at the south-eastern most peninsula of the continent, which is a direct neighbor to New Eastward Rynels.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">NWRynels</span> is popular for a few things:
</p>
<ul className="space-y-2">
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><span className="text-[#f2ebeb] font-semibold">Minimum Wage:</span> &#294;24.35 Hetrix - which is &#294;1 short of NERynels&rsquo; wage.</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>High End Food Restaurants</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Imports and Goods</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Entertainment</span>
</li>
</ul>
</div>
<div className="space-y-4 border border-[#2e2b26] rounded-sm px-5 py-5 bg-[#0f0d0c]">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">New Eastward Rynels</h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
From the North-east that stretches to the Eastern South at the southern peninsula dip, this region is known as New Eastward Rynels (NERynels). And New Eastward Rynels is home to major competitors, brands, trades, entrepreneurs, e-commerce, physical commerce and more. NERynels&rsquo; infrastructure and population is really dense&mdash;which takes first place ahead of its Westward counterpart. This region of Rynels and the entirety of the planet is what makes the global economic status stand out so much.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">NERynels</span> is popular for a few things:
</p>
<ul className="space-y-2">
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><span className="text-[#f2ebeb] font-semibold">Minimum Wage:</span> &#294;25.35 Hetrix</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><Link to="/world/locales/HetraSEAPSpaceProgram" className="text-[#c9a84c] hover:underline">HetraSEAP</Link> - A Space Exploration Program that is backed by Philstra Rhys @ &#294;25 Quintillion Hetrix</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><Link to="/world/locales/HetraSEAMSpaceMuseum" className="text-[#c9a84c] hover:underline">HetraSEAM</Link> - A Space Museum that sits right next to its Exploration Program counterpart. Backed by Philstra @ &#294;15.15 Quintillion Hetrix</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><Link to="/world/databases/HetranianGlobalDefenseAgency" className="text-[#c9a84c] hover:underline">HetraGDA</Link> - A Global Defense Agency that is backed by Philstra, standing ovation at &#294;24.55 quintillion Hetrix.</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><Link to="/world/databases/TechnologyTransitSystems" className="text-[#c9a84c] hover:underline">Transportation &amp; Technology</Link> - A central innovation where all major technology and transportation are made. This includes Air (Sky) Transportation and Underwater Transportation. <Link to="/world/databases/TechnologicalBrandsOfHetra" className="text-[#c9a84c] hover:underline">Technology brands</Link> for phones, pcs, and more also live here in NERynels</span>
</li>
</ul>
</div>
</div>
</div>
</div>

      {/* Rynel Wildernaughts */}
<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Rynel Wildernaughts</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Unlike <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">Lynneria</Link>, which has a Wildernaughts Border, the Continent of Rynel doesn&rsquo;t have one for its own Wildernaught Zone because it is more tame. The Wildernaughts here on this continent is called the Rynel Wildernaughts and is split up into four zones. There are not many dangerous creatures on this continent, but rather passive animals and creatures. Security is still needed at the New Rynel Borders for clearance.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There are a lot of hiking trails in these Wildernaughts and they make do for great scenic impressions and beauty.
</p>
<div className="grid grid-cols-1 gap-4">
<div className="space-y-4 border border-[#2e2b26] rounded-sm px-5 py-5 bg-[#0f0d0c]">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Vernel Wildernaughts</h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Northern most wild zone that is controlled by Vernel Town of the Oakgnar District. Vernel Wildernaughts is home to a lot of unique flowers and is also the home place for the Erbgeroger Flower within the Vernel Mountains in the north before the northern coast. You can see the Vernel Mountain Range from any of the Oakgnar District Towns.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The wild zone here has some beautiful grass&mdash;from plains and tall &amp; steep hills that were shaped by the wind molding the land together. The grass attracts heat and stores it as nutrients while also releasing heat&mdash;this is known as Vernel Grass. Sitting down on the fields and beds of grass will often feel like a hot spring because of the unique properties it has.
</p>
<ul className="space-y-2">
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Vernel Grass is used in a lot of herbal tea recipes, and is also an ingredient for alchemic synthesis and proto-modern technology.</span>
</li>
</ul>
</div>
<div className="space-y-4 border border-[#2e2b26] rounded-sm px-5 py-5 bg-[#0f0d0c]">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">South Thimber Wildernaughts</h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Southern most wild zone that is controlled by Thimber Town of the Oakgnar District. This long strip of the wilds is home to some of the most unique tree formations called Thimber Trees. A fully grown Thimber Tree is uniquely identifiable by a few things:
</p>
<ul className="space-y-2">
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Thimber Tree roots spread out like a vineyard&rsquo;s branching roots</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>The branches that grow up from the tree take a formation of a branching fractal anchor</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Bark made of bamboo and grown like scales.</span>
</li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This Wild Zone also has one unique lake called Aquamarine Thimber Lake, and it glows a very teal-blue color at night due to the bioluminescent moss in the soil beneath the water. A rare occurrence here is that most of the blue floating lights are fireflies that light up blue instead of yellow. These fireflies are known as Aqua Fireflies and they are a byproduct species bred from eating on the bioluminescent moss.
</p>
</div>
<div className="space-y-4 border border-[#2e2b26] rounded-sm px-5 py-5 bg-[#0f0d0c]">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Maple Wildernaughts</h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Eastern most wild zone that is controlled by Maple Town of the Oakgnar District. This wild zone is home to Evergreen Maple Trees, and the population of these plants take up most of the Wildernaughts because of how dense and fast these seeds travel. There are short maple trees, along with tall ones that almost reach taller than most because the wind here in this region isn&rsquo;t too hot or too cold. These trees can last and survive all seasons and their leaf color changes color according to season.
</p>
<ul className="space-y-2">
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Maple Trees in the Season of Pink Spring have a faint healthy pink and magenta color.</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Maple Trees in the Summer Season (Calderia&rsquo;s Heat) have a bright yellow color and along with hot orange.</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Maple Trees during Aburhalle (Fall) come in reds, orange, brown, crimson, burgundy red, dark brown, light brown, ginger, and pumpkin orange.</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span>Maple Trees during Wintervahle come in White, Silver, Silver Blue, Snow White, Cloudy White &amp; Gray, and Light Snow Blue. During the night, these leaves emit a soft blue glow&mdash;which is particularly a response to the cold air.</span>
</li>
</ul>
</div>
<div className="space-y-4 border border-[#2e2b26] rounded-sm px-5 py-5 bg-[#0f0d0c]">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Astel Wildernaughts</h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Western most wild zone that is controlled by Astel Town of the Oakgnar District. The Astel Wilds are home to some unique animals.
</p>
<ul className="space-y-2">
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><Link to="/world/databases/CreaturesOfTheWorld/DeerDragons" className="text-[#c9a84c] hover:underline">Deeragons</Link> - A Deer Dragon creature that is passive and female dominant.</span>
</li>
<li className="flex gap-2 font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#c9a84c] shrink-0">&mdash;</span>
<span><Link to="/world/databases/CreaturesOfTheWorld/Flimpies" className="text-[#c9a84c] hover:underline">Flimpies</Link> - Rynel Exclusive Ghost Bunnies. Wildly elusive but very cute.</span>
</li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This place is also a great sightseeing area because of the natural beauty of the west coastlines. There are a lot of huge beaches in this area, particularly Astel Beach&mdash;around seventy meters from shoreline to backshore. Astel Beach never tries to take up too much space, because the landscapes of Astel Wilds are mostly dominant in terms of tourism.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There are also very cool natural cave formations, like dripstone caves that have dripstone made of Astel Stone&mdash;a sediment branch of granite and limestone. In the center of the wild zone, there is a huge rock like formation that takes the shape of an hourglass. It&rsquo;s called the Astel Hourglass and many hikers have scaled this to the top. Going to the top of Astel Hourglass will give you a scene&mdash;because the sun sets 15 minutes after the climb to the top.
</p>
</div>
</div>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Rynel Wildernaughts isn&rsquo;t as dangerous as its <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">Lynnerian counterpart</Link>. It is tame and safe, which is perfect for hiking, sporting activities, picnics, and more of the daily life nuance that one will find on Planet Hetra.
</p>
</div>

      {/* The Oakgnar Grand District */}
<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Oakgnar Grand District</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The heart of Rynel and the symbolic center of Planet Hetra. The Oakgnar Grand Tree is not just a natural landmark. It is a living institution that holds the continent together spiritually, culturally, and structurally. The Oakgnar Grand District stands in the middle of the Rynel Wildernaughts.
</p>
<p className="font-body text-xs tracking-[0.4em] text-[#4a4844] select-none" aria-hidden="true">&#9472;&#9472;&#9472;&#9472;&#9472;&#8880;</p>
<p className="font-body text-sm text-[#7a746e] leading-relaxed">
Locales: The Oakgnar Grand Tree, The Sethranian Church, Oakgnar Vernel, Oakgnar Thimber, Oakgnar Maple, Oakgnar Astel.
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
<h3 className="font-display text-sm text-[#f2ebeb] mb-3"><Link to="/world/locales/sethranian-church" className="hover:underline">The Sethranian Church</Link></h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Sethranian Church was built by one of the Seven Architects, Sethra, back in the Greungerian Era. It was the last structure built by Sethra, completed on a Sethraday, which is the final day of the week. The church still holds deep significance across the world to this day.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
People often come here to send wishes and prayers to <Link to="/characters/QueenEiraValthorne" className="text-[#c9a84c] hover:underline">Queen Eira</Link>, as the <Link to="/world/databases/HibrythianReligions" className="text-[#c9a84c] hover:underline">Religion of Valthoreia</Link> is Planet Hetra&apos;s main modern religion. It is a quiet, sacred place that draws visitors from across the continent.
</p>
</div>
<div className="space-y-3">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Oakgnar Districts</h3>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There are four Oakgnar Districts that surround the Grand Tree, each one named and governed by one of the Lynn Brothers, who serve as the towns&apos; Mayors. These Districts also control the Wildernaught zones they are in.
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#0f0d0c]">
<p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">N</p>
<h4 className="font-display text-base text-[#f2ebeb] mb-1">Oakgnar Vernel</h4>
<p className="font-body text-sm text-[#7a746e]">Governed by Tyle Lynn</p>
<p className="font-body text-sm text-[#7a746e]">Controls the Vernel Wildernaughts</p>
</div>
<div className="border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#0f0d0c]">
<p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">S</p>
<h4 className="font-display text-base text-[#f2ebeb] mb-1">Oakgnar Thimber</h4>
<p className="font-body text-sm text-[#7a746e]">Governed by Kyle Lynn</p>
<p className="font-body text-sm text-[#7a746e]">Controls the South Thimber Wildernaughts</p>
</div>
<div className="border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#0f0d0c]">
<p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">E</p>
<h4 className="font-display text-base text-[#f2ebeb] mb-1">Oakgnar Maple</h4>
<p className="font-body text-sm text-[#7a746e]">Governed by Nyle Lynn</p>
<p className="font-body text-sm text-[#7a746e]">Controls the Maple Wildernaughts</p>
</div>
<div className="border border-[#2e2b26] rounded-sm px-4 py-3 bg-[#0f0d0c]">
<p className="font-body text-[9px] tracking-widest uppercase text-[#4a4844] mb-1">W</p>
<h4 className="font-display text-base text-[#f2ebeb] mb-1">Oakgnar Astel</h4>
<p className="font-body text-sm text-[#7a746e]">Governed by Eli Lynn</p>
<p className="font-body text-sm text-[#7a746e]">Controls the Astel Wildernaughts</p>
</div>
</div>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
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

      {/* Rynel Ruins */}
<div className="space-y-6">
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
</div>

      {/* Bottom Nav */}
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
