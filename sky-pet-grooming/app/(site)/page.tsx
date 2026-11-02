import Link from "next/link";
import { faqs, mobileBenefits, PATHS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, LinkButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { FaqBlock } from "@/components/FaqBlock";
import { Eyebrow } from "@/components/Eyebrow";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Pillars } from "@/components/Pillars";
import { SkyScene } from "@/components/SkyScene";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Luxury Mobile Pet Grooming in California | Sky Pet Grooming",
  description:
    "Sky Pet Grooming brings luxury mobile pet grooming to your doorstep across California. Licensed, insured and eco-friendly. Request an appointment online.",
  path: PATHS.home,
});

// FAQ: what it is, areas served, cost.
const homeFaqs = [faqs[0], faqs[2], faqs[5]];

export default function HomePage() {
  return (
    <div>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: `${SITE_URL}/` }])} />
      <section className="bg-gradient-to-b from-sky-deep to-sky">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <Eyebrow>Mobile grooming across California</Eyebrow>
            <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              Luxury Pet Grooming, Delivered to Your Doorstep
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              No car ride. No waiting room.
              <br />
              Sky Pet Grooming comes to you, anywhere in California.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton location="hero" />
              <LinkButton href={`${PATHS.home}#how-it-works`} label="How it works" />
            </div>
            <TrustBar className="mt-6" />
          </div>
          <SkyScene className="w-full rounded-[28px] shadow-sm" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Pillars />
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Mobile Grooming</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">Why Groom at Your Doorstep?</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A salon visit means a drive there, a drop-off window, a wait and a drive back. With Sky Pet Grooming, the groom
              comes to your door instead.
            </p>
            <Link href={PATHS.mobileGrooming} className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
              More about mobile grooming →
            </Link>
          </div>
          <ul className="space-y-3">
            {mobileBenefits.map((b) => (
              <li key={b.title} className="flex items-start gap-3 rounded-2xl border border-border bg-sky p-5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{b.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-soft">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <ProcessSteps headingId="how-it-works" />
        <div className="mt-8 flex justify-center">
          <BookButton location="home_process" />
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <FaqBlock items={homeFaqs} title="Common Questions" />
          <div className="mt-8 text-center">
            <Link href={PATHS.faq} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
              More questions →
            </Link>
          </div>
        </div>
      </section>

      <BottomCta title="Ready for a groom at your door?" location="home_bottom" />
    </div>
  );
}
