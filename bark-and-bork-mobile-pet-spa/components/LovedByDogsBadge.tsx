import { StarIcon } from "@/components/icons";

// A decorative trust badge — five stars plus a warm, unquantified line.
// Deliberately carries no number (no review count, no rating value like
// "5.0" or "4.9") and no schema.org Review/AggregateRating markup, since no
// verified rating or review count exists for this business. See
// lib/site-data.ts for why: nothing here should be a checkable claim that
// could later prove false.
export function LovedByDogsBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-bb-border bg-white px-4 py-2 shadow-sm font-bb-sans ${className}`}
    >
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-amber-400" />
        ))}
      </div>
      <span className="text-sm font-semibold text-bb-ink">Loved by Dogs Across Compton &amp; LA</span>
    </div>
  );
}
