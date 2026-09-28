import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, resourcePath } from "@/lib/site-data";
import { getResource } from "@/lib/resources-data";
import { JsonLd, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading, AnswerBlock } from "@/components/Section";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Checklist } from "@/components/Checklist";

// SEARCH INTENT
//   Primary query:    how to rank dog grooming business on google
//   Secondary:        how to get my grooming business on google maps,
//                     dog groomer google ranking, rank higher google maps
//                     pet grooming
//   Intent:           purely informational, do-it-yourself.
//   Business purpose: capture the DIY searcher, be genuinely useful to them,
//                     and let the ones who would rather not do it themselves
//                     find us. Deliberately written so it works if you never
//                     hire anyone — a guide that withholds the useful part
//                     converts worse, not better.
//   Differentiation:  /dog-groomer-seo is the service and the mechanics; this
//                     is the ordered checklist.
const resource = getResource("how-to-rank-dog-grooming-business-on-google")!;
const path = resourcePath(resource.slug);

export const metadata: Metadata = pageMetadata({
  title: resource.metaTitle,
  titleTemplate: false,
  description: resource.metaDescription,
  path,
  type: "article",
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Resources", href: PATHS.resources },
  { name: "How to Rank on Google", href: path },
];

const faqItems = [
  {
    question: "How long does it take to rank a dog grooming business on Google?",
    answer:
      "Google Business Profile changes often show up within a few weeks. Website changes take longer — roughly 28 days before Search Console holds enough data to read, and a few months before you can judge direction fairly. Grooming is less competitive than most local industries in most towns, which helps, but it is still not a 30-day channel.",
  },
  {
    question: "Can I rank a grooming business without a website?",
    answer:
      "You can rank in the map pack with a well-run Google Business Profile and no website, and plenty of groomers do. What you cannot do is appear in the organic results, or reach the towns where you are not the closest business — both of those need pages. If you only ever do one thing, do the profile; if you want the other half of the demand, you need a site.",
  },
  {
    question: "Why does my grooming business only rank in my own town?",
    answer:
      "Because that is how the map pack works. Distance from the searcher is one of its main inputs, so a salon rarely appears in the local results for a town twenty minutes away. The way into neighbouring towns is a real page about the work you do there, which competes in the organic results where distance matters much less.",
  },
  {
    question: "Is it worth paying someone to do this?",
    answer:
      "Only you can answer that. Everything on this page is doable yourself — it is work, not a trick. It takes most people several weeks the first time and needs maintaining afterwards. If that is time you would rather spend grooming, that is a fair reason to hire someone; if it is not, follow the list.",
  },
];

const steps = [
  {
    n: "01",
    title: "Claim and finish your Google Business Profile",
    time: "An afternoon",
    body: [
      "This is first because it is free, it is fast, and it is where most of your new customers see you. If you have never claimed the profile, do that now — search your business name on Google and look for the option to claim or verify it.",
      "Then finish it properly. Primary category set to the closest description of grooming, secondary categories only for services you really offer, every service listed by the name a customer would use, hours correct including days closed, and a description written for a person rather than stuffed with search terms.",
    ],
    checklist: [
      { title: "Primary category is grooming, not something broader" },
      { title: "Services list is filled in, not empty" },
      { title: "Hours are right, including closed days" },
      { title: "Business name is your real name, with no keywords bolted on" },
    ],
  },
  {
    n: "02",
    title: "Get the address decision right",
    time: "Ten minutes",
    body: [
      "If you have a salon customers come to, publish the address, and make sure it is character-for-character identical on your profile, your website and every directory that lists you.",
      "If you are mobile, hide the address and set service areas instead. Publishing your home address on a mobile grooming profile is a real privacy problem and describes a place nobody can visit. Set the areas to where you genuinely go, not the biggest metro you could claim.",
    ],
    checklist: [
      { title: "Salon: one exact address, identical everywhere" },
      { title: "Mobile: address hidden, service areas set to your real route" },
      { title: "No old address still live on a directory somewhere" },
    ],
  },
  {
    n: "03",
    title: "Find and kill your duplicate listings",
    time: "An hour",
    body: [
      "Search your business name, your old business name if it changed, and your phone number. Old profiles from a previous address, a previous owner, or a well-meaning customer who added you are surprisingly common, and they split your reviews and confuse Google about which listing is real.",
      "Report duplicates through Google so they can be merged or removed. This is unglamorous and occasionally the single biggest thing holding a business back.",
    ],
    checklist: [
      { title: "Searched the business name, old name and phone number" },
      { title: "Any duplicate profile reported for merging" },
    ],
  },
  {
    n: "04",
    title: "Build a page for each service you offer",
    time: "The long part",
    body: [
      "This is where most grooming websites fall down. A single page called 'Services' cannot rank for deshedding and for a puppy's first groom and for cat grooming, because it is not really about any of them.",
      "Write one page per service. Say what it involves, who it suits, roughly how long it takes, and what it costs or what the range is and what moves it. Two or three hundred honest words about deshedding beats two thousand generic ones about grooming.",
    ],
    checklist: [
      { title: "One page per service you'd actually take a booking for" },
      { title: "A price or a range on each one" },
      { title: "Written in the words customers use, not industry terms" },
    ],
  },
  {
    n: "05",
    title: "Build a page for each town you serve",
    time: "The other long part",
    body: [
      "One page per town you genuinely take clients from. This is what gets you into the organic results for places the map pack will never show you — and for a mobile groomer it is most of the job.",
      "The rule that matters: each page must say something true and specific about that town. How far it is, which days you are over that way, which neighbourhoods you cover, where clients typically park. If you are producing them by swapping a place name in a template, stop — those pages are the reason 'location pages' have a bad reputation, and they do not work.",
    ],
    checklist: [
      { title: "Only towns you'd really drive to, or that really drive to you" },
      { title: "Something specific and true on each page" },
      { title: "Linked from your navigation, not orphaned" },
    ],
  },
  {
    n: "06",
    title: "Make the site fast and tappable on a phone",
    time: "Half a day",
    body: [
      "Most of your visitors are on a phone, often standing next to a dog. Your phone number must be a tap-to-call link and visible without scrolling. Images must be compressed and correctly sized — an unoptimised photo straight off a phone is often the single slowest thing on a grooming website.",
      "Test it on an actual phone on mobile data, not on your laptop on the shop wifi.",
    ],
    checklist: [
      { title: "Phone number is a tel: link on every page" },
      { title: "Images compressed and sized for the web" },
      { title: "Tested on a real phone, on mobile data" },
    ],
  },
  {
    n: "07",
    title: "Start asking every client for a review",
    time: "Forever",
    body: [
      "At pickup, when they have just seen the dog. Same sentence every time, then a text with your profile's review link so the ask survives the drive home.",
      "Ask everyone, not just the ones who look pleased — filtering by expected sentiment breaks Google's policies. Never offer anything in exchange. Reply to every review that arrives, briefly.",
    ],
    checklist: [
      { title: "One agreed sentence, used at every pickup" },
      { title: "Your review link saved in a text you can send in two taps" },
      { title: "Every review replied to" },
    ],
  },
  {
    n: "08",
    title: "Connect Search Console and then leave it alone for a month",
    time: "Twenty minutes, then patience",
    body: [
      "Verify your site in Google Search Console, submit your sitemap, and check that your pages are actually indexed. This is the only way you will ever know what people are really searching to find you.",
      "Then wait. Around 28 days is a reasonable first look for a small local site — sometimes longer if volumes are low. Changing things every week based on three days of data is how sites get worse.",
    ],
    checklist: [
      { title: "Site verified in Search Console" },
      { title: "Sitemap submitted and pages confirmed indexed" },
      { title: "Nothing dramatic changed for at least a month" },
    ],
  },
  {
    n: "09",
    title: "Then let the data pick your next job",
    time: "An hour a month",
    body: [
      "Open the Search Console performance report and look for four things. Pages with lots of impressions and almost no clicks need a better title and description. Queries where you rank around positions four to twenty need the page strengthened. Real searches with no matching page need a page built. Two pages competing for one query need merging.",
      "Do one of those a month. That is the whole ongoing method, and it beats a content calendar because it is based on what is actually happening to you.",
    ],
    checklist: [
      { title: "One change a month, chosen from the data" },
      { title: "Note what you changed and when, so you can tell if it worked" },
    ],
  },
];

export default function HowToRankPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={articleSchema({
          headline: resource.h1,
          description: resource.metaDescription,
          path,
          datePublished: resource.publishedAt,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <article>
        <Section className="pt-6 pb-10">
          <div className="max-w-3xl">
            <p className="tf-caps text-xs text-tf-brown-dark">
              Guide · {resource.readingTime}
            </p>
            <h1 className="mt-3 font-tf-display text-3xl font-extrabold leading-[1.12] text-tf-ink sm:text-4xl lg:text-5xl">
              {resource.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">
              Nine steps, in the order we would do them, written so you can work through it yourself. Nothing
              is held back to make you call us — if you follow this list you will have done the job.
            </p>
          </div>
        </Section>

        <Section width="narrow" className="pb-10">
          <AnswerBlock>
            <p>
              To rank a dog grooming business on Google: <strong>finish your Google Business Profile</strong>{" "}
              (right primary category, full services list, correct address or service areas),{" "}
              <strong>remove duplicate listings</strong>, <strong>build a page for each service and each
              town you serve</strong>, <strong>make the site fast and tap-to-call on a phone</strong>,{" "}
              <strong>ask every client for a review at pickup</strong>, and{" "}
              <strong>connect Search Console</strong> so that from month two onwards your data decides what to
              fix next. The profile moves in weeks; the website takes months.
            </p>
          </AnswerBlock>
        </Section>

        <Section width="narrow" className="pb-10">
          <nav aria-labelledby="contents" className="rounded-2xl border border-tf-border bg-white p-5">
            <h2 id="contents" className="text-sm font-semibold uppercase tracking-wide text-tf-ink">
              The nine steps
            </h2>
            <ol className="mt-3 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
              {steps.map((s) => (
                <li key={s.n}>
                  <a
                    href={`#step-${s.n}`}
                    className="text-tf-ink-soft underline underline-offset-4 hover:text-tf-brown-dark"
                  >
                    <span className="font-tf-mono text-xs text-tf-brown">{s.n}</span> {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Section>

        <Section width="narrow" className="pb-6">
          <div className="space-y-12">
            {steps.map((s) => (
              <section key={s.n} id={`step-${s.n}`} aria-labelledby={`step-${s.n}-heading`} className="scroll-mt-24">
                <p className="font-tf-mono text-sm font-semibold text-tf-brown">
                  {s.n} · {s.time}
                </p>
                <h2
                  id={`step-${s.n}-heading`}
                  className="mt-2 font-tf-display text-2xl font-bold text-tf-ink"
                >
                  {s.title}
                </h2>
                <div className="tf-prose mt-4">
                  {s.body.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-tf-border bg-white p-5">
                  <p className="tf-caps text-xs text-tf-ink-soft">Done when</p>
                  <div className="mt-3">
                    <Checklist items={s.checklist} />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </Section>

        <Section width="narrow" className="py-12" labelledBy="honest">
          <SectionHeading
            eyebrow="One more thing"
            id="honest"
            title="What this list deliberately doesn't include"
          />
          <div className="tf-prose mt-6">
            <p>
              No directory-submission blitz, no backlink packages, no blogging schedule, no adding star-rating
              markup to your website to get stars in search results. The first two are mostly sold to local
              businesses because they are easy to sell; the third produces pages nobody searched for; the
              fourth is against Google&rsquo;s guidelines for self-published reviews and risks a penalty for a
              cosmetic gain.
            </p>
            <p>
              If you do the nine steps above and nothing else, you will be ahead of nearly every grooming
              business in your town. That is not a sales line — it is what makes this niche worth
              specialising in.
            </p>
          </div>
        </Section>

        <Section width="narrow" className="py-10">
          <FaqBlock items={faqItems} eyebrow="FAQ" title="Common questions" headingId="how-to-rank-faq" />
        </Section>
      </article>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: PATHS.gbp,
              label: "Google Business Profile for dog groomers",
              description: "Steps one to three, in much more detail.",
            },
            {
              href: PATHS.websiteDesign,
              label: "Dog grooming website design",
              description: "Steps four to six: what the pages should actually contain.",
            },
            {
              href: PATHS.reviews,
              label: "Review management for dog groomers",
              description: "Step seven, including the three shortcuts that get profiles penalised.",
            },
            {
              href: PATHS.seo,
              label: "Dog groomer SEO",
              description: "Steps eight and nine, and the mechanics behind the whole list.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="how_to_rank_footer"
          title="Or we can just do it"
          body="Everything on this page is the work. If you'd rather it happened without you spending your evenings on it, that's what the $297 a month buys — including the monthly step nine, which is the part most people stop doing."
        />
      </Section>

      <Section width="narrow" className="pb-12">
        <p className="text-xs text-tf-ink-soft">
          Published{" "}
          {new Date(`${resource.publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
          .{" "}
          <Link href={PATHS.resources} className="underline underline-offset-4 hover:text-tf-brown-dark">
            More resources
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
