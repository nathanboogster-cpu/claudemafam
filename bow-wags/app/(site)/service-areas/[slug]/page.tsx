import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, ReserveButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import {
  business,
  services,
  serviceAreas,
  areaContent,
  servicePath,
  areaPath,
  PATHS,
  SITE_URL,
  type ServiceAreaSlug,
} from "@/lib/site-data";

// Rotate real client photos across area pages so no single photo becomes
// the sole hero for every town.
const heroPhotos = [
  { src: "/images/happy-dog-lobby-aussie.jpg", caption: "A happy dog inside the Bow Wags facility" },
  { src: "/images/outdoor-play-springer.jpg", caption: "Dog enjoying outdoor play at Bow Wags" },
  { src: "/images/boarding-dogs-resting.jpg", caption: "Dogs resting in a boarding suite at Bow Wags" },
  { src: "/images/groomed-dog-bandana.jpg", caption: "Freshly groomed dog at Bow Wags" },
  { src: "/images/dog-lobby-husky.jpg", caption: "A dog relaxing inside the Bow Wags facility" },
];

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

function getArea(slug: string) {
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return null;
  return { area, content: areaContent[area.slug as ServiceAreaSlug] };
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
  const heroPhoto = heroPhotos[serviceAreas.findIndex((a) => a.slug === area.slug) % heroPhotos.length];

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
          <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">{content.h1}</h1>
          <p className="mt-4 text-lg text-bw-ink-soft">{content.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ReserveButton location={`area_${area.slug}`} variant="primary" />
            <ReserveButton
              location={`area_${area.slug}`}
              variant="secondary"
              label="Get Directions"
              href={business.mapsUrl}
            />
          </div>
        </div>
        <PhotoPlaceholder caption={heroPhoto.caption} src={heroPhoto.src} aspect="square" className="w-full" priority />
      </section>

      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bw-display text-2xl font-bold text-bw-ink sm:text-3xl">
            Why {area.city} Dog Owners Choose Bow Wags
          </h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {content.whyChoose.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-bw-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-bw-teal-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bw-display text-2xl font-bold text-bw-ink sm:text-3xl">Services Available for {area.city}</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={servicePath(s.slug)}
              className="rounded-full border border-bw-border bg-white px-4 py-2 text-sm font-medium text-bw-ink shadow-sm transition-colors hover:border-bw-red-dark hover:text-bw-red-dark"
            >
              {s.shortName}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={content.faqs} />
      </section>

      <section className="bg-bw-red-dark text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bw-display text-3xl font-bold">Book From {area.city}</h2>
          <p className="text-white/90">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location={`area_${area.slug}_cta`} variant="ghost" className="mt-2 bg-white" />
        </div>
      </section>
    </>
  );
}
