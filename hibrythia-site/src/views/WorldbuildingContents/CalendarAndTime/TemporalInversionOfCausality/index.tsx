import { Link } from "react-router-dom";

const corePrinciples = [
  {
    title: "Temporal Triformity",
    desc: "TIoC operates on a triadic structure of time:",
    sub: [
      { term: "Past-Based Inversion", desc: "Events in the future retroactively generate or alter causes in the past." },
      { term: "Present-Based Inversion", desc: "The current moment acts as a pivot point where cause and effect can fluidly reverse roles in real time." },
      { term: "Future-Based Inversion", desc: "Causes are projected into the future, but their effects are instantiated prematurely, sometimes even before conscious intent." },
    ],
  },
  {
    title: "Causal Desynchronization",
    desc: "Under TIoC, the universe no longer upholds synchronized causality. Multiple versions of events may exist simultaneously, each claiming primacy, until a dominant timeline asserts itself through metaphysical force, will, or paradox resolution.",
  },
  {
    title: "Meta-Causal Feedback Loops",
    desc: "Because effects can loop back and influence their own causes, closed loops are possible, leading to recursive chains of logic. These loops may be stable, unstable, or paradoxically infinite.",
  },
  {
    title: "Time-Agile Entities",
    desc: "Beings or phenomena capable of utilizing TIoC are not time travelers in the traditional sense. Instead, they operate as “time-agnostic agents,” selectively rearranging causality to achieve preferred outcomes across temporal layers.",
  },
];

const applications = [
  { term: "Strategic Pre-Engineering", desc: "Outcomes can be predetermined and then retroactively justified by inserting new causes into the timeline." },
  { term: "Philosophical Collapse", desc: "Free will, determinism, and moral consequence become indistinct under TIoC, as the linear understanding of choice no longer applies." },
  { term: "Paradoxical Immunity", desc: "Users of TIoC may become resistant or immune to paradox, existing in a state where conflicting temporal logics coexist without contradiction." },
  { term: "Temporal Occupancy", desc: "A single entity may exist simultaneously across multiple points in time, not as duplicates, but as converged fragments of the same being." },
];

const risks = [
  { term: "Chrono-Overload", desc: "Improper or unstable use of TIoC can result in temporal feedback damage, identity fragmentation, or narrative collapse." },
  { term: "Observer Instability", desc: "Non-TIoC-aware beings exposed to inverted causality may suffer mental breakdown, memory bleed, or retroactive erasure." },
  { term: "Time-Tether Vulnerability", desc: "Even a time-agnostic agent must maintain an anchor to at least one consistent event or truth, or risk dispersal across causality itself." },
];

const comparison = [
  { principle: "Cause precedes effect", traditional: "Always", tioc: "Not necessarily" },
  { principle: "Time flow", traditional: "Linear", tioc: "Non-linear / Triform" },
  { principle: "Paradox tolerance", traditional: "None / Error state", tioc: "High / Coexistence allowed" },
  { principle: "Strategic use", traditional: "Reactive", tioc: "Preemptive or retro-creative" },
  { principle: "Temporal agents", traditional: "Time travelers", tioc: "Time-agnostic causal editors" },
];

