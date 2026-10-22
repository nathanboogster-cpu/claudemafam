import { business, PATHS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { CallButton, DirectionsButton, DirectionsLink, PhoneLink } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata = pageMetadata({
  title: "Contact I Love Dogs Pet Grooming | Bryn Mawr, PA",
  description: "Call I Love Dogs Pet Grooming at 610-525-7387 or visit 723 County Line Rd, Bryn Mawr, PA 19010.",
  path: PATHS.contact,
});

export default function ContactPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Contact", href: PATHS.contact }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Contact", url: `${SITE_URL}${PATHS.contact}` },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Contact I Love Dogs</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-ink-soft">The fastest way to book is a phone call.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <CallButton location="contact_top" />
            <DirectionsButton location="contact_top" />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold text-ink">Address</h2>
            <address className="mt-3 not-italic text-ink-soft">
              {business.addressLine1}
              <br />
              {business.addressCity}, {business.addressState} {business.addressZip}
            </address>
            <DirectionsLink location="contact_address" className="mt-1 inline-flex min-h-[44px] items-center" />
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold text-ink">Hours</h2>
            <p className="mt-3 text-ink-soft">{business.hoursNote}</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold text-ink">Phone</h2>
            <PhoneLink location="contact_phone" className="mt-2 inline-flex min-h-[44px] items-center" />
          </div>
        </div>
      </section>
    </div>
  );
}
