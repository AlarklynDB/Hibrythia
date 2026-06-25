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

export default function NahfiaAlphraey() {
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
          From The Divine Realm
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Nahfia Alphraey
        </h1>

        {/* Story Info Callout */}
        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-3">
          <p className="font-display text-base text-[#f2ebeb]">Story Information</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Her presence is felt across the entire saga through the Sylph race she created and the realm she governs: the Sylphrelm.
          </p>
          <div className="border-t border-[#2e2b26] pt-3 space-y-3">
            <div>
              <p className="font-body text-base text-[#f2ebeb]">Story Role:</p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-2 mt-1">
                <li>Founder of the Sylphrelm</li>
                <li>New Creator of the Sylph Lineage</li>
                <li>Source of Sylph Magic</li>
              </ul>
            </div>
            <div className="border-t border-[#2e2b26] pt-3">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                <span className="text-[#f2ebeb]">Origin:</span> The Divine Realm
              </p>
            </div>
            <div className="border-t border-[#2e2b26] pt-3">
              <p className="font-body text-base text-[#f2ebeb]">Story Presence:</p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-2 mt-1">
                <li>Referenced throughout The Hibrythian Saga</li>
                <li>Governs the Sylphrelm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Origin and Backstory */}
      <section className="space-y-10">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Origin and Backstory</h2>

        {/* The Spirit of Sylphs */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The Spirit of Sylphs, Nahfia</h3>
          <p className="font-display text-xs tracking-[0.2em] text-[#c9a84c] uppercase">The Founder of the Sylphrelm</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Among the Ancient Spirits of the Divine Realm, Nahfia holds a domain that is both vast and deeply intimate: she is not simply a creator, but a mother figure to an entire race. Where Aurora Rimaea gave life to all beings on Planet Hetra, Nahfia gave the Sylphs something uniquely theirs: their own realm, their own magic, and their own lineage.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Nahfia was handpicked by Queen Laeyana herself, following the events of the Sylph Massacre of 15 AD. When two Sylph Representatives, Krentyl and Fahlia, petitioned Laeyana through a Staff Altar in the wilderness to protect the surviving Sylph race, Laeyana summoned Zohl, Aurora Rimaea, and Aloria to discuss what should be done. Zohl declined to create a new planet, and Rimaea had long since retired from creating life. So Laeyana reached into the Divine Realm and selected Nahfia: a Spirit unlike any other: to shoulder the responsibility. Aurora Rimaea, honoring the gravity of the moment, personally offered Nahfia the <span className="text-[#f2ebeb]">Creation Tether</span> of the Sylph Race. Nahfia accepted, and from that point on, all ancestral DNA of the Sylph Line resided within her.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            With her new creation powers, Nahfia brought into existence the <span className="text-[#f2ebeb]">Sylphrelm</span>: the mystical Cloud Abode: a vast, flat asteroid-like mass suspended in the northern outskirts of space, wrapped in a great bubble-like shield that provides sunlight, air, and mystical properties to its inhabitants.
          </p>
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
            &ldquo;The Sylphrelm was not just a realm. It was a promise: a place where the wind-blooded would always have a home.&rdquo;
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She is the <span className="text-[#f2ebeb]">Governor and Guardian of the Sylphrelm</span>, overseeing its people and its traditions. As time passed, she opened the realm&apos;s doors wider, allowing other air-like spirits, Fae, Mystic Dryads, and wind beings to come and live alongside the Sylphs she created.
          </p>
        </div>

        {/* The New Creator */}
        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">The New Creator of the Sylph Lineage</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Nahfia is the New Creator of the Sylph Race, after being blessed by Rimaea by the Creation Tether of The Sylph Ancestry DNA.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She&apos;s the foremother of existence of every Sylph species and all the generations that followed. The four primary sylph races: the <span className="text-[#f2ebeb]">Southwing, Sunpike, Northtint, and Greenpetal Sylphs</span>: all trace their lineage back to her creative act, with a little bit of Rimaea-ism to it.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Southwing and Sunpikes originated directly in the Sylphrelm while two (Northtint and Greenpetal) came from the lands of Planet Hetra. Not much of the Northtints and The Greenpetals migrated to the Sylphrelm after the massacre, since they had built a living on Hetra.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Eventually, the four lines were brought together through cross-breeding (again, but in the Sylph Realm) over time, ultimately founding the <span className="text-[#f2ebeb]">Sylph Council</span> within the Cloud Abode.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A fifth race: the <span className="text-[#f2ebeb]">Highland Sylphs</span>: exists outside of this recorded founding history, shrouded in mystery. Their origins remain unknown even to the Sylph Council.
          </p>

          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ The First Spirit Blessed with Sylph Magic</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            One of Nahfia&apos;s most profound contributions is not just the creation of a race, but the bestowal of a magic system unique to them. She is the <span className="text-[#f2ebeb]">first Spirit to become the source of Sylph Magic</span>: and this did not come from her own inherent power alone. Queen Laeyana personally blessed Nahfia with <span className="text-[#f2ebeb]">mastery over Sylph Magic</span>, entrusting her as the living source from which all Sylph magical ability would flow. This makes her the third source of magic in the entire world of Hetra (after Queen Laeyana).
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            <span className="text-[#f2ebeb]">Sylph Magic</span> is a default power for all Sylphs: it is not given; it is inherited through lineage and activated through the Sylphanization process. This magic comes in two sets:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-2">
              <p className="font-display text-sm text-[#f2ebeb]">Healing Magic</p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-1">
                <li>Mystic Healing</li>
                <li>Timed Healing</li>
                <li>User-Life Healing</li>
                <li>Alchemic Healing</li>
              </ul>
            </div>
            <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-2">
              <p className="font-display text-sm text-[#f2ebeb]">Tranquil Magic</p>
              <ul className="list-disc list-inside font-body text-base text-[#c8c2ba] leading-relaxed space-y-1 ml-1">
                <li>Disable</li>
                <li>Fairy Lullaby</li>
                <li>Soothe Touch</li>
                <li>Soothe Snap</li>
                <li>Icy Breath</li>
              </ul>
            </div>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Every Sylph who practices these arts channels a power that ultimately flows from Nahfia herself.
          </p>

          <p className="font-body text-xs tracking-[0.2em] text-[#c9a84c] uppercase">─────⊰ Legacy and Presence</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Nahfia governs the Sylphrelm quietly and consistently. She is not a being of grand spectacle or front-line battles: her legacy is in the people, the magic, and the realm she built. Every sylph that soars through the skies of Hetra, every lullaby sung in the Cloud Abode, every healing hand extended to a wounded companion: all of it traces back to Nahfia.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            She is the reason Raeya Flutters exists. She is the reason the Sylph Council convenes. She is the reason the wind-blooded have a voice in the cosmos.
          </p>
        </div>
      </section>

      {/* Spirit Classification */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Spirit Classification</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Nahfia is one of the <span className="text-[#f2ebeb]">Nexzylkrai Spirits</span>: a rare and distinct classification within the Divine Realm. Unlike Celestriax (Core Spirits) or Lyeceriax (Fluid Spirits), Nexzylkrai Spirits occupy the center: the nexus, the axis: and carry a unique power known as the <span className="text-[#f2ebeb]">Trithereal Authority</span>.
        </p>

        <div className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-6 py-5 space-y-4">
          <p className="font-display text-sm text-[#f2ebeb]">─────⊰ Trithereal Authority</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This is the ability to shift between all three Spirit typings as the situation demands:
          </p>
          <div className="space-y-3">
            <div className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Celestriax (Core)</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Power Construction, Amplification, Modification, and Multiversal Creation</p>
            </div>
            <div className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Lyeceriax (Fluid)</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Cosmic weather control, Lyecerium Crystal creation, galactic balance</p>
            </div>
            <div className="border-l-2 border-[#c9a84c]/40 pl-4">
              <p className="font-display text-sm text-[#f2ebeb] mb-1">Nexzylkrai (Axis)</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Her default state of neutrality, centrality, and axis-level cosmic influence</p>
            </div>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This is what made her the ideal choice for creating an entirely new realm and race from scratch: she had the tools of both a builder and a balancer.
          </p>
        </div>
      </section>

      {/* Appearance */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearance</h2>
        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
          <span className="font-body text-xs text-[#4a4844] tracking-widest uppercase">Nahfia Alphraey — Illustration Coming Soon</span>
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Nahfia is a Spirit of Creation, meaning she can take on multiple forms. As a Spirit tied to the domain of Sylphs, Air, and Wind, her appearance carries qualities of lightness, grace, and ethereal beauty.
        </p>
        <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">
          &ldquo;She looks elegant and mysterious, with a color palette of green, some shades of blue, and trails of magic that looked like orange. A white veil-like dress was shown as her apparel.&rdquo;
        </p>
      </section>

      {/* Powers and Abilities */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Powers and Abilities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          As a Nexzylkrai Spirit, Nahfia holds powers rooted in the domain of Sylphs, Wind, and the cosmic origin of magic.
        </p>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Enhanced Senses and Physical Abilities</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            From quick reflexes, great timing, and durability, Nahfia&apos;s physical abilities are enhanced greatly because of her Nexzylkrai status.
          </p>
          <div className="space-y-3">
            <PowerToggle title="Super Strength">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Her strength triumphs that of both Celestriax and Lyeceriax. Don&apos;t be fooled by her whimsical appearance, because her punches feel a ton of a Black Hole.
              </p>
            </PowerToggle>
            <PowerToggle title="Hyper Speed">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                She&apos;s insanely fast, not just being The Spirit of Sylphs. Although the line of sylphs has a max of mach-1 speed, this does not apply to Nahfia.
              </p>
            </PowerToggle>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Supernatural Powers</h3>
          <div className="space-y-3">
            <PowerToggle title="Sylph Race Creation">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                The power to create and originate entire Sylph lineages from scratch. Nahfia was entrusted with the <span className="text-[#f2ebeb]">Creation Tether</span> of the Sylph Race by Aurora Rimaea: making her the one being through whom all Sylph ancestral DNA now flows.
              </p>
            </PowerToggle>
            <PowerToggle title="Sylph Magic Bestowal">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                As the original source of Sylph Magic: a mastery she was blessed with by Queen Laeyana: all Healing and Tranquil Magic that Sylphs wield is a gift that ultimately flows from Nahfia&apos;s cosmic essence.
              </p>
            </PowerToggle>
            <PowerToggle title="Trithereal Authority">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                As a Nexzylkrai Spirit, Nahfia holds the ability to shift between all three Spirit forms: Celestriax (Core), Lyeceriax (Fluid), and Nexzylkrai (Axis). Each form grants her access to its corresponding power set: making her extraordinarily versatile compared to other Spirits.
              </p>
            </PowerToggle>
            <PowerToggle title="Realm Governance">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                She governs the Sylphrelm, overseeing its laws, traditions, peoples, and order: including oversight of the Sylph Council.
              </p>
            </PowerToggle>
            <PowerToggle title="Omnipotence (Limited)">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                As an Ancient Spirit, she holds omnipotence within the scope of her domain: the Sylphs, Sylph Magic, and the Sylphrelm.
              </p>
            </PowerToggle>
            <PowerToggle title="Limited Omniscience">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                She holds broad knowledge, though not absolute awareness of all things. She can, however, absorb knowledge from past to present based on surrounding environments.
              </p>
            </PowerToggle>
            <PowerToggle title="Realm Transference">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                She can travel between realms and dimensions, including between the Divine Realm and the Sylphrelm.
              </p>
            </PowerToggle>
          </div>
          <p className="font-body text-base text-[#7a746e] leading-relaxed italic">
            Note: Like other Spirits, Nahfia does not hold all four omnis. She is all-powerful within her domain but is not a Lhumerial.
          </p>
        </div>
      </section>

      {/* Relationships */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Relationships</h2>
        <div className="space-y-4">
          {[
            {
              name: "King Nhavah",
              desc: "Her King and the creator of the Divine Realm. Nahfia operates within the structure Nhavah established, carrying out her sacred role as the founder of Sylph life."
            },
            {
              name: "Queen Laeyana",
              desc: "The one who handpicked Nahfia for the sacred task. When the Sylph Race faced extinction during the Massacre of 15 AD, it was Laeyana who looked to the Divine Realm and chose Nahfia above all others to carry the Sylph legacy forward. It was also Laeyana who blessed Nahfia with mastery over Sylph Magic, making her the living source of it. Their bond is one of deep trust and divine purpose."
            },
            {
              name: "Aurora Rimaea",
              desc: "A fellow Ancient Spirit who, during the pivotal meeting following the Sylph Massacre, personally offered Nahfia the Creation Tether of the Sylph Race. This transfer was the formal act that made Nahfia the creator and keeper of all Sylph lineage. While Rimaea seeded all mortal life on Planet Hetra, Nahfia now holds the Sylph Race as her own sacred charge."
            },
            {
              name: "Zohl Celestreule",
              desc: "The Spirit of Creation who was present during the council meeting, though he declined to take on new planetary responsibilities. Zohl's history with the Sylphrelm is noted: the realm itself references him as being among those involved in its founding context."
            },
            {
              name: "Vivianya",
              desc: "One of the Five Giants, a Sylph Nomad, and one of the original governors of Sylph Magic before her passing. With her protection faded from the Sylph Race, the void she left is part of why the Sylphs became vulnerable: and why Nahfia was ultimately called to fill that role."
            },
            {
              name: "The Sylph Council",
              desc: "The governing council of the Sylph races founded within the Sylphrelm. Nahfia governs above them, holding the highest authority over the Sylphrelm and its peoples."
            },
            {
              name: "Raeya Flutters (indirect)",
              desc: "Raeya is a Sylph, one of Nahfia's created lineage. Every power Raeya holds and every part of her identity as a Sylph is a legacy of Nahfia's creation. She is Raeya's Adoptive Mom."
            },
          ].map((rel) => (
            <div key={rel.name} className="bg-[#1a1714] border border-[#2e2b26] rounded-xl px-5 py-4 space-y-1">
              <p className="font-display text-sm text-[#f2ebeb]">{rel.name}</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{rel.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Nav — last in Divine Realm sequence, Back only */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/characters/AloriaCloudwave"
          className="group flex items-center gap-3 bg-[#1a1714] border border-[#2e2b26] hover:border-[#c9a84c]/40 rounded-xl px-5 py-4 transition-colors max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-1">Previous</p>
            <p className="font-display text-sm text-[#f2ebeb]">Aloria Cloudwave</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
