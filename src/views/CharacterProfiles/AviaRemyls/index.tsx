import { useState } from "react";
import { Link } from "react-router-dom";

const PowerToggle = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors duration-200 text-left"
      >
        <span className="font-display text-sm text-[#f2ebeb]">{label}</span>
        <span className="text-[#c9a84c] text-sm">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#131210] border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
};

export default function AviayRemyls() {
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
          Avia Remyls
        </h1>
      </div>

      {/* Story Info Callout */}
      <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4">
        <p className="font-display text-sm text-[#f2ebeb] uppercase tracking-widest">Story Information</p>
        <p className="font-body text-sm text-red-400">Information on this page contains Spoilers for Book 1!</p>
        <hr className="border-[#2e2b26]" />
        <div className="space-y-1">
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Story Role</p>
          <p className="font-body text-sm text-[#c8c2ba]">Recurring Character</p>
          <p className="font-body text-sm text-[#c8c2ba]">Knowledge Seer</p>
          <p className="font-body text-sm text-[#c8c2ba]">Descendant of Veria Manor</p>
          <p className="font-body text-sm text-[#c8c2ba]">Species: Lesser Half Demon</p>
        </div>
        <hr className="border-[#2e2b26]" />
        <div className="space-y-1">
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Story Presence</p>
          <p className="font-body text-sm text-[#c8c2ba]">Hibryds Book 1 EP VII: About Raeya</p>
          <p className="font-body text-sm text-[#c8c2ba]">Hibryds Book 2: (Rueholween event)</p>
        </div>
        <hr className="border-[#2e2b26]" />
        <div>
          <p className="font-display text-xs text-[#c9a84c] uppercase tracking-widest mb-2">Character Type</p>
          <p className="font-body text-sm text-[#c8c2ba]">Round</p>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-64 rounded-xl bg-[#1a1714] border border-[#2e2b26] flex items-center justify-center">
        <p className="font-body text-sm text-[#4a4844]">[ Avia Remyls illustration — coming soon ]</p>
      </div>

      {/* Origin and Backstory */}
      <div className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        {/* A Legacy Reclaimed */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Avia Remyls, The Modern Veria Manor</h3>
          <p className="font-display text-base text-[#f2ebeb] mb-2">A Legacy Reclaimed</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia Remyls — full name <strong className="text-[#f2ebeb]">Aviel E. Remyls III</strong> — is a half-demon who carries the weight of an ancient legacy on her shoulders. She is a direct descendant of the original <strong className="text-[#f2ebeb]">Aviel E. Remyls the 3rd</strong>, a legendary knowledge seer who once lived in the city of Eldreule and was known throughout the land as <strong className="text-[#f2ebeb]">Veria Manor</strong>.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The name &quot;Veria Manor&quot; was not actually the original seer&apos;s true name — it was a title, derived from the mansion where she lived. The mansion itself was called Veria Manor, and over time, people began calling the seer by that name instead of her birth name. This title became so legendary that it outlived the woman herself, immortalized in a statue that still stands in Eldreule to this day.
          </p>
        </div>

        {/* The Harassment Incident */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ The Harassment Incident</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            When Kydel Rhunes and Raeya Flutters first encountered Avia, she was in dire straits. On the 13th day of their time in Eldreule — the day before they were set to leave the city — they visited a landmark called <strong className="text-[#f2ebeb]">The Statue of Veria Manor</strong>. There, they found Avia being viciously harassed by an angry mob.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The crowd had gathered around her, hurling insults, trash, and even weapons, claiming she was a fraud. &quot;You are not Veria Manor!&quot; they shouted. &quot;Liar! If you really are her, prove it!&quot;
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia sat on the statue&apos;s ledge, frightened and helpless, begging for someone to help her. When Kydel intervened — catching a sword thrown at the crowd and standing between Avia and her attackers — the mob turned their aggression toward him instead. But Kydel&apos;s powers and determination quickly put an end to the violence, and he was able to protect Avia from further harm.
          </p>
        </div>

        {/* The Truth Revealed */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ The Truth Revealed</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            After the mob dispersed, Avia explained her situation to Kydel and Raeya. She admitted she was not literally the original Veria Manor, but rather a descendant trying to reclaim the title that rightfully belonged to her lineage.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She revealed that <strong className="text-[#f2ebeb]">Veria Manor was a title, not a person&apos;s real name</strong>. The original seer&apos;s true name was Aviel E. Remyls the 3rd, and the mansion she lived in was called Veria Manor. Over time, the title became synonymous with the seer herself, and after her death, the people of Eldreule erected a statue in her honor on the very site where the mansion once stood.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia explained that she had come to the statue hoping to reclaim the title through a magical process. The statue itself was imbued with a spell that held the title &quot;Veria Manor,&quot; and Avia intended to claim it — but she lacked the magical power needed to complete the ritual alone. She had been waiting for someone with enough power to help her when the hostile crowd arrived and made everything worse.
          </p>
        </div>

        {/* A Descendant's Burden */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ A Descendant&apos;s Burden</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia carries a unique marking that ties her to her ancestor: a <strong className="text-[#f2ebeb]">&quot;W&quot; symbol on the side of her neck</strong>. This distinguishes her from the original Veria Manor, whose statue bears a <strong className="text-[#f2ebeb]">&quot;V&quot; symbol on its shoulder</strong>. The difference in symbols suggests a lineage connection while also marking Avia as her own person, not merely a copy of her ancestor.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            As a <strong className="text-[#f2ebeb]">half-demon</strong> (one of the lesser kinds), Avia possesses certain demonic traits that become visible when she reveals her true nature. Her back coat conceals a <strong className="text-[#f2ebeb]">black tail with two hooks at the end</strong>, and when she drops her human disguise, <strong className="text-[#f2ebeb]">her eyes turn yellow</strong>. Despite her demonic heritage, Avia is friendly, approachable, and far from dangerous — though the frightened mob certainly didn&apos;t see it that way.
          </p>
        </div>

        {/* The Title Reclaimed */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ The Title Reclaimed</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            With Raeya&apos;s help, Avia was finally able to claim the title she had been seeking. Raeya, being a Highland Sylph with powerful magic, offered to use an amplification spell to boost Avia&apos;s magical power. The two stood before the statue together while Raeya&apos;s spell created a glowing pink circle beneath them, surging Avia with enormous magical energy.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia chanted her spell and aimed her hands at the statue. Green particles flew out of the statue and into her hands, and when the ritual was complete, the title of <strong className="text-[#f2ebeb]">Veria Manor</strong> had officially been passed down to her. She thanked Raeya and Kydel profusely for their help, knowing that without them, she would never have been able to reclaim her family&apos;s legacy.
          </p>
        </div>

        {/* Personality and Nature */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Personality and Nature</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia is warm, grateful, and resilient despite the hardships she&apos;s faced. She was willing to endure harassment and violence in pursuit of her goal, demonstrating a quiet strength beneath her gentle demeanor. When she opens up, she reveals a playful side — giggling at Raeya&apos;s blunt questions and showing genuine appreciation for the kindness shown to her by strangers.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She is not dangerous or malicious, despite her demonic heritage. In fact, her half-demon nature seems to be more of a burden in a world where people are quick to judge based on appearance and rumor. Avia carries herself with dignity and grace, honoring her ancestor&apos;s memory by seeking to continue the tradition of the Veria Manor seers.
          </p>
        </div>

        {/* Future Appearances */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Future Appearances</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia remains a recurring character throughout The Hibrythian Saga. She reappears during <strong className="text-[#f2ebeb]">Rueholween</strong> (the Hetranian equivalent of Halloween) in Book 2, where she participates in a spooky event orchestrated by Zohl. During this time, she expresses her desire to visit <strong className="text-[#f2ebeb]">The Tree of Elenia</strong>, an ancient and legendary tree that has stood for countless years and grants wishes to those deemed worthy.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia and Zohl make the journey to the Tree of Elenia together, where Avia makes a wish — and the tree grants it. This moment further cements her role as a knowledge seer and a person of importance in the world, carrying on the legacy of Veria Manor with honor and purpose.
          </p>
        </div>

        {/* Legacy */}
        <div className="space-y-3">
          <p className="font-display text-sm text-[#c9a84c]">─────⊰ Legacy</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Avia Remyls is a bridge between the past and the present — a living link to a time when knowledge seers like her ancestor guided people through wisdom and foresight. Though she faced doubt, mockery, and violence, she persevered and reclaimed the title that was rightfully hers.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She now carries the name <strong className="text-[#f2ebeb]">Veria Manor</strong> not as a stolen identity, but as an earned mantle — a reminder that legacies are not just inherited, but reforged by those brave enough to honor them.
          </p>
        </div>
      </div>

      {/* Appearance */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] rounded-xl px-5 py-4 bg-[#1a1714] space-y-3">
            <p className="font-display text-sm text-[#f2ebeb] mb-2">Human Form</p>
            {[
              "Appears as a young woman with a gentle demeanor",
              "Wears a back coat that conceals her demonic features",
              "Bears a \"W\" symbol on the side of her neck, marking her lineage",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#c9a84c] mt-1 shrink-0">•</span>
                <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
          <div className="border border-[#2e2b26] rounded-xl px-5 py-4 bg-[#1a1714] space-y-3">
            <p className="font-display text-sm text-[#f2ebeb] mb-2">Half-Demon Form</p>
            {[
              "Eyes: Turn bright yellow when her demonic nature is revealed",
              "Tail: A black tail with two hooks at the end, hidden beneath her coat in human form",
              "Despite her demonic traits, her overall presence is non-threatening and approachable",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#c9a84c] mt-1 shrink-0">•</span>
                <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Powers and Abilities */}
      <div className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Powers and Abilities</h2>
        <p className="font-body text-sm text-[#7a746e] leading-relaxed mb-2">
          As a half-demon and descendant of a legendary knowledge seer, Avia possesses abilities tied to both her heritage and her role:
        </p>
        <div className="space-y-3">
          <PowerToggle label="<< Knowledge Seer Abilities >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed mb-3">
              Inherited from her ancestor, Aviel E. Remyls the 3rd. The exact scope of these abilities has yet to be fully revealed, but historically, Veria Manor seers were known for:
            </p>
            <div className="space-y-2">
              {[
                "Providing answers to questions mortals did not yet know",
                "Revealing knowledge of past lives and future lives",
                "Offering guidance and foresight",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#c9a84c] mt-1 shrink-0">•</span>
                  <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
          </PowerToggle>

          <PowerToggle label="<< Demonic Heritage >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed mb-3">
              As a half-demon (lesser kind), Avia possesses enhanced longevity and resilience typical of demon-kind:
            </p>
            <div className="space-y-2">
              {[
                { label: "Slow Aging", desc: "After age 23, demons age much more slowly than humans" },
                { label: "Dual Hearts", desc: "All demons possess two hearts." },
                { label: "Enhanced Durability", desc: "Demonic constitution grants greater physical resilience" },
                { label: "Demon Core Cells", desc: "Black blood cells that grant supernatural vitality" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-[#c9a84c] mt-1 shrink-0">•</span>
                  <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                    <strong className="text-[#f2ebeb]">{item.label}:</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </PowerToggle>

          <PowerToggle label="<< Magical Aptitude >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Avia has enough magical power to perform the title-claiming ritual, though she required amplification from Raeya to complete it successfully. This suggests she has latent magical potential that may grow over time.
            </p>
          </PowerToggle>

          <PowerToggle label="<< Witchcraft and Sorcery Magic >>">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed mb-3">
              Despite these two magic sets being lost to civilization, Avia found ancient texts about these when she visited some ruins in Norrane. She has mastery over these magic sets.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
              Despite being a Lesser Demon, her Demon Core Cells and Black Cells that cause The Quick Death…? She found a way to negate that process with Magic. She can use her Magical Aptitudes, along with Witchcraft and Sorcery Magic to negate the effects of The Quick Death (process) in which she can balance the DCC and Black Cells. Thus, she can live a normal life without experiencing that horrible death!
            </p>
          </PowerToggle>
        </div>
      </div>

      {/* Inspiration Note */}
      <div className="border border-[#2e2b26] rounded-xl px-5 py-4 bg-[#1a1714]">
        <p className="font-body text-sm text-[#7a746e] italic leading-relaxed">
          Inspiration: Wiz from Konosuba: God&apos;s Blessing in this Wonderful World!
        </p>
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
