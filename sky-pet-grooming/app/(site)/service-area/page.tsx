import Link from "next/link";
import { business, PATHS, serviceAreas, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton, PhoneLink } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { BottomCta } from "@/components/BottomCta";
import { PinIcon } from "@/components/icons";

export const metadata = pageMetadata({
  title: "Service Areas | Sky Pet Grooming Mobile Grooming",
  description:
    "Sky Pet Grooming's van comes to San Bruno, South San Francisco, Millbrae, Burlingame, Hillsborough, San Mateo, Foster City, Pacifica, Daly City and more.",
  path: PATHS.serviceArea,
});

export default function ServiceAreaPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Service Areas", href: PATHS.serviceArea }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Service Areas", url: `${SITE_URL}${PATHS.serviceArea}` },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-10 text-center">
        <Eyebrow>Service Areas</Eyebrow>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">Where Our Grooming Van Goes</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          We are based in San Bruno and groom dogs and cats at homes across the northern Peninsula and in San Francisco&rsquo;s
          southern and western neighborhoods.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <BookButton location="area_hub_top" />
          <CallButton location="area_hub_top" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a) => (
            <li key={a.slug}>
              <Link
                href={a.slug}
                className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:border-accent hover:shadow-md"
              >
                <span className="flex items-center gap-2 font-display text-xl font-extrabold text-ink group-hover:text-accent-dark">
                  <PinIcon className="h-5 w-5 text-accent" />
                  {a.city}
                </span>
                <span className="mt-2 text-sm text-ink-soft">{a.intro}</span>
                <span className="mt-auto pt-4 text-sm font-bold text-brand">Mobile grooming in {a.city} →</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-ink-soft">
          Not sure we reach your street? Call <PhoneLink location="area_hub" className="inline-flex min-h-6 items-center" /> or
          ask when you book online.
        </p>
      </section>

      <BottomCta title={`Mobile grooming in ${business.area}`} location="area_hub_bottom" />
    </div>
  );
}
