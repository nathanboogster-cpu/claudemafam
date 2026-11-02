"use client";

import { track } from "@vercel/analytics";

// Conversion tracking. There is no phone number yet, so the conversion is a
// Book Online click (book_click), which opens the MoeGo booking page. Sent as
// a Vercel Analytics custom event (queryable in the Vercel dashboard's
// Analytics tab), also pushed to window.dataLayer for a future GTM/GA
// snippet, and logged to the console in dev. Bookings themselves are in
// MoeGo.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  track(eventName, params);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (process.env.NODE_ENV !== "production") {
    console.log(`[track] ${eventName}`, params);
  }
}
