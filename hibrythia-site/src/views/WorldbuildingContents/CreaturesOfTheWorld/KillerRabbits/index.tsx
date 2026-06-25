import { Link } from 'react-router-dom';

export default function KillerRabbits() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-[960px] mx-auto">
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/CreaturesOfTheWorld" className="hover:text-[#c9a84c] transition-colors">Creatures of The World</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Killer Rabbits</span>
      </div>

      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">IV. Equation of Life › Creatures of The World</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-2">Killer Rabbits</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-8">Werebels · Beast Hierarchy Kingdom — Rank 2, No. 1</p>

      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Killer Rabbits — Werebels Image Placeholder ]</p>
      </div>

      <div className="space-y-12">

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Overview</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Killer Rabbits — A Fearsome Foe</h2>
          <div className="space-y-4">
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Werebels, aka Were Rabbits, also called Killer Rabbits, are bipedal mutations of sterilized rabbits that are escapees of illicit vampire experimentations. These experiments roughly happened in 15 AD, where vampires tried to infuse their DNA with animals of liking and symbolism.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Back in 15 AD, there was a vampire by the name, Dhivlaine, who started this. He took a white-albino rabbit with red eyes and sterilized it, putting his own DNA into it. However, the experiment went wrong with one of his catalytic potions and the rabbit turned into a giant horrendous creature with immense power, strength, and vitality. There were two at that time.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              So Dhivlaine called these creatures Werebels, or Were-Rabbits. These Werebels are passive-aggressive, and they have a disdainful emotion towards humankind alike. They killed Dhivlaine and took his heart as a way to consume energy to power up.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              Through time, Werebels only sought power and strength, and it was classified in 1607 AD that they are Apex Beasts of the Beast Kingdom. They are in the Top 1 Place of Rank 2. However, even with that much power, a rivaling race called{' '}
              <Link to="/world/databases/CreaturesOfTheWorld/HetraDirectWolves" className="text-[#c9a84c] hover:underline">Hetranian Direwolves</Link>
              {' '}come close to Top 2 (Wulfwing Direwolves and Coppercrest Direwolves).
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              The Werebels and Direwolves rival each other in terms of power, dexterity, agility, and intelligence.
            </p>
            <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
              You can find these creatures exclusive to Varleqe, a supercontinent home to many creatures.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Appearance</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">Average Werebel</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Werebels are giant! They stand around 7ft'4 in height and 2ft'3 width (length too). Instead of being white albino monsters, their fur is mangled and has a shade of dark brown-black gray. Their eyes' sclera are red with their iris white and a black pupil shade like a very sharp oval. Their ears are still those same rabbit-like ears, but they are sharper and pointier.
              </p>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mt-3">
                Killer Rabbits are both bipedal and quadrupeds. Their walking patterns are almost ape-like, but neatly balanced between either two legs or four.
              </p>
              <p className="font-body text-sm text-[#c9a84c] italic mt-2">If you ever see a Killer Rabbit set down on all fours…run.</p>
            </div>
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">Alpha Werebel</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                An Alpha Werebel is the Leader of their group and pack. They have a few distinct features that differs from average werebels. These alphas aren't born. They are made.
              </p>
              <p className="font-body text-sm text-[#c9a84c] italic mb-4">If a pack needs a leader, they will make one.</p>
              <ul className="space-y-2">
                {[
                  'A physical trait that distinguishes them from an average one is that their ears are chipped slightly.',
                  'A single scar on the left eye.',
                  'Three claw marks (scars) on their chest. The middle is the longest.',
                  'There is an "X" scar on the three claw marks, one scar diagonal to the middle longest of the mark.',
                  'Alpha Werebels have their inner ears dyed pink instead of skin-like color.',
                ].map(item => (
                  <li key={item} className="font-body text-sm text-[#c8c2ba] flex gap-2"><span className="text-[#4a4844] mt-1">—</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mt-4">
                Lastly, Alpha Werebels can talk the human language. They just need to eat a human tongue.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        <section>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Evolution</p>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Second Stage Evolution</h2>
          <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-6">
            Werebels evolve into a final stage called a Moonbel. A Moonbel is much more powerful than it's pre-evolution. Their power increases 10 fold and their strength may trifle that of a Wulfwing, however, it is still undetermined to their full extent.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-3">Moonbel Appearance</h3>
              <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                Moonbels look a lot more different than their pre-evolved form. Their head almost resembles that of a skull with three piercing sharp eyes (with one eye in the center above the two), washed with dark-black brown and gay-white. Their ears become longer and deformed, as they serve as powerful hearing instruments. Their body becomes slightly bigger, and they have four arms, two on each side. Their tail becomes longer and they can control it with ease, serving as an extra limb. They are a bit darker in color on the brown - gray scale.
              </p>
            </div>

            <div>
              <h3 className="font-display text-base text-[#f2ebeb] mb-4">How They Evolve</h3>
              <p className="font-body text-sm text-[#7a746e] italic mb-4">The Red Blood Eclipse has two phases.</p>
              <div className="space-y-5">
                <div className="border-l-2 border-[#2e2b26] pl-5">
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">Phase 1</p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                    They evolve under the properties of a Red Blood Eclipse. It happens once every 250 years. The sun shines brightly at its peak on the warmest day. When the moon blocks it, the rays from the sun hit against the moon, due to the effects of Solar Scattering. The moon brightens up from behind and almost becomes translucent, as the blood-red color becomes visible. It takes a full 3 minutes for the red-blood to stay before fading to a Ash-White color.
                  </p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mt-3">
                    When a Werebel is close to death or has blood soaked in its eyes, the evolution begins. This is a permanent evolution for werebels who have their eyes soaked in blood.
                  </p>
                </div>
                <div className="border-l-2 border-[#2e2b26] pl-5">
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">Phase 2 — The Ash-White Moon</p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-4">
                    When the Moon turns Ash White, it's pure like white color helps Direwolves gain strength under a lot of pressure and duress after they howl at the moon. Direwolves are gentle and powerful creatures, as they love the color of Ash-White.
                  </p>
                  <p className="font-body text-xs text-[#7a746e] mb-2">The Werebels and Direwolves fight over ethical problems:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-body text-xs text-[#f2ebeb] mb-1">Ethical:</p>
                      {['Territory','Food','Hierarchy Ranking','Strength','Self Defense'].map(e=>(
                        <p key={e} className="font-body text-xs text-[#c8c2ba]">— {e}</p>
                      ))}
                    </div>
                    <div>
                      <p className="font-body text-xs text-[#f2ebeb] mb-1">Unethical:</p>
                      <p className="font-body text-xs text-[#c8c2ba]">— Killing for fun, murder</p>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-[#2e2b26] pl-5">
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-2">Alpha Moonbels</p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                    If Alpha Werebels evolve into Alpha Moonbels, their strength increases 20-fold. They are extremely dangerous and they can decimate at least a country-worth population in at least 15 minutes.
                  </p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mb-3">
                    When Alpha Moonbels face a powered individual, it only takes 10 punches to knock one out. There are some creatures or people who are near that level where it's not easy to do a OHKO.
                  </p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85]">
                    However, with Direwolves also gaining power from The Ash-White Moon phase, it balances the power between the Top 2, which is why both Werebels and Direwolves rival each other. Even the Odds. Two sides of the same coin. They have the same aesthetic as their Alpha Werebel appearance.
                  </p>
                  <p className="font-body text-sm text-[#c8c2ba] leading-[1.85] mt-3">
                    However, there are some passive-aggressive Moonbels who sometimes co-operate with direwolves to take down other powerful beast creatures, much like creatures from the Demon Race.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Bottom nav */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link to="/world/databases/CreaturesOfTheWorld/DemonCreatures" className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-4 transition-colors flex flex-col gap-1">
            <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">← Prev Entry</span>
            <span className="font-display text-sm text-[#f2ebeb]">Demon Creatures</span>
          </Link>
          <Link to="/world/databases/CreaturesOfTheWorld/HetraDirectWolves" className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-4 transition-colors flex flex-col gap-1 items-end text-right">
            <span className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">Next Entry →</span>
            <span className="font-display text-sm text-[#f2ebeb]">Hetranian Direwolves</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
