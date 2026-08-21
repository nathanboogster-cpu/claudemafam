import type { Metadata } from "next";
import Link from "next/link";
import { business, testimonials, PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { DogIcon, CatIcon, TruckIcon, PuppyIcon, HeartIcon, CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { FaqBlock } from "@/components/FaqBlock";
import { Eyebrow } from "@/components/Eyebrow";
import { StatBand } from "@/components/StatBand";
import { GalleryPhotoCard } from "@/components/GalleryPhotoCard";
import { ProcessSteps } from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Dog & Cat Grooming in Victorville, CA | Pampered Puppies",
  description:
    "Pampered Puppies offers in-store and mobile dog & cat grooming in Victorville, CA. Hundreds of 5-star Google reviews, BBB A+ accredited. Call 760-881-3171 to book.",
  alternates: { canonical: PATHS.home },
};

const homeTestimonials = testimonials.slice(0, 3);

const homeFaqs = [
  {
    question: "Do you groom aggressive or anxious dogs?",
    answer:
      "Yes. Aggressive or anxious animals are welcome with advance phone notice so our staff can prepare.",
  },
  {
    question: "How much does dog grooming cost?",
    answer: "Starting at $55–65 for small dogs and $65–85 for large dogs — final pricing depends on breed, coat, and temperament.",
  },
  {
    question: "Do you offer mobile grooming?",
    answer: 'Yes — "Pampered Puppies At Your Door" brings grooming to your driveway across Victorville and the High Desert.',
  },
];

export default function HomePage() {
  return (
    <div>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }])} />
      <section className="bg-gradient-to-b from-cream-deep to-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <Eyebrow>Victorville, CA · Dog &amp; Cat Grooming</Eyebrow>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              Victorville&rsquo;s Trusted Dog &amp; Cat Groomer
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Full-service dog and cat grooming in Victorville, CA — in our Bear
              Valley Rd studio or right in your driveway with{" "}
              <Link href={PATHS.mobile} className="font-semibold text-terracotta-dark hover:underline">
                Pampered Puppies At Your Door
              </Link>
              . One-on-one attention from owner-groomer Ellen Karikari, 35+ years
              of hands-on experience, minimal cage time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton location="hero" label={`Call Now — ${business.phoneDisplay}`} />
              <BookButton location="hero" />
            </div>
            <TrustBar className="mt-8" />
          </div>
          <PhotoPlaceholder
            caption="A freshly groomed client at the Pampered Puppies studio in Victorville, CA"
            aspect="portrait"
            src="/images/gallery-bichon.jpg"
          />
        </div>
      </section>

      <StatBand />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
            Our Services
          </h2>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
          Full-service grooming for every dog and cat, plus specialty care for
          puppies, seniors, and pets who need extra patience.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Dog Grooming"
            description="Baths, haircuts, deshedding, nail trims, and more."
            price="Starting at $55–65"
            href={PATHS.dog}
            icon={<DogIcon />}
          />
          <ServiceCard
            title="Cat Grooming"
            description="Full baths, spot shampooing, deshedding, and moisturizing treatments."
            price="Priced after a quick consultation"
            href={PATHS.cat}
            icon={<CatIcon />}
          />
          <ServiceCard
            title="Mobile Grooming"
            description={'"Pampered Puppies At Your Door" — professional grooming in your own driveway.'}
            price="Same rates as in-store"
            href={PATHS.mobile}
            icon={<TruckIcon />}
          />
          <ServiceCard
            title="Puppy Grooming"
            description="A patient, low-stress introduction to grooming for your puppy's first visits."
            price="Starting at $55–65"
            href={PATHS.puppy}
            icon={<PuppyIcon />}
          />
          <ServiceCard
            title="Anxious & Senior Dogs"
            description="Advance-notice grooming for aggressive, anxious, senior, or difficult-to-handle dogs."
            price="Priced with dog grooming"
            href={PATHS.anxious}
            icon={<HeartIcon />}
          />
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-2 md:items-center">
          <PhotoPlaceholder
            caption="Inside the Pampered Puppies grooming studio in Victorville, CA"
            aspect="square"
            src="/images/studio-interior.jpg"
          />
          <div>
            <Eyebrow>Meet Your Groomer</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
              Groomed by Ellen, Not an Assembly Line
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Ellen Karikari owns and operates Pampered Puppies, bringing 35+
              years of hands-on dog &amp; cat grooming experience to every
              appointment — one-on-one attention, minimal cage time, and a
              quick consultation before any clippers come out.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {["35+ Years Experience", "First-Aid Trained", "BBB A+ Accredited"].map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-cream px-3 py-1.5 text-xs font-semibold text-ink-soft"
                >
                  <CheckIcon className="h-3.5 w-3.5 text-sage-dark" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={PATHS.about} className="font-semibold text-terracotta-dark hover:underline">
                More about Ellen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="text-center">
          <Eyebrow>Recent Work</Eyebrow>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
            A Look at Our Grooms
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <GalleryPhotoCard service="Full Groom" location="Victorville Studio" src="/images/gallery-bichon.jpg" />
          <GalleryPhotoCard service="Full Groom" location="Victorville Studio" src="/images/gallery-yorkie.jpg" />
          <GalleryPhotoCard service="Full Groom" location="Victorville Studio" src="/images/gallery-bernedoodle.jpg" />
        </div>
        <div className="mt-8 text-center">
          <Link href={PATHS.gallery} className="font-semibold text-terracotta-dark hover:underline">
            See the full gallery →
          </Link>
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="text-center">
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
              What Pet Parents Say
            </h2>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {homeTestimonials.map((t) => (
              <TestimonialCard key={t.attribution} quote={t.quote} attribution={t.attribution} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={PATHS.reviews} className="font-semibold text-terracotta-dark hover:underline">
              Read more reviews →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <ServiceAreaSection />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FaqBlock items={homeFaqs} title="Common Questions" />
          <div className="mt-8 text-center">
            <Link href={PATHS.faq} className="font-semibold text-terracotta-dark hover:underline">
              See the full FAQ →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Ready to book with Ellen?
        </h2>
        <p className="mt-3 text-ink-soft">
          Aggressive or anxious pets welcome with advance notice — call us and
          let us know what to expect.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="home_bottom" label={`Call Now — ${business.phoneDisplay}`} />
          <BookButton location="home_bottom" />
        </div>
      </section>
    </div>
  );
}
