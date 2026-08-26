import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
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
  type AreaSlug,
} from "@/lib/site-data";

// El Sobrante keeps its own hand-built static page — never generated here.
const dynamicAreas = serviceAreas.filter(
  (a): a is (typeof serviceAreas)[number] & { slug: Exclude<AreaSlug, "el-sobrante"> } =>
    a.slug !== "el-sobrante",
);

// Rotate the 4 real client photos across pages so no single photo becomes
// the sole hero for every city; still real photography, never stock.
const heroPhotos = [photos.poodleDoorway, photos.bulldogBandana, photos.huskyGroomed, photos.vanInterior];

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
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            {content.h1}
          </h1>
          <p className="mt-4 text-lg text-psl-ink-soft">{content.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location={`area_${area.slug}`} variant="primary" />
            <RequestButton location={`area_${area.slug}`} variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={heroPhoto.alt} src={heroPhoto.src} aspect="video" className="w-full" priority />
      </section>

      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
            Why {area.city} Pet Owners Choose Pet Spa Luxe
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {content.whyChoose.map((f) => (
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
          Services Available in {area.city}
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
        <FaqBlock items={content.faqs} />
      </section>

      <section className="bg-psl-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-psl-display text-3xl font-bold">Book Mobile Grooming in {area.city}</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location={`area_${area.slug}_cta`} variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
