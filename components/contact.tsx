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

        <div className="mb-12 flex items-center gap-3 text-sm text-[#c9c5bc]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for AI Product Manager &amp; Agentic Product roles
        </div>

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="grid gap-0 border-t border-border-subtle sm:grid-cols-2">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                {...("external" in method && method.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group border-b border-border-subtle py-5 pr-6 transition-colors sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
                  {method.label}
                </p>
                <p className="mt-2 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          <div className="border-t border-border-subtle pt-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
              See the work live
            </p>
            <ul className="mt-5 space-y-5">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3"
                  >
                    <span>
                      <span className="block font-serif text-lg tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                        {product.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-faint">
                        {product.description}
                      </span>
                    </span>
                    <svg
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-faint transition-colors duration-300 group-hover:text-accent"
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
