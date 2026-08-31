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
import { business, services, servicePath, areaPath, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${areaPath("funkstown-md")}`;

export const metadata: Metadata = pageMetadata({
  title: "Pet Grooming in Funkstown, MD",
  description:
    "Sittin' Pretty Pet Grooming is based right in Funkstown, MD, offering full-service dog and cat grooming from an established local salon.",
  path: areaPath("funkstown-md"),
});

const faqs = [
  {
    question: "Is Sittin' Pretty located in Funkstown?",
    answer: `Yes — our grooming salon is at ${business.addressFull}, in Funkstown.`,
  },
  {
    question: "How long has Sittin' Pretty been in Funkstown?",
    answer:
      "Sittin' Pretty has been grooming pets in the Funkstown area for decades, serving generations of local dogs and cats.",
  },
  {
    question: "How do I schedule an appointment at the Funkstown salon?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your pet's grooming appointment.`,
  },
];

export default function FunkstownPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
          { name: "Funkstown, MD", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceAreas },
          { name: "Funkstown, MD", href: areaPath("funkstown-md") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Our Home Salon</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Pet Grooming in Funkstown, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            Funkstown is home — our grooming salon has been located at {business.addressFull} for
            decades, making us a longtime neighborhood fixture rather than a newcomer or a chain
            location.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="area_funkstown" variant="primary" />
            <SecondaryLinkButton location="area_funkstown" variant="secondary" label="Get Directions" href={business.mapsUrl} />
          </div>
        </div>
        <PhotoPlaceholder caption="Sittin' Pretty Pet Grooming salon exterior in Funkstown, MD" aspect="square" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">
            Why Funkstown Pet Owners Choose Sittin&apos; Pretty
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A local salon, in the neighborhood, for decades",
              "Personal, one-on-one attention for every pet",
              "Full-service dog grooming plus cat grooming",
              "An alternative to driving into Hagerstown for a big-box chain groomer",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-sp-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-sp-green-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">Services Available in Funkstown</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={servicePath(s.slug)}
              className="rounded-full border border-sp-border bg-white px-4 py-2 text-sm font-medium text-sp-ink hover:border-sp-green-dark"
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
          <h2 className="font-sp-display text-3xl font-bold">Visit Our Funkstown Salon</h2>
          <p className="text-white/80">{business.addressFull} · Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="area_funkstown_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
