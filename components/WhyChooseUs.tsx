import { trustPoints } from "@/lib/site-data";
import { CheckIcon } from "./icons";

export function WhyChooseUs({
  title = "Why Pet Parents Choose Pampered Puppies",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="font-display text-2xl font-bold text-ink text-center sm:text-3xl">
        {title}
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((point) => (
          <div
            key={point.title}
            className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
              <CheckIcon className="h-4 w-4" />
            </span>
            <div>
              <p className="font-semibold text-ink">{point.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{point.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
