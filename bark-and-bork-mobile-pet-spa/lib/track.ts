"use client";

import { track } from "@vercel/analytics";

// Conversion tracking for Book Now / Call CTA clicks. Sent as a Vercel
// Analytics custom event (queryable in the Vercel dashboard's Analytics tab)
// and pushed to window.dataLayer for a future GTM/GA snippet — logged to the
// console in dev.

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
