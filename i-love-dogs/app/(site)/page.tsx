import Link from "next/link";
import { business, faqs, people, PATHS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { CallButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { DogIcon, TruckIcon, HeartIcon, CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { FaqBlock } from "@/components/FaqBlock";
import { Eyebrow } from "@/components/Eyebrow";
import { StatBand } from "@/components/StatBand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { StudioInfoCard } from "@/components/StudioInfoCard";
import { BottomCta } from "@/components/BottomCta";

export const metadata = pageMetadata({
  title: "Dog Grooming in Bryn Mawr, PA | I Love Dogs Pet Grooming",
  description:
    "Dog grooming in Bryn Mawr, PA from $75. Warm baths, chemical-free products and pickup and delivery. Call 610-525-7387.",
  path: PATHS.home,
});

// FAQ #1 (packages), #2 (pickup) and #7 (cost).
const homeFaqs = [faqs[0], faqs[1], faqs[6]];

const badges = ["Family-owned", "Over 50 years with dogs", "15 years grooming", "Chemical-free products"];

export default function HomePage() {
  return (
    <div>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: `${SITE_URL}/` }])} />
      <section className="bg-gradient-to-b from-cream-deep to-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <Eyebrow>Family-owned on the Main Line</Eyebrow>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              Dog Grooming in Bryn Mawr, PA
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Ever had a dog fight the bath the whole way through?
              <br />
              A cold bath will do that.
              <br />
              Ours never runs cold, because we heat the water with a tankless system.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton location="hero" />
              <Link
                href={PATHS.dogGrooming}
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-brand px-6 py-3 text-base font-semibold text-brand hover:bg-brand-light/40"
              >
                See what&rsquo;s included
              </Link>
            </div>
            <p className="mt-3 text-sm text-ink-soft">Grooming packages from $75. Call for a quote and current hours.</p>
            <TrustBar className="mt-6" />
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <Eyebrow>Starting Prices</Eyebrow>
              <ul className="mt-3 divide-y divide-border">
                <li className="flex items-baseline justify-between gap-4 py-2">
                  <span className="font-semibold text-ink">Bath &amp; Pamper</span>
                  <span className="font-display text-xl font-bold text-accent-dark">From $75</span>
                </li>
                <li className="flex items-baseline justify-between gap-4 py-2">
                  <span className="font-semibold text-ink">The Works</span>
                  <span className="font-display text-xl font-bold text-accent-dark">From $115</span>
                </li>
                <li className="flex items-baseline justify-between gap-4 py-2">
                  <span className="font-semibold text-ink">Full Spa Day</span>
                  <span className="font-display text-xl font-bold text-accent-dark">From $150</span>
                </li>
              </ul>
              <Link href={`${PATHS.dogGrooming}#pricing`} className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand hover:underline">
                See what each includes →
              </Link>
            </div>
            <StudioInfoCard location="home_hero_card" />
          </div>
        </div>
      </section>

      <StatBand />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">Our Services</h2>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
          Three grooming packages with starting prices up front, and pickup and delivery when you can&rsquo;t drop off.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Dog Grooming Packages"
            description="Bath & Pamper, The Works and Full Spa Day: from a gentle bath and nail trim to a full haircut and skin and coat treatment."
            price="From $75"
            href={PATHS.dogGrooming}
            icon={<DogIcon />}
          />
          <ServiceCard
            title="Pickup & Delivery"
            description="We pick your dog up and bring them home clean after the groom. Call to confirm your address."
            price="Call to confirm your address"
            href={PATHS.pickup}
            icon={<TruckIcon />}
          />
          <ServiceCard
            title="Warm, Chemical-Free Baths"
            description="Water heated by a tankless system, so the bath stays warm throughout, and chemical-free washing products."
            href={PATHS.dogGrooming}
            icon={<HeartIcon />}
          />
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Meet the Family</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
              Family-Owned, With Decades of Experience
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              I Love Dogs is family-owned and run by {business.owners}. {people.theresa} {people.jolie}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-cream px-3 py-1.5 text-xs font-semibold text-ink-soft"
                >
                  <CheckIcon className="h-3.5 w-3.5 text-brand" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href={PATHS.about} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
                Meet the family →
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-cream p-6">
            <h3 className="font-display text-xl font-bold text-ink">Serving the Eastern Main Line</h3>
            <p className="mt-2 text-ink-soft">Bryn Mawr, Gladwyne, Haverford, Ardmore, Havertown and nearby.</p>
            <Link href={PATHS.serviceArea} className="mt-2 inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
              See where we serve →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <ProcessSteps />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <WhyChooseUs />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <ServiceAreaSection />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FaqBlock items={homeFaqs} title="Common Questions" />
          <div className="mt-8 text-center">
            <Link href={PATHS.faq} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
              More questions →
            </Link>
          </div>
        </div>
      </section>

      <BottomCta title="Ready to book your dog's groom?" location="home_bottom" />
    </div>
  );
}
