import Link from "next/link";
import { business, faqs, PATHS, SITE_URL, vanFeatures } from "@/lib/site-data";
import { photo } from "@/lib/photos";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton, LinkButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { FaqBlock } from "@/components/FaqBlock";
import { Eyebrow } from "@/components/Eyebrow";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Pillars } from "@/components/Pillars";
import { ServiceGrid } from "@/components/ServiceGrid";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Pic } from "@/components/Pic";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Mobile Dog & Cat Grooming, SF Peninsula | Sky Pet Grooming",
  description:
    "Mobile dog and cat grooming at your door in San Francisco and the Peninsula. Licensed, insured and eco-friendly. Book online or call (415) 754-0813.",
  path: PATHS.home,
});

// What, where, cats, cost, booking.
const homeFaqs = [faqs[1], faqs[2], faqs[5], faqs[7]];

// Eight favourites for the "fresh from the van" strip.
const freshPhotos = [
  "golden-retriever-on-grooming-table",
  "two-fluffy-cats-after-grooming",
  "apricot-poodle-curly-trim",
  "smiling-pomeranian",
  "white-dog-rounded-trim",
  "french-bulldog-with-ghosts",
  "cream-doodle-yellow-bandana",
  "four-small-dogs-after-grooming",
].map(photo);

export default function HomePage() {
  return (
    <div>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: `${SITE_URL}/` }])} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-deep via-sky to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-8 md:grid-cols-[1.05fr_1fr] md:pb-20 md:pt-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-accent-dark shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Your pet grooming comes to you
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Mobile Dog &amp; Cat Grooming in <span className="text-brand">San Francisco &amp; the Peninsula</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              Our fully equipped grooming van parks right at your door. No car rides, no waiting rooms, just a fresh,
              happy pet.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookButton location="hero" className="px-7 text-lg" />
              <CallButton location="hero" />
            </div>
            <TrustBar className="mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative row-span-2 aspect-[3/4] overflow-hidden rounded-3xl shadow-xl ring-4 ring-white">
              <Pic slug="sky-pet-grooming-van" hero fill sizes="(min-width: 768px) 280px, 50vw" className="object-cover object-[50%_70%]" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg ring-4 ring-white">
              <Pic slug="golden-retriever-on-grooming-table" fill sizes="(min-width: 768px) 260px, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg ring-4 ring-white">
              <Pic slug="gray-long-haired-cat" fill sizes="(min-width: 768px) 260px, 50vw" className="object-cover object-top" />
            </div>
          </div>
        </div>
        <div className="bg-rainbow h-1.5" aria-hidden="true" />
      </section>

      {/* Social proof: their work */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Fresh From the Van</Eyebrow>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl">Happy Pets, Every Day</h2>
          </div>
          <LinkButton href={PATHS.gallery} label="See all our photos" />
        </div>
        <PhotoGrid items={freshPhotos} square className="mt-8" />
      </section>

      {/* Services */}
      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl">Everything Your Pet Needs</h2>
            <p className="mx-auto mt-3 max-w-2xl text-ink-soft">
              From full grooms to nail trims, for dogs and cats. Choose your services when you book online.
            </p>
          </div>
          <div className="mt-10">
            <ServiceGrid />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <BookButton location="home_services" />
            <LinkButton href={PATHS.mobileGrooming} label="More about our services" />
          </div>
        </div>
      </section>

      {/* The van */}
      <section className="bg-brand-dark text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Pic slug="two-doodles-in-van-bathtub" fill sizes="(min-width: 768px) 270px, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
              <Pic slug="groomer-with-three-small-dogs" fill sizes="(min-width: 768px) 270px, 50vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-accent-light">The Grooming Van</p>
            <h2 className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">We Make It Easy</h2>
            <p className="mt-4 text-lg text-white/85">
              Everything a salon has, on wheels. We bring the whole groom to your home, so your pet stays close to you.
            </p>
            <ul className="mt-6 space-y-3">
              {vanFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                    <CheckIcon className="h-3.5 w-3.5 text-white" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton location="home_van" />
              <CallButton location="home_van" variant="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <ProcessSteps headingId="how-it-works" />
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Pillars />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <FaqBlock items={homeFaqs} title="Common Questions" />
        <div className="mt-8 text-center">
          <Link href={PATHS.faq} className="inline-flex min-h-[44px] items-center font-bold text-brand hover:underline">
            More questions →
          </Link>
        </div>
      </section>

      <BottomCta title="Ready for a groom at your door?" body={`Book online in a minute, or call ${business.phone.display}.`} location="home_bottom" />
    </div>
  );
}
