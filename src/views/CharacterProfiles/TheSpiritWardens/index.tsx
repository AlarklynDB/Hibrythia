import { Link } from "react-router-dom";

const wardensList = [
  { num: "1.", name: "Fey", color: "Sky Blue", hex: "#87CEEB" },
  { num: "2.", name: "Jinn", color: "Pastel Pink", hex: "#FFB7C5" },
  { num: "3.", name: "Tay", color: "Wood Magenta", hex: "#C2698F" },
  { num: "4.", name: "Zena", color: "Turquoise", hex: "#40E0D0" },
  { num: "5.", name: "Zaea", color: "Banana Yellow", hex: "#FFE135" },
  { num: "6.", name: "Rein", color: "Light Blue Snow", hex: "#B0D8F5" },
  { num: "7.", name: "Ash", color: "Ash", hex: "#B2BEB5" },
  { num: "8.", name: "Jade", color: "Jadeite Green", hex: "#00A86B" },
  { num: "9.", name: "Cal", color: "Pastel Orange", hex: "#FFB347" },
  { num: "10.", name: "Lana", color: "Violetgrass", hex: "#9B59B6" },
  { num: "11.", name: "Stella", color: "Shamrock Green", hex: "#009E60" },
];

const naele = { num: "——", name: "Naele", color: "Ruby Red", hex: "#9B111E" };

const mergedBack = ["Zena", "Zaea", "Rein", "Ash", "Stella"];

const currentWardens = [
  { num: "1.", name: "Fey" },
  { num: "2.", name: "Jinn" },
  { num: "3.", name: "Tay" },
  { num: "4.", name: "Cal" },
  { num: "5.", name: "Jade" },
  { num: "6.", name: "Lana" },
];

