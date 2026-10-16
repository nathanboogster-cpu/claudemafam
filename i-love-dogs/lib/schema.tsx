import { business, faqs, packages, pageNames, PATHS, SITE_URL, towns, type SitePath } from "./site-data";

// NOTE: deliberately no openingHours (sources disagree), image (no client
// photos yet), priceRange, aggregateRating or review. Google and Yelp ratings
// disagree and no review has been cleared for reuse.

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const BUSINESS_ID = `${SITE_URL}/#business`;

const areaServed = towns.map((name) => ({ "@type": "City", name }));

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: business.name,
    url: `${SITE_URL}/`,
    telephone: business.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.zip,
      addressCountry: "US",
    },
    areaServed,
  };
}

// Google reads WebSite structured data on the home page to pick the site
// name shown above the URL in search results.
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: business.name,
    url: `${SITE_URL}/`,
  };
}

export function groomingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dog Grooming",
    description: "Dog grooming packages in Bryn Mawr, PA: Bath & Pamper, The Works and Full Spa Day.",
    url: `${SITE_URL}${PATHS.dogGrooming}`,
    provider: { "@id": BUSINESS_ID },
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dog grooming packages",
      itemListElement: packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", minPrice: p.price },
      })),
    },
  };
}

export function pickupServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pet Pickup and Delivery for Grooming",
    description:
      "Pickup and delivery service for dog grooming clients of I Love Dogs Pet Grooming in Bryn Mawr, PA.",
    url: `${SITE_URL}${PATHS.pickup}`,
    provider: { "@id": BUSINESS_ID },
    areaServed,
  };
}

export function breadcrumbSchema(path: SitePath) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: pageNames[PATHS.home], item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: pageNames[path], item: `${SITE_URL}${path}` },
    ],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
