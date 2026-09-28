"use client";

import { track } from "@vercel/analytics";

// ---------------------------------------------------------------------------
// CONVERSION TRACKING
//
// This site is an acquisition asset, so the funnel has to be measurable:
//   traffic -> lead -> booking -> customer
//
// Events are sent as Vercel Analytics custom events (queryable in the
// dashboard) and pushed to window.dataLayer so a GA4/GTM container can be
// added later without touching any component.
//
// Every event carries `location` (which block of which page fired it) so a
// low-converting section is identifiable, not just a low-converting page.
// ---------------------------------------------------------------------------

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const EVENTS = {
  ctaClick: "cta_click",
  bookCallClick: "book_call_click",
  pricingView: "pricing_view",
  caseStudyView: "case_study_view",
  videoPlay: "video_play",
  videoComplete: "video_complete",
  formStart: "form_start",
  formSubmit: "form_submit",
  formError: "form_error",
} as const;

export type TrackEventName = (typeof EVENTS)[keyof typeof EVENTS];

export function trackEvent(
  eventName: TrackEventName,
  params: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;

  // Preserve source attribution on every event so organic Google, Meta,
  // personal brand and referral traffic stay distinguishable downstream.
  const enriched = { ...attribution(), ...params };

  track(eventName, enriched);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...enriched });

  if (process.env.NODE_ENV !== "production") {
    console.log(`[track] ${eventName}`, enriched);
  }
}

// First-touch attribution, captured once per browser and reused for the rest
// of the visit. sessionStorage is deliberate: it keeps the original landing
// page and referrer attached to a conversion that happens five pages later,
// without persisting an identifier across visits.
const STORE_KEY = "tf_attribution";

type Attribution = {
  landing_page: string;
  referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export function attribution(): Attribution {
  const empty: Attribution = { landing_page: "", referrer: "" };
  if (typeof window === "undefined") return empty;

  try {
    const stored = window.sessionStorage.getItem(STORE_KEY);
    if (stored) return JSON.parse(stored) as Attribution;

    const params = new URLSearchParams(window.location.search);
    const captured: Attribution = {
      landing_page: window.location.pathname,
      referrer: document.referrer || "direct",
    };
    for (const key of ["source", "medium", "campaign", "content", "term"] as const) {
      const value = params.get(`utm_${key}`);
      if (value) captured[`utm_${key}` as keyof Attribution] = value.slice(0, 120);
    }

    window.sessionStorage.setItem(STORE_KEY, JSON.stringify(captured));
    return captured;
  } catch {
    // Private browsing, disabled storage, or a malformed stored value — the
    // event is still worth sending without attribution.
    return empty;
  }
}
