import { business, hoursSchema, SITE_URL } from "./site-data";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// NOTE: No AggregateRating/Review schema is added anywhere on this site —
// Google's structured-data guidelines restrict self-published third-party
// ratings. Real review presence is shown only as visible page content
// (see /reviews), linking out to the real Yelp listing, never injected as
// review/rating schema here.

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.addressLine1,
  addressLocality: business.addressCity,
  addressRegion: business.addressState,
  postalCode: business.addressZip,
  addressCountry: "US",
} as const;

// Schema.org has no single standard subtype covering daycare + boarding +
// grooming together (AnimalShelter, its closest LocalBusiness subtype, means
// something different — animal rescue/adoption — so it's deliberately not
// used here). Plain LocalBusiness plus explicit `services` service listings
// below describes the business accurately without an inaccurate subtype.
export function localBusinessSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    url: pageUrl,
    telephone: business.phoneDisplay,
    email: business.email,
    address: postalAddress,
    description:
      "Dog daycare, boarding, and full-service grooming in Marietta, GA, serving West Cobb and Cobb County — clean, safe, and fully supervised.",
    openingHoursSpecification: hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [business.yelpUrl],
    areaServed: [
      { "@type": "City", name: "Marietta, GA" },
      { "@type": "AdministrativeArea", name: "West Cobb" },
      { "@type": "AdministrativeArea", name: "Cobb County, GA" },
    ],
  };
}

export function serviceSchema(opts: {
  pageUrl: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.pageUrl,
    areaServed: [
      { "@type": "City", name: business.primaryLocation },
      { "@type": "AdministrativeArea", name: business.regionLabel },
    ],
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneDisplay,
      address: postalAddress,
    },
  };
}
