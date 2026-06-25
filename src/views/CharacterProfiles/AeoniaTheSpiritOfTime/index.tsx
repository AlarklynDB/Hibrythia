import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="px-5 py-4 bg-[#111009] space-y-3 border-t border-[#2e2b26]">
          {children}
        </div>
      )}
    </div>
  );
}

export default function AeoniaTheSpiritOfTime() {
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
          Ancient Spirits of Creation
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Aeonia, The Spirit of Time
        </h1>

        {/* Story Info Callout */}
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-3">
          <p className="font-display text-base text-[#f2ebeb]">Story Information</p>
          <p className="font-body text-sm text-red-400">Information on this page contains Spoilers for Book 1!</p>
          <div className="border-t border-[#2e2b26] pt-3 space-y-3">
            <div>
              <p className="font-body text-base text-[#f2ebeb]">Story Role:</p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-2 mt-1">
                <li>Main Supporting Cast</li>
                <li>The OmniBound Spirit</li>
                <li>Ancient Spirit of Time</li>
              </ul>
            </div>
            <div className="border-t border-[#2e2b26] pt-3">
              <p className="font-body text-base text-[#f2ebeb]">Story Presence:</p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-2 mt-1">
                <li>Hibryds Book 1 EP 0 : Before Time</li>
                <li>Appears across timelines and realities</li>
              </ul>
            </div>
            <div className="border-t border-[#2e2b26] pt-3">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed italic">
                Let me, Aeonia, give you the guide of my Profile!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Illustration placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <span className="font-body text-xs text-[#4a4844] tracking-widest uppercase">Aeonia, The Spirit of Time &mdash; Illustration</span>
      </div>

      {/* Opening quote */}
      <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
        &ldquo;Through the vast guides of Space and Time, I hereby declare my existence as whole and timely~&rdquo; &mdash; Aeonia
      </p>

      {/* Origin and Backstory */}
      <section className="space-y-10">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        {/* The Omnibound Spirit */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Omnibound Spirit, Aeonia</h3>
          <p className="font-display text-xs tracking-[0.2em] text-[#c9a84c] uppercase mb-2">A Spirit Unlike Any Other</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Among the countless Spirits of Creation manifested by King Nhavah in the early days of the Divine Realm, one spirit stood apart from all others. While the King divided spirits into two groups&mdash;Celestriax and Lyeceriax&mdash;there was one spirit whose role was so unique, so fundamentally essential to existence itself, that she belonged to neither category.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This spirit was <span className="text-[#f2ebeb]">Aeonia, the Spirit of Time</span>.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aeonia describes herself as a &ldquo;living dice-spirit,&rdquo; and her voice carries a feminine tone that resonates with the rhythm of eternity itself. Unlike her fellow spirits who were assigned to either the Celestriax or Lyeceriax groups, Aeonia&apos;s purpose transcended such classifications. Her role was not merely to create worlds or control weather&mdash;it was to govern the very fabric of temporal existence across all realities.
          </p>
        </div>

        {/* The Bestowal of Power */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ The Bestowal of Power</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            King Nhavah recognized the immense responsibility that would fall upon Aeonia&apos;s shoulders. The flow of time, the control of time travel, the regulation of the Multiverse&mdash;these were not tasks for an ordinary spirit. And so, the King made an unprecedented decision.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            He bestowed upon Aeonia powers beyond those of typical Spirits of Creation&mdash;granting her abilities approaching that of a lesser Lhumerial, second only to himself and Queen Laeyana. With this gift came the four omnis: <span className="text-[#f2ebeb]">Omnipresent, Omniscient, Omnipotent, and Omnibenevolent</span>. Aeonia became capable of being everywhere at once, knowing all things, possessing unlimited power, and acting with perfect benevolence.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Yet despite these god-like attributes, Aeonia is not a true Lhumerial. Her Dimensional powers are limited to 10 Dimensions (excluding time itself, as she <em>is</em> Time). This unique position&mdash;powerful beyond measure yet bound by specific cosmic laws&mdash;earned her a special designation. King Nhavah himself bestowed upon her the title: <span className="text-[#f2ebeb]">&ldquo;The Omni-Bound Spirit.&rdquo;</span>
          </p>
        </div>

        {/* Guardian of the Extreulux Realm */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Guardian of the Extreulux Realm</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            For Aeonia&apos;s powers to function properly, she could not simply dwell in the Divine Realm like her fellow spirits. Her domain was elsewhere&mdash;in the <span className="text-[#f2ebeb]">Extreulux Realm</span>, also known as the Space-Time Continuum. This realm exists as a binding layer that wraps around and intermingles with Space itself, creating the fundamental structure through which all temporal progression occurs.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            From her position within the Extreulux Realm, Aeonia oversees the flow of time across countless universes, dimensions, and realities. She ensures that causality remains intact, that paradoxes are prevented (or managed), and that the intricate web of multiversal timelines continues to function in harmony.
          </p>
        </div>

        {/* The Gift of Time to Hetra */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ The Gift of Time to Hetra</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            One of Aeonia&apos;s earliest and most significant acts was granting time to Planet Hetra and the Nhumela Cluster&mdash;the creation of Zohl Celestreule and Aloria Cloudwave. When Zohl communicated with her across planes, requesting that his universe be given the flow of time, Aeonia answered without hesitation. She imbued the Nhumela Cluster with temporal essence, allowing life, growth, decay, and progression to take root.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            But Aeonia&apos;s involvement with Hetra did not end there.
          </p>
        </div>

        {/* Architect of the Multiverse */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Architect of the Multiverse</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Centuries later, Zohl summoned Aeonia once more with an ambitious proposal: to create a multiverse within his creation. Aeonia, ever the guardian of temporal complexity, accepted the challenge.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Taking on the form of an Owl to traverse the mortal plane, she accompanied Zohl and Aloria to a continent filled with forests and plant life. There, Zohl carved out a hidden chamber beneath the ground&mdash;<span className="text-[#f2ebeb]">the Ruin Chamber of the Lucid Sanctum</span>. Within this sacred space, Aeonia performed one of her greatest works.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She manifested a gemstone imbued with the <span className="text-[#f2ebeb]">Essence of Time</span> and embedded it deep into the chamber floor, surrounding it with indestructible properties. This gemstone sent out an invisible global green aura&mdash;a signal that every action, every choice, every decision made by individuals on Hetra would now branch outward into parallel realities. The multiverse was born.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aeonia then created a special compass&mdash;a small locket containing a blue round crystal bearing the symbol of time, complete with a key. This device serves as the mechanism to open portals between multiversal universes, and she entrusted it to Aloria Cloudwave, appointing her as Guardian of the Lucid Sanctum.
          </p>
        </div>

        {/* The Philosopher of Causality */}
        <div className="space-y-4">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ The Philosopher of Causality</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aeonia is not merely a keeper of time&mdash;she is a philosopher of existence itself. Her understanding of temporal mechanics is so profound that she developed the very concept of <span className="text-[#f2ebeb]">The Outerbounds</span>, a meta-realm structure that would later become crucial to the cosmology of The Hibrythian Saga.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She often guides those who seek to understand the Multiverse, explaining the mechanics of <span className="text-[#f2ebeb]">Ehckol Events</span> (actions that create branching timelines), <span className="text-[#f2ebeb]">Fixed Points</span> (immutable moments in history), and the delicate balance between free will and predetermined destiny.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            One of her most famous teachings is encapsulated in her personal philosophy:
          </p>
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
            &ldquo;All time flows forward. All choices echo outward. And every consequence reshapes the path ahead.&rdquo;
          </p>
        </div>
      </section>

      {/* Powers and Limitations */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Powers and Limitations</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Aeonia&apos;s abilities are staggering in scope. She can stop all of time&mdash;including alternate timelines, parallel dimensions, realities, multiverse-timelines, and even the Dreamverse. She can manipulate temporal infliction, replay actions from any point in history, manifest d&eacute;j&agrave; vu into reality, and warp dimensions themselves.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Yet for all her power, Aeonia is bound by cosmic law. She cannot transcend the 10-dimensional limit that defines her existence. She cannot interfere with certain Fixed Points without catastrophic consequences. And despite her omniscience, there are mysteries even she does not fully comprehend&mdash;secrets that lie beyond the veil of her temporal sight.
        </p>

        <div className="space-y-3">
          <PowerToggle title="Time Manipulation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The power to manipulate time.
            </p>
          </PowerToggle>
          <PowerToggle title="Temporal Infliction">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The ability to manipulate and inflict any probability and cause within the planets&apos; multiverse. This power can also alter past events, current events, and future events. This can also inflict Time Sickness, Stringing, and can sub-atomically mess up a person&apos;s signature time frequency. Not only can this power inflict and cause major damage, it can mess up any concept of time paradoxes within the objects&apos; multiverse. Temporal Infliction is more powerful than Eienel&apos;s Temporal Energy.
            </p>
          </PowerToggle>
          <PowerToggle title="Multiversal Time Manipulation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The ability to control time across multiversal realities and dimensions.
            </p>
          </PowerToggle>
          <PowerToggle title="Action Replay">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The power to replay actions of others, events from the past, present, or future.
            </p>
          </PowerToggle>
          <PowerToggle title="Déjà-Vu Manifestation">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              This allows the user to manifest d&eacute;j&agrave; vu into existence. The user brings feelings of repeating events, visions of the past, or other similar phenomena into current reality.
            </p>
          </PowerToggle>
          <PowerToggle title="Dimensional Shifting">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              User can manipulate the physical dimensions of themselves, other people, or objects, changing the targets&apos; dimensions between 0&ndash;4D, making them incredibly difficult to catch or confine.
            </p>
          </PowerToggle>
          <PowerToggle title="Temporal Warping">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The ability to warp reality using time-based phenomena. This can shape the existential state around oneself by manipulating time and events to enact any desired effect (possibilities, probabilities, etc).
            </p>
          </PowerToggle>
          <PowerToggle title="Omnipresence Knowledge">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The ability to be everywhere at once, past, present, and future, with the ability to foresee incoming events to absorb and obtain knowledge.
            </p>
          </PowerToggle>
          <PowerToggle title="Realm Transference">
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The ability to teleport between realms and dimensions.
            </p>
          </PowerToggle>
        </div>
        <p className="font-body text-base text-[#7a746e] leading-relaxed italic">
          &hellip;and many more that relate to time~!
        </p>

        {/* Role in Creation */}
        <div className="space-y-4 pt-2">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Role in Creation</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aeonia&apos;s overall role is to help create &ldquo;time&rdquo; after the formation of planets and universes. She works closely with other Spirits of Creation, particularly Zohl and Aloria, to ensure that newly born worlds receive the gift of temporal flow. Without her, existence would be frozen&mdash;a static painting rather than a living, breathing cosmos.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She is also a part of the Divine Realm, though her true home remains the Extreulux Realm. When she visits other realms or mortal planes, she often takes on various forms suited to the environment&mdash;an Owl being one of her preferred manifestations.
          </p>
        </div>

        {/* Legacy and Presence */}
        <div className="space-y-4 pt-2">
          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Legacy and Presence</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Throughout the ages, Aeonia has remained a steady, guiding force in the cosmos. While she rarely intervenes directly in mortal affairs, her influence is felt in every ticking second, every choice that branches into a new reality, every temporal phenomenon that shapes the multiverse. She also has sass.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She is a guardian, a teacher, a philosopher, and above all&mdash;Time itself given consciousness and purpose. Her gentle yet authoritative presence continues to shape the very nature of existence across The Hibrythian Saga, ensuring that time flows forward, choices echo outward, and consequences reshape the path ahead.
          </p>
        </div>
      </section>

      {/* Bottom Nav — first in Ancient Spirits sequence */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters"
          className="group flex items-center gap-3 bg-[#1a1714] border border-[#2e2b26] hover:border-[#c9a84c]/40 rounded-xl px-5 py-4 transition-colors max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">All Characters</p>
          </div>
        </Link>
        <Link
          to="/characters/MorhvTheSpiritOfDeath"
          className="group flex items-center justify-end gap-3 bg-[#1a1714] border border-[#2e2b26] hover:border-[#c9a84c]/40 rounded-xl px-5 py-4 transition-colors max-w-[45%] text-right"
        >
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Morhv, The Spirit of Death</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
