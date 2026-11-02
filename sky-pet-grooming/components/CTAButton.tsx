"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/track";
import { PATHS } from "@/lib/site-data";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover focus-visible:outline-brand",
  // Outline style: a solid Book (primary) paired with an outline secondary
  // action reads as a clear hierarchy without competing for attention.
  secondary:
    "bg-transparent text-brand border-2 border-brand hover:bg-brand-light/40 focus-visible:outline-brand",
  ghost: "bg-white text-ink border border-border hover:bg-sky-deep focus-visible:outline-ink",
};

export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

// No phone number or email has been verified, so booking is by request form
// only and "Request an Appointment" is the primary CTA everywhere. When the
// owner supplies a phone number, add a Call button beside it (see the
// CallButton in the I Love Dogs app).
export function BookButton({
  variant = "primary",
  label = "Request an Appointment",
  location,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  location: string;
  className?: string;
}) {
  return (
    <Link
      href={PATHS.book}
      onClick={() => trackEvent("book_click", { location })}
      className={`${buttonBaseClasses} ${variantClasses[variant]} ${className}`}
    >
      <CalendarIcon />
      {label}
    </Link>
  );
}

// Same look for a plain internal link, such as "How it works".
export function LinkButton({
  href,
  label,
  variant = "secondary",
  className = "",
}: {
  href: string;
  label: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonBaseClasses} ${variantClasses[variant]} ${className}`}>
      {label}
    </Link>
  );
}

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}
