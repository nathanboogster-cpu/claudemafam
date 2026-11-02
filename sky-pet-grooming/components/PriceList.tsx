import { confirmedPrices, fees, formatPrice, type ServiceKey } from "@/lib/site-data";

// Confirmed prices (lib/site-data.ts) as a simple two-column list: for one
// service, or every confirmed price when `service` is omitted. The matted-coat
// charge and travel fee are always listed after them.
export function PriceList({ service, className = "" }: { service?: ServiceKey; className?: string }) {
  const rows = service ? (confirmedPrices[service] ?? []) : Object.values(confirmedPrices).flat();
  const all = [
    ...rows,
    { label: "Matted coat, extra charge", amount: fees.matted },
    { label: "Travel fee", amount: fees.travel },
  ];
  return (
    <dl className={`divide-y divide-border rounded-2xl border border-border bg-white ${className}`}>
      {all.map((r) => (
        <div key={r.label} className="flex items-baseline justify-between gap-4 px-4 py-3">
          <dt className="text-ink-soft">{r.label}</dt>
          <dd className="text-lg font-bold tabular-nums text-ink">{formatPrice(r.amount)}</dd>
        </div>
      ))}
    </dl>
  );
}
