import { Link } from "react-router-dom";

// ─── Small helpers (defined above the main export) ───────────────────────────

function GoldLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-[#c9a84c] hover:underline">
      {children}
    </Link>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{children}</p>
    </div>
  );
}

function Spec({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-[#c9a84c] font-display text-sm mt-0.5 shrink-0">&mdash;</span>
      <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
        <span className="text-[#f2ebeb] font-medium">{label}:</span> {children}
      </p>
    </div>
  );
}

function SpecBox({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-2.5">
      {title && <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-1">{title}</p>}
      {children}
    </div>
  );
}

function Toggle({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group border border-[#2e2b26] bg-[#0f0d0c] rounded-sm open:border-[#c9a84c]/40 transition-colors">
      <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-3.5 select-none">
        <span className="font-display text-base text-[#f2ebeb] group-open:text-[#c9a84c] transition-colors">{title}</span>
        <span className="text-[#c9a84c] text-lg transition-transform group-open:rotate-90">&#8250;</span>
      </summary>
      <div className="px-5 pb-5 pt-1 space-y-3 border-t border-[#1a1714]">{children}</div>
    </details>
  );
}

function ProductCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-6 space-y-4 hover:border-[#c9a84c]/40 transition-colors">
      {children}
    </div>
  );
}

function Price({ children }: { children: React.ReactNode }) {
  return <span className="font-display text-base text-[#f2ebeb]">{children}</span>;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TechnologicalBrandsOfHetra() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/world/databases"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to World Databases
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          IV. Technology &amp; Consumerism
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">&#128207; Technological Products of Hetra</h1>
        <blockquote className="border-l-2 border-[#c9a84c] pl-5">
          <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
            &ldquo;Every day of the week is like a hard working ant. Making inventions and living with it along with magic is truly a wonderful thing&rdquo;
          </p>
          <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mt-2">&mdash; Avia Remyls</p>
        </blockquote>
      </div>

      {/* ── Brands and Products ── */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Brands and Products</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          In the World of Hetra, there are a lot of consumer products as of the year 2245. With Hexicules being a lead technological innovation, almost most products use it in their system. From brands and products, there are a lot that makes this world feel lived in. A lot of people rely on devices and technological inventions, and there are a lot of jobs that require some form of technological skills. Even in a world full of magic and supernatural beasts, the products here are what makes the consumerism feel alive.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Aside from food brands, clothing, retail, and much more, technology is the most prominent force alongside with magic and the supernatural. It helps bridge the gap from fiction to reality.
        </p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          A product that is built to <span className="text-[#f2ebeb] font-medium">last longer</span> holds its price value &mdash;it doesn&apos;t inflate&mdash;ever. Products only inflate if a product degrades quickly. This drives inflation upward because demand cycles faster.
        </p>
        <p className="font-body text-base text-[#7a746e] leading-relaxed">
          Here are some tech brands that are often talked about based on their popularity.
        </p>
      </section>

      {/* ── Technological Phones ── */}
      <section className="space-y-8">
        <h2 className="font-display text-lg text-[#f2ebeb]">Technological Phones</h2>

        {/* HERA Model 5 */}
        <ProductCard>
          <div>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">HERA Model 5 (HERA MK 5)</h3>
            <p className="font-body text-xs text-[#7a746e] tracking-wider">
              <span className="text-[#f2ebeb]">Category:</span> Personal Device &nbsp;|&nbsp; <span className="text-[#f2ebeb]">Type:</span> Phone &nbsp;|&nbsp; <span className="text-[#f2ebeb]">Price:</span> <Price>&#294;15,000</Price> &nbsp;|&nbsp; Also known as HERA MK 5.
            </p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The HERA Model 5 is a flagship phone from the brand HERA, known for its fantasy-inspired aesthetic and premium build quality. Its exterior features a striking combination of brown, gray, and gold accents with a deeply textured metallic finish, giving it a look unlike anything else on the market. The screen is generously sized, fitting comfortably in hand without feeling unwieldy.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            What sets the HERA Model 5 apart from competitors is its Hexicule Core technology, a built-in magic crystal that powers the device and handles self-repair. Because of this, the phone requires no monthly or yearly service fees. A unique ingrained phone number comes pre-loaded into each unit, allowing free calls and messaging to anyone, anywhere in the world, at no additional cost.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Model 5 also supports a wide range of security options, including fingerprint encryption, voice recognition, a PIN feature, a magic response system, and a supernatural security system for those with Hibryd abilities. Its supernatural security option lets the user link a personal power to unlock the device, making it virtually impossible for anyone else to access.
          </p>
          <SpecBox title="Specifications">
            <Spec label="Storage">12TB</Spec>
            <Spec label="Processor">HeavyDragon 10</Spec>
            <Spec label="Operating System">HexicoleOS, based on Cyborg 12</Spec>
            <Spec label="RAM">128 GB</Spec>
            <Spec label="GPU">Uenix 550</Spec>
            <Spec label="Battery">85,700 eXpH with Instant Charge 60 | Up to 67 hours of use. This battery is SLIM.</Spec>
            <Spec label="Durability">Resistant to physical damage, supernatural forces, and extreme conditions</Spec>
          </SpecBox>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The HERA MK 5 is produced by the phone brand <span className="text-[#f2ebeb] font-medium">HERALink, which is located in The District of Eldreule, Riverchnaut (Lynneria).</span>
          </p>
        </ProductCard>

        {/* Hexel Lightyear */}
        <ProductCard>
          <div>
            <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Hexel Lightyear &mdash; The Phone Flagship</h3>
            <p className="font-body text-xs text-[#7a746e] tracking-wider">Known as Hexel LY, this is Planet Hetra&apos;s flagship phone!</p>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Hexel LY is a sleek, holographic-enabled flagship killer built for people who live between city streets and wild trails. It&apos;s a deep-black, metal-framed smartphone that hides a sci-fi trick in plain sight: the selfie camera doubles as a tiny hologram projector, letting parts of your digital life literally float above the screen. With an Auto-correcting GPS navigation system, you will not lose yourself when hiking. The back of the phone&apos;s design has a very clear black-like metal coating, with a stylized golden trimmed V as the logo.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This phone is produced by the phone brand, <span className="text-[#f2ebeb] font-medium">Lhuminosity, located in The District of New Rynels (Rynel).</span> This phone isn&apos;t just a powerhouse or a luxury item&mdash;it is a phone that is capable of fulfilling everyday needs.
          </p>

          <h4 className="font-display text-base text-[#f2ebeb] mb-2 pt-2">Overall Specifications</h4>
          <SpecBox>
            <Spec label="Dimensions">Length: 6.5&Prime; &nbsp;&middot;&nbsp; Width: 3.54&Prime; &nbsp;&middot;&nbsp; Thickness: 8.0 - 8.30 mm</Spec>
            <Spec label="Battery">20,000 eXpH, a slim pack, divided by four sections.</Spec>
            <Spec label="Rear Camera">250mp</Spec>
            <Spec label="Selfie Camera">150mp (doubles as Holographic Displayer)</Spec>
            <Spec label="SoC (&ldquo;Helio Core&rdquo;)">Octa-core CPU (big + small cores). Integrated GPU optimized for 3D and light-field rendering. Dedicated NPU / &ldquo;SmartCore&rdquo; for on-device assistant, camera, and biometrics.</Spec>
            <Spec label="Memory / Storage">The Type-C Port is replaced with an I/O Bay for Sim and TF Cards. Can be sealable with a silicon rubber flap. 4 TB RAM. 512 GB UFS-class storage. 2 TB Expandable Storage Slot.</Spec>
            <Spec label="Connectivity">Has Bluetooth 7. 10G Wifi and Bandwidth. Global Networking and Connection.</Spec>
            <Spec label="Screen Specs">Resolution at 1080p (supports 2K). 175 Refresh Rate. 64.5 FPS when in Gaming Mode (overclock/clocked).</Spec>
          </SpecBox>

          <h4 className="font-display text-base text-[#f2ebeb] mb-2 pt-2">Other Hexel Features</h4>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">The Hexel LY is one of the most innovated devices as a phone with full features.</p>

          <div className="space-y-2">
            <Toggle title="Materials Used (Interior & Exterior)">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                The body is a matte-anodized aluminum frame wrapped in tough, subtly textured glass, with a dark &ldquo;Vexel&rdquo; finish that makes the camera island and Helio emblem glow just a little when the light hits. The front is almost all display: a bright, high-refresh LCD panel tuned for outdoor readability, with a small cutout at the top for the combined selfie/holographic module. It&apos;s water- and dust-resistant, drop-ready thanks to an internal metal skeleton, and designed to feel solid but not bulky in one hand.
              </p>
              <div className="space-y-2.5 pt-1">
                {[
                  ["Exterior Exoskeleton and Frame", "Made out of Carbon-Fiber infused Tungsten."],
                  ["Thermal + structural composite chassis", "Main body made from a PLA-infused silicate + graphene + copper composite. PLA/silicate = structural, fire-resistant, 3D-printable shell. Graphene + copper network = high-efficiency heat spreading skeleton."],
                  ["Graphite / graphene heat spread network", "Graphite/graphene sheets laminated through the chassis to distribute heat across the back and into the frame. Works with copper to prevent hot spots and keep performance un-nerfed."],
                  ["Copper / NiTi (Nitinol) thermal spine & bones", "Internal “spine” of copper (and possibly copper-graphite sandwich) bonded to SoC, battery, and camera island. Nitinol rails / ribs as shape-memory bones: chassis flexes on impact, then returns to original shape when warmed by normal use."],
                  ["Rubber-based Cu-Ti (plus NiTi) interconnects", "Wires and connectors made from a rubber matrix loaded with copper and titanium conductors. Flexible for assembly, then self-stiffening after thermal cycling so connectors don’t work loose. Tiny Nitinol elements inside add temperature-dependent stiffness and shock resilience."],
                  ["Thermoelectric “heat recycler” layer", "Thin thermoelectric generator (TEG) sheets between hot core (SoC/battery) and cooler outer shell. Recovers a slice of waste heat as electricity to power low-draw systems and extend effective battery life."],
                  ["Motherboard substrate", "PLA-infused ABS + graphene composite board instead of classic FR-4. ABS/PLA = tough, somewhat forgiving structure. Graphene filler = boosted in-plane thermal conductivity to spread chip heat into the chassis network. Copper-rubber infused graphene connectors that use NiTi to shape back to normal."],
                  ["Display stack", "LCD panel for practicality and ruggedness. Aluminosilicate cover glass (Gorilla-style) on top. Thin titanium or Nitinol frame around the display, tying into the NiTi “bones” so the screen survives flex and drops."],
                  ["Camera block / heatsink", "Camera frame and island made from copper (or copper-graphene) heatsink, visibly metal. Hard-mounted to the internal copper spine so heavy camera/ISP usage dumps heat efficiently."],
                  ["Camera Lenses (Rear and Front)", "Made with diamond-infused plex-fiber glass lenses. One Dedicated Fish Eye Lens in the Rear Camera(s)."],
                ].map(([term, desc], i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="font-display text-sm text-[#c9a84c] shrink-0 mt-0.5">{i + 1}.</span>
                    <p className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                      <span className="text-[#f2ebeb] font-medium">{term}</span> &mdash; {desc}
                    </p>
                  </div>
                ))}
              </div>
            </Toggle>

            <Toggle title="Internal Structure">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Inside, a custom Hexel-class chip combines CPU, GPU, and a dedicated &ldquo;SmartCore&rdquo; that runs the phone&apos;s intelligence entirely on the device. Instead of a giant generative AI model, Vexel Helio uses lightweight, focused systems: it understands your commands, sorts your information, and drives its visual tricks without sending your life to distant servers. The battery and thermals are tuned so you can run navigation, camera, and assistant features all day without babysitting the charger. The internal structure can keep itself intact and self-regulated without overheating.
              </p>
            </Toggle>

            <Toggle title="Camera Features">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Its camera system carries a versatile rear array including main, ultrawide, and a specialist lens, backed by on-device computational processing for low-light shots and dynamic range. The real personality is the <span className="text-[#f2ebeb] font-medium">Auto-ID</span> mode (fourth camera/tracking): point it at gear, signs, or scenery and it can recognize everyday objects, or switch into a nature-focused mode while hiking to help identify plants, animals, and fungi. If you&apos;re offline on a trail, it quietly queues your captures and fills in the details once you&apos;re back in signal, tying each sighting to time and location. It has four cameras on the back. Video quality can be shot up to 8K, and photos up to 4K.
              </p>
              <div className="space-y-2">
                <Bullet>IP68-style water/dust resistance. Can survive major heats and major colds.</Bullet>
                <Bullet>Reinforced internal magnesium or aluminum sub-frame for drop resistance.</Bullet>
                <Bullet>Tactile metal power and volume keys.</Bullet>
                <Bullet>Bluetooth 7</Bullet>
              </div>
            </Toggle>

            <Toggle title="Biometric Features">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">There is a 5-style biometric system that can be paired by two unlocking systems.</p>
              <div className="space-y-2">
                <Bullet>Thermal Biometric</Bullet>
                <Bullet>Facial Biometric</Bullet>
                <Bullet>Retina Scan</Bullet>
                <Bullet>Fingerprint Scan</Bullet>
                <Bullet>Voice Recognition</Bullet>
              </div>
            </Toggle>

            <Toggle title="Charging Features">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                This phone can charge up to different styles and usages. In the settings of the phone, you can disable and enable certain features that can charge this phone wirelessly, since there is no Type C port. This phone can also reverse charge wirelessly for other phones equipped with wireless charging. The 20,000 eXpH slim battery will not overheat or overexpand due to NiTi bones and structures.
              </p>
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e]">Charging Sources:</p>
              <div className="space-y-2">
                <Bullet>Light (solar, lunar, UV, IR)</Bullet>
                <Bullet>Heat &amp; cold (thermoelectric)</Bullet>
                <Bullet>Motion (inertial/kinetic)</Bullet>
                <Bullet>Water motion (hydro-momentum)</Bullet>
                <Bullet>Wind (micro aero harvester)</Bullet>
              </div>
            </Toggle>

            <Toggle title="Sound System">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Four speaker-like mesh designs, two on the top sides and two on the bottom. It runs on stereo sound with Dolby Atmos, giving you a surreal crisp sound with high fidelity and a cinematic experience.
              </p>
            </Toggle>

            <Toggle title="Operating System — HexicoleOS">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                At the software level, Hexel LY runs a custom interface built around a local, JARVIS-style assistant that you wake with a phrase like &ldquo;Hey Hexel.&rdquo; It doesn&apos;t write essays or pretend to be everything; instead, it&apos;s laser-focused on organizing your life. It manages your calendar, builds smart reminders around your schedule, keeps your inbox tidy, and turns quick thoughts into tagged, searchable notes, all processed on the phone. You can say things like &ldquo;What&apos;s my day look like?&rdquo;, &ldquo;Clean up my inbox,&rdquo; or &ldquo;Take a note and pin it here,&rdquo; and get concise, characterful responses instead of rambling monologues.
              </p>
            </Toggle>

            <Toggle title="Hexel The Assistant">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Hexel is your very own private AI assistant. It only runs on tasks you give it, but it will not generate images (or art of any form) or use any MLM or LLMs. Since Hexel runs from the NPU and also the OS itself, it can help you keep track of your activity. This also includes:
              </p>
              <div className="space-y-2">
                <Bullet>Making lists, voice memos, and more</Bullet>
                <Bullet>Changing your calendar</Bullet>
                <Bullet>Receive Calls / Voice Chats / Video Chats</Bullet>
                <Bullet>Store your information and secure it within the phone (has its own encryption layers)</Bullet>
                <Bullet>Can connect seamlessly to your other devices.</Bullet>
              </div>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                You can even customize your Hexel Assistant with lots of different voices using hyper-realistic training based solely on your voice with dialogue you feed it. You can record your voice, and Vexel will do the rest by asking you what kind of features the new voice should have. It can become feminine, it can become more robotic, sound more human, or take on different forms of voices. Hexel will never impersonate celebrity voices or more. It is tailored only to your voice and recognizes it. You can even talk to Hexel natively via a Chatbot setting you can enable within the phone&apos;s settings.
              </p>
            </Toggle>

            <Toggle title="Holographic Display">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                The holographic transmitter and displayer is inside the selfie camera module. This is where the phone steps into legend. When you talk to the assistant, a small 3D avatar or icon can rise a few centimeters above the screen, reacting as it reads off your agenda or highlights an important email. When you identify a plant or object, a miniature 3D representation can spin above the display for a moment before tucking itself back into the UI. These holograms are short, bright flourishes, glimpses of the future designed not to drain your battery but to make every interaction feel a little magical. The Holographic Display can even project what you want into the air, like a calendar, the weather, maps (GPS), and more.
              </p>
            </Toggle>

            <Toggle title="Nanofiber Protective Vent">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Uses a micro/nano polymer fiber mesh with super tiny pores (sub-micron scale) that let air and water vapor through but block liquid water and dust. Real membranes like ePTFE and advanced nanofiber meshes are already waterproof yet breathable, with pores much smaller than water droplets but larger than vapor, so they don&apos;t &ldquo;soak&rdquo; or absorb water. Some of these new membranes also provide radiative cooling and stay superhydrophobic (water contact angles over 150 degrees), meaning water literally beads and rolls off.
              </p>
            </Toggle>

            <Toggle title="The Flashlight">
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Designed on the left corner of the phone, it is very small but very powerful. It has a power of 250 lumens, giving you easy access and nightly hiking.
              </p>
            </Toggle>
          </div>

          <h4 className="font-display text-base text-[#f2ebeb] mb-2 pt-2">Your Data, Your Control</h4>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Privacy and control run through the whole design. Your biometric data, preferences, and assistant behavior live on the device by default, with multiple profiles gated by fingerprint, face, or both. The assistant only sees what each profile allows, so work, personal, and guest spaces can coexist without bleeding into each other.
          </p>

          <h4 className="font-display text-base text-[#f2ebeb] mb-2 pt-2">The Hexel Lightyear is priced at <Price>&#294;650.99</Price></h4>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Sitting confidently in that space where a phone feels aspirational, powerful, and just within reach, a device meant to be carried, scuffed, relied on, and remembered as the moment phones started folding your world into light.
          </p>
        </ProductCard>
      </section>

      {/* ── Advanced Smartphone Watches ── */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Advanced Smartphone Watches</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            There are lots of advanced technology in the world, and when it&apos;s paired with <GoldLink to="/world/databases/TechnologyTransitSystems">Hexicules</GoldLink>&hellip;.it becomes wildly efficient with all kinds of technology. There isn&apos;t just super advanced phones. There are also phones you can wear on your wrist. Like a watch, but make it your phone.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Within the Economy, there are at least 50k in circulation and production. Smartwatches like these can serve a few functions: biological reading, power displays&mdash;which shows the user&apos;s powers based on biology, and biological adaptability.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            These smartwatches have almost the same function as the HERA MK 5, they are made under the brand, <span className="text-[#f2ebeb] font-medium">Clockworks,</span> who sometimes collaborates with Lhuminosity. There are a few differences though.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            If a person doesn&apos;t want a phone, a smartwatch can help! There are a lot of people who are active in sports, hiking, or are a part of the <GoldLink to="/world/locales/AQTFC">AQTFC</GoldLink>. These watches work the same way as the phones sold.
          </p>
          <p className="font-body text-base text-[#7a746e] leading-relaxed">
            Here are a few products that get made and sold out in just three months.
          </p>
        </div>

        {/* Lunafone SW S1 */}
        <ProductCard>
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Lunafone SW S1</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Lunafone Smartwatch S1 is one of the leading next-gen phones that can be worn on the wrist.
          </p>
          <SpecBox>
            <Spec label="Priced At"><Price>&#294;3,750.99 Hetrix</Price></Spec>
            <Spec label="Storage">12TB</Spec>
            <Spec label="Main Chipset">LFCPU. 8 Cores, 16 Small Cores.</Spec>
            <Spec label="Secondary Processor">Heavy Dragon 10</Spec>
            <Spec label="Operating Sys">HexicoleOS 10</Spec>
            <Spec label="RAM">512 GB</Spec>
            <Spec label="GPU">Luna Uenix 550</Spec>
            <Spec label="Battery Capacity">10,000 eXpH. It&apos;s slim and flat and doesn&apos;t take up too much space, since it is combined with a Hexicule. Wireless Charging compatible. Up to 120 watts. The Hexicule core can self repair the watch if major damages are sustained.</Spec>
            <Spec label="Durability">Can withstand extreme temperatures and damage.</Spec>
            <Bullet>Uses the same AI system as Hexel LY.</Bullet>
            <Spec label="Front Camera (Side) MP">350 mp. The camera is the flagship feature. It can shoot and record up 4k - 8k resolutions in high definition without losing quality. It&apos;s called the Luna Camera and it is made with diamond polished glass.</Spec>
            <Spec label="Colors">comes in Crystal Pink, Obsidian Blue, and Greenwood Gloss</Spec>
          </SpecBox>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            One of the most popular smartwatches, but has up to &#294;460k Hetrix units sold. This phone excels at digital photography because its camera has some of the sharpest and detailed pictures it can take.
          </p>
        </ProductCard>

        {/* Solaris SW MK 1 */}
        <ProductCard>
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Solaris SW MK 1</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Solaris SW MK 1 excels in one thing: long range usage. The components inside are made with self cooling copper and nitinol materials, which is what makes everything inside run smoothly. It can also self regulate itself because of the Hexicule core that is inside.
          </p>
          <SpecBox>
            <Spec label="Priced At"><Price>&#294;3,250.99 Hetrix</Price></Spec>
            <Spec label="Storage">5 TB</Spec>
            <Spec label="Main Chipset">Solaris 2000. 32 Big Cores, 16 Small.</Spec>
            <Spec label="Secondary Processor">Heavy Dragon 10</Spec>
            <Spec label="Operating Sys">HexicoleOS 10</Spec>
            <Spec label="RAM">512 GB + Expandable Digital 64 gb</Spec>
            <Spec label="Battery">15,700 eXpH with Wireless Charging at 190 watts.</Spec>
            <Spec label="Durability">Water Resistant, Heat Resistant.</Spec>
            <Bullet>Front Camera MP is the same as the Lunafone SW S1</Bullet>
            <Spec label="Materials Used">Hardwood Lucid Metal, Nitinol infused Copper and Tempered Hexicole Diamond Glass.</Spec>
            <Spec label="Colors">Vibrant Navy Blue, Tangent Ruby, Redwood Camouflage</Spec>
          </SpecBox>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Solaris SW MK 1 is often used in military services because of its pin point accurate GPS system. Wifi speeds can go up to 520 kbps which can also download stuff at insane speeds. This device can also sync and connect to different devices and technological inventions that&apos;s made for the Hetranian Military. This smartwatch has sold up to &#294;653k Hetrix.
          </p>
        </ProductCard>

        {/* Aerolun SW MK 1 */}
        <ProductCard>
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Aerolun SW MK 1</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Aerolun SW MK 1 is one of the third best smartwatches out there. It&apos;s not about performance or durability, but of communication and storage. This device has the latest wifi 10g chip installed and is a beast at international telecommunications. It also has Bluetooth 7 connectivity and is compatible with a lot of devices like computers, AI systems, and more.
          </p>
          <SpecBox>
            <Spec label="Priced at"><Price>&#294;2,555.99 Hetrix</Price></Spec>
            <Spec label="Storage">16 TB</Spec>
            <Spec label="Main Chipset">Aerolun 2100. 20 big cores, 12 small cores.</Spec>
            <Spec label="Secondary Processor">Heavy Dragon 10</Spec>
            <Spec label="Operating Sys">HexicoleOS 10</Spec>
            <Spec label="RAM">512 GB + 8 GB Digital Expansion</Spec>
            <Spec label="Battery">18,700 eXpH. Wireless Charging compatible at 120 watts.</Spec>
            <Spec label="Durability">Water Resistant, Magic Adaptable Resistance, Damage Resistance</Spec>
            <Spec label="Front Camera MP">450 mp that can shoot and record at 16k resolution.</Spec>
            <Bullet>Same Materials as the Solaris SW MK 1</Bullet>
            <Spec label="Colors">Obsidian Purple, Burgundy Green, Sea-foam Metallica</Spec>
          </SpecBox>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Aerolun SW MK 1&apos;s Magical Adaptable Resistance is resistant to any kind of magic damage along with supernatural powers. It&apos;s not just resistant but also Adaptable to the &ldquo;morph ability&rdquo; where it will stay in the same shape regardless of the user&apos;s morph power. This smartwatch has sold up to &#294;850k Hetrix because of its excellence in communications and networking. Download speeds go up to 600 kbps.
          </p>
        </ProductCard>
      </section>

      {/* ── The Very First Super Computer ── */}
      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Very First Super Computer</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The world of Hetra isn&apos;t just dependent on everything. And Hexicules isn&apos;t just the solution to everything despite it being an unlimited source of energy. The technological prowess as of the year 2245 also doesn&apos;t stem on just phones and smartwatches.
          </p>
        </div>

        <ProductCard>
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">GIATUS &mdash; One Super-Computer to Rule them All</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Located in New Rynels, Rynel, there is one super computer that is made to rule over all technological innovations. It is called G.I.A.T.U.S, short form for Genius-Intelligent Advanced Technological Unit System, which is a super computer AI assistant. GIATUS has its own voice that feels and sounds natural.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            GIATUS runs on a large <GoldLink to="/world/databases/TechnologyTransitSystems">Hexicule</GoldLink> crystal combined with a Vesselyte Crystal which gives it near unlimited energy because of the Hexicule-covalent bond it gives. It is always on and will not lose energy.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Because of how complex Giatus is, it can almost understand any form of computer language, which includes CSS, JS, Python, C++ and many more.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">This super computer does many tasks.</p>
          <div className="space-y-2 pl-2">
            <Bullet>It creates systems that help with security and privacy</Bullet>
            <Bullet>It can create and organize blueprints.</Bullet>
            <Bullet>It can upgrade and update devices accordingly</Bullet>
            <Bullet>Detects Climate Changes</Bullet>
            <Bullet>Catalog and store government files.</Bullet>
            <Bullet>Can work on near complex and impossible tasks</Bullet>
            <Bullet>It can study quantum mechanics if a task is given</Bullet>
          </div>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            On hindsight, it is limited to what it itself can do. Any form of art like writing, drawing, music and of the sort, Giatus will not create or go over that line. The system itself admires human creativity. It will never undermine or take away the efforts of the population itself.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            GIATUS itself is pretty ginormous. It stands at 10 Feet in height, and is as wide as four large sized refrigerators. Its screen is made out of Hetranium Glass with LCDs. Hetranium Glass is a synthetic production of Hetranium Crystals. It can also create holographic projections that almost look real.
          </p>
          <SpecBox title="GIATUS Specs">
            <Spec label="Storage">450 PB (HDD &amp; SDD)</Spec>
            <Spec label="Chipset">GiatusMK5 - 50 cores, 25 small cores</Spec>
            <Spec label="Secondary Processors">Heavy Dragon 200x4 (forked version of HexicoleOS)</Spec>
            <Spec label="Operating Sys">GiatusOS 12</Spec>
            <Spec label="RAM">3.5 TB + 10 TB Digital Expansion</Spec>
            <Spec label="Battery">65,570 eXpH + Solar / Lunar Charging</Spec>
            <Spec label="GPU">GiatusGPU MK 750, 50 GB.</Spec>
            <Spec label="Quantum Chipset">QPU S1 - 2 Quantum Cores</Spec>
            <Spec label="Holographic Processor">2 TB Power w/ 275 MPP (Megapixel Projection)</Spec>
            <Bullet>Has Bluetooth and Wifi 7 with Cross Device Sync</Bullet>
          </SpecBox>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Its Camera Systems operate at the same level the <GoldLink to="/world/locales/HetraSEAPSpaceProgram">CalderiaX Space Satellite</GoldLink> has, which is at 350 MP. It also has both thermal, xray functions, and identification systems.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            GIATUS&apos;s power doesn&apos;t draw on district city infrastructure. Since its battery is part Hexicule and Vesselyte, it draws power from the sun by the Defcon Towers that sit above it. It can also draw in lunar energy when needed.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The super computer is part of Grendela Industries, made by Grendela Wyze, which is backed by &#294;5.6 Million Hetrix from <GoldLink to="/characters/PhilstraRhys">Philstra Rhys</GoldLink>. GIATUS which sits in a building on an isle in New Rynels Gulf.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            If the solar and lunar charging fails, it takes the energy from the tidal waves that hit the isle and converts it into sustainable energy.
          </p>
        </ProductCard>
      </section>

      {/* ── Computers, Laptops & PCs ── */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Computers, Laptops &amp; PCs</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Phones and smartwatches are not the only pieces of technology keeping Hetra running. For heavier tasks, research work, creative projects, government operations, and high-end processing, citizens rely on personal computers and laptops. These devices draw from the same Hexicule-powered infrastructure as everything else, which means they carry the same self-repairing cores, the same wireless charging capabilities, and the same global connectivity that defines modern Hetranian technology. Computers, however, take things further. The processing power inside even a mid-range laptop far outpaces what any phone or smartwatch can handle on its own.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Most computers and laptops sold in Hetra are produced by brands based out of Eldreule and New Rynels, the two cities with the highest concentration of technology manufacturers. A few boutique brands operate out of Grelladore and Ironbark, but Eldreule remains the undisputed center of personal computing on the planet. Even with magic being a universal resource in daily life, the demand for personal computing has only grown. Processing data, creating large-scale blueprints, running government databases, and producing entertainment content all require machines that magic alone cannot replace.
          </p>
        </div>

        {/* ArcLume Nova MK1 */}
        <ProductCard>
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">ArcLume Nova MK1</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The ArcLume Nova MK1 is the most widely sold laptop in Hetra as of the year 2245. It is designed for the everyday citizen: students, officers, researchers, writers, and anyone who needs a reliable machine capable of handling most tasks without slowing down. It does not try to be the most powerful device on the market. Instead, it focuses on portability, long battery life, and a build quality that holds up across years of steady use.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            It is produced by <span className="text-[#f2ebeb] font-medium">ArcLume Technologies</span>, headquartered in the District of Eldreule, Riverchnaut. The Nova MK1 comes with a full HexicoleOS installation and connects seamlessly to other Hetranian devices through its built-in cross-device sync feature. No subscription fees. No monthly charges. The Hexicule Core handles the rest.
          </p>
          <SpecBox>
            <Spec label="Priced At"><Price>&#294;8,500 Hetrix</Price></Spec>
            <Spec label="Storage">8 TB SSD</Spec>
            <Spec label="Main Chipset">ArcCore MK4 &mdash; 12 Big Cores, 8 Small Cores</Spec>
            <Spec label="Operating System">HexicoleOS 10</Spec>
            <Spec label="RAM">256 GB</Spec>
            <Spec label="GPU">ArcGPU 400 &mdash; 16 GB</Spec>
            <Spec label="Battery">45,000 eXpH with Wireless Charging at 90 watts. Slim and flat, supported by a Hexicule Core for self-regulation and minor self-repair.</Spec>
            <Spec label="Screen">14&Prime;, Aluminosilicate OLED, 2K Resolution, 120Hz Refresh Rate</Spec>
            <Spec label="Durability">Drop resistant, water resistant, temperature adaptive</Spec>
            <Spec label="Colors">Slate Gray, Ivory Frost, Cobalt Dusk</Spec>
          </SpecBox>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The ArcLume Nova MK1 has sold over &#294;1.2 million Hetrix units since its release, making it the most purchased personal computer on the planet. Its global network connection comes pre-installed and requires no configuration. The Hexicule Core charges the device passively from light, heat, and motion sources, meaning the battery rarely needs to be plugged in under normal daily use.
          </p>
        </ProductCard>

        {/* Crystallex DX Tower MK3 */}
        <ProductCard>
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Crystallex DX Tower MK3</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Not everything runs on portability. The Crystallex DX Tower MK3 is built for people who need raw, uncompromising processing power: engineers designing transit systems, scientists modeling climate behavior, film studios rendering 8K productions, and government facilities managing intercontinental databases. It sits in a category above what most citizens will ever require, but for those who need it, nothing else on the market comes close at its price point.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The DX Tower MK3 is produced by <span className="text-[#f2ebeb] font-medium">Crystallex Computing</span>, a branch of Grendela Industries based in New Rynels, Rynel. It is one of the few consumer products outside of GIATUS that can communicate directly with GIATUS&apos;s own systems for synchronized data operations, making it a preferred workstation for institutions that already operate within Grendela&apos;s technology ecosystem.
          </p>
          <SpecBox>
            <Spec label="Priced At"><Price>&#294;55,000 Hetrix</Price></Spec>
            <Spec label="Storage">100 TB (SSD + HDD combined)</Spec>
            <Spec label="Main Chipset">CrystaMK9 &mdash; 64 Big Cores, 32 Small Cores</Spec>
            <Spec label="Secondary Processor">Heavy Dragon 200</Spec>
            <Spec label="Operating System">HexicoleOS Pro 10, Server Edition</Spec>
            <Spec label="RAM">2 TB + 500 GB Digital Expansion</Spec>
            <Spec label="GPU">CrystGPU MK 900 &mdash; 128 GB</Spec>
            <Spec label="Quantum Chipset">QPU C1 &mdash; 1 Quantum Core</Spec>
            <Spec label="Battery">120,000 eXpH with Solar and Tidal Charging compatibility via external Defcon Tower attachment</Spec>
            <Spec label="Holographic Processor">500 GB Power &mdash; 180 MPP (Megapixel Projection)</Spec>
            <Spec label="Durability">Reinforced chassis with internal self-regulating temperature systems. Does not overheat under sustained heavy workloads.</Spec>
          </SpecBox>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The DX Tower&apos;s QPU quantum core is what separates it from everything else at its tier. Tasks like advanced cryptography, multi-variable simulations, and large-scale blueprint generation take minutes rather than hours. Crystallex DX Tower MK3 units are primarily purchased by government departments, universities, research centers, and large-scale businesses. Approximately &#294;340k Hetrix in total units have been sold since its release, with each individual sale sitting at a notably high value.
          </p>
        </ProductCard>

        {/* Solaris Thin MK2 */}
        <ProductCard>
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Solaris Thin MK2</h3>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            Between the everyday laptop and the workstation powerhouse sits the Solaris Thin MK2, a slim and lightweight device built for people who are constantly moving. Adventurers, field officers, journalists, and traveling merchants are among its most common buyers. Its primary selling point is that it is the lightest full-function computer sold on Hetra, with a frame thin enough to slide into a standard bag pocket without any trouble.
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Solaris Thin MK2 is produced by <span className="text-[#f2ebeb] font-medium">Clockworks</span>, the same brand behind several of Hetra&apos;s leading smartwatches. Because of this, the device is directly compatible with Clockworks smartwatch models through shared software and cross-device sync, letting users carry a unified personal tech setup from their wrist to their bag.
          </p>
          <SpecBox>
            <Spec label="Priced At"><Price>&#294;12,000 Hetrix</Price></Spec>
            <Spec label="Storage">10 TB SSD</Spec>
            <Spec label="Main Chipset">Solaris 3000 &mdash; 16 Big Cores, 12 Small Cores</Spec>
            <Spec label="Operating System">HexicoleOS 10</Spec>
            <Spec label="RAM">512 GB</Spec>
            <Spec label="GPU">Solaris GPU MK 2 &mdash; 32 GB</Spec>
            <Spec label="Battery">55,000 eXpH. Charges from light, heat, motion, and wireless sources. Slim and reinforced with Nitinol-infused copper framing to prevent warping under pressure.</Spec>
            <Spec label="Screen">13&Prime;, OLED Flexible Display, 2K Resolution, 144Hz Refresh Rate</Spec>
            <Spec label="Materials">Hardwood Lucid Metal frame with Tempered Hexicole Diamond Glass screen</Spec>
            <Spec label="Durability">Magic Adaptable Resistance, Water Resistant, Drop Resistant</Spec>
            <Spec label="Colors">Moonstone White, Stealth Black, Copper Ember</Spec>
          </SpecBox>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            The Solaris Thin MK2&apos;s Magic Adaptable Resistance works the same way as the Aerolun SW MK1: it remains structurally stable even when the user&apos;s morph ability or external supernatural forces interact with it. This makes it one of the preferred devices for Hibryd citizens who regularly use physical-altering powers. The device has sold up to &#294;980k Hetrix in units, making it the second best-selling computer product on the planet.
          </p>
        </ProductCard>
      </section>

      {/* Closing quote */}
      <blockquote className="border-l-2 border-[#c9a84c] pl-5">
        <p className="font-body text-base text-[#c9a84c] italic leading-relaxed">
          &ldquo;Using technology in this world isn&apos;t a need or a necessity even though it could be. It makes harder tasks more efficient on a daily day to day basis. Communication between people can be freely done without discourse, and coming together to innovate new products and brands is what makes a world like this feel grounded and lived in&rdquo;
        </p>
        <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mt-2">&mdash; <Link to="/characters/PhilstraRhys" className="hover:text-[#c9a84c] transition-colors">Philstra Rhys</Link></p>
      </blockquote>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/databases"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Databases &amp; Systems</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
