import { processSteps } from "@/lib/site-data";
import { Eyebrow } from "./Eyebrow";

export function ProcessSteps({
  eyebrow = "How It Works",
  title = "Booking a Mobile Groom",
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
        <h2 id={headingId} className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
          {title}
        </h2>
      </div>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-border bg-sky-deep p-5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">
              {i + 1}
            </span>
            <h3 className="mt-3 font-semibold text-ink">{step.title}</h3>
            <p className="mt-1 text-sm text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
