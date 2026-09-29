import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { pageDogPhoto } from "@/lib/dog-photos";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ComparisonTable } from "@/components/ComparisonTable";
import { GbpCallsProof } from "@/components/GbpCallsProof";

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
    "Turning local searches into booked grooming appointments: the six steps from a search to a phone call, where they leak, and how to tell visitors from customers.",
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
      "For most grooming businesses, the sure route is local search. A Google Business Profile that shows up on the map. A website with a page that matches what each person searched for. And enough recent reviews that picking you feels safe. Referrals and social media help. But you cannot turn either one on when the book looks thin.",
  },
  {
    question: "What counts as a lead for a grooming business?",
    answer:
      "A call, a booking or a form from someone who wants an appointment for a dog you would take. That last part matters. A call from two hours outside your area is not a lead. Neither is a call for a service you do not offer. Counting those makes the numbers look good and teaches you nothing.",
  },
  {
    question: "Why is my grooming website getting visits but no calls?",
    answer:
      "Usually one of four things. Visitors land on a page that does not answer what they searched for. There is no price anywhere, so they go back to compare. The phone number cannot be tapped on a phone. Or the reviews and photos do not make them feel safe leaving their dog with you. All four can be fixed. Your search data and your call log will usually show which one it is.",
  },
  {
    question: "Should a dog groomer buy leads?",
    answer:
      "Bought leads are usually sold to several businesses at once. So you compete on speed and price with people who got the same call. They can fill a gap this week. They do not build anything, and the cost never drops. A Google profile and a website that rank keep bringing calls after you stop paying attention to them.",
  },
  {
    question: "How do I track where my grooming clients come from?",
    answer:
      "Start with the simplest thing that works. Ask on the phone and write it down. Then add the online side. Your Google profile shows calls and direction requests that came from it. Your website can track which page and which source led to each call or form. We set that tracking up as part of the build.",
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
            "Lead generation for dog grooming businesses: showing up in local search, turning visitors into calls and bookings, and tracking which sources bring real appointments.",
          path: PATHS.leadGeneration,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Lead generation"
        title="Traffic is not the goal."
        accent="A full book is."
        intro={
          <>
            You can triple a grooming website&rsquo;s visitors and book no extra appointments. This page is
            about the part most marketing skips. What happens between someone searching and someone sitting
            in your chair? Where does that path leak? And how do you tell whether any of it worked?
          </>
        }
        location="leads_hero"
        image={pageDogPhoto.leadGeneration}
        pills
        secondary={{ href: PATHS.caseStudies, label: "See client results" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            A grooming lead is a <strong>call, booking or message from someone who wants an appointment for
            a dog you would take</strong>. The path has six steps. They search. They see you on the map or in
            the results. They glance at your reviews and photos. They open a page that answers their
            question. They tap your phone number. You pick up. Every step can leak. The leaks are usually in
            the last three, which is where almost nobody looks.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="path">
        <SectionHeading
          eyebrow="The path"
          id="path"
          title="Six steps,"
          accent="and where each one leaks"
        />
        <ol className="mt-8 space-y-4">
          {[
            {
              step: "Search",
              what: "Someone decides the dog needs a groom and searches.",
              leak: "Nothing to fix here. This demand exists in your town whether or not people can find you.",
            },
            {
              step: "Appearing",
              what: "Google shows a map and a list of websites.",
              leak: "You are not in either. This can be fixed. It is the profile and the site pages, covered on the SEO page.",
            },
            {
              step: "The glance",
              what: "They scan your star rating, how many reviews you have, how new they are, and your photos.",
              leak: "Old reviews, no photos, or photos that are clearly not yours. This is where reviews earn their keep.",
            },
            {
              step: "The page",
              what: "They open your site to check one thing. Breed, size, price, or whether you come to them.",
              leak: "They land on a homepage that does not mention what they searched for. A page per service and per town is the fix.",
            },
            {
              step: "The decision",
              what: "Is this worth a phone call?",
              leak: "No price anywhere. No clear note on how booking works. Or a booking system that wants an account before it shows open times.",
            },
            {
              step: "The call",
              what: "They tap the number.",
              leak: "The number is not a link. Or the call goes to voicemail mid-groom. Or nobody calls back. This is the most costly leak of all, and the one nobody talks about.",
            },
          ].map((s, i) => (
            <li key={s.step} className="rounded-xl border border-tf-border bg-tf-card p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-tf-display text-base font-bold leading-none text-tf-brown">
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
          Step six deserves a note. We cannot fix a missed call from here. It is hard when you are holding a
          wet spaniel. But calling back within the hour is worth more than anything else on this list. If
          you do one thing after reading this page, make it that.
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="quality">
        <SectionHeading
          eyebrow="Qualified, not just more"
          id="quality"
          title="Traffic and customers"
          accent="are different numbers"
        />
        <div className="mt-7">
          <ComparisonTable
            caption="The difference between a traffic number and a business number for a grooming business"
            rowHeader="What gets measured"
            columns={["What it tells you", "What it doesn't"]}
            rows={[
              {
                label: "Views in search",
                cells: ["You showed up in the search results.", "Whether the searcher was anywhere near you, or looking for something you do."],
              },
              {
                label: "Website visits",
                cells: ["People arrived.", "Whether any of them wanted an appointment."],
              },
              {
                label: "Calls and form submissions",
                cells: ["Someone wanted to talk to you. This is the first number that is really about the business.", "Whether it was a dog you would take, in an area you cover."],
              },
              {
                label: "Booked appointments",
                cells: ["The thing you are really buying.", "Whether they showed up and came back. That is the one you care about most."],
              },
              {
                label: "Repeat clients",
                cells: ["The whole point. A client who comes back every six weeks is worth many times a one-time visit.", "Nothing. This is the number.",],
              },
            ]}
          />
        </div>
        <div className="tf-prose mt-6">
          <p>
            We report on the top of that list because that is what search data gives us. But the question we
            ask each month is the bottom of it. <em>Did the phone ring more, and were they the right
            calls?</em> If a page sends you calls from four towns outside your range, that page needs fixing.
            It is not a win.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="tracking">
        <SectionHeading
          eyebrow="Measurement"
          id="tracking"
          title="How we make any of this"
          accent="something you can know"
        />
        <div className="tf-prose mt-6">
          <p>
            Most grooming businesses cannot answer &ldquo;where did this client come from?&rdquo; with more
            than a guess. So they cannot know what to stop doing. Three things fix that, and none of them is
            hard:
          </p>
        </div>
        <ul className="mt-6 space-y-3">
          {[
            ["Ask, and write it down", "The simplest and most useful one. “How did you find us?” on the first call, written somewhere you will look again."],
            ["Your Google profile's own numbers", "Google reports the calls, website clicks and direction requests that came from the profile. It keeps them apart from everything else."],
            ["Website tracking", "Calls, booking clicks and forms are tracked, along with the page and the source they came from. So search, referrals, social and ads stay separate."],
          ].map(([t, b]) => (
            <li key={t} className="rounded-xl border border-tf-border bg-tf-card p-5">
              <p className="text-sm font-semibold text-tf-ink">{t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-tf-ink-soft">{b}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-tf-ink-soft">
          We set up the third one as part of every build. It is why the monthly call can be about
          appointments instead of views. The ranking work that feeds it is on{" "}
          <Link href={PATHS.seo} className="font-medium text-tf-brown-dark underline underline-offset-4">
            the SEO page
          </Link>
          . The work of turning a page visit into a call is on{" "}
          <Link
            href={PATHS.websiteDesign}
            className="font-medium text-tf-brown-dark underline underline-offset-4"
          >
            the website page
          </Link>
          .
        </p>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="leads-measured">
        <SectionHeading
          eyebrow="Measured"
          id="leads-measured"
          title="What more calls"
          accent="looks like when it is real"
          intro="Calls are the first number in that table that is really about the business. Here it is for one client, before and after."
        />
        <div className="mt-8">
          <GbpCallsProof location="leads_measured" />
        </div>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="leads-offer">
        <SectionHeading
          eyebrow="What it costs"
          id="leads-offer"
          title="No charge per lead"
          intro="We do not sell leads and we do not charge per call. You are buying the thing that brings them, at one flat monthly price. And it keeps working."
        />
        <PricingCard location="lead_generation" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock items={faqItems} eyebrow="FAQ" title="Common questions" headingId="leads-faq" />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: PATHS.seo,
              label: "How the SEO works",
            },
            {
              href: PATHS.websiteDesign,
              label: "What the website needs",
            },
            {
              href: PATHS.reviews,
              label: "Getting more reviews",
            },
            {
              href: PATHS.marketing,
              label: "The whole picture",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="leads_footer"
          title="Where is your path leaking?"
          body="On a short call, we walk the six steps above against your real business. Your profile, your site, your booking process. We tell you which step is costing you the most."
        />
      </Section>
    </>
  );
}
