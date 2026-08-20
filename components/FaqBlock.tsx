import { Eyebrow } from "./Eyebrow";

export function FaqBlock({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  className = "",
}: {
  items: { question: string; answer: string }[];
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-border bg-white p-5 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-ink">
              {item.question}
              <span className="shrink-0 text-terracotta-dark transition-transform group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
