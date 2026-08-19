import type { Metadata } from "next";
import Link from "next/link";
import { business, testimonials, PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { DogIcon, CatIcon, TruckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dog & Cat Grooming in Victorville, CA | Pampered Puppies",
  description:
    "Pampered Puppies offers in-store and mobile dog & cat grooming in Victorville, CA. 4.3★ from 226 Google reviews, BBB A+ accredited. Call 760-881-3171 to book.",
  alternates: { canonical: PATHS.home },
};

const homeTestimonials = testimonials.slice(0, 3);

export default function HomePage() {
  return (
    <div>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: SITE_URL }])} />
      <section className="bg-gradient-to-b from-cream-deep to-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <h1 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              Victorville&rsquo;s Trusted Dog &amp; Cat Groomer
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Full-service dog and cat grooming in Victorville, CA — in our Bear
              Valley Rd studio or right in your driveway with{" "}
              <Link href={PATHS.mobile} className="font-semibold text-terracotta-dark hover:underline">
                Pampered Puppies At Your Door
              </Link>
              . One-on-one attention from owner-groomer Donna Nichols, 35+ years
              of hands-on experience, minimal cage time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton location="hero" label={`Call Now — ${business.phoneDisplay}`} />
              <BookButton location="hero" />
            </div>
            <TrustBar className="mt-8" />
          </div>
          <PhotoPlaceholder
            caption="Photo of Donna grooming a dog in the Pampered Puppies studio — real photo pending from client"
            aspect="portrait"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-2xl font-bold text-ink text-center sm:text-3xl">
          Grooming Services
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <ServiceCard
            title="Dog Grooming"
            description="Baths, haircuts, deshedding, nail trims, and more — starting at $55–65 for small dogs, $65–85 for large."
            href={PATHS.dog}
            icon={<DogIcon />}
          />
          <ServiceCard
            title="Cat Grooming"
            description="Full baths, spot shampooing, deshedding, and moisturizing treatments, with pricing after a quick consultation."
            href={PATHS.cat}
            icon={<CatIcon />}
          />
          <ServiceCard
            title="Mobile Grooming"
            description={'"Pampered Puppies At Your Door" — professional grooming in your own driveway across the High Desert.'}
            href={PATHS.mobile}
            icon={<TruckIcon />}
          />
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-2xl font-bold text-ink text-center sm:text-3xl">
            What Pet Parents Say
          </h2>
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

      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Ready to book with Donna?
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
