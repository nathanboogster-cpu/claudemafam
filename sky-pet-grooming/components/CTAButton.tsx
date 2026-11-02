"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/track";
import { BOOKING_URL, business } from "@/lib/site-data";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variantClasses: Record<Variant, string> = {
  // Pink, from the van: the one colour reserved for the main action.
  primary: "bg-accent text-on-accent shadow-md shadow-accent/25 hover:bg-accent-hover focus-visible:outline-brand",
  secondary: "bg-white text-brand border-2 border-brand hover:bg-brand-light/50 focus-visible:outline-brand",
  ghost: "bg-white text-ink border border-border hover:bg-sky-deep focus-visible:outline-ink",
  // For dark and gradient backgrounds.
  light: "bg-white/10 text-white border-2 border-white/80 hover:bg-white/20 focus-visible:outline-white",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-colors min-h-[48px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

// Book Online opens the owner's MoeGo page in a new tab. It is the primary
// action everywhere; Call sits beside it as the secondary one.
export function BookButton({
  variant = "primary",
  label = "Book Online",
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
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("book_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <CalendarIcon />
      {label}
    </a>
  );
}

export function CallButton({
  variant = "secondary",
  label = `Call ${business.phone.display}`,
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
      href={business.phone.href}
      onClick={() => trackEvent("call_click", { location })}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <PhoneIcon />
      {label}
    </a>
  );
}

// Round icon-only Call button for the mobile header.
export function CallIconButton({ location }: { location: string }) {
  return (
    <a
      href={business.phone.href}
      aria-label={`Call ${business.name} at ${business.phone.display}`}
      onClick={() => trackEvent("call_click", { location })}
      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand text-brand"
    >
      <PhoneIcon className="h-5 w-5" />
    </a>
  );
}

// Inline phone link for body copy, the header and the footer.
export function PhoneLink({
  which = "phone",
  location,
  className = "",
}: {
  which?: "phone" | "phoneAlt";
  location: string;
  className?: string;
}) {
  const p = business[which];
  return (
    <a
      href={p.href}
      onClick={() => trackEvent("call_click", { location })}
      className={`font-semibold text-brand hover:underline ${className}`}
    >
      {p.display}
    </a>
  );
}

// Same look for a plain internal link, such as "See our work".
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
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {label}
    </Link>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
