import { business } from "@/lib/site-data";

export function StudioInfoCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-white p-6 shadow-sm ${className}`}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta-dark">
            Address
          </p>
          <p className="mt-1 text-sm text-ink">{business.addressFull}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta-dark">
            Phone
          </p>
          <p className="mt-1 text-sm text-ink">{business.phoneDisplay}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta-dark">
            Hours <span className="normal-case font-normal text-ink-soft/70">(pending confirmation)</span>
          </p>
          <p className="mt-1 text-sm text-ink">
            Mon–Tue &amp; Thu–Sun, 10am–5pm · Closed Wed
          </p>
        </div>
      </div>
    </div>
  );
}
