import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { StatBand } from "@/components/StatBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, differentiators, photos, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "About Flo's Happy Clipper | Eatontown Pet Groomer",
  description:
    "Flo's Happy Clipper is a long-established, independently owned dog grooming salon on Main St in Eatontown, NJ, serving Monmouth County pet owners.",
  path: PATHS.about,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "About", url: `${SITE_URL}${PATHS.about}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "About", href: PATHS.about }]} />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>About Flo&apos;s Happy Clipper</Eyebrow>
          <h1 className="mt-1 font-fh-display text-4xl font-bold text-fh-ink sm:text-5xl">
            A Long-Established Eatontown Grooming Salon
          </h1>
          <p className="mt-4 text-lg text-fh-ink-soft">
            Flo&apos;s Happy Clipper is an independently owned dog grooming salon based at {business.addressFull}
            , right on Main St. We&apos;ve been grooming dogs for the local community for years — not a
            national chain, and not a new arrival.
          </p>
          <p className="mt-4 text-fh-ink-soft">
            Our Main St location puts us right in the heart of Eatontown, which makes us a convenient,
            personal alternative to big-box grooming chains for pet owners throughout Eatontown and the
            surrounding Monmouth County communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="about" variant="primary" />
            <SecondaryLinkButton location="about" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.salonStorefront.caption} aspect="portrait" className="w-full" priority />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <StatBand />
      </section>

      <section className="bg-fh-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">
            What Makes Flo&apos;s Happy Clipper Different
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-2xl border border-fh-border bg-white p-6">
                <p className="font-semibold text-fh-ink">{d.title}</p>
                <p className="mt-1 text-sm text-fh-ink-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-fh-display text-2xl font-bold text-fh-ink sm:text-3xl">Our Approach to Grooming</h2>
        <p className="mt-4 max-w-3xl text-fh-ink-soft">
          Every dog gets individual, unhurried attention — not a rushed assembly line. Local pet owners
          bringing in large-breed and double-coated dogs, including German Shepherds and Portuguese Water
          Dogs, regularly mention how comfortable their pets are during and after grooming. We&apos;re just
          as comfortable with nervous dogs and first-time grooming visits.
        </p>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Full-service dog grooming",
            "Dog bathing & brushing",
            "Comfortable with large & double-coated breeds",
            "Patient with nervous & first-time dogs",
            "Personalized, one-on-one attention",
          ].map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-fh-ink-soft">
              <CheckIcon className="h-4 w-4 shrink-0 text-fh-amber-dark" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-fh-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-fh-display text-3xl font-bold">Ready to Meet Flo&apos;s Happy Clipper?</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule your dog&apos;s grooming appointment.</p>
          <CallButton location="about_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
