import { sizePricing } from "@/lib/site-data";

// Shared size-based price table for Essential Bath and Full Dog Grooming —
// used on the homepage, Services hub, and both service detail pages so
// pricing reads the same everywhere.
export function SizePricingTable({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-x-auto rounded-2xl border border-psl-border bg-white ${className}`}>
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
  );
}
