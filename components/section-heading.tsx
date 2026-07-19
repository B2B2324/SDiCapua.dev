export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-tight tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
