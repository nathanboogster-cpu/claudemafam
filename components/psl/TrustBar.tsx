import { business } from "@/lib/psl/site-data";

// Only verified facts: 5.0 Yelp rating (no review count — sources conflict),
// mobile setup, and cage-free grooming. Links out to the real Yelp listing
// rather than displaying an unverifiable review count.
export function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-8 gap-y-4 font-psl-sans ${className}`}>
      <a
        href={business.yelpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:opacity-80"
      >
        <StarRow />
        <span className="text-sm font-semibold text-psl-ink">
          {business.yelpRating}-Star Rating on Yelp
        </span>
      </a>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-psl-ink">Fully Mobile — We Come To You</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-psl-ink">Cage-Free, One-on-One Grooming</span>
      </div>
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex text-psl-brass" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}
