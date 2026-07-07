import { Link } from 'react-router-dom';

export default function XylaAndArzo() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* ── Breadcrumb ── */}
      <div>
        <Link
          to="/characters"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Worldbuilding Characters</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-2">
          Xyla &amp; Arzo
        </h1>
        <p className="font-body text-base text-[#7a746e] mb-6">Kydel&apos;s Beast Parents &mdash; Wulfwing Direwolves of Varleqe</p>
      </div>

      {/* ── Story Information ── */}
      <div className="bg-[#13110e] border border-[#2e2b26] rounded-xl p-6 space-y-4">
        <p className="font-display text-sm text-[#c9a84c] uppercase tracking-widest">Story Information</p>
        <p className="font-body text-xs text-[#8a6c6c] italic">Information on this page contains Spoilers for Book 1!</p>
        <div className="border-t border-[#2e2b26] pt-4 space-y-2 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p><span className="text-[#f2ebeb]">Story Role:</span> Recurring Characters &mdash; Species: Wulfwing Direwolves &mdash; Kydel&apos;s Beast Parents</p>
          <p><span className="text-[#f2ebeb]">Story Presence:</span> Hibryds Book 1</p>
          <p><span className="text-[#f2ebeb]">Character Type:</span> Static &amp; Round</p>
        </div>
      </div>

      {/* ── Personal Information ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Arzo */}
          <div className="bg-[#13110e] border border-[#2e2b26] rounded-xl p-5 space-y-3">
            <p className="font-display text-base text-[#f2ebeb] mb-1">Arzo <span className="text-[#7a746e] font-body text-sm">(The Father)</span></p>
            <div className="border-t border-[#2e2b26] pt-3 space-y-2 font-body text-base">
              {[
                { label: "Species (Original)", value: "Wulfwing Direwolf" },
                { label: "Species (Bestowed)", value: "Human form, granted by Queen Laeyana" },
                { label: "Hair",    value: "Gray with strands of white" },
                { label: "Eyes",    value: "Yellow" },
                { label: "Clothing", value: "Denim-like attire" },
                { label: "Apparent Age", value: "Forties" },
                { label: "Status",  value: "Living; whereabouts unknown as of Year 2245" },
              ].map((row, i) => (
                <div key={i}>
                  <span className="text-[10px] tracking-widest uppercase text-[#7a746e]">{row.label} </span>
                  <span className="text-[#c8c2ba]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Xyla */}
          <div className="bg-[#13110e] border border-[#2e2b26] rounded-xl p-5 space-y-3">
            <p className="font-display text-base text-[#f2ebeb] mb-1">Xyla <span className="text-[#7a746e] font-body text-sm">(The Mother)</span></p>
            <div className="border-t border-[#2e2b26] pt-3 space-y-2 font-body text-base">
              {[
                { label: "Species (Original)", value: "Wulfwing Direwolf" },
                { label: "Species (Bestowed)", value: "Human form, granted by Queen Laeyana" },
                { label: "Hair",    value: "Blonde" },
                { label: "Eyes",    value: "Yellow" },
                { label: "Clothing", value: "Long black skirt, white-pattern blouse, red scarf" },
                { label: "Apparent Age", value: "Forties" },
                { label: "Status",  value: "Living; whereabouts unknown as of Year 2245" },
              ].map((row, i) => (
                <div key={i}>
                  <span className="text-[10px] tracking-widest uppercase text-[#7a746e]">{row.label} </span>
                  <span className="text-[#c8c2ba]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Origin and Backstory ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Arzo and Xyla are a mated pair of <span className="text-[#f2ebeb]">Wulfwing Direwolves</span> from the super-continent of <span className="text-[#f2ebeb]">Varleqe</span>. They are the biological parents of <span className="text-[#f2ebeb]">Kydel Rhunes</span> and among the surviving members of the great <span className="text-[#f2ebeb]">Direwolf-Moonbel War of 0865 AD</span>.</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">Though they are unnamed within the beast world, their names were given to them by <span className="text-[#f2ebeb]">Queen Laeyana</span> herself upon a divine encounter. Before that moment, they were known to each other only as partners and to the world only as creatures.</p>
      </div>

      {/* ── The War ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The War of 0865 AD</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>On the 10th Day of Calderia, 0865 AD, war broke out across Varleqe between Direwolves and Moonbels. Two rival races, both fierce and territorial. The entire continent became a battleground.</p>
          <p>Arzo and Xyla were among the many Wulfwing Direwolves caught in the crossfire. But unlike most, they chose to do something extraordinary: <span className="text-[#f2ebeb]">they refused to fight.</span></p>
          <p>With a young Kydel still a puppy and unable to fend for himself, the two made the decision to flee the war entirely. They found a secluded forest far from the front lines and hid there, sheltering their son as best they could. For a time, it worked. But eventually, their <span className="text-[#f2ebeb]">scent was picked up by their enemies again.</span></p>
          <p>Faced with no good choice, both parents made the hardest decision of their lives.</p>
          <p><span className="text-[#f2ebeb]">Xyla</span> tore a wide patch of soil and grass from the earth with her mouth and laid it over Kydel, who was soundly asleep through the chaos. She scraped manure over the covering to mask his scent. Then, without waking him, they left.</p>
          <p>They did not look back.</p>
          <p>Instead, they ran with purpose. They <span className="text-[#f2ebeb]">lured their enemies outward</span>, drawing them away from Kydel&apos;s hiding spot toward a larger gathering of both Wulfwing and Coppercrest Direwolves. A bloody battle followed, with the aid of demons. The direwolves won. Many lives were lost. But Arzo and Xyla <span className="text-[#f2ebeb]">survived.</span></p>
        </div>
      </div>

      {/* ── The Encounter at the Altar ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Encounter at the Altar</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>A few days after the war, the two wandered through the forest alone. No territory. No pack. No son. Just each other.</p>
          <p>As they walked, they came across something neither of them had ever seen before: <span className="text-[#f2ebeb]">a divine altar</span>, rooted into the earth, topped with a pillar housing a pink crystal. Arzo touched it with his nose.</p>
          <p>A voice emerged from the air. Beautiful. Motherly. It was <span className="text-[#f2ebeb]">Queen Laeyana</span>, the Goddess of Magic herself.</p>
          <p>She immediately sensed their presence and called for <span className="text-[#f2ebeb]">Runerus</span>, the ancient Forefather of the Direwolf Lineage, to join her.</p>
          <p>Runerus, recognizing the two immediately as the wolves who had walked away from the Moonbel war, granted them the temporary ability to speak. And with that gift, both Arzo and Xyla had one request:</p>
        </div>

        <div className="space-y-3 my-5">
          <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c]">
            &ldquo;We are concerned for our child. We had abandoned him and never really looked back. Can you look after him from afar?&rdquo;
          </blockquote>
          <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c]">
            &ldquo;I just want my son to feel safe and loved&hellip;&rdquo;
          </blockquote>
        </div>

        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Runerus agreed without hesitation. He departed, leaving the two wolves with Laeyana.</p>
          <p>Laeyana then asked them a question:</p>
          <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c] my-3">
            &ldquo;Can I give you two names?&rdquo;
          </blockquote>
          <p>They said yes.</p>
          <p>She named the father <span className="text-[#f2ebeb]">Arzo</span> and the mother <span className="text-[#f2ebeb]">Xyla.</span> She then offered them something more: <span className="text-[#f2ebeb]">human forms, and magic powers</span> suited to each of them. A magical wave washed over the two, and for the first time, they stood on two legs. They laughed at the sight of each other. Xyla moved around freely, delighted. Arzo was just as happy.</p>
          <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c] my-3">
            &ldquo;Safe travels, Arzo, Xyla!&rdquo; &mdash; Laeyana, as her presence faded back into the crystal.
          </blockquote>
          <p>And with that, Xyla took Arzo&apos;s hand, and the two walked off down the path of the forest together, into a vast new world.</p>
        </div>
      </div>

      {/* ── Personality ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Personality</h2>
        <div className="space-y-6">

          <div className="pl-4 border-l-2 border-[#c9a84c]/40">
            <p className="font-display text-sm text-[#c9a84c] mb-2">&#9135;&#9135;&#9135;&#9135;&#9135;&#10096; Xyla (The Mother)</p>
            <div className="space-y-3 font-body text-base text-[#c8c2ba] leading-relaxed">
              <p>Xyla is warmth in its most enduring form. Her most defining quality, observed through Kydel&apos;s memories and Kydel&apos;s own character, is that her <span className="text-[#f2ebeb]">love was active.</span> She didn&apos;t just protect Kydel from afar during the war; she covered him with her own mouth. She sang him a sweet, calming tone whenever he was scared, repeating it until he had memorized it himself.</p>
              <p>She is gentle, expressive, and openly caring. At the altar, she was the first to voice her emotional concern:</p>
              <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic text-[#c9a84c]">&ldquo;I just want my son to feel safe and loved.&rdquo;</blockquote>
              <p>Her backbone of teachings, morals, and gentleness became the <span className="text-[#f2ebeb]">direct foundation of Kydel&apos;s faith, kindness, and care for others.</span> In many ways, she is the reason Kydel is who he is.</p>
              <p>When Laeyana gave her a human form, Xyla was immediately joyful. She moved around freely and laughed. She is someone who finds delight in new things.</p>
            </div>
          </div>

          <div className="pl-4 border-l-2 border-[#c9a84c]/40">
            <p className="font-display text-sm text-[#c9a84c] mb-2">&#9135;&#9135;&#9135;&#9135;&#9135;&#10096; Arzo (The Father)</p>
            <div className="space-y-3 font-body text-base text-[#c8c2ba] leading-relaxed">
              <p>Arzo is quieter but no less devoted. He carried the protective role during their time traveling Varleqe together. When dangerous foes appeared, <span className="text-[#f2ebeb]">he fought.</span> When injured, he and Xyla would switch off and trade the role without complaint. He was the one who prompted them to leave the hiding spot, smelling the approaching Werebels before Xyla did. His instincts kept the family alive.</p>
              <p>At the altar, his request was measured and practical:</p>
              <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic text-[#c9a84c]">&ldquo;Can you look after him from afar?&rdquo;</blockquote>
              <p>He was polite and composed with both Runerus and Laeyana, responding graciously to each. When given a human form, he was happy, but calm.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Relationship with Kydel ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Their Relationship With Kydel</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>Arzo and Xyla raised Kydel during his youngest years on Varleqe, traveling with him across the super-continent. They took turns protecting him, sheltering him, and teaching him. Xyla&apos;s parenting in particular left a permanent mark: <span className="text-[#f2ebeb]">her teachings are the backbone of Kydel&apos;s character.</span> His faith, his gentleness, his kindness toward others &mdash; these are hers.</p>
          <p>The melody she used to calm him when he was frightened is one Kydel memorized and still carries with him.</p>
          <p>When they made the decision to leave him hidden during the war, it was not abandonment born of cruelty. It was survival. As Raeya later says to Kydel:</p>
          <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic text-[#c9a84c] my-2">
            &ldquo;They still love you, Kydel, even if it was for a reason.&rdquo; &mdash; Raeya
          </blockquote>
          <p>Kydel&apos;s long-standing goal after setting out on his adventures: <span className="text-[#f2ebeb]">to find them.</span> He does not know where they are. He only knows they were alive, and that they chose to leave him in the care of someone greater, so he could have a future.</p>
        </div>
      </div>

      {/* ── Relationship with Runerus and Laeyana ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Their Relationship With Runerus and Laeyana</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p><span className="text-[#f2ebeb]">Runerus</span> regards Arzo and Xyla with deep respect. He calls their decision to walk away from the war &ldquo;a bold move,&rdquo; and he does not hesitate to honor their request. He watched over Kydel under the alias Ruefeus and raised him until he was capable of surviving on his own.</p>
          <p><span className="text-[#f2ebeb]">Laeyana</span> treats them with warmth and genuine fondness. She takes the time to name them, transform them, and see them off personally. Her farewell to them is the last word of their known story: <em>&ldquo;Safe travels, Arzo, Xyla.&rdquo;</em></p>
          <p>Both divine figures view the two not as ordinary beasts, but as <span className="text-[#f2ebeb]">remarkable parents who put their child above their own survival instincts.</span></p>
        </div>
      </div>

      {/* ── Trivia ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Trivia</h2>
        <ul className="space-y-3 font-body text-base text-[#c8c2ba] leading-relaxed">
          {[
            "Arzo and Xyla had no names prior to their encounter with Laeyana. Their names are entirely of divine origin",
            "Both were given magic powers suited to their individual talents and appearances, though the specifics of what powers they were given remain unspecified in the series so far",
            "The sweet tone Xyla sang to Kydel as a pup is something he has never forgotten",
            "They are Wulfwing Direwolves, the same subspecies as Kydel. Wulfwings and Coppercrests are the two lineages descended from Runerus's original Direosaurous Wolf",
            "As of the year 2245 AD, Kydel does not know their exact whereabouts, but knows they are alive and out in the world",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-[#c9a84c] shrink-0 mt-1">&#9135;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-8">
        <Link
          to="/characters/QueenEiraValthorne"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Previous</p>
            <p className="font-display text-sm text-[#f2ebeb]">Queen Eira Valthorne</p>
          </div>
        </Link>
        <Link
          to="/characters"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right justify-end"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back to</p>
            <p className="font-display text-sm text-[#f2ebeb]">Characters</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
