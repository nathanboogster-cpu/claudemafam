import { SectionHeading } from "./Section";

// Native <details> accordions: keyboard accessible for free, open correctly
// with browser find-in-page, and require no JavaScript. The answer text is
// always in the HTML, so it is crawlable whether or not the item is expanded.
export function FaqBlock({
  items,
  eyebrow = "FAQ",
  title = "Questions groomers ask before signing up",
  intro,
  headingId = "faq",
}: {
  items: { question: string; answer: string }[];
  eyebrow?: string;
  title?: string;
  intro?: React.ReactNode;
  headingId?: string;
}) {
  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} id={headingId} />
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-tf-border bg-white p-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-tf-ink">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-xl leading-none text-tf-brown-dark transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-tf-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}
