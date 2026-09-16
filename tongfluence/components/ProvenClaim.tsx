import { headlineResult } from "@/lib/site-data";

// Renders the headline performance claim with its evidence attached, or
// nothing at all when there is no evidence yet.
//
// The shape is deliberate: a claim on this site never appears without the
// metric, sample, period, source and method beside it. That is the same
// standard the case studies hold themselves to, applied to the one
// cross-client number the business wants to lead with.
export function ProvenClaim() {
  if (!headlineResult) return null;

  const rows: [string, string][] = [
    ["Metric", headlineResult.metric],
    ["Sample", headlineResult.sample],
    ["Period", headlineResult.period],
    ["Source", headlineResult.source],
    ["Method", headlineResult.method],
  ];

  return (
    <figure className="m-0 mt-8 rounded-3xl border border-tf-border bg-white p-6 sm:p-8">
      <p className="font-tf-display text-2xl font-bold text-tf-ink sm:text-3xl">
        {headlineResult.claim}
      </p>
      <figcaption className="mt-5 border-t border-tf-border pt-5">
        <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt className="tf-caps text-[0.65rem] text-tf-ink-soft">{label}</dt>
              <dd className="mt-0.5 text-sm leading-relaxed text-tf-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </figcaption>
    </figure>
  );
}
