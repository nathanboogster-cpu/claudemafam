"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { offer } from "@/lib/site-data";
import { EVENTS, trackEvent } from "@/lib/track";
import { CheckIcon, ArrowRightIcon } from "./icons";

// The offer block. Fires a pricing_view event the first time it actually
// enters the viewport, so "saw the price" is measurable separately from
// "landed on the page" — the two are very different funnel steps.
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
      className={`overflow-hidden rounded-3xl border border-tf-border-strong bg-white ${className}`}
    >
      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="border-b border-tf-border bg-tf-ink p-8 text-white md:border-b-0 md:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tf-green-on-dark">Everything, one price</p>
          <p className="mt-4 flex items-baseline gap-1.5">
            <span className="font-tf-display text-5xl font-bold tracking-tight">{offer.priceDisplay}</span>
            <span className="text-lg text-white/70">/{offer.billingPeriod}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">{offer.commitment}</p>
          <p className="mt-6 text-sm leading-relaxed text-white/80">
            One price covers the build and the ongoing work. There is no separate website fee, no onboarding
            fee, and no per-page charge when we add a service or an area.
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

        <div className="p-8">
          <h3 className="font-tf-display text-lg font-bold text-tf-ink">What&rsquo;s included every month</h3>
          <ul className="mt-5 space-y-5">
            {offer.inclusions.map((item) => (
              <li key={item.number} className="flex gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-tf-green-dark" />
                <div>
                  <p className="font-semibold text-tf-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-tf-ink-soft">{item.summary}</p>
                  <Link
                    href={item.href}
                    className="mt-1.5 inline-block text-sm font-medium text-tf-green-dark underline underline-offset-4 hover:text-tf-green-darker"
                  >
                    {item.linkLabel}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
