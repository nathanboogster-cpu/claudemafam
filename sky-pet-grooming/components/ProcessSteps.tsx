import { processSteps } from "@/lib/site-data";
import { Eyebrow } from "./Eyebrow";

export function ProcessSteps({
  eyebrow = "How It Works",
  title = "Booking Takes a Minute",
  headingId,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  headingId?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={headingId} className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {processSteps.map((step, i) => (
          <li key={step.title} className="relative rounded-3xl border border-border bg-white p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-lg font-extrabold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 font-display text-lg font-extrabold text-ink">{step.title}</h3>
            <p className="mt-1 text-sm text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
