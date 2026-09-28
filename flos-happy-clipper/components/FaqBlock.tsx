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
    <section className={`font-fh-sans ${className}`}>
      {title ? (
        <div className="text-center">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="mt-1 font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">{title}</h2>
        </div>
      ) : null}
      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-fh-border bg-white p-5 shadow-sm transition-colors duration-200 open:border-fh-pink-dark/30 open:bg-fh-pink/5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-fh-ink marker:content-none">
              {item.question}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fh-pink/15 text-fh-pink-dark transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-fh-ink-soft leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
