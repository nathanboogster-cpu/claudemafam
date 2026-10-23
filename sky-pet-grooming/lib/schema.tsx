import { business, faqs, SITE_URL } from "./site-data";

// NOTE: Sky Pet Grooming is a mobile, service-area business and no address,
// phone, email, hours, prices, logo or photos have been verified, so none of
// address, telephone, email, openingHours, priceRange, image/logo,
// AggregateRating or Review appear here. Add them only once the owner
// confirms them.

const BUSINESS_ID = `${SITE_URL}/#business`;

const california = { "@type": "State", name: business.state } as const;

// Google reads WebSite structured data on the home page to pick the site name
// shown above the URL in search results.
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: business.name,
    url: `${SITE_URL}/`,
    publisher: { "@id": BUSINESS_ID },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: business.name,
    description: business.tagline,
    url: `${SITE_URL}/`,
    areaServed: california,
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
    areaServed: california,
    provider: { "@id": BUSINESS_ID },
  };
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

export function faqSchema(qa: readonly { question: string; answer: string }[] = faqs) {
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

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
