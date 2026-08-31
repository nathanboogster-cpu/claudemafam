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
  title: "About Us",
  description:
    "Sittin' Pretty Pet Grooming is an established local pet grooming salon in Funkstown, MD, serving Hagerstown and Halfway-area pet owners for decades.",
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
          <Eyebrow>About Sittin&apos; Pretty</Eyebrow>
          <h1 className="mt-1 font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">
            A Local Grooming Shop Pet Owners Have Trusted for Decades
          </h1>
          <p className="mt-4 text-lg text-sp-ink-soft">
            Sittin&apos; Pretty Pet Grooming is a full-service pet grooming salon based at{" "}
            {business.addressFull}. We&apos;ve been grooming dogs and cats for the local community for
            decades — not a national chain, and not a new arrival.
          </p>
          <p className="mt-4 text-sp-ink-soft">
            Our Funkstown location sits just a few minutes from downtown Hagerstown, which makes us a
            convenient, personal alternative to the big-box grooming chains for pet owners throughout
            Hagerstown, Halfway, and the surrounding Washington County area.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="about" variant="primary" />
            <SecondaryLinkButton location="about" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.grayWhiteShihTzu.alt} src={photos.grayWhiteShihTzu.src} aspect="portrait" className="w-full" priority />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <StatBand />
      </section>

      <section className="bg-sp-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">
            What Makes Sittin&apos; Pretty Different
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-2xl border border-sp-border bg-white p-6">
                <p className="font-semibold text-sp-ink">{d.title}</p>
                <p className="mt-1 text-sm text-sp-ink-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">Our Services</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {["Full-service dog grooming", "Dog bathing & brushing", "Cat grooming", "Personalized, one-on-one attention"].map(
            (f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-sp-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-sp-purple-dark" />
                {f}
              </li>
            ),
          )}
        </ul>
      </section>

      <section className="bg-sp-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-sp-display text-3xl font-bold">Ready to Meet Sittin&apos; Pretty?</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule your pet&apos;s grooming appointment.</p>
          <CallButton location="about_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
