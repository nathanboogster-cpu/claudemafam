"use client";

import { business } from "@/lib/site-data";
import { trackEvent } from "@/lib/track";

export function MobileHeaderCall() {
  return (
    <a
      href={business.phoneHref}
      aria-label={`Call Pet Spa Luxe at ${business.phoneDisplay}`}
      onClick={() => trackEvent("psl_call_click", { location: "header_mobile" })}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-psl-brass-dark text-white"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </a>
  );
}
