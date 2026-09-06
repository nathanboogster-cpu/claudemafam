import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReserveButton, CallButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import { BoardingPricingTable } from "@/components/BoardingPricingTable";
import { CheckIcon, SyringeIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, boardingFeatures, boardingPricing, vaccinationRequirements, temperamentTest, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "Dog Boarding in Marietta, GA",
  description:
    "Bow Wags dog boarding in Marietta, GA: private indoor wooden suites, no cages, with daycare included in every night's stay. See current nightly rates and requirements.",
  path: PATHS.dogBoarding,
});

const boardingFaqs = [
  {
    question: "Are boarding dogs kept in cages?",
    answer:
      "No — boarding dogs sleep in private indoor wooden suites, custom cabins divided by picket-style fencing so dogs can see and smell their playmates while still having their own space overnight. Dogs are not left loose and unsupervised.",
  },
  {
    question: "Is daycare included in boarding?",
    answer: boardingPricing.daycareIncludedNote,
  },
  {
    question: "What are the current boarding rates?",
    answer: `Nights 1–5 are currently ${boardingPricing.tiers[0].price}/night, nights 6–10 are ${boardingPricing.tiers[1].price}/night, and nights 11+ are ${boardingPricing.tiers[2].price}/night. ${boardingPricing.multiDogNote} Rates are current published rates and subject to change.`,
  },
  {
    question: "Can I bring my dog's own bed, toys, or food?",
    answer: `Yes — owners are welcome to bring their dog's favorite bed, blanket, and toy, and bringing your dog's own food is encouraged for dietary consistency. If you'd rather Bow Wags feed the house food, that's ${boardingPricing.houseFoodFee}`,
  },
  {
    question: "What happens if I pick up my dog late on checkout day?",
    answer: `Campers picked up after 2 PM on checkout day incur a ${boardingPricing.latePickupFee}`,
  },
  {
    question: "What do I need before my dog's first boarding stay?",
    answer: `A 4-hour temperament test (${temperamentTest.price}) and current ${vaccinationRequirements.join(", ")} vaccinations are required. Call ${business.phoneDisplay} to schedule.`,
  },
];

export default function DogBoardingPage() {
  const pageUrl = `${SITE_URL}${PATHS.dogBoarding}`;
  return (
    <>
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Dog Boarding",
          description:
            "Private indoor wooden boarding suites with daycare included, for dogs in Marietta, GA and West Cobb.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Dog Boarding", url: pageUrl },
        ])}
      />
      <JsonLd data={faqSchema(boardingFaqs)} />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Dog Boarding", href: PATHS.dogBoarding }]} />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Dog Boarding • Marietta, GA</Eyebrow>
            <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">
              Private Wooden Suites — No Cages
            </h1>
            <p className="mt-4 text-lg text-bw-ink-soft">
              Bow Wags boarding dogs sleep in private, custom wooden cabins divided by
              picket-style fencing — not traditional cages — and every overnight stay
              includes a full day of supervised daycare.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ReserveButton location="boarding_hero" variant="primary" label="Book Boarding" />
              <CallButton location="boarding_hero" variant="secondary" label="Schedule Temperament Test" />
            </div>
          </div>
          <PhotoPlaceholder caption="Private wooden boarding suite at Bow Wags" aspect="square" className="w-full" priority />
        </div>
      </section>

      {/* Features */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>The Boarding Experience</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">
              A Private Space With an Open, Community Feel
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {boardingFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-bw-border bg-white p-6">
                <p className="font-bw-display text-lg font-bold text-bw-ink">{f.title}</p>
                <p className="mt-2 text-sm text-bw-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daycare included callout */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <Eyebrow>Included With Every Stay</Eyebrow>
        <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">
          Daycare Is Included in Boarding
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-bw-ink-soft">{boardingPricing.daycareIncludedNote}</p>
      </section>

      {/* Pricing */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Current Rates</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Boarding Pricing</h2>
            <p className="mt-2 text-sm text-bw-ink-soft">Current published rates — subject to change. See the full Rates page for daycare and grooming.</p>
          </div>
          <BoardingPricingTable className="mt-8" />
        </div>
      </section>

      {/* Bring from home */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Bring the Comforts of Home</Eyebrow>
          <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">What to Pack</h2>
        </div>
        <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-sm text-bw-ink-soft">
          {["Your dog's favorite bed or blanket", "A favorite toy", "Your dog's own food, to keep mealtime consistent"].map((item) => (
            <li key={item} className="flex gap-2 rounded-xl border border-bw-border bg-white p-4">
              <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-bw-teal-dark" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Requirements */}
      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="rounded-3xl border border-bw-border bg-white p-8 text-center sm:p-10">
            <SyringeIcon className="mx-auto h-8 w-8 text-bw-orange-dark" />
            <h2 className="mt-3 font-bw-display text-2xl font-bold text-bw-ink">Before Your Dog&apos;s First Stay</h2>
            <p className="mt-3 text-bw-ink-soft">
              A 4-hour temperament test ({temperamentTest.price}) and current{" "}
              {vaccinationRequirements.join(", ")} vaccinations are required before boarding.
              Call {business.phoneDisplay} to schedule.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <CallButton location="boarding_requirements" variant="primary" label="Call to Schedule" />
              <ReserveButton location="boarding_requirements" variant="ghost" label="Full Requirements" href={PATHS.requirements} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FaqBlock items={boardingFaqs} eyebrow="Boarding FAQ" />
      </section>
    </>
  );
}
