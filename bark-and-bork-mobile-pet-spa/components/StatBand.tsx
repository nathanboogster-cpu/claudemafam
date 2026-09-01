import { trustStats } from "@/lib/site-data";

// A punchy, scannable row of verified trust stats — meant to be dropped in
// right after the hero (or reused on other key pages) so trust signals are
// visible above the fold, not buried at the bottom of the page.
export function StatBand({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 divide-x divide-y divide-bb-border rounded-3xl border border-bb-border bg-white shadow-sm sm:grid-cols-4 sm:divide-y-0 ${className}`}
    >
      {trustStats.map((s) => (
        <div key={s.label} className="flex flex-col items-center justify-center gap-1 px-4 py-6 text-center">
          <span className="font-bb-display text-2xl font-bold text-bb-coral-dark sm:text-3xl">{s.value}</span>
          <span className="text-xs font-semibold uppercase tracking-wide text-bb-ink-soft">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
