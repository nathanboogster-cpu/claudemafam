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

const url = `${SITE_URL}${areaPath("halfway-md")}`;

export const metadata: Metadata = pageMetadata({
  title: "Pet Grooming Near Halfway, MD",
  description:
    "Sittin' Pretty Pet Grooming serves pet owners in Halfway, MD from our established grooming salon in nearby Funkstown. Dog & cat grooming.",
  path: areaPath("halfway-md"),
});

const faqs = [
  {
    question: "Does Sittin' Pretty serve Halfway, MD?",
    answer: `Yes — Halfway is a confirmed part of our service area. Our salon is located at ${business.addressFull} in Funkstown, a short drive from Halfway.`,
  },
  {
    question: "Is Halfway far from your salon?",
    answer: "Halfway sits on the west side of Hagerstown, a short drive from our Funkstown salon.",
  },
  {
    question: "What services can I book from Halfway?",
    answer: "Full-service dog grooming, dog bath & brush, and cat grooming are all available to Halfway-area pet owners.",
  },
  {
    question: "How do I schedule from Halfway?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your pet's grooming appointment.`,
  },
];

export default function HalfwayPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
          { name: "Halfway, MD", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceAreas },
          { name: "Halfway, MD", href: areaPath("halfway-md") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Verified Service Area</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Pet Grooming Near Halfway, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            Sittin&apos; Pretty Pet Grooming welcomes pet owners from Halfway, MD to our established salon in
            nearby Funkstown — a short drive on the other side of Hagerstown, with the same personal,
            full-service grooming we&apos;ve offered the community for decades.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="area_halfway" variant="primary" />
            <SecondaryLinkButton location="area_halfway" variant="secondary" label="Get Directions" href={business.mapsUrl} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.seniorBlackDog.alt} src={photos.seniorBlackDog.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">
            Why Halfway Pet Owners Choose Sittin&apos; Pretty
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A confirmed part of our grooming service area",
              "An established local salon, not a national chain",
              "Full-service dog grooming plus cat grooming",
              "Personal, one-on-one attention for every appointment",
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
        <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">Services Available to Halfway Pet Owners</h2>
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
          <h2 className="font-sp-display text-3xl font-bold">Book Grooming From Halfway</h2>
          <p className="text-white/80">{business.addressFull} · Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="area_halfway_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
