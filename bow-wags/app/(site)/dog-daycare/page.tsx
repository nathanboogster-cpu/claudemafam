import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReserveButton, CallButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import { DaycarePricingTable } from "@/components/DaycarePricingTable";
import { CheckIcon, SyringeIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import {
  business,
  daycarePlayrooms,
  daycareOutdoor,
  vaccinationRequirements,
  temperamentTest,
  PATHS,
  SITE_URL,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Dog Daycare in Marietta, GA",
  description:
    "Bow Wags dog daycare in Marietta, GA: size-appropriate indoor playrooms, secure outdoor play areas, and fully supervised care. See current pricing and requirements.",
  path: PATHS.dogDaycare,
});

const daycareFaqs = [
  {
    question: "How are dogs grouped during daycare?",
    answer: "Dogs play in separate playrooms grouped by size and appropriate temperament — small/toy, medium, and large — both indoors and in the outdoor play areas.",
  },
  {
    question: "What does daycare cost?",
    answer: "A half day (up to 6 hours) is currently $26 and a full day (over 6 hours) is currently $39, with multi-visit packages available. See the current rates below or on the Rates page — pricing is subject to change.",
  },
  {
    question: "Does my dog need anything before their first daycare visit?",
    answer: `Yes — a 4-hour temperament test (${temperamentTest.price}) and current Rabies, Distemper, and Bordetella vaccinations. Call ${business.phoneDisplay} to schedule the assessment.`,
  },
  {
    question: "How do I reserve a daycare spot?",
    answer: `Call ${business.phoneDisplay} to reserve a daycare day or ask about scheduling your dog's temperament test.`,
  },
];

export default function DogDaycarePage() {
  const pageUrl = `${SITE_URL}${PATHS.dogDaycare}`;
  return (
    <>
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Dog Daycare",
          description:
            "Size-appropriate indoor playrooms and secure outdoor play areas, fully supervised, for dogs in Marietta, GA and West Cobb.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Dog Daycare", url: pageUrl },
        ])}
      />
      <JsonLd data={faqSchema(daycareFaqs)} />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Dog Daycare", href: PATHS.dogDaycare }]} />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Dog Daycare • Marietta, GA</Eyebrow>
            <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">
              Clean, Safe, Fully Supervised Dog Daycare
            </h1>
            <p className="mt-4 text-lg text-bw-ink-soft">
              At {business.addressFull}, dogs play in size-appropriate indoor
              playrooms and a secure outdoor playground — supervised socialization
              and exercise for working and busy dog owners in Marietta and West Cobb.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ReserveButton location="daycare_hero" variant="primary" label="Reserve Daycare" />
              <CallButton location="daycare_hero" variant="secondary" label="Schedule Temperament Test" />
            </div>
          </div>
          <PhotoPlaceholder caption="Dogs playing in a Bow Wags size-appropriate playroom" aspect="square" className="w-full" priority />
        </div>
      </section>

      {/* What's included */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>What&apos;s Included</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Indoor Playrooms &amp; Outdoor Play</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {daycarePlayrooms.map((room) => (
              <div key={room.title} className="rounded-2xl border border-bw-border bg-white p-6">
                <p className="font-bw-display text-lg font-bold text-bw-ink">{room.title}</p>
                <p className="mt-2 text-sm text-bw-ink-soft">{room.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-bw-border bg-white p-6">
            <p className="font-semibold text-bw-ink">Outdoor Play</p>
            <ul className="mt-3 space-y-2 text-sm text-bw-ink-soft">
              {daycareOutdoor.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-bw-teal-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Why Daycare</Eyebrow>
          <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Built for Busy Dog Owners</h2>
        </div>
        <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-sm text-bw-ink-soft sm:grid-cols-2">
          {[
            "Indoor and outdoor play every visit",
            "Supervised socialization with size-matched playmates",
            "Exercise and stimulation during the workday",
            "A safe, controlled environment",
            "Convenient half-day and full-day options",
            "Multi-visit packages for regular daycare dogs",
          ].map((b) => (
            <li key={b} className="flex gap-2 rounded-xl border border-bw-border bg-white p-4">
              <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-bw-teal-dark" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Current Rates</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Daycare Pricing</h2>
            <p className="mt-2 text-sm text-bw-ink-soft">Current published rates — subject to change. See the full Rates page for boarding and grooming.</p>
          </div>
          <DaycarePricingTable className="mt-8" />
        </div>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl border border-bw-border bg-white p-8 text-center sm:p-10">
          <SyringeIcon className="mx-auto h-8 w-8 text-bw-orange-dark" />
          <h2 className="mt-3 font-bw-display text-2xl font-bold text-bw-ink">Before Your Dog&apos;s First Day</h2>
          <p className="mt-3 text-bw-ink-soft">
            A 4-hour temperament test ({temperamentTest.price}) is required before a dog&apos;s
            first daycare visit. Dogs must also have current {vaccinationRequirements.join(", ")}{" "}
            vaccinations. Call {business.phoneDisplay} to schedule.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton location="daycare_requirements" variant="primary" label="Call to Schedule" />
            <ReserveButton location="daycare_requirements" variant="ghost" label="Full Requirements" href={PATHS.requirements} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FaqBlock items={daycareFaqs} eyebrow="Daycare FAQ" />
      </section>
    </>
  );
}
