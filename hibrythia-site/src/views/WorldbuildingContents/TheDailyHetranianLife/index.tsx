import { Link } from 'react-router-dom';

export default function TheDailyHetranianLife() {
  return (
    <div className="min-h-screen bg-[#100908] text-[#c8c2ba] px-6 py-12 max-w-[960px] mx-auto">

      {/* Breadcrumb */}
      <p className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] mb-8">
        <Link to="/world/databases" className="hover:text-[#c9a84c] transition-colors">
          World Databases
        </Link>
        {" / "}The Daily Hetranian Life
      </p>

      {/* Page Title */}
      <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">
        The Daily Hetranian Life
      </h1>

      {/* Intro Quote */}
      <blockquote className="bg-[#0f0d0c] border-l-2 border-[#c9a84c] pl-5 pr-4 py-4 mb-10">
        <p className="font-body text-base text-[#c8c2ba] italic">
          &ldquo;Life is a gift. To know when to receive and know when to give back. The pleasantries and activities among Hetranian Life is like watching a flower pollinate with its friends. Like a fragrant dew of sweet honey, and a flame of vigor.&rdquo;
        </p>
        <p className="font-body text-sm text-[#7a746e] mt-2">
          &mdash; <Link to="/characters/AloriaCloudwave" className="text-[#c9a84c] hover:underline">Aloria Cloudwave</Link>
        </p>
      </blockquote>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── The Daily Hetranian Life of Hetra ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Time &amp; Daily Rhythm
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          The Daily Hetranian Life of Hetra
        </h2>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          The surface world of Planet Hetra is vast and large, given the timeframe of{" "}
          <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">32 hours a day</Link>. In a broader sense, there is 19 hours of daylight, and 13 hours of night-time. The activity of life here on Hetra is quite extravagant. Each individual life, group, organization, and others each have their own unique ways of how to navigate in a world full of dangerous creatures that live in the wilds. People use the 32 hour format instead of its 16 hour counterpart, since the 32 hour clock is the default format for looking at time.
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>32:00 H Format is called Standard Time.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>16:00 H Format is called Military Time.</span>
          </li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba]">
          There are cities that feel so modern and futuristic, even the blend of magic makes the living world richer and grounded than usual. From meals, education, arts and entertainment, every livelihood of each region brings about each their own unique corner.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Dishes, Meals, Snacks & More ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Cuisine &amp; Culture
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Dishes, Meals, Snacks &amp; More
        </h2>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          Food. It is what brings the soul together in a world full of futuristic cities, wilderness, and creatures. Each region around the world has their own cultural food&mdash;which makes it a great way for people to dine together.
        </p>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">High Class Restaurants</h3>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          In the <Link to="/world/locales/rynel" className="text-[#c9a84c] hover:underline">Continent of Rynel</Link>, in New Rynels, a megalopolis district, there are a lot of high end restaurants that have so many popular dishes, menus, and food. There are up to at least 15 different restaurants&mdash;with five of them earning their own Michelin Star System that goes up to 7 Stars. A single dish from either of these restaurants can range from Ħ25.75 to Ħ45.50 hetrix. This is partly because most high class dishes get their ingredients imported from{" "}
          <Link to="/world/locales/eulerich" className="text-[#c9a84c] hover:underline">Eulerich</Link>, which is a continent known for <span className="text-[#f2ebeb] font-semibold">fine ingredients</span> that no place can produce or make. There is one famous bar among these restaurants.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Popular Restaurants and Bars in New Rynels</h4>
        <div className="space-y-3 mb-8">
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3">
            <p className="font-body text-base text-[#c8c2ba]">
              <span className="text-[#f2ebeb] font-semibold">New Rynels Pub</span> (NRP) &mdash; a bar style restaurant that serves unique cocktails and beer. <span className="text-[#f2ebeb] font-semibold">Summer Orange Refresher</span> is served in NRP. It&rsquo;s made with <span className="text-[#f2ebeb] font-semibold">apple cider + iced tea + carbonated lime drink</span> concoction. A great cocktail for the hot weather. But it is also a great drink depending on season.
            </p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3">
            <p className="font-body text-base text-[#c8c2ba]">
              <span className="text-[#f2ebeb] font-semibold">Grandiose Luminary</span> &mdash; one of the first restaurants to earn a 7 star. Its most famous dish is a Eulerian Turnover Beef Roasted Boar meat with Eulerian Spaghetti. It&rsquo;s coated with a very sweet and sour sauce. The head chef&rsquo;s name is Yhuag Khroa, who has his own cookbook which has been sold over 40 million copies.
            </p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3">
            <p className="font-body text-base text-[#c8c2ba]">
              <span className="text-[#f2ebeb] font-semibold">Daegramon Lischt</span> &mdash; A demon owned restaurant. The owner is Clypha Rhys. Younger brother of{" "}
              <Link to="/characters/PhilstraRhys" className="text-[#c9a84c] hover:underline">Philstra Rhys</Link>. Clypha was the one who founded the recipe, <span className="text-[#f2ebeb] font-semibold">Dàema Énchil Curry</span>, which is served in his restaurant. Daegramon Lischt is another place that got a 7 Star Reward.
            </p>
          </div>
        </div>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Currently Known Dishes</h3>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Popular and Common dishes around Planet Hetra.
        </p>
        <div className="space-y-3 mb-8">
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3">
            <p className="font-body text-base text-[#c8c2ba]">
              <span className="text-[#f2ebeb] font-semibold">Jaded Fruit with Boar Meat</span> &mdash; A food stall dish in the Village of Greenside Hills on Varleqe. Smells like apricots and pineapple jam mixed with boar meat.
            </p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3">
            <p className="font-body text-base text-[#c8c2ba]">
              <span className="text-[#f2ebeb] font-semibold">Hetranian Spaghetti &amp; Jaded Boar Meat</span> &mdash; Hetranian spaghetti is made with wheat, eggs, and Eulerian Rye. The taste itself gives off a similar taste to how Udon is made. This dish is topped with Jaded Boar Meat, which is drizzled and marinated with pineapple jam along with soy sauce.
            </p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3">
            <p className="font-body text-base text-[#c8c2ba]">
              <span className="text-[#f2ebeb] font-semibold">Chicken Sautéed Breadsticks &amp; Lamb Jerky</span> &mdash; Sauteed Chicken in the shape of a breadstick. They&rsquo;re dipped in honey-made soy sauce along with Lamb Jerky.
            </p>
          </div>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm px-4 py-3">
            <p className="font-body text-base text-[#c8c2ba]">
              <span className="text-[#f2ebeb] font-semibold">Dàema Énchil Curry</span> &mdash; A slow-prepared demon curry with roots in Varleqe. Made by Lesser Demons. Requires <em>magic</em> to prepare correctly. Known for its deceptively light texture, rich layered spiciness that builds gradually, described as &ldquo;aged fermentation meeting warm earth.&rdquo; Recipe passed down within demon communities. The scent while cooking attracts wildlife.
            </p>
          </div>
        </div>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Festival Dishes</h3>
        <p className="font-body text-base text-[#c8c2ba] mb-3">
          <span className="text-[#f2ebeb] font-semibold">Auelé Daevanoìr.</span> This is a special dish served at the Midwinter Festival (Queen Eira&rsquo;s Festival) on Mulumber 55th, Year 2245, in <span className="text-[#f2ebeb] font-semibold">Oakgnar Verns Town, Rynel</span> &mdash; specifically made by the town&rsquo;s famous chef.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-2">
          The full dish includes:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Ostrich and pheasant meat topped with rosemary herbs.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><span className="text-[#f2ebeb] font-semibold">Eulerian Noodles</span> &mdash; made using <em>flower-nectar</em></span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>and a side of lambchops!</span>
          </li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          The noodles are Eulerian, meaning they originate from the <span className="text-[#f2ebeb] font-semibold">Continent of Eulerich</span>, and the flower-nectar process is what makes them unique (and probably why they taste so distinctly fresh!).
        </p>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Favorite Snacks and Desserts</h3>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Even in a world like Hetra, there are normal food types too! People admire great taste, while some people want stuff that are more simple and easy to obtain and get, and also make!
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><span className="text-[#f2ebeb] font-semibold">Fermented Liquor Chocolate</span> &mdash; a type of alcoholic candy made with chocolates!</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><span className="text-[#f2ebeb] font-semibold">Chocolate</span> &mdash; Everyone&rsquo;s favorite snack and candy! It comes in different shapes but the people of Hetra tend to shape chocolate pieces like a heart.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><span className="text-[#f2ebeb] font-semibold">Ice Cream</span> &mdash; everyone&rsquo;s favorite desert! You can&rsquo;t have a world without ice cream!</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><span className="text-[#f2ebeb] font-semibold">Eulerian Crackers</span> &mdash; honey made crackers with bananas and dried mangos.</span>
          </li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba]">
          Food is a way to bring the community together. Like a warmth of a unifying soul under a world so grand and vast.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Tourism, Sceneries, & Vacations ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Travel &amp; Attractions
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Tourism, Sceneries, &amp; Vacations
        </h2>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Planet Hetra is home to a lot of different attractions, locations, wonders, and more.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          One of the most famous attractions is the <Link to="/world/locales/skypeak-obelisk" className="text-[#c9a84c] hover:underline">Skypeak Obelisk</Link>, which is a system that feels like a video game but made real. It is both served as a work labor, and also a place for fun and to hang out with friends. The Skypeak Obelisk has it&rsquo;s own internal economy, but can also work in tandem of Hetra&rsquo;s real{" "}
          <Link to="/world/databases/EconomyOfPlanetHetra" className="text-[#c9a84c] hover:underline">economic</Link> society. People get around through different means of{" "}
          <Link to="/world/databases/TechnologyTransitSystems" className="text-[#c9a84c] hover:underline">transportation</Link>.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          There are also underwater tours around the world! Taking an Ocean Transit System like the{" "}
          <Link to="/world/databases/TechnologyTransitSystems" className="text-[#c9a84c] hover:underline">UOTA</Link> allows you to view the breathtaking world underneath the surface!
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          It&rsquo;s like each corner of the world gives you a feeling of &ldquo;I want to go here again and experience this again.&rdquo; As if it welcomes you back into open arms when life gets too tough.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">HetraS.E.A.P</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          Also known as the <Link to="/world/locales/HetraSEAPSpaceProgram" className="text-[#c9a84c] hover:underline">Hetranian Space Exploration Aeronautics Program</Link>, this place isn&rsquo;t just a headquarters for all rocketry and science. It doubles as a working museum! The main building off to the side is where all data centers for science, labs, experimentations and analytical progresses are made. And off to the left of this is where the museum lives. This building is called{" "}
          <Link to="/world/locales/HetraSEAMSpaceMuseum" className="text-[#c9a84c] hover:underline">HetraS.E.A.M</Link>.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Seven Wonders of The World</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Among the Planet of Hetra, there are Seven Wonders of the world. Worldwide Majestics.
        </p>
        <ul className="space-y-2 mb-8">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/erbgeroger-flower" className="text-[#c9a84c] hover:underline">The Erbgeroger Flower</Link> &mdash; The World Flower that symbolizes Unity</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/eulerian-catalogs" className="text-[#c9a84c] hover:underline">The Eulerian Catalogs</Link> &mdash; A giant underground library that stems from the Eulan Kingdom to the Oelen Kingdom. One of the largest libraries within the world</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/tree-of-elenia" className="text-[#c9a84c] hover:underline">The Tree of Elenia</Link> &mdash; A Sentient Norrane Hardwood Tree that grants fortunes</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/oakgnar-grand-tree" className="text-[#c9a84c] hover:underline">The Oakgnar Grand Tree</Link> &mdash; Planet Hetra&rsquo;s World Tree that also symbolizes Unity, along with Expression and Freedom.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/varleqian-waterfall" className="text-[#c9a84c] hover:underline">The Varleqian Waterfall</Link> &mdash; A huge cascading waterfall in the Continent of Varleqe.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/lost-city-lhavaria" className="text-[#c9a84c] hover:underline">The Lost City of Lhavaria</Link> &mdash; An underwater city that was lost to history. It now stands as home to merfolk.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/alarctic-ice-palace" className="text-[#c9a84c] hover:underline">The Alarctic Ice Palace</Link> &mdash; An Ice Palace located in the North Pole, The Alarctic Alpines.</span>
          </li>
        </ul>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">The Churches of The World</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Planet Hetra has eight main churches around the world that shaped its culture in the past{" "}
          <Link to="/world/databases/AncientGreungeria" className="text-[#c9a84c] hover:underline">Greungerian Era</Link>. Since they still thrive, the serve as landmarks and also tourist attractions.{" "}
          <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">The Seven Architects</Link> who built these churches got the weekdays named after their name! Although they serve no religious purpose, they are kept as museums. Only the church in the Oakgnar Districts of Rynel is still active.
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/hynnian-church" className="text-[#c9a84c] hover:underline">The Hynnian Church</Link> &mdash; Named after Hynnia.{" "}
              <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">Hynsday</Link> is first day of the week.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/iyonian-churches" className="text-[#c9a84c] hover:underline">The Iyonian Churches</Link> &mdash; Two churches built by Iyona. Clearly, two is better than one!</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/bhuseian-ice-church" className="text-[#c9a84c] hover:underline">The Bhuseian Ice Church</Link> &mdash; An Ice Church built by Buuse in the Alarctic Alpines. This ice church is not tied to The Alarctic Ice Palace.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/runthian-church" className="text-[#c9a84c] hover:underline">The Runthian Church</Link> &mdash; A Church built by Runthia. Runesday is the fourth day of the week!</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/yhursian-demon-church" className="text-[#c9a84c] hover:underline">The Yhursian Demon Church</Link> &mdash; A Demon Church built by Yhursa. A church built to give Demons guidance. It is in the continent of Varleqe.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/draxian-sky-church" className="text-[#c9a84c] hover:underline">The Draxian Sky Church</Link> &mdash; A Sky Dragon Church that floats around the world. Built by Draxyn.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/sethranian-church" className="text-[#c9a84c] hover:underline">The Sethranian Church of Unity</Link> &mdash; A church that unites all corners around the world. Built by Sethra.</span>
          </li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          There are also a lot of different places that aren&rsquo;t tied to any major wonders. You could go to Lenoria, a district within{" "}
          <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">Lynneria</Link> to look around and dine with cultural cuisines. Eldreule is also a district within Lynneria, home to scientific studies and research. You could go to the{" "}
          <Link to="/world/locales/skypeak-obelisk" className="text-[#c9a84c] hover:underline">Skypeak Obelisk</Link>, which has its own video-game internal economy.
        </p>
        <p className="font-body text-base text-[#c8c2ba]">
          Anything can be booked online on the internet for official tours. Other than that, most places are free and open within the world. The Wilderness is some exceptions because the{" "}
          <Link to="/world/locales/AQTFC" className="text-[#c9a84c] hover:underline">AQTFC</Link> deploys helpers to help people navigate through harsh or dangerous paths (aside from dangerous creatures). Every place on Planet Hetra has their own mystical and magical feel.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Arts, Entertainment & Leisure ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Culture &amp; Craft
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Arts, Entertainment &amp; Leisure
        </h2>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          Planet Hetra&rsquo;s entertainment industry along with its art industry is very well kept and not as strict as most systems. Every expression of art has a fair pay and also a lot of freelance opportunities. Art is a valued form of expression and creativity.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Entertainment Industries</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          The entertainment industry is located in the{" "}
          <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">District of Eldreule of Lynneria</Link>, Riverchnaut. There are a lot of theatrical films and animation studios that live in this area. Live-actions adaptations are frowned upon because it often does not adhere or be faithful to their original source.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          <span className="text-[#f2ebeb] font-semibold">Heterean Animation Studios (H.A.S)</span> is one of the main leading studios of the area, which has allocated around 4.5 trillion hetrix in income, revenue, and Animation Box Offices. &ldquo;Love &lsquo;til The Moon Dies (2147)&rdquo; animation movie has over 500 million Hetrix in copies sold and streamed.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          <span className="text-[#f2ebeb] font-semibold">All Original Universal Studios (A.O.U.S)</span> is another top leading movie studio. Located in Eldreule, this place is a conjoined studio with its music industry. Every original movie is filmed with actors and actresses. Cyborgs, Android, and Synthetics are often hired for visual effects for post production.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          <span className="text-[#f2ebeb] font-semibold">The Music Industry</span> is actually one singular aggregator and distributor. It&rsquo;s called <span className="text-[#f2ebeb] font-semibold">EdenMusicHQ.</span> It is an online agency that helps artists and musicians distribute their music to local music streaming platforms like <span className="text-[#f2ebeb] font-semibold">Muuseify</span> and <span className="text-[#f2ebeb] font-semibold">Spotticus</span> (and many more). Spotticus is the #1 App of all time with Muuseify taking #2. Both of these apps have a lot of artists that put their music onto these apps. These apps aren&rsquo;t about competition. It admires unique expression and promotes healthy challenges.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Spotticus App made up to Ħ30 Trillion Hetrix, with Muuseify landing at around Ħ25.3 Trillion Hetrix.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          There are music programs hosted by EdenMusicHQ that often collaborate with <span className="text-[#f2ebeb] font-semibold">H.A.S</span> and <span className="text-[#f2ebeb] font-semibold">A.O.U.S</span> to bring out beautiful sounding arts for their shows and movies. Each of these tracks are either classical-sounding music, or techno-classical with a mix of orchestras and ensembles. Theremins are one of the primary instruments used in making music.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Day and Night Leisures</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Leisurely activities are such a good way to pass time. On Lynneria, each district isn&apos;t just a huge futuristic-like city. There are also pastures and plains around the place that make do for perfect getaway vacations or just, being there, admiring the nature around.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Each district of Lynneria&apos;s countries each have their own district park, which is around the size of ten golf courses. There are great paths and places in the district park for picnic life! There is also a sports and recreation centers in each one, suitable for in-door sports and out.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          On the <Link to="/world/locales/rynel" className="text-[#c9a84c] hover:underline">Continent of Rynel</Link>, the whole place is an active natural walk. There are a lot of hiking paths.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          <Link to="/world/locales/eulerich" className="text-[#c9a84c] hover:underline">The Continent of Eulerich</Link> also has some neat hiking paths, specifically the <Link to="/world/locales/eulerich" className="text-[#c9a84c] hover:underline">Kingdom of Oelen</Link>. Trekking in the Kingdom of Eulan is a little harsh because it&apos;s a desert kingdom. This place has safe paths away from inner sandstorm and such.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          <Link to="/world/locales/varleqe" className="text-[#c9a84c] hover:underline">The Continent of Varleqe</Link> is also another place full of beautiful sceneries. But you&apos;ll need escorts from{" "}
          <Link to="/world/locales/AQTFC" className="text-[#c9a84c] hover:underline">The AQTFC</Link> for safe travels. Both Offense and Defense are deployed in these parties.
        </p>

        <h5 className="font-display text-sm text-[#f2ebeb] mb-3">Other Daily Leisures</h5>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          There is an interstate highway that connects from The District of Kharphan (Riverchnaut) and it goes counter-clock-wise to The District of Ironbark (Nharvenile). Long road trips while looking at the district skylines and ocean skylines make a perfect getaway trip. The sunsets and sunrise are the holy grail of this road trip.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          <span className="text-[#f2ebeb] font-semibold">Night sceneries</span> are actually quite beautiful. Even from the district skylines or the wild skylines, looking out and up into the vast starry skies is like looking at a collection of flickering marbles. In most places in the wilds, picnicking at the top of a hill under the stars would be a wonderful sight. The contrast of the district buildings and the starry skies are quite breathtaking.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          <span className="text-[#f2ebeb] font-semibold">Drive In Movie Theatres</span> are still a thing. In fact, most of the showings are free to drive in and watch. It&rsquo;s community owned. There are people who work night shifts around this time and they often help setup the drive in movie theatres.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">The Art Industry</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          The art industry itself is a freelance mega corporation that works internationally, though it is headquartered in The Oakgnar Districts of the Continent of Rynel. Minimum payout tends to be around Ħ45,312 Hetrix. There are a lot of museums around the world. But it&rsquo;s not just museums. All different art forms are valid, which includes construction!
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          <Link to="/world/locales" className="text-[#c9a84c] hover:underline">The Churches</Link> around the world was built by{" "}
          <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">The Seven Architects</Link>, and they are also a form of art on the outside. From different angles and perspectives, lots of people like to take pictures of these churches.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">The Hetranian Freeform Art Agency</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Also known as HetraFAA, it is headquartered in the Oakgnar Districts. Freelancers around the world come together at this location to discuss upcoming events, installations, and collaboration with different agencies like <span className="text-[#f2ebeb] font-semibold">H.A.S</span> or <span className="text-[#f2ebeb] font-semibold">A.O.U.S</span>. There are up to at least 250k freelancers in this world&mdash;and they all have their own ways of art. <span className="text-[#f2ebeb] font-semibold">Graffiti art</span> is actually a respected form of art and there are dedicated zones and places where people can tag their work. Putting graffiti art in actual district zones will give you a Ħ30 Hetrix fine. It won&rsquo;t be taken down but instead moved as a mural to the <span className="text-[#f2ebeb] font-semibold">Mural Art Agency Terrance</span> (MAAT).
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          <span className="text-[#f2ebeb] font-semibold">Ironbark Natural History Museum</span> &mdash; A museum inside the district, and it is located 10 blocks away from Ironbark Hibryds University (IHU). This museum has up to 10k vintage paintings from the past. There are also contemporary art pieces made interactive.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          <span className="text-[#f2ebeb] font-semibold">Performance Arts</span> are often led by freelance artists or community signed organizations. Music Operas, specifically, dominate in the field of performance arts because people around the world come together to produce mystical soundtracks with actors. One of the most famous ones at the time, &ldquo;<em>A Rainy Night of Nocturnes and Poetry</em>&rdquo; (2120), was written and produced by Calcifeus Schnaug, who was a famous director at that time.
        </p>
        <p className="font-body text-base text-[#c8c2ba]">
          Even in a world filled with futuristic-like cities, the form of art itself is also found in nature itself. There is always a chance to appreciate everything that everyone has given.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Education Life of Hetra ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Schools &amp; Learning
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Education Life of Hetra
        </h2>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          Education on Planet Hetra is wild. But in the best way. For normal citizens and nhuemyns alike, there is one school that houses from Elementary to High School Level. Kids and toddlers are home schooled. They need to spend as much time with their parents as possible.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">The Hetranian Unitarian District of Education</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Also known as HetraUDE or H.U.D.E for short, this is a singular school located in{" "}
          <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">Ironbark District, Nharvenile, Lynneria</Link>. It is a massive building that is as almost as wide ten stadiums and is separated by three wings. Each of these wings has up to three floors. There are lunch breaks along with breaks to spend time with friends and learn with each other. It isn&rsquo;t just teachers being the professionals. There are students who excel well and will often help each other.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          The first wing is for the main HetraUDE building. It is the main district that oversees the other two wings, Elementary and High. HetraUDE starts from 10 AM and ends at{" "}
          <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">15:30 AM</Link>, which gives around 6 hours of education.
        </p>
        <ul className="space-y-2 mb-8">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Elementary Grade School goes up to eight years (Elementary (5) and Middle (3) combined). Teaches the basics of Hetranian Literature, History, along with basic knowledge of magic.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>High School goes up to five years - High School Level of its younger knowledges. Cross-selection electives helps students grasp more of the fundamentals of how magic works, technological studies, and financial studies.</span>
          </li>
        </ul>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Ironbark Hibryds University (IHU)</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          The HetraUDE also has its own university. Located in the same district, it is called <span className="text-[#f2ebeb] font-semibold">Ironbark Hibryds University (IHU)</span>. A prestigious college and university that specializes in advanced technology, scientific researches, biological studies, archaeology, geoscience, and a lot more! Though IHU is a separate building aside from from the main HetraUDE buildings. It is located within Ironbark City, while HetraUDE is located a bit further than that and is placed near neighborhoods for easy access.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          IHU goes up to six years of levels.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          The first two years are required because Technomagic (Techmahology) is a field that specializes in both technology and general practices. Alchemic Magic is also a required class, since it specializes in alteration. Alteration is about combination, transformation, creation, and transmogrification of current magic into something new.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          The last four years have their own graduate degree programs, with each year having their own unique and flexible schedule. IHU is both an online university and public university.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Pathway Names</h4>
        <ul className="space-y-2 mb-6">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Years 1 - 2 is called The Bronze Path. The first two years are required before students can move up!</span>
          </li>
        </ul>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Years 3, 4, 5 and 6</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Year 3 is called The Copper Path. Copper College Students! Some students like to call this the Copper Wing.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Year 4 is called The Emerald Path. Also called the Emerald Wing! It&rsquo;s called Emerald because of Professor Esmeralda.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Year 5 is called The Iron Path. The Iron Wing. Fortify those skills!</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Year 6 is called The Diamond Path. Diamonds are in the top tier of gemstones. It took after the name for Professor Dia.</span>
          </li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Each of these pathways have their own unique schedule and online counter parts, and each pathway has their own graduation program and graduation transition based on which minor or major is selected. The Bronze Path can&apos;t graduate out but rather acts as a transition to years 3 to 5.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Diamond Year is the last year and then can be graduated out of IHU into the world. Many jobs have strict requirements, although some have flexible skills and paths for people to choose.
        </p>
        <p className="font-body text-base text-[#c8c2ba]">
          Education of Hetra isn&apos;t a controlled force. People can choose freely of how they want to learn and how they want to help each other.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Work Life of Hetra ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Labor &amp; Industry
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Work Life of Hetra
        </h2>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Labor is important because perseverance and hard work is valued. Working in a diligent life in a world full of wonders and mysteries is how Planet Hetra advanced so quickly to the year 2245. This planet&rsquo;s civilization scale stands around a Type I - II Planet because of a few important aspects:
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/databases/TechnologyTransitSystems" className="text-[#c9a84c] hover:underline font-semibold">The Discovery of Hexicules</Link> &mdash; pink crystal like gems that are essentially a self-regenerating crystal used as an energy source that powers everything &mdash; hover cars, aerotrains, underwater trains, space rockets (Lhureanium), the Skypeak Obelisk, bill minting machines, phones, devices... And on top of that, magic is functioning as a parallel energy framework.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/locales/HetraSEAPSpaceProgram" className="text-[#c9a84c] hover:underline font-semibold">HetraS.E.A.P</Link> &mdash; Planet Hetra&rsquo;s Space Program. It is an active space exploration and aeronautics program. Interplanetary transportation exists.{" "}
              <Link to="/world/databases/TheNhumelaCluster/PlanetSchavel" className="text-[#c9a84c] hover:underline font-semibold">Planet Schavel</Link> sits in the goldilocks zone of the solar system, which is already emigrated and inhabited by Schavelian-Hetrans.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span><Link to="/world/databases/EconomyOfPlanetHetra" className="text-[#c9a84c] hover:underline font-semibold">One Planetary Currency</Link> (Hetrix), a globally unified economy worth ~250 octillion Hetrix, continent-spanning transit infrastructure (HALE Express, UOTA, Aerotrains), and free universal healthcare backed by magic. A fully integrated planetary civilization. No fragmented nation-states fighting over resources.</span>
          </li>
        </ul>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Minimum Wages</h3>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Lots of different places offer different minimum wages. But some minimum wages are tied and locked to specific regions. There are three regions that have set wages. These wages cannot inflate. Once it is set, the value and the monetary worth will be the same. It will only inflate once if needed or if society demands it. As of the year 2245, it is already the standard. And it has not changed ever since{" "}
          <Link to="/characters/PhilstraRhys" className="text-[#c9a84c] hover:underline">Philstra Rhys</Link> became the worlds&rsquo; first Sextillionaire.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-2">
          On the <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">Continent of Lynneria</Link>, the minimum wage that is set for all districts sits at Ħ19.75 Hetrix
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-2">
          On the <Link to="/world/locales/rynel" className="text-[#c9a84c] hover:underline">Continent of Rynel</Link>, the minimum wage that is set for New Rynels and the Oakgnar Towns sits at Ħ25.35 Hetrix. New Rynels specifically is a megalopolis city.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-2">
          On the <Link to="/world/locales/eulerich" className="text-[#c9a84c] hover:underline">Continent of Eulerich</Link>, there are two regions with two set different wages
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>The Kingdom of Eulanis, the average wage is set to: Ħ22.45 Hetrix</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>The Kingdom of Oelenis, the average wage is set to: Ħ20.65 Hetrix</span>
          </li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          The <Link to="/world/locales/AQTFC" className="text-[#c9a84c] hover:underline">AQTFC</Link> has its own internal wage since they manage the Wilderness. Although they are tied to the district wage (which is still the same), they add a Ħ20 hetrix bonus to the minimum because this covers external commissions from Adventurers who help other adventurers if needed. Helping other parties within the wilderness is considered a contribution&mdash;which is why that bonus is attached.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Paychecks are given out every three weeks. Triweekly. Though there are some systems that allow biweekly or weekly pay depending on the work type that is given.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          Low contributions are still considered contributions, even if the effort is there are not. It&rsquo;s not because people are lazy. It&rsquo;s because even the miniscule of contributions can have a positive effect for the economy. It&rsquo;s not just helping out the elderly or doing social community services. Or donating to charities. These actions are always appreciated and they make the mundane life more rich and lived in. It might make a mess, but the effort and the heart behind it is what is looked into!
        </p>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Work Shift Hours</h3>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          An average work shift hour typically stem from <span className="text-[#f2ebeb] font-semibold">8 to 10 hours</span> depending on the time awake or the timeframe. There are jobs that can have up to 32 hours, like <span className="text-[#f2ebeb] font-semibold">convenience</span> stores or electrical charging stations. As stated in the{" "}
          <Link to="/world/databases/CalendarAndTime" className="text-[#c9a84c] hover:underline">32 Hour System Page</Link>, a typical day has up to 19 hours of daylight, and 13 hours of night time. Day Shifts can work for 8 hours, and have the remaining 23 hours to do other activities like going to beaches, shopping, or doing Arts &lsquo;n Crafts. Anything really!
        </p>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Job Type Hours</h3>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Different Jobs have different set hours. Depending on the job type and the hours, it can shift and become flexible to any job position. Some schedules have five days a week, or six days a week. Seven days a week is also possible if people want to <em>lock in</em> for society. The average working hours are five days a week.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-6">
          Some jobs like restaurants and stores don&rsquo;t open until 10:00 am, and end around 8:30 PM (24:30 PM), which is around 15 hours with a 1hr30 break in between. Getting up early in the mornings between 6 AM to 9AM can still offer decent productivity or leisurely time!
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Set Schedule Jobs</h4>
        <ul className="space-y-2 mb-8">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Construction jobs have a set schedule. They start from 6:25 AM to 11:55 AM. Six Hours Total. No overtime unless asked. The rest of the day can be spent doing anything else.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Food Carts operate from 10 AM to 24:00 PM, a total of 15 hours with flexible break hours.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Nightly Food Carts operate the same hours for night workers!</span>
          </li>
        </ul>

        <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Sleep Hours for Day and Night Shifts</h3>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          From 28 PM - 5AM, people here in this world can get up to 8 - 10 hours of sleep at most, since there are also folks who have night shifts. Night workers can still get sleep, since some clock out at around 03:15 am and wake up at around 11 - 12 am, which is another eight to ten hours!
        </p>
        <p className="font-body text-base text-[#c8c2ba]">
          Every single day is a day built on hard work, worth, and value. People overcome obstacles to push and persist harder through their daily life. Contributions are hard and earned well. Because at the end of the day&hellip;, hard work pays off and it is worth it, no matter the struggle.
        </p>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Free Healthcare ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Wellness &amp; Medicine
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Free Healthcare
        </h2>
        <p className="font-body text-base text-[#c8c2ba] mb-3">
          Healthcare in a world like this is free. Not because it was made free. It is because Magic is abundant among the life of everyone. This includes:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Emergencies (ER)</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Dentistry</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Medical Professions</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Therapy (yes, free therapy)</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Rehabilitation</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Medical Researchers</span></li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          There are not many people who have Healing Magic. This is because this type of magic is rare. It is only given by{" "}
          <Link to="/characters/NahfiaAlphraey" className="text-[#c9a84c] hover:underline">Nahfia, The Spirit of Sylphs</Link>, which is a magic that is tailored to Sylphs only. Nahfia is one of the second sources of magic, and she lives in{" "}
          <Link to="/world/meta/TheSigilOfHibrythia/sylphrelm" className="text-[#c9a84c] hover:underline">The Sylphrelm</Link>.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Most Hospital buildings and medical centers have Sylphs as nurses and doctors that practice in a few different areas, since their Healing Magic works on minor wounds. If anything major, it will require both magic and physical work.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Sylph Healing Magic is a required perquisite for any Sylph-kind if they want to contribute to society. But they need to undergo courses and training from humans. Having both practices also help Sylph-leading jobs become more efficient. If help is need for the Sylphs, they will help when needed. It is a partnership. There is no rivalry unless something fun happens!
        </p>

        <p className="font-body text-base text-[#c9a84c] font-semibold mb-2">Sylph Doctorate Degrees:</p>
        <ul className="space-y-2 mb-6">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Advanced Surgeries</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Practical Advances</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Medical Advances</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Family Doctors and Nurses</span></li>
        </ul>

        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Most major hospitals in the world like in New Rynels, Rynel, or{" "}
          <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">Lynneria&rsquo;s Districts</Link> have around three Sylph Doctors. If there are too many of them, it will overwhelm the human&rsquo;s practical practitioners. There needs to be a balance between magic Medicare and human Medicare.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          Human Doctors and Nurses have their own hospital wing. Each Hospital Building has up to two divided areas: The Sylph Medicare Wing and the Human Medicare Wing. They all work in tandem and as teams. No need to switch to a separate hospital in a different district.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">The Human Medicare Wing (HumanMW)</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-3">
          The HumanMW takes are of the humans side&mdash;humans only, cyborgs and androids included. Synthetic beings are also allowed here. There are also Medical Engineering Doctors!
        </p>
        <ul className="space-y-2 mb-8">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Can have up to 10 or more different doctors or nurses.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Treating Cyborgs, Androids and Synthetics requires an engineering, biology, and computer science degree. This is a graduate degree if you attend{" "}
              <Link to="/world/locales/lynneria" className="text-[#c9a84c] hover:underline">Ironbark Hibryds University in Ironbark District of the Nharvenile Country in Lynneria</Link>.</span>
          </li>
        </ul>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">The Sylph Medicare Wing (SylphMW)</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-3">
          The SylphMW takes care of the{" "}
          <Link to="/world/databases/TheNhuemynDB" className="text-[#c9a84c] hover:underline">Nhuemyn</Link> side&mdash;which is human-adjacent species. Like merfolk, lizardfolk, dragonkin&hellip;.etc.
        </p>
        <ul className="space-y-2">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Limited to three sylph doctors, and 20 human doctors and nurses.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Being a Sylph with Healing Magic isn&rsquo;t a forced path nor an obligation. It&rsquo;s more of a choice and also about community contributions. Every individual knows that Sylphs are one of the best kinds of nhuemyns because of their versatile.</span>
          </li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]">
            <span className="text-[#c9a84c] shrink-0">—</span>
            <span>Sylph Doctors can come and go when something comes up in their life, or if The Sylphrelm calls them back. They need to find a replacement teacher or an alumni that knows a decency of Sylph Magic. It can be taught, just under rare circumstances.</span>
          </li>
        </ul>
      </section>

      <div className="border-t border-[#2e2b26] mb-10" />

      {/* ── Disputes, Laws, Legality, and Justice ── */}
      <section className="mb-12">
        <p className="font-body text-[10px] tracking-widest uppercase text-[#c9a84c] mb-3">
          Law &amp; Order
        </p>
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">
          Disputes, Laws, Legality, and Justice
        </h2>
        <p className="font-body text-base text-[#c8c2ba] mb-3">
          There are a few different things that are deemed illegal or have written bills because. It is either because:
        </p>
        <ul className="space-y-2 mb-8">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>People recognize it is not healthy</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Discovery of certain Actions caused by one person</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Discovery of a Discovery (Scientific Purposes or Research</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Caveats and Downsides of a certain task or system.</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Planned Obsolescence is frowned upon.</span></li>
        </ul>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Theft, Robbery, and Property Crimes are frowned upon</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          You get 5 years in prison. Magic or no magic involved. Magic isn&rsquo;t just a special category. It&rsquo;s a tool. A way of life. How to live an abundant life in a world riddled with dangerous creatures.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Gambling is Illegal</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          As stated in the <Link to="/world/databases/EconomyOfPlanetHetra" className="text-[#c9a84c] hover:underline">Economy Page</Link>, gambling is deemed illegal due to unhealthy and unethical practices. It also ruins a person&rsquo;s health as an individual. Obsession and Addiction is severe and heavily mistreated due to habits and inconsistency. If caught, a person will be served a <span className="text-[#f2ebeb] font-semibold">20 year sentence</span> in prison. If a person wants to return to society, they will need to fill out a form of reason. Rehabilitation starts right after for <span className="text-[#f2ebeb] font-semibold">10 years</span>.
        </p>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          However, one loophole is that Gambling in the <Link to="/world/locales/skypeak-obelisk" className="text-[#c9a84c] hover:underline">Skypeak Obelisk</Link> isn&rsquo;t illegal because it&rsquo;s a video game system, but it is <Link to="/world/databases/EconomyOfPlanetHetra" className="text-[#c9a84c] hover:underline">moderated</Link> a certain degree.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Taxes are non-existent, but illegal</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          Every major company, governmental body, organization, or businesses that profits off of money is entitled to their own income. Nothing in or out can be taken or deducted, because in this world, money is not just defined by its monetary value, but it&rsquo;s symbolism to value as in{" "}
          <Link to="/characters/PhilstraRhys" className="text-[#c9a84c] hover:underline"><em>Worth</em></Link>. Trying to tax an organization means people won&rsquo;t just lose a portion of their income, but their belief on what they&rsquo;ve built upon.
        </p>

        <h4 className="font-display text-base text-[#f2ebeb] mb-3">Fake Money / Hetrix Bill Counterfeiting</h4>
        <p className="font-body text-base text-[#c8c2ba] mb-4">
          Counterfeiting <Link to="/world/databases/EconomyOfPlanetHetra" className="text-[#c9a84c] hover:underline">Hetrix and Hetryl</Link> (currency system) is deemed impossible, but not illegal in a 100% certainty. There are certain areas that make counterfeiting illegal&mdash;which is only for Hetrix, the bills and dollars of Hetra&rsquo;s Economy.
        </p>
        <p className="font-body text-base text-[#e0a94f] font-semibold mb-2">Illegal Activity Threshold:</p>
        <ul className="space-y-2 mb-4">
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Black Market Usage</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Illegal Trading</span></li>
          <li className="flex gap-2 font-body text-base text-[#c8c2ba]"><span className="text-[#c9a84c] shrink-0">—</span><span>Economic Circulation</span></li>
        </ul>
        <p className="font-body text-base text-[#c8c2ba] mb-8">
          If EVEN a single fake Hetrix makes it out into the current flowing economic circulation, one single bill can cause disrupt within investments and stocks. Fake Hetrix Bills have no security labels. And if a bill does not have one, that means it was minted incorrectly. Even if it was made carefully, the perpetuator will be identified and be put to life in prison for counterfeiting Hetrix.
        </p>

        <p className="font-body text-base mb-4">
          <span className="text-[#6ab4e0] font-semibold">Modification of Hetryls is NOT illegal.</span>{" "}
          <span className="text-[#c8c2ba]">Modifying coins, or <Link to="/world/databases/EconomyOfPlanetHetra" className="text-[#c9a84c] hover:underline">Hetryls</Link>, isn&rsquo;t illegal. In fact, you can modify the coins however you want! If it is for a special occasion, these coins can be turned into rings or bracelets, or even&hellip;earrings! Or anything that deems like jewelry! Because the materials made in these coins can be produced efficiently, molding them, welding them, or even, decorating them is not frowned on.</span>
        </p>
        <p className="font-body text-base text-[#c8c2ba]">
          Once these coins are modified, the monetary value itself will be lost and cannot be returned to the economic society as actual working tender. There are official shops located in various places around the world that can do this professionally.
        </p>
      </section>

      {/* ── Bottom Nav ── */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link to="/world/databases" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]">
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Databases &amp; Systems</p>
          </div>
        </Link>
        <Link to="/world/databases/CreaturesOfTheWorld" className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%] text-right justify-end">
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Next</p>
            <p className="font-display text-sm text-[#f2ebeb]">Creatures of the World</p>
          </div>
          <span className="text-[#c9a84c] text-lg">&#8594;</span>
        </Link>
      </div>

    </div>
  );
}
