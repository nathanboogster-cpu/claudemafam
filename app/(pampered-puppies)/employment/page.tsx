import type { Metadata } from "next";
import { business, PATHS, SITE_URL } from "@/lib/site-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const pageUrl = `${SITE_URL}${PATHS.employment}`;

export const metadata: Metadata = {
  title: "Employment | Pampered Puppies, Victorville CA",
  description: "Pampered Puppies in Victorville, CA is hiring an experienced groomer and bather. Bilingual a plus.",
  alternates: { canonical: PATHS.employment },
};

export default function EmploymentPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Employment", href: PATHS.employment }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Employment", url: pageUrl },
        ])}
      />

      <section className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">We&rsquo;re Hiring</h1>
        <p className="mt-4 text-lg font-semibold text-ink">
          Help Wanted: Experienced Groomer and Bather
        </p>
        <p className="mt-2 text-ink-soft">Bilingual a plus.</p>
        <p className="mt-6 text-ink-soft">
          Interested candidates can reach us by phone or email:
        </p>
        <div className="mt-4 space-y-1">
          <p>
            <a href={business.phoneHref} className="font-semibold text-terracotta-dark hover:underline">
              {business.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={`mailto:${business.email}`} className="font-semibold text-terracotta-dark hover:underline break-all">
              {business.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
