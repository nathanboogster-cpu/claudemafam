"use client";

import { useEffect } from "react";
import { trackConversion, type ConversionEvent } from "@/lib/track";

/**
 * One delegated click listener for the whole site.
 *
 * Every conversion element on the site renders `data-goc-event` and
 * `data-goc-location` attributes. This picks those clicks up from the document
 * root, so no individual button, link or bar has to be a client component to
 * be measurable — which is what keeps the CTA-heavy pages shipping almost no
 * component JavaScript.
 *
 * It is also why a tag manager can bind to the same attributes later without
 * touching any component: the DOM contract is the attributes, not this file.
 */
export function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-goc-event]");
      if (!el) return;
      const name = el.dataset.gocEvent as ConversionEvent | undefined;
      if (!name) return;
      trackConversion(name, el.dataset.gocLocation ?? "unknown");
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