export default function TemporalInversionOfCausality() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-20 space-y-16">

      {/* Breadcrumb + Title */}
      <div>
        <Link
          to="/world/databases/CalendarAndTime"
          className="font-body text-[10px] tracking-widest uppercase text-[#4a4844] hover:text-[#c9a84c] transition-colors duration-200 inline-block mb-6"
        >
          &#8592; Back to Calendar &amp; Time
        </Link>
        <p className="font-body text-xs tracking-[0.25em] text-[#c9a84c] uppercase mb-3">
          Calendar &amp; Time &mdash; The 32 Hour System
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-[#f2ebeb] mb-6">&#8987; Temporal Inversion of Causality (TIoC)</h1>
        <p className="font-body text-base text-[#7a746e] leading-relaxed">A Metaphysical Phenomenon of Non-Linear Cause and Effect</p>
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Overview</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Temporal Inversion of Causality (TIoC) is a metaphysical phenomenon in which the standard linear relationship between cause and effect becomes non-linear, allowing events to influence each other across past, present, and future without obeying traditional chronological flow. Unlike simple time manipulation, TIoC is a structural collapse of temporal logic, enabling effects to manifest before, during, or even in absence of their causes.
        </p>
      </section>

      {/* Core Principles */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Core Principles</h2>
        <div className="space-y-3">
          {corePrinciples.map((p, i) => (
            <div key={i} className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5 hover:border-[#c9a84c]/40 transition-colors">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-sm text-[#c9a84c] shrink-0">{i + 1}.</span>
                <h4 className="font-display text-base text-[#f2ebeb]">{p.title}</h4>
              </div>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed pl-6">{p.desc}</p>
              {p.sub && (
                <div className="mt-3 ml-6 pl-4 border-l border-[#c9a84c]/30 space-y-2">
                  {p.sub.map((s, j) => (
                    <p key={j} className="font-body text-sm text-[#c8c2ba] leading-relaxed">
                      <span className="text-[#f2ebeb] font-medium">{s.term}:</span> {s.desc}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Applications and Implications */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Applications and Implications</h2>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          {applications.map((a, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                <span className="text-[#f2ebeb] font-medium">{a.term}:</span> {a.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Risks and Limitations */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Risks and Limitations</h2>
        <div className="border border-[#2e2b26] bg-[#0f0d0c] rounded-sm p-5 space-y-3">
          {risks.map((r, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-[#c9a84c] font-display text-sm mt-0.5">&mdash;</span>
              <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
                <span className="text-[#f2ebeb] font-medium">{r.term}:</span> {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TIoC vs. Traditional Causality */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">TIoC vs. Traditional Causality</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#2e2b26]">
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-4">Principle</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2 pr-4">Traditional Causality</th>
                <th className="font-display text-[10px] tracking-widest uppercase text-[#7a746e] text-left py-2">Temporal Inversion of Causality</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b border-[#2e2b26]/50 hover:bg-[#0f0d0c] transition-colors">
                  <td className="font-body text-sm text-[#f2ebeb] py-3 pr-4">{row.principle}</td>
                  <td className="font-body text-sm text-[#7a746e] py-3 pr-4">{row.traditional}</td>
                  <td className="font-body text-sm text-[#c8c2ba] py-3">{row.tioc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Beings */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Beings that have Complete Mastery</h2>
          <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
            In time-based warping settings, via temporal warping, there are a few beings in this saga that are capable of breaking TIoC.
          </p>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-display text-sm text-[#c9a84c] shrink-0">1.</span>
              <Link to="/characters/AeoniaTheSpiritOfTime" className="font-display text-base text-[#c9a84c] hover:underline">
                Aeonia, The Spirit of Time
              </Link>
            </div>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed pl-6">
              She is the construct of time itself, the fundamental, the nature, and the law. She is also the observer and learner.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-display text-sm text-[#f2ebeb] mb-3">Beings that can manipulate TIoC (limited)</h3>
          <div className="bg-[#0f0d0c] border border-[#2e2b26] rounded-sm p-5">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-display text-sm text-[#c9a84c] shrink-0">1.</span>
              <Link to="/characters/EienelTheCosmicIfrit" className="font-display text-base text-[#c9a84c] hover:underline">
                Eienel, The Cosmic Ifrit
              </Link>
            </div>
            <p className="font-body text-base text-[#c8c2ba] leading-relaxed pl-6">
              A being so great he gained the ability and power: &ldquo;temporal warping&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-4">
        <h2 className="font-display text-lg text-[#f2ebeb] mb-4">Conclusion</h2>
        <p className="font-body text-base text-[#c8c2ba] leading-relaxed">
          Temporal Inversion of Causality redefines the narrative and metaphysical structure of time. It is not merely about manipulating when events occur&mdash;it is about <span className="text-[#c9a84c] italic font-semibold">who controls why events exist</span>. Mastery of TIoC grants the ability to author reality across temporal dimensions, bending story, memory, and outcome into a malleable continuum beyond time&apos;s natural laws.
        </p>
      </section>

      {/* Bottom Nav */}
      <div className="flex items-start justify-between pt-8 border-t border-[#2e2b26] mt-16">
        <Link
          to="/world/databases/CalendarAndTime"
          className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-[#2e2b26] bg-[#1a1714] hover:border-[#c9a84c]/40 hover:bg-[#1f1c18] transition-all duration-200 max-w-[45%]"
        >
          <span className="text-[#c9a84c] text-lg">&#8592;</span>
          <div>
            <p className="font-display text-xs text-[#4a4844] uppercase tracking-wider mb-0.5">Back</p>
            <p className="font-display text-sm text-[#f2ebeb]">Calendar &amp; Time</p>
          </div>
        </Link>
      </div>

    </div>
  );
}
