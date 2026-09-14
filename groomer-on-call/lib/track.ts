// Conversion-tracking shim.
//
// No third-party tracker is installed by this file — the brief rules out
// unauthorized tracking, and no analytics account has been supplied for
// Groomer On Call. What this does is make every conversion action emit a
// consistently-named event so that whichever tool is chosen later (GA4 via
// GTM, Meta, a call-tracking provider) can be wired up in one place rather
// than hunted for across pages.
//
// Until then the only analytics actually loaded is Vercel Analytics, which
// is first-party to this project's own Vercel deployment.
//
// Every CTA also carries `data-goc-event` / `data-goc-location` attributes
// in the DOM, so a tag manager can bind to them declaratively without any
// code change at all.

export type ConversionEvent = "call_click" | "facebook_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackConversion(event: ConversionEvent, location: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, event_location: location });
}
