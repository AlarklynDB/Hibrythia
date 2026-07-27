import { Link } from 'react-router-dom';

export default function TheContinentOfNorrane() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      

      <div>  {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          Locales &amp; Sights / The Continent of Norrane
        </p>

        {/* Hero */}
        <div className="space-y-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">Locales &amp; Sights</p>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">The Continent of Norrane</h1>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In the past for the continent of Norrane, there used to be massive gem-storms that contained huge traces of Hexicules. Though after many centuries and millennia, these storms have decreased. Here are the places in Norrane that suffered from hexicules and the wild forestation growth. There are mountain islands that surround this continent and they are enveloped in fog. Getting here is risky.
          </p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ The Continent of Norrane — Image Placeholder ]</p>
      </div>

      {/* Locations */}
      <div className="space-y-6">
        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Green City Harbor</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A city north-west of Fallehnhelm and the Lucid Sanctum. It is near the border of Norrane. Green City Harbor used to operate well with East City Harbor (a city in Nharvenile, Lynneria), but due to the massive hexicules that Norrane is made up of, the Green City Harbor was overtaken by forestation.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Fallehnhelm</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A city in Norrane. It operates okay, but the crazy growth of forestation is causing the city to become more...devastated. Though the citizens are fine with the city the way it is.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
            <Link to="/world/locales/tree-of-elenia" className="hover:underline">The Tree of Elenia</Link>
          </h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            An ancient tree and historical landmark in Norrane. It is located south of Green City Harbor and Fallehnhelm near the border of the continent. It&apos;s next to some paths that head east towards the gate ruins that lead to the Lucid Sanctum.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Gate Ruins</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            South of both the Fallen Ruins and the Lucid Sanctum in Norrane. It&apos;s the gateway to both places.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Lucid Ruins</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            South of the Lucid Sanctum, located in the center of Norrane. This place houses ancient knowledge of the past.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Lucid Sanctum</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Lucid Sanctum is a mysterious, enchanting place in the center of Norrane. It&apos;s hidden deep within Norrane and is the only place that can&apos;t be destroyed since it&apos;s guarded with indestructible magic. This place is filled with magic, including crystals of both Lyecerium, Hexicules, and Hetranium. There are bioluminescent ponds that contain Lucidiean Bluetint Koi.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This sanctum is the birth of the multiverse, and is the gateway to different worlds. But you can&apos;t actually go to &ldquo;said different world&rdquo; since you need a key to open portals. You can find the key on <Link to="/lore/hexphos-island" className="text-[#c9a84c] hover:underline">Hexphos Island</Link>, but it needs to be assembled. After assembly, you need to find a way to trigger portals to open.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This place was created by <Link to="/characters/AloriaCloudwave" className="text-[#f2ebeb] font-semibold hover:underline">Aloria</Link>, the Lyeceriax Spirit, who had a fair share of help with <Link to="/characters/ZohlCelestreule" className="text-[#f2ebeb] font-semibold hover:underline">Zohl</Link>, the Celestriax Spirit.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Beings</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            There are only a few beings that reside here in this mysterious sanctum. Among one of them is Aloria, the Lyeceriax Spirit.
          </p>

          <div className="space-y-3">
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">
              <Link to="/characters/AloriaCloudwave" className="hover:underline">Aloria, Lyeceriax Spirit</Link> <span className="font-body text-xs text-[#7a746e] font-normal">(Supporter Protagonist)</span>
            </h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              One of the main supporting casts within the series. Like the Celestriax Spirit Zohl, Aloria is a Lyeceriax Spirit. She too, was manifested in the Divine Realm. There are two types of spirits within the Divine Realm; Lyeceriax and Celestriax. Both of these spirit types have no problem with each other, for they are friends with different rules and purposes. Aloria has an animal-counterpart, a Lucidiean Skyblue Swan.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Lyeceriax Fluid Spirits: Fluid Spirits can change their size but cannot alter their molecular density. Lyecerium Crystals are what they can control, grow, and use. As Fluid Spirits, these spirits can cause cosmic weather, or even control a planet&apos;s weather.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Aloria was asked by Zohl to govern over a specific place that has no name yet. Its location is in Norrane, a continent east of Lynneria. Zohl told Aloria that the place she is guarding doesn&apos;t have a name yet and needs to be heavily guarded and to be created. Thus, Aloria created and decorated the place as a mystical chamber, naming it the Lucid Sanctum.
            </p>
          </div>

          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 space-y-4">
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Thulls</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Thulls are magic creatures that guard the Lucid Sanctum. These creatures are ridiculously powerful as they are because their magic is fueled by the Lucid Sanctum. If you try and mess with these said creatures, you&apos;ll be gone as quick as you can escape.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Lucidiean Blueburn Frogs</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Frogs of an unnatural color of blue; shades of blue. They are cute creatures and can breathe blue fire. These frogs can cure illnesses because of their sweat secretion, which contains a strange kind of acid that is edible for humans. Also a type of prey to Hedgering Blue-Jays.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Lucidiean Hedgering Blue-Jays</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Birds that bear a striking resemblance to hedgehogs with a ring-like pattern. These cute creatures also breathe blue fire. Extremely friendly. Don&apos;t get too attached because these Hedgering Blue-Jays will stay with you throughout your adventures.
              </p>
            </div>
            <div>
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Lucidiean Bluetint Koi</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Koi fish. Aside from swimming in bioluminescent ponds, they can survive outside of water for they have adapted to both ocean-life and land life. They fly. Although they are prey to Hedgering Blue-Jays.
              </p>
            </div>
          </div>
        </div>
      </div>        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
                  <Link to="/world/locales" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Locales &amp; Sights</p>
            </div>
          </Link>
                  <Link to="/world/locales/rynel" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">The Continent of Rynel</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
      </div>

    </div>
  );
}

