import { business } from "@/lib/site-data";

export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 ${className}`}>
      <div className="flex items-center gap-2">
        <StarRow />
        <span className="text-sm font-semibold text-ink">
          Hundreds of 5-Star Reviews on Google
        </span>
        <span className="text-sm text-ink-soft">({business.googleReviewCount}+ reviews)</span>
      </div>
      <div className="flex items-center gap-2">
        <BbbBadge />
        <span className="text-sm font-semibold text-ink">{business.bbb}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-ink">35+ years of hands-on experience</span>
      </div>
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex text-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

function BbbBadge() {
  return (
    <span
      aria-hidden="true"
      className="flex h-6 w-6 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-white"
    >
      A+
    </span>
  );
}
