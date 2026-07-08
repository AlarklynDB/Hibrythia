import { Link } from 'react-router-dom';

export default function HetraStandardSystems() {
  return (
    <div className="min-h-screen bg-[#100908]">
      <div className="max-w-[960px] mx-auto px-6 py-20 space-y-12">

        {/* Breadcrumb */}
        <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844]">
          III. The Inner Gears
        </p>

        {/* Page Title — HdTextDSize */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-4">
            Hetra's Standard Systems
          </h1>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            This page covers what world systems and metrics the planet of Hetra uses, within the whole world. There will be many different metrics and units that go into this world, along with race groupings. This page is going to be pretty important since metrics will be mentioned throughout the series!
          </p>
        </div>

        <div className="border-t border-[#1e1c1a]" />

        {/* Scientific Groupings — H2SectMidSize */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Scientific Groupings</h2>
          <div className="space-y-6">

            {/* Hibryd(s) */}
            <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-5 transition-colors">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Hibryd(s)</h3>
              <p className="font-body text-[11px] tracking-widest uppercase text-[#7a746e] mb-3 italic">
                Scientific Name: Ibridius Brutum
              </p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                A coined term for Beasts and Nhuemyns, whom have been given powers by a Spirit or has powers gained by supernatural causes or has been born with them. Hibryds that have powers or something that is equivalent to their level can live for almost up to 1,550 years.
              </p>
            </div>

            {/* Beast(s) */}
            <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-5 transition-colors">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Beast(s) / Beast Creature</h3>
              <p className="font-body text-[11px] tracking-widest uppercase text-[#7a746e] mb-3 italic">
                Scientific Name: Bestianes Animalia
              </p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                This term is coined for beasts that rank higher than Nhuemyns. These beasts are considered some of the world's strongest creatures. Among many of them are: Witches, Griffins, Dragons, Batragons, Direwolves.....etc. There is a page dedicated to these creatures!
              </p>
            </div>

            {/* Nhuemyns */}
            <div className="border border-[#2e2b26] hover:border-[#c9a84c]/40 bg-[#0f0d0c] hover:bg-[#151210] rounded-sm px-5 py-5 transition-colors">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-1">Nhuemyns</h3>
              <p className="font-body text-[11px] tracking-widest uppercase text-[#7a746e] mb-3 italic">
                Scientific Name: Nhuema Sapherius
              </p>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                Humans, Elves, Sylphs...etc of the kind are all related and bunched into one specific category; Nhuemyns. These types of humans can live up to 350 years of age. However, Sylphs can live longer than 350 years. Read here to learn more about Sylphs. Any kin of kind, that has almost human-like features are grouped in this classification. More if it can be read here on their own page!
              </p>
            </div>

          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Metric Terminology — H2SectMidSize */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-6">Metric Terminology</h2>
          <div className="space-y-6">

            {/* ElectriXore */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">ElectriXore per Hour</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                ElectriXore Per Hour is a unit of measurement for an electric output for power and charging. It's also known as eXpH (mAH equivalent).
              </p>
            </div>

            {/* Heunix */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Heunix</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                In this world, the word "units" becomes Heunix, an umbrella term. In ancient times, the Hetranian Ghrenglish language for the word Unit was called that. It is now kept up to this day. Planet Hetra also uses units like miles, kilometers, inches, feet, millimeters....etc (also with weight units). Metric Units like these are 1:1 to Earth.
              </p>
            </div>

            {/* Hetrix */}
            <div className="border-l-2 border-[#2e2b26] pl-5">
              <h3 className="font-display text-sm text-[#f2ebeb] mb-2">Hetrix</h3>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                A form of currency that is used all over the planet of Hetra. The Unit Abbreviation for Hetrix is "Hx." Currency Symbol: Ħ
              </p>
            </div>

          </div>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Temperature Metrics — H2SectMidSize */}
        <section>
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Temperature Metrics</h2>
          <ul className="space-y-2 mb-6">
            {[
              ['Helphranite', 'a play on word for Fahrenheit'],
              ['Helphieus', 'is also a play on word for Celsius'],
              ['Nullfrost', 'a new metric for this world, inspired by Kelvin'],
            ].map(([name, desc]) => (
              <li key={name} className="font-body text-base text-[#c8c2ba] leading-relaxed">
                <span className="text-[#f2ebeb] font-display">{name}</span> — {desc}
              </li>
            ))}
          </ul>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            These two words are a play off for Earth's measurements, Fahrenheit and Celsius. These two measurements are not 1:1 to Earth's units as they are more stronger and also very, very, tough to translate. One new temperature metric for this world is called Nullfrost. Nullfrost is one of the coldest temperature measurements in the World of Hetra. Nullfrost also has a colder metric called Blackfrost!
          </p>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed mt-3">
            The{' '}
            <Link to="/world/databases/WeatherClimateSeasons" className="text-[#c9a84c] hover:underline">
              Weather, Climate &amp; Seasons
            </Link>
            {' '}page has its own Temperature System.
          </p>
        </section>

        <div className="border-t border-[#1e1c1a]" />

        {/* Bottom Nav */}
        <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
          <Link to="/world/databases" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
            <span className="text-[#c9a84c] text-lg">←</span>
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
              <p className="font-display text-sm text-[#f2ebeb]">Databases &amp; Systems</p>
            </div>
          </Link>
          <Link to="/world/databases/EconomyOfPlanetHetra" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right">
            <div>
              <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
              <p className="font-display text-sm text-[#f2ebeb]">Economy of Planet Hetra</p>
            </div>
            <span className="text-[#c9a84c] text-lg">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
