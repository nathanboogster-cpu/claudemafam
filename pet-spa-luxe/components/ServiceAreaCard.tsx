import Link from "next/link";
import { PinIcon } from "@/components/icons";

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
      className="group flex items-center justify-between gap-2 rounded-2xl border border-psl-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md font-psl-sans"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-psl-brass-dark">
          Mobile Grooming
        </p>
        <p className="mt-0.5 flex items-center gap-1.5 font-psl-display text-lg font-bold text-psl-ink">
          <PinIcon className="h-4 w-4 shrink-0 text-psl-brass" />
          {city}, CA
        </p>
      </div>
      <span className="text-psl-brass-dark transition-transform group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
