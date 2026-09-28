import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Checklist } from "@/components/Checklist";
import { GbpCallsProof } from "@/components/GbpCallsProof";

// SEARCH INTENT
//   Primary query:    google business profile for dog groomers
//   Secondary:        google business profile dog grooming, google maps
//                     ranking dog groomer, dog groomer google ranking,
//                     how to rank in google maps pet grooming
//   Intent:           informational-commercial — an owner who knows the
//                     profile matters and wants to know what to do to it.
//   Business purpose: sell the GBP component; it is the fastest-moving part of
//                     the service and therefore the easiest to say yes to.
//   Accuracy note:    Google's category list changes and is only reliably
//                     visible inside the profile's own category picker, so
//                     this page teaches the category *model* and points at
//                     Google's documentation rather than publishing a list we
//                     cannot verify.
export const metadata: Metadata = pageMetadata({
  title: "Google Business Profile for Dog Groomers",
  description:
    "Setting up a Google Business Profile for a grooming business: categories, services, service areas, photos, reviews, and the mistakes that cost you the map pack.",
  path: PATHS.gbp,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Google Business Profile for Dog Groomers", href: PATHS.gbp },
];

const faqItems = [
  {
    question: "What category should a dog groomer use on Google Business Profile?",
    answer:
      "Your primary category should be the single closest description of the main thing you do — for most grooming businesses that is the pet-grooming category. Google's category list changes over time and the authoritative version is the picker inside your own profile, so choose from what it offers you rather than from a list on a blog. Add secondary categories only for services you genuinely provide, such as boarding or day care, and keep the number small: every extra category dilutes what the profile is primarily about.",
  },
  {
    question: "Should a mobile dog groomer list an address?",
    answer:
      "No. A mobile groomer is a service-area business: you hide the address and define the areas you travel to instead. Publishing a home address on a service-area business exposes something you probably did not intend to publish and describes a location customers cannot visit.",
  },
  {
    question: "How do I rank higher in Google Maps as a dog groomer?",
    answer:
      "Google describes local ranking as a combination of relevance, distance and prominence. You cannot change distance. Relevance is what you can fix fastest: the right primary category, a complete services list, service areas that match where you really work, and a description that says what you actually do. Prominence comes mostly from reviews — how many, how recent, and whether you reply to them — and from the rest of your web presence.",
  },
  {
    question: "How many photos should a grooming profile have?",
    answer:
      "Enough that it looks like a business someone visited this month, refreshed regularly rather than uploaded once. For grooming the ones that do the most work are before-and-afters of real dogs, the space itself or the van interior, and the groomer. What matters more than the count is that they are recent and yours.",
  },
  {
    question: "Does posting updates on Google Business Profile help?",
    answer:
      "Posts are useful for telling people something true and timely — holiday hours, a new service, availability this week. Treat them as a communication channel with your existing and nearby customers rather than as a ranking lever, and do not post filler just to keep a streak alive.",
  },
  {
    question: "Do you take over my Google Business Profile?",
    answer:
      "No. It stays your profile, owned by you. We are added as a manager so we can make changes, and if you cancel we are removed and everything we set up stays. You should be suspicious of anyone who wants to create a profile in their own name on your behalf — that is how businesses end up locked out of their own listing.",
  },
];

export default function GbpPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={serviceSchema({
          name: "Google Business Profile optimization for dog groomers",
          serviceType: "Google Business Profile optimization for pet grooming businesses",
          description:
            "Setup and ongoing optimization of a dog grooming business's Google Business Profile: categories, services, service areas, description, photos, hours and review management.",
          path: PATHS.gbp,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Google Business Profile"
        title="Your Google Business Profile is the most valuable thing you own and have never finished."
        intro={
          <>
            It is free, it already exists, and for most grooming businesses it is where the majority of new
            customers see you first — before the website, before anything else. It is also the part of the job
            that moves fastest, which is why we do it in week one.
          </>
        }
        location="gbp_hero"
        secondary={{ href: PATHS.caseStudies, label: "See client results" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            Google says local results are ranked on <strong>relevance, distance and prominence</strong>. You
            cannot change how far away you are from the person searching. You can change relevance — the right
            primary category, a complete list of the services you offer, accurate service areas, correct hours,
            a description that says what you actually do — and you can influence prominence, mostly through
            recent reviews and a real website that matches the profile. Almost every grooming profile we look
            at is losing on relevance for reasons that take a day to fix.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="categories">
        <SectionHeading
          eyebrow="Categories"
          id="categories"
          title="The primary category is the biggest single lever, and it's a choice not a list"
        />
        <div className="tf-prose mt-6">
          <p>
            Your <strong>primary category</strong> is the strongest statement of what your business is. It
            carries more weight than any other single field on the profile, and it is worth thinking about for
            more than the ten seconds most people give it.
          </p>
          <p>
            We are deliberately not publishing a copy of Google&rsquo;s category list here. It changes, it
            varies, and the only authoritative version is the picker inside your own profile — which is also
            the only one that reflects what is available to you, in your country, today. Blogs that publish a
            category list confidently are usually quoting each other. Choose from what Google offers you, and
            check Google&rsquo;s own{" "}
            <a
              href="https://support.google.com/business/answer/3038177"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-tf-brown-dark underline underline-offset-4"
            >
              documentation on choosing a category
            </a>{" "}
            if you are unsure.
          </p>
          <p>The rules that do hold, whatever the list says:</p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-tf-border bg-white p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">Do</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "Pick the closest description of your main work", body: "If grooming is the business, the grooming category is the primary. Not “pet store”, not something broader that felt safer." },
                  { title: "Add secondary categories only for real services", body: "Boarding, day care, training — if you genuinely do them and would take the booking." },
                  { title: "Keep the list short", body: "A handful of accurate categories describes the business better than ten loosely-related ones." },
                ]}
              />
            </div>
          </div>
          <div className="rounded-2xl border border-tf-border bg-white p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">Don&rsquo;t</h3>
            <div className="mt-4">
              <Checklist
                tone="dont"
                items={[
                  { title: "Add categories to “cover more searches”", body: "It dilutes what the profile is primarily about, which is the one signal you most want to be sharp." },
                  { title: "Pick a category for a service you refer out", body: "You will get calls you have to turn away, and turned-away callers sometimes leave reviews." },
                  { title: "Set it once and never look again", body: "Google adds and retires categories. It's worth re-checking when anything about the business changes." },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="services">
        <SectionHeading
          eyebrow="Services"
          id="services"
          title="The services list is usually empty, and it shouldn't be"
        />
        <div className="tf-prose mt-6">
          <p>
            Your profile has a services section where you can list what you do, each with its own name and
            description. On the grooming profiles we look at, it is usually blank or has two generic entries.
            This is free, structured space to say <em>deshedding</em>, <em>dematting</em>,{" "}
            <em>puppy&rsquo;s first groom</em>, <em>nail trim and ear clean</em>, <em>cat grooming</em>,{" "}
            <em>hand stripping</em> — the words people actually search — and most groomers leave it empty.
          </p>
          <p>
            Fill it with the services you really offer, name them the way a customer would, and make each
            description a real sentence rather than a keyword. Then make sure your website has a page for each
            one, so the profile and the site are telling the same story. That alignment between the two is
            most of what we mean by{" "}
            <Link href={PATHS.seo} className="font-medium text-tf-brown-dark underline underline-offset-4">
              grooming SEO
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="service-areas">
        <SectionHeading
          eyebrow="Service areas"
          id="service-areas"
          title="Mobile groomers: hide the address, define the areas"
        />
        <div className="tf-prose mt-6">
          <p>
            If you groom at the customer&rsquo;s home, Google&rsquo;s model for you is a{" "}
            <strong>service-area business</strong>: no public address, and a defined set of places you travel
            to. Two things follow from that, and both matter.
          </p>
          <p>
            First, take the address off. On a mobile grooming business it is almost always the
            groomer&rsquo;s home, and publishing it is a genuine privacy problem as well as a description of a
            place no customer can visit. Three of our builds are mobile-only and none of them publishes a
            street address anywhere — not on the site, not in the structured data.
          </p>
          <p>
            Second, set the service areas to where the van really goes, not to the largest metro you could
            plausibly claim. Overclaiming does not win you those towns; it just makes the profile less clearly
            about the places you actually serve. The way into the further-out towns is website pages, which is
            what{" "}
            <Link
              href={PATHS.websiteDesign}
              className="font-medium text-tf-brown-dark underline underline-offset-4"
            >
              the area pages on a grooming site
            </Link>{" "}
            are for.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="mistakes">
        <SectionHeading
          eyebrow="The audit"
          id="mistakes"
          title="What we check on every grooming profile"
          intro="This is the actual list, in the order we work through it in week one."
        />
        <ol className="mt-7 space-y-3">
          {[
            ["Primary category", "Is it the closest description of the main business, or something broader that someone picked in a hurry?"],
            ["Secondary categories", "Real services only, and not so many that the profile stops being about grooming."],
            ["Services list", "Populated with the services you actually offer, named the way customers say them."],
            ["Business name", "Your real business name. No “Best Dog Grooming | Town | Mobile” keyword stuffing — that's against Google's guidelines and it gets profiles suspended."],
            ["Address or service areas", "A salon has one exact address. A mobile business has no address and a real list of towns."],
            ["NAP consistency", "Name, address and phone identical here, on the website, and anywhere else you're listed."],
            ["Hours", "Correct, including the days you're closed, and special hours set before holidays rather than after."],
            ["Description", "What you do, who for, where — written for a person, not stuffed with search terms."],
            ["Photos", "Recent, real, and yours. Before-and-afters, the space or the van, and you."],
            ["Reviews", "How many, how recent, and whether anyone has replied to them."],
            ["Website link", "Pointing at the right page, not a dead link from a site you replaced two years ago."],
            ["Duplicate listings", "Old profiles from a previous address or previous owner, still live, splitting your reviews."],
          ].map(([item, detail], i) => (
            <li key={item} className="flex gap-4 rounded-2xl border border-tf-border bg-white p-4">
              <span className="font-tf-mono text-xs font-semibold text-tf-brown">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-semibold text-tf-ink">{item}</p>
                <p className="mt-1 text-sm leading-relaxed text-tf-ink-soft">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="reviews-link">
        <SectionHeading
          eyebrow="Reviews"
          id="reviews-link"
          title="The profile's biggest ongoing input is reviews"
          intro={
            <>
              Everything above is largely a one-off. Reviews are the part that has to keep happening, and they
              are the reason a profile that was excellent two years ago stops performing. That has its own
              page:{" "}
              <Link
                href={PATHS.reviews}
                className="font-medium text-tf-brown-dark underline underline-offset-4"
              >
                review management for dog groomers
              </Link>
              .
            </>
          }
        />
      </Section>

      <Section width="narrow" className="py-12" labelledBy="gbp-measured">
        <SectionHeading
          eyebrow="Measured"
          id="gbp-measured"
          title="What the profile work did to one client's call volume"
          intro="Google reports calls placed from the profile itself. Here is that report for one client, the month before we touched the profile and the month after — screenshots included, so you can check the reading."
        />
        <div className="mt-8">
          <GbpCallsProof location="gbp_measured" />
        </div>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="gbp-offer">
        <SectionHeading
          eyebrow="What it costs"
          id="gbp-offer"
          title="Profile work is included, not an add-on"
          intro="It's the first thing we do and one of the things we keep doing, because a profile goes stale on its own."
        />
        <PricingCard location="gbp" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock
          items={faqItems}
          eyebrow="Google Business Profile FAQ"
          title="Common questions"
          headingId="gbp-faq"
        />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: PATHS.reviews,
              label: "Review management for dog groomers",
              description: "Keeping the profile earning fresh reviews, without breaking Google's rules.",
            },
            {
              href: PATHS.seo,
              label: "Dog groomer SEO",
              description: "How the profile and the website rank in two different systems.",
            },
            {
              href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
              label: "How to rank a grooming business on Google",
              description: "The step-by-step version, if you'd rather do it yourself.",
            },
            {
              href: PATHS.caseStudies,
              label: "Grooming builds, broken down",
              description: "How the profile work fits alongside the site on a real business.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="gbp_footer"
          title="We'll go through your profile with you on the call"
          body="Not a report emailed later — we open your Google Business Profile while you're on the line and go through the list above. You'll leave the call knowing what's wrong with it whether or not you sign up."
        />
      </Section>
    </>
  );
}
