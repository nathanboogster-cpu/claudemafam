import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, services, servicePath, areaPath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${areaPath("hagerstown-md")}`;

export const metadata: Metadata = pageMetadata({
  title: "Dog & Pet Grooming in Hagerstown, MD",
  description:
    "Sittin' Pretty Pet Grooming is located just outside Hagerstown, MD in nearby Funkstown, offering full-service dog and cat grooming to the Hagerstown area.",
  path: areaPath("hagerstown-md"),
});

const faqs = [
  {
    question: "Is Sittin' Pretty located in Hagerstown?",
    answer: `Sittin' Pretty is located in nearby Funkstown, MD (${business.addressFull}), just a few minutes from downtown Hagerstown, and we serve pet owners throughout the Hagerstown area.`,
  },
  {
    question: "How far is Sittin' Pretty from downtown Hagerstown?",
    answer:
      "Our Funkstown salon is a short drive from downtown Hagerstown — close enough to be a convenient, local alternative to a big-box grooming chain.",
  },
  {
    question: "Do you groom both dogs and cats for Hagerstown customers?",
    answer: "Yes — full-service dog grooming and cat grooming are both available to Hagerstown-area pet owners.",
  },
  {
    question: "How do I schedule an appointment from Hagerstown?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your pet's grooming appointment.`,
  },
];

export default function HagerstownPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
          { name: "Hagerstown, MD", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceAreas },
          { name: "Hagerstown, MD", href: areaPath("hagerstown-md") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Serving the Hagerstown Area</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Dog & Pet Grooming in Hagerstown, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            Sittin&apos; Pretty Pet Grooming is located in nearby Funkstown, just a few minutes from downtown
            Hagerstown. We&apos;ve served Hagerstown-area pet owners for decades, offering the personal
            attention of a local salon instead of a big-box grooming chain.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="area_hagerstown" variant="primary" />
            <SecondaryLinkButton location="area_hagerstown" variant="secondary" label="Get Directions" href={business.mapsUrl} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.tricolorDogBandana.alt} src={photos.tricolorDogBandana.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">
            Why Hagerstown Pet Owners Choose Sittin&apos; Pretty
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Just a few minutes from downtown Hagerstown",
              "Decades of experience grooming local dogs and cats",
              "Personal, one-on-one attention instead of a rushed chain-salon visit",
              "Comfortable with nervous, senior, and large-breed dogs",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-sp-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-sp-purple-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">Services Available to Hagerstown Pet Owners</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={servicePath(s.slug)}
              className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-purple-dark"
            >
              {s.shortName}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-sp-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-sp-display text-3xl font-bold">Book Grooming From the Hagerstown Area</h2>
          <p className="text-white/80">{business.addressFull} · Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="area_hagerstown_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
