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
    "A repeatable way for dog groomers to earn fresh Google reviews after every appointment: how to ask, when, how to reply, and the shortcuts that get you penalised.",
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
      "By asking every client, in the same way, at the same moment — right at pickup, when they have just seen the dog. The ask works best in person and is then followed by a link they can tap: a text or an email with your profile's own review link in it. Almost all of the improvement comes from making the ask consistent rather than from making it clever.",
  },
  {
    question: "When is the best time to ask a grooming client for a review?",
    answer:
      "At pickup, in the thirty seconds after they have seen their dog. That is the high point of the entire experience, and it is the only moment you reliably have their attention. Asking a week later by email converts far worse because the feeling has faded.",
  },
  {
    question: "Can you guarantee 5-star reviews?",
    answer:
      "No, and nobody honestly can. Reviews are written by your customers about your work. What a system can do is make sure every happy customer is actually asked, which is where almost all of the missing reviews are. If the work is good, asking consistently is enough.",
  },
  {
    question: "Is it OK to only ask happy customers for reviews?",
    answer:
      "No. Filtering customers by how satisfied they seem before deciding who gets a review request — often called review gating — is against Google's policies, and platforms have removed reviews and penalised businesses for it. We ask everybody the same way. It is also, in practice, better: an occasional imperfect review among recent good ones reads as genuine.",
  },
  {
    question: "Can I offer a discount in exchange for a review?",
    answer:
      "No. Offering anything of value for a review — a discount, a free nail trim, entry into a draw — breaks Google's policies and can get reviews removed or the profile penalised. We never set up an incentive, and you should be wary of anyone who suggests one.",
  },
  {
    question: "Should I reply to reviews?",
    answer:
      "Yes, to all of them, briefly. Replies are public and future customers read them — a calm, specific reply to a critical review often does more for you than the five-star reviews around it. Keep it short, thank people by name where you can, and never argue about a dog's behaviour in public.",
  },
  {
    question: "What do I do about an unfair review?",
    answer:
      "Reply once, factually and without heat, and move on. If it genuinely breaks Google's content policies — it is spam, it is about a different business, it contains abuse or personal information — you can report it, though removal is not guaranteed. What you cannot do is get it taken down because you disagree with it, and what you should not do is try to bury it with reviews you arranged.",
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
            "A repeatable, policy-compliant review request system for dog grooming businesses, plus guidance on replying to reviews and keeping a Google Business Profile earning recent reviews.",
          path: PATHS.reviews,
        })}
      />

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <PageHero
        eyebrow="Reviews & reputation"
        title="You see dozens of delighted customers a week. Almost none of them are asked."
        intro={
          <>
            Grooming has a structural advantage almost no other local business has: you hand the customer a
            visibly transformed, happy dog, in person, roughly every six weeks. That moment is worth more than
            any review software. The problem is never that clients are unwilling — it is that nobody ever built
            the habit of asking.
          </>
        }
        location="reviews_hero"
        secondary={{ href: PATHS.gbp, label: "Where reviews show up" }}
      />

      <Section width="narrow" className="pb-12">
        <AnswerBlock>
          <p>
            The whole system is: <strong>ask every client at pickup, then send them the link.</strong> Same
            words, same moment, every time, followed by a text or email containing your Google profile&rsquo;s
            own review link so the ask survives the drive home. Reply to every review that comes in. That is
            it — and it outperforms every review tool on the market, because the failure was never the
            technology.
          </p>
        </AnswerBlock>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="why">
        <SectionHeading
          eyebrow="Why it matters"
          id="why"
          title="Recency does as much work as volume"
        />
        <div className="tf-prose mt-6">
          <p>
            Two grooming profiles, same town. One has 41 reviews, the most recent from fourteen months ago.
            The other has 23, with four in the last month. To a person deciding who to trust with their dog,
            the second one is obviously the safer bet — the first reads as a business that might not be there
            any more.
          </p>
          <p>
            Reviews also feed the part of local ranking Google calls prominence, alongside the rest of your
            presence on the web. So the ongoing flow of reviews is doing two jobs at once: convincing the
            person reading, and keeping the profile competitive in the map pack it lives in.
          </p>
          <p>
            The practical consequence is that reviews are not a project you complete. They are a habit you
            either have or do not have.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="system">
        <SectionHeading eyebrow="The system" id="system" title="Four parts, none of them clever" />
        <div className="mt-8 space-y-5">
          {[
            {
              n: "01",
              t: "One sentence, said every time",
              b: "Agreed in advance, short, and the same from everyone in the shop: something like “If you're happy with how she looks, a quick Google review really helps us — I'll text you the link.” Scripting it is what makes it survive a busy Saturday.",
            },
            {
              n: "02",
              t: "A link that takes one tap",
              b: "Your Google Business Profile has its own short review link. It goes in a saved text message, in your email signature, on a card at the desk, and on your website. Most people who meant to leave a review and didn't were simply defeated by finding the right page.",
            },
            {
              n: "03",
              t: "The follow-up, sent the same day",
              b: "A short text or email while the dog still looks freshly groomed. One message, not a sequence — you'll see this client again in six weeks and you don't want the relationship to feel automated.",
            },
            {
              n: "04",
              t: "A reply to every review",
              b: "Short and specific for the good ones. Calm and factual for the critical ones. Future customers read replies, and how you handle a complaint in public is one of the most persuasive things on your profile.",
            },
          ].map((x) => (
            <div key={x.n} className="grid gap-3 rounded-2xl border border-tf-border bg-white p-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5">
              <p className="font-tf-mono text-sm font-semibold text-tf-brown">{x.n}</p>
              <div>
                <h3 className="font-tf-display text-lg font-bold text-tf-ink">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tf-ink-soft">{x.b}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-tf-ink-soft">
          We set this up with you, write the message templates around how your shop actually runs, put the
          review link where it needs to be, and check the profile each month to see whether it is still
          happening. The asking itself has to be you — it works because it is you.
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section width="narrow" className="py-12" labelledBy="never">
        <SectionHeading
          eyebrow="What we never do"
          id="never"
          title="Three shortcuts that put your profile at risk"
          intro="These get sold as review management. They are the reason some businesses lose their reviews, or their listing."
        />
        <div className="mt-7 rounded-2xl border border-tf-warn/30 bg-tf-warn-wash p-6">
          <Checklist
            tone="dont"
            items={[
              {
                title: "Filtering who gets asked",
                body: "Surveying customers first and only sending the review link to the happy ones — “review gating”. It is against Google's policies, platforms have removed reviews over it, and it is the single most common thing sold as a feature.",
              },
              {
                title: "Incentives of any kind",
                body: "A discount, a free nail trim, a prize draw entry. Offering anything of value for a review breaks the rules regardless of whether the review itself is honest.",
              },
              {
                title: "Writing or buying reviews",
                body: "Including asking staff, family or friends who were never customers. It is fraud, it is detectable, and one removed batch can take the genuine reviews with it.",
              },
            ]}
          />
        </div>
        <div className="tf-prose mt-6">
          <p>
            We also do not add review or rating structured data to your website to produce stars in search
            results. Google restricts self-serving review markup, and the gain is cosmetic. Real reviews go on
            your{" "}
            <Link href={PATHS.gbp} className="font-medium text-tf-brown-dark underline underline-offset-4">
              Google Business Profile
            </Link>
            , and get quoted on your site as visible content with a link to where they came from.
          </p>
        </div>
      </Section>

      <Section width="narrow" className="py-12" labelledBy="reviews-offer">
        <SectionHeading
          eyebrow="What it costs"
          id="reviews-offer"
          title="Part of the same $297"
          intro="No per-review fee, no separate reputation tool, no software subscription bolted on top."
        />
        <PricingCard location="reviews" className="mt-8" />
      </Section>

      <Section width="narrow" className="py-12">
        <FaqBlock items={faqItems} eyebrow="Reviews FAQ" title="Common questions" headingId="reviews-faq" />
      </Section>

      <Section className="py-12">
        <RelatedLinks
          items={[
            {
              href: PATHS.gbp,
              label: "Google Business Profile for dog groomers",
              description: "Where your reviews live, and the rest of what that profile needs.",
            },
            {
              href: PATHS.leadGeneration,
              label: "Dog grooming lead generation",
              description: "How reviews fit into the path from a search to a booked appointment.",
            },
            {
              href: PATHS.marketing,
              label: "Dog groomer marketing",
              description: "The whole picture, and where reviews sit in the order of work.",
            },
            {
              href: PATHS.caseStudies,
              label: "Grooming builds, broken down",
              description: "How the review system is set up alongside the site and profile.",
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
