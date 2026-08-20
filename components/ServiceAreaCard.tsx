import Link from "next/link";
import { PinIcon } from "./icons";

export function ServiceAreaCard({
  city,
  href,
}: {
  city: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-2 rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
          Mobile Grooming
        </p>
        <p className="mt-0.5 flex items-center gap-1.5 font-display text-lg font-bold text-ink">
          <PinIcon className="h-4 w-4 shrink-0 text-terracotta" />
          {city}, CA
        </p>
      </div>
      <span className="text-terracotta-dark transition-transform group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
