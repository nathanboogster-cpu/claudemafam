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
import { Checklist } from "@/components/Checklist";

// SEARCH INTENT
//   Primary query:    dog groomer review management
//   Secondary:        how to get more google reviews for dog grooming,
//                     reviews for pet groomers, asking clients for reviews
//   Intent:           commercial-informational — an owner who knows reviews
//                     matter and wants a system rather than a nag.
//   Business purpose: sell the review component and, just as importantly,
//                     establish that we do it in a policy-safe way.
//   Compliance note:  this page must never promise a star rating, describe
//                     review gating, or suggest incentives. Those are the
//                     three things Google prohibits and competitors sell.
export const metadata: Metadata = pageMetadata({
  title: "Dog Groomer Review Management",
  description:
    "A simple way for dog groomers to get new Google reviews after every visit: how to ask, when to ask, how to reply, and the shortcuts that get you in trouble.",
  path: PATHS.reviews,
});

const breadcrumbs = [
  { name: "Home", href: PATHS.home },
  { name: "Dog Groomer Review Management", href: PATHS.reviews },
];

const faqItems = [
  {
    question: "How do dog groomers get more Google reviews?",
    answer:
      "By asking every client, the same way, at the same moment. Right at pickup, when they have just seen the dog. The ask works best in person. Then send a link they can tap, by text or email, with your own review link in it. Almost all of the gain comes from asking every time, not from asking cleverly.",
  },
  {
    question: "When is the best time to ask a grooming client for a review?",
    answer:
      "At pickup, in the thirty seconds after they see their dog. That is the high point of the whole visit. It is the only moment you know you have their attention. Asking a week later by email works far worse, because the feeling has faded.",
  },
  {
    question: "Can you guarantee 5-star reviews?",
    answer:
      "No, and nobody honest can. Your customers write reviews about your work. What a system can do is make sure every happy customer gets asked. That is where almost all the missing reviews are. If the work is good, asking every time is enough.",
  },
  {
    question: "Is it OK to only ask happy customers for reviews?",
    answer:
      "No. Picking who gets asked based on how happy they seem is called review gating. It is against Google's rules. Platforms have removed reviews and punished businesses for it. We ask everybody the same way. It also works better. One so-so review among recent good ones looks real.",
  },
  {
    question: "Can I offer a discount in exchange for a review?",
    answer:
      "No. Offering anything for a review breaks Google's rules. That includes a discount, a free nail trim, or a prize draw. It can get reviews removed or the profile punished. We never set up a reward, and you should be careful of anyone who suggests one.",
  },
  {
    question: "Should I reply to reviews?",
    answer:
      "Yes, to all of them, briefly. Replies are public and future customers read them. A calm, clear reply to a bad review often does more for you than the five-star reviews around it. Keep it short. Thank people by name when you can. Never argue about a dog's behavior in public.",
  },
  {
    question: "What do I do about an unfair review?",
    answer:
      "Reply once, with the facts and no heat, and move on. If it truly breaks Google's rules, you can report it. That means spam, a review about a different business, or abuse or private details. Removal is not promised. You cannot get it taken down just because you disagree. And you should not try to bury it with reviews you set up.",
  },
];

