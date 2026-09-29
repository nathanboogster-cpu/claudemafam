"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { offer } from "@/lib/site-data";
import { EVENTS, trackEvent } from "@/lib/track";
import { CheckIcon, ArrowRightIcon } from "./icons";

// The offer block. Fires a pricing_view event the first time it actually
// enters the viewport, so "saw the price" is measurable separately from
// "landed on the page" — the two are very different funnel steps.
//
// Kept short on purpose: the price, three badges for the terms, and the four
// inclusions as a checklist. Each inclusion links to its own page, which is
// where the explanation lives. This card appears on most pages, so every
// sentence here is a sentence the visitor reads several times.
const terms = ["Cancel anytime", "No contract", "No setup fee"];

export function PricingCard({ location, className = "" }: { location: string; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            trackEvent(EVENTS.pricingView, { location });
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [location]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl border border-tf-border-strong bg-tf-card ${className}`}
    >
      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="border-b border-tf-border bg-tf-ink p-7 text-white sm:p-8 md:border-b-0 md:border-r">
          <p className="tf-caps text-xs text-tf-bronze-light">Everything, one price</p>
          <p className="mt-4 flex items-baseline gap-1.5">
            <span className="font-tf-display text-5xl font-bold tracking-tight">{offer.priceDisplay}</span>
            <span className="text-lg text-white/70">/{offer.billingPeriod}</span>
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {terms.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white"
              >
                <CheckIcon className="h-3.5 w-3.5 text-tf-bronze-light" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-white/80">
            Covers the build and every month of work after it. No charge for pages we add later.
          </p>
          <Link
            href="/book"
            onClick={() => trackEvent(EVENTS.bookCallClick, { location: `${location}_pricing` })}
            className="mt-7 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-tf-ink transition-colors hover:bg-tf-paper-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a call
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="p-7 sm:p-8">
          <h3 className="font-tf-display text-lg font-bold text-tf-ink">What&rsquo;s included every month</h3>
          <ul className="mt-5 space-y-3">
            {offer.inclusions.map((item) => (
              <li key={item.number} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-tf-brown-dark" />
                <Link
                  href={item.href}
                  className="inline-block py-2 font-semibold text-tf-ink underline decoration-tf-border underline-offset-4 hover:text-tf-brown-dark hover:decoration-current"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
