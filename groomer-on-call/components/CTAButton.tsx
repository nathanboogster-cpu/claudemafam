import Link from "next/link";
import { business } from "@/lib/site-data";
import { PhoneIcon, ArrowIcon } from "./icons";

// NOTE: this file is deliberately NOT a client component.
//
// Every CTA on the site used to be a client component purely so it could fire
// an onClick tracking call, which meant the React client runtime was pulled in
// on every page for what is, in the end, a link. Tracking now happens through
// a single delegated document listener (components/ConversionTracking.tsx)
// that reads the `data-goc-event` attributes rendered below — so these are
// plain server-rendered anchors, and the pages that contain only CTAs ship no
// component JavaScript at all.

const shell =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold " +
  "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

const variants = {
  /** Magenta fill, white text — 6.1:1. The primary conversion action. */
  primary: `${shell} bg-goc-magenta-dark text-white shadow-lg shadow-goc-magenta-dark/25 hover:bg-goc-magenta-darker`,
  /** Orange fill, near-black text — for dark surfaces. */
  accent: `${shell} bg-goc-orange text-goc-ink shadow-lg shadow-black/20 hover:brightness-105`,
  /** Outlined, secondary action on light surfaces. */
  outline: `${shell} border-2 border-goc-ink/15 bg-white text-goc-ink hover:border-goc-magenta-dark hover:text-goc-magenta-darker`,
  /** Outlined, secondary action on dark surfaces. */
  ghost: `${shell} border-2 border-white/30 text-white hover:border-white hover:bg-white/10`,
} as const;

export type CTAVariant = keyof typeof variants;

/**
 * The site's primary conversion action. Always a real <a href="tel:">, so it
 * is a one-tap call on a phone and a crawlable link to a search engine.
 *
 * `location` names where on the site the click happened, so call volume can
 * later be attributed to a section rather than to the site as a whole.
 */
export function CallButton({
  location,
  variant = "primary",
  label,
  className = "",
}: {
  location: string;
  variant?: CTAVariant;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={business.phoneHref}
      data-goc-event="call_click"
      data-goc-location={location}
      className={`${variants[variant]} ${className}`}
    >
      <PhoneIcon className="h-5 w-5" />
      <span>{label ?? `Call ${business.phoneDisplay}`}</span>
    </a>
  );
}

/** Secondary navigation CTA — an internal link, crawlable, never a JS button. */
export function SecondaryLinkButton({
  href,
  label,
  variant = "outline",
  className = "",
  withArrow = true,
}: {
  href: string;
  label: string;
  variant?: CTAVariant;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      <span>{label}</span>
      {withArrow ? <ArrowIcon className="h-4 w-4" /> : null}
    </Link>
  );
}
