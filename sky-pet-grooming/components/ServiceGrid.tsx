import Link from "next/link";
import { addOnServices, mainServices, servicePath } from "@/lib/site-data";
import { Pic } from "./Pic";

// The main services from the owner's booking page as photo cards, each linking
// to its own page, plus a card listing the add-ons.
export function ServiceGrid({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {mainServices.map((s) => (
        <li key={s.key}>
          <Link
            href={servicePath(s.key)}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:border-accent hover:shadow-md"
          >
            <div className="relative aspect-[4/3] bg-sky-deep">
              <Pic slug={s.photo} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover object-[50%_25%]" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <Heading className="font-display text-lg font-extrabold text-ink group-hover:text-accent-dark">{s.title}</Heading>
              <p className="mt-1 text-sm text-ink-soft">{s.body}</p>
              <span className="mt-auto pt-3 text-sm font-bold text-brand">Learn more →</span>
            </div>
          </Link>
        </li>
      ))}
      <li className="flex flex-col rounded-3xl border border-border bg-white p-5 shadow-sm">
        <Heading className="font-display text-lg font-extrabold text-ink">Add-ons</Heading>
        <p className="mt-1 text-sm text-ink-soft">Add these to a bath or grooming package when you book.</p>
        <ul className="mt-3 divide-y divide-border">
          {addOnServices.map((s) => (
            <li key={s.key}>
              <Link
                href={servicePath(s.key)}
                className="flex min-h-[44px] items-center justify-between gap-3 text-sm font-bold text-brand hover:text-accent-dark"
              >
                {s.title}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
