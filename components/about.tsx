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

        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
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
            <h3 className="mb-4 text-sm font-semibold text-zinc-200">
              Toolkit
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs text-zinc-400"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-10 text-sm font-semibold text-zinc-200">
              Contact
            </h3>
            <a
              href="mailto:Sdicap970@icloud.com"
              className="text-sm text-accent underline-offset-4 hover:underline"
            >
              Sdicap970@icloud.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
