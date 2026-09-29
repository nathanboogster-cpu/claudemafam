import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PATHS, faqs, objections, preCallVideos, wistiaSwatchUrl, wistiaEmbedUrl } from "@/lib/site-data";
import { JsonLd, breadcrumbSchema, faqSchema, videoSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, SectionHeading } from "@/components/Section";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { VideoAnswers } from "@/components/VideoAnswers";
import { FaqBlock } from "@/components/FaqBlock";
import { CtaBand } from "@/components/CtaBand";

// SEARCH INTENT
//   Primary:          navigational / pre-decision. Someone close to booking
//                     who wants their specific doubt answered first.
//   Business purpose: answer every common objection in one place, on video
//                     and in writing, then send them to book.
//   Structure:        the seven video answers first (the groomer's own words
//                     as the heading, the answer as the video), then every
//                     written answer, grouped by what the reader is deciding.
export const metadata: Metadata = pageMetadata({
  title: "FAQ: What Groomers Ask Before Signing Up",
  description:
    "Video and written answers to what groomers ask before working with Tongfluence: price, contract, the monthly work, and whether it fits your business.",
  path: PATHS.faq,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "FAQ", href: PATHS.faq },
];

const videoAnswers = preCallVideos.filter(
  (v): v is (typeof preCallVideos)[number] & { question: string } => Boolean(v.question),
);

// Every written answer on the site, grouped by the decision it helps with.
// Questions are looked up by their exact text so this page can never drift
// from the answers given elsewhere; a missing one fails the build.
const writtenAnswers = [...faqs, ...objections];
function pick(questions: string[]) {
  return questions.map((q) => {
    const found = writtenAnswers.find((f) => f.question === q);
    if (!found) throw new Error(`FAQ page: no written answer for "${q}"`);
    return found;
  });
}

const groups = [
  {
    id: "faq-price",
    eyebrow: "Price and contract",
    title: "What it costs,",
    accent: "and what you keep.",
    items: pick([
      "How much does it cost?",
      "Why is it only $297? What is the catch?",
      "Is there a contract?",
      "What happens if I cancel?",
      "Do I own my website?",
    ]),
  },
  {
    id: "faq-work",
    eyebrow: "The work",
    title: "What we actually do,",
    accent: "every month.",
    items: pick([
      "What does Tongfluence actually do?",
      "Is Tongfluence only for dog groomers?",
      "What exactly do you do every month?",
      "How does the review system work?",
      "Does this work for mobile grooming?",
      "Do you run ads too?",
    ]),
  },
  {
    id: "faq-start",
    eyebrow: "Getting started",
    title: "Where you are now,",
    accent: "and how long it takes.",
    items: pick([
      "I already have a website. Do I need a new one?",
      "I already have a Google Business Profile. Is that enough?",
      "How long does SEO take?",
      "How much of my time does this take?",
    ]),
  },
];

const isoDuration = (s: number) => `PT${Math.floor(s / 60)}M${s % 60}S`;

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(groups.flatMap((g) => g.items))} />
      {videoAnswers
        .filter((v) => v.uploadDate && v.durationSeconds)
        .map((v) => (
          <JsonLd
            key={v.wistiaMediaId}
            data={videoSchema({
              name: v.question,
              description: `Tongfluence’s answer to a grooming business owner who says: “${v.question}”`,
              thumbnailUrl: wistiaSwatchUrl(v.wistiaMediaId),
              uploadDate: v.uploadDate!,
              duration: isoDuration(v.durationSeconds!),
              embedUrl: wistiaEmbedUrl(v.wistiaMediaId),
              pagePath: PATHS.faq,
            })}
          />
        ))}

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="FAQ"
        title="The questions groomers ask,"
        accent="answered."
        intro={
          <>
            Seven short videos first, each answering something a grooming business owner has said to us
            before a call. Written answers to everything else follow underneath.
          </>
        }
        location="faq_hero"
      />

      {videoAnswers.length > 0 ? (
        <Section className="pb-14" labelledBy="video-answers">
          <Reveal>
            <SectionHeading
              eyebrow="On video"
              id="video-answers"
              title="What groomers tell us"
              accent="before the call."
              intro="And what we say back. None of these is longer than a minute."
            />
          </Reveal>
          <div className="mt-8">
            <VideoAnswers items={videoAnswers} location="faq_videos" />
          </div>
        </Section>
      ) : null}

      {groups.map((g) => (
        <Section key={g.id} width="narrow" className="py-12">
          <FaqBlock items={g.items} eyebrow={g.eyebrow} title={g.title} accent={g.accent} headingId={g.id} />
        </Section>
      ))}

      <Section className="py-12">
        <CtaBand
          location="faq_footer"
          title="Still have a question?"
          body="Ask it on the call. We'll look at your Google profile and your current site while you're on the line, and you'll get a straight answer on whether this is worth it for your business."
        />
      </Section>
    </>
  );
}
