import type { Metadata } from "next";
import Link from "next/link";
import { business, testimonials, PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const pageUrl = `${SITE_URL}${PATHS.reviews}`;

export const metadata: Metadata = {
  title: "Reviews | Pampered Puppies Dog & Cat Grooming, Victorville CA",
  description:
    "Pampered Puppies has hundreds of 5-star Google reviews. Read real client testimonials about Ellen Flores Karikari's dog & cat grooming in Victorville, CA.",
  alternates: { canonical: PATHS.reviews },
};

// NOTE: Per the client handoff, this page intentionally shows the Google rating as
// plain visible content only — no AggregateRating/Review schema.org markup is added
// here, since that would violate Google's guidelines for third-party-sourced ratings.

export default function ReviewsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Reviews", href: PATHS.reviews }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Reviews", url: pageUrl },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          What Our Clients Say
        </h1>
        <div className="mx-auto mt-6 inline-flex flex-col items-center gap-1 rounded-2xl border border-border bg-white px-8 py-6 shadow-sm">
          <div className="flex text-gold" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
                <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
              </svg>
            ))}
          </div>
          <p className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Hundreds of 5-Star Reviews on Google
          </p>
          <p className="text-sm text-ink-soft">From {business.googleReviewCount}+ reviews</p>
        </div>
        <div className="mt-4">
          <a
            href={business.googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-terracotta-dark hover:underline"
          >
            Leave us a review on Google →
          </a>
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.attribution + t.quote.slice(0, 20)} quote={t.quote} attribution={t.attribution} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Ready to see for yourself?
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="reviews_bottom" label="Call Now" />
          <BookButton location="reviews_bottom" />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link href={PATHS.dog} className="font-semibold text-terracotta-dark hover:underline">
            Dog Grooming
          </Link>
          <Link href={PATHS.cat} className="font-semibold text-terracotta-dark hover:underline">
            Cat Grooming
          </Link>
          <Link href={PATHS.mobile} className="font-semibold text-terracotta-dark hover:underline">
            Mobile Grooming
          </Link>
          <Link href={PATHS.puppy} className="font-semibold text-terracotta-dark hover:underline">
            Puppy Grooming
          </Link>
          <Link href={PATHS.anxious} className="font-semibold text-terracotta-dark hover:underline">
            Anxious &amp; Senior Dogs
          </Link>
          <Link href={PATHS.contact} className="font-semibold text-terracotta-dark hover:underline">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
