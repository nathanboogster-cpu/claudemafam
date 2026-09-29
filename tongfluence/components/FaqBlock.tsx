import { SectionHeading } from "./Section";

// Native <details> accordions: keyboard accessible for free, open correctly
// with browser find-in-page, and require no JavaScript. The answer text is
// always in the HTML, so it is crawlable whether or not the item is expanded.
export function FaqBlock({
  items,
  eyebrow = "FAQ",
  title = "Questions groomers ask before signing up",
  accent,
  intro,
  headingId = "faq",
}: {
  items: { question: string; answer: string }[];
  eyebrow?: string;
  title?: string;
  accent?: string;
  intro?: React.ReactNode;
  headingId?: string;
}) {
  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={title} accent={accent} intro={intro} id={headingId} />
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="group rounded-xl border border-tf-border bg-tf-card">
            <summary className="flex min-h-[56px] cursor-pointer list-none items-start justify-between gap-4 p-5 font-semibold text-tf-ink">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-xl leading-none text-tf-brown-dark transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-tf-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
