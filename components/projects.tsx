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

        {/* Featured projects */}
        <div className="space-y-8">
          {featured.map((project) => (
            <article
              key={project.name}
              className="relative overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-colors hover:border-accent/30"
            >
              {/* Top accent line */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
              />

              <div
                className={`p-7 sm:p-9 ${
                  project.image ? "lg:grid lg:grid-cols-[1fr_280px] lg:gap-10" : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                      {project.name}
                    </h3>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {project.badge}
                    </span>
                    {project.stat && (
                      <span className="rounded-full border border-border-subtle bg-background/60 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        {project.stat}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm font-medium text-zinc-300 sm:text-base">
                    {project.tagline}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                    {project.description}
                  </p>

                  <dl
                    className={`mt-7 grid gap-5 ${
                      project.features.length === 4
                        ? "sm:grid-cols-2"
                        : "sm:grid-cols-3"
                    }`}
                  >
                    {project.features.map((feature) => (
                      <div
                        key={feature.label}
                        className="rounded-xl border border-border-subtle/70 bg-background/50 p-4"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-wider text-accent/80">
                          {feature.label}
                        </dt>
                        <dd className="mt-2 text-[13px] leading-relaxed text-zinc-400">
                          {feature.detail}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 flex items-start gap-2.5 rounded-xl border border-accent/15 bg-accent/[0.06] px-4 py-3 text-[13px] leading-relaxed text-zinc-300">
                    <svg
                      aria-hidden
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{project.highlight}</span>
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border-subtle px-2.5 py-0.5 text-xs text-zinc-500"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.image && (
                  <figure className="mt-8 lg:mt-0">
                    <div className="overflow-hidden rounded-xl border border-border-subtle">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        className="h-auto w-full max-w-sm lg:max-w-none"
                        sizes="(min-width: 1024px) 280px, 100vw"
                      />
                    </div>
                    <figcaption className="mt-3 text-xs leading-relaxed text-zinc-500">
                      {project.image.caption}
                    </figcaption>
                  </figure>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Secondary builds */}
        <h3 className="mt-14 mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
          More builds
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          {more.map((project) => (
            <article
              key={project.name}
              className="group rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/30"
            >
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent/80">
                {project.tag}
              </p>
              <h4 className="text-lg font-semibold text-zinc-100 transition-colors group-hover:text-accent">
                {project.name}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border-subtle px-2.5 py-0.5 text-xs text-zinc-500"
                  >
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
