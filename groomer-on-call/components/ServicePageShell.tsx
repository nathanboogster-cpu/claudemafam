import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { Eyebrow } from "./Eyebrow";
import { CallButton, SecondaryLinkButton } from "./CTAButton";
import { CtaBand } from "./CtaBand";
import { FaqBlock, type Faq } from "./FaqBlock";
import { Section, SectionHeading } from "./Section";
import { BrandArt } from "./BrandArt";
import { CheckIcon, ArrowIcon } from "./icons";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import {
  business,
  market,
  services,
  servicePath,
  PATHS,
  SITE_URL,
  getService,
  hoursNote,
  type ServiceSlug,
} from "@/lib/site-data";

/**
 * Shared chrome for the four service pages: breadcrumbs (visible + schema),
 * hero, the Service JSON-LD node, a "related services" internal-link block,
 * the page FAQ, and the closing CTA.
 *
 * The body of each page — the part that has to be genuinely different to
 * avoid near-duplicate content — is passed in as children and written per
 * service. Nothing here templates the actual page copy.
 */
export function ServicePageShell({
  slug,
  h1,
  eyebrow,
  intro,
  heroBullets,
  art,
  schemaDescription,
  faqs,
  children,
}: {
  slug: ServiceSlug;
  h1: string;
  eyebrow: string;
  intro: string;
  heroBullets: string[];
  art: "route" | "bath" | "cat" | "tools";
  schemaDescription: string;
  faqs: readonly Faq[];
  children: React.ReactNode;
}) {
  const service = getService(slug);
  const url = `${SITE_URL}${servicePath(slug)}`;
  const related = services.filter((s) => s.slug !== slug);

  const crumbs = [
    { name: "Home", href: PATHS.home },
    { name: "Services", href: PATHS.services },
    { name: service.navLabel, href: servicePath(slug) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href === "/" ? "" : c.href}` })))} />
      <JsonLd data={serviceSchema({ pageUrl: url, name: service.name, description: schemaDescription })} />

      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-goc-cream">
        <div className="goc-blob -left-24 -top-20 h-72 w-72 bg-goc-magenta/25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-3 font-goc-display text-4xl font-extrabold leading-[1.06] text-goc-ink sm:text-5xl">
              {h1}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-goc-ink-soft">{intro}</p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm font-semibold text-goc-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-goc-magenta-dark" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton location={`service_${slug}_hero`} label="Call To Book" />
              <SecondaryLinkButton href={PATHS.serviceAreas} label="Do You Come To Me?" />
            </div>
            <p className="mt-4 text-sm font-semibold text-goc-ink-soft">
              {business.phoneDisplay} · {hoursNote}
            </p>
          </div>
          <BrandArt scene={art} aspect="wide" className="shadow-xl shadow-black/5" />
        </div>
      </section>

      {children}

      {/* Related services — descriptive anchors, so both readers and crawlers
          know where each link goes. Keeps every service page one click from
          every other. */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Also Available"
          title="Other Mobile Grooming Services"
          intro={`Everything Groomer On Call offers happens at your home in the ${market.cityState} area.`}
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <Link
                href={servicePath(s.slug)}
                className="group flex h-full flex-col rounded-2xl border-2 border-goc-border bg-goc-cream p-6 transition-all duration-200 hover:-translate-y-1 hover:border-goc-magenta-dark"
              >
                <span className="font-goc-display text-lg font-extrabold text-goc-ink">{s.name}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-goc-ink-soft">{s.summary}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-goc-magenta-darker">
                  {s.navLabel}
                  <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="deep">
        <SectionHeading eyebrow="Questions" title={`${service.name} — Common Questions`} align="center" />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqBlock faqs={[...faqs]} />
          <div className="mt-8 text-center">
            <SecondaryLinkButton href={PATHS.faq} label="All Frequently Asked Questions" />
          </div>
        </div>
      </Section>

      <CtaBand
        location={`service_${slug}_footer`}
        heading={`Book ${service.name}`}
        secondary={{ href: PATHS.services, label: "All Services" }}
      />
    </>
  );
}

/** A titled prose block used inside service page bodies. */
export function Prose({ title, children, id }: { title?: string; children: React.ReactNode; id?: string }) {
  return (
    <div className="max-w-3xl">
      {title ? (
        <h2 id={id} className="font-goc-display text-2xl font-extrabold text-goc-ink sm:text-3xl">
          {title}
        </h2>
      ) : null}
      <div className="mt-4 space-y-4 leading-relaxed text-goc-ink-soft [&_a]:font-bold [&_a]:text-goc-magenta-darker [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
    </div>
  );
}

/** Checklist used for "what's included" style content. */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 rounded-2xl border-2 border-goc-border bg-white p-4">
          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-goc-magenta-dark" />
          <span className="font-semibold text-goc-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}
