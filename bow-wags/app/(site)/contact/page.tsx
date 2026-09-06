import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, ReserveButton } from "@/components/CTAButton";
import { StatBand } from "@/components/StatBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, hours, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact Bow Wags in Marietta, GA — call (678) 744-9247, email dave@bowwags.com, or get directions to 1691 Powder Springs Rd SW.",
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
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">Get in Touch With Bow Wags</h1>
        <p className="mt-4 text-lg text-bw-ink-soft">
          Call to reserve daycare or boarding, schedule a temperament test, or book
          a grooming appointment. Email works too for non-urgent questions.
        </p>

        <div className="mt-10 rounded-3xl border border-bw-border bg-bw-cream-deep p-8 text-left sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-bw-orange-dark">Call</p>
              <a href={business.phoneHref} className="mt-1 block font-bw-display text-3xl font-bold text-bw-ink hover:text-bw-orange-dark">
                {business.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-bw-ink-soft">Also known as {business.phoneDisplayWags}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-bw-orange-dark">Email</p>
              <a href={`mailto:${business.email}`} className="mt-1 block text-lg font-semibold text-bw-ink hover:text-bw-orange-dark">
                {business.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-bw-ink">Address</p>
              <p className="mt-1 text-bw-ink-soft">{business.addressFull}</p>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-bw-orange-dark hover:underline"
              >
                Get Directions →
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-bw-ink">Hours</p>
              <ul className="mt-1 space-y-0.5 text-sm text-bw-ink-soft">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="whitespace-nowrap">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-bw-border pt-8">
            <CallButton location="contact_page" variant="primary" />
            <ReserveButton location="contact_page" variant="secondary" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-bw-border shadow-sm">
          <iframe
            title={`Map showing ${business.name}'s location in ${business.addressCity}, ${business.addressState}`}
            src={business.mapsEmbedUrl}
            width="100%"
            height="380"
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
