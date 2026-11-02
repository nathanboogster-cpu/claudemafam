import Link from "next/link";
import { serviceAreas, type ServiceArea } from "@/lib/site-data";
import { PinIcon } from "./icons";

// Pill links to service-area pages: every area by default, or a given subset.
export function AreaLinks({ areas = serviceAreas, className = "" }: { areas?: readonly ServiceArea[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {areas.map((a) => (
        <li key={a.slug}>
          <Link
            href={a.slug}
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-border bg-white px-4 text-sm font-bold text-brand shadow-sm hover:border-accent hover:text-accent-dark"
          >
            <PinIcon className="h-4 w-4 text-accent" />
            {a.city}
          </Link>
        </li>
      ))}
    </ul>
  );
}
