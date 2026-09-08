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

const url = `${SITE_URL}${areaPath("eatontown-nj")}`;

export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Salon in Eatontown, NJ",
  description:
    "Flo's Happy Clipper is based right on Main St in Eatontown, NJ, offering full-service dog grooming from a long-established local salon.",
  path: areaPath("eatontown-nj"),
});

const faqs = [
  {
    question: "Is Flo's Happy Clipper located in Eatontown?",
    answer: `Yes — our grooming salon is at ${business.addressFull}, right on Main St.`,
  },
  {
    question: "How long has Flo's Happy Clipper been in Eatontown?",
    answer: "Flo's Happy Clipper is a long-established grooming salon that has served the Eatontown area for years.",
  },
  {
    question: "How do I schedule an appointment at the Eatontown salon?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your dog's grooming appointment.`,
  },
];

export default function EatontownPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
          { name: "Eatontown, NJ", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceAreas },
          { name: "Eatontown, NJ", href: areaPath("eatontown-nj") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Our Home Salon</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            Our Eatontown, NJ Dog Grooming Salon
          </h1>
          <p className="mt-4 text-lg text-fh-ink-soft">
            Eatontown is home — our grooming salon has been located at {business.addressFull} for years,
            making us a longtime Main St fixture rather than a newcomer or a chain location.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="area_eatontown" variant="primary" />
            <SecondaryLinkButton location="area_eatontown" variant="secondary" label="Get Directions" href={business.mapsUrl} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.puppyVisit.alt} src={photos.puppyVisit.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="fh-paw-pattern bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">
            Why Eatontown Pet Owners Choose Flo&apos;s Happy Clipper
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A local salon, right on Main St, for years",
              "Personal, one-on-one attention for every dog",
              "Skilled with doodle & poodle trims",
              "An alternative to driving further out for a big-box chain groomer",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-fh-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-fh-pink-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Services Available in Eatontown</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={servicePath(s.slug)}
              className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark"
            >
              {s.shortName}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="relative overflow-hidden bg-fh-ink text-white">
        <div className="fh-blob -right-16 top-0 h-56 w-56 bg-fh-blue/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Visit Our Eatontown Salon</h2>
          <p className="text-white/80">{business.addressFull} · Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="area_eatontown_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
