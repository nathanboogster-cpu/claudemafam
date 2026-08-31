import { DogIcon, CatIcon, HeartIcon } from "@/components/icons";

// Only verified, safe-to-state facts — no fabricated star rating or review
// count (public sources conflict and go stale). See the Reviews page for
// why, and the live Google link used there instead.
export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 font-sp-sans ${className}`}>
      <div className="flex items-center gap-2">
        <HeartIcon className="h-5 w-5 text-sp-green-dark" />
        <span className="text-sm font-semibold text-sp-ink">Established Local Grooming Salon</span>
      </div>
      <div className="flex items-center gap-2">
        <DogIcon className="h-5 w-5 text-sp-green-dark" />
        <CatIcon className="h-5 w-5 text-sp-green-dark" />
        <span className="text-sm font-semibold text-sp-ink">Dog & Cat Grooming</span>
      </div>
    </div>
  );
}
