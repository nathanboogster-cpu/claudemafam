import { pillars } from "@/lib/site-data";
import { pillarIcons } from "./icons";
import { Eyebrow } from "./Eyebrow";

// The four verified trust facts, as cards.
export function Pillars({
  eyebrow = "Why Sky Pet",
  title = "Grooming Made Easy",
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
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => {
          const Icon = pillarIcons[i];
          return (
            <div key={pillar.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-light text-accent-dark">
                <Icon />
              </span>
              <h3 className="mt-4 font-display text-lg font-extrabold text-ink">{pillar.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{pillar.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
