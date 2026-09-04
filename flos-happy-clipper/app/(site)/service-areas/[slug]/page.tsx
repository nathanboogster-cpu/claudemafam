import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import {
  business,
  services,
  serviceAreas,
  areaContent,
  servicePath,
  areaPath,
  photos,
  PATHS,
  SITE_URL,
  type SecondaryAreaSlug,
} from "@/lib/site-data";

// Eatontown keeps its own hand-built static page — never generated here.
const PRIMARY_SLUGS = new Set(["eatontown-nj"]);
const dynamicAreas = serviceAreas.filter(
  (a): a is (typeof serviceAreas)[number] & { slug: SecondaryAreaSlug } => !PRIMARY_SLUGS.has(a.slug),
);

// Rotate photo placeholders across pages so no single caption becomes the
// sole hero for every town.
const heroPhotos = [
  photos.largeBreedGroom,
  photos.doubleCoatedGroom,
  photos.smallBreedGroom,
  photos.poodleGroom,
  photos.bathAndBrush,
  photos.salonInterior,
  photos.salonStorefront,
  photos.largeBreedGroom,
];

export function generateStaticParams() {
  return dynamicAreas.map((a) => ({ slug: a.slug }));
}

function getArea(slug: string) {
  const area = dynamicAreas.find((a) => a.slug === slug);
  if (!area) return null;
  const content = areaContent[area.slug];
  return { area, content };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = getArea(slug);
  if (!found) return {};
  const { area, content } = found;
  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: areaPath(area.slug),
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getArea(slug);
  if (!found) notFound();
  const { area, content } = found;
  const url = `${SITE_URL}${areaPath(area.slug)}`;
  const heroPhoto = heroPhotos[dynamicAreas.findIndex((a) => a.slug === area.slug) % heroPhotos.length];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceAreas}` },
          { name: area.city, url },
        ])}
      />
      <JsonLd data={faqSchema(content.faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceAreas },
          { name: area.city, href: areaPath(area.slug) },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">{content.h1}</h1>
          <p className="mt-4 text-lg text-fh-ink-soft">{content.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location={`area_${area.slug}`} variant="primary" />
            <SecondaryLinkButton location={`area_${area.slug}`} variant="secondary" label="Get Directions" href={business.mapsUrl} />
          </div>
        </div>
        <PhotoPlaceholder caption={heroPhoto.caption} aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">
            Why {area.city} Pet Owners Choose Flo&apos;s Happy Clipper
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {content.whyChoose.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-fh-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-fh-amber-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Services Available in {area.city}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={servicePath(s.slug)}
              className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink hover:border-fh-amber-dark"
            >
              {s.shortName}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={content.faqs} />
      </section>

      <section className="bg-fh-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Book Grooming From {area.city}</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location={`area_${area.slug}_cta`} variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
