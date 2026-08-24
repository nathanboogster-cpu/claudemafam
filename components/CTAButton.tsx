"use client";

import { trackEvent } from "@/lib/track";
import { business } from "@/lib/site-data";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-dark focus-visible:outline-terracotta-dark",
  // Outline style — solid Call (primary) paired with an outline Book/secondary
  // action reads as a clear hierarchy without competing for attention.
  secondary:
    "bg-transparent text-terracotta-dark border-2 border-terracotta hover:bg-terracotta-light/10 focus-visible:outline-terracotta-dark",
  ghost:
    "bg-white text-ink border border-border hover:bg-cream-deep focus-visible:outline-ink",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-colors min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

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
      onClick={() => trackEvent("call_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

export function BookButton({
  variant = "secondary",
  label = "Book Now",
  location,
  href = business.bookingUrl,
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
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("book_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {label}
    </a>
  );
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
