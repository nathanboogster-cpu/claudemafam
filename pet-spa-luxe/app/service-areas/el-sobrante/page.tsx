import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";
import { business, services, servicePath, areaPath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${areaPath("el-sobrante")}`;

export const metadata: Metadata = {
  title: "Mobile Dog Grooming in El Sobrante, CA",
  description:
    "Pet Spa Luxe is based in El Sobrante, CA, offering luxury mobile dog grooming right at your door — cage-free, one-on-one, rated 5.0 stars on Yelp.",
  alternates: { canonical: areaPath("el-sobrante") },
};

const faqs = [
  {
    question: "Is Pet Spa Luxe based in El Sobrante?",
    answer: `Yes — Pet Spa Luxe is based in El Sobrante, CA (${business.addressFull}) and this is the heart of our mobile grooming route.`,
  },
  {
    question: "Do I need to bring my dog anywhere?",
    answer:
      "No. Pet Spa Luxe's mobile grooming setup comes directly to your El Sobrante home — there's no drop-off and no car ride for your dog.",
  },
  {
    question: "How do I schedule a mobile groom in El Sobrante?",
    answer: `Call ${business.phoneDisplay} to check availability and schedule your dog's appointment.`,
  },
];

export default function ElSobrantePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
          { name: "El Sobrante", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceAreas },
          { name: "El Sobrante", href: areaPath("el-sobrante") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Primary Service Area</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Mobile Dog Grooming in El Sobrante, CA
          </h1>
          <p className="mt-4 text-lg text-psl-ink-soft">
            Pet Spa Luxe is based right here in El Sobrante, which makes it our
            most frequently scheduled service area. Your dog gets the same
            fully equipped mobile setup, cage-free environment, and one-on-one
            attention as every Pet Spa Luxe appointment — without leaving home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="area_el_sobrante" variant="primary" />
            <RequestButton location="area_el_sobrante" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.poodleDoorway.alt} src={photos.poodleDoorway.src} aspect="video" className="w-full" />
      </section>

      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
            Why El Sobrante Pet Owners Choose Pet Spa Luxe
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Based locally in El Sobrante — not driving in from across the Bay Area",
              "No car ride or waiting room for your dog",
              "Cage-free, one-on-one grooming at your door",
              `Rated ${business.yelpRating} stars on Yelp`,
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-psl-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-psl-pink-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
          Services Available in El Sobrante
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={servicePath(s.slug)}
              className="rounded-full border border-psl-border bg-white px-4 py-2 text-sm font-medium text-psl-ink hover:border-psl-brass"
            >
              {s.shortName}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-psl-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-psl-display text-3xl font-bold">Book Mobile Grooming in El Sobrante</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="area_el_sobrante_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
