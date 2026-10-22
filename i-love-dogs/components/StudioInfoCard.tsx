import { business } from "@/lib/site-data";
import { DirectionsLink, PhoneLink } from "./CTAButton";

export function StudioInfoCard({ className = "", location }: { className?: string; location: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-white p-6 shadow-sm ${className}`}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">Salon</p>
          <address className="mt-1 not-italic text-sm text-ink">
            {business.addressLine1}
            <br />
            {business.addressCity}, {business.addressState} {business.addressZip}
          </address>
          <DirectionsLink location={location} className="mt-1 inline-flex min-h-[44px] items-center text-sm" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">Phone</p>
          <PhoneLink location={location} className="mt-1 inline-flex min-h-[44px] items-center text-sm" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">Hours</p>
          <p className="mt-1 text-sm text-ink">{business.hoursNote}</p>
        </div>
      </div>
    </div>
  );
}
