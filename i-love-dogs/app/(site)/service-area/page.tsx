import { PATHS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { Eyebrow } from "@/components/Eyebrow";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Dog Groomer Serving the Eastern Main Line | Bryn Mawr, PA",
  description:
    "I Love Dogs serves Bryn Mawr, Gladwyne, Haverford, Ardmore, Havertown and the greater Eastern Main Line. Call 610-525-7387.",
  path: PATHS.serviceArea,
});

const towns = ["Bryn Mawr", "Gladwyne", "Haverford", "Ardmore", "Havertown", "The greater Eastern Main Line"];

export default function ServiceAreaPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Service Area", href: PATHS.serviceArea }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Service Area", url: `${SITE_URL}${PATHS.serviceArea}` },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Eyebrow>Service Area</Eyebrow>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Serving the Eastern Main Line</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Our salon is on County Line Road in Bryn Mawr.
          <br />
          We serve dog owners across the Eastern Main Line.
        </p>
        <div className="mt-6">
          <CallButton location="service_area_top" />
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-ink">Towns We Serve</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {towns.map((t) => (
              <li key={t} className="flex items-center gap-2 text-ink-soft">
                <CheckIcon className="h-4 w-4 shrink-0 text-brand" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-ink-soft">
            Not sure whether you&rsquo;re in range for pickup and delivery? Call 610-525-7387 with your address.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <ServiceAreaSection />
      </section>

      <BottomCta title="Find the salon" location="service_area_bottom" />
    </div>
  );
}
