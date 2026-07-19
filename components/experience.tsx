import SectionHeading from "./section-heading";

const experience = [
  {
    role: "Founder & Agent Engineer",
    org: "Agentic Labs",
    period: "2025 — Present",
    summary:
      "Building an AI agent platform for SMBs: production agents for marketing, lead generation, and customer knowledge, unified by a shared retrieval-augmented memory layer.",
  },
  {
    role: "Commercial Real Estate Professional",
    org: "CRE Brokerage & Advisory",
    period: "2018 — Present",
    summary:
      "Deal-side experience across acquisitions, leasing, and advisory. Underwriting, market analysis, and client relationships — the domain expertise that now shapes what I build.",
  },
  {
    role: "Independent Builder",
    org: "Trackply & client projects",
    period: "2024 — Present",
    summary:
      "Shipped a consumer PWA with autonomous sourcing agents and an AI coach, plus bespoke agent systems for outreach, research, and internal knowledge.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Experience"
          title="Two disciplines, one throughline"
          description="Real estate taught me how businesses actually operate. Engineering lets me automate the parts that shouldn't need a human."
        />

        <ol className="relative space-y-12 border-l border-border-subtle pl-8">
          {experience.map((item) => (
            <li key={item.role} className="relative">
              <span
                aria-hidden
                className="absolute -left-[37px] top-2 h-2 w-2 rounded-full bg-accent"
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-serif text-lg tracking-tight text-ink">
                  {item.role}
                </h3>
                <span className="text-sm text-faint">{item.org}</span>
              </div>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
                {item.period}
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                {item.summary}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-border-subtle pt-10">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
            Education
          </p>

          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <h3 className="font-serif text-lg tracking-tight text-ink">
                  Master of Science in Artificial Intelligence Engineering
                  (MSAIE)
                </h3>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                  Aug 2026 — 13 months
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                Currently enrolled. Formalizing the engineering foundations
                behind the agent systems I already build and ship.
              </p>
            </div>

            <div className="border-t border-border-subtle pt-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <h3 className="font-serif text-lg tracking-tight text-ink">
                  B.A. in Economics, Minor in Real Estate
                </h3>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                  Class of 2014
                </span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                University of Connecticut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
