import { useState } from "react";
import { Link } from "react-router-dom";

// --- Art helper component ---
function VarleqeArt() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Thumbnail — clickable */}
      <div
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer w-full overflow-hidden rounded-sm border border-[#2e2b26]"
      >
        <img
          src="https://i.ibb.co/Ndz4mPJ5/Varleqe-Map.png"
          alt="The Super-Continent of Varleqe map"
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
            src="https://i.ibb.co/Ndz4mPJ5/Varleqe-Map.png"
            alt="The Super-Continent of Varleqe map, fullscreen"
            className="max-w-[95vw] max-h-[95vh] h-auto rounded-sm object-contain"
          />
        </div>
      )}
    </>
  );
}

export default function TheContinentOfVarleqe() {
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
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">The Super-Continent of Varleqe</h1>
      </div>

      <VarleqeArt />

<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Varleqe is a massive supercontinent that is west of all the other continents and almost takes up 1/5th of the globe. Varleqe is inhabited by beasts, mythological creatures, demons, and animals. Direwolves are considered beasts, and Kydel is one of them.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Despite the continent being big, there are many lakes and rivers, where each part of the area has a lush feel. Where there are less rivers, the areas look a bit drier. Some areas are scorched because there are demons living in ruins that often scorch the land due to territorial disputes.
</p>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Species on this Continent</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This continent is riddled with beasts of different species and sizes. They all live in different regions within this territory. In smaller areas, animals live in a condensed area within their own respective kingdom. However, there are two different genres of Kingdoms: Animals and Beasts. The Animal Kingdom is just basic animal life. The Beast Kingdom classifies as a hierarchy of powerful creatures.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold"><Link to="/world/databases/CreaturesOfTheWorld/DemonCreatures" className="text-[#c9a84c] hover:underline">Demons</Link></span> are considered a Beast. They are Rank 1, Tier 2 of the <Link to="/world/databases/CreaturesOfTheWorld/BeastHierarchyKingdom" className="text-[#c9a84c] hover:underline">Beast Hierarchy</Link>. Demons here are not evil, nor are they villains. Their strength, not just power, comes from wealth, wisdom, and knowledge.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<Link to="/world/databases/CreaturesOfTheWorld/HetraDirectWolves" className="text-[#c9a84c] hover:underline">Direwolves</Link> is a Beast within this place. They&apos;re powerful and agile. Come in many different variations. They rival <Link to="/world/databases/CreaturesOfTheWorld/KillerRabbits" className="text-[#c9a84c] hover:underline">Killer Rabbits</Link>. These two are quarreling species that compete over territory and food.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<Link to="/world/databases/CreaturesOfTheWorld" className="text-[#c9a84c] hover:underline">Dragons</Link> are also considered beasts and live in this territory. There are elemental dragons and more! They are Rank 3 of the Beast Hierarchy.
</p>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Wildernaughts of Varleqe</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Within the continent of Varleqe, there are <span className="text-[#f2ebeb] font-semibold">six massive Wildernaught zones</span>, each with their own history and geological landscapes. Despite a land ridden with dangerous creatures, this place shares a rather unique backstory each with their own happenings.
</p>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Demon Wilderbaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This piece of region sits as a huge land up in the north, that is directly next to towns that it controls for security and also importations and goods. Despite this section of the Wildernaughts being wild, it is controlled by a Demon Settlement that is highly respectable in a dangerous land like this, and also quite tame. This land is controlled by a Demon Dragon Elemental named <span className="text-[#f2ebeb] font-semibold">Drevylkhar</span> who oversees the entire continent of Varleqe. The Demon Wilderbaughts is split into three regions:
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">The Northern Demon Wildernaughts (NDW)</span> - This particular region is where most of the higher class demons live, since they have direct access to the northwest sea and also the eastern channel.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Central Demon Wildernaughts</span> (CDW) - A region that is both in between the north and south. This is where most of the demon settlements live and is also home to the <Link to="/world/locales/yhursian-demon-church" className="text-[#c9a84c] hover:underline">Yhursian Demon Church</Link> that was built a long time ago.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">The Southern Demon Wildernaughts</span> - South of both the CDW and the NDW, this is where the lesser slums live. It’s not too poor, but more of a mid-range slum where life can be manageable. There is a lake close to this region that they have access to.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Drevylkhar is the reason why this region has a slight rename of Wildernaughts to Wilderbaughts. He is currently one of the most powerful Demon Dragons of the entire region. Drevylkhar’s name can be shortened to Drevyl.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Both the NDW, CDW, and SDW’s landscapes aren’t as messy because most of the lands have been shaped by demons themselves for easy land travel. There are mountain ranges that live near some of the coastal borders but they aren’t too high and elevated. Demon Culture within these lands never boast about raw power or strength, but rather almost all settlements offer hospitality and affordable prices.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>In small hindsight, there are some demons that can talk like Drevyl while some others can’t despite their intelligence. Of course, one can naturally learn to speak Hetranian English since it is a workaround, but learning Speech Magic is a better way to go.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Drevyl will never interrupt or meddle with inner interspecies affairs because he believes it can be resolved without higher-ups or actual authority and power. If a quarrel happens within interspecies, that said party will have to try and solve it, even through means of violence.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Drevyl is 15% Demon, and 85% Dragon—crossbred with an Elemental Ground Dragon, and is a far descendant of <Link to="/world/databases/CreaturesOfTheWorld/DemonCreatures" className="text-[#c9a84c] hover:underline">Khalfvyskov</Link>, the progenitor of all demons. But being a dragon means that his Demon Biology for the <Link to="/world/databases/CreaturesOfTheWorld/DemonCreatures" className="text-[#c9a84c] hover:underline">Quick Death</Link> is negated because his dragon cells override the limit.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Eastenwharf Wildernaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
A region that is northeast of the Demon Wildernaughts. During the Modern Past of Hetra, Eastenwharf had a lot of docks and piers in the north that led out to Lynneria for transport, goods, and imports. This is particularly because this region has one famous ingredient that almost all specialty dishes have from around the world (for different recipes).
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Eastenwharf Milk - It comes from Eastenwharf Cows that contain high traces of natural probiotics and prebiotics because of the grass these species consume. Eastenwharf Grass is dead grass—but it looks healthy because there are worms that occasionally salivate it so that it stays preserved. The salivation on these grass later dries out due to the sun, which is why this type of ingredient is highly favored in high-class dishes. A dish made from Eastenwharf Milk like Eastenwharf Spaghetti and Calamari is usually sold for around Ħ52.55 Hetrix.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Although the docks and piers rotted, most of it remains as a historical landmark that is worth sightseeing. There is one gulf inlet that shares with the Savageraught Mountains’ coastal area, and two inner lakes.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">Pleasant Sceneries and Lands</span>
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The landscape here in Eastenwharf are considered not ferocious like other wild zones. Most are plains of green and dry grass, while in other places there are steep hills. On the most north-eastern peninsula is where the <Link to="/world/locales/varleqian-waterfall" className="text-[#c9a84c] hover:underline">Varleqian Waterfall</Link> lives, and it is on the highest mountain that goes up to sky length. This waterfall is currently the highest natural formation known to mankind. It stands a whopping height of 3,833 meters tall, and it is considered one of the Seven Wonders of the World.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Savageraught Wildernaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This region of the Wildernaughts is ridden with <Link to="/world/databases/CreaturesOfTheWorld/KillerRabbits" className="text-[#c9a84c] hover:underline">Killer Rabbits</Link>. They are highly dangerous, lethal creatures that kill without restraint. Often known as Werebels, these creatures fight <Link to="/world/databases/CreaturesOfTheWorld/HetraDirectWolves" className="text-[#c9a84c] hover:underline">Direwolves</Link> for territory near the border because they want to expand their region—a neighboring Wildernaughts called Wolvenwind Wildernaughts.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
But it’s not just Killer Rabbits that live in the Savageraughts. There are Grayhounds, Werewolves, Werecats, Catwolfs, Pyroleos (Fire Lions), and Stygian Batragons (more can be <Link to="/world/databases/CreaturesOfTheWorld" className="text-[#c9a84c] hover:underline">read here</Link>). However, this place isn’t just teeming with strange creatures. These creatures constantly fight against the Killer Rabbits because this place is also their home, despite being weaker than them. Killer Rabbits and Direwolves are long term rivals, and no side will ever give up easily. Even the lesser creatures consider that these Werebels are dangerous and that they deserve no place within Varleqe’s history, despite it already sealed by fate from the past and up to now.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">Notable Creatures of Varleqe</span>
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Most of the Pyroleos live within the Savageraught Mountains since it gets really cold during the winter due to the high elevation.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Grayhounds have an appearance of a lizard snout, wolf eyes, and a lion&apos;s body with wings. They almost look like griffins but their lion body are textured like lizards. Grayhounds like to perch at high elevations.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">A Savageraught Backstory</span>
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The history within the Savageraught stems from inconsistent hierarchy between the Animal kingdom and the Beast Kingdom. Before this place was swarmed with Killer Rabbits, they were merely cute albino red-eyed rabbits. These innocent rabbits at the time were hunted down by Hetranian Direwolves for food until only two remained. Then a shift happened. In 15 AD, a vampire by the name of Dhivlaine took those two albino rabbits. He technically <em>saved</em> them but no—oh no he didn’t.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
He took those two innocent rabbits and sterilized them—then put his own DNA into them. However, the experiment went wrong with one of his catalytic potions and the rabbits turned into giant, horrendous creatures with immense power, strength, and vitality. They killed Dhivlaine and took his heart as a way to consume energy to power up, then bred with each other until a massive scale of them appeared to rival the Direwolves. The sterilization supercharged the fertility rate of these now-killer rabbits.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
And thus was the start of the Killer Rabbit Era.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Drevyl never took notice of this until 30 AD, since that was the peak of mass destruction.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>25 AD was when the first Alpha Werebel rose and decided to cause chaos throughout the region of Savageraught. More Alpha Werebels came to be after before the peak of mass destruction really came down on.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">A History of Scarred Landscapes</span>
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The lands of Savageraughts have survived countless battles against their rivals and enemies throughout centuries. There are a lot of scattered mountains and hills left behind from brute force aside from broken terrain and large craters.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Around the middle of the wilds of this place has a lot of flat plains and hills that curve around each other and they served as leaping points for the rabbits because the particular angle these landscapes were created by are from jumping force. It is almost like a launch pad that the Rabbits use to get into the Wolvenorth Wildernaughts.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
But the most beautiful sight here is within the Savageraught Mountains that are located up north-east in the northern peninsula. Mountainbearer Ruins<sup><a href="#ruins-of-varleqe" className="text-[#c9a84c] hover:underline">[1]</a></sup> is located on the top of Savageraught Mountains’ flat range along the peak. Some say the Mountainbearer Ruins was home to an ancient civilization that specialized herbal remedies that are said to cure incurable diseases. Though it was never confirmed if such events happened.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Wolvenwind Wildernaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
This Wildernaught is home to one of Hetra’s finest beast creatures, beautiful yet dangerously powerful, <Link to="/world/databases/CreaturesOfTheWorld/HetraDirectWolves" className="text-[#c9a84c] hover:underline">Hetranian Direwolves</Link>. There are two subregions of this wild, Wolvenorth Wildernaughts and Southernwulf Wildernaughts. In the north, here lives the Wulfwing Species, and in the south, the Coppercrests. These species are rivals to the Killer Rabbits—two species that fight—one side of the same coin.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There are often territorial disputes, quarrels for food, land, markings, or reclaiming certain history. But, between the Killer Rabbits and the Direwolves, the Direwolves themselves never kill—they only stun or make unconscious.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
If something really gets out of hand or becomes too hard to contain, killing would be the only way for Direwolves to stop disputes that might become too much. It’s a weird loophole that most Direwolves use to take advantage.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Both the species in Savageraught and Wolvenwind know to avoid human settlements—because if even an accidental kill or manslaughter happens among the inhabitants, Drevyl will step in. The consequences are dire (pun intended). Fights tend to steer clear distances away from settlement of Greenside Hills.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The first time Drevyl encountered a Direwolf, he knew exactly why they are gentle creatures. This is because Hetranian Direwolves are very intelligent. Although they cannot speak, they can sense intuition because of the discernment trait that they carry—a hereditary ability that all Direwolves have. The whiteness of their fur from their head to their neck symbolizes this trait they have.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">A Scarred History of Beautiful Landscapes</span>
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The landscapes here are not just a battlefield, but they serve as history deep within Direwolf culture. A single force or impact is known to shape the land it is now, either from clashes against the Rabbits or just pure flex. There are multiple steep and long cliffs that have been shaped by the force of a powerful swing from the tail. Most of the lands created by these creatures are mostly cliffs. There are a lot of scattered mountains that are created from centuries of battles near the subregions’ borders.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Most of these landscapes that were created from the wolves are also known as habitats—places that are hidden from plain sight that serve as homes for these direwolves. They’re tucked in caves and dens that are often found as remnants of older geological cavities that aren’t caused by battles.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">West Coastal Wildernaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
A region that is southwest of Savageraught, Wolvenwind, and west of Kharven Wildernaughts, this place is unusually tame aside from its other Wildernaught sisters. Why is this place unusually tame, one might ask? Well, that’s because there are a lot of <Link to="/world/databases/CreaturesOfTheWorld/Flimpies" className="text-[#c9a84c] hover:underline">Flimpies</Link> that live here—cute ghost bunnies (rabbits) that are wild, elusive, and small. The population of these ghost bunnies are very dense because this place is full of Bluebloom Apricorns, which is their favorite food. Most dangerous creatures stay away from here because a pack of Flimpies, if not 100, can paralyze a being if they are startled enough.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
In 1475 Aftendaye (AD), Drevyl recorded at least 500 Flimpies that killed a single Killer Rabbit because of the sheer pressure, volume, and fright. A single Flimpie when startled will let out a small taser that will only tickle, but if a huge volume of them are present and combined (like 500), that taser becomes a lightning bolt that can paralyze any foe.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
West Coastal Wildernaughts is quite a beautiful place—there are hills that roll around and beautiful scenery that you can see the ocean from. There are also a lot of whale sightings here as they like to breach from the gulf of Varleqe along with the coastal shores. Near the south of the coast, there are cliffs that extend out over the west coast that creates a perfect vantage point to fish from. More inland, there aren’t much mountains aside from small scattered cliffsides.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Kharven Wildernaughts</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
A Wildernaught that is southeast of everything. The grassy lands here are carved (not literally) by a huge windstorm in the past which now takes shape as huge rolling hills that span up to at least a four-story building’s length. They aren’t tall. They are long. It takes at least an hour to scale one hill. But once you reach the top, the lands are very flat, and the grass here is very warm and soft. Going down is simple: just slide and let gravity do the work.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>There are cliffs that overlook hills and flat plains that curve around and ascend up. There aren’t many mountain ranges but lots of elevated hills and cliffs</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Kharven Wildernaughts is also known for some pretty cool mountain formations—most particularly the Kharven Mountains that almost look like three elephant tusks combined, but massive. The underside of these mountains is filled with inner caves and dripstones, which make a home for night dwellers like nocturnal animals. There are a lot of species that live in these mountains—but the most specific ones are <Link to="/world/databases/CreaturesOfTheWorld" className="text-[#c9a84c] hover:underline">Buffalosaurus Ants</Link>—huge ant-like buffalos that can walk on cavern walls.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Buffalosaurus Ants are cousins to Buffalosauruses, bug-dinosaur-like buffalos.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>They’re passive aggressive—if you attack a developing ant, you face a horde of them.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Buffalosaurus Ants give off a very pleasant pheromone, which is often used in perfume products.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There is an inlet of water here in the Kharven Wilds that is so clean, the water is drinkable because of how the Buffalosaurus Ants purify and filter the impurities away from it. There’s a dam that’s built near the ocean that contains special saliva from these creatures that is used to hold it together. This saliva that comes from these giant ants is a natural filter.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Wildernaughts of Varleqe isn’t just dangerous, but there are many views that might be worth seeing.
</p>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">Village Settlements of Varleqe</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There aren&apos;t many districts here unlike Lynneria&apos;s districts. Varleqe is full of dangerous creatures, but also immaculate views of scenery. There are a total of four unique settlements, each with their own walled borders. There are three settlements that surround the Demon Wilderbaughts, and one far southeast of them. These settlements are also walled for protection against the wilds.
</p>
<p className="font-body text-base font-bold text-[#f2ebeb] pt-2">Circle Settlements around The Demon Wilderbaughts</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There are a total of three settlements that surround the Wilderbaught, one in the north, one in the west, and one in the south. Drevyl is super friendly with the settlement’s Mayors, specifically Greenlux and Ribbonfelt. Greenside Hills is also friendly with Drevyl, even though it is not a part of that region.
</p>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Village of Greenlux</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Greenlux Town is located on the northern peninsula, beyond the Northern Demon Wildernaughts. Greenlux is very close to the border of Varleqe and was considered a thriving town back in the days. However, due to the population of beasts, many humans have fled from this place. This place only has 300 inhabitants left, and most of them are <Link to="/world/databases/TheNhuemynDB" className="text-[#c9a84c] hover:underline">nhuemyns</Link>: dryads, elves, and dwarfs. The housing here is pretty cheap, usually around Ħ549.99 Hetrix. The houses are small with no kitchen, because this place is community driven with a community chef and kitchen.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There isn’t much history here. But some important facts were that during the Greungerian Era, <Link to="/world/databases/HibrythianReligions" className="text-[#c9a84c] hover:underline">Valthorieans</Link> from the <Link to="/world/locales/alarctic-alpines" className="text-[#c9a84c] hover:underline">Alarctic Alpines</Link> often used the north part of this land as a hub for ports and ships. A small destination so that ships could sail around the world. But this eventually died out after <Link to="/characters/QueenEiraValthorne" className="text-[#c9a84c] hover:underline">Queen Eira</Link> disappeared.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Ribbonfelt Town</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
A town southwest of Greenlux. Ribbonfelt was important back in the past of Varleqe, since many people come to this place to send out lanterns because of its tradition, SeaLit Lanterns. This town is west of the direct Demon Wilderbaughts in the northern region. Most of the high-class demons visit this area because this town oversees the Ribbonfelt Coast, which by any means, is <em>very beautiful.</em>
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The food and accommodations are also promising. This town is known to produce some of the finest clothes because it has six hundred bales of silk-grade cotton. There is a specific flower that blooms all seasons called a Ribbonfelt Lily (hence the town name) that produces Golden Silk Wax that is used in suits and other fine goods, along with food.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Ribbonfelt Lilies are easy and manageable to grow. It takes three full weeks for full blossom, and five days to produce Golden Silk Wax.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Golden Silk Wax is often made into:
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>When processed into <span className="text-[#f2ebeb] font-semibold">fabric</span>, it’s often used in clothing like: Tuxedos, Boots, Shoes. Combined with leather and you get a very smooth and scaly texture.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Golden Silk Chicken Skewers</span> - The silk is edible when cooked. It has a unique lychee mixed lemon flavor.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Ribbonfelt Tea</span> - it has a minty matcha flavor with a petal used alongside the silk. Boil it, then let it cool to room temperature.</span></li>
</ul>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Ribbonfelt is considered a High Class Settlement despite it being next to the Northern Demon Wildernaughts. It was a label that was put by some of the demon individuals even as word spread. This place has up to 1,000 people because of the emigrants from Greenside Hills.
</p>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Oldtree Cementery</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Oldtree Cementery is a small village with its cemetery as its primary attraction. Located south of Ribbonfelt and Greenlux. This place is built near the west coast north of the Varleqe Gulf. The buildings here use Cobblestone, Processed Smooth Karterstone, and Quartz. That is the reason why this village is called Cementery since it is built on a stone-like coastal biome.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Cemetery here in this village is a memorial that is built under Makveh, a huge tree that overtakes the memorials of forgotten souls.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
In the past, Makveh was planted by the village’s first mayor, who passed away eighty years after. A second mayor came to be and that was when the tree got its name. <Link to="/characters/MorhvTheSpiritOfDeath" className="text-[#c9a84c] hover:underline">The Spirit of Death</Link> visited this town out of curiosity after it fully sprouted because a memorial was built under the tree itself. The entity liked how it represented: <em>a protector of souls,</em> and, <em>the tree that protects all.</em>
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The second mayor struck up a bargain with The Spirit of Death, and sealed it by naming the tree Makveh. That bargain remains a mystery though. No one knows what it was in the first place. After the last mayor passed, Drevyl stepped in to keep the peace, but left the village in the hands of its people. Over the centuries, it became a tight-knit community governed by the people themselves.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There were around two hundred and fifty mayors in all, and because most were <Link to="/world/databases/TheNhuemynDB" className="text-[#c9a84c] hover:underline">nhuemyns</Link>, specifically Elven Elders (elves who live up to 200 years), the line stretched back tens of thousands of years.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Drevyl didn’t overtake the villages in Varleqe. He helped balance the entirety of the continent because he saw how chaotic it is with the many dangers that lurk in the wilds.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
As of 2245, Oldtree Cementery has 850 people.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">Oldtree Makveh</span>
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Makveh is 50,000 years of age and is a Pseudo-Wonder of the World. However, it is not famous enough to be in the Seven Wonders, since it is more niche to the village itself.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Makveh was planted long before the <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">Aftendaye Era</Link>, back in the <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">Divine Creation Era</Link> (D.C.E.), well before the Oldendaye and the Greungerian Era. Its first appearance predates all record-keeping, so the specific date is unknown.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>A single root that grew from Makveh became the village’s border on the inside while a wall was built outside of it to stop dangerous creatures from entering. The border extends into the Savageraughts slightly.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>There’s a huge section in some of its roots where the Mayors from the past are laid to rest.</span></li>
</ul>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<p className="font-body text-base font-bold text-[#f2ebeb] mb-3">A Settlement In-Between Savageraught and Wolvenwind</p>
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Greenside Hills Village</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Smack-dab in the center of Southern Varleqe, southeast of the other three towns, Greenside Hills was a city that once was active, formed in 84 AD. This place used to be a tourist attraction for people around the world because of its beautiful architecture that the buildings are built on. Even to this day, the buildings have remained fresh and preserved since it was built out of material that was made to withstand corrosion and degradation.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
In the past, specifically in 784 AD, Greenside Hills had up to 3,500 people living, because all of the buildings are interconnected like a spiderweb—which was what made it famous. But due to the sheer amount of forestry, sunlight, and rainstorms, most of the buildings near the border were either destroyed or overtaken by vines. The inner part remained safe, however.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Although most of the buildings are vine-infested, the city has since become a village because there are still some inhabitants living here in a working part of the area. The border of this village is built on cascading hills that surround the village, which makes it difficult to climb because of how steep and strong the foundations are. The decline from 3,500 wasn’t too quick. Low resources over time were what made some individuals emigrate to either Ribbonfelt or Oldtree, while some remained. Some of those people have also emigrated to Lynneria, Eulerich, and Rynel.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
There are at least 400 people left living here in the present (as of 2245).
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The denizens of this place are very extroverted, which is why they are friendly with Drevyl.
</p>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
<span className="text-[#f2ebeb] font-semibold">Greenside Hills Demon Security Team (GHDST)</span>
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>Deployed by Drevyl himself because this place is under attack by Killer Rabbits. Most of these dangerous rabbits want to take this village as their territory because the inner buildings serve as protection and also a disarming object because of the web-like maze (since it is interconnected).</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">GHDST</span> mainly comprises powerful Elemental Dragonkin that often deal with the Savageraughts’ Killer Rabbits. Most of the GHDST got Direwolves as allies to help against these annoyances.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>The GHDST does not meddle with settlement affairs. It is more about border patrol along the Savageraughts’ border. The old security of this town was not enough, so Drevyl made sure this place gets enough <span className="text-[#f2ebeb] font-semibold">protection</span> from the wilds.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Settlement Affairs</span> remain between individuals. If a quarrel happens between two individuals, they will need to resolve it before it gets out of hand.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span>The people of Greenside Hills will treat the GHDST as one of their own individuals. If the GHDST is to protect the settlement, then it is the settlement’s duty to return care and rest for them. Healthcare and accommodations for a highly advanced team should be a priority for both sides.</span></li>
</ul>
</div>
</div>
</div>

<div className="space-y-6">
<h2 id="ruins-of-varleqe" className="font-display text-lg text-[#f2ebeb] mb-4">Ruins of Varleqe</h2>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Mountainbearer Gate Ruins</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Mountainbearer Ruins resides in the Savageraught Mountains in the region near the eastern peninsula, close to the oceans. Down on the east coast, a huge cavern opening opens up where the oceans’ water flows downward into the Lush Caves. The salt water is filtered out into fresh because of the rocks and pebbles it goes through. They act as filter channels. Although the actual ruins live on the top of the Savageraught Mountains, some of the historical residue went underneath too.
</p>
<ul className="space-y-2 pl-4">
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Mountainbearer Lush Caves -</span> Not much to it, but it&apos;s a prominent location. The area underneath the Gate Ruins is filled with lush caves, so there&apos;s plenty of animals there that have a unique biology.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Lush Axolotls</span> - They live in the lush caves underneath the ruins and they glow a very teal color in the daylight. This is because of the bio-nutrients from the moss that grows on the caves’ walls.</span></li>
<li className="font-body text-base text-[#c8c2ba] leading-relaxed flex gap-2"><span className="text-[#c9a84c] shrink-0">&ndash;</span><span><span className="text-[#f2ebeb] font-semibold">Ambient Mossy Bats</span> - Bats that evolved to eat Moss. Instead of flying, they glide from high perches and altitudes in the caves. Their skin and fur are coated with tiny microscopic hairs that allow them to attract moss so that they can spread it to different parts of the caves. They glow a similar color to the Axolotls. Derpy and tame. They’re like Bees, but made for Lush Caves.</span></li>
</ul>
</div>
</div>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">Kharven Stonehenge</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
A strange formation of triangle-like rocks with a 90 degree top punctured upside down into the ground. The top is flat and more triangle-like rocks are built upon it. Each of these blocks is about the size of Egyptian Monoliths (20 Meters). The ground layer has around 15 formations while the second top layer has 10, five laying horizontally on their sides while the remaining five stand high. No one knows where this came from. It just appeared, and has stood to this day without a trace of disappearance.
</p>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Gulf of Varleqe</h2>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Gulf of Varleqe was formed from a meteor impact in the past. Parts of the lands are still here, now known as islands. The rest of the land is submerged under the water since a city once thrived in this region of the continent. However, the city now is preserved in the depths of the gulf.
</p>
<div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5">
<h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Underwater Chambers</h3>
<div className="space-y-4">
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
The Underwater Chambers is hidden under the waters off of the Gulf of Varleqe, southwest. It&apos;s home to mermaids and sirens.
</p>
</div>
</div>
<p className="font-body text-base text-[#c8c2ba] leading-relaxed">
Varleqe isn&apos;t just some dangerous continent—it has a shared history of how people view a massive land full of mysteries and wonderful new sights despite the danger.
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
      </div>

    </div>
  );
}