export default function TheSpiritWardens() {
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
          The Spirit Wardens
        </h1>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-64 rounded-xl bg-[#1a1714] border border-[#2e2b26] flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4844]">[ Spirit Wardens illustration — coming soon ]</p>
      </div>

      {/* Where they Originated */}
      <div className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Where they Originated!</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          One of Zohl&apos;s tasks was to create a Spiritqual, a cave or den that is powerful enough to be indestructible and can house spirits. After that, he cloned himself 12 times, all perfect clones with their own mindset and personality. The Spiritqual is located in an underground cave, on the floating continent of Hetrania.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Spirit Wardens are clones of Zohl. There are 12 Wardens, all perfect clones with their own mindset and personality.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zohl told his twelve clones to name themselves freely and this was what they came up with. Their names also determined their amulet color:
        </p>

        {/* Wardens Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {wardensList.map((w) => (
            <div
              key={w.name}
              className="flex items-center gap-3 border border-[#2e2b26] rounded-xl px-4 py-3 bg-[#1a1714]"
            >
              <div
                className="w-4 h-4 rounded-full shrink-0 border border-[#2e2b26]"
                style={{ backgroundColor: w.hex }}
              />
              <div>
                <p className="font-display text-sm text-[#f2ebeb]">
                  {w.num} {w.name}
                </p>
                <p className="font-body text-xs text-[#7a746e]">{w.color}</p>
              </div>
            </div>
          ))}
          {/* Naele — separated */}
          <div className="flex items-center gap-3 border border-[#9B111E]/40 rounded-xl px-4 py-3 bg-[#1a1714] col-span-2 sm:col-span-1">
            <div
              className="w-4 h-4 rounded-full shrink-0 border border-[#9B111E]/60"
              style={{ backgroundColor: naele.hex }}
            />
            <div>
              <p className="font-display text-sm text-[#f2ebeb]">
                —— {naele.name}
              </p>
              <p className="font-body text-xs text-[#7a746e]">{naele.color}</p>
              <p className="font-body text-xs text-red-400 mt-0.5">Later split from the group.</p>
            </div>
          </div>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The Spirit Wardens&apos; forms are configured by Zohl. The Wardens have an appearance of an Amulet Necklace. However, this form is their only one. The Spirit Wardens has the same powers as Zohl&apos;s Pendant Powers.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Each of these clones&apos; amulet are coded with different colors in the color spectrum that Zohl had configured. They also know Zohl as the original Spirit. Zohl&apos;s spirit color is Divine Orange. However, the warden spirits lose their divinity.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zohl then named his clones as the Spirit Wardens. Zohl tasked them to guard the Spiritqual from potential threats or just invaders. But if one ever chose to come near, the clone will have to choose the individual as a Hibryd.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The first ever Hibryd chosen was anointed by Rein. This said hibryd was an Owl, who Rein wanted to name, but the owl named himself &quot;Leon.&quot;
        </p>
      </div>

      {/* Leon's Powers */}
      <div className="space-y-4">
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Shortly afterward, Rein took it upon his role to anoint Leon as a Hibryd, making him sentient. Rein gave Leon a subset of powers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              name: "Psychic Wingblade",
              desc: "Swipes of psychic blades of air propelled by wing movement at sharp speeds."
            },
            {
              name: "Knowledge Absorption",
              desc: "Allows Leon to instantly know information and knowledge from basic surroundings, including history. However, this power is limited just to a vicinity or area."
            },
            {
              name: "Lightflash",
              desc: "Flashes a bright blinding light to confuse a foe or an opponent."
            },
            {
              name: "Screech Sonar",
              desc: "A sound ability. This allows Leon to chirp/tweet at a very loud frequency."
            },
          ].map((p) => (
            <div key={p.name} className="border border-[#2e2b26] rounded-xl px-5 py-4 bg-[#1a1714]">
              <p className="font-display text-sm text-[#f2ebeb] mb-1">{p.name}</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          These powers that Leon have is focused mainly on dexterity and also the animal symbolism. Much like how Aloria Cloudwave&apos;s powers are! (Rein took inspiration from her).
        </p>
      </div>

      {/* The Rogue Bond */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Rogue Bond</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          After a few decades on Hetra, one Warden went rogue and almost caused damage to the Spiritqual. That Warden was Naele. However, the rest of the Wardens stopped Naele. But after a short duration of time, Naele escaped out into the vast world of Hetra in his amulet form.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Obviously, the rest of the Wardens reported back to Zohl, which made him extremely upset. Zohl called up Rein who was with Leon, and asked them if they had seen Naele. But to their surprise, both Leon and Rein didn&apos;t know where Naele went. So in a group, the Wardens along with Leon and Zohl searched for Naele. Cal was the one who found Naele, but they were too late.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Naele unfortunately bonded with someone he thought was an actual spider, BUT he was wrong! He bonded with a Demon Witch named Rachnaea (her name confused him because it sounds like a spider&apos;s name).
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Rachnaea&apos;s <strong className="text-[#f2ebeb]">demon heart</strong> poisoned Naele, but he didn&apos;t care one bit. Cal, Zohl, Rein, along with Leon tried to stop Naele and Rachnaea, but they were too strong together. So Cal, along with the others, went back to the Spiritqual to brainstorm ways to take down this said opponent. They had no options, so they had to wait to find and anoint a Hibryd. Even Leon wasn&apos;t powerful enough to take down the demon witch.
        </p>
      </div>

      {/* Zohl's "Pawn" */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Zohl&apos;s &quot;Pawn&quot;</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Many millennia, quincentenaries&apos;, and decades later, it became the year 2245. On the fifth month in the summer, Leon was getting old and Rein can&apos;t continue without a new host. However, he can merge back with Zohl if Zohl needed his clones to fuse back together. Zohl who was here on Hetrania sensed a very noble and kind heart heading its way towards the island, so Zohl asked his current clones to gather up.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The plan was to anoint the upcoming being as a Hibryd, and after the hibryd wakes up, Leon will pass on his inheritance to said hibryd, along with some new powers. Yes, you&apos;re thinking correctly. That Hibryd was Kydel — a <em>pawn</em> for Zohl&apos;s plan to right his wrong doings from the ancient past with Naele and Rachnaea.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          (Zohl is a perfectionist).
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          After the plan was set, Zohl chose four of his clones to merge back with him, since his power was weaker after he cloned himself.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          This was Zohl&apos;s choosing of who he wanted back:
        </p>

        {/* Merged clones list */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((num, i) => (
            <div
              key={mergedBack[i]}
              className="flex items-center gap-2 border border-[#2e2b26] rounded-lg px-4 py-2 bg-[#1a1714]"
            >
              <span className="font-display text-xs text-[#4a4844]">{num}.</span>
              <span className="font-display text-sm text-[#f2ebeb]">{mergedBack[i]}</span>
            </div>
          ))}
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          The plan was a success, and Kydel was given a new beginning at life.
        </p>
      </div>

      {/* Current Wardens */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Current Wardens as of the year 2245</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          These are the current Wardens who still guard the Spiritqual to this day. The current wardens haven&apos;t made an appearance in the series yet, but they will one day.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {currentWardens.map((w) => (
            <div
              key={w.name}
              className="border border-[#2e2b26] rounded-xl px-4 py-3 bg-[#1a1714]"
            >
              <p className="font-display text-sm text-[#f2ebeb]">
                {w.num} {w.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Naele's Passing */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Naele&apos;s Passing</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          It&apos;s the year 2245. Rachnaea laid siege on the Town of Amberwick in the Continent of Lynneria (even after centuries and millennia). Kydel (originally from Varleqe) traveled around the continents with Zohl, then later met Raeya (and some cool friends!).
        </p>

        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Later in the Journey….</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Kydel found out that Zohl had manipulated him into doing something in which Kydel can&apos;t refuse or say NO to. They fought each other before Rachnaea joined in to fight them.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A huge battle ensued: Kydel, Raeya, and Zohl fought Rachnaea. Zohl, despite using Kydel as a &quot;pawn,&quot; his plan had failed after Kydel went FULL BESERK after Rachnaea killed Raeya (Raeya sacrificed herself for Kydel to win).
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Zohl&apos;s perfect plan of righting his wrong was shattered. His plans weren&apos;t going his way anymore.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Kydel killed Rachnaea, which resulted in Naele passing away (which scared Zohl).
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            But Kydel…? His emotions churned like a hurricane. He&apos;s conflicted. Raeya is gone because of Rachnaea.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            He begged Zohl to revive her. He agreed, but demanded Kydel&apos;s trust to be honest with him.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Afterwards……Zohl replenished his lost power back by uncapping his infinite divine energy and recapping it.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Raeya is back with the help of Zohl.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Kydel taught Zohl that not all plans are perfect.
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
