import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CTAButton";
import { StatBand } from "@/components/StatBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, hours, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: `Call Flo's Happy Clipper at ${business.phoneDisplay} to schedule dog grooming at our Main St salon in Eatontown, NJ.`,
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
        <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
          Schedule Your Dog&apos;s Grooming Appointment
        </h1>
        <p className="mt-4 text-lg text-fh-ink-soft">
          We don&apos;t currently offer online booking — the fastest way to check availability and schedule
          is by phone.
        </p>

        <div className="mt-10 rounded-3xl border border-fh-border bg-fh-cream-deep p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-fh-amber-dark">Call to Schedule</p>
          <a href={business.phoneHref} className="mt-2 block font-fh-display text-4xl font-bold text-fh-ink hover:text-fh-amber-dark">
            {business.phoneDisplay}
          </a>
          <CallButton location="contact_page" variant="primary" className="mt-6" />

          <div className="mt-8 grid gap-6 border-t border-fh-border pt-8 text-left sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-fh-ink">Address</p>
              <p className="mt-1 text-fh-ink-soft">{business.addressFull}</p>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-fh-amber-dark hover:underline">
                Get Directions →
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-fh-ink">Hours</p>
              <ul className="mt-1 space-y-0.5 text-fh-ink-soft">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-sm">
                    <span>{h.day}</span>
                    <span className="whitespace-nowrap">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-fh-ink">Reviews</p>
              <a href={business.googleSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-fh-amber-dark hover:underline">
                See Flo&apos;s Happy Clipper on Google →
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-fh-border shadow-sm">
          <iframe
            title={`Map showing ${business.name}'s location in ${business.addressCity}, ${business.addressState}`}
            src={business.mapsEmbedUrl}
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <StatBand className="mt-10" />
      </section>
    </>
  );
}
