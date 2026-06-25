import { Link } from "react-router-dom";

export default function TheContinentOfVarleqe() {
  return (
    <div className="min-h-screen bg-[#100908] py-16">
      <div className="max-w-[960px] mx-auto px-6">

        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
          The Hibrythian Saga &nbsp;/&nbsp; Locales &amp; Sights &nbsp;/&nbsp; Varleqe
        </p>

        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Locales &amp; Sights
        </p>

        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
          The Super-Continent of Varleqe
        </h1>

        <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-10">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Varleqe — Image Placeholder ]</p>
        </div>

        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">
          Varleqe is a massive supercontinent that is west of all the other continents and almost takes up 1/5th of the globe
          (if you look on the map). Varleqe is inhabited by beasts, mythological creatures, demons, and animals. Direwolves are
          considered beasts, and Kydel is one of them. There aren&apos;t many cities or towns on this continent because this place
          primarily has ruins and old abandoned cities.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-10">
          Despite the continent being big, there are many lakes and rivers, where each part of the area has a lush feel. Where there
          are less rivers, the areas look a bit drier. Some areas are scorched because there are demons living in ruins that often
          scorch the land due to territorial disputes.
        </p>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Villages</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Greenlux Town</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Greenlux Town is located north, beyond the North Mountains. Greenlux is very close to the border of Varleqe and was
                considered a thriving town back in the days. However, due to the population of beasts, many humans have fled from this place.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Oldtree Cementery</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Oldtree Cementery is a small town with its cemetery as its primary attraction. Located southwest of Greenlux and south
                of Ribbonfelt. And no, Cementery is the name (not a typo).
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Ribbonfelt Town</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                A town southwest of Greenlux. This town was important back in the past of Varleqe, since many people come to this place
                to send out lanterns because of its tradition, SeaLit Lanterns. However, since this town is close to the ice caps, it
                slowly started to be less known for its tradition.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Greenside Hills Village</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Smackdab in the center of Varleqe, southeast of the other free towns, Greenside Hills is a city that once was active.
                Greenside Hills used to be a tourist attraction for people around the world because of its beautiful architecture that
                the buildings are built on. Even to this day, the buildings have remained fresh and preserved since it was built out of
                material that was made to withstand corrosion and degradation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Ruins</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Mountainbearer Gate Ruins</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Mountainbearer Ruins is north of the Hidden Plains Ruins. This Gate Ruin has some form of knowledge about the
                continent&apos;s living beings.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hillside Gate Ruins</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                South of Mountainbearer Ruin. Not much to it, but it&apos;s a prominent location. The Hillside Gate Ruins are filled
                with lush caves, so there&apos;s plenty of animals there.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">The Underwater Chambers</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                The Underwater Chambers is hidden under the water off the coast of Varleqe, southeast. It&apos;s home to mermaids and sirens.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Gulf of Varleqe</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Gulf of Varleqe was formed from a meteor impact in the past. Parts of the lands are still here, now known as islands.
            The rest of the land is submerged under the water since a city once thrived in this region of the continent. However,
            the city now is preserved in the depths of the gulf.
          </p>
        </section>

        <div className="w-full h-px bg-[#c9a84c]/30 my-12" />

        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
          <Link to="/world/locales" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Locales & Sights</p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

