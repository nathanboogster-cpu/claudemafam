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
      className="group flex flex-col gap-2 rounded-2xl border border-bw-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md font-bw-sans"
    >
      <div className="flex items-center gap-2 text-bw-red-dark">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bw-red/15">
          <PinIcon className="h-4 w-4" />
        </span>
        <span className="font-bw-display text-lg font-bold text-bw-ink">
          {city}, {state}
        </span>
      </div>
      <p className="text-sm text-bw-ink-soft">{description}</p>
      <span className="mt-1 text-sm font-semibold text-bw-red-dark group-hover:underline">Learn more →</span>
    </Link>
  );
}
