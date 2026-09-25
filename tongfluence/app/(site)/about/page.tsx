import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, business, offer, founder, resourcePath, headlineResult } from "@/lib/site-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Checklist } from "@/components/Checklist";

// SEARCH INTENT
//   Primary:          navigational / trust. Somebody who is most of the way to
//                     booking and is checking whether we are real.
//   Business purpose: explain why the specialisation exists, how the work
//                     actually runs, and what we will not do — which is the
//                     part that separates us from a generic agency.
export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Why Tongfluence works only with dog grooming businesses, how the monthly work actually runs, and what we deliberately don't do.",
  path: PATHS.about,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "About", href: PATHS.about },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="About"
        title="We only work with dog groomers. That's the whole strategy."
        intro={
          <>
            Tongfluence is a small operation that does one job for one industry: getting grooming businesses
            found on Google and keeping them there. Not a full-service agency with a pet vertical — grooming
            is the only thing on the list.
          </>
        }
        location="about_hero"
        secondary={{ href: PATHS.caseStudies, label: "See the work" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock label="What Tongfluence is">
          <p>
            {business.entityDescription} It works with grooming businesses across the United States remotely;
            there is no office to visit. The current client base is {buildStats.siteCount} grooming
            businesses across {buildStats.stateCount} states, covering salons, mobile operations, and one business running grooming alongside daycare
            and boarding.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="why-groomers">
        <SectionHeading eyebrow="Why groomers" id="why-groomers" title="Why a niche this narrow" />
        <div className="tf-prose mt-6">
          <p>
            The honest answer has three parts, and none of them is that we love dogs more than the next
            agency.
          </p>
          <p>
            <strong>Grooming search is unusually solvable.</strong> The queries are local and unambiguous —
            somebody wants a specific service, for a specific dog, near a specific place. There is no
            guessing at intent. And in most towns the competition has done very little, which means the work
            that wins is basic work done properly rather than anything clever.
          </p>
          <p>
            <strong>The work repeats.</strong> The tenth grooming website is not the first one again. The page
            structure, the Google Business Profile checklist, the review flow, the questions that need asking
            at onboarding — all of it already exists. That is what makes {offer.priceLine} possible. A general
            agency charging four times as much is not greedier; it is starting from zero every time, and
            somebody has to pay for that.
          </p>
          <p>
            <strong>It compounds into something a generalist cannot copy.</strong> Every build teaches us
            something about how grooming businesses perform in search — which services get looked up by name,
            how mobile and salon geography differ, what makes a grooming visitor pick up the phone. That
            knowledge only accumulates if you stay in one place. We publish what we can of it, like{" "}
            <Link
              href={resourcePath("dog-grooming-website-examples")}
              className="font-medium text-tf-brown-dark underline underline-offset-4"
            >
              the page-by-page breakdown of every site we have built
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="how-we-work">
        <SectionHeading
          eyebrow="How we work"
          id="how-we-work"
          title="What you're actually buying"
          intro="One person doing the work, not an account manager relaying it to a team you never meet."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "One monthly price, one invoice",
              b: `${offer.priceLine}. No setup fee, no build fee, no charge when we add a service page or an area page later. ${offer.commitment}`,
            },
            {
              t: "Everything stays yours",
              b: "Your domain is registered to you. Your Google Business Profile stays your profile and we are added as a manager, never as the owner. If you leave, we are removed and everything we set up stays.",
            },
            {
              t: "The monthly work is driven by data",
              b: "Search Console is connected from launch. Each month we read what you actually appeared for and make the change most likely to produce appointments. Not a content calendar written in advance.",
            },
            {
              t: "You hear from us when something changed",
              b: "We are not going to fill your inbox with a dashboard you don't read. You'll know what we changed, why, and what we're watching next.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-tf-border bg-tf-card p-5">
              <h3 className="text-sm font-semibold text-tf-ink">{x.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="principles">
        <SectionHeading
          eyebrow="What we won't do"
          id="principles"
          title="The rules we build to"
          intro="These are not marketing positioning. They are constraints that cost us things — shorter pages, fewer testimonials, no impressive percentages on the case studies — and they are the reason you can trust what is on this site."
        />
        <div className="mt-7 space-y-5">
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">On your website</h3>
            <div className="mt-4">
              <Checklist
                tone="dont"
                items={[
                  {
                    title: "No stock photos of other people's dogs",
                    body: "If you haven't sent us a real photo for a slot yet, it shows an honest placeholder until you do. Every one of our builds has some.",
                  },
                  {
                    title: "No star-rating markup to fake stars in search results",
                    body: "Google restricts self-published review markup. Not one of our builds ships AggregateRating or Review schema.",
                  },
                  {
                    title: "No location pages made by swapping a town name",
                    body: "We build a page for a town when there is something true and specific to say about working there. Otherwise we don't build it.",
                  },
                  {
                    title: "No fabricated facts, ever",
                    body: "If we can't verify your founding year, your review count or your team's names, they don't go on the site. Several of our builds have gaps for exactly this reason.",
                  },
                ]}
              />
            </div>
          </div>

          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">On reviews</h3>
            <div className="mt-4">
              <Checklist
                tone="dont"
                items={[
                  {
                    title: "No review gating",
                    body: "We never screen customers by how happy they seem before sending a review request. It breaks Google's policies and it is the single most commonly sold 'feature' in this space.",
                  },
                  {
                    title: "No incentives, no written reviews",
                    body: "Nothing offered in exchange for a review, and nothing written by anyone who wasn't a customer.",
                  },
                ]}
              />
            </div>
          </div>

          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">On this website</h3>
            <div className="mt-4">
              <Checklist
                tone="dont"
                items={[
                  {
                    title: "No results we haven't measured",
                    body: headlineResult
                      ? "The one performance figure on this site is shown with the Google reports it came from. A number we cannot show the source for does not go up."
                      : "There is not a single traffic, ranking or call-volume figure anywhere on this site, because we have not exported and verified a dataset we would stand behind. The case studies say so explicitly rather than quietly leaving the section out.",
                  },
                  {
                    title: "No client logos or testimonials we don't have permission for",
                    body: "The businesses named in our case studies are named with their work described from their own public sites.",
                  },
                  {
                    title: "No fake urgency",
                    body: "No countdown, no 'only two spots left this month', no fabricated client count.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="learned">
        <SectionHeading
          eyebrow="What we've learned"
          id="learned"
          title="Things that turned out to be true across every build"
        />
        <dl className="mt-7 space-y-6">
          {[
            {
              t: "The gap is almost never effort. It's structure.",
              b: "Every groomer we have worked with is working hard and doing good work. What is missing is a website shaped like the searches people make and a profile that says what the business does.",
            },
            {
              t: "The address and the market are often different places",
              b: "A salon in a small town whose customers all search for the bigger town next door is one of the most common situations we see, and one of the easiest to fix once you name it.",
            },
            {
              t: "Mobile grooming is a different problem, not a variation",
              b: "No storefront means the map pack behaves differently and the website has to carry the geography. Three of our builds are mobile-only and none of them publishes a street address.",
            },
            {
              t: "The specific service is where the opportunity is",
              b: "Competing for 'dog grooming' in a big city is hard. Competing for dematting, or a puppy's first groom, or cat grooming is winnable — and the person searching those needs you more.",
            },
            {
              t: "Nobody is asking for reviews",
              b: "Grooming businesses see delighted customers in person every day and almost none of them have a habit of asking. It is the largest piece of free leverage in the industry.",
            },
          ].map((x) => (
            <div key={x.t} className="border-l-2 border-tf-brown/40 pl-5">
              <dt className="font-tf-display text-lg font-bold text-tf-ink">{x.t}</dt>
              <dd className="mt-2 text-base leading-relaxed text-tf-ink-soft">{x.b}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Founder section renders only once real, verified details exist in
          lib/site-data.ts. An invented founder bio would break the first rule
          on this page, so the section simply isn't there until then. */}
      {founder.name ? (
        <Section width="narrow" className="py-12" labelledBy="founder">
          <SectionHeading eyebrow="Who's behind it" id="founder" title={founder.name} />
          <div className="tf-prose mt-6">
            {founder.bio.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="py-12">
        <RelatedLinks
          title="See it in practice"
          items={[
            {
              href: PATHS.caseStudies,
              label: "Case studies",
              description: `All ${buildStats.siteCount} grooming builds, three of them written up in full.`,
            },
            {
              href: PATHS.marketing,
              label: "The whole picture",
              description: "What the work consists of, and in what order it's worth doing.",
            },
            {
              href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
              label: "How to rank a grooming business on Google",
              description: "The whole method, written so you can do it without us.",
            },
            {
              href: PATHS.book,
              label: "Book a call",
              description: "Fifteen minutes on your profile and your current site. No pitch deck.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="about_footer"
          title="Talk to the person who'd be doing the work"
          body="Not a sales call with someone who'll hand you off after you sign. We'll open your Google Business Profile and your site on the call and tell you what we'd change."
        />
      </Section>
    </>
  );
}
