export type Faq = { question: string; answer: string };

/**
 * FAQ accordion built on native <details>/<summary>.
 *
 * Three reasons it isn't a JS accordion: every answer is in the initial HTML
 * so Google indexes it (and it matches the FAQPage schema exactly), it is
 * keyboard- and screen-reader-operable for free, and it ships no JavaScript.
 */
export function FaqBlock({ faqs, onDark = false }: { faqs: Faq[]; onDark?: boolean }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className={`group rounded-2xl border-2 px-5 py-1 transition-colors ${
            onDark ? "border-white/15 bg-white/5" : "border-goc-border bg-white"
          }`}
        >
          <summary
            className={`flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-goc-display text-lg font-extrabold ${
              onDark ? "text-white" : "text-goc-ink"
            }`}
          >
            {faq.question}
            <span
              aria-hidden="true"
              className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform duration-200 group-open:rotate-45 ${
                onDark ? "bg-white/10 text-goc-orange" : "bg-goc-cream-deep text-goc-magenta-darker"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className={`pb-4 leading-relaxed ${onDark ? "text-white/75" : "text-goc-ink-soft"}`}>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
