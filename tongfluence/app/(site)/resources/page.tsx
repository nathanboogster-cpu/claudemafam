import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath } from "@/lib/site-data";
import { resources } from "@/lib/resources-data";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
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
    "A deliberately small library for dog grooming businesses: how to rank on Google, and what the grooming websites we've built are actually made of.",
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
        title="Two guides, not two hundred blog posts."
        intro={
          <>
            We publish something when we have something to say that a grooming business owner would actually
            save or send to someone else. That produces a short list, and the short list is the point.
          </>
        }
        location="resources_hero"
        secondary={{ href: PATHS.caseStudies, label: "See the builds" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock label="Why the list is short">
          <p>
            A grooming business does not need another article about the importance of a strong online
            presence. Almost all marketing content in this industry exists because somebody decided their
            website needed a blog. Ours exists because we have built{" "}
            <Link href={PATHS.caseStudies} className="font-medium underline underline-offset-4">
              grooming websites
            </Link>{" "}
            and have something specific to report from them. When there is a third thing worth writing, there
            will be three.
          </p>
        </AnswerBlock>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="library">
        <SectionHeading eyebrow="The library" id="library" title="What's here" />
        <ul className="mt-8 space-y-5">
          {resources.map((r) => (
            <li key={r.slug}>
              <Link
                href={resourcePath(r.slug)}
                className="group block rounded-3xl border border-tf-border bg-white p-6 transition-colors hover:border-tf-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark sm:p-7"
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

      <Section width="narrow" className="py-12" labelledBy="not-published">
        <SectionHeading
          eyebrow="Transparency"
          id="not-published"
          title="What we decided not to publish, and why"
          intro="These were all on the list. Each was cut for a reason worth stating out loud."
        />
        <dl className="mt-7 space-y-5">
          {[
            {
              t: "“How to get more dog grooming clients”",
              b: (
                <>
                  Exactly the same search intent as{" "}
                  <Link
                    href={PATHS.leadGeneration}
                    className="font-medium text-tf-brown-dark underline underline-offset-4"
                  >
                    our lead generation page
                  </Link>
                  . Two pages chasing one intent compete with each other and neither wins.
                </>
              ),
            },
            {
              t: "“Dog grooming SEO keywords”",
              b: (
                <>
                  A keyword list is only worth anything with real volume and query data behind it. We do not
                  have an exported Search Console dataset for grooming yet, and a made-up keyword list is
                  precisely the filler this library exists to avoid. It will be published when there is real
                  data to publish.
                </>
              ),
            },
            {
              t: "“Google Business Profile categories for dog groomers”",
              b: (
                <>
                  Google&rsquo;s category list changes and the only authoritative version is the picker inside
                  your own profile. Rather than publish a list we cannot verify, categories are covered
                  conceptually on{" "}
                  <Link
                    href={PATHS.gbp}
                    className="font-medium text-tf-brown-dark underline underline-offset-4"
                  >
                    the Google Business Profile page
                  </Link>
                  , which points at Google&rsquo;s own documentation.
                </>
              ),
            },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-tf-border bg-white p-5">
              <dt className="font-semibold text-tf-ink">{x.t}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{x.b}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="py-12">
        <CtaBand location="resources_footer" />
      </Section>
    </>
  );
}
