export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed atmospheric plane */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(196,177,148,0.1),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 top-[42%] h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent animate-line" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 pb-24 pt-28 md:pb-32 md:pt-32">
        <p className="animate-reveal mb-8 font-serif text-sm tracking-[0.22em] text-accent uppercase">
          sdicapua.dev
        </p>

        <h1 className="animate-reveal animate-reveal-delay-1 font-serif text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-ink">
          Stephen DiCapua
        </h1>

        <p className="animate-reveal animate-reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-[#b8b4ac] sm:text-xl">
          Commercial real estate professional building production AI agent
          systems.
        </p>

        <div className="animate-reveal animate-reveal-delay-3 mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-[#141210] transition-all duration-300 hover:bg-accent-dim hover:tracking-wider"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-border-strong px-6 py-3 text-sm font-medium text-[#d6d3cd] transition-all duration-300 hover:border-accent/50 hover:text-ink"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
