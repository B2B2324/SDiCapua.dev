import SectionHeading from "./section-heading";

const contactMethods = [
  {
    label: "Email",
    value: "Sdicap970@icloud.com",
    href: "mailto:Sdicap970@icloud.com",
  },
  {
    label: "LinkedIn",
    value: "in/stephen-dicapua",
    href: "https://www.linkedin.com/in/stephen-dicapua",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/b2b2324",
    href: "https://github.com/b2b2324",
    external: true,
  },
];

const products = [
  {
    name: "Trackply",
    href: "https://trackply.com",
    description: "AI-native job search platform",
  },
  {
    name: "Agentic Labs",
    href: "https://app.agenticlabs.com.mx",
    description: "Multi-agent Relationship OS",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk agentic products"
          description="Open to AI Product Manager and Agentic Product roles — bringing hands-on experience designing, shipping, and validating multi-agent systems in production."
        />

        <div className="flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.08] px-4 py-2 text-sm font-medium text-zinc-200 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for AI Product Manager &amp; Agentic Product roles
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-[1.4fr_1fr]">
          {/* Contact methods */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                {...("external" in method && method.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group rounded-2xl border border-border-subtle bg-surface p-5 transition-colors hover:border-accent/30"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {method.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-zinc-200 transition-colors group-hover:text-accent">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          {/* Live products */}
          <div className="rounded-2xl border border-border-subtle bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              See the work live
            </p>
            <ul className="mt-4 space-y-4">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3"
                  >
                    <span>
                      <span className="block text-sm font-medium text-zinc-200 transition-colors group-hover:text-accent">
                        {product.name}
                      </span>
                      <span className="block text-xs text-zinc-500">
                        {product.description}
                      </span>
                    </span>
                    <svg
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
