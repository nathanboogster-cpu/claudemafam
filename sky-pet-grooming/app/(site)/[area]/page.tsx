import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areaByKey, business, PATHS, serviceAreas, SITE_URL, vanFeatures } from "@/lib/site-data";
import { photos } from "@/lib/photos";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton, PhoneLink } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Pic } from "@/components/Pic";
import { TrustBar } from "@/components/TrustBar";
import { AreaLinks } from "@/components/AreaLinks";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon } from "@/components/icons";

// One page per service area: /mobile-dog-grooming-<city>-ca/. Only the
// areas in site-data are built; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ area: a.slug.replaceAll("/", "") }));
}

function areaFromParam(param: string) {
  const a = serviceAreas.find((x) => x.slug === `/${param}/`);
  if (!a) notFound();
  return a;
}

function description(city: string) {
  return `Mobile dog and cat grooming in ${city}, CA. Our van comes to your door. Licensed, insured, eco-friendly. Book online or call (415) 754-0813.`;
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const a = areaFromParam((await params).area);
  return pageMetadata({
    // Long city names drop "Grooming" from the brand to stay within 60 characters.
    title: `Mobile Dog Grooming ${a.city}, CA | ${a.city.length > 15 ? "Sky Pet" : "Sky Pet Grooming"}`,
    description: description(a.city),
    path: a.slug,
  });
}

// Dog photos to show on area pages (not the van/team shots, which the page
// already uses), rotated so each area gets a different set of four.
const dogPhotos = photos.filter((p) => p.tags.includes("dog") && !p.tags.includes("van") && !p.tags.includes("team"));

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const a = areaFromParam((await params).area);
  const index = serviceAreas.indexOf(a);
  const pagePhotos = [0, 1, 2, 3].map((k) => dogPhotos[(index * 4 + k) % dogPhotos.length]);
  const nearby = a.nearby.map(areaByKey);
  const pageUrl = `${SITE_URL}${a.slug}`;
  const zipText = a.zips.length ? ` (${a.zips.join(", ")})` : "";

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Service Areas", href: PATHS.serviceArea },
          { name: a.city, href: a.slug },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceArea}` },
          { name: a.city, url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({ pageUrl, name: `Mobile pet grooming in ${a.city}`, description: description(a.city), city: a.city })}
      />

      <section className="bg-gradient-to-b from-sky-deep to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-6 md:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>{a.city}, California</Eyebrow>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Mobile Dog &amp; Cat Grooming in {a.city}
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Our fully equipped grooming van comes to your home in {a.city}
              {zipText}. Your pet is groomed right outside your door: no car ride, no waiting room.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton location={`area_top_${index}`} />
              <CallButton location={`area_top_${index}`} />
            </div>
            <TrustBar className="mt-6" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-4 ring-white">
            <Pic slug="sky-pet-grooming-van" hero fill sizes="(min-width: 768px) 520px, 100vw" className="object-cover object-[50%_70%]" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <Eyebrow>About the Area</Eyebrow>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Grooming at Your Door in {a.city}</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">{a.intro}</p>
          <p className="mt-3 leading-relaxed text-ink-soft">{a.local}</p>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Not sure we reach your street? Call <PhoneLink location={`area_body_${index}`} className="inline-flex min-h-6 items-center" />{" "}
            or ask when you book online.
          </p>
        </div>
        <div>
          <Eyebrow>The Van</Eyebrow>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">A Salon on Wheels</h2>
          <ul className="mt-5 space-y-3">
            {vanFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-ink-soft">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="text-center">
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl">Grooming Services in {a.city}</h2>
          </div>
          <div className="mt-10">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Our Work</Eyebrow>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Fresh From the Van</h2>
          </div>
          <Link href={PATHS.gallery} className="inline-flex min-h-[44px] items-center font-bold text-brand hover:underline">
            See the full gallery →
          </Link>
        </div>
        <PhotoGrid items={pagePhotos} square className="mt-8" />
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <ProcessSteps />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <Eyebrow>Nearby</Eyebrow>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">We Also Groom Near {a.city}</h2>
        <AreaLinks areas={nearby} className="mt-6 justify-center" />
        <p className="mt-6">
          <Link href={PATHS.serviceArea} className="inline-flex min-h-[44px] items-center font-bold text-brand hover:underline">
            All service areas →
          </Link>
        </p>
      </section>

      <BottomCta
        title={`Book a groom in ${a.city}`}
        body={`Mobile dog and cat grooming at your door. Book online or call ${business.phone.display}.`}
        location={`area_bottom_${index}`}
      />
    </div>
  );
}
