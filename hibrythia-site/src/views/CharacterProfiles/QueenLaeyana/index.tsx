import { useState } from 'react';
import { Link } from 'react-router-dom';

// ── PowerToggle ────────────────────────────────────────────────────────────────
function PowerToggle({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1714] hover:bg-[#1f1c18] transition-colors text-left"
      >
        <span className="font-display text-base text-[#f2ebeb]">{title}</span>
        <span className="text-[#c9a84c] text-sm ml-4">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#111009] space-y-2 border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
}

// ── SectionAnchor ──────────────────────────────────────────────────────────────
function SectionAnchor({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[#c9a84c] font-display text-xs tracking-widest">─────⊰</span>
      <span className="font-display text-sm text-[#f2ebeb]">{label}</span>
    </div>
  );
}

// ── DivineObject ───────────────────────────────────────────────────────────────
function DivineObject({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-1">
      <p className="font-display text-sm text-[#c9a84c]">{name}</p>
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function QueenLaeyana() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* ── Breadcrumb + Header ── */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">From The Divine Realm</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">Queen Laeyana</h1>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">&ldquo;Magic isn&apos;t a construct. It&apos;s the interconnecting element that binds the whole world~&rdquo; &mdash; Laeyana</p>
        </blockquote>
      </div>

      {/* ── Story Information ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Story Information</h2>
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p className="text-[#c9a84c] text-sm italic">Information on this page MAY contains Spoilers for Book 1!</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Story Role</p>
              <ul className="space-y-1 text-sm">
                <li>Main Support Protagonist</li>
                <li>Supporter Character</li>
                <li>The Goddess and Queen of Magic</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Story Presence</p>
              <ul className="space-y-1 text-sm">
                <li>Hibryds Book 1 EP 0: Before Time</li>
                <li>Hibryds Book 1 EP 13: Mastery</li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-2">Character Type</p>
              <p className="text-sm text-[#6b6560] italic">Not specified</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Origin and Backstory ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Origin and Backstory</h2>

        {/* The Queen of All Magic */}
        <div className="mb-10">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-4">The Queen of All Magic</h3>
          <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
            <p>When King Nhavah had finished speaking the first realms into existence, an unexpected presence manifested &mdash; not by his command, but entirely of its own will. A rainbow-hued, tesseract-like diamond shape formed in the void beside him. It looked at him, and it spoke:</p>
            <blockquote className="border-l-2 border-[#c9a84c]/30 pl-4 py-1">
              <p className="italic text-[#c9a84c]"><em>&ldquo;I am Laeyana. Let&apos;s co-exist together, Nhavah.&rdquo;</em></p>
            </blockquote>
            <p>Queen Laeyana is a <span className="text-[#f2ebeb]">Lhumerial</span> &mdash; a 10-Dimensional being that exists outside the constructs of known reality. Unlike King Nhavah, who was purposefully created through cosmic will, Laeyana emerged on her own. She simply <em>appeared</em>. And from that very first meeting, she and Nhavah established the framework for everything that would come after.</p>
            <p>Together, they named their kind <em>Lhumerials</em>, and entered the Divine Realm side by side. Upon entering, her form shifted into that of a <span className="text-[#f2ebeb]">Greenforest Sylph</span> &mdash; a grand, cosmic fantasy-like creature. Colossal in scale, glowing faintly yellow, adorned with ribbons and flowy patterns flowing from her wrists and elbows, with sparkly, glittery hair.</p>
            <p>She is <span className="text-[#f2ebeb]">Omnipotent, Omniscient, Omnipresent, and Omnibenevolent.</span></p>
          </div>
        </div>

        {/* The Role She Claimed */}
        <div className="mb-10">
          <SectionAnchor label="The Role She Claimed" />
          <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
            <p>Upon settling into the Divine Realm and establishing themselves, the two Lhumerials defined their individual domains. Queen Laeyana declared:</p>
            <blockquote className="border-l-2 border-[#c9a84c]/30 pl-4 py-1">
              <p className="italic text-[#c9a84c]"><em>&ldquo;My name is Laeyana. You can refer to me as Queen Laeyana. I will be in charge of Magic, giving the powers of magic to individuals who will seem fit of that category.&rdquo;</em></p>
            </blockquote>
            <p>From that moment forward, she became the <span className="text-[#f2ebeb]">Queen of Magic</span> &mdash; the origin of all magical power in the Hibryds universe. She bestows magic onto individuals she deems worthy, often gifting powers to beings even <em>before</em> they are born. There is a high chance that before a baby comes into the world, Laeyana will bestow them with a unique magical ability &mdash; one they&apos;ll carry from birth.</p>
            <p>She also responds to external sources. Throughout Planet Hetra, there exist <span className="text-[#f2ebeb]">Staff Altars</span> &mdash; sacred structures bearing her symbol and a plaque in her name. Individuals who touch these altars can sometimes spontaneously manifest magic powers. This is one of the ways Laeyana&apos;s influence extends into the mortal world even without direct intervention.</p>
          </div>
        </div>

        {/* The Co-Creation of the Divine Realm */}
        <div className="mb-10">
          <SectionAnchor label="The Co-Creation of the Divine Realm" />
          <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
            <p>Together with King Nhavah, Laeyana helped decorate and give life to the Divine Realm. She created multiple layers of clouds and golden roads throughout the realm, making it a place of beauty, divinity, and wonder. She participated in establishing the <span className="text-[#f2ebeb]">Fountain of Life</span> and other divine objects, and observed with curiosity as Nhavah manifested the Spirits and Ancient Spirits of Creation.</p>
            <p>She remained a steady presence and gentle voice of wisdom throughout the events of EP 0, offering commentary and perspective while the King shaped the cosmos.</p>
            <p>When Nhavah mentioned that a specific individual would one day use the Fountain of Life, Laeyana responded with a knowing, sarcastic remark &mdash; implying she already knew. <em>&ldquo;I think there will be a certain individual who will use it in the future soon... After all, we are powerful, knowledgeable, and everywhere.&rdquo;</em></p>
          </div>
        </div>

        {/* Her Relationship with the Spirits */}
        <div>
          <SectionAnchor label="Her Relationship with the Spirits" />
          <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
            <p>Many Spirits of Creation, upon setting out to create their own worlds, come to Queen Laeyana to ask for a share of magic powers &mdash; so they can gift those abilities to individuals on the worlds they build. She freely grants this.</p>
            <p>Laeyana is also a <span className="text-[#f2ebeb]">popular idol</span> to magic-wielding individuals across the world of Hetra. Those born with magic often look to her image in texts and history with reverence. The Staff Altars built in her name serve as cultural and spiritual landmarks in the mortal world.</p>
          </div>
        </div>
      </div>

      {/* ── Appearance ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearance</h2>
        <div className="space-y-4">
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">In The Divine Realm</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">A <span className="text-[#f2ebeb]">Greenforest Sylph</span> &mdash; a colossal, ethereal, cosmic fantasy-like creature. She glows a very faint yellow. Ribbons and flowy patterns float freely from her wrists and elbows. Her hair is extremely sparkly and radiant. Her appearance is metaphysical in nature, meaning no distinct facial features &mdash; but her presence is unmistakably warm and divine.</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">She is enormous in scale, colossal alongside King Nhavah, spanning ranges within that of a large skyscraper.</p>
          </div>
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-2">
            <p className="font-display text-sm text-[#f2ebeb]">Before the Divine Realm</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">A rainbow-hued, tesseract-like diamond &mdash; wonderful colors that brought her to life, like that of a rainbow.</p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">She can take on <span className="text-[#f2ebeb]">as many forms as she pleases</span>, though the Greenforest Sylph is her primary recognized appearance within the Divine Realm.</p>
        </div>
      </div>

      {/* ── Powers and Abilities ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Powers and Abilities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">Queen Laeyana is a <span className="text-[#f2ebeb]">10-Dimensional Lhumerial</span>, holding all four omnis:</p>
        <div className="space-y-3">
          <PowerToggle title="Omnipotence">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Unlimited power with no known ceiling.</p>
          </PowerToggle>
          <PowerToggle title="Omniscience">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">All-knowing across time, space, and existence.</p>
          </PowerToggle>
          <PowerToggle title="Omnipresence">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Exists everywhere at once.</p>
          </PowerToggle>
          <PowerToggle title="Omnibenevolence">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Acts with absolute goodwill and divine purpose.</p>
          </PowerToggle>
          <PowerToggle title="Magic Bestowal">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The primary source of all magic in the Hibryds universe. She can gift individuals with one or more types of magic &mdash; from birth or at any point in life.</p>
          </PowerToggle>
          <PowerToggle title="Pre-Birth Enchantment">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Before individuals are even born, Laeyana can bestow unique magical abilities onto them, shaping their identity from before their first breath.</p>
          </PowerToggle>
          <PowerToggle title="Staff Altar Manifestation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Through the Staff Altars placed throughout Hetra, Laeyana&apos;s influence extends into the mortal world &mdash; allowing individuals who touch them to gain magical powers through external sourcing.</p>
          </PowerToggle>
          <PowerToggle title="Magic Domain Governance">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">She governs the entirety of magical existence within the Hibryds universe, acting as its source, regulator, and queen.</p>
          </PowerToggle>
        </div>
        <div className="mt-6 bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb]">Limitations</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Like King Nhavah, Queen Laeyana is <span className="text-[#f2ebeb]">limited to her own universe</span>. She cannot become an Exeterius, cannot travel to The Outerbounds, and different multiversal iterations of her exist across other universes.</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">She also <span className="text-[#f2ebeb]">cannot invade or interact with the Dream Dimension</span> &mdash; if she were to enter it, she would lose her powers.</p>
        </div>
      </div>

      {/* ── Relationships ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Relationships</h2>
        <div className="space-y-3">
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-1">
            <p className="font-display text-sm text-[#f2ebeb]">King Nhavah</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Her king and co-Lhumerial. They co-exist in the Divine Realm, complementing each other&apos;s roles perfectly &mdash; he governs Spirits and creation; she governs magic. He flirted with her at their very first meeting, which she responded to with laughter. Their dynamic is warm, grounded, and deeply established. 💛</p>
          </div>
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-1">
            <p className="font-display text-sm text-[#f2ebeb]">Zohl Celestreule</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Spirits like Zohl come to her for a share of magic powers when creating their worlds. She is a resource and authority that Spirits of Creation rely on.</p>
          </div>
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-1">
            <p className="font-display text-sm text-[#f2ebeb]">Aloria Cloudwave</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Lyeceriax Spirits like Aloria work in a world shaped partly by Laeyana&apos;s magic distribution.</p>
          </div>
          <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-1">
            <p className="font-display text-sm text-[#f2ebeb]">The Spirits of Creation</p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">All bowed in her presence when King Nhavah introduced her. She introduced herself to them directly: <em>&ldquo;I am Queen Laeyana. And I will be the &apos;Goddess&apos; of Magic. My role here is to give the humans and creatures you will make Magic Powers. If you need me, ask me!&rdquo;</em></p>
          </div>
        </div>
      </div>

      {/* ── Divine Objects Under Her Domain ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Divine Objects Under Her Domain</h2>
        <div className="space-y-3">
          <DivineObject
            name="Staff Altars"
            desc="Sacred structures placed throughout Planet Hetra bearing her symbol and plaque. Touching one can grant magic to an individual through external sourcing."
          />
          <DivineObject
            name="Jadeite"
            desc="A green divine stone favored by both Laeyana and King Nhavah."
          />
          <DivineObject
            name="Auraunite"
            desc="A divine gem capable of granting infinite wishes, residing in the Divine Realm alongside other sacred objects."
          />
        </div>
      </div>

      {/* ── Bottom Nav ── */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters/KingNhavah" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">King Nhavah</p>
          </div>
        </Link>
        <Link to="/characters/AloriaCloudwave" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right justify-end">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Aloria Cloudwave</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
