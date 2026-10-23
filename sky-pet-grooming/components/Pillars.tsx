import { pillars } from "@/lib/site-data";
import { pillarIcons } from "./icons";
import { Eyebrow } from "./Eyebrow";

// The three verified facts, as cards.
export function Pillars({
  eyebrow = "Why Sky",
  title = "Luxury Grooming, Without the Trip",
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
        <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = pillarIcons[i];
          return (
            <div key={pillar.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand">
                <Icon />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{pillar.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{pillar.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
