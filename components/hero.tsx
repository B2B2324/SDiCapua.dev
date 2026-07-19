export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-background))]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-6 pt-40 pb-28 md:pt-52 md:pb-36">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Open to AI Product Manager &amp; Agentic Product roles
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
          Stephen DiCapua
        </h1>

        <p className="mt-4 text-lg font-medium text-accent sm:text-xl">
          Commercial Real Estate Professional &amp; AI Agent Builder
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          I work at the intersection of commercial real estate and applied AI —
          pairing years of deal-side experience in CRE with hands-on engineering
          of autonomous agents. From underwriting and market analysis to
          production agent systems that source leads, run outreach, and answer
          from institutional knowledge, I build software that does real work
          for real businesses.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            View projects
          </a>
          <a
            href="#about"
            className="rounded-full border border-border-subtle px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
          >
            More about me
          </a>
        </div>
      </div>
    </section>
  );
}
