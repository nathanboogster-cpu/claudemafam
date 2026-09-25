import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ComparisonTable } from "@/components/ComparisonTable";

// SEARCH INTENT
//   Primary query:    dog grooming lead generation
//   Secondary:        how to get more dog grooming clients, getting grooming
//                     customers, more grooming appointments
//   Intent:           commercial — an owner who wants more booked work and is
//                     evaluating who can produce it.
//   Business purpose: own the "more customers" intent and frame it correctly:
//                     qualified appointments, not traffic.
//   Differentiation:  /dog-groomer-seo is about ranking; this page is about
//                     the conversion path after the ranking, and about how the
//                     result is measured. The resource page
//                     "how to get more dog grooming clients" is deliberately
//                     NOT published because it would target this same intent.
export const metadata: Metadata = pageMetadata({
  title: "Dog Grooming Lead Generation",
  description:
    "Turning local searches into booked grooming appointments: the six-step path from search to phone call, where it leaks, and how to tell traffic from customers.",
  path: PATHS.leadGeneration,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Dog Grooming Lead Generation", href: PATHS.leadGeneration },
];

const faqItems = [
  {
    question: "How do dog groomers get more clients?",
    answer:
      "For most grooming businesses the reliable route is local search: a Google Business Profile that ranks in the map pack, a website with a page matching what each person searched for, and enough recent reviews that choosing you feels safe. Referrals and social media help, but you cannot turn either of them on when the book looks thin.",
  },
  {
    question: "What counts as a lead for a grooming business?",
    answer:
      "A phone call, a booking, or a form submission from someone who wants an appointment for a dog you would actually take. That last part matters: a call from two hours outside your area, or asking for a service you do not offer, is traffic rather than a lead. Counting those flatters the numbers and teaches you nothing.",
  },
  {
    question: "Why is my grooming website getting visits but no calls?",
    answer:
      "Usually one of four things. The visitors are landing on a page that does not answer what they searched. There is no price or range anywhere so they went back to compare. The phone number is not tappable on a phone. Or the reviews and photos are not reassuring enough to risk their dog on. All four are fixable, and Search Console plus your call log will usually tell you which one it is.",
  },
  {
    question: "Should a dog groomer buy leads?",
    answer:
      "Bought leads are usually sold to several businesses at once, which means you are competing on speed of response and price with people who have the same enquiry. They can fill a gap this week. They do not build anything, and the cost never falls. A Google Business Profile and a site that ranks keep producing enquiries after you stop paying attention to them.",
  },
  {
    question: "How do I track where my grooming clients come from?",
    answer:
      "Start with the simplest thing that works: ask on the phone and write it down. Then add the digital side — Google Business Profile shows calls and direction requests from the profile, and website events can be tracked so that calls and form submissions are attributed to the page and source that produced them. We set that tracking up as part of the build.",
  },
];

export default function LeadGenerationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={serviceSchema({
          name: "Dog grooming lead generation",
          serviceType: "Local lead generation for dog grooming businesses",
          description:
            "Organic lead generation for dog grooming businesses: ranking in local search, converting visitors into calls and bookings, and tracking which sources produce real appointments.",
          path: PATHS.leadGeneration,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Lead generation"
        title="Traffic is not the goal. A full book is."
        intro={
          <>
            It is entirely possible to triple a grooming website&rsquo;s visitors and book no extra
            appointments. This page is about the part most marketing skips: what happens between somebody
            searching and somebody sitting in your chair, where that path leaks, and how you tell whether any
            of it worked.
          </>
        }
        location="leads_hero"
        secondary={{ href: PATHS.caseStudies, label: "See client results" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            A grooming lead is a <strong>call, booking or enquiry from someone who wants an appointment for a
            dog you would actually take</strong>. The path to one runs: search &rarr; map pack or organic
            result &rarr; a quick judgement on reviews and photos &rarr; a page that answers their specific
            question &rarr; a tap on the phone number &rarr; a call you pick up. Every one of those six steps
            can leak, and the leaks are usually in the last three — which is where almost nobody looks.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="path">
        <SectionHeading
          eyebrow="The path"
          id="path"
          title="Six steps, and where each one leaks"
        />
        <ol className="mt-8 space-y-4">
          {[
            {
              step: "Search",
              what: "Someone decides the dog needs doing and searches.",
              leak: "Nothing to fix here — this demand exists in your town whether or not you are visible for it.",
            },
            {
              step: "Appearing",
              what: "Google shows a map pack and organic results.",
              leak: "You aren't in either. Fixable — this is the profile and the site structure, covered on dog groomer SEO.",
            },
            {
              step: "The glance",
              what: "They scan star rating, review count, review recency and photos.",
              leak: "Old reviews, no photos, or photos that clearly aren't yours. This is where reviews earn their keep.",
            },
            {
              step: "The page",
              what: "They open your site to check one specific thing — breed, size, price, or whether you come to them.",
              leak: "They land on a homepage that doesn't mention what they searched for. A page per service and per area is the fix.",
            },
            {
              step: "The decision",
              what: "Is this worth a phone call?",
              leak: "No price anywhere, no clear statement of how booking works, or a booking system that demands an account before showing availability.",
            },
            {
              step: "The call",
              what: "They tap the number.",
              leak: "The number isn't a link, the call goes to voicemail mid-groom, or nobody calls back. This is the most expensive leak in the whole funnel and the least discussed.",
            },
          ].map((s, i) => (
            <li key={s.step} className="rounded-2xl border border-tf-border bg-white p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-tf-mono text-xs font-semibold text-tf-brown">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-tf-display text-base font-bold text-tf-ink">{s.step}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{s.what}</p>
              <p className="mt-2 border-l-2 border-tf-brown/40 pl-3 text-sm leading-relaxed text-tf-ink">
                <span className="font-semibold">Where it leaks: </span>
                {s.leak}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-relaxed text-tf-ink-soft">
          Step six deserves a note. We have no way to fix a missed call from here, and it is genuinely hard
          when you are holding a wet spaniel — but a returned call within the hour is worth more than anything
          else on this list. If you do one thing after reading this page, make it that.
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="quality">
        <SectionHeading
          eyebrow="Qualified, not just more"
          id="quality"
          title="Traffic and customers are different numbers"
        />
        <div className="mt-7">
          <ComparisonTable
            caption="The difference between a traffic metric and a business metric for a grooming business"
            rowHeader="What gets measured"
            columns={["What it tells you", "What it doesn't"]}
            rows={[
              {
                label: "Impressions",
                cells: ["You appeared in search results.", "Whether the searcher was anywhere near you, or looking for something you do."],
              },
              {
                label: "Website visits",
                cells: ["People arrived.", "Whether any of them wanted an appointment."],
              },
              {
                label: "Calls and form submissions",
                cells: ["Someone wanted to talk to you. This is the first number that is really about the business.", "Whether it was a dog you'd take, in an area you cover."],
              },
              {
                label: "Booked appointments",
                cells: ["The thing you are actually buying.", "Whether they showed up and came back — which is the one you care about most."],
              },
              {
                label: "Repeat clients",
                cells: ["The whole point. A grooming client on a six-week cycle is worth many times a one-off.", "Nothing. This is the number.",],
              },
            ]}
          />
        </div>
        <div className="tf-prose mt-6">
          <p>
            We report on the top of that list because it is what search data gives us, but the question we ask
            on a monthly call is the bottom of it: <em>did the phone ring more, and were they the right
            calls?</em> If a page is sending you enquiries from four towns outside your range, that is a page
            to fix, not a win to celebrate.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="tracking">
        <SectionHeading
          eyebrow="Measurement"
          id="tracking"
          title="How we make any of this knowable"
        />
        <div className="tf-prose mt-6">
          <p>
            Most grooming businesses cannot answer &ldquo;where did this client come from?&rdquo; with
            anything better than a guess, which makes it impossible to know what to stop doing. Three things
            fix that, and none of them are complicated:
          </p>
        </div>
        <ul className="mt-6 space-y-3">
          {[
            ["Ask, and write it down", "The lowest-tech and highest-value one. “How did you find us?” on the first call, recorded somewhere you'll look again."],
            ["Google Business Profile insights", "Google reports calls, website clicks and direction requests that came from the profile itself, separately from everything else."],
            ["Website event tracking", "Calls, booking clicks and form submissions tracked as events, with the landing page and traffic source attached — so organic search, referrals, social and paid stay distinguishable."],
          ].map(([t, b]) => (
            <li key={t} className="rounded-2xl border border-tf-border bg-white p-5">
              <p className="text-sm font-semibold text-tf-ink">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{b}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-tf-ink-soft">
          The third one is set up as part of every build, and it is why the monthly conversation can be about
          appointments rather than about impressions. The ranking work that feeds it is on{" "}
          <Link href={PATHS.seo} className="font-medium text-tf-brown-dark underline underline-offset-4">
            dog groomer SEO
          </Link>
          ; the page-level conversion work is on{" "}
          <Link
            href={PATHS.websiteDesign}
            className="font-medium text-tf-brown-dark underline underline-offset-4"
          >
            grooming website design
          </Link>
          .
        </p>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="leads-offer">
        <SectionHeading
          eyebrow="What it costs"
          id="leads-offer"
          title="No per-lead pricing"
          intro="We don't sell leads and we don't charge per call. You are buying the asset that produces them, at one flat monthly price, and it keeps working."
        />
        <PricingCard location="lead_generation" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock items={faqItems} eyebrow="Lead generation FAQ" title="Common questions" headingId="leads-faq" />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: PATHS.seo,
              label: "Dog groomer SEO",
              description: "Getting found in the first place — the top half of the path above.",
            },
            {
              href: PATHS.websiteDesign,
              label: "Dog grooming website design",
              description: "The pages that answer what someone actually searched for.",
            },
            {
              href: PATHS.reviews,
              label: "Review management for dog groomers",
              description: "The glance step: what makes someone trust you enough to call.",
            },
            {
              href: PATHS.marketing,
              label: "Dog groomer marketing",
              description: "How search compares with social and paid for a grooming business.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="leads_footer"
          title="Where is your funnel leaking?"
          body="On a short call we'll walk the six steps above against your actual business — your profile, your site, your booking process — and tell you which step is costing you the most."
        />
      </Section>
    </>
  );
}
