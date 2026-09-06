import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, ReserveButton } from "@/components/CTAButton";
import { ClipboardIcon, SyringeIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, temperamentTest, vaccinationRequirements, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Requirements — Temperament Test & Vaccinations",
  description:
    "What's required before dog daycare or boarding at Bow Wags in Marietta, GA: a 4-hour temperament test and current Rabies, Distemper, and Bordetella vaccinations.",
  path: PATHS.requirements,
});

const requirementsFaqs = [
  {
    question: "What is the temperament test?",
    answer: `A 4-hour assessment (${temperamentTest.price}) required before a dog's first daycare or boarding stay at Bow Wags, so staff can confirm the dog is comfortable in a group play setting. Call ${business.phoneDisplay} to schedule.`,
  },
  {
    question: "What vaccinations are required?",
    answer: `Current ${vaccinationRequirements.join(", ")} vaccinations are required for both daycare and boarding.`,
  },
  {
    question: "Do these requirements apply to grooming too?",
    answer: "No — the temperament test and vaccination requirements apply to daycare and boarding. Grooming is booked separately by phone.",
  },
  {
    question: "How do I schedule the temperament test?",
    answer: `Call ${business.phoneDisplay} to schedule your dog's temperament test before their first daycare or boarding reservation.`,
  },
];

export default function RequirementsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Requirements", url: `${SITE_URL}${PATHS.requirements}` },
        ])}
      />
      <JsonLd data={faqSchema(requirementsFaqs)} />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Requirements", href: PATHS.requirements }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <Eyebrow>Before You Book</Eyebrow>
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">Daycare &amp; Boarding Requirements</h1>
        <p className="mt-4 text-lg text-bw-ink-soft">
          Two things are required before any dog&apos;s first daycare or boarding
          stay at Bow Wags — a temperament test and current vaccinations.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-bw-border bg-white p-8">
            <ClipboardIcon className="h-9 w-9 text-bw-orange-dark" />
            <h2 className="mt-3 font-bw-display text-xl font-bold text-bw-ink">{temperamentTest.name}</h2>
            <p className="mt-1 font-bw-display text-2xl font-bold text-bw-orange-dark">{temperamentTest.price}</p>
            <p className="mt-2 text-sm text-bw-ink-soft">{temperamentTest.description}</p>
          </div>
          <div className="rounded-2xl border border-bw-border bg-white p-8">
            <SyringeIcon className="h-9 w-9 text-bw-orange-dark" />
            <h2 className="mt-3 font-bw-display text-xl font-bold text-bw-ink">Vaccinations</h2>
            <ul className="mt-3 space-y-1 text-sm text-bw-ink-soft">
              {vaccinationRequirements.map((v) => (
                <li key={v}>• {v}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-bw-ink-soft">Required for daycare and boarding — please bring current records.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <CallButton location="requirements_page" variant="primary" label="Call to Schedule Temperament Test" />
          <ReserveButton location="requirements_page" variant="ghost" label="Make a Reservation" />
        </div>
      </section>
    </>
  );
}
