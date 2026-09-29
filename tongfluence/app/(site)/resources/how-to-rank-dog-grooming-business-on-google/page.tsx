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
      "Profile changes often show up within a few weeks. Website changes take longer. It is about 28 days before there is enough search data to read, and a few months before you can judge the trend fairly. Grooming has less competition than most local trades in most towns, which helps. But it is still not a 30-day job.",
  },
  {
    question: "Can I rank a grooming business without a website?",
    answer:
      "You can show up on the map with a well-run Google profile and no website. Plenty of groomers do. What you cannot do is show up in the list of websites, or reach the towns where you are not the closest business. Both of those need pages. If you only ever do one thing, do the profile. If you want the other half of the demand, you need a site.",
  },
  {
    question: "Why does my grooming business only rank in my own town?",
    answer:
      "Because that is how the map works. How far you are from the searcher is one of its main inputs. So a salon rarely shows on the map for a town twenty minutes away. The way into nearby towns is a real page about the work you do there. That page competes in the list of websites, where distance matters much less.",
  },
  {
    question: "Is it worth paying someone to do this?",
    answer:
      "Only you can answer that. You can do everything on this page yourself. It is work, not a trick. It takes most people a few weeks the first time, and it needs upkeep after that. If you would rather spend that time grooming, that is a fair reason to hire someone. If not, follow the list.",
  },
];

