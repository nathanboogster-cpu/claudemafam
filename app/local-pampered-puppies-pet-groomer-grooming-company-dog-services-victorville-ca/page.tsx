import type { Metadata } from "next";
import Link from "next/link";
import { PATHS, SITE_URL, dogServices, dogPricing, serviceAreaPages } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqBlock } from "@/components/FaqBlock";

const pageUrl = `${SITE_URL}${PATHS.dog}`;

export const metadata: Metadata = {
  title: "Dog Grooming in Victorville, CA | Pampered Puppies",
  description:
    "Full-service dog grooming in Victorville, CA — baths, haircuts, deshedding, nail trims & more. Starting at $55–65 small dogs, $65–85 large dogs. Call to book.",
  alternates: { canonical: PATHS.dog },
};

const dogFaqs = [
  {
    question: "How much does dog grooming cost?",
    answer: `Dog grooming starts at ${dogPricing.small} for small dogs and ${dogPricing.large} for large dogs. ${dogPricing.note}`,
  },
  {
    question: "Do you groom aggressive or anxious dogs?",
    answer:
      "Yes — with advance phone notice so we can prepare. See our dedicated page on grooming for anxious, senior, and difficult dogs for more.",
  },
  {
    question: "What's included in a full groom?",
    answer:
      "A full groom typically includes a bath, haircut, deshedding as needed, nail trim, ear cleaning, and more — see the full service list above.",
  },
  {
    question: "Can you come to me instead?",
    answer:
      'Yes — "Pampered Puppies At Your Door" brings the same grooming to your driveway across Victorville and the High Desert.',
  },
];

export default function DogGroomingPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Dog Grooming", href: PATHS.dog }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Dog Grooming", url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Dog Grooming",
          description:
            "Full-service dog grooming including baths, haircuts, deshedding, dematting, nail trims, and more, in Victorville, CA.",
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Dog Grooming in Victorville, CA
          </h1>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Professional grooming isn&rsquo;t just about looking good — regular
            baths, deshedding, nail trims, and ear care keep your dog
            comfortable and catch skin, coat, and ear issues early. Donna
            Nichols brings 35+ years of hands-on experience to every dog that
            comes through the door, working at their pace with minimal cage
            time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location="dog_top" label="Book Now" />
            <BookButton location="dog_top" />
          </div>
        </div>
        <PhotoPlaceholder caption="Before/after photo of a freshly groomed dog — real photo pending from client" aspect="portrait" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-ink">Dog Grooming Services</h2>
          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {dogServices.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-bold text-ink">Pricing</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-cream-deep p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">Small Dogs</p>
            <p className="mt-1 font-display text-3xl font-bold text-terracotta-dark">
              {dogPricing.small}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-cream-deep p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">Large Dogs</p>
            <p className="mt-1 font-display text-3xl font-bold text-terracotta-dark">
              {dogPricing.large}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-soft">{dogPricing.note}</p>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <ProcessSteps title="What to Expect at Your Dog's Groom" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <WhyChooseUs />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <TestimonialCard
            quote="Took both my boxer babies to Donna. They came home looking amazing. She was so gentle and patient with my boy who was hesitant and moody... Shop was clean and the rest of the staff was also very nice and Informative."
            attribution="Cora D."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <FaqBlock items={dogFaqs} title="Dog Grooming FAQ" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-xl font-bold text-ink text-center">
            More Ways We Can Help
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={PATHS.puppy} className="rounded-xl border border-border bg-cream p-4 text-sm font-semibold text-terracotta-dark hover:bg-cream-deep">
              Puppy Grooming →
            </Link>
            <Link href={PATHS.anxious} className="rounded-xl border border-border bg-cream p-4 text-sm font-semibold text-terracotta-dark hover:bg-cream-deep">
              Anxious &amp; Senior Dog Grooming →
            </Link>
            <Link href={PATHS.mobile} className="rounded-xl border border-border bg-cream p-4 text-sm font-semibold text-terracotta-dark hover:bg-cream-deep">
              Mobile Grooming At Your Door →
            </Link>
            {serviceAreaPages.map((area) => (
              <Link
                key={area.slug}
                href={area.slug}
                className="rounded-xl border border-border bg-cream p-4 text-sm font-semibold text-terracotta-dark hover:bg-cream-deep"
              >
                Mobile Grooming in {area.city} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Prefer grooming at home?
        </h2>
        <p className="mt-3 text-ink-soft">
          Try{" "}
          <Link href={PATHS.mobile} className="font-semibold text-terracotta-dark hover:underline">
            Pampered Puppies At Your Door
          </Link>{" "}
          — mobile grooming across the High Desert.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="dog_bottom" label="Call Now" />
          <BookButton location="dog_bottom" />
        </div>
      </section>
    </div>
  );
}
