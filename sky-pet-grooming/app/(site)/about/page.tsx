import Link from "next/link";
import { business, PATHS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { Pillars } from "@/components/Pillars";
import { BottomCta } from "@/components/BottomCta";

export const metadata = pageMetadata({
  title: "About Sky Pet Grooming | Mobile Grooming, California",
  description:
    "Sky Pet Grooming is a licensed, insured and eco-friendly luxury mobile pet grooming service, bringing grooming to doorsteps across California.",
  path: PATHS.about,
});

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "About", href: PATHS.about }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "About", url: `${SITE_URL}${PATHS.about}` },
        ])}
      />

      <section className="mx-auto max-w-3xl px-4 py-10">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">About {business.name}</h1>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            {business.name} is a luxury mobile pet grooming service. Instead of you bringing your pet to a salon, we bring the
            groom to your doorstep, anywhere in {business.state}.
          </p>
          <p>We are licensed and insured, and we run an eco-friendly grooming service.</p>
          <p>
            Booking starts with a short request.{" "}
            <Link href={PATHS.book} className="font-semibold text-brand hover:underline">
              Tell us where you are and about your pet
            </Link>
            , and we will get back to you to set a time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <Pillars eyebrow="What We Stand For" title="Three Things We Promise" />
      </section>

      <BottomCta title="Ready when you are" location="about_bottom" />
    </div>
  );
}
