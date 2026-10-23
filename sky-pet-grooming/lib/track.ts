"use client";

import { track } from "@vercel/analytics";

// Conversion tracking. There is no phone number yet, so the conversions are
// Book button clicks (book_click) and sent request forms (booking_request).
// Sent as Vercel Analytics custom events (queryable in the Vercel dashboard's
// Analytics tab), also pushed to window.dataLayer for a future GTM/GA
// snippet, and logged to the console in dev. Every sent request is also
// stored server-side and listed at /requests (see lib/requests-store.ts).

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
