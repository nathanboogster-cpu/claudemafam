import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  beforeAfterPhotos,
  groomedPhotos,
  packages,
  PATHS,
  priceNote,
  serviceFromPrice,
  servicePages,
  servicePath,
  SITE_URL,
} from "@/lib/site-data";
import { blogPostPath, getBlogPost } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/metadata";
import { CallButton, DirectionsButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { Photo } from "@/components/Photo";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon } from "@/components/icons";

export function generateStaticParams() {
  return servicePages.map((s) => ({ service: s.slug }));
}

export const dynamicParams = false;

const getService = (slug: string) => servicePages.find((s) => s.slug === slug);
const allPhotos = [...beforeAfterPhotos, ...groomedPhotos];

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.seoTitle, description: service.description, path: servicePath(service.slug) });
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const pageUrl = `${SITE_URL}${servicePath(service.slug)}`;
  const fromPrice = serviceFromPrice(service);
  const including = packages.filter((p) => (service.packages as readonly string[]).includes(p.name));
  const photo = allPhotos.find((p) => p.src.includes(service.photo));
  const guide = getBlogPost(service.guideSlug);
  const others = servicePages.filter((s) => s.slug !== service.slug);
  const loc = `service_${service.slug.replace(/-/g, "_")}`;

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Dog Grooming", href: PATHS.dogGrooming },
          { name: service.name, href: servicePath(service.slug) },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Dog Grooming", url: `${SITE_URL}${PATHS.dogGrooming}` },
          { name: service.name, url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: service.schemaName,
          description: service.description,
          packageNames: service.packages,
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>Dog Grooming Services · Bryn Mawr</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{service.name} in Bryn Mawr, PA</h1>
          <p className="mt-4 text-lg text-ink-soft">
            {service.hook}
            <br />
            {service.intro}
          </p>
          <p className="mt-4 font-display text-2xl font-bold text-brand">{`From $${fromPrice}`}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CallButton location={`${loc}_top`} />
            <DirectionsButton location={`${loc}_top`} />
          </div>
        </div>
        {photo ? <Photo photo={photo} aspect="square" preload sizes="(max-width: 768px) 100vw, 50vw" /> : null}
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">What&rsquo;s Included</h2>
            <ul className="mt-4 space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-soft">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Good to Know</h2>
            <ul className="mt-4 space-y-3">
              {service.goodToKnow.map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-soft">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
            {guide ? (
              <p className="mt-4 text-sm text-ink-soft">
                More in our guide:{" "}
                <Link href={blogPostPath(guide.slug)} className="font-semibold text-brand hover:underline">
                  {guide.title}
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-bold text-ink">
          {including.length === packages.length ? "Included in Every Package" : "Packages That Include It"}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {including.map((p) => (
            <Link
              key={p.name}
              href={`${PATHS.dogGrooming}#pricing`}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-lg font-bold text-ink">{p.name}</h3>
              <p className="mt-1 font-display text-xl font-bold text-brand">{`From $${p.price}`}</p>
              <span className="mt-2 inline-block text-sm font-semibold text-brand">See what&rsquo;s included →</span>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-soft">{priceNote}</p>
        <p className="mt-2 text-sm text-ink-soft">
          Can&rsquo;t drop off?{" "}
          <Link href={PATHS.pickup} className="font-semibold text-brand hover:underline">
            Ask about pickup and delivery.
          </Link>
        </p>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-xl font-bold text-ink text-center">Our Other Grooming Services</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={servicePath(s.slug)}
                className="rounded-xl border border-border bg-cream p-4 text-sm font-semibold text-brand hover:bg-cream-deep"
              >
                {s.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BottomCta title="Ready to book your dog's groom?" location={`${loc}_bottom`} />
    </div>
  );
}
