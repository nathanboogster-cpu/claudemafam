"use client";

import { trackEvent } from "@/lib/track";
import { business, PATHS } from "@/lib/site-data";
import { PhoneIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-sp-green-dark text-white hover:bg-sp-green-darker focus-visible:outline-sp-green-dark",
  secondary: "bg-transparent text-sp-ink border-2 border-sp-ink hover:bg-sp-ink/5 focus-visible:outline-sp-ink",
  ghost: "bg-white text-sp-ink border border-sp-border hover:bg-sp-cream-deep focus-visible:outline-sp-ink",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-sp-sans";

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
      onClick={() => trackEvent("sp_call_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

// No verified online scheduling system exists for Sittin' Pretty, so
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
      onClick={() => trackEvent("sp_secondary_click", { location, href })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
