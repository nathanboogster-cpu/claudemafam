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
      <figcaption className="mt-4 text-sm font-semibold text-ink">— {attribution}</figcaption>
    </figure>
  );
}
