import SectionHeading from "./section-heading";

const skills = [
  "AI Agent Architecture",
  "LangGraph & Claude API",
  "Next.js / React",
  "Python / FastAPI",
  "RAG & Vector Search",
  "Supabase / Postgres",
  "MCP Integrations",
  "CRE Underwriting",
  "Market Analysis",
  "Deal Sourcing",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeading eyebrow="About" title="Why CRE + AI" />

        <div className="grid gap-14 md:grid-cols-[1.65fr_1fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              Commercial real estate runs on relationships, local knowledge, and
              a staggering amount of manual work — sourcing, underwriting,
              follow-ups, market reports. I spent years inside that workflow and
              kept asking the same question: which of these hours actually
              require a person?
            </p>
            <p>
              That question led me to AI agents. Not chatbots — systems with
              memory, tools, and judgment that handle entire workflows: finding
              leads, qualifying them, drafting outreach, answering from a
              company&apos;s accumulated knowledge. I build them end to end,
              from the retrieval layer to the deployment pipeline.
            </p>
            <p>
              The combination matters. Most engineers don&apos;t know what a
              broker&apos;s day looks like; most brokers can&apos;t ship
              software. Sitting in both seats means I build agents that solve
              problems operators actually have.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
              Toolkit
            </h3>
            <ul className="space-y-2.5">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-border-subtle/70 pb-2.5 text-[13px] tracking-wide text-[#c9c5bc] last:border-0"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-12 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
              Contact
            </h3>
            <a
              href="mailto:Sdicap970@icloud.com"
              className="text-sm text-[#c9c5bc] underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
            >
              Sdicap970@icloud.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
