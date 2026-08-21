import { processSteps } from "@/lib/site-data";
import { Eyebrow } from "./Eyebrow";

export function ProcessSteps({
  eyebrow = "How It Works",
  title = "What to Expect",
  className = "",
}: {
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
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-border bg-cream-deep p-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink">
              {i + 1}
            </span>
            <p className="mt-3 font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-sm text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
