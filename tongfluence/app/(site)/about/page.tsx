import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, business, offer, founder, resourcePath, headlineResult } from "@/lib/site-data";
import { buildStats } from "@/lib/client-builds";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { pageDogPhoto } from "@/lib/dog-photos";
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
    "Why Tongfluence works only with dog grooming businesses, how the monthly work runs, and what we choose not to do.",
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
        title="We only work with dog groomers."
        accent="That's the whole strategy."
        intro={
          <>
            Tongfluence is a small team that does one job for one industry. We get grooming businesses found
            on Google and keep them there. We are not a big agency with a pet department. Grooming is the
            only thing on the list.
          </>
        }
        location="about_hero"
        image={pageDogPhoto.about}
        pills
        secondary={{ href: PATHS.caseStudies, label: "See the work" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock label="What Tongfluence is">
          <p>
            {business.entityDescription} We work with grooming businesses across the United States from a
            distance. There is no office to visit. Right now we work with {buildStats.siteCount} grooming
            businesses across {buildStats.stateCount} states. That covers salons, mobile groomers, and one
            business that runs grooming with daycare and boarding.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="why-groomers">
        <SectionHeading eyebrow="Why groomers" id="why-groomers" title="Why we picked" accent="such a narrow field" />
        <div className="tf-prose mt-6">
          <p>
            The honest answer has three parts. None of them is that we love dogs more than the next agency.
          </p>
          <p>
            <strong>Grooming search is easier to solve than most.</strong> The searches are local and
            clear. Someone wants one service, for one dog, near one place. There is no guessing what they
            mean. And in most towns, the other groomers have done very little. So the work that wins is
            basic work done well, not anything clever.
          </p>
          <p>
            <strong>The work repeats.</strong> The tenth grooming website is not the first one again. The
            page layout, the Google profile checklist, the review system, the questions we ask at the start.
            All of it already exists. That is what makes {offer.priceLine} possible. A general agency that
            charges four times as much is not greedy. It starts from zero every time, and somebody has to pay
            for that.
          </p>
          <p>
            <strong>It adds up to something a general agency cannot copy.</strong> Every site teaches us
            something about how grooming businesses do in search. Which services people look up by name. How
            mobile and salon towns differ. What makes a grooming visitor pick up the phone. That knowledge
            only builds up if you stay in one place. We share what we can of it, like{" "}
            <Link
              href={resourcePath("dog-grooming-website-examples")}
              className="font-medium text-tf-brown-dark underline underline-offset-4"
            >
              the page-by-page breakdown of every site we built
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
          title="What you're really buying"
          intro="One person doing the work. Not an account manager passing it to a team you never meet."
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "One monthly price, one invoice",
              b: `${offer.priceLine}. No setup fee. No build fee. No charge when we add a service page or a town page later. ${offer.commitment}`,
            },
            {
              t: "Everything stays yours",
              b: "Your domain is in your name. Your Google profile stays your profile. We are added as a manager, never as the owner. If you leave, we are removed and everything we set up stays.",
            },
            {
              t: "The monthly work is driven by data",
              b: "We connect Google Search Console at launch. Each month we read what you showed up for and make the change most likely to bring appointments. Not a content calendar written in advance.",
            },
            {
              t: "You hear from us when something changed",
              b: "We will not fill your inbox with a dashboard you do not read. You will know what we changed, why, and what we are watching next.",
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
          intro="These are not marketing lines. They are rules that cost us things. Shorter pages, fewer testimonials, no big percentages on the case studies. They are the reason you can trust what is on this site."
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
                    body: "If you have not sent us a real photo for a spot yet, it shows an honest placeholder until you do. Every one of our sites has some.",
                  },
                  {
                    title: "No hidden code to fake stars in search results",
                    body: "Google restricts that kind of code. Not one of our sites uses it.",
                  },
                  {
                    title: "No location pages made by swapping a town name",
                    body: "We build a page for a town when there is something true to say about working there. Otherwise we do not build it.",
                  },
                  {
                    title: "No fabricated facts, ever",
                    body: "If we cannot confirm your founding year, your review count or your team's names, they do not go on the site. Several of our sites have gaps for exactly this reason.",
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
                    body: "We never pick who gets a review request based on how happy they seem. It breaks Google's rules. It is also the most commonly sold 'feature' in this field.",
                  },
                  {
                    title: "No incentives, no written reviews",
                    body: "Nothing offered in exchange for a review. Nothing written by anyone who was not a customer.",
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
                      ? "The one result on this site is shown with the Google reports it came from. A number we cannot show the source for does not go up."
                      : "There is not one traffic, ranking or call figure on this site. We have not checked a set of data we would stand behind. The case studies say so plainly instead of quietly leaving it out.",
                  },
                  {
                    title: "No client logos or testimonials we don't have permission for",
                    body: "The businesses in our case studies are named, and their work is described from their own public sites.",
                  },
                  {
                    title: "No fake urgency",
                    body: "No countdown. No 'only two spots left this month'. No made-up client count.",
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
          title="Things that turned out to be true"
          accent="on every site we built"
        />
        <dl className="mt-7 space-y-6">
          {[
            {
              t: "The gap is almost never effort. It's the setup.",
              b: "Every groomer we have worked with works hard and does good work. What is missing is a website shaped like the searches people make, and a profile that says what the business does.",
            },
            {
              t: "The address and the market are often different places",
              b: "A salon in a small town whose customers all search for the bigger town next door. It is one of the most common things we see, and one of the easiest to fix once you name it.",
            },
            {
              t: "Mobile grooming is a different problem, not a small change",
              b: "With no shop, the map works differently and the website has to say where you go. Three of our sites are for mobile groomers, and none of them shows a street address.",
            },
            {
              t: "The specific service is where the chance is",
              b: "Competing for 'dog grooming' in a big city is hard. Competing for dematting, or a puppy's first groom, or cat grooming can be won. And the person searching for those needs you more.",
            },
            {
              t: "Nobody is asking for reviews",
              b: "Grooming businesses see happy customers in person every day. Almost none of them have a habit of asking. It is the biggest free win in the industry.",
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
              description: `All ${buildStats.siteCount} grooming sites, three of them written up in full.`,
            },
            {
              href: PATHS.marketing,
              label: "The whole picture",
              description: "What the work is, and what order to do it in.",
            },
            {
              href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
              label: "How to rank a grooming business on Google",
              description: "The whole method, written so you can do it without us.",
            },
            {
              href: PATHS.book,
              label: "Book a call",
              description: "Fifteen minutes on your profile and your current site. No sales pitch.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="about_footer"
          title="Talk to the person who would do the work"
          body="Not a sales call with someone who hands you off after you sign. We open your Google profile and your site on the call and tell you what we would change."
        />
      </Section>
    </>
  );
}
