import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, caseStudyPath } from "@/lib/site-data";
import { caseStudies, getCaseStudy } from "@/lib/case-studies-data";
import { getBuild } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema, caseStudySchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { CheckIcon } from "@/components/icons";

// Every case study is statically generated at build time — there is a fixed,
// known set of them, so there is no reason for any of these to be dynamic.
export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return pageMetadata({
    title: study.metaTitle,
    titleTemplate: false,
    description: study.metaDescription,
    path: caseStudyPath(study.slug),
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const build = getBuild(study.slug);
  const breadcrumbs = [
    { name: "Home", href: PATHS.home },
    { name: "Case Studies", href: PATHS.caseStudies },
    { name: study.clientName, href: caseStudyPath(study.slug) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd
        data={caseStudySchema({
          headline: study.h1,
          description: study.metaDescription,
          path: caseStudyPath(study.slug),
          datePublished: study.publishedAt,
          clientName: study.clientName,
          clientMarket: study.market,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <article>
        <Section className="pt-6 pb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tf-green-dark">
              Case study · {study.businessType}
            </p>
            <h1 className="mt-3 font-tf-display text-3xl font-extrabold leading-[1.14] text-tf-ink sm:text-4xl">
              {study.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">{study.dek}</p>
          </div>

          <dl className="mt-10 grid gap-x-8 gap-y-5 rounded-3xl border border-tf-border bg-white p-6 sm:grid-cols-2 lg:grid-cols-3">
            {study.atAGlance.map((row) => (
              <div key={row.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-tf-ink-soft">{row.label}</dt>
                <dd className="mt-1 font-semibold text-tf-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* ------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="situation">
          <SectionHeading eyebrow="The situation" id="situation" title="What the business had" />
          <div className="tf-prose mt-6">
            {study.situation.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="diagnosis">
          <SectionHeading
            eyebrow="The diagnosis"
            id="diagnosis"
            title="What was structurally wrong"
            intro="Not a list of things that looked dated — a list of reasons specific searches had nothing to match against."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {study.diagnosis.map((d) => (
              <div key={d.title} className="rounded-2xl border border-tf-border bg-white p-5">
                <h3 className="text-sm font-semibold text-tf-ink">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="built">
          <SectionHeading eyebrow="The build" id="built" title="What we changed" />
          <div className="mt-8 space-y-10">
            {study.built.map((section) => (
              <section key={section.id} aria-labelledby={`built-${section.id}`}>
                <h3
                  id={`built-${section.id}`}
                  className="font-tf-display text-xl font-bold text-tf-ink"
                >
                  {section.heading}
                </h3>
                {section.paragraphs?.length ? (
                  <div className="tf-prose mt-3">
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                ) : null}
                {section.items?.length ? (
                  <ul className="mt-4 space-y-4">
                    {section.items.map((item) => (
                      <li key={item.title} className="flex gap-3 rounded-2xl border border-tf-border bg-white p-5">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-tf-green-dark" />
                        <div>
                          <p className="font-semibold text-tf-ink">{item.title}</p>
                          <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="results">
          <SectionHeading
            eyebrow="Results"
            id="results"
            title="What shipped, and what we can't tell you yet"
          />

          <h3 className="mt-7 font-tf-display text-lg font-bold text-tf-ink">What shipped</h3>
          <ul className="mt-4 space-y-3">
            {study.results.shipped.map((r) => (
              <li key={r.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed text-tf-ink-soft">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-tf-green-dark" />
                <span>{r}</span>
              </li>
            ))}
          </ul>

          {study.results.measured.length ? (
            <>
              <h3 className="mt-9 font-tf-display text-lg font-bold text-tf-ink">Measured</h3>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-tf-border bg-white">
                <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Measured search performance for {study.clientName}, with source and time period
                  </caption>
                  <thead>
                    <tr className="border-b border-tf-border bg-tf-paper-deep">
                      <th scope="col" className="px-4 py-3 font-semibold text-tf-ink">Metric</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-tf-ink">Period</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-tf-ink">Source</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-tf-ink">Value</th>
                      <th scope="col" className="px-4 py-3 font-semibold text-tf-ink">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.results.measured.map((m) => (
                      <tr key={m.metric} className="border-b border-tf-border last:border-0">
                        <th scope="row" className="px-4 py-3 font-medium text-tf-ink">{m.metric}</th>
                        <td className="px-4 py-3 text-tf-ink-soft">{m.period}</td>
                        <td className="px-4 py-3 text-tf-ink-soft">{m.source}</td>
                        <td className="px-4 py-3 font-tf-mono text-tf-ink">{m.value}</td>
                        <td className="px-4 py-3 font-tf-mono text-tf-ink">{m.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}

          <div className="mt-8">
            <AnswerBlock label="Why there are no performance numbers here">
              <p>{study.results.pending}</p>
            </AnswerBlock>
          </div>
        </Section>

        {/* ------------------------------------------------------------- */}
        <Section width="narrow" className="py-10" labelledBy="lessons">
          <SectionHeading eyebrow="What we took from it" id="lessons" title="Lessons" />
          <dl className="mt-7 space-y-6">
            {study.lessons.map((l) => (
              <div key={l.title} className="border-l-2 border-tf-clay/40 pl-5">
                <dt className="font-tf-display text-lg font-bold text-tf-ink">{l.title}</dt>
                <dd className="mt-2 text-base leading-relaxed text-tf-ink-soft">{l.body}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </article>

      <Section className="py-12">
        <RelatedLinks
          title="The work behind this build"
          items={[
            {
              href: PATHS.websiteDesign,
              label: "Dog grooming website design",
              description: `The page structure used here — ${build?.pages.services ?? 0} service pages and ${
                build?.pages.areas ?? 0
              } area pages.`,
            },
            {
              href: PATHS.gbp,
              label: "Google Business Profile for dog groomers",
              description: "The profile side of this build, in detail.",
            },
            {
              href: PATHS.seo,
              label: "Dog groomer SEO",
              description: "Why these sites are structured this way, and what happens after launch.",
            },
            {
              href: PATHS.caseStudies,
              label: "All case studies",
              description: "The rest of the grooming businesses we've built for.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location={`case_study_${study.slug}_footer`}
          title={`Is your business in the same position as ${study.clientName}?`}
          body="A short call: we open your Google Business Profile and your current site while you're on the line, and tell you what we'd change first."
        />
      </Section>

      <Section width="narrow" className="pb-12">
        <p className="text-xs leading-relaxed text-tf-ink-soft">
          Published {new Date(`${study.publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
          . Business details described here are published by {study.clientName} itself. Page counts come from
          the build&rsquo;s own sitemap. See{" "}
          <Link href={PATHS.caseStudies} className="underline underline-offset-4 hover:text-tf-green-dark">
            all case studies
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
