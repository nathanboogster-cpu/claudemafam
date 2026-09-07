import { business, hoursSchema, serviceAreas, SITE_URL } from "./site-data";

// Every town with its own service-area page — kept as real Schema.org
// City entries so structured data matches the pages actually on the site.
const areaServedSchema = serviceAreas.map((a) => ({
  "@type": "City" as const,
  name: `${a.city}, ${a.state}`,
}));

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
// No current, confirmed star rating or review count was supplied for this
// build (public estimates conflict and go stale), so nothing is injected
// as review/rating structured data. Live reviews are linked out to Google
// as visible page content only — see the Reviews page.

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

export function localBusinessSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    url: pageUrl,
    telephone: business.phoneDisplay,
    address: addressSchema(),
    image: `${SITE_URL}${business.logo}`,
    logo: `${SITE_URL}${business.logo}`,
    description:
      "Full-service dog and cat grooming salon in Funkstown, MD, serving pet owners throughout the Hagerstown and Halfway area.",
    openingHoursSpecification: hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: areaServedSchema,
    sameAs: [business.facebookUrl],
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
    areaServed: areaServedSchema,
    provider: {
      "@type": "PetGroomer",
      name: business.name,
      telephone: business.phoneDisplay,
      address: addressSchema(),
    },
  };
}
