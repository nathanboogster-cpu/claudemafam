import type { Metadata } from "next";
import { business, hours, PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

const pageUrl = `${SITE_URL}${PATHS.contact}`;

export const metadata: Metadata = {
  title: "Contact & Book an Appointment | Pampered Puppies, Victorville CA",
  description:
    "Call or book an appointment online with Pampered Puppies at 15444 Bear Valley Rd, Ste A, Victorville, CA. Phone 760-881-3171.",
  alternates: { canonical: PATHS.contact },
};

export default function ContactPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Contact", href: PATHS.contact }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: pageUrl },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl text-center">
          Contact &amp; Book an Appointment
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
          Call us, or book an appointment online in a few clicks.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-bold text-ink">Get in Touch</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li>
                  <span className="block font-semibold text-ink">Phone</span>
                  <a href={business.phoneHref} className="hover:text-terracotta-dark">
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="block font-semibold text-ink">Email</span>
                  <a href={`mailto:${business.email}`} className="hover:text-terracotta-dark break-all">
                    {business.email}
                  </a>
                </li>
                <li>
                  <span className="block font-semibold text-ink">Address</span>
                  {business.addressFull}
                </li>
              </ul>
              <CallButton location="contact_sidebar" label="Call Now" className="mt-5 w-full" />
            </div>

            <PhotoPlaceholder
              caption="The Pampered Puppies storefront at 15444 Bear Valley Rd, Victorville, CA"
              aspect="portrait"
              src="/images/storefront-night.jpg"
            />

            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-bold text-ink">
                Hours{" "}
                <span className="text-xs font-normal text-ink-soft/70">(pending confirmation)</span>
              </h2>
              <ul className="mt-4 space-y-1 text-sm text-ink-soft">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map to Pampered Puppies, 15444 Bear Valley Rd, Ste A, Victorville, CA 92395"
                src={`https://www.google.com/maps?q=${business.mapEmbedQuery}&output=embed`}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-white p-10 text-center shadow-sm">
              <h2 className="font-display text-2xl font-bold text-ink">Book an Appointment</h2>
              <p className="mx-auto mt-3 max-w-md text-ink-soft">
                Schedule online in a few clicks, or call us directly and
                we&rsquo;ll get you set up.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <BookButton location="contact_main" />
                <CallButton location="contact_main" variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
