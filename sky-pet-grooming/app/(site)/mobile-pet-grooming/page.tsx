import Link from "next/link";
import { mobileBenefits, PATHS, requestChecklist, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { BookButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Pillars } from "@/components/Pillars";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon, PinIcon } from "@/components/icons";

const PAGE_URL = `${SITE_URL}${PATHS.mobileGrooming}`;
const DESCRIPTION =
  "Luxury mobile pet grooming at your doorstep across California. Licensed, insured and eco-friendly. See how booking works and request an appointment.";

export const metadata = pageMetadata({
  title: "Mobile Pet Grooming Across California | Sky Pet Grooming",
  description: DESCRIPTION,
  path: PATHS.mobileGrooming,
});

export default function MobileGroomingPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Mobile Pet Grooming", href: PATHS.mobileGrooming }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Mobile Pet Grooming", url: PAGE_URL },
        ])}
      />
      <JsonLd data={serviceSchema({ pageUrl: PAGE_URL, name: "Mobile pet grooming", description: DESCRIPTION })} />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="max-w-3xl">
          <Eyebrow>Mobile Pet Grooming</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Mobile Pet Grooming Across California
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Sky Pet Grooming is luxury pet grooming that comes to you. We bring the groom to your doorstep, so your pet never
            has to leave home for it.
          </p>
          <div className="mt-6">
            <BookButton location="service_top" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="text-center">
            <Eyebrow>At Your Door</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">What a Doorstep Groom Saves You</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {mobileBenefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-sky p-6">
                <h3 className="font-display text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Pillars eyebrow="Our Standards" title="Licensed, Insured, Eco-Friendly" />
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <Eyebrow>Service Area</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">Where We Groom</h2>
            <p className="mt-4 flex items-start gap-2 leading-relaxed text-ink-soft">
              <PinIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
              We serve customers across California. Put your city or ZIP code in your request and we will confirm we can reach
              you.
            </p>
          </div>
          <div>
            <Eyebrow>Your Request</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">What to Tell Us</h2>
            <p className="mt-4 text-ink-soft">The more we know, the better we can plan your pet&rsquo;s groom and quote it:</p>
            <ul className="mt-3 space-y-2">
              {requestChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <ProcessSteps />
        <p className="mt-8 text-center text-ink-soft">
          Questions first?{" "}
          <Link href={PATHS.faq} className="inline-flex min-h-6 items-center font-semibold text-brand hover:underline">
            Read the FAQ
          </Link>
        </p>
      </section>

      <BottomCta title="Book a groom at your doorstep" location="service_bottom" />
    </div>
  );
}
