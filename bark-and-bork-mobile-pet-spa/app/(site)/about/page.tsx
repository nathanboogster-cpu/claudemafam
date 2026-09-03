import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { StatBand } from "@/components/StatBand";
import { LovedByDogsBadge } from "@/components/LovedByDogsBadge";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { CheckIcon } from "@/components/icons";
import { business, differentiators, team, photos, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  title: "About Bark and Bork Mobile Pet Spa",
  description:
    "Bark and Bork Mobile Pet Spa is a mobile dog grooming business based in Compton, CA, serving pet owners throughout greater Los Angeles. Meet the team and see how mobile grooming works.",
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
          <Eyebrow>About Bark and Bork</Eyebrow>
          <h1 className="mt-1 font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">
            Mobile Dog Grooming, Based in Compton
          </h1>
          <p className="mt-4 text-lg text-bb-ink-soft">
            Bark and Bork Mobile Pet Spa is a mobile dog grooming business based in {business.homeBase}, bringing
            professional grooming directly to pet owners throughout the {business.broadMarket}.
          </p>
          <p className="mt-4 text-bb-ink-soft">
            We&apos;re not a walk-in salon — every appointment happens at your own home. That means no car ride, no
            waiting room, and a more personal, individual appointment experience for you and your dog: a
            convenient alternative to the traditional salon trip for busy Los Angeles pet owners.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton location="about" variant="primary" />
            <SecondaryLinkButton location="about" variant="secondary" label="View Services" href={PATHS.services} />
          </div>
          <LovedByDogsBadge className="mt-6" />
        </div>
        <PhotoPlaceholder
          caption={photos.groomScissorFinishing.alt}
          src={photos.groomScissorFinishing.src}
          aspect="portrait"
          className="w-full"
          priority
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <StatBand />
      </section>

      <section className="bg-bb-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">What Makes Bark and Bork Different</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-2xl border border-bb-border bg-white p-6">
                <p className="font-semibold text-bb-ink">{d.title}</p>
                <p className="mt-1 text-sm text-bb-ink-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">Meet the Team</h2>
        <p className="mt-3 max-w-2xl text-bb-ink-soft">
          Book your appointment with any of our bookable grooming professionals through our online scheduling
          system.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-bb-border bg-white p-6 text-center">
              <PhotoPlaceholder caption={`${member.name}, Bark and Bork grooming team`} aspect="square" className="mx-auto max-w-[160px]" />
              <p className="mt-4 font-bb-display text-lg font-bold text-bb-ink">{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">What We Offer</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Mobile dog grooming, small to extra-large",
            "Full Groom with complete haircut",
            "Bath & Tidy maintenance grooming",
            "Deshedding & dematting",
            "Flea & tick treatment, teeth brushing, anal gland expression",
            "Online booking, open 7 days a week",
          ].map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-bb-ink-soft">
              <CheckIcon className="h-4 w-4 shrink-0 text-bb-coral-dark" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-bb-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-bb-display text-3xl font-bold">Ready to Book Bark and Bork?</h2>
          <p className="text-white/80">Choose your service and schedule your mobile grooming appointment online.</p>
          <BookButton location="about_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
