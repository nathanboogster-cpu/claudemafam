"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EVENTS, trackEvent } from "@/lib/track";
import { PATHS, offer } from "@/lib/site-data";

// Persistent mobile conversion bar. Hidden on the booking page itself, where
// it would sit on top of the form it points at.
export function StickyMobileCTA() {
  const pathname = usePathname();
  if (pathname === PATHS.book) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-tf-border bg-white/97 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <div className="min-w-0">
          <p className="font-tf-display text-base font-bold leading-tight text-tf-ink">{offer.priceLine}</p>
          <p className="truncate text-xs text-tf-ink-soft">Cancel anytime</p>
        </div>
        <Link
          href={PATHS.book}
          onClick={() => trackEvent(EVENTS.bookCallClick, { location: "sticky_mobile_bar" })}
          className="tf-cta inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-tf-brown-dark px-6 text-sm font-semibold text-white hover:bg-tf-brown-darker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
}
