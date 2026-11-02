import { services } from "@/lib/site-data";
import { Pic } from "./Pic";

// The services from the owner's booking page, each with one of their photos.
export function ServiceGrid({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <li key={s.title} className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
          <div className="relative aspect-[4/3] bg-sky-deep">
            <Pic slug={s.photo} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="p-5">
            <Heading className="font-display text-lg font-extrabold text-ink">{s.title}</Heading>
            <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
