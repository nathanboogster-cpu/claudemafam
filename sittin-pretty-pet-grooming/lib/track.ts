"use client";

import { track } from "@vercel/analytics";

// Conversion tracking for Call to Schedule / phone CTA clicks. Sent as a
// Vercel Analytics custom event (queryable in the Vercel dashboard's
// Analytics tab, filtered by eventName sp_call_click) and pushed to
// window.dataLayer for a future GTM/GA snippet — logged to the console in
// dev. No booking system exists yet, so this is the only conversion event.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Self-hosted, uncapped click counter (Redis via /api/track) — additive to
// Vercel Analytics above, not a replacement. Vercel's free Hobby tier caps
// custom events at 2,500/month; only the one event that's an actual
// conversion (calling to schedule) goes here, not every trackEvent call.
const SELF_HOSTED_TRACKED_EVENTS = new Set(["sp_call_click"]);

export function trackEvent(eventName: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;

  track(eventName, params);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (SELF_HOSTED_TRACKED_EVENTS.has(eventName)) {
    const location = typeof params.location === "string" ? params.location : "unknown";
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: eventName, location }),
      keepalive: true,
    }).catch(() => {});
  }

  if (process.env.NODE_ENV !== "production") {
    console.log(`[track] ${eventName}`, params);
  }
}
