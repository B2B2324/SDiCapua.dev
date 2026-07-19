import Image from "next/image";
import SectionHeading from "./section-heading";

type FeaturedProject = {
  name: string;
  badge: string;
  stat?: string;
  tagline: string;
  description: string;
  features: { label: string; detail: string }[];
  highlight: string;
  stack: string[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
};

const featured: FeaturedProject[] = [
  {
    name: "Agentic Labs",
    badge: "Flagship Platform",
    tagline:
      "A Relationship Operating System — multi-agent orchestration over a single shared brain",
    description:
      "The core product decision: agents shouldn't own their knowledge. Every agent on the platform reads from and writes to one centralized brain, so context captured during acquisition is still there when a support conversation happens a year later. LangGraph handles orchestration; the memory architecture handles continuity.",
    features: [
      {
        label: "Orchestration",
        detail:
          "Six specialized agents — Customer Service, Executive Assistant, Lead Gen, Social Media, Business Analyst, Inventory — built as LangGraph graphs with explicit state, not prompt chains. A Marketing Suite (LinkedIn outreach, SEO, Reddit) runs coordinated campaigns on the same substrate.",
      },
      {
        label: "Memory architecture",
        detail:
          "Three vertical layers — Acquisition, Operational, and Relationship Memory — with structured hand-offs between agents. When a lead converts, the lead-gen agent's context transfers to operations instead of being re-learned from scratch.",
      },
      {
        label: "Platform engineering",
        detail:
          "Multi-tenant from the first schema: tenant-scoped retrieval, per-business agent configuration, and a deployment topology split across Vercel (product surface) and Railway (agent runtime).",
      },
      {
        label: "Bring your own LLM",
        detail:
          "MCP-compatible, so Agentic Labs agents can be linked to whatever LLM you already use — Claude, ChatGPT, or Grok. Because memory lives in the platform rather than the model, agents retain everything they know even if you switch LLMs.",
      },
    ],
    highlight:
      "Not a concept deck — the platform is deployed and being validated on Trackply with real users before any client onboarding. Build, ship, measure, then sell.",
    stack: [
      "LangGraph",
      "Python",
      "FastAPI",
      "Next.js",
      "Supabase",
      "pgvector",
      "Claude API",
      "MCP",
      "Railway",
      "Vercel",
    ],
  },
  {
    name: "Trackply",
    badge: "Live Product",
    stat: "1,000+ users in the first 5 weeks",
    tagline:
      "AI-native job search platform — and the production proving ground for Agentic Labs",
    description:
      "Built from personal necessity, run as a real product: live users, live agents, live feedback loops. Trackply is where platform hypotheses get tested against reality — which agent behaviors users trust, where hand-offs break, what retrieval quality is actually good enough.",
    features: [
      {
        label: "Product surface",
        detail:
          "Kanban application pipeline, Notion-style workspace, Chrome extension for one-click job capture, smart application builder, and a scam detector for suspicious listings — a complete workflow, not a wrapper around a chat box.",
      },
      {
        label: "Job Coach Kemba",
        detail:
          "A LangGraph coaching agent grounded in each user's own documents and history through the shared brain — the same retrieval layer Agentic Labs runs on, exercised by a second product.",
      },
      {
        label: "Developer experience",
        detail:
          "MCP-compatible by design: users and developers can pull Trackply context into Claude, ChatGPT, or any MCP-aware assistant. The product participates in the agent ecosystem instead of walling itself off.",
      },
    ],
    highlight:
      "Grew to 450+ users in the first three weeks. Agentic Labs marketing agents run here in production — real campaigns with measurable output, closing the loop between platform engineering and product evidence.",
    stack: [
      "React",
      "PWA",
      "LangGraph",
      "Claude API",
      "Supabase",
      "MCP",
      "Chrome Extension",
      "Apify",
    ],
    image: {
      src: "/infographics/trackply-platform.jpg",
      alt: "Trackply platform architecture: Chrome extension, AI job hunter, pipeline tracking, contracts tracker, and communication hub around a central dashboard",
      width: 784,
      height: 1168,
      caption:
        "One dashboard, five coordinated surfaces — capture, sourcing, pipeline, contracts, and communication.",
    },
  },
];

const more = [
  {
    name: "LinkedIn Outreach Agent",
    tag: "Autonomous Outreach",
    description:
      "End-to-end outreach pipeline: lead discovery, profile enrichment, and personalized drafting as a persistent FastAPI service — with human-in-the-loop approval as a deliberate product constraint, not an afterthought.",
    stack: ["Python", "FastAPI", "Apify", "Railway"],
  },
  {
    name: "MCP Knowledge Integrations",
    tag: "LLM Interoperability",
    description:
      "Model Context Protocol servers exposing business data and agent tooling to any MCP-compatible model — one knowledge base, reachable from Claude, ChatGPT, or Grok, with auth handled at the bridge.",
    stack: ["MCP", "TypeScript", "Supabase"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Projects"
          title="Shipped systems, not prototypes"
          description="A multi-agent platform, the live product validating it, and the interoperability layer connecting them — designed, built, and deployed end to end."
        />

        <div className="space-y-16 md:space-y-20">
          {featured.map((project) => (
            <article key={project.name} className="relative">
              <div
                aria-hidden
                className="mb-8 h-px w-full bg-gradient-to-r from-accent/50 via-border-subtle to-transparent"
              />

              <div
                className={
                  project.image
                    ? "lg:grid lg:grid-cols-[1fr_260px] lg:gap-12 lg:items-start"
                    : ""
                }
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h3 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
                      {project.name}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                      {project.badge}
                    </span>
                    {project.stat && (
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                        {project.stat}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-[15px] font-medium leading-snug text-[#c9c5bc] sm:text-base">
                    {project.tagline}
                  </p>

                  <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <dl
                    className={`mt-10 grid gap-x-8 gap-y-8 border-t border-border-subtle pt-8 ${
                      project.features.length === 4
                        ? "sm:grid-cols-2"
                        : "sm:grid-cols-3"
                    }`}
                  >
                    {project.features.map((feature) => (
                      <div key={feature.label}>
                        <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                          {feature.label}
                        </dt>
                        <dd className="mt-2.5 text-[13px] leading-relaxed text-muted">
                          {feature.detail}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-8 border-l border-accent/40 pl-4 text-[13px] leading-relaxed text-[#c9c5bc]">
                    {project.highlight}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="text-[12px] tracking-wide text-faint"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.image && (
                  <figure className="mt-10 lg:mt-0">
                    <div className="overflow-hidden border border-border-subtle">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        className="h-auto w-full max-w-sm transition-transform duration-700 ease-out hover:scale-[1.02] lg:max-w-none"
                        sizes="(min-width: 1024px) 260px, 100vw"
                      />
                    </div>
                    <figcaption className="mt-3 text-xs leading-relaxed text-faint">
                      {project.image.caption}
                    </figcaption>
                  </figure>
                )}
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-20 mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-faint">
          More builds
        </h3>
        <div className="grid gap-10 border-t border-border-subtle pt-10 sm:grid-cols-2 sm:gap-12">
          {more.map((project) => (
            <article key={project.name}>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {project.tag}
              </p>
              <h4 className="font-serif text-xl tracking-tight text-ink">
                {project.name}
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                {project.stack.map((tech) => (
                  <li key={tech} className="text-[12px] tracking-wide text-faint">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
