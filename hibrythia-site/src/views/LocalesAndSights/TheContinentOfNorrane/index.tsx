import { useState } from "react";
import { Link } from "react-router-dom";

// --- Art helper component ---
function NorraneArt() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Thumbnail — clickable */}
      <div
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer w-full overflow-hidden rounded-sm border border-[#2e2b26]"
      >
        <img
          src="https://i.ibb.co/k6ByfyKH/Norrane-Map.png"
          alt="The Continent of Norrane map"
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
            src="https://i.ibb.co/k6ByfyKH/Norrane-Map.png"
            alt="The Continent of Norrane map, fullscreen"
            className="max-w-[95vw] max-h-[95vh] h-auto rounded-sm object-contain"
          />
        </div>
      )}
    </>
  );
}

export default function TheContinentOfNorrane() {
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
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Continent of Norrane</h1>
      </div>

      <NorraneArt />

<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Continent of Norrane sits atop in the northern hemisphere of Planet Hetra, just before the North Pole, <Link to="/world/locales/alarctic-alpines" className="text-[#c9a84c] hover:underline"><em>The Alarctic Alpines</em></Link>. It’s tucked in the middle east of the planet, and is also north-east of <Link to="/world/locales/rynel" className="text-[#c9a84c] hover:underline">Rynel</Link>, and north-west of <Link to="/world/locales/eulerich" className="text-[#c9a84c] hover:underline">Eulerich</Link>. But this place is not your generic continent, because its biology and ecosystem is very unique.
</p>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Geology and Surface Mechanics</h2>
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Geology of Norrane’s Land</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Norrane’s continent is actually a pillar-like continent below the sea and is supported by one huge massive root that digs deep into the tectonic plates. It’s like a huge tree stump, but it’s made of rock and ground. Above the surface of the waters, a huge cascading waterfall surrounds the top surface of Norrane and falls down into the vast ocean below. The water that falls down this edge is the plateau rim of Norrane’s elevated landmass, which gives this a surreal view from afar.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This plateau is called the <span className="text-[#f2ebeb] font-semibold">Norrane Basin Plateau (NBPlateau)</span>. The NBPlateau is essentially a giant, water-filled basin raised hundreds of meters above the rest of Hetra, and its borders are defined by <span className="text-[#f2ebeb] font-semibold">colossal, continuous waterfalls</span> that ring the entire edge of the plateau. As the fresh inland waters of Norrane reach the edge of the continent’s borders, they cascade directly over vertical rock cliffs, plunging down massive distances to crash into the standard Hetranian Oceans below.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Below this elevated landmass and waters, the supporting ground lifts it up which allows more ocean life to swim through. Think of this plateau like one giant hourglass with a very fat and strong pillar system. Below the ocean floor, the tectonic plate that Norrane sits on shares a continental boundary with the Alarctic Alpines’ continental border. This makes it sturdy enough since both Norrane’s underwater ground and the North Poles’ are interconnected.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
A fascinating detail observed by the people of Hetra is how the water behaves right at the lip of the plateau.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Instead of immediately shearing off flatly, the water slightly curves over the lip of the rock bed.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>It mimics a property similar to extreme <span className="text-[#f2ebeb] font-semibold">surface tension and cohesion</span>, behaving almost like a cup filled so high that the water surface bubbles upward past the rim before finally spilling over.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>The elevated surface of the water rarely gets any storms or tsunamis since it is more tamer than the lower sister seas beneath the NBPlateau’s oceans.</span></li>
</ul>
</div>
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Travel and Navigation</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The sheer scale of these waterfalls means traditional boats cannot sail directly from the lower ocean into Norrane. Instead, travelers will need to use <Link to="/world/databases/TechnologyTransitSystems" className="text-[#c9a84c] hover:underline">Sky Trains</Link> to get to where they want within Norrane’s locations.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Aerotrains are sky trains</span>. They can traverse around the skies and globe for imports at a faster speed than Storage Blimps. Aerotrains use air energy along with solar and lunar energy to stay afloat and maintain velocity. The highest they can go up to in speed is around 310 MPH.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Hetranian AirLine Express (H.A.L.E)</span> - The mainline transportation of Sky Trains.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Aerotrain Imports Express (ATI-Express)</span> - These Aerotrains are official storage transportation trains for exporting and importing goods from different regions. Norrane has a lot of lush ingredients and materials that are often used in buildings, food recipes, and more.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Hetra’s oceans are unpredictable and also dangerous—which is why there are <Link to="/world/databases/TechnologyTransitSystems" className="text-[#c9a84c] hover:underline">Ocean Transit Systems</Link>. These are called <span className="text-[#f2ebeb] font-semibold">Underwater Ocean Train Aquasubs (UOTA)</span> and they offer underwater sea travel while admiring the landscape from underneath. Green City Harbor has a UOTA Express Station along with a ATI-Express Station. Both transportation methods are viable and are significantly affordable.
</p>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Biology and Ecosystem</h2>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Norrane’s Ancient Past wasn’t all like the current modern place it once was. There used to be massive gemstorms that contained huge traces of <Link to="/world/databases/TechnologyTransitSystems" className="text-[#c9a84c] hover:underline">Hexicules</Link>. During the Divine Creation Era (<Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">D.C.E</Link>), this place was riddled with up to <span className="text-[#f2ebeb] font-semibold">fifteen</span> different storms that ranged from <span className="text-[#f2ebeb] font-semibold">Category 3 - 5</span> because of the elevated landmass Norrane sits on. Past recordings showed that for a duration of <span className="text-[#f2ebeb] font-semibold">three weeks, four storms</span> have happened within the span of <span className="text-[#f2ebeb] font-semibold">three days</span>. These hexicule storms may have nearly destroyed the land, but after these events, weird phenomenon began happening to the soil of the land.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The lands’ soil and fertilizers are nutrient rich. They were able to absorb the properties and residue that came from the hexicules which caused every region to sprout faster—this is called <span className="text-[#f2ebeb] font-semibold">forestation growth</span> via external force (and still is). Almost all of the Wildernaughts on this continent are rich in fiber, chlorophyll, oxygen, carbon, (carbohydrates for vegetation), and plant life. There are also exclusive (native) plant species that cannot be exported out because they need the required nutrients that the land gives.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
But after millennia and centuries, these gem-storms died down significantly and then receded because this land is controlled by an ancient landmarks’ latent abilities. However, even with the nutrient rich hexicule soil, trees and plants grow at a very excessive rate, which can still cause problems for local wildlife.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Most of the forestation here have also affected two local cities, not just the Wildernaught Zones.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Some of these hexicules showers in the past have also affected local lakes and rivers, and they glow a bioluminescent blue and pink. Blue is common throughout the lands, but pink is extremely rare.
</p>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">There’s Some Rumors</h3>
<div className="space-y-4">
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Local cities and denizens say that the NBPlateau from underneath the water has a giant hexicule crystal lodged into its structural support for the continent. They think this is the reason why forestation happens often. It was never confirmed nor denied. But it is a hot theory.</span></li>
</ul>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">A Strange Unconfirmed Rumor</h3>
<div className="space-y-4">
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>The Sanctorum Plains has strange creatures that guard the inner ruins from entry. There is also a small and faint divine shield to the region and no one knows why.</span></li>
</ul>
</div>
</div>
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">This Place never Snows in the Winter</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The soil and biology of this land is so hexicule-rich that floral life emanates some kind of heat which makes it impossible for Norrane to freeze or have snow in the winter. It is a natural lukewarm heating region. The ocean basin that Norrane is surrounded by acts as a natural cooling system when things get too hot. This region regulates itself autonomously.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There is one region that can be affected by snow and cold, but it rarely lets this chance happen if it really wants it to.
</p>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Wildernaughts of Norrane</h2>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Norrane’s Wildernaughts are very safe in terms of creatures. Unlike <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">Lynneria’s</Link> massive Wildernaught zone, everything here, including its own creatures and inhabitants are tame and friendly. Although the NBPlateau is higher in elevation, normal land-based creatures are now native and exclusive to Norrane. This does not affect avian creatures though, since they can fly (obviously).
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Norrane has up to Six Wildernaught Zones, and they are all tame.
</p>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Norhvern Plains</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The first Wildernaught Zone of Norrane. This sits at the very top north of all other wild zones and is home to the Norhvern Mountains. The mountains here are very high in elevation, and in a certain level, snow can be seen because the Norhvern Mountains has its own atmospheric layer. The snow melts at a specific level on the mountains not too far from the surface. In the past, even with the gemstorms that happened, the force and pressure carved these mountains like a spiky drag to the east. Looking at the mountains from afar makes it look like you’re looking at slanted horns.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The top of the mountains are flat where the snow are, and snowboarding is possible. Citizens tend to try not to go over the melting zone. There’s also plenty of hiking trails here, and the sceneries are gorgeous.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">West Verdelgrow Wildernaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
West Verdelgrow Wildernaughts used to be a part of its sister wild, Verdelgrow Wildernaughts before the City of Fallehnhelm was built in-between it. Eventually, this place became its own wild zone. The plant life here grows within a month because the neighboring city, Green City Harbor, can now control the rate of how fast trees, fruit, and plants grow.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The trees here are called Verdelgrow, named after the word <em>verdant—</em>and this tree supplies both Verdelgrow Apples and Oranges. Verdelgrow Apples have a slight flavor of pineapple (sugary taste) combined with honey and mint. Verdelgrow Oranges have a citric taste with a hint of razzberry flavor. Lots of farms have been made in the plains here in this zone because the soil is very fertile.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
West Verdelgrow Trees have a controlled height that goes up to fifty meters because most of the nhuemyns here have plant magic and earth magic.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Verdelgrow Wildernaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The main Wild Zone that is south of Fallehnhelm City and located due center of Norrane. Much like its sister counterpart in the west, Verdelgrow has trees that grow up 132.55 meters (434.87 feet) tall. This place has very dense regions close to the coast while in the centre has one large plainy hill. There’s a stone monolith on this hill that once acted as a Sun Clock during the <Link to="/world/databases/AncientGreungeria" className="text-[#c9a84c] hover:underline">Greungerian Era</Link>. Now it sits atop of that hill lonely without any companions.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There are Verdelgrow Flowers that are a hybrid of Roses and Chrysanthemums that grow near some rivers and lakes. They come in primarily violet and bright blue colors. Finding a rare color like white is like trying to find a four leaf clover. And speaking of clovers, Verdelgrow has an eight-figure petal clover that is super rare to find. The petals are shaped like an elongated rhombus. It’s called the Verdelgrow Clover.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Enarron Wildernaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Enarron Wildernaughts is a huge zone that surrounds the Sanctorum Plains that lives in the center of the Enarron Wilds. This wild zone are home to trees that are used in a variety of buildings and materials called Norrane Hardwood Trees.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Norrane Hardwood Trees are a species of tree <span className="text-[#f2ebeb] font-semibold">native to the continent of Norrane</span>, known predominantly for their exceptional durability and density. The wood of these trees is remarkably resistant, but still can be cut down with proper tools. These trees grow in large numbers across Norrane and serve as one of the continent’s most valuable natural resources. They are a defining feature of the continent’s landscape and economy.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">Notable Uses of Hardwood Trees</span>
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>As a raw structural material, Norrane Hardwood appears as one of the three core components of the <Link to="/world/locales/oakgnar-grand-tree" className="text-[#c9a84c] hover:underline"><span className="text-[#f2ebeb] font-semibold">Oakgnar Grand Tree</span></Link> — alongside a Hexicule Core and Stonewood.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>When combined with <span className="text-[#f2ebeb] font-semibold">Lyecerium crystals</span>, Norrane Hardwood Trees can be processed into <span className="text-[#f2ebeb] font-semibold">Hardwood-Lucid Metal</span> — an engineered alloy that is as hard as diamond and as dense as tungsten.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>There is a small farming factory that plants these trees in this region with a controlled rate. It is eco-friendly and does not hurt other ecosystems within Norrane.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The name of Enarron is the flipped name of Norrane.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Sanctorum Plains</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This wild zone is in the center of the Enarron Wildernaughts—a center piece of land that is natively…protected by a divine barrier. There are ruins within this place that lead into an underground place called the Lucid Sanctum, a large and mysterious cave that reaches beneath the waters and into the NBPlateau’s cave systems. On the surface, there are two ruins.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Gate Ruins</span>. These ruins live on the far west tip of the wild zone. They are surface ruins of old monuments that served as functional sundials and ancient mechanisms from when Norrane was a part of a massive Pangean continent called Greungeria. These monuments in this modern age no longer serve purpose. The Gate Ruins here lead down to an entry cave called the Lucid Ruins which is what connects to the Lucid Sanctum.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Lucid Ruins - A cave system and pathway that connects the underground to the final place of the Sanctorum Plains…., <em>The Lucid Sanctum (</em>more below<em>)</em>. The cave systems here have a lot of underground creatures since they survive on moss and other dead plant life down here.</span></li>
</ul>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">A Historical Landmark and The Sixth Wild Zone</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
And also one of the Seven Wonders of The World
</p>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Tree of Elenia</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
An ancient tree and historical landmark in Norrane. It is located south of Green City Harbor and Fallehnhelm near the border of the continent in the Elenian Dry Plains. <span className="text-[#f2ebeb] font-semibold">The Tree of Elenia</span> is the most famous individual specimen of a Norrane Hardwood Tree, distinguished by its magical orb and sentient nature — a trait no other Norrane Hardwood Tree possesses.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Elenia is the reason why there are no longer any hexicule gem-storms, because her sentient nature was given as an inheritance from a powerful Witch she knew in the past. This is also a reason why the Elenian Dry Plains are barren with dry grass and yellow grass (which is the sixth wild zone). However, the view of this region is still stunning since it overlooks the Norrane Basin Sea. From the elevated landmass from this region, the <Link to="/world/locales/oakgnar-grand-tree" className="text-[#c9a84c] hover:underline">Oakgnar Grand Tree</Link> can be seen from afar<sup><Link to="/world/locales/rynel" className="text-[#c9a84c] hover:underline">[1]</Link></sup>.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There is more to Elenia than what is known. <Link to="/world/locales/tree-of-elenia" className="text-[#c9a84c] hover:underline">Click this to read more</Link>!
</p>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Cities of Norrane</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Land of Norrane is very tame, so Bordered Walls are not needed here. Unlike Lynneria that has countless borders, the Cities here in Norrane offer a relaxing environment free from dangerous creatures.
</p>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Green City Harbor</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
A city north-west of Fallehnhelm. It’s a coastal city of the west and is near the border of Norrane. Green City Harbor used to operate well with East City Harbor (a city in Nharvenile, Lynneria), but due to the massive hexicules that Norrane is made up of, the Green City Harbor was overtaken by forestation near its east border before the West Verdelgrow Wilds. The inner downtown areas of Green City Harbor operate very nicely despite its current shape, but the people here are made up of nhuemyns that have Plant and Earth magic to deal with the concurrent growth of flora, vines, and trees.
</p>
<p className="font-body text-base font-bold text-[#f2ebeb] pt-2">Almagalora Harbor</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Green City Harbor is named Almagalora Harbor, and it sits direct south on the southern peninsula and has up to four different Norraniean Cruise Ships. There is a Norraniean Cruise Line that happens every summer that tours the entire elevated ocean of Norrane and its sceneries. It is a month long activity because it starts and ends on the Seventh Month of Zestia. The Cruise Line only tours around Norrane’s outer coastal shape and never goes out beyond that point. Norraniean Cruise Ships that are native to Almagalora can house up to at least 200k individuals—each with their own Cruise Wrapping.
</p>
<p className="font-body text-base font-bold text-[#f2ebeb] pt-2">Norraniean Cruise Line</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>For a Month Cruise, it costs only Ħ44.99 Hetrix for a group of five (or more) and stays that price.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>A Month Cruise for two people costs Ħ34.99</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>A Month Cruise for one person gets free of cost, though a voucher is required with a referral name, since a Norraniean Cruise Voucher only costs Ħ12.00 Hetrix.</span></li>
</ul>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Fallehnhelm City</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This city sits sandwiched in the center between three wild zones, West Verdelgrow, Verdelgrow (Center Wild Zone) and Norhvern Plains. It’s east of Green City Harbor. This place also operates very nicely, but again, it is the borders that have trouble against the ever-growing forestation and infestations of moss and vines that creep up onto buildings like roots. There are plenty of flat lands in Fallehnhelm that can offer various activities like outdoor picnics and BBQs.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
But the best of all is the sunset scenery—it is gorgeous since this continent has one of the prettiest sky colors during the peak hours of <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">24:44 PM</Link> and ends at 25:49 PM.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Fallehnhelm is also known for its fine food and drinks.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Pheasant Meat Spaghetti</span> - Pheasant Wings topped over Fine Eulerich Sauce with Spaghetti made from <Link to="/world/locales/varleqe" className="text-[#c9a84c] hover:underline">Eastenwharf Wheat</Link>. Wheat from the Eastenwharf Wilds of Varleqe often get imported here to Fallehnhelm.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Verdelgrow Smoothies</span> - A mixture of Verdelgrow Apples and Oranges blended with Verdelgrow Yogurt that comes from Verdelgrow Cows (Verdelgrow Milk). It as a unique taste!</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Jaded Duck Boar w/ Peppered Cilantro Wraps</span> - Served in four servings, this dish is a local specialty to Fallehnhelm because Peppered Cilantro is a native plant that grows really fast. The Cilantro (Parsley) in this world grow like Lettuce.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Nevertheless, within these two cities, most of the inner city buildings like its downtown metro area are safe from the forestation regions since it is more controlled than usual. A lot of fun can be found here in Fallehnhelm and Green City Harbor even for vacation.
</p>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Sanctorum Plains’ Ancient Sanctum</h2>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Lucid Sanctum</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Lucid Sanctum is a mysterious, enchanting place in the southern center of Norrane. It&apos;s hidden deep within Norrane’s underground system and is the only place that can&apos;t be destroyed since it&apos;s guarded with indestructible magic. This place is filled with magic, including crystals of both Lyecerium, Hexicules, and Hetranium. There are bioluminescent ponds and underground water systems that contain underground creatures. This place is home to <Link to="/characters/AloriaCloudwave" className="text-[#c9a84c] hover:underline">Aloria Cloudwave</Link>, who is one of <Link to="/characters/ZohlCelestreule" className="text-[#c9a84c] hover:underline">Zohl’s</Link> friends—and a guardian of this place that is known to be the key of the <Link to="/world/meta/TheMultiverseOfMultitudes" className="text-[#c9a84c] hover:underline">Multiverse</Link>. This is particularly why it has a divine shield to keep local people from entering, since it has classified information and secrets of whatever lays hidden.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
More about this place can be read here in <Link to="/world/meta/TheMultiverseOfMultitudes/lucid-sanctum-multiverse-function" className="text-[#c9a84c] hover:underline">The Lucid Sanctum</Link>’s Multiverse Function.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
From above the Sanctorum Plains, this zone is filled with trees that date back to the <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">Medieval Era of Hetra</Link>. When wind blows past this region, the Sanctorum Plains’ trees sing a very echoey tone.
</p>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Creatures &amp; Beings</h2>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Creatures of Norrane</h3>
<div className="space-y-4">
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><Link to="/world/databases/CreaturesOfTheWorld/DeerDragons" className="text-[#c9a84c] hover:underline">Deeragons</Link> despite being avian deer dragon creatures call this place home. They are attracted to the heat the grass of the wilds give off. Most of them can be found in Verdelgrow Wilds.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><Link to="/world/databases/CreaturesOfTheWorld/Flimpies" className="text-[#c9a84c] hover:underline">Flimpies</Link> also call this place home, since this was where their origin point came from.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Cloudborn Swans</span> are local native species, but they also like to go to other regions within Hetra.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Jellurtle-ortises</span> live under the basin of the water and near some of Norrane’s shores.</span></li>
</ul>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Thulls</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Thulls are magic creatures that guard the Lucid Sanctum in the Sanctorum Plains. These creatures are ridiculously powerful as they are because their magic is fueled by the Lucid Sanctum. If you try and mess with these said creatures, you&apos;ll be gone as quick as you can escape. No one gets out alive unless bargained with.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Lucidiean Blueburn Frogs</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Frogs of an unnatural color of blue; shades of blue. They are cute creatures and can breathe blue fire. These frogs can cure illnesses because of their sweat secretion, which contains a strange kind of acid that is edible for humans. Also a type of prey to Hedgering Blue-Jays.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Lucidiean Hedgering Blue-Jays</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Birds that bear a striking resemblance to hedgehogs with a ring-like pattern. These cute creatures also breathe blue fire. Extremely friendly. Don&apos;t get too attached because these Hedgering Blue-Jays will stay with you throughout your adventures.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Lucidiean Bluetint Koi</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Koi fish. Aside from swimming in bioluminescent ponds, they can survive outside of water for they have adapted to both ocean-life and land life. They fly. Although they are prey to Hedgering Blue-Jays.
</p>
</div>
</div>
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
        <Link to="/world/locales/rynel" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Continent of Rynel</p>
          </div>
          <span className="text-[#c9a84c] text-lg">→</span>
        </Link>
      </div>

    </div>
  );
}
