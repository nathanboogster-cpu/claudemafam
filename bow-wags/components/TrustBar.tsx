import { business } from "@/lib/site-data";
import { ShieldCheckIcon, TreesIcon, HouseIcon } from "./icons";

// Only verified facts from the business record: fully supervised play,
// indoor + outdoor space, and private (not caged) boarding suites. No
// fabricated staffing ratios or unverifiable review counts.
export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-4 font-bw-sans ${className}`}>
      <div className="flex items-center gap-2">
        <ShieldCheckIcon className="h-5 w-5 text-bw-teal-dark" />
        <span className="text-sm font-semibold text-bw-ink">Fully Supervised</span>
      </div>
      <div className="flex items-center gap-2">
        <TreesIcon className="h-5 w-5 text-bw-teal-dark" />
        <span className="text-sm font-semibold text-bw-ink">Indoor + Outdoor Play</span>
      </div>
      <div className="flex items-center gap-2">
        <HouseIcon className="h-5 w-5 text-bw-teal-dark" />
        <span className="text-sm font-semibold text-bw-ink">Private Boarding Suites</span>
      </div>
      <a
        href={business.yelpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-bw-orange-dark hover:underline"
      >
        Read Reviews →
      </a>
    </div>
  );
}
