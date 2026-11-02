import Link from "next/link";
import { bookingChecklist, business, PATHS, SITE_URL, vanFeatures } from "@/lib/site-data";
import { withTag } from "@/lib/photos";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton, PhoneLink } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceGrid } from "@/components/ServiceGrid";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Pic } from "@/components/Pic";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon, PinIcon } from "@/components/icons";

const PAGE_URL = `${SITE_URL}${PATHS.mobileGrooming}`;
const DESCRIPTION =
  "Mobile dog and cat grooming services in San Francisco and the Peninsula: full grooms, cat grooming, de-shedding, detangling and nail trims at your door.";

export const metadata = pageMetadata({
  title: "Mobile Pet Grooming Services, SF Peninsula | Sky Pet",
  description: DESCRIPTION,
  path: PATHS.mobileGrooming,
});

export default function MobileGroomingPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Services", href: PATHS.mobileGrooming }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: PAGE_URL },
        ])}
      />
      <JsonLd data={serviceSchema({ pageUrl: PAGE_URL, name: "Mobile pet grooming", description: DESCRIPTION })} />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 md:grid-cols-2">
        <div>
          <Eyebrow>Mobile Pet Grooming</Eyebrow>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Mobile Dog &amp; Cat Grooming Services
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Sky Pet Grooming brings a fully equipped grooming van to your home in {business.area}. Your pet is groomed right
            outside your door and back with you as soon as they are done.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookButton location="service_top" />
            <CallButton location="service_top" />
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <Pic slug="golden-retriever-standing-in-van" hero fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <Eyebrow>What We Offer</Eyebrow>
            <h2 className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl">Our Grooming Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-ink-soft">Pick any of these on our booking page.</p>
          </div>
          <div className="mt-10">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2">
        <div>
          <Eyebrow>The Van</Eyebrow>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">A Salon on Wheels</h2>
          <ul className="mt-5 space-y-3">
            {vanFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-ink-soft">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-3xl font-extrabold text-ink">Where We Groom</h2>
          <p className="mt-4 flex items-start gap-2 leading-relaxed text-ink-soft">
            <PinIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <span>
              San Francisco and the Peninsula. Not sure we reach your street? Call{" "}
              <PhoneLink location="service_area" className="inline-flex min-h-6 items-center" /> or ask when you book.
            </span>
          </p>
        </div>
        <div>
          <Eyebrow>Before You Book</Eyebrow>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">What to Have Ready</h2>
          <p className="mt-4 text-ink-soft">The more we know, the better we can plan your pet&rsquo;s groom:</p>
          <ul className="mt-3 space-y-3">
            {bookingChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-soft">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <ProcessSteps />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <Eyebrow>Cats Too</Eyebrow>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl">Mobile Cat Grooming</h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink-soft">
            Cats get the same door-to-door service: no carrier, no car ride, no strange salon.
          </p>
        </div>
        <PhotoGrid items={withTag("cat")} className="mx-auto mt-8 max-w-2xl !columns-2" />
        <p className="mt-6 text-center">
          <Link href={PATHS.gallery} className="inline-flex min-h-[44px] items-center font-bold text-brand hover:underline">
            See every dog and cat in our gallery →
          </Link>
        </p>
      </section>

      <BottomCta title="Book a groom at your door" location="service_bottom" />
    </div>
  );
}
