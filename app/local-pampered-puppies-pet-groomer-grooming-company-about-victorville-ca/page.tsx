import type { Metadata } from "next";
import Link from "next/link";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Eyebrow } from "@/components/Eyebrow";
import { StatBand } from "@/components/StatBand";

export const metadata: Metadata = {
  title: "About Pampered Puppies | Victorville, CA Dog & Cat Groomer",
  description:
    "Meet Donna Nichols, owner-groomer at Pampered Puppies in Victorville, CA — 35+ years of hands-on grooming experience, first-aid trained, and a low-cage-time approach.",
  alternates: { canonical: PATHS.about },
};

const philosophy = [
  "One-on-one attention for every dog and cat, not an assembly line",
  "Minimal cage/kennel time while pets are in our care",
  "Aggressive or anxious animals welcome with advance phone notice, so we can prepare",
  "First-aid trained, including for seizures and heart attacks",
];

const badges = ["35+ Years Experience", "First-Aid Trained", "BBB A+ Accredited"];

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "About", href: PATHS.about }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}${PATHS.about}` },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            About Pampered Puppies
          </h1>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Pampered Puppies is owned and operated by <strong>Donna Nichols</strong>,
            who brings <strong>35+ years of hands-on dog and cat grooming
            experience</strong> to every appointment. Donna grooms out of the
            studio at 15444 Bear Valley Rd, Ste A, in Victorville, and also
            takes her tools on the road with{" "}
            <Link href={PATHS.mobile} className="font-semibold text-terracotta-dark hover:underline">
              Pampered Puppies At Your Door
            </Link>
            .
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Donna&rsquo;s approach is simple: know the animal in front of her,
            work at their pace, and keep them out of a cage as much as
            possible. She&rsquo;s first-aid trained, including for seizures and
            heart attacks, and regularly works with{" "}
            <Link href={PATHS.anxious} className="font-semibold text-terracotta-dark hover:underline">
              senior pets, anxious pets, and dogs other groomers have turned away
            </Link>
            .
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft"
              >
                <CheckIcon className="h-3.5 w-3.5 text-sage-dark" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location="about_top" label="Book with Donna" />
            <BookButton location="about_top" />
          </div>
        </div>
        <PhotoPlaceholder
          caption="The Pampered Puppies storefront at 15444 Bear Valley Rd, Victorville, CA"
          aspect="portrait"
          src="/images/storefront.jpg"
        />
      </section>

      <StatBand />

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink">Our Philosophy</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {philosophy.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-cream p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-dark" />
                  <span className="text-ink-soft text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder
            caption="Inside the Pampered Puppies grooming studio in Victorville, CA"
            aspect="video"
            src="/images/studio-interior.jpg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="text-center">
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink">
            In Donna&rsquo;s Words, From Her Clients
          </h2>
        </div>
        <div className="mt-6">
          <TestimonialCard
            quote="This review is specifically for groomer Donna - She is simply is the best dog groomer, period... The grooming itself has always been superb, which speaks a lot given that he is a double-coated German Shepherd and Terrier mix, with two different texture fur and three different colored hairs. His nails are dark and other groomers have made accidents which leads to bleeding, but never had that concern with Donna."
            attribution="Lila S."
          />
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <WhyChooseUs />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Book with Donna</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="about_bottom" label="Call Now" />
          <BookButton location="about_bottom" />
        </div>
      </section>
    </div>
  );
}
