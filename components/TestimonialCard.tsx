function initialsFor(attribution: string) {
  const words = attribution.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export function TestimonialCard({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm">
      <blockquote className="text-ink-soft text-sm leading-relaxed">
        <span className="text-3xl leading-none text-terracotta-light" aria-hidden="true">
          &ldquo;
        </span>
        {quote}
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta-light/30 text-xs font-bold text-terracotta-dark"
        >
          {initialsFor(attribution)}
        </span>
        <span className="text-sm font-semibold text-ink">{attribution}</span>
      </figcaption>
    </figure>
  );
}
