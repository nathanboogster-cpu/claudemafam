"use client";

import { trackEvent } from "@/lib/track";
import { business, PATHS } from "@/lib/site-data";
import { PhoneIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-bw-orange-dark text-white hover:bg-bw-orange-darker focus-visible:outline-bw-orange-dark",
  secondary:
    "bg-transparent text-bw-ink border-2 border-bw-ink hover:bg-bw-ink/5 focus-visible:outline-bw-ink",
  ghost: "bg-white text-bw-ink border border-bw-border hover:bg-bw-cream-deep focus-visible:outline-bw-ink",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-bw-sans";

export function CallButton({
  variant = "primary",
  label = "Call Now",
  location,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  location: string;
  className?: string;
}) {
  return (
    <a
      href={business.phoneHref}
      onClick={() => trackEvent("bw_call_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

// Bow Wags manages reservations by phone (temperament test scheduling,
// daycare, and boarding). This routes to the internal /reservations page,
// which explains the process and puts the phone number front and center —
// never a fabricated instant-booking widget.
export function ReserveButton({
  variant = "secondary",
  label = "Make a Reservation",
  location,
  href = PATHS.reservations,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  location: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={() => trackEvent("bw_reserve_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
