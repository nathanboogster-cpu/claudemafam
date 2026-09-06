import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import { CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, groomer, groomingServices, groomingEquipment, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming in Marietta, GA",
  description:
    "Full-service dog grooming for all breeds at Bow Wags in Marietta, GA — bathing, haircuts, nail grinding, ear and teeth cleaning, and deshedding. Call for rates and appointments.",
  path: PATHS.dogGrooming,
});

const groomingFaqs = [
  {
    question: "What grooming services does Bow Wags offer?",
    answer: `Full-service grooming for all breeds, including ${groomingServices.join(", ").toLowerCase()}.`,
  },
  {
    question: "How much does grooming cost?",
    answer: `Bow Wags doesn't publish fixed grooming prices online since pricing depends on breed, size, and coat condition. Call ${business.phoneDisplay} for current rates and to book an appointment.`,
  },
  {
    question: "Who grooms the dogs at Bow Wags?",
    answer: `Cynthia has groomed at Bow Wags since ${groomer.since}. Her background includes starting as a bather in 2010 and a grooming apprenticeship beginning in 2014, and she's Pet CPR and First Aid Certified.`,
  },
  {
    question: "How do I book a grooming appointment?",
    answer: `Call ${business.phoneDisplay} to schedule — Bow Wags books grooming appointments by phone.`,
  },
];

export default function DogGroomingPage() {
  const pageUrl = `${SITE_URL}${PATHS.dogGrooming}`;
  return (
    <>
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Dog Grooming",
          description: "Full-service dog grooming for all breeds in Marietta, GA and West Cobb.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Dog Grooming", url: pageUrl },
        ])}
      />
      <JsonLd data={faqSchema(groomingFaqs)} />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Dog Grooming", href: PATHS.dogGrooming }]} />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Dog Grooming • Marietta, GA</Eyebrow>
            <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">
              Full-Service Grooming for All Breeds
            </h1>
            <p className="mt-4 text-lg text-bw-ink-soft">
              From a warm bath to a full breed-specific haircut, Bow Wags&apos;
              professional grooming salon handles every dog&apos;s grooming needs at
              our Marietta, GA facility.
            </p>
            <div className="mt-6 rounded-2xl border border-bw-border bg-bw-cream-deep/60 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-bw-ink-soft">Call for Grooming Rates &amp; Appointments</p>
              <a href={business.phoneHref} className="mt-1 block font-bw-display text-3xl font-bold text-bw-ink hover:text-bw-orange-dark">
                {business.phoneDisplay}
              </a>
            </div>
            <div className="mt-6">
              <CallButton location="grooming_hero" variant="primary" label="Call to Book Grooming" />
            </div>
          </div>
          <PhotoPlaceholder caption="Freshly groomed dog at Bow Wags" aspect="square" className="w-full" priority />
        </div>
      </section>

      {/* Services list */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Grooming Services</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">What&apos;s Offered</h2>
          </div>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {groomingServices.map((s) => (
              <li key={s} className="flex items-center gap-2 rounded-xl border border-bw-border bg-white p-4 text-sm text-bw-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-bw-teal-dark" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-bw-ink-soft">
            Additional services may be available depending on your dog&apos;s coat and needs — call to ask.
          </p>
        </div>
      </section>

      {/* Groomer bio */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <PhotoPlaceholder caption="Cynthia, groomer at Bow Wags" aspect="portrait" className="w-full" />
          <div>
            <Eyebrow>Meet Your Groomer</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Cynthia</h2>
            <p className="mt-3 text-bw-ink-soft">
              Cynthia has groomed at Bow Wags since {groomer.since}. Her guiding
              philosophy: &ldquo;{groomer.philosophy}.&rdquo; {groomer.philosophyExplained}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-bw-ink-soft">
              {groomer.background.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-bw-teal-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {groomer.certifications.map((c) => (
                <span key={c} className="rounded-full bg-bw-teal/10 px-3 py-1 text-xs font-semibold text-bw-teal-dark">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & safety */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Grooming Safety &amp; Comfort</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Equipment That Puts Dogs First</h2>
          </div>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3">
            {groomingEquipment.map((item) => (
              <li key={item} className="flex gap-2 rounded-xl border border-bw-border bg-white p-4 text-sm text-bw-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-bw-teal-dark" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Ready to Book Grooming?</h2>
        <p className="mt-3 text-bw-ink-soft">
          Bow Wags books grooming appointments by phone — call {business.phoneDisplay} for current rates and availability.
        </p>
        <div className="mt-6">
          <CallButton location="grooming_cta" variant="primary" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={groomingFaqs} eyebrow="Grooming FAQ" />
      </section>
    </>
  );
}
