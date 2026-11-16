import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { FaqBlock } from "@/components/FaqBlock";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, servicePath, areaPath, photos, PATHS, SITE_URL } from "@/lib/site-data";

const url = `${SITE_URL}${servicePath("dog-deshedding")}`;
const description =
  "Dog deshedding treatment in Eatontown, NJ — a deshedding bath and thorough brush-out to clear loose undercoat from heavy shedders, at Flo's Happy Clipper on Main St.";

export const metadata: Metadata = pageMetadata({
  title: "Dog Deshedding Treatment in Eatontown, NJ",
  description,
  path: servicePath("dog-deshedding"),
});

const faqs = [
  {
    question: "Which dogs benefit most from deshedding?",
    answer:
      "Double-coated breeds, like huskies, shepherds, golden retrievers, labs, corgis, and chow chows, carry a dense undercoat that sheds heavily, especially when the seasons change.",
  },
  {
    question: "Will deshedding stop my dog from shedding?",
    answer:
      "No. Shedding is natural and healthy. Deshedding removes the loose undercoat that's already coming out, so less of it ends up on your floors and furniture in the weeks after.",
  },
  {
    question: "Should I shave my double-coated dog instead?",
    answer:
      "Shaving a double coat is generally not recommended, because the coat helps regulate temperature and may not grow back the same way. Deshedding thins out the loose undercoat while leaving the coat intact. Call " +
      business.phoneDisplay +
      " if you're unsure what your dog needs.",
  },
];

export default function DogDesheddingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ pageUrl: url, name: "Dog Deshedding Treatment", description })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "Services", url: `${SITE_URL}${PATHS.services}` },
          { name: "Dog Deshedding Treatment", url },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.services },
          { name: "Dog Deshedding Treatment", href: servicePath("dog-deshedding") },
        ]}
      />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Coat Care</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            Dog Deshedding Treatment in Eatontown, NJ
          </h1>
          <p className="mt-4 text-lg text-fh-ink-soft">
            If your dog leaves a trail of fur on every couch and car seat, a deshedding treatment helps. We bathe and
            thoroughly brush out the loose undercoat at our Main St salon, so it comes out here instead of all over
            your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="service_deshedding" variant="primary" />
            <SecondaryLinkButton location="service_deshedding" variant="secondary" label="Contact Us" href={PATHS.contact} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.chowChowFluffy.alt} src={photos.chowChowFluffy.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="fh-paw-pattern bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">What to Expect</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "A bath to loosen dead undercoat",
              "A thorough brush-out to remove what's ready to shed",
              "A careful dry, which helps release even more loose fur",
              "Can be added to a bath or full-groom appointment",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-fh-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-fh-pink-dark" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">When to Book</h2>
        <p className="mt-4 text-fh-ink-soft">
          Most double-coated dogs &quot;blow&quot; their coat in spring and fall, when the undercoat comes out in
          clumps. Booking a deshedding treatment at the start of those seasons, then keeping up with regular{" "}
          <Link href={servicePath("dog-bathing")} className="font-semibold text-fh-pink-dark hover:underline">
            baths and brush-outs
          </Link>
          , keeps shedding manageable year-round.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Related Services & Areas</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={servicePath("dog-bathing")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Dog Bathing
          </Link>
          <Link href={servicePath("dog-grooming")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Full Dog Grooming
          </Link>
          <Link href={areaPath("tinton-falls-nj")} className="rounded-full border border-fh-border bg-white px-4 py-2 text-sm font-medium text-fh-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-fh-pink-dark hover:text-fh-pink-dark">
            Serving Tinton Falls, NJ
          </Link>
        </div>
      </section>

      <RelatedPosts service="dog-deshedding" />

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FaqBlock items={faqs} />
      </section>

      <section className="relative overflow-hidden bg-fh-ink text-white">
        <div className="fh-blob -right-16 top-0 h-56 w-56 bg-fh-pink/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Book a Deshedding Treatment</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule.</p>
          <CallButton location="service_deshedding_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
