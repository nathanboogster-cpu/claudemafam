"use client";

import { trackEvent } from "@/lib/track";
import { business, PATHS } from "@/lib/site-data";
import { PhoneIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-fh-pink-dark to-fh-pink-darker text-white shadow-md shadow-fh-pink-dark/25 hover:shadow-lg hover:shadow-fh-pink-dark/35 hover:-translate-y-0.5 focus-visible:outline-fh-pink-dark",
  secondary:
    "bg-transparent text-fh-ink border-2 border-fh-ink hover:bg-fh-ink hover:text-white hover:-translate-y-0.5 focus-visible:outline-fh-ink",
  ghost:
    "bg-white text-fh-ink border border-fh-border shadow-sm hover:border-fh-pink-dark/40 hover:bg-fh-cream-deep hover:-translate-y-0.5 focus-visible:outline-fh-ink",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-fh-sans";

export function CallButton({
  variant = "primary",
  label = "Call to Schedule",
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
      onClick={() => trackEvent("fh_call_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

// No verified online scheduling system exists for Flo's Happy Clipper, so
// "viewing services" or "contacting" routes to real pages rather than a
// fabricated booking widget.
export function SecondaryLinkButton({
  variant = "secondary",
  label,
  location,
  href = PATHS.services,
  className = "",
}: {
  variant?: Variant;
  label: string;
  location: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={() => trackEvent("fh_secondary_click", { location, href })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
