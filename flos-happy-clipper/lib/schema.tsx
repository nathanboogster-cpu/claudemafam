import { business, hoursSchema, serviceAreas, SITE_URL } from "./site-data";

function servedCities() {
  return serviceAreas.map((a) => ({ "@type": "City", name: `${a.city}, ${a.state}` }));
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(qa: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

// NOTE: No AggregateRating/Review schema is added anywhere on this site.
// Public review counts/ratings for Flo's Happy Clipper conflict across
// directories (Yelp, Scrubby, etc.) and go stale quickly, so nothing is
// injected as review/rating structured data. Live reviews are linked out to
// Google as visible page content only — see the Reviews page.

function addressSchema() {
  return {
    "@type": "PostalAddress",
    streetAddress: business.addressLine1,
    addressLocality: business.addressCity,
    addressRegion: business.addressState,
    postalCode: business.addressZip,
    addressCountry: "US",
  };
}

// Schema.org/Google's structured-data guidelines recommend E.164 for
// `telephone` (phoneHref is already "tel:+17325448186") rather than the
// display-formatted "(732) 544-8186" used in visible page copy.
const telephoneSchema = business.phoneHref.replace("tel:", "");

export function localBusinessSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    url: pageUrl,
    telephone: telephoneSchema,
    image: `${SITE_URL}${business.logo}`,
    address: addressSchema(),
    hasMap: business.mapsUrl,
    description:
      "Established dog grooming salon on Main St in Eatontown, NJ, serving pet owners throughout Monmouth County.",
    openingHoursSpecification: hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [{ "@type": "AdministrativeArea", name: "Monmouth County, New Jersey" }, ...servedCities()],
  };
}

export function serviceSchema(opts: { pageUrl: string; name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.pageUrl,
    areaServed: [{ "@type": "AdministrativeArea", name: "Monmouth County, New Jersey" }, ...servedCities()],
    // Carries the same @id as localBusinessSchema (emitted on every page
    // via the site layout) so Google resolves this as the same business
    // entity rather than a distinct one per service page — plus enough
    // inline fields that the reference is still a complete, valid object
    // on its own for parsers that don't merge JSON-LD blocks by @id.
    provider: {
      "@type": "PetGroomer",
      "@id": `${SITE_URL}/#business`,
      name: business.name,
      telephone: telephoneSchema,
      address: addressSchema(),
    },
  };
}
