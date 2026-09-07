import Link from "next/link";
import { PinIcon } from "./icons";

export function ServiceAreaCard({
  city,
  state,
  description,
  href,
}: {
  city: string;
  state: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 rounded-2xl border border-fh-border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-fh-pink-dark/30 hover:shadow-lg font-fh-sans"
    >
      <div className="flex items-center gap-2 text-fh-pink-dark">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fh-pink/25 to-fh-blue/25 transition-transform duration-200 group-hover:scale-110">
          <PinIcon className="h-4 w-4" />
        </span>
        <span className="font-fh-display text-lg font-bold text-fh-ink">
          {city}, {state}
        </span>
      </div>
      <p className="text-sm text-fh-ink-soft">{description}</p>
      <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-fh-pink-dark">
        Learn more <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
