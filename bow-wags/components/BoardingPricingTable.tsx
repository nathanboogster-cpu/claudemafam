import { boardingPricing } from "@/lib/site-data";

// Current, published boarding nightly rates — see /rates for full context.
export function BoardingPricingTable({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-3">
        {boardingPricing.tiers.map((tier) => (
          <div key={tier.range} className="rounded-2xl border border-bw-border bg-white p-5 text-center">
            <p className="text-sm font-semibold text-bw-ink-soft">{tier.range}</p>
            <p className="mt-2 font-bw-display text-2xl font-bold text-bw-orange-dark">
              {tier.price}
              <span className="text-sm font-normal text-bw-ink-soft">{tier.unit}</span>
            </p>
          </div>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-bw-ink-soft">
        <li>• {boardingPricing.multiDogNote}</li>
        <li>• {boardingPricing.daycareIncludedNote}</li>
        <li>• House food: {boardingPricing.houseFoodFee}</li>
        <li>• Late checkout: {boardingPricing.latePickupFee}</li>
      </ul>
    </div>
  );
}
