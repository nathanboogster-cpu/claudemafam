import { sizeTiers, type SizeKey } from "@/lib/site-data";

export function PricingTable({
  pricing,
  className = "",
}: {
  pricing: Record<SizeKey, { price: string; duration: string }>;
  className?: string;
}) {
  return (
    <div className={`overflow-x-auto rounded-2xl border border-bb-border bg-white shadow-sm font-bb-sans ${className}`}>
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-bb-border bg-bb-cream-deep text-bb-ink">
            <th className="px-4 py-3 font-semibold">Size</th>
            <th className="px-4 py-3 font-semibold">Weight</th>
            <th className="px-4 py-3 font-semibold">Starting Price</th>
            <th className="px-4 py-3 font-semibold">Approx. Duration</th>
          </tr>
        </thead>
        <tbody>
          {sizeTiers.map((tier, i) => (
            <tr key={tier.key} className={i !== sizeTiers.length - 1 ? "border-b border-bb-border" : ""}>
              <td className="px-4 py-3 font-semibold text-bb-ink">{tier.label}</td>
              <td className="px-4 py-3 text-bb-ink-soft">{tier.weight}</td>
              <td className="px-4 py-3 font-bold text-bb-coral-dark">{pricing[tier.key].price}</td>
              <td className="px-4 py-3 text-bb-ink-soft">{pricing[tier.key].duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
