import Link from "next/link";
import { PinIcon } from "@/components/icons";

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
      className="group flex flex-col gap-2 rounded-2xl border border-bb-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md font-bb-sans"
    >
      <div className="flex items-center justify-between gap-2">
        <p className="flex items-center gap-1.5 font-bb-display text-lg font-bold text-bb-ink">
          <PinIcon className="h-4 w-4 shrink-0 text-bb-coral" />
          {city}, {state}
        </p>
        <span className="text-bb-coral-dark transition-transform group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </div>
      <p className="text-sm text-bb-ink-soft">{description}</p>
    </Link>
  );
}
