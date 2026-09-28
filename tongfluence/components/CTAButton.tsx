"use client";

import Link from "next/link";
import { EVENTS, trackEvent } from "@/lib/track";
import { PATHS } from "@/lib/site-data";
import { ArrowRightIcon } from "./icons";

type Variant = "primary" | "secondary" | "quiet";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-tf-brown-dark text-white hover:bg-tf-brown-darker focus-visible:outline-tf-brown-dark shadow-sm",
  secondary:
    "bg-white text-tf-ink border border-tf-border-strong hover:bg-tf-paper-deep focus-visible:outline-tf-ink",
  quiet:
    "!shadow-none bg-transparent text-tf-brown-dark hover:text-tf-brown-darker underline underline-offset-4 decoration-tf-brown/40 hover:decoration-tf-brown-darker focus-visible:outline-tf-brown-dark px-0 py-0 hover:!translate-y-0",
};

const base =
  "tf-cta inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

// The one dominant conversion action across the whole site. Wording is kept
// deliberately consistent ("Book a call") rather than varied per section, so
// a returning visitor recognises the same action everywhere.
export function BookCallButton({
  variant = "primary",
  label = "Book a call",
  location,
  className = "",
  showArrow = true,
}: {
  variant?: Variant;
  label?: string;
  location: string;
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <Link
      href={PATHS.book}
      onClick={() => trackEvent(EVENTS.bookCallClick, { location, label })}
      className={`${base} ${variantClasses[variant]} ${className}`}
    >
      {label}
      {showArrow ? <ArrowRightIcon className="h-4 w-4" /> : null}
    </Link>
  );
}

// Secondary CTAs (see the work, see what's included). Same tracking shape so
// the funnel is comparable between primary and secondary actions.
export function SecondaryCTA({
  href,
  label,
  location,
  variant = "secondary",
  className = "",
}: {
  href: string;
  label: string;
  location: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent(EVENTS.ctaClick, { location, label, destination: href })}
      className={`${base} ${variantClasses[variant]} ${className}`}
    >
      {label}
      <ArrowRightIcon className="h-4 w-4" />
    </Link>
  );
}
