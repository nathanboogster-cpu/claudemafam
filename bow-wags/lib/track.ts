"use client";

import { track } from "@vercel/analytics";

// Conversion tracking for Call / Reserve / Schedule clicks. Sent as a Vercel
// Analytics custom event (queryable in the Vercel dashboard's Analytics tab)
// and pushed to window.dataLayer for a future GTM/GA snippet.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Self-hosted, uncapped click counter (Redis via /api/track) — additive to
// Vercel Analytics above, not a replacement. Vercel's free Hobby tier caps
// custom events at 2,500/month; only the events actually worth tracking
// against that cap go here, not every trackEvent call.
const SELF_HOSTED_TRACKED_EVENTS = new Set(["bw_call_click", "bw_reserve_click"]);

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
