import type { Metadata } from "next";
import Link from "next/link";
import { PATHS, SITE_URL, serviceAreas, serviceAreaGeneral } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { TruckIcon } from "@/components/icons";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { FaqBlock } from "@/components/FaqBlock";

const pageUrl = `${SITE_URL}${PATHS.mobile}`;

export const metadata: Metadata = {
  title: "Mobile Dog & Cat Grooming | Victorville & High Desert | Pampered Puppies",
  description:
    "Pampered Puppies At Your Door — mobile dog & cat grooming in Victorville, Hesperia, Apple Valley, Spring Valley Lake, Barstow, Helendale & the High Desert. Call to check availability.",
  alternates: { canonical: PATHS.mobile },
};

const howItWorks = [
  "Call 760-881-3171 and let us know your pet's breed, size, and what you'd like done.",
  "We check availability for your area and schedule a driveway appointment.",
  "Donna arrives with everything needed to groom your pet right at your home.",
];

const mobileFaqs = [
  {
    question: "What areas does mobile grooming cover?",
    answer: `Victorville, ${serviceAreas.slice(1).join(", ")}, and ${serviceAreaGeneral}. See each area's page below for details.`,
  },
  {
    question: "How is mobile grooming priced?",
    answer:
      "Mobile pricing is confirmed with a quick call — it follows the same starting ranges as in-store grooming and may vary slightly with your pet's needs.",
  },
  {
    question: "Do you groom cats too?",
    answer: "Yes — mobile grooming is available for both dogs and cats.",
  },
  {
    question: "What if my pet is nervous about grooming?",
    answer:
      "Let us know in advance. See our page on grooming for anxious, senior, and difficult dogs for how we handle it.",
  },
];

export default function MobileGroomingPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Mobile Grooming", href: PATHS.mobile }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Mobile Grooming", url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Mobile Dog & Cat Grooming",
          description:
            "In-driveway mobile dog and cat grooming service, 'Pampered Puppies At Your Door,' serving Victorville and the High Desert.",
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex items-center gap-2 text-terracotta-dark">
            <TruckIcon className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Mobile Grooming</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Pampered Puppies At Your Door
          </h1>
          <p className="mt-4 text-ink-soft leading-relaxed">
            No car ride, no waiting room, no other dogs to stress about —
            just your pet, groomed in the comfort of your own driveway. Donna
            Nichols brings 35+ years of hands-on grooming experience straight
            to you, with the same one-on-one attention and low-cage-time
            approach as our in-store visits.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location="mobile_top" label="Check Availability" />
            <BookButton location="mobile_top" />
          </div>
        </div>
        <PhotoPlaceholder caption="Photo of the mobile grooming setup — real photo pending from client" aspect="portrait" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <ServiceAreaSection />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-bold text-ink">How It Works</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {howItWorks.map((step, i) => (
            <li key={step} className="rounded-2xl border border-border bg-cream-deep p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink">
                {i + 1}
              </span>
              <p className="mt-3 text-sm text-ink-soft">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <WhyChooseUs />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <TestimonialCard
          quote="Donna is absolutely the best! She has been grooming my 2 dogs for quite some time now & she does a great job every time! I've also used her mobile grooming services, just AWESOME! I would highly recommend all their services they offer."
          attribution="Google review"
        />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FaqBlock items={mobileFaqs} title="Mobile Grooming FAQ" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-border bg-cream-deep p-6">
          <h2 className="font-display text-xl font-bold text-ink">Also available in-store</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Prefer to bring your pet to us? Visit the Pampered Puppies studio
            at 15444 Bear Valley Rd, Ste A, Victorville — see our{" "}
            <Link href={PATHS.dog} className="font-semibold text-terracotta-dark hover:underline">
              Dog Grooming
            </Link>{" "}
            and{" "}
            <Link href={PATHS.cat} className="font-semibold text-terracotta-dark hover:underline">
              Cat Grooming
            </Link>{" "}
            pages for full service lists.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Check availability in your area
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="mobile_bottom" label="Call Now" />
          <BookButton location="mobile_bottom" />
        </div>
      </section>
    </div>
  );
}
