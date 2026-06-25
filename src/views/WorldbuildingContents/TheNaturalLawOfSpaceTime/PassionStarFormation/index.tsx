import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => { requestAnimationFrame(() => setVisible(true)); }, []);
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
  function handleClose() { setVisible(false); setTimeout(onClose, 200); }
  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm pt-24 pb-12 px-10"
      style={{ zIndex: 9999, backgroundColor: `rgba(0,0,0,${visible ? 0.92 : 0})`, transition: 'background-color 200ms ease' }}
      onClick={handleClose}
    >
      <button
        onClick={handleClose}
        className="absolute top-16 right-4 text-white/80 hover:text-white transition-colors bg-black/60 rounded-full w-8 h-8 flex items-center justify-center text-base leading-none border border-white/20"
        aria-label="Close"
      >✕</button>
      <img
        src={src} alt={alt}
        className="rounded-lg shadow-2xl object-contain"
        style={{ maxWidth: '95vw', maxHeight: '95vh', opacity: visible ? 1 : 0, transform: visible ? 'scale(1)' : 'scale(0.96)', transition: 'opacity 200ms ease, transform 200ms ease' }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function PassionStarFormation() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen px-6 py-16 max-w-[960px] mx-auto">
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-10 flex-wrap">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">Databases</Link>
        <span>›</span>
        <Link to="/world/databases/TheNaturalLawOfSpaceTime" className="hover:text-[#c9a84c] transition-colors">The Natural Law of Space-Time</Link>
        <span>›</span>
        <span className="text-[#7a746e]">Passion Star Formation</span>
      </div>

      {/* Hero */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">I. The Cosmic Foundation</p>
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">How "Passion Star(s)" are Formed</h1>
      <p className="font-body text-sm text-[#7a746e] italic mb-10">Stellar Bodies — The Natural Law of Space-Time</p>

      {/* Hero image placeholder 1 — Aqualivia Sun wallpaper */}
      <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Aqualivia Sun — Image Placeholder ]</p>
      </div>

      <div className="space-y-12">

        {/* Section — Passion Stars */}
        <section className="space-y-4">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Passion Stars</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A Passion Star is a very rare type of star, where it emits so brightly, it is easy to look at from space, and even from the surface of Planet Hetra (where the series takes place). This star, first spotted by Zohl (who is a Spirit of Creation), found it very beautiful. It's not too harsh, not too cool, as it maintains a very moderate heat signature. It sometimes have solar flares once in a while, but they usually die down within 3 minutes or less. These solar flares, when scattered on Planet Hetra, gives the nightly skies a very passionate aurora borealis of colors! Passion Stars can live for a very long time, and it won't burn out within 51 million years.
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="font-display text-base text-[#f2ebeb] mb-2">How it's color came to be</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              A Passion Star's color is very unique! It glows a a very iridescent like color of sky blue, teal, with a tint of pink, orange, and red. It's very pretty. This type of sun brings better light source and moderate heat, with less radiation. This allows light on Planet Hetra to be a bit brighter than usual. But why does it look like this?
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              This is all because of one single thing: A Lyecerianite Core (which can be read below), which is a type of crystal geode. The lyceranite glows a very beautiful color of sky-blue and magenta, with a rock like shell protecting it.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section — The 4 Stages */}
        <section className="space-y-8">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-2">The 4 Stages of a Star</h2>

          {/* Lyecerianite Core intro */}
          <div className="space-y-4">
            <h3 className="font-display text-base text-[#f2ebeb]">The Lyecerianite Core…what is it?</h3>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Before it can become a Lyecerianite, these cores are actually crystals, called <strong className="text-[#f2ebeb]">Lyecerium</strong>. Crystals that are favored among Lyeceriax Spirits, as they serve for the purpose for Cosmic Observations.
            </p>

            {/* Image placeholder 2 — Crystal */}
            <div className="w-full aspect-video bg-[#1a1714] border border-[#2e2b26] rounded-sm flex items-center justify-center">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#2e2b26]">[ Lycerianite Core Crystal — Image Placeholder ]</p>
            </div>
          </div>

          <h3 className="font-display text-base text-[#f2ebeb]">How do these crystals become a Lyecerianite?</h3>

          {/* Stage 1 */}
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 space-y-3">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-body text-[9px] tracking-widest uppercase text-[#c9a84c]/60 border border-[#c9a84c]/20 px-2 py-0.5 rounded-sm">Stage 1</span>
              <h4 className="font-display text-base text-[#f2ebeb]">Still a Crystal</h4>
            </div>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              Lyecerium Crystals are the first stage before becoming a star. It floats in the endless cosmos, as comets and different explosion types hurl it around. It needs energy from a <em>supernova (and nothing else)</em>, specifically when a star goes nova. When it is hit with immense energy from from these explosions, the crystal absorbs the energy, converting said energy into a process called Bio-Lyceionic Fusion.
            </p>
          </div>

          {/* Stage 2 */}
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 space-y-3">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-body text-[9px] tracking-widest uppercase text-[#c9a84c]/60 border border-[#c9a84c]/20 px-2 py-0.5 rounded-sm">Stage 2</span>
              <h4 className="font-display text-base text-[#f2ebeb]">Bio-Lyceionic Fusion (Amoeba like shape)</h4>
            </div>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              This then starts a process called Bio-Lyceionic Fusion after absorbing the energy from a nova. The crystal then melts into Plasmagel, where the lighter color from it forms a glass-like sphere, encasing the plasmagel inside. Inside the sphere, the plasmagel continues to react with the nova energy, infinitely. This is where the energy within keeps at a lyceonic laminar flow. The energy flows like a torrent of water and magma.
            </p>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              After all this happens, there are excess gels that float around outside of the core, so that falls onto the core (due to gravity) and turns into a rock-like case. At this point, it becomes very hard and unable to leave a scratch or impact dent.
            </p>
          </div>

          {/* Stage 3 */}
          <div className="border border-[#2e2b26] rounded-sm bg-[#0f0d0c] px-5 py-5 space-y-3">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-body text-[9px] tracking-widest uppercase text-[#c9a84c]/60 border border-[#c9a84c]/20 px-2 py-0.5 rounded-sm">Stage 3</span>
              <h4 className="font-display text-base text-[#f2ebeb]">It becomes a Lyecerianite Core</h4>
            </div>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              It is then called a Lyecerianite Core. However, it still needs to become a Passion Sun. Being tossed around in the endless vacuum of space (again by flying objects), it needs to find White Magma, a type of space liquid that has no core.
            </p>
          </div>

          {/* Stage 4 */}
          <div className="border border-[#c9a84c]/20 rounded-sm bg-[#0f0d0c] px-5 py-5 space-y-3">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-body text-[9px] tracking-widest uppercase text-[#c9a84c]/60 border border-[#c9a84c]/20 px-2 py-0.5 rounded-sm">Stage 4</span>
              <h4 className="font-display text-base text-[#c9a84c]">The Passion Star</h4>
            </div>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
              The coloration of this White magma is white close to silver. Lyecerianite Cores are attracted to this type of stuff, thus, when it merges with the White Magma, the colors from its core appear on the lava, which destabilizes the chaotic White Fusion in the magma. As it takes shape around the core and molds into that of a pretty firey ball, known as The Passion Star.
            </p>
          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Section — Same Elements */}
        <section className="space-y-4">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Each of these Passion Stars all have the same elements</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Aside from The Aqualivia Sun that lives in the Nhumela Cluster, ALL these Passion Stars has all the same elements in each one of them, despite being VERY rare.
          </p>
          <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm overflow-hidden">
            {['Copper Chloride', 'Calcium Chloride', 'Hydrogen', 'Helium', 'Ashburn Orangium'].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-2.5 border-b border-[#1a1714] last:border-0">
                <span className="font-display text-sm text-[#c9a84c] w-5 shrink-0">{i + 1}.</span>
                <p className="font-body text-base text-[#c8c2ba]">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            A very stable sun that doesn't emit too much solar radiation, thus this gives Planet Hetra moderate seasons, weather, climate, and heat. There's this strange phenomenon, where once in a while, each of these stars likes to envelop itself in a very light fog, for unknown reasons. Also, the color is all the same for each individual star!
          </p>
        </section>

      </div>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/world/databases/TheNaturalLawOfSpaceTime" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">←</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">The Natural Law of Space-Time</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
