import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReserveButton, CallButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, differentiators, groomer, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "About Bow Wags",
  description:
    "Bow Wags is a dog daycare, boarding, and grooming facility in Marietta, GA — clean, safe, fully supervised care known to some regulars as \"Wagsville.\"",
  path: PATHS.about,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "About", url: `${SITE_URL}${PATHS.about}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "About", href: PATHS.about }]} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>About Bow Wags</Eyebrow>
            <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">
              Dog Daycare, Boarding &amp; Grooming in {business.primaryLocation}
            </h1>
            <p className="mt-4 text-lg text-bw-ink-soft">
              Bow Wags is a full-service dog daycare, boarding, and grooming facility
              at {business.addressFull}, serving the {business.regionLabel} area and
              greater {business.county}. The team calls their own facility
              &ldquo;Wagsville&rdquo; — a playful nickname for a very real commitment
              to clean, safe, fully supervised dog care.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ReserveButton location="about_hero" variant="primary" />
              <CallButton location="about_hero" variant="secondary" />
            </div>
          </div>
          <PhotoPlaceholder caption="The Bow Wags facility in Marietta, GA" aspect="square" className="w-full" priority />
        </div>
      </section>

      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>Welcome to Wagsville</Eyebrow>
            <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Population: Canine</h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-bw-ink-soft">
            Every dog who visits Bow Wags — for a daycare day, a boarding stay, or a
            grooming appointment — gets treated like a resident of their own small
            town. It&apos;s a fun way of describing a simple standard: dogs are
            grouped by size and temperament, supervised at every stage of indoor
            and outdoor play, and given real, personal attention rather than being
            treated as one interchangeable group.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-1 font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Safety, Play, and Personal Care</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {differentiators.map((d) => (
            <div key={d.title} className="flex gap-3 rounded-2xl border border-bw-border bg-white p-6">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bw-teal/15 text-bw-teal-dark">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-bw-ink">{d.title}</p>
                <p className="text-sm text-bw-ink-soft">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <PhotoPlaceholder caption={`${groomer.name}, groomer at Bow Wags`} aspect="portrait" className="w-full" />
            <div>
              <Eyebrow>Our Grooming Team</Eyebrow>
              <h2 className="mt-1 font-bw-display text-2xl font-bold text-bw-ink">{groomer.name}</h2>
              <p className="mt-3 text-sm text-bw-ink-soft">
                Grooming at Bow Wags since {groomer.since}, guided by one rule:
                &ldquo;{groomer.philosophy}&rdquo; — {groomer.philosophyExplained.toLowerCase()}
              </p>
              <a href={PATHS.dogGrooming} className="mt-3 inline-block text-sm font-semibold text-bw-orange-dark hover:underline">
                Meet Cynthia and see grooming services →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-bw-display text-3xl font-bold text-bw-ink sm:text-4xl">Come See Wagsville for Yourself</h2>
        <p className="mt-3 text-bw-ink-soft">
          Schedule a temperament test, reserve daycare or boarding, or call about grooming.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ReserveButton location="about_cta" variant="primary" />
          <CallButton location="about_cta" variant="secondary" />
        </div>
      </section>
    </>
  );
}
