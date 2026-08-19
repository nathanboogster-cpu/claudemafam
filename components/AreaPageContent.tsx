import Link from "next/link";
import { PATHS, SITE_URL, serviceAreaPages, business } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqBlock } from "@/components/FaqBlock";
import { CheckIcon, TruckIcon } from "@/components/icons";

type Area = (typeof serviceAreaPages)[number];

const includedServices = [
  "Baths & full haircuts",
  "Deshedding & dematting",
  "Nail trim & filing",
  "Ear cleaning",
  "Flea & tick treatment",
  "Cat grooming too — not just dogs",
];

export function AreaPageContent({ area }: { area: Area }) {
  const pageUrl = `${SITE_URL}${area.slug}`;
  const otherAreas = serviceAreaPages.filter((a) => a.city !== area.city);

  const faqs = [
    {
      question: `Does Pampered Puppies really serve ${area.city}?`,
      answer: `Yes — ${area.city} is one of the areas covered by "Pampered Puppies At Your Door," our mobile grooming service based out of Victorville.`,
    },
    {
      question: "How does mobile pricing work?",
      answer:
        "Mobile pricing is confirmed with a quick call — it follows the same starting ranges as in-store grooming and may vary slightly with your pet's needs.",
    },
    {
      question: "Do you groom cats in " + area.city + " too?",
      answer: "Yes — mobile grooming is available for both dogs and cats.",
    },
    {
      question: "Can I bring my pet to the Victorville studio instead?",
      answer: `Absolutely — the in-store studio at ${business.addressFull} is open to ${area.city} residents too, if you'd rather drive in.`,
    },
  ];

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Mobile Grooming", href: PATHS.mobile },
          { name: area.city, href: area.slug },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Mobile Grooming", url: `${SITE_URL}${PATHS.mobile}` },
          { name: area.city, url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: `Mobile Dog & Cat Grooming in ${area.city}, CA`,
          description: area.intro,
          areaServed: [area.city],
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex items-center gap-2 text-terracotta-dark">
            <TruckIcon className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Mobile Grooming</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Mobile Dog &amp; Cat Grooming in {area.city}, CA
          </h1>
          <p className="mt-4 text-ink-soft leading-relaxed">{area.intro}</p>
          <p className="mt-4 text-ink-soft leading-relaxed">{area.angle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location={`area_${area.city}_top`} label="Check Availability" />
            <BookButton location={`area_${area.city}_top`} />
          </div>
        </div>
        <PhotoPlaceholder
          caption={`Photo of a mobile grooming visit in ${area.city} — real photo pending from client`}
          aspect="portrait"
        />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-ink">What&rsquo;s Included</h2>
          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {includedServices.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm text-ink-soft">
            See the full{" "}
            <Link href={PATHS.dog} className="font-semibold text-terracotta-dark hover:underline">
              Dog Grooming
            </Link>{" "}
            and{" "}
            <Link href={PATHS.cat} className="font-semibold text-terracotta-dark hover:underline">
              Cat Grooming
            </Link>{" "}
            service lists for everything available.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <ProcessSteps title={`How Mobile Grooming Works in ${area.city}`} />
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
          <FaqBlock items={faqs} title={`${area.city} Mobile Grooming FAQ`} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-xl font-bold text-ink text-center">
          Other Areas We Serve
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {otherAreas.map((a) => (
            <Link
              key={a.slug}
              href={a.slug}
              className="rounded-xl border border-border bg-cream p-4 text-center text-sm font-semibold text-terracotta-dark hover:bg-cream-deep"
            >
              {a.city} →
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Check availability in {area.city}
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location={`area_${area.city}_bottom`} label="Call Now" />
          <BookButton location={`area_${area.city}_bottom`} />
        </div>
      </section>
    </div>
  );
}
