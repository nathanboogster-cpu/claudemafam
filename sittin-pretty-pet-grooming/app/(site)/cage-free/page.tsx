import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FaqBlock } from "@/components/FaqBlock";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${PATHS.cageFree}`;
const description =
  "Sittin' Pretty Pet Grooming offers cage-free dog and cat grooming in Funkstown, MD — pets aren't kenneled between steps, for a calmer, more comfortable visit.";

export const metadata: Metadata = pageMetadata({
  title: "Cage-Free Dog & Cat Grooming in Funkstown, MD",
  description,
  path: PATHS.cageFree,
});

const faqs = [
  {
    question: "What does \"cage-free\" grooming mean?",
    answer:
      "It means your pet isn't kenneled or caged between steps of their groom. They stay out with our groomers throughout the visit, which helps keep the experience calmer and less stressful.",
  },
  {
    question: "Is cage-free grooming better for nervous or anxious pets?",
    answer:
      "Many pet owners find it makes a real difference — without long stretches spent caged and waiting, nervous pets tend to stay calmer during their visit.",
  },
  {
    question: "Does cage-free grooming cost more?",
    answer: `Call ${business.phoneDisplay} to talk through your pet's grooming needs and we can answer any pricing questions.`,
  },
  {
    question: "Is cage-free grooming available for both dogs and cats?",
    answer: "Yes — our cage-free approach applies to both our dog grooming and cat grooming services.",
  },
];

export default function CageFreePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Cage-Free Grooming", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Cage-Free Grooming", href: PATHS.cageFree }]} />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Cage-Free Grooming</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            Cage-Free Dog & Cat Grooming in Funkstown, MD
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            At Sittin&apos; Pretty, pets aren&apos;t kenneled between steps of their groom. Staying out
            with our groomers throughout the visit means a calmer, more comfortable experience from
            start to finish — for dogs and cats alike.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="cage_free" variant="primary" />
            <SecondaryLinkButton location="cage_free" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.grayWhiteShihTzu.alt} src={photos.grayWhiteShihTzu.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">Why Cage-Free Matters</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Pets stay out with our groomers instead of being kenneled between steps",
              "A calmer, lower-stress visit for nervous or anxious pets",
              "The same personal, one-on-one attention Sittin' Pretty has offered for 40+ years",
              "Available for both dog grooming and cat grooming",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-sp-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-sp-purple-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="bg-sp-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-sp-display text-3xl font-bold">Experience Cage-Free Grooming</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule your pet&apos;s appointment.</p>
          <CallButton location="cage_free_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
