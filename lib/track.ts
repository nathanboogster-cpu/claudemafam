"use client";

import { track } from "@vercel/analytics";

// Conversion tracking for Call Now / Book Now / Request Appointment clicks.
// Sent as a Vercel Analytics custom event (queryable in the Vercel dashboard's
// Analytics tab, or via the Vercel API, filtered by eventName call_click /
// book_click) — also pushed to window.dataLayer for a future GTM/GA snippet,
// and logged to the console in dev.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  track(eventName, params);

  if (eventName === "call_click" || eventName === "book_click") {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: eventName, location: params.location }),
      keepalive: true,
    }).catch(() => {});
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (process.env.NODE_ENV !== "production") {
    console.log(`[track] ${eventName}`, params);
  }
}