const steps = [
  {
    n: "01",
    title: "Claim and finish your Google Business Profile",
    time: "An afternoon",
    body: [
      "This is first because it is free, it is fast, and it is where most of your new customers see you. If you have never claimed the profile, do that now. Search your business name on Google and look for the option to claim or verify it.",
      "Then finish it properly. Set the main category to the closest match for grooming. Add extra categories only for services you really offer. List every service by the name a customer would use. Get the hours right, including days you are closed. Write the description for a person, not stuffed with search terms.",
    ],
    checklist: [
      { title: "Main category is grooming, not something wider" },
      { title: "Services list is filled in, not empty" },
      { title: "Hours are right, including closed days" },
      { title: "Business name is your real name, with no keywords added on" },
    ],
  },
  {
    n: "02",
    title: "Get the address decision right",
    time: "Ten minutes",
    body: [
      "If you have a salon that customers come to, show the address. Make sure it is exactly the same on your profile, your website and every directory that lists you.",
      "If you are mobile, hide the address and set service areas instead. Showing your home address on a mobile grooming profile is a real privacy problem. It also points to a place nobody can visit. Set the areas to where you really go, not the biggest area you could claim.",
    ],
    checklist: [
      { title: "Salon: one exact address, the same everywhere" },
      { title: "Mobile: address hidden, service areas set to your real route" },
      { title: "No old address still live on a directory somewhere" },
    ],
  },
  {
    n: "03",
    title: "Find and kill your duplicate listings",
    time: "An hour",
    body: [
      "Search your business name, your old business name if it changed, and your phone number. Old profiles are common. They come from an old address, an old owner, or a kind customer who added you. They split your reviews and confuse Google about which listing is real.",
      "Report the copies through Google so they can be merged or removed. This is boring work. Once in a while it is the biggest thing holding a business back.",
    ],
    checklist: [
      { title: "Searched the business name, old name and phone number" },
      { title: "Any copied profile reported for merging" },
    ],
  },
  {
    n: "04",
    title: "Build a page for each service you offer",
    time: "The long part",
    body: [
      "This is where most grooming websites fall down. One page called 'Services' cannot rank for deshedding, and for a puppy's first groom, and for cat grooming. It is not really about any of them.",
      "Write one page per service. Say what it involves, who it suits, about how long it takes, and what it costs or what the range is. Two or three hundred honest words about deshedding beat two thousand vague ones about grooming.",
    ],
    checklist: [
      { title: "One page per service you would really take a booking for" },
      { title: "A price or a range on each one" },
      { title: "Written in the words customers use, not industry terms" },
    ],
  },
  {
    n: "05",
    title: "Build a page for each town you serve",
    time: "The other long part",
    body: [
      "One page per town you really take clients from. This is what gets you into the list of websites for places the map will never show you. For a mobile groomer, it is most of the job.",
      "The rule that matters: each page must say something true about that town. How far it is. Which days you are over that way. Which areas you cover. Where clients usually park. If you are making them by swapping a town name in a template, stop. Those pages are the reason 'town pages' have a bad name, and they do not work.",
    ],
    checklist: [
      { title: "Only towns you would really drive to, or that really drive to you" },
      { title: "Something true and specific on each page" },
      { title: "Linked from your menu, not left on its own" },
    ],
  },
  {
    n: "06",
    title: "Make the site fast and tappable on a phone",
    time: "Half a day",
    body: [
      "Most of your visitors are on a phone, often standing next to a dog. Your phone number must be a tap-to-call link, and it must show without scrolling. Images must be small and the right size. A full-size photo straight off a phone is often the slowest thing on a grooming website.",
      "Test it on a real phone on mobile data. Not on your laptop on the shop wifi.",
    ],
    checklist: [
      { title: "Phone number is a tap-to-call link on every page" },
      { title: "Images made small and sized for the web" },
      { title: "Tested on a real phone, on mobile data" },
    ],
  },
  {
    n: "07",
    title: "Start asking every client for a review",
    time: "Forever",
    body: [
      "At pickup, when they have just seen the dog. The same sentence every time. Then a text with your review link, so the ask survives the drive home.",
      "Ask everyone, not just the ones who look pleased. Picking who to ask breaks Google's rules. Never offer anything in return. Reply to every review, briefly.",
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
      "Set up your site in Google Search Console. Send it your sitemap. Check that Google has added your pages. This is the only way you will ever know what people really search to find you.",
      "Then wait. About 28 days is a fair first look for a small local site. Sometimes longer if searches are few. Changing things every week based on three days of data is how sites get worse.",
    ],
    checklist: [
      { title: "Site set up in Search Console" },
      { title: "Sitemap sent and pages confirmed in Google" },
      { title: "Nothing big changed for at least a month" },
    ],
  },
  {
    n: "09",
    title: "Then let the data pick your next job",
    time: "An hour a month",
    body: [
      "Open the Search Console report and look for four things. Pages that get seen a lot but almost never clicked need a better title. Searches where you rank around spots four to twenty need a stronger page. Real searches with no matching page need a page built. Two pages fighting for one search need to be merged.",
      "Do one of those a month. That is the whole method. It beats a content calendar because it is based on what is really happening to you.",
    ],
    checklist: [
      { title: "One change a month, chosen from the data" },
      { title: "Write down what you changed and when, so you can tell if it worked" },
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
            <h1 className="mt-3 font-tf-display text-3xl font-bold leading-[1.12] text-tf-ink sm:text-4xl lg:text-5xl">
              {resource.h1}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-tf-ink-soft">
              Nine steps, in the order we would do them, written so you can work through it yourself.
              Nothing is held back to make you call us. If you follow this list, you will have done the job.
            </p>
          </div>
        </Section>

        <Section width="narrow" className="pb-10">
          <AnswerBlock>
            <p>
              To rank a dog grooming business on Google: <strong>finish your Google Business Profile</strong>.
              That means the right main category, a full services list, and the right address or service
              areas. <strong>Remove any copied listings</strong>. <strong>Build a page for each service and
              each town you serve</strong>. <strong>Make the site fast and tap-to-call on a phone</strong>.{" "}
              <strong>Ask every client for a review at pickup</strong>. And{" "}
              <strong>connect Search Console</strong>, so that from month two your data decides what to fix
              next. The profile moves in weeks. The website takes months.
            </p>
          </AnswerBlock>
        </Section>

        <Section width="narrow" className="pb-10">
          <nav aria-labelledby="contents" className="rounded-xl border border-tf-border bg-tf-card p-5">
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
                    <span className="font-tf-display text-xs text-tf-brown">{s.n}</span> {s.title}
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
                <p className="font-tf-display text-xl font-bold leading-none text-tf-brown">
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
                <div className="mt-5 rounded-xl border border-tf-border bg-tf-card p-5">
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
            title="What this list"
            accent="leaves out on purpose"
          />
          <div className="tf-prose mt-6">
            <p>
              No rush of directory listings. No link packages. No blog schedule. No hidden star-rating code
              on your website to get stars in search results. The first two are sold to local businesses
              because they are easy to sell. The third makes pages nobody searched for. The fourth is against
              Google&rsquo;s rules and risks a penalty for a small gain.
            </p>
            <p>
              If you do the nine steps above and nothing else, you will be ahead of nearly every grooming
              business in your town. That is not a sales line. It is why this field is worth focusing on.
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
              label: "Your Google Business Profile",
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
              href: PATHS.seo,
              label: "How the SEO works",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand
          location="how_to_rank_footer"
          title="Or we can just do it"
          body="Everything on this page is the work. If you would rather it happened without you spending your evenings on it, that is what the $297 a month buys. That includes the monthly step nine, which is the part most people stop doing."
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
