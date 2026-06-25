import { useState } from 'react';
import { Link } from 'react-router-dom';

function PowerToggle({ title, color = '#c9a84c', children }: { title: string; color?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#2e2b26] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#131210] hover:bg-[#1a1714] transition-colors duration-200 text-left"
      >
        <span className="font-display text-sm" style={{ color }}>{title}</span>
        <span className="text-[#4a4844] text-lg" style={{ display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>&#8964;</span>
      </button>
      {open && (
        <div className="px-5 py-5 bg-[#0f0e0c] border-t border-[#2e2b26] space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

function SubPower({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="space-y-0.5">
      <p className="font-display text-sm text-[#c9a84c]">&lt;&lt; {name} &gt;&gt;</p>
      <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">{desc}</p>
    </div>
  );
}

const SPIRIT_WARDENS_ORIGINAL = [
  'Fey', 'Jinn', 'Tay', 'Zena', 'Zaea', 'Rein', 'Ash', 'Jade', 'Cal', 'Lana', 'Stella',
  'Naele (Naele later split from the group)',
];

export default function ZohlCelestreule() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb */}
      <div>
        <Link to="/characters" className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6">
          &#8592; Back to Characters
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">Main Protagonists</p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">Zohl Celestreule</h1>
        <blockquote className="border-l-2 border-[#c9a84c]/50 pl-4">
          <p className="font-body text-base text-[#c9a84c] leading-relaxed italic">&ldquo;It&apos;s not like I&apos;m spoiling anything! Ugh. You make me worry.&rdquo; - Zohl</p>
        </blockquote>
      </div>

      {/* Story Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Story Information</p>
          <p className="font-body text-xs text-[#c9a84c] mb-3">Information on this page contains Spoilers for Book 1!</p>
          <div className="space-y-1">
            <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Role:</span> The Main Protagonist</p>
            <p className="font-body text-sm text-[#c8c2ba]">A Divine Spirit, A Spirit of Creation</p>
            <p className="font-body text-sm text-[#c8c2ba]">Kydel&apos;s Friend and Guide</p>
            <p className="font-body text-sm text-[#c8c2ba]">Raeya&apos;s Friend</p>
          </div>
        </div>
        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest mb-2">Profile</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Story Presence:</span> The Entire Series</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Point of Origin:</span> The Divine Realm</p>
          <p className="font-body text-sm text-[#c8c2ba]"><span className="text-[#f2ebeb]">Character Type:</span> Dynamic</p>
        </div>
      </div>

      {/* Image — Zohl Ethereal Form */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
        <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — Zohl (The Celestriax Spirit) · Design overhaul coming</p>
      </div>
      <p className="font-body text-xs text-[#f87171] leading-relaxed -mt-10">Both Zohl&apos;s main appearances will GET A OVERHAUL design (Ethereal and human)</p>

      {/* Origin */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Origin of Zohl Celestreule</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A Divine Spirit of Creation, Zohl is a Celestriax Spirit, manifested in the Divine Realm. Celestriax Spirits are core Spirits, and they have the ability to change the state matter of their build. Since Zohl&apos;s Metaphysical form is not solid, they can change the structure of their body. It&apos;s like a ghost. Spirits themselves don&apos;t have weaknesses, although they do have the generic human emotion attributes.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zohl&apos;s full name is Zohl Celestreule. However, he prefers his first given name. However, being a Divine Spirit of Creation does not MAKE him a GOD. Gods don&apos;t exist in this world, rather, they go by a different name: a <em>Lhumerial</em>.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          His main ethereal form is VERY huge when he&apos;s in the Divine Realm. He spans around 2,578 meters ( 8458.005 feet tall), which is taller than the Burj Khalifa. However, he can augment his size to different various heights, like that of a human, a rabbit, or a whale.
        </p>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">Personality</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            As a Divine Spirit of Creation, he holds his Spirit Complexity very high. He&apos;s intelligent, conscientious, ethical, organized, punctual, and a dedicated hard worker. Honesty is also one of his biggest roles but when it comes to being a Spirit, but he thinks little about it. He is headstrong and has the drive, and also with a clear goal in mind. He can sometimes be stoic and tough, but at other times, he can be fun to hang around because of his laidback personality. Despite being an know-it-all limited spirit, he&apos;s passionate to learn new things, not just relying on his Spirit Complexity.
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Appearances & Powers — TOGGLEABLE */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Appearances &amp; Powers</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Zohl has three appearances! These three appearances have powers of their own and are limited to that specific appearance. Most of these forms have the same power, however they overlap because they are important
        </p>

        <div className="space-y-3 mt-4">

          <PowerToggle title="Ethereal Form" color="#c9a84c">
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl&apos;s default form as a Celestriax Spirit. They have a rough outline and no recognizable features. They are roughly the size of a tall building. He has armor-like skin that is integrated into his body, along with a helmet-like face.</p>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest pt-2">Ethereal Powers:</p>
            <SubPower name="Domain Manipulation" desc="Zohl can create, shape, manipulate, and distort/warp domains (personal or otherwise), a realm/space, dimension, plane, reality or specific sphere of influence either belonging to or owned by or was once owned by others, the user, anyone or anything" />
            <SubPower name="Stellarnova Energization" desc="this power allows Zohl to create planets, stars, galaxies, and universes" />
            <SubPower name="Nebular Propulsion" desc="flying in space." />
            <SubPower name="Nebular Healing" desc="the power to restore any damaged part of a planet or universe" />
            <SubPower name="Pure Cloning" desc="This subpower can only be used after 13 uses. This ability allows Zohl to create perfect clones of himself, with each clone having a different mindset and personality." />
            <SubPower name="Spirit Force" desc="This power allows Zohl to connect with other spirits elsewhere, if it's on a planet or in a realm." />
            <SubPower name="Portal Transportation" desc="To travel from one point to another without physically crossing the distance between the two points." />
            <SubPower name="Level Power Cap" desc="The Galacticite in Zohl's chest serves as a fundamental support for all his divine powers and more! It contains infinite pure Divine Energy. Knowing that this is extremely dangerous, this type of power allows him to cap his powers, which allows him to use less power rather than his full capacity." />
            <p className="font-body text-sm text-[#7a746e] italic">And many more&hellip;if he uncapped.</p>
          </PowerToggle>

          {/* Image — Human Nezphel Form */}
          <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-xl flex items-center justify-center">
            <p className="font-body text-xs text-[#4a4844] uppercase tracking-widest">Image — Zohl (The Human Nezphel) · Design overhaul coming</p>
          </div>

          <PowerToggle title="Human Nezphel Form" color="#60a5fa">
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest">Secondary Appearance</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl&apos;s human form. A Nezphel is a type of human race among many others! Zohl gains this form in EP 11 of Book 1, after his Flimpie Form became unusable. 5&apos;5 in height.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">He has orange hair that is soft and sleek. Dark green eyes. His fit is often either active wear or a tangish-brown like jacket.</p>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-widest pt-2">Counterpart Powers</p>
            <SubPower name="Flight Manipulation" desc="The ability to manipulate the air space around a user to fly at various heights." />
            <SubPower name="Rapid Healing" desc="Instant healing through the use of cosmic and stellar stardust. However, if this power was used on a Hibryd with an equivalent set of powers, it would take at least an hour for the Hibryd to heal, or of equal level." />
            <SubPower name="Knowledge Absorption" desc="This ability allows Zohl to instantly know information and knowledge from basic surroundings, including history. It's range and radius is limited within only 600 heunix (feet)." />
            <SubPower name="Spirit Force" desc="This power allows Zohl to connect with other Spirits elsewhere, if it's on a planet or in a realm." />
            <SubPower name="Power Amplification" desc="The ability to amplify specific powers." />
            <SubPower name="Empower (Power Construction)" desc="The ability and power to manifest new powers." />
            <SubPower name="Power Modifier" desc="The ability to modify abilities and powers, including supernatural." />
            <SubPower name="Energy Strengthener" desc="This ability allows Zohl to restore someone's lost energy and strength." />
            <SubPower name="Intangibility" desc="The ability to phase through objects." />
            <div className="space-y-1">
              <p className="font-display text-sm text-[#c9a84c]">&lt;&lt; Advanced Morph &gt;&gt;</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The ability to change one&apos;s shape into another. This can also be used on objects.</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Advanced Morph can be used for permanent change, or temporary. Much like how he modified Raeya&apos;s phone into a smartwatch.</p>
            </div>
            <div className="space-y-1">
              <p className="font-display text-sm text-[#c9a84c]">&lt;&lt; Domain Manipulation &gt;&gt;</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl can create, shape, manipulate, and distort/warp domains (personal or otherwise), a realm/space, dimension, plane, reality or specific sphere of influence either belonging to or owned by or was once owned by others, the user, anyone or anything. Unlike King Nhava&apos;s Domain Manipulation (which is infinite), Zohl&apos;s version of this power is very limited.</p>
            </div>
            <div className="space-y-1">
              <p className="font-display text-sm text-[#c9a84c]">&lt;&lt; Time Warp &gt;&gt;</p>
              <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl can cause temporary changes to time depending on the situation. This power is extremely limited.</p>
              <p className="font-body text-sm text-[#7a746e] leading-relaxed">Example: A Pocket Dimension&apos;s time flow is super slow. Planet Hetra runs on a normal rate of time because it operates on 32 hours a day. Zohl can warp the slow rate of the pocket dimension to fit the flow of what is going on in the real world.</p>
            </div>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl can uncap his divine energy (override) so that he can get new powers into his human form if needed.</p>
          </PowerToggle>

        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Four Identities */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Four Identities</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Zohl&apos;s Identities - What makes him, him!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Social Self</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">&ldquo;Social, what is that? I&apos;m not that social am I?&rdquo; is probably something Zohl would say. He wouldn&apos;t say he&apos;s 100% social, BUT, he does want to learn more about nhuemyn knowledge and how it benefits life on planet Hetra. He likes to help other Nhuemyns with their tasks, or they ask him the other way around. He doesn&apos;t like to showoff his abilities, but when asked, he will do so willingly.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Personal Self</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">When he&apos;s around Kydel and Raeya, he&apos;s the type of guy to spew nonsense and info about the world or just entertaining them with banter and jokes. Along with his friends, he likes to help them out in any way he can to help improve their abilities.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Core Self</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">As a Spirit, he tends to keep to himself, strict with authority. He tends to stay quiet in some cases, but he also likes to observe how life goes about. He likes to think of himself as an observer, a watcher. Aside from that, he also likes learning new things.</p>
          </div>
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Hidden Self</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">His Spirit Complexity is what makes his ego soar high. For Spirits, their main traits comes around Authority, Power, and Control. At this level within Zohl&apos;s ego, he has his head up high in the clouds, in terms of being a Spirit. However, this all comes to bite him, after his failed attempted to subdue his rogue clone. He thinks that he can control their outcome. But in truth, the outcome became much worse. That said clone, named Naele, bonded with a demon witch (<span className="text-[#c9a84c] italic">as told in EP 0 Before Time, in the first book</span>) and took control. But after some time and more, Zohl bonded himself with Kydel. And during a turn of events (<span className="text-[#c9a84c] italic">Book 1 EP 11</span>), he had witnessed the outcome of his actions as time came: his clone died after Kydel had killed the witch it had bonded with.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl thinks his plans are not enough, not perfect enough to be <em>perfect</em>, or according to his plans.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">This is why he wished his plan <em>had</em> worked, according to how <em>he</em> wanted it go to. But after realizing that his Spirit Complexity is what blinded him into following it, he had no choice but to stoop down to Kydel&apos;s level of intellect in which he realizes about Zohl: <em>&ldquo;not everything has to be perfect&rdquo;</em> and <em>&ldquo;it&apos;s okay to make mistakes.&rdquo;</em> This was where Zohl had to understand the impact of his actions. Had not Kydel and Raeya taught him the significance of humbleness and being human, he would&apos;ve took a different route as a Spirit. When spirits become corrupted to greed, gluttony, pride, and control, it turns them into Sphouls, which would be a <span className="text-[#f87171] italic">fatal consequence</span> for Zohl.</p>
          </div>
        </div>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
          <p className="font-display text-sm text-[#f2ebeb] mb-2">Zohl&apos;s Spirit Complexity</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            He is a tough nut when it comes to being a Divine Spirit of Creation. Perfectionism and All-Accordance are his ways of doing things the way HE wants it to happen. And since he holds these two traits, it can sometimes cloud his vision of how he wants it to go. Even if there&apos;s a small interruption, he will eventually find a way around it to go about his plans.
          </p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            He is infatuated with himself and always wants one way or another to get to his goal. Although Spirits themselves have the ability to discern what is right and wrong, Zohl does NOT rely heavily on this. This is why is always hung up above himself, thinking that he can control what he wants.
          </p>
        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Timeline */}
      <section className="space-y-6">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Zohl&apos;s Timeline</h2>

        <div className="space-y-5">

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
            <p className="font-display text-sm text-[#c9a84c]">&#8642; Shadow Adjacent to EP 0 - &ldquo;Before Time&rdquo;</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl was tasked by King Nhavah to go and create a universe and name it. Zohl therefore did, naming the universe he created the Hibryds Universe. After he made the universe, he made a galaxy by the name Anadeya&apos;s Eye, where a planet will bear life. Zohl named that planet Hetra.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">After creating the planet, Hetra, a foreign entity by the name Eienel, threatened to destroy it. Zohl tried to fend off Eienel, but was too weak. Summoning the Earlywulf, a being from the Divine Realm, they both defeated Eienel and imprisoned the entity in an object called the Black Stone.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">After the commotion, Zohl and the Earlywulf decided it was best to exile the Black Stone away into the Skull Zakar, a dead planet.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl then worked his way to complete the Hibryds Universe, including the planet, Hetra. After the completion, he had an idea.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">His first task was to create a Spiritqual, a cave or den that is powerful enough to be indestructible and can house spirits. He then cloned himself 12 times, all perfect clones with their own mindset and personality. The Spiritqual is located on Hetrania, the floating continent. This was when Zohl was in his pendant form.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Then, he told his twelve clones to name themselves freely and this was what they came up with. After that, he named the group, The Spirit Wardens.</p>
          </div>

          {/* Spirit Wardens */}
          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-4">
            <p className="font-display text-sm text-[#f2ebeb] mb-1">The Spirit Wardens</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">This group consists up to 12 Wardens.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SPIRIT_WARDENS_ORIGINAL.map((name, i) => (
                <div key={name} className="flex items-center gap-2">
                  <span className="font-display text-xs text-[#4a4844]">{i + 1}.</span>
                  <span className="font-body text-sm text-[#c8c2ba]">{name}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Even though they were clones, they perfectly obeyed Zohl since they recognize him as the original Spirit. Zohl then named the group as the Spirit Wardens. Zohl then tasked them to guard the Spiritqual from potential threats or just invaders. But if one ever chose to come near, the clone will have to choose the individual as a Hibryd.</p>
            <p className="font-body text-sm text-[#7a746e] leading-relaxed">NOTE: The Spirit Wardens are in their pendant form. Though they can communicate with one another even if one is far away. Their Pendant powers are the same as Zohl&apos;s.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The first ever Hibryd was an animal, an Owl. Rein picked the Owl, however it named itself Leon. Leon was an inhabitant of Hetrania for a while, and was a curious one. Leon, who stumbled upon the Spiritqual with no hesitation, Rein, one of the Wardens chose Leon and made him into a sentient being with a few powers.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">After a few decades on Hetra, one Warden went rogue. Naele almost destroyed the Spiritqual, though the rest of the Wardens stopped Naele. But long after, Naele escaped out into the vast world of Hetra in his pendant form.</p>
          </div>

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
            <p className="font-display text-sm text-[#c9a84c]">&#8642; Naele Goes Rogue &amp; The Search</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Obviously, the rest of the Wardens reported back to Zohl, and that made him extremely upset. Zohl called up Rein who was with Leon, and asked them if they had seen Naele. But to their surprise, both Leon and Rein didn&apos;t know where Naele went. So in a group, the Wardens along with Leon and Zohl searched for Naele. Cal was the one who found Naele, but they were too late.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Naele unfortunately bonded with a demon witch, by the name Rachnaea. Rachnaea&apos;s demon heart poisoned Naele, but he didn&apos;t care one bit. Cal, Zohl, Rein, along with Leon tried to stop Naele and Rachnaea, but they were too strong together. So Cal, along with the others, went back to the Spiritqual to brainstorm ways to take down this said opponent. They had no options, so they had to wait to find and anoint a Hibryd. Even Leon wasn&apos;t powerful enough to take down the demon witch despite his old age.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">A lot of time later on the sixth month in the summer, Leon was getting old and Rein couldn&apos;t continue without a new host. However, Rein can merge back with Zohl if he needed his clones to fuse back together. Zohl who was here on Hetrania sensed a very noble and kind heart heading it&apos;s way towards the island, so Zohl asked his current clones to gather up.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The plan was to anoint the upcoming being as a Hibryd, and after the hibryd wakes up, Leon will pass on his inheritance to said hibryd, along with some new powers. Yes, you&apos;re thinking correctly. That Hibryd was Kydel.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">After the plan was set, Zohl chose four of his clones to merge back with him, since his power was weaker after he cloned himself.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">This was Zohl&apos;s choosing of who he wanted back:</p>
            <ul className="space-y-1 pl-2">
              {['Zena', 'Zaea', 'Rein', 'Ash'].map(n => (
                <li key={n} className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2">
                  <span className="text-[#c9a84c] shrink-0">—</span><span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The plan was a success, and Kydel was given a second sentience to life.</p>
          </div>

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-3">
            <p className="font-display text-sm text-[#c9a84c]">&#8642; Current Spirit Wardens as of Book 1 before EP 13</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">These are the current Wardens who still guard the Spiritqual to this day.</p>
            <ul className="space-y-1 pl-2">
              {['Fey', 'Jinn', 'Tay', 'Cal', 'Jade', 'Lana', 'Stella'].map(n => (
                <li key={n} className="font-body text-sm text-[#c8c2ba] leading-relaxed flex items-start gap-2">
                  <span className="text-[#c9a84c] shrink-0">—</span><span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">In EP 13, Zohl had asked all of them to return and merge back with him, giving him his near spirit-god like powers. although one short. At this stage is when Zohl is at his best, and also, strongest form.</p>
          </div>

        </div>
      </section>

      <div className="border-t border-[#2e2b26]" />

      {/* Level of Powers */}
      <section className="space-y-5">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Level of Powers (Capped Max) + History</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Here is information based on each clone&apos;s limitation of power, along with the original benefactor, Zohl.</p>

        <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
          <p className="font-display text-sm text-[#f2ebeb] mb-1">The Galacticite</p>
          <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
            Zohl&apos;s Galacticite Core is the fundamental support in his divine powers, infinite endless supply of divine energy. It is what keeps him alive and powerful. The core is an important aspect to all spirits, and it is indestructible. Zohl knows how deadly having infinite power is, so he caps his power level at <span className="text-[#60a5fa] font-semibold">4745 Lp</span> (levels per power) / infinity. (Which includes himself)
          </p>
        </div>

        <div className="space-y-4">

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">In EP 0 &ldquo;Before Time&rdquo; in Book 1</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The Original Benefactor, Zohl caps his power at <span className="text-[#60a5fa] font-semibold">4745 Lp</span>. He then clones himself twelve times, and each of his clones contains <span className="text-[#60a5fa]">365 Lp</span> per Clone. 356 x 12 (excluding himself). After he cloned himself, he became one of the 365 Lp still as the original.</p>
            <p className="font-body text-sm text-[#7a746e] leading-relaxed">Zohl as himself, has 365 Lp as of then.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Naele, the twelfth clone, caused a ruckus trying to bond with Leon, but Zohl had intervened and restrained his movements in a crystal. Zohl is now down to 10 clones. Rein combines with Leon as a success (LeoRei).</p>
            <p className="font-body text-sm text-[#60a5fa] font-mono">365 x 10 = 3650 + LeoRei = 4015 Lp</p>
            <p className="font-body text-sm text-[#7a746e] leading-relaxed">Naele is taken out of the equation for now.</p>
          </div>

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">Battling the Demon Witch (EP 0 pt 2 of 6)</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">After Naele merged with a demon witch named Rachnaea, he lost majority of his power due to the witch&apos;s intent of greed, gluttony, and influence. Manipulating his powers drained Naele&apos;s energy, giving her an Lp of <span className="text-[#60a5fa]">5,000</span>.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">When Zohl and his group of Spirits, along with Leon, battled the witch, her Lp rose even more due to her absorbing their attacks and powers by manipulating Naele&apos;s stress and energy. Lp is est. around <span className="text-[#60a5fa]">6,400</span> for Rachnaea.</p>
          </div>

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">After the Battle (EP 0 pt 2 of 6)</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Discussing plans to take down Rachnaea, Zohl decided it was best to merge back five of his clones, where Rein was among them. He then asks Rein to come back later.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zena, Zaea, &amp; Ash offer up as volunteers</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl + (3 x 365) = 1460 Lp. He currently has a total of <span className="text-[#60a5fa] font-semibold">1460 Lp</span></p>
          </div>

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">In EP 0 - PT 3 of 6 &amp; EP 1 &ldquo;Territorial&rdquo; (After the events of EP 0)</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel find his way to Hetrania. Zohl (1460 Lp) bonds with Kydel.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Leon, &ldquo;the owl,&rdquo; who helped answer Kydel&apos;s questions, passes away. Zohl asks Rein (one of his clones) to merge with him after Leon&apos;s passing.</p>
            <p className="font-body text-sm text-[#60a5fa] font-mono font-semibold">Rein + Zohl&apos;s current LP = 1825Lp. This is Zohl&apos;s new max Lp.</p>
          </div>

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">In EP 11 &ldquo;The Battle of Conflicts&rdquo;</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl desperately finds a way to separate Naele from Rachnaea, but fails in doing so. The witch&apos;s grip and insane bloodlust hinders Zohl&apos;s attempt to free his last clone. But all else fails again, as Kydel had reached his boiling point, killing the witch in the process, which separates Naele with coincidence. However, this results with Naele&apos;s remaining power depleted.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Zohl still at 1825 Lp, could not take down Rachnaea. He was hesitant to uncap his infinite LP, where he decides not to.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Rachnaea&apos;s LP at the time battling Kydel was above <span className="text-[#60a5fa]">50k LP</span></p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel at his peak, using Eruptio Fervor, had an unknown amount of <span className="text-[#60a5fa]">??? LP</span></p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Naele disintegrates into thin air after Rachnaea got killed by Kydel. <span className="text-[#60a5fa]">-365 Lp</span> gone</p>
          </div>

          <div className="border border-[#2e2b26] rounded-xl bg-[#131210] p-5 space-y-2">
            <p className="font-display text-sm text-[#c9a84c]">EP 13 &ldquo;Memories Of the Present&rdquo;</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Still having <span className="text-[#60a5fa]">1825 Lp</span>, Zohl had a nostalgic and yearning feeling to go back to Hetrania. There, the three trio meets Kydel&apos;s animal friends.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Kydel heads off with Zohl, where they reunite with the remaining six clones he had left to guard the cave (known as the Spiritqual). With nothing else to do, the six clones agree to merge back with Zohl.</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">The remaining six (6 x 365 = 2190)</p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">&ldquo;Fey, Jinn, Tay, Cal, Laea and Jade&rdquo; + Zohl&apos;s Current LP = <span className="text-[#f59e0b] font-semibold">4015 Lp</span></p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">Having the loss of Naele by the hands of Rachnaea, Zohl unlocks his cap and replenishes his missing clone&apos;s power. <span className="text-[#f59e0b] font-semibold">+365</span></p>
            <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">From this chapter now and onwards, Zohl has <span className="text-[#4ade80] font-semibold">4745 Lp</span> back! He knows he can add more if he uncaps his infinite potential, but he doesn&apos;t want to because with this insane power, he could destroy the very thing he created, his planet.</p>
          </div>

        </div>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/characters/KydelRhunes" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Kydel Rhunes</p>
          </div>
        </Link>
        <Link to="/characters" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
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
