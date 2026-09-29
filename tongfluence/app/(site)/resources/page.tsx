import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath } from "@/lib/site-data";
import { resources } from "@/lib/resources-data";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRightIcon } from "@/components/icons";

// SEARCH INTENT
//   Primary:          navigational / hub. Not built to rank on its own.
//   Business purpose: route readers from the guides up to the commercial
//                     pages, and make the library's small size a deliberate,
//                     stated position rather than something to apologise for.
export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Marketing Resources",
  description:
    "A small library for dog grooming businesses: how to rank on Google, and what the grooming websites we built are really made of.",
  path: PATHS.resources,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Resources", href: PATHS.resources },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Resources"
        title="Two guides,"
        accent="not two hundred blog posts."
        intro={
          <>
            We post something when we have something to say that a grooming business owner would save or
            send to a friend. That makes a short list. The short list is the point.
          </>
        }
        location="resources_hero"
        secondary={{ href: PATHS.caseStudies, label: "See the builds" }}
      />

      <Section width="narrow" className="py-12" labelledBy="library">
        <SectionHeading eyebrow="The library" id="library" title="What's here" />
        <ul className="mt-8 space-y-5">
          {resources.map((r) => (
            <li key={r.slug}>
              <Link
                href={resourcePath(r.slug)}
                className="group block rounded-2xl border border-tf-border bg-tf-card p-6 transition-colors hover:border-tf-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-tf-ink-soft">
                  <span className="rounded-full bg-tf-brown-wash px-2.5 py-1 font-semibold text-tf-brown-darker">
                    {r.kind}
                  </span>
                  <span>{r.readingTime}</span>
                </div>
                <h3 className="mt-3 font-tf-display text-xl font-bold text-tf-ink sm:text-2xl">{r.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-tf-ink-soft">{r.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-tf-brown-dark">
                  Read it
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="py-12">
        <CtaBand location="resources_footer" />
      </Section>
    </>
  );
}
