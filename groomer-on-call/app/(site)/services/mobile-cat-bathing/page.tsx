import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageShell, Prose, CheckList } from "@/components/ServicePageShell";
import { Section, SectionHeading } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { serviceFaqs } from "@/lib/faq-data";
import { business, market, servicePath, blogPostPath } from "@/lib/site-data";

// -----------------------------------------------------------------------------
// ACCURACY NOTE — read before editing this page.
//
// The only cat services verified on the Google Business Profile are CAT
// BATHING and CAT EAR CLEANING. That is why this page is titled "Cat Bathing
// & Ear Cleaning" and not "Mobile Cat Grooming", despite the latter being the
// stronger head term: a page titled "cat grooming" sets an expectation of
// haircuts, shave-downs, de-matting and nail trims, none of which are
// verified as offered.
//
// The page still earns the long-tail "mobile cat grooming" traffic honestly,
// by answering the question those searchers are actually asking — "is this
// the same as full cat grooming?" — in a section on the page. Do not retitle
// this page or widen the claims unless the client confirms the wider scope.
// -----------------------------------------------------------------------------

export const metadata: Metadata = pageMetadata({
  title: `Mobile Cat Bathing in ${market.cityState}`,
  description:
    `Cat bathing and ear cleaning at your home in the ${market.cityState} area — no carrier, no car ride, no waiting room. ` +
    `Call ${business.phoneDisplay} to book.`,
  path: servicePath("mobile-cat-bathing"),
});

export default function MobileCatBathingPage() {
  return (
    <ServicePageShell
      slug="mobile-cat-bathing"
      eyebrow="Cat Bathing & Ear Cleaning · At Your Home"
      h1={`Mobile Cat Bathing & Ear Cleaning in ${market.cityState}`}
      intro="Cat bathing and ear cleaning, done at your home. No carrier, no car journey, and no waiting room full of dogs — which for a cat is usually the hardest part of the whole experience."
      heroBullets={[
        "Cat bathing",
        "Cat ear cleaning",
        "At your home — no carrier or car ride",
        "We'll say honestly if your cat isn't a candidate",
      ]}
      art="cat"
      schemaDescription={`Mobile cat bathing and cat ear cleaning carried out at the customer's home in the ${market.cityState} area.`}
      faqs={serviceFaqs["mobile-cat-bathing"]}
    >
      <Section tone="white">
        <Prose title="Is This The Same As Full Cat Grooming?">
          <p>
            No — and it&rsquo;s worth being direct about that rather than letting you find out when we arrive.
          </p>
          <p>
            Groomer On Call offers two cat services: <strong className="text-goc-ink">bathing</strong> and{" "}
            <strong className="text-goc-ink">ear cleaning</strong>. Cat haircuts, lion cuts and shave-downs,
            de-matting, and cat nail trims are not currently part of what&rsquo;s offered. If that&rsquo;s what your
            cat needs, you want a groomer who specialises in it, and you should book with one.
          </p>
          <p>
            If what your cat needs is to be properly washed and have their ears cleaned — which covers a great many
            cats — that&rsquo;s exactly what this is.
          </p>
        </Prose>
        <CheckList items={["Cat bathing", "Cat ear cleaning"]} />
      </Section>

      <Section tone="deep">
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose title="When A Cat Actually Benefits From A Bath">
            <p>
              Cats are famously self-cleaning, and for a healthy young short-haired cat that&rsquo;s usually the end of
              the story. But self-grooming has limits, and there are situations where a bath genuinely helps rather
              than just being an ordeal.
            </p>
            <p>
              Long-haired cats whose coat has started clumping faster than they can keep up with. Older cats, or cats
              carrying extra weight, who can no longer physically reach parts of themselves — a greasy patch along the
              back is the classic sign. Cats who have got into something they shouldn&rsquo;t be licking off. Heavy
              shedding periods. Households where less loose hair and dander around the place matters.
            </p>
            <p>
              <Link href={blogPostPath("bathing-a-cat-what-to-expect")}>
                Bathing a cat: what to expect
              </Link>{" "}
              goes through this in more detail.
            </p>
          </Prose>
          <Prose title="When It Isn't Worth It">
            <p>
              A healthy, young, short-haired cat who is keeping themselves perfectly clean doesn&rsquo;t need routine
              bathing, and there&rsquo;s no benefit in putting them through it on a schedule.
            </p>
            <p>
              And if a cat&rsquo;s coat has changed — gone greasy, dull or patchy — without an obvious cause, that is a
              conversation with a vet before it is a conversation with a groomer. A coat change can be the first
              visible sign of something else, and no grooming service should be the thing standing between your cat and
              that appointment.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="On The Day"
          title="How A Cat Bath Is Handled"
          intro="Calm, quick and quiet is the whole approach."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Methodical, not rushed",
              body: "Wet down, wash, thorough rinse, and a careful dry — a cat left damp gets cold considerably faster than a dog does.",
            },
            {
              title: "Ears at the same time",
              body: "Ears are checked and cleaned while your cat is already being handled, rather than making it a second event.",
            },
            {
              title: "We stop if we should",
              body: "Not every cat is a candidate on the day. A cat who is genuinely distressed rather than merely unimpressed is one where stopping is the right call, and you'll be told so.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border-2 border-goc-border bg-goc-cream p-6">
              <h3 className="font-goc-display text-lg font-extrabold text-goc-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-goc-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <Prose title="Helping It Go Well">
          <p className="mt-4">
            Keep your cat indoors and easy to find before the appointment — a cat who has to be extracted from under a
            bed starts the appointment badly. Mention anything you already know: a sore spot, a history of not
            tolerating handling, a recent illness. Tell us if the coat is matted, because matting on a cat sits tight
            to very thin skin and is handled differently from matting on a dog. And have a warm, quiet room they can
            settle in afterwards.
          </p>
          <p>
            Got a dog too? <Link href={servicePath("mobile-dog-grooming")}>Mobile dog grooming</Link> can be booked at
            the same address — mention it when you call so enough time is set aside.
          </p>
        </Prose>
      </Section>
    </ServicePageShell>
  );
}