export default function ReviewManagementPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd data={faqSchema(faqItems)} />
      <JsonLd
        data={serviceSchema({
          name: "Review management for dog groomers",
          serviceType: "Online review and reputation management for pet grooming businesses",
          description:
            "A simple review request system for dog grooming businesses that follows Google's rules, plus help replying to reviews and keeping a Google Business Profile earning new reviews.",
          path: PATHS.reviews,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Reviews & reputation"
        title="You see dozens of happy customers a week."
        accent="Almost none of them are asked."
        intro={
          <>
            Grooming has an edge almost no other local business has. You hand the customer a happy,
            freshly groomed dog, in person, about every six weeks. That moment is worth more than any review
            software. The problem is never that clients will not do it. It is that nobody ever built the
            habit of asking.
          </>
        }
        location="reviews_hero"
        image={pageDogPhoto.reviews}
        pills
        secondary={{ href: PATHS.gbp, label: "Where reviews show up" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            The whole system is: <strong>ask every client at pickup, then send them the link.</strong> Same
            words, same moment, every time. Then a text or email with your own Google review link, so the
            ask survives the drive home. Reply to every review that comes in. That is it. It beats every
            review tool on the market, because the problem was never the tool.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="why">
        <SectionHeading
          eyebrow="Why it matters"
          id="why"
          title="New reviews do as much work"
          accent="as the total"
        />
        <div className="tf-prose mt-6">
          <p>
            Two grooming profiles, same town. One has 41 reviews, and the newest is from fourteen months ago.
            The other has 23, with four from the last month. To a person deciding who to trust with their
            dog, the second one is clearly the safer bet. The first looks like a business that might not be
            there any more.
          </p>
          <p>
            Reviews also feed how well known Google thinks you are, along with the rest of your web presence.
            So a steady flow of reviews does two jobs at once. It convinces the person reading. And it keeps
            your profile strong on the map.
          </p>
          <p>
            So reviews are not a project you finish. They are a habit you either have or do not have.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="system">
        <SectionHeading eyebrow="The system" id="system" title="Four parts," accent="none of them clever" />
        <div className="mt-8 space-y-5">
          {[
            {
              n: "01",
              t: "One sentence, said every time",
              b: "Agreed in advance, short, and the same from everyone in the shop. Something like: “If you're happy with how she looks, a quick Google review really helps us. I'll text you the link.” Having the words ready is what makes it survive a busy Saturday.",
            },
            {
              n: "02",
              t: "A link that takes one tap",
              b: "Your Google profile has its own short review link. Put it in a saved text, in your email signature, on a card at the desk, and on your website. Most people who meant to leave a review and did not just could not find the right page.",
            },
            {
              n: "03",
              t: "The follow-up, sent the same day",
              b: "A short text or email while the dog still looks freshly groomed. One message, not a series. You will see this client again in six weeks, and you do not want it to feel like a robot.",
            },
            {
              n: "04",
              t: "A reply to every review",
              b: "Short and specific for the good ones. Calm and factual for the bad ones. Future customers read replies. How you handle a complaint in public is one of the most convincing things on your profile.",
            },
          ].map((x) => (
            <div key={x.n} className="grid gap-3 rounded-xl border border-tf-border bg-tf-card p-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5">
              <p className="font-tf-display text-xl font-bold leading-none text-tf-brown">{x.n}</p>
              <div>
                <h3 className="font-tf-display text-lg font-bold text-tf-ink">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{x.b}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-tf-ink-soft">
          We set this up with you. We write the messages around how your shop really runs. We put the
          review link where it needs to be. And we check the profile each month to see whether it is still
          happening. The asking has to be you. It works because it is you.
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="never">
        <SectionHeading
          eyebrow="What we never do"
          id="never"
          title="Three shortcuts"
          accent="that put your profile at risk"
          intro="These get sold as review management. They are the reason some businesses lose their reviews, or their whole listing."
        />
        <div className="mt-7 rounded-xl border border-tf-warn/30 bg-tf-warn-wash p-6">
          <Checklist
            tone="dont"
            items={[
              {
                title: "Filtering who gets asked",
                body: "Asking customers how they feel first, and only sending the link to the happy ones. This is called review gating. It is against Google's rules. Platforms have removed reviews over it. And it is the most common thing sold as a feature.",
              },
              {
                title: "Incentives of any kind",
                body: "A discount, a free nail trim, a prize draw. Offering anything for a review breaks the rules, even if the review itself is honest.",
              },
              {
                title: "Writing or buying reviews",
                body: "That includes asking staff, family or friends who were never customers. It is fraud. It can be spotted. And one removed batch can take the real reviews with it.",
              },
            ]}
          />
        </div>
        <div className="tf-prose mt-6">
          <p>
            We also do not add hidden star-rating code to your website to get stars in search results.
            Google restricts that, and the gain is only cosmetic. Real reviews go on your{" "}
            <Link href={PATHS.gbp} className="font-medium text-tf-brown-dark underline underline-offset-4">
              Google Business Profile
            </Link>
            . Then we quote them on your site, with a link to where they came from.
          </p>
        </div>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="reviews-offer">
        <SectionHeading
          eyebrow="What it costs"
          id="reviews-offer"
          title="Part of the same $297"
          intro="No fee per review. No separate tool. No software subscription added on top."
        />
        <PricingCard location="reviews" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock items={faqItems} eyebrow="FAQ" title="Common questions" headingId="reviews-faq" />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: PATHS.gbp,
              label: "Your Google Business Profile",
              description: "Where your reviews live, and the rest of what that profile needs.",
            },
            {
              href: PATHS.leadGeneration,
              label: "Turning searches into calls",
              description: "How reviews fit into the path from a search to a booked appointment.",
            },
            {
              href: PATHS.marketing,
              label: "The whole picture",
              description: "The big picture, and where reviews sit in the order of work.",
            },
            {
              href: PATHS.caseStudies,
              label: "Grooming builds, broken down",
              description: "How the review system is set up next to the site and profile.",
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <CtaBand location="reviews_footer" />
      </Section>
    </>
  );
}
