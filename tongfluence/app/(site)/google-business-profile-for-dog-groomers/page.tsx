import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { pageDogPhoto } from "@/lib/dog-photos";
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
    "Setting up a Google Business Profile for a grooming business: categories, services, service areas, photos, reviews, and the mistakes that cost you the map.",
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
      "Your main category should be the closest match for the main thing you do. For most grooming businesses, that is the pet grooming category. Google's list of categories changes over time. The real list is the picker inside your own profile. Choose from that, not from a list on a blog. Add extra categories only for services you really offer, like boarding or day care. Keep the number small. Every extra category waters down what the profile is about.",
  },
  {
    question: "Should a mobile dog groomer list an address?",
    answer:
      "No. A mobile groomer is a service-area business. You hide the address and set the areas you travel to instead. Showing a home address shares something you did not mean to share. It also points to a place customers cannot visit.",
  },
  {
    question: "How do I rank higher in Google Maps as a dog groomer?",
    answer:
      "Google ranks the map on three things: how well you fit the search, how close you are, and how well known you are. You cannot change distance. Fit is the fastest thing to fix. The right main category, a full services list, service areas that match where you really work, and a description that says what you do. Being well known comes mostly from reviews. How many, how new, and whether you reply. It also comes from the rest of your web presence.",
  },
  {
    question: "How many photos should a grooming profile have?",
    answer:
      "Enough that it looks like a business someone visited this month. Add new ones often instead of uploading once. For grooming, the photos that do the most work are before-and-after shots of real dogs, the space or the inside of the van, and the groomer. What matters more than the number is that they are new and yours.",
  },
  {
    question: "Does posting updates on Google Business Profile help?",
    answer:
      "Posts are useful for telling people something true and timely. Holiday hours, a new service, open spots this week. Treat them as a way to talk to your customers, not as a way to rank higher. Do not post filler just to keep a streak going.",
  },
  {
    question: "Do you take over my Google Business Profile?",
    answer:
      "No. It stays your profile, owned by you. We are added as a manager so we can make changes. If you cancel, we are removed and everything we set up stays. Be careful of anyone who wants to create a profile in their own name for you. That is how businesses get locked out of their own listing.",
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
            "Setup and monthly upkeep of a dog grooming business's Google Business Profile: categories, services, service areas, description, photos, hours and reviews.",
          path: PATHS.gbp,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Google Business Profile"
        title="Your Google Business Profile is the most valuable thing you own"
        accent="and have never finished."
        intro={
          <>
            It is free. It already exists. For most grooming businesses, it is where most new customers see
            you first. Before the website, before anything else. It is also the part of the job that moves
            fastest. That is why we do it in week one.
          </>
        }
        location="gbp_hero"
        image={pageDogPhoto.gbp}
        pills
        secondary={{ href: PATHS.caseStudies, label: "See client results" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            Google ranks the map on three things: <strong>fit, distance and how well known you are</strong>.
            You cannot change how far you are from the person searching. You can change fit. The right main
            category. A full list of your services. Correct service areas and hours. A description that says
            what you do. You can also help how well known you are, mostly with recent reviews and a real
            website that matches the profile. Almost every grooming profile we look at is losing on fit, for
            reasons that take a day to fix.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="categories">
        <SectionHeading
          eyebrow="Categories"
          id="categories"
          title="The main category is the biggest lever,"
          accent="and it's a choice, not a list"
        />
        <div className="tf-prose mt-6">
          <p>
            Your <strong>main category</strong> is the strongest statement of what your business is. It
            carries more weight than any other field on the profile. It is worth more than the ten seconds
            most people give it.
          </p>
          <p>
            We are not posting a copy of Google&rsquo;s category list here. It changes. The only real
            version is the picker inside your own profile. That is also the only one that shows what is open
            to you, in your country, today. Blogs that post a category list are usually copying each other.
            Choose from what Google offers you, and check Google&rsquo;s own{" "}
            <a
              href="https://support.google.com/business/answer/3038177"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-tf-brown-dark underline underline-offset-4"
            >
              documentation on choosing a category
            </a>{" "}
            if you are not sure.
          </p>
          <p>The rules that always hold, whatever the list says:</p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">Do</h3>
            <div className="mt-4">
              <Checklist
                items={[
                  { title: "Pick the closest match for your main work", body: "If grooming is the business, grooming is the main category. Not “pet store”. Not something wider that felt safer." },
                  { title: "Add extra categories only for real services", body: "Boarding, day care, training. Only if you really do them and would take the booking." },
                  { title: "Keep the list short", body: "A few correct categories describe the business better than ten loosely related ones." },
                ]}
              />
            </div>
          </div>
          <div className="rounded-xl border border-tf-border bg-tf-card p-6">
            <h3 className="font-tf-display text-base font-bold text-tf-ink">Don&rsquo;t</h3>
            <div className="mt-4">
              <Checklist
                tone="dont"
                items={[
                  { title: "Add categories to “cover more searches”", body: "It waters down what the profile is about. That is the one signal you most want to keep sharp." },
                  { title: "Pick a category for a service you send elsewhere", body: "You will get calls you have to turn away. People who get turned away sometimes leave reviews." },
                  { title: "Set it once and never look again", body: "Google adds and removes categories. Check it again when anything about the business changes." },
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
          title="The services list is usually empty,"
          accent="and it shouldn't be"
        />
        <div className="tf-prose mt-6">
          <p>
            Your profile has a services section. You can list what you do, each with its own name and a
            short note. On the grooming profiles we look at, it is usually blank or has two vague entries. This
            is free space to say <em>deshedding</em>, <em>dematting</em>, <em>puppy&rsquo;s first groom</em>,{" "}
            <em>nail trim and ear clean</em>, <em>cat grooming</em>, <em>hand stripping</em>. The words
            people really search for. Most groomers leave it empty.
          </p>
          <p>
            Fill it with the services you really offer. Name them the way a customer would. Make each note
            a real sentence, not a keyword. Then make sure your website has a page for each one, so the
            profile and the site tell the same story. That match between the two is most of what we mean
            by{" "}
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
          title="Mobile groomers: hide the address,"
          accent="set the areas"
        />
        <div className="tf-prose mt-6">
          <p>
            If you groom at the customer&rsquo;s home, Google calls you a{" "}
            <strong>service-area business</strong>. No public address, and a set list of places you travel
            to. Two things follow from that, and both matter.
          </p>
          <p>
            First, take the address off. For a mobile groomer, it is almost always your home. Showing it is
            a real privacy problem. It also points to a place no customer can visit. Three of our sites are
            for mobile groomers, and none of them shows a street address anywhere.
          </p>
          <p>
            Second, set the service areas to where the van really goes. Not the biggest area you could
            claim. Claiming too much does not win you those towns. It just makes the profile less clear about
            the places you really serve. The way into the farther towns is website pages, which is what{" "}
            <Link
              href={PATHS.websiteDesign}
              className="font-medium text-tf-brown-dark underline underline-offset-4"
            >
              the town pages on a grooming site
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
          intro="This is the real list, in the order we work through it in week one."
        />
        <ol className="mt-7 space-y-3">
          {[
            ["Main category", "Is it the closest match for the main business? Or something wider that someone picked in a hurry?"],
            ["Extra categories", "Real services only. Not so many that the profile stops being about grooming."],
            ["Services list", "Filled in with the services you really offer, named the way customers say them."],
            ["Business name", "Your real business name. No “Best Dog Grooming | Town | Mobile” keyword stuffing. That is against Google's rules and it gets profiles suspended."],
            ["Address or service areas", "A salon has one exact address. A mobile business has no address and a real list of towns."],
            ["Name, address and phone", "The same here, on the website, and anywhere else you are listed."],
            ["Hours", "Correct, including the days you are closed. Holiday hours set before the holiday, not after."],
            ["Description", "What you do, who for, and where. Written for a person, not stuffed with search terms."],
            ["Photos", "Recent, real and yours. Before-and-after shots, the space or the van, and you."],
            ["Reviews", "How many, how new, and whether anyone has replied to them."],
            ["Website link", "Pointing at the right page. Not a dead link from a site you replaced two years ago."],
            ["Duplicate listings", "Old profiles from an old address or an old owner, still live, splitting your reviews."],
          ].map(([item, detail], i) => (
            <li key={item} className="flex gap-4 rounded-xl border border-tf-border bg-tf-card p-4">
              <span className="font-tf-display text-base font-bold leading-none text-tf-brown">
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
          title="The profile's biggest ongoing input"
          accent="is reviews"
          intro={
            <>
              Most of the list above is a one-time job. Reviews have to keep happening. They are the reason a
              profile that was great two years ago stops working. That has its own page:{" "}
              <Link
                href={PATHS.reviews}
                className="font-medium text-tf-brown-dark underline underline-offset-4"
              >
                the reviews page
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
          title="What the profile work did"
          accent="to one client's calls"
          intro="The month before we started on the profile, and the month after."
        />
        <div className="mt-8">
          <GbpCallsProof location="gbp_measured" />
        </div>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="gbp-offer">
        <SectionHeading
          eyebrow="What it costs"
          id="gbp-offer"
          title="Profile work is included,"
          accent="not an add-on"
          intro="It is the first thing we do and one of the things we keep doing. A profile goes stale on its own."
        />
        <PricingCard location="gbp" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock
          items={faqItems}
          eyebrow="FAQ"
          title="Common questions"
          headingId="gbp-faq"
        />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: PATHS.reviews,
              label: "Getting more reviews",
              description: "Keeping the profile earning new reviews, without breaking Google's rules.",
            },
            {
              href: PATHS.seo,
              label: "How the SEO works",
              description: "How the profile and the website rank in two different ways.",
            },
            {
              href: resourcePath("how-to-rank-dog-grooming-business-on-google"),
              label: "How to rank a grooming business on Google",
              description: "The step-by-step version, if you would rather do it yourself.",
            },
            {
              href: PATHS.caseStudies,
              label: "Grooming builds, broken down",
              description: "How the profile work fits with the site on a real business.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="gbp_footer"
          title="We'll go through your profile with you on the call"
          body="Not a report emailed later. We open your Google profile while you are on the line and go through the list above. You will leave the call knowing what is wrong with it, whether or not you sign up."
        />
      </Section>
    </>
  );
}
