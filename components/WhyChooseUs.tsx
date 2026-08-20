import { trustPoints } from "@/lib/site-data";
import { CheckIcon } from "./icons";
import { Eyebrow } from "./Eyebrow";

export function WhyChooseUs({
  eyebrow = "Why Choose Us",
  title = "Why Pet Parents Choose Pampered Puppies",
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
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustPoints.map((point) => (
          <div
            key={point.title}
            className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-terracotta-light/25 text-terracotta-dark">
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
