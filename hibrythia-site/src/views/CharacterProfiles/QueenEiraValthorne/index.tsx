import { Link } from 'react-router-dom';

export default function QueenEiraValthorne() {
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
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
          Queen Eira Valthorne
        </h1>
        <blockquote className="border-l-2 border-[#c9a84c] pl-4 italic font-body text-base text-[#c9a84c] leading-relaxed">
          &ldquo;Her lustrous green eyes, and blonde-like hair&hellip; oh how I wish to see her one last time. She&apos;d often dance in the grand halls with her familiars while singing a valedictorian lullaby. I could hear it from my den. It was soothing.&rdquo;
          <span className="not-italic text-[#7a746e]"> &mdash; Aurelia, Queen Eira&apos;s Personal Escort Dragon</span>
        </blockquote>
      </div>

      {/* ── Story Information ── */}
      <div className="bg-[#13110e] border border-[#2e2b26] rounded-xl p-6 space-y-4">
        <p className="font-display text-sm text-[#c9a84c] uppercase tracking-widest">Story Information</p>
        <div className="border-t border-[#2e2b26] pt-4 space-y-3 font-body text-base text-[#c8c2ba] leading-relaxed">
          <div>
            <p className="text-[#f2ebeb] font-display text-sm mb-1">Story Role</p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>Background / Worldbuilding Figure</li>
              <li>Ancient Monarch</li>
              <li>Ice Mage</li>
              <li>Founder of The Kingdom of Valthorne</li>
              <li>Central Figure of the Valthoreia Faith</li>
            </ul>
          </div>
          <p><span className="text-[#f2ebeb]">Story Presence:</span> Referenced throughout the series; does not appear directly</p>
          <p><span className="text-[#f2ebeb]">Point of Origin:</span> The Alarctic Alpines (The Kingdom of Valthorne)</p>
          <p><span className="text-[#f2ebeb]">Character Type:</span> Static (Historical / Mythic Figure)</p>
        </div>
        <p className="font-body text-sm text-[#7a746e] italic border-t border-[#2e2b26] pt-4">
          A queen whose silence shaped a world. Her crown still sits on an empty throne, glittering in sunlight, with no one left to wear it.
        </p>
      </div>

      {/* ── Personal Information ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Title",    value: "Queen of Valthorne, The Winter Moon Monarch" },
            { label: "Era",      value: "Steampunk Magic Era (3 AD – ~1500 AD)" },
            { label: "Race",     value: "Human (Ice Mage)" },
            { label: "Status",   value: "Vanished — Fate Unknown" },
            { label: "Hair",     value: "Blonde" },
            { label: "Eyes",     value: "Lustrous Green" },
            { label: "Known Ability", value: "All-powerful Ice Magic" },
            { label: "Aging",    value: "Ages very slowly — not immortal, not a god. A mortal who transcended through power and legacy." },
          ].map((row, i) => (
            <div key={i} className="bg-[#13110e] border border-[#2e2b26] rounded-sm px-4 py-3">
              <p className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] mb-1">{row.label}</p>
              <p className="font-body text-base text-[#f2ebeb]">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Backstory & History ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Backstory &amp; History</h2>
        <div className="space-y-4 font-body text-base text-[#c8c2ba] leading-relaxed">
          <p>In the ancient past, the Alarctic Alpines was not the frozen wasteland it is today. Before the storms consumed it, a kingdom reigned over the whole world from that land &mdash; <span className="text-[#f2ebeb]">The Kingdom of Valthorne</span>, named after its queen.</p>
          <p>Eira Valthorne was no ordinary ruler. She was an <span className="text-[#f2ebeb]">all-powerful Ice Mage</span>, bestowed with abilities like no other. Her heart was said to be carved from a shard of eternal winter, and her iconic crown was woven from moonlight and blackfrost. Though her dominion was cold and bitter, she kept balance &mdash; silencing the storms that ravaged the Alarctic wilderness and guarding the land from hexicule showers that threatened her people.</p>
          <p>She was <span className="text-[#f2ebeb]">feared and respected in equal measure</span>. A sovereign whose very presence commanded the elements. Her court hosted grand winter festivals, and she was known to dance in the grand halls with her familiars while singing valedictorian lullabies into the night. She loved feasting with her kingdom. She used the Crystal Observatory at the top of her palace to watch for storms and coordinate her people&apos;s defenses.</p>
          <p>And then, on one <span className="text-[#f2ebeb]">midwinter&apos;s eve</span>, she vanished.</p>
        </div>
      </div>

      {/* ── The Vanishing ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Vanishing &mdash; Three Legends</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">No confirmed account exists of what happened to Queen Eira. Three legends persist to this day, and all three are considered equally valid by different Valthoreian sects:</p>
        <div className="space-y-4">
          {[
            { title: "The Southern Descent",        desc: "She disappeared into the earth in the far south, descending into a deep unknown. Some believe she still walks beneath the world." },
            { title: "The Strange Illness",         desc: "She fell to a sickness no magic could cure — her power turned inward and consumed her slowly." },
            { title: "The Shattering",              desc: "She was betrayed and shattered into unfathomable counts of snowflakes, her soul scattered across the wind. Some Valthoreians believe every snowfall carries a piece of her." },
            { title: "The Moon Merging",            desc: "She did not die at all — she merged with the moon Zenya, watching over the world from above. The Crescent Moon is now her sacred symbol. (emerging modern belief)" },
          ].map((leg, i) => (
            <div key={i} className="pl-4 border-l-2 border-[#c9a84c]/40">
              <p className="font-display text-sm text-[#c9a84c] mb-1">&#9135;&#9135;&#9135;&#9135;&#9135;&#10096; {leg.title}</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{leg.desc}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-[#7a746e] italic mt-5">All interpretations are left open. No text, record, or divine source has confirmed the truth.</p>
      </div>

      {/* ── Appearance ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Appearance</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">Very few records of Eira&apos;s physical appearance survive. What is known comes from oral tradition and her dragon escort Aurelia&apos;s firsthand accounts:</p>
        <div className="space-y-2">
          {[
            { label: "Hair",     value: "Long, blonde" },
            { label: "Eyes",     value: "Lustrous green" },
            { label: "Crown",    value: "Woven from moonlight and blackfrost — intricate, iconic, and later immortalized as the Frostbloom symbol" },
            { label: "Presence", value: "Commanding but elegant — described as someone whose authority felt like the cold itself: inescapable, vast, and clarifying" },
          ].map((row, i) => (
            <div key={i} className="bg-[#13110e] border border-[#2e2b26] rounded-sm px-4 py-3 flex gap-4">
              <span className="font-body text-[10px] tracking-widest uppercase text-[#7a746e] shrink-0 w-20 pt-1">{row.label}</span>
              <span className="font-body text-base text-[#f2ebeb]">{row.value}</span>
            </div>
          ))}
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-4">Her crown remains on her throne in the <span className="text-[#f2ebeb]">Hall of Eternal Frost</span> to this day &mdash; untouched, pristine, glittering when sunlight breaks through the Ice Palace&apos;s spires.</p>
      </div>

      {/* ── Powers & Abilities ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Powers &amp; Abilities</h2>
        <div className="pl-4 border-l-2 border-[#c9a84c]/40 mb-6">
          <p className="font-display text-sm text-[#c9a84c] mb-3">&#9135;&#9135;&#9135;&#9135;&#9135;&#10096; Ice Magic (All-Power)</p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">Eira Valthorne&apos;s ice magic was legendary &mdash; unmatched by any other user recorded in Hibrythian history. The full scope of her abilities was never formally catalogued, but known feats include:</p>
        </div>
        <div className="space-y-4">
          {[
            { name: "Storm Silencing",           desc: "She could suppress the Alarctic's natural blizzards and hexicule showers at will — an act that should have been impossible for any single mage." },
            { name: "Palace Construction",        desc: "The Alarctic Ice Palace was either built or grown through her magic, constructed from glacial ice that never melts and pulses with an ethereal blue glow." },
            { name: "Environmental Preservation", desc: "After her disappearance, the ice of the palace became indestructible. No amount of harm can damage it. Many believe this is the last active echo of her power, still holding centuries later." },
            { name: "Aging Suppression",          desc: "Eira aged extraordinarily slowly — she was mortal, but time moved differently for her. She is not immortal. She simply had more of it than most." },
          ].map((ability, i) => (
            <div key={i} className="bg-[#13110e] border border-[#2e2b26] rounded-xl p-5">
              <p className="font-display text-sm text-[#f2ebeb] mb-2">{ability.name}</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{ability.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0f0d0c] border-l-2 border-[#7a746e] pl-4 pr-4 py-3 mt-5">
          <p className="font-body text-base text-[#7a746e] leading-relaxed italic">She is <span className="text-[#c8c2ba] not-italic">not classified as a Divine being</span> &mdash; she received no confirmed blessing from Queen Laeyana. Her transcendence was earned through sheer mastery, legacy, and the faith her people placed in her memory.</p>
        </div>
      </div>

      {/* ── Legacy & World Impact ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Legacy &amp; World Impact</h2>
        <div className="space-y-6 font-body text-base text-[#c8c2ba] leading-relaxed">
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-2">The Kingdom of Valthorne</p>
            <p>Eira&apos;s kingdom once <span className="text-[#f2ebeb]">reigned over the whole world</span> &mdash; a civilization that stretched from the Alarctic Alpines before the snow consumed it. The early settlements of Rynel (the Oakgnar continent) were built by Valthorne immigrants, and the Oakgnar Towns&apos; four mayors &mdash; the Lynn brothers &mdash; are descendants of that lineage. The continent of Eulerich also traces cultural roots back to Valthorne&apos;s reach.</p>
            <p className="mt-3">After her disappearance, the kingdom fractured. The Alarctic Alpines were gradually swallowed by storms, and the Ice Palace was abandoned &mdash; until the Ice Giant Ischvnielle eventually took refuge there, centuries later.</p>
            <p className="mt-3">In this world, the term &ldquo;Valedictorian&rdquo; is a word that is derived off of &ldquo;Valthoreia,&rdquo; which is used by the early Valthoreians.</p>
          </div>
          <div>
            <p className="font-display text-sm text-[#f2ebeb] mb-2">Aurelia &mdash; Her Personal Escort Dragon</p>
            <p>A <span className="text-[#f2ebeb]">Seapertent Dragon</span> named Aurelia was Queen Eira&apos;s personal escort and companion. After Eira&apos;s vanishing, Aurelia remained at the Ice Palace &mdash; alone &mdash; guarding it for centuries.</p>
            <p className="mt-3">As of the year 2245, Aurelia still guards the palace. She has not left. She has declared she will guard it <em>until her grave.</em></p>
            <blockquote className="border-l-2 border-[#c9a84c]/40 pl-4 mt-3 italic text-[#c9a84c]">
              &ldquo;I will keep guarding this place until my grave.&rdquo; &mdash; Aurelia
            </blockquote>
          </div>
        </div>
      </div>

      {/* ── Related Locations ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Related Locations</h2>
        <div className="space-y-4">
          {[
            { name: "The Alarctic Ice Palace", desc: "Eira's former seat of power. Now one of the Seven Wonders of the World. The Hall of Eternal Frost, Crystal Observatory, and her throne remain pristine and untouched within it. Guarded by Aurelia." },
            { name: "The Alarctic Alpines",    desc: "The continent Eira's kingdom once ruled. Now a frozen wilderness of blizzards, hexicule storms, and Seapertent Dragons." },
            { name: "Rynel (Oakgnar Continent)", desc: "Site of the Oakgnar Grand Tree and the four Oakgnar Towns — founded in part by Valthorne immigrants. The Midwinter Festival is celebrated here every 55th of Mulumber." },
          ].map((loc, i) => (
            <div key={i} className="pl-4 border-l-2 border-[#c9a84c]/40">
              <p className="font-display text-sm text-[#c9a84c] mb-1">&#9135;&#9135;&#9135;&#9135;&#9135;&#10096; {loc.name}</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── The Valthoreia Faith ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Valthoreia Faith</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-5">After her disappearance, Eira&apos;s people began a tradition of remembrance that grew into <span className="text-[#f2ebeb]">Valthoreia</span> &mdash; the modern religion of Planet Hetra, and currently one of the most widely practiced faiths in the world.</p>
        <div className="bg-[#13110e] border border-[#2e2b26] rounded-xl p-5 mb-6">
          <p className="font-display text-sm text-[#f2ebeb] mb-3">Core beliefs of Valthoreia</p>
          <ul className="space-y-2 font-body text-base text-[#c8c2ba] leading-relaxed list-disc list-inside">
            <li>Mortals can ascend through heroism, sacrifice, and the memory of others</li>
            <li>Winter is not cruelty &mdash; it is protection, preservation, and the promise of renewal</li>
            <li>Eira&apos;s spirit walks among the living for one hundred days each winter season, watching to see if the world still remembers</li>
          </ul>
        </div>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-5">The <span className="text-[#f2ebeb]">Midwinter Festival</span> is celebrated every <span className="text-[#f2ebeb]">55th day of Mulumber</span> (12th month) &mdash; the day she vanished. Townsfolk craft <span className="text-[#f2ebeb]">Frostbloom Crystals</span> (ice flowers modeled after her crown) and place them in windows to guide her spirit home. Food is set out for her, because she loved to feast with her people. A <span className="text-[#f2ebeb]">blue bonfire</span> is lit at the end of the day to help her pass peacefully.</p>

        <div className="bg-[#13110e] border border-[#2e2b26] rounded-xl p-5 mb-6">
          <p className="font-display text-sm text-[#c9a84c] mb-3">Sacred Prayer</p>
          <blockquote className="font-body text-base text-[#c9a84c] italic mb-2">&ldquo;Eira Vahla, hæve Zenya&apos;nahl. Sólrenn mæra&apos;næum vahr.&rdquo;</blockquote>
          <p className="font-body text-sm text-[#7a746e]">(&ldquo;Lady Eira, summon the moon&apos;s blessing. Peace from the sun follows.&rdquo;)</p>
        </div>

        <div>
          <p className="font-display text-sm text-[#f2ebeb] mb-2">Sacred Symbols</p>
          <ul className="space-y-1 font-body text-base text-[#c8c2ba] list-disc list-inside">
            <li>The Crescent Moon &mdash; her connection to Zenya</li>
            <li>The Frostbloom Crystal &mdash; guidance and remembrance</li>
            <li>Colors: Icy blue, silver, white, and deep indigo</li>
          </ul>
        </div>

        <p className="font-body text-base text-[#7a746e] leading-relaxed mt-5 italic">The <span className="text-[#c8c2ba] not-italic">Frostguard Clergy</span> &mdash; priests and priestesses of Valthoreia &mdash; tend the Alarctic Ice Palace in her name, preserving it as a sacred site.</p>
      </div>

      {/* ── Personality ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-2">Personality (As Remembered)</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-6">Eira Valthorne never wrote memoirs. No royal decree in her voice survives. What remains of her character exists only through oral tradition, Valthoreian scripture, and the living memory of Aurelia &mdash; the one being who knew her not as a legend, but as a person.</p>
        <div className="space-y-4">
          {[
            { title: "Commanding, Not Cruel",    desc: "Her dominion was cold and bitter, but she was not. The storms she silenced were real. The hexicule showers she guarded against were real. She bore the burden of the Alarctic's harshness on behalf of her people, and did so without complaint. Her feared reputation was a product of her power, not her character." },
            { title: "Present With Her People",  desc: "She hosted grand winter festivals. She danced in the grand halls with her familiars. She feasted with her kingdom — not above them, among them. The Valthoreian tradition of setting food out for her spirit at the Midwinter Festival isn't symbolic. It's a memory. Her people remembered that she ate with them, so they kept a plate for her even after she was gone." },
            { title: "A Keeper of Beauty",       desc: "She sang valedictorian lullabies that echoed through the Ice Palace. Aurelia heard them from her den and found them soothing. She filled her throne room with frozen flowers that bloomed year-round through her magic. The Crystal Observatory at the top of her palace let her watch the storms — but it's likely she also watched the auroras." },
            { title: "Protective to a Fault",    desc: "The Alarctic Alpines was not a forgiving place. Every day she silenced a storm was a day her people could survive. She didn't rule from a distance — she worked. And when she vanished, the storms came back. The land itself mourned her, as if it had only stayed manageable because she willed it to." },
          ].map((trait, i) => (
            <div key={i} className="pl-4 border-l-2 border-[#c9a84c]/40">
              <p className="font-display text-sm text-[#c9a84c] mb-1">&#9135;&#9135;&#9135;&#9135;&#9135;&#10096; {trait.title}</p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">{trait.desc}</p>
            </div>
          ))}
        </div>
        <blockquote className="border-l-2 border-[#c9a84c] pl-4 mt-6 italic font-body text-base text-[#c9a84c]">
          In Valthoreian scripture, she is described as: &ldquo;A queen who did not ask to be loved &mdash; and was, for exactly that reason.&rdquo;
        </blockquote>
      </div>

      {/* ── The Frostbloom Crystal ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">The Frostbloom Crystal</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4">The Frostbloom is one of the most recognized symbols in all of Hetra &mdash; worn by Valthoreians, placed in windows during the Midwinter Festival, and used as a sacred offering during winter rites.</p>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed mb-4"><span className="text-[#f2ebeb]">Origin:</span> The Frostbloom is modeled after the crown Queen Eira wore &mdash; woven from moonlight and blackfrost, intricate and iconic. After her vanishing, her people couldn&apos;t keep the crown (it remained on her throne), so they made their own version of it: small, crystalline, beautiful, and temporary.</p>

        <div className="bg-[#13110e] border border-[#2e2b26] rounded-xl p-5 mb-5">
          <p className="font-display text-sm text-[#f2ebeb] mb-3">Construction</p>
          <ul className="space-y-2 font-body text-base text-[#c8c2ba] leading-relaxed list-disc list-inside">
            <li>Water is poured into a mold shaped like a Bluebloom Flower and frozen</li>
            <li>The ice flower is dusted with powdered Bluebloom (which emits a soft blue glow at night)</li>
            <li>Topped with enchanted herbs: rosemary, mint, and winterberries</li>
            <li>Placed over a candle with blue flame inside a lantern &mdash; the blue fire won&apos;t melt the ice due to the mystical properties of Rynel&apos;s water</li>
          </ul>
        </div>

        <div className="space-y-2">
          {[
            { context: "Placed in windows",    meaning: "To guide Eira's spirit home on the night she vanished" },
            { context: "The blue flame inside", meaning: "Lit at the end of the Midwinter Festival to help her pass peacefully" },
            { context: "Given as gifts",         meaning: "Between loved ones during Mulumber as a symbol of protection and remembrance" },
            { context: "Placed at memorials",   meaning: "To honor the respected dead, since the Midwinter Festival began as a mourning rite" },
          ].map((m, i) => (
            <div key={i} className="bg-[#13110e] border border-[#2e2b26] rounded-sm px-4 py-3 flex gap-4">
              <span className="font-display text-sm text-[#c9a84c] shrink-0 w-44">{m.context}</span>
              <span className="font-body text-base text-[#c8c2ba]">{m.meaning}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#0f0d0c] border-l-2 border-[#c9a84c]/40 pl-4 pr-4 py-3 mt-5">
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed italic">Kydel, Raeya, Zohl, and Neah each crafted their own Frostblooms during the Midwinter Festival (Year 2245) and placed them on a stone archway leading to a small memorial cemetery near the Oakgnar Grand Tree &mdash; holding a moment of silence in her honor.</p>
        </div>
      </div>

      {/* ── Trivia ── */}
      <div>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Trivia &amp; Lore Notes</h2>
        <ul className="space-y-3 font-body text-base text-[#c8c2ba] leading-relaxed">
          {[
            "The Kingdom of Valthorne is named after Eira herself, making her the only figure in recorded Hibrythian history to have both a kingdom and a religion named in her honor",
            "Her crown has remained on her throne in the Hall of Eternal Frost, untouched, for centuries. Aurelia warns visitors that it is very fragile despite its appearance",
            "The Oakgnar Towns' four mayors (Tyle, Kyle, Nyle, and Eli Lynn) are descendants of early Valthorne immigrants who settled Rynel after Eira's era. Mayor Tyle Lynn is part-Owl, and he personally leads local Midwinter Festival preparations",
            "The ice of the Alarctic Ice Palace became indestructible after Eira vanished. Many scholars believe it is the last passive expression of her power, still holding centuries later",
            "Valthoreia is currently the most widespread religion on Planet Hetra. More people worship the memory of Eira than follow any other single faith, including Laeyanism",
            "The Ballad of Queen Eira is the primary sacred text of Valthoreia: a song-poem passed down through oral tradition and performed at major Valthoreian ceremonies",
            "Raeya Flutters is familiar with the story of Queen Eira from her own reading, stating she has read it \"countless times\", suggesting the legend reached even the Sylphrelm",
            "She is not confirmed divine. Valthoreia followers believe she transcended through mortal heroism, not divine blessing. This makes her the only figure in the Four Faiths of Hetra who achieved deification without confirmed Laeyana involvement",
            "The moon Zenya is believed by some to be Eira's resting place; Zenya's crescent is Valthoreia's most sacred symbol",
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
          to="/characters"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back to</p>
            <p className="font-display text-sm text-[#f2ebeb]">Characters</p>
          </div>
        </Link>
        <Link
          to="/characters/XylaAndArzo"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right justify-end"
        >
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Xyla &amp; Arzo</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
