"use client";

// Lightweight conversion tracking for Call Now / Book Now / Request Appointment
// clicks. No analytics vendor is wired up yet — this pushes to window.dataLayer
// (a no-op until a GTM/GA snippet is added) and logs to the console so click
// activity is visible in dev tools today and ready to feed a real tool later.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  if (process.env.NODE_ENV !== "production") {
    console.log(`[track] ${eventName}`, params);
  }
}
