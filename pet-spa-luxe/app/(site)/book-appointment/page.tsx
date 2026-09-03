import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CTAButton";
import { LeadForm } from "@/components/LeadForm";
import { StatBand } from "@/components/StatBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Book Appointment",
  description:
    "Request a mobile dog grooming appointment with Pet Spa Luxe in El Sobrante, CA and the surrounding Bay Area. We'll call you back to confirm.",
  path: PATHS.bookAppointment,
});

export default function BookAppointmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Book Appointment", url: `${SITE_URL}${PATHS.bookAppointment}` },
        ])}
      />
      <Breadcrumbs
        items={[{ name: "Home", href: PATHS.home }, { name: "Book Appointment", href: PATHS.bookAppointment }]}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Eyebrow>Book Appointment</Eyebrow>
        <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
          Book Your Dog&apos;s Mobile Grooming Appointment
        </h1>
        <p className="mt-4 text-lg text-psl-ink-soft">
          Pet Spa Luxe doesn&apos;t use an instant online booking system — send
          your info below and we&apos;ll call you back to confirm availability,
          or call now for the fastest response.
        </p>

        <div className="mt-10 text-left">
          <LeadForm location="book_appointment_page" />
        </div>

        <div className="mt-8 rounded-3xl border border-psl-border bg-psl-cream-deep p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-psl-brass-dark">
            Prefer to Call?
          </p>
          <a
            href={business.phoneHref}
            className="mt-2 block font-psl-display text-3xl font-bold text-psl-ink hover:text-psl-brass-dark"
          >
            {business.phoneDisplay}
          </a>
          <CallButton location="book_appointment_page" variant="primary" className="mt-4" />
        </div>

        <StatBand className="mt-10" />
      </section>
    </>
  );
}
