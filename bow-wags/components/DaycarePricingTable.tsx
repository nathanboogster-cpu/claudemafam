import { daycarePricing, temperamentTest } from "@/lib/site-data";

// Current, published daycare rates — see /rates for the full breakdown and
// the "current published rates, subject to change" disclosure.
export function DaycarePricingTable({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-bw-border bg-white p-5">
          <p className="text-sm font-semibold text-bw-ink-soft">{daycarePricing.halfDay.label}</p>
          <p className="text-xs text-bw-ink-soft">{daycarePricing.halfDay.note}</p>
          <p className="mt-2 font-bw-display text-2xl font-bold text-bw-orange-dark">
            {daycarePricing.halfDay.price}
          </p>
        </div>
        <div className="rounded-2xl border border-bw-border bg-white p-5">
          <p className="text-sm font-semibold text-bw-ink-soft">{daycarePricing.fullDay.label}</p>
          <p className="text-xs text-bw-ink-soft">{daycarePricing.fullDay.note}</p>
          <p className="mt-2 font-bw-display text-2xl font-bold text-bw-orange-dark">
            {daycarePricing.fullDay.price}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-bw-border bg-white p-5">
        <p className="text-sm font-semibold text-bw-ink">Daycare Packages</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {daycarePricing.packages.map((p) => (
            <div key={p.label} className="flex items-center justify-between rounded-xl bg-bw-cream-deep/60 px-4 py-2.5">
              <span className="text-sm text-bw-ink-soft">{p.label}</span>
              <span className="font-bw-display text-lg font-bold text-bw-orange-dark">{p.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-bw-ink-soft">{daycarePricing.siblingDiscount}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-bw-border bg-bw-cream-deep/60 p-5">
        <p className="text-sm font-semibold text-bw-ink">{temperamentTest.name} ({temperamentTest.durationNote})</p>
        <p className="mt-1 font-bw-display text-xl font-bold text-bw-orange-dark">{temperamentTest.price}</p>
        <p className="mt-1 text-xs text-bw-ink-soft">Required before a dog&apos;s first daycare or boarding stay.</p>
      </div>
    </div>
  );
}
