import { sizePricing } from "@/lib/site-data";

// Shared size-based price table for Essential Bath and Full Dog Grooming —
// used on the homepage, Services hub, and both service detail pages so
// pricing reads the same everywhere.
//
// Below `sm`, this renders as stacked cards instead of a table. The table
// version needs a 520px min-width to keep four columns readable, which is
// wider than any phone screen — on mobile that silently clipped the "Full
// Dog Grooming" column off the right edge, inside its own horizontal-scroll
// container that nothing hinted a visitor should swipe. Visitors only ever
// saw the Essential Bath price. Cards put both prices in view with no
// scrolling required.
export function SizePricingTable({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid gap-3 sm:hidden">
        {sizePricing.map((tier) => (
          <div key={tier.size} className="rounded-2xl border border-psl-border bg-white p-4">
            <p className="font-semibold text-psl-ink">
              {tier.size} <span className="font-normal text-psl-ink-soft">({tier.weightRange})</span>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p className="text-sm text-psl-ink-soft">Essential Bath</p>
                <p className="text-lg font-bold text-psl-brass-dark">{tier.essentialBath}</p>
              </div>
              <div>
                <p className="text-sm text-psl-ink-soft">Full Dog Grooming</p>
                <p className="text-lg font-bold text-psl-brass-dark">{tier.fullGrooming}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto rounded-2xl border border-psl-border bg-white sm:block">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-psl-border">
              <th className="px-4 py-3 font-semibold text-psl-ink sm:px-6">Dog Size</th>
              <th className="px-4 py-3 font-semibold text-psl-ink sm:px-6">Weight</th>
              <th className="px-4 py-3 font-semibold text-psl-ink sm:px-6">Essential Bath</th>
              <th className="px-4 py-3 font-semibold text-psl-ink sm:px-6">Full Dog Grooming</th>
            </tr>
          </thead>
          <tbody>
            {sizePricing.map((tier) => (
              <tr key={tier.size} className="border-b border-psl-border last:border-0">
                <td className="px-4 py-3 font-semibold text-psl-ink sm:px-6">{tier.size}</td>
                <td className="px-4 py-3 text-psl-ink-soft sm:px-6">{tier.weightRange}</td>
                <td className="px-4 py-3 font-bold text-psl-brass-dark sm:px-6">{tier.essentialBath}</td>
                <td className="px-4 py-3 font-bold text-psl-brass-dark sm:px-6">{tier.fullGrooming}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
