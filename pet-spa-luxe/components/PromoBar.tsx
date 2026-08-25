import Link from "next/link";
import { fullGroomingPackage, servicePath, business } from "@/lib/site-data";
import { SparkleIcon } from "@/components/icons";

// Slim, site-wide banner reinforcing the verified $110 flat-rate package on
// every page — pricing transparency is a strong, honest conversion lever.
export function PromoBar() {
  return (
    <div className="bg-psl-ink text-white">
      <Link
        href={servicePath("dog-haircuts-full-grooming")}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-center text-sm font-medium hover:bg-white/5"
      >
        <SparkleIcon className="h-4 w-4 shrink-0 text-psl-brass" />
        <span>
          <strong className="text-psl-brass">{fullGroomingPackage.name}</strong> — {fullGroomingPackage.price}, all-inclusive
        </span>
        <span className="hidden text-white/60 sm:inline">·</span>
        <span className="underline decoration-psl-brass/60 underline-offset-2">See what&apos;s included</span>
        <span className="hidden text-white/60 sm:inline">·</span>
        <span className="hidden sm:inline">Call {business.phoneDisplay} to book</span>
      </Link>
    </div>
  );
}
