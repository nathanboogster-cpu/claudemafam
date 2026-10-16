import { business } from "@/lib/site-data";

export type CtaWhere = "header" | "hero" | "body" | "bottom-cta" | "footer" | "sticky-bar";

// Booking is by phone only, so every primary CTA is a tel: link. The
// data-track/data-where attributes feed public/track.js.
export function CallButton({ where, className = "btn btn-primary" }: { where: CtaWhere; className?: string }) {
  return (
    <a href={business.phoneHref} className={className} data-track="call" data-where={where}>
      Call {business.phoneDisplay}
    </a>
  );
}

export function PhoneLink({ where }: { where: CtaWhere }) {
  return (
    <a href={business.phoneHref} data-track="call" data-where={where}>
      {business.phoneDisplay}
    </a>
  );
}

export function DirectionsLink({ where, className }: { where: CtaWhere; className?: string }) {
  return (
    <a href={business.mapsUrl} className={className} data-track="directions" data-where={where}>
      Get directions
    </a>
  );
}
