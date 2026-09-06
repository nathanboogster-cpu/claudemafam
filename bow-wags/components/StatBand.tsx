import { trustPillars } from "@/lib/site-data";

// A punchy, scannable row of verified trust pillars — dropped in right
// after the hero so trust signals are visible above the fold.
export function StatBand({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 divide-x divide-y divide-bw-border rounded-3xl border border-bw-border bg-white shadow-sm sm:grid-cols-4 sm:divide-y-0 ${className}`}
    >
      {trustPillars.map((s) => (
        <div key={s.label} className="flex flex-col items-center justify-center gap-1 px-4 py-6 text-center">
          <span className="font-bw-display text-xl font-bold text-bw-orange-dark sm:text-2xl">{s.value}</span>
          <span className="text-xs font-semibold uppercase tracking-wide text-bw-ink-soft">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
