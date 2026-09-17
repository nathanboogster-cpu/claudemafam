import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton } from "@/components/CTAButton";
import { CheckIcon } from "@/components/icons";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import {
  business,
  groomer,
  groomingServiceDetails,
  groomingServicePath,
  PATHS,
  SITE_URL,
  type GroomingServiceSlug,
} from "@/lib/site-data";

export function generateStaticParams() {
  return groomingServiceDetails.map((g) => ({ slug: g.slug }));
}

function getGroomingService(slug: string) {
  return groomingServiceDetails.find((g) => g.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getGroomingService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.name} for Dogs`,
    description: `${service.shortDescription} Part of every full-service dog groom at Bow Wags in Marietta, GA. Call ${business.phoneDisplay} to book.`,
    path: groomingServicePath(service.slug as GroomingServiceSlug),
  });
}

export default async function GroomingServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getGroomingService(slug);
  if (!service) notFound();
  const url = `${SITE_URL}${groomingServicePath(service.slug as GroomingServiceSlug)}`;
  const otherServices = groomingServiceDetails.filter((g) => g.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          pageUrl: url,
          name: service.name,
          description: service.shortDescription,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Dog Grooming", url: `${SITE_URL}${PATHS.dogGrooming}` },
          { name: service.name, url },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Dog Grooming", href: PATHS.dogGrooming },
          { name: service.name, href: groomingServicePath(service.slug as GroomingServiceSlug) },
        ]}
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <Eyebrow>Dog Grooming • Marietta, GA</Eyebrow>
        <h1 className="mt-1 font-bw-display text-4xl font-bold text-bw-ink sm:text-5xl">{service.name}</h1>
        <p className="mt-4 text-lg text-bw-ink-soft">{service.detail}</p>
        <div className="mt-6 rounded-2xl border border-bw-border bg-bw-cream-deep/60 p-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-bw-ink-soft">Call for Grooming Rates &amp; Appointments</p>
          <a href={business.phoneHref} className="mt-1 block font-bw-display text-3xl font-bold text-bw-ink hover:text-bw-red-dark">
            {business.phoneDisplay}
          </a>
        </div>
        <div className="mt-6">
          <CallButton location={`grooming_${service.slug}`} variant="primary" label="Call to Book Grooming" />
        </div>
      </section>

      <section className="bg-bw-cream-deep">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="font-bw-display text-2xl font-bold text-bw-ink sm:text-3xl">Why It Matters</h2>
          <ul className="mt-6 space-y-3">
            {service.whyItMatters.map((point) => (
              <li key={point} className="flex gap-2 rounded-xl border border-bw-border bg-white p-4 text-sm text-bw-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 mt-0.5 text-bw-teal-dark" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-bw-ink-soft">
            {service.name} is included in every full-service groom at Bow Wags, handled by{" "}
            {groomer.name} — grooming at Bow Wags since {groomer.since}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bw-display text-2xl font-bold text-bw-ink sm:text-3xl">Other Grooming Services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {otherServices.map((g) => (
            <Link
              key={g.slug}
              href={groomingServicePath(g.slug)}
              className="rounded-full border border-bw-border bg-white px-4 py-2 text-sm font-medium text-bw-ink shadow-sm transition-colors hover:border-bw-red-dark hover:text-bw-red-dark"
            >
              {g.name}
            </Link>
          ))}
          <Link
            href={PATHS.dogGrooming}
            className="rounded-full bg-bw-red-dark px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-bw-red"
          >
            See Full Grooming Overview
          </Link>
        </div>
      </section>

      <section className="bg-bw-red-dark text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bw-display text-3xl font-bold">Ready to Book?</h2>
          <p className="text-white/90">Call {business.phoneDisplay} for current rates and to schedule an appointment.</p>
          <CallButton location={`grooming_${service.slug}_cta`} variant="ghost" className="mt-2 bg-white" />
        </div>
      </section>
    </>
  );
}
