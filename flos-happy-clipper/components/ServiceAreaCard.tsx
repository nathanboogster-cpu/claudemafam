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
      className="group flex flex-col gap-2 rounded-2xl border border-fh-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md font-fh-sans"
    >
      <div className="flex items-center gap-2 text-fh-amber-dark">
        <PinIcon className="h-4 w-4 shrink-0" />
        <span className="font-fh-display text-lg font-bold text-fh-ink">
          {city}, {state}
        </span>
      </div>
      <p className="text-sm text-fh-ink-soft">{description}</p>
      <span className="mt-1 text-sm font-semibold text-fh-amber-dark group-hover:underline">Learn more →</span>
    </Link>
  );
}
