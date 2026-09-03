import { business, hoursSchema, cancellationPolicy, SITE_URL } from "./site-data";

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

// NOTE: No AggregateRating/Review schema is added anywhere on this site. No
// verified reviews were supplied for this build, so nothing is fabricated as
// review/rating structured data.

// Bark and Bork is a mobile / service-area business with no customer-facing
// storefront. Per Google's service-area-business guidance, the address
// below intentionally omits `streetAddress` and any map/geo pin — only the
// home city/region is stated, and `areaServed` carries the real service
// territory. Never add a fabricated street address here.
function serviceAreaAddress() {
  return {
    "@type": "PostalAddress",
    addressLocality: "Compton",
    addressRegion: "CA",
    addressCountry: "US",
  };
}

function areaServedList() {
  return [
    { "@type": "City", name: "Compton, CA" },
    { "@type": "City", name: "Los Angeles, CA" },
    { "@type": "AdministrativeArea", name: "Los Angeles County, CA" },
  ];
}

export function localBusinessSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    url: pageUrl,
    telephone: business.phoneDisplay,
    email: business.email,
    address: serviceAreaAddress(),
    description:
      "Mobile dog grooming based in Compton, CA, serving pet owners throughout the greater Los Angeles area. Grooming is performed at the customer's location — Bark and Bork is not a walk-in salon.",
    openingHoursSpecification: hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: areaServedList(),
    // Google's documented pattern for service-area businesses: no fixed
    // storefront, so hasMap/an exact geo point is intentionally omitted.
  };
}

export function serviceSchema(opts: { pageUrl: string; name: string; description: string; priceRange?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.pageUrl,
    areaServed: areaServedList(),
    ...(opts.priceRange ? { offers: { "@type": "Offer", priceCurrency: "USD", price: opts.priceRange } } : {}),
    provider: {
      "@type": "PetGroomer",
      name: business.name,
      telephone: business.phoneDisplay,
      address: serviceAreaAddress(),
    },
  };
}

// Referenced by the Contact/FAQ pages when quoting the policy verbatim in
// structured data isn't needed — kept here so the policy text has one
// canonical source shared with lib/site-data.ts's export.
export { cancellationPolicy };
