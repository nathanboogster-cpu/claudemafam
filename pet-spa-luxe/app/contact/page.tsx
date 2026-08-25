import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CTAButton";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { business, hoursNote, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Pet Spa Luxe",
  description:
    "Call Pet Spa Luxe at (650) 576-1194 to schedule mobile dog grooming in El Sobrante, CA and the surrounding Bay Area.",
  alternates: { canonical: PATHS.contact },
};

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
        <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
          Book Your Dog&apos;s Mobile Grooming Appointment
        </h1>
        <p className="mt-4 text-lg text-psl-ink-soft">
          Pet Spa Luxe doesn&apos;t use an online booking system — the fastest
          way to check availability and schedule is by phone.
        </p>

        <div className="mt-10 rounded-3xl border border-psl-border bg-psl-cream-deep p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-psl-brass-dark">Call to Book</p>
          <a
            href={business.phoneHref}
            className="mt-2 block font-psl-display text-4xl font-bold text-psl-ink hover:text-psl-brass-dark"
          >
            {business.phoneDisplay}
          </a>
          <CallButton location="contact_page" variant="primary" className="mt-6" />

          <div className="mt-8 grid gap-6 border-t border-psl-border pt-8 text-left sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-psl-ink">Based In</p>
              <p className="mt-1 text-psl-ink-soft">{business.addressFull}</p>
              <p className="mt-1 text-xs text-psl-ink-soft/70">
                Mobile service base — Pet Spa Luxe grooms at your location, not a walk-in storefront.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-psl-ink">Hours</p>
              <p className="mt-1 text-psl-ink-soft">{hoursNote}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-psl-ink">Reviews</p>
              <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-psl-brass-dark hover:underline">
                See Pet Spa Luxe on Yelp →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
