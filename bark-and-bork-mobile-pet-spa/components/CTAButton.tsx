"use client";

import { trackEvent } from "@/lib/track";
import { business } from "@/lib/site-data";
import { PhoneIcon, CalendarCheckIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-bb-coral-dark text-white hover:bg-bb-coral-darker focus-visible:outline-bb-coral-dark",
  secondary: "bg-transparent text-bb-ink border-2 border-bb-ink hover:bg-bb-ink/5 focus-visible:outline-bb-ink",
  ghost: "bg-white text-bb-ink border border-bb-border hover:bg-bb-cream-deep focus-visible:outline-bb-ink",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-bb-sans";

// PRIMARY conversion action across the whole site: routes straight to the
// existing GlossGenius online booking platform. Never a fabricated internal
// booking form — see lib/site-data.ts `business.bookingUrl`.
export function BookButton({
  variant = "primary",
  label = "Book Now",
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
      href={business.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("bb_book_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <CalendarCheckIcon className="h-5 w-5" />
      {label}
    </a>
  );
}

// Secondary conversion action — phone call.
export function CallButton({
  variant = "secondary",
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
      onClick={() => trackEvent("bb_call_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

// Internal navigation CTA (View Services, Contact Us, etc.) — never used for
// the booking action itself.
export function SecondaryLinkButton({
  variant = "secondary",
  label,
  location,
  href,
  className = "",
}: {
  variant?: Variant;
  label: string;
  location: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={() => trackEvent("bb_secondary_click", { location, href })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
