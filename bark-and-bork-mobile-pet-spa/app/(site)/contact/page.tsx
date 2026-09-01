import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, CallButton } from "@/components/CTAButton";
import { StatBand } from "@/components/StatBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, hours, cancellationPolicy, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Book Online",
  description: `Book Bark and Bork Mobile Pet Spa online, or call ${business.phoneDisplay}. Mobile dog grooming based in Compton, CA, serving greater Los Angeles.`,
  path: PATHS.contact,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Contact", url: `${SITE_URL}${PATHS.contact}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Contact", href: PATHS.contact }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">
          Book Your Dog&apos;s Mobile Grooming Appointment
        </h1>
        <p className="mt-4 text-lg text-bb-ink-soft">
          The fastest way to schedule is online — choose your service, size, and time slot. You can also call us
          directly with any questions.
        </p>

        <div className="mt-10 rounded-3xl border border-bb-border bg-bb-cream-deep p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-bb-coral-dark">Book Online</p>
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block font-bb-display text-2xl font-bold text-bb-ink hover:text-bb-coral-dark sm:text-3xl"
          >
            barkandbork.glossgenius.com
          </a>
          <BookButton location="contact_page" variant="primary" className="mt-6" />

          <div className="mt-8 grid gap-6 border-t border-bb-border pt-8 text-left sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-bb-ink">Call or Text</p>
              <a href={business.phoneHref} className="mt-1 inline-block text-bb-ink-soft hover:text-bb-coral-dark">
                {business.phoneDisplay}
              </a>
              <CallButton location="contact_page" variant="secondary" className="mt-3" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-bb-ink">Hours</p>
              <ul className="mt-1 space-y-0.5 text-bb-ink-soft">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-sm">
                    <span>{h.day}</span>
                    <span className="whitespace-nowrap">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-bb-ink">Service Area</p>
              <p className="mt-1 text-sm text-bb-ink-soft">
                Home-based in {business.homeBase}, serving pet owners throughout {business.broadMarket}. We&apos;re
                mobile — there is no walk-in salon location.
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-bb-ink">Cancellation Policy</p>
              <p className="mt-1 text-sm text-bb-ink-soft">{cancellationPolicy}</p>
            </div>
          </div>
        </div>

        <StatBand className="mt-10" />
      </section>
    </>
  );
}
