import { PATHS, processSteps, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { BookingForm } from "@/components/BookingForm";
import { TrustBar } from "@/components/TrustBar";

export const metadata = pageMetadata({
  title: "Request a Mobile Grooming Appointment | Sky Pet Grooming",
  description:
    "Request a mobile pet grooming appointment with Sky Pet Grooming. Tell us where you are in California and about your pet, and we will get back to you.",
  path: PATHS.book,
});

export default function BookPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Book", href: PATHS.book }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Book", url: `${SITE_URL}${PATHS.book}` },
        ])}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <Eyebrow>Book</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">Request an Appointment</h1>
          <p className="mt-3 text-lg text-ink-soft">
            Tell us where you are and about your pet. We will get back to you to confirm a time.
          </p>
          <TrustBar className="mt-5" />
          <h2 className="mt-8 font-display text-xl font-bold text-ink">What happens next</h2>
          <ol className="mt-3 space-y-3">
            {processSteps.slice(1).map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-on-accent">
                  {i + 1}
                </span>
                <span className="text-sm text-ink-soft">
                  <span className="font-semibold text-ink">{step.title}.</span> {step.body}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <BookingForm />
      </section>
    </div>
  );
}
