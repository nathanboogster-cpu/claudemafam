import { business, faqs, packages, serviceAreas, SITE_URL, teamPhotos, beforeAfterPhotos } from "./site-data";

// NOTE: No openingHours (Google and Yelp disagree), logo (none supplied yet),
// email, priceRange, AggregateRating or Review. Ratings disagree across
// platforms and no review has been cleared for reuse. `image` uses the
// client's own photos.

const BUSINESS_ID = `${SITE_URL}/#business`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.addressLine1,
  addressLocality: business.addressCity,
  addressRegion: business.addressState,
  postalCode: business.addressZip,
  addressCountry: "US",
} as const;

function cities(names: readonly string[]) {
  return names.map((name) => ({ "@type": "City", name }));
}

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
    url: `${SITE_URL}/`,
    telephone: business.phoneE164,
    address: postalAddress,
    image: [teamPhotos.theresaHug.src, teamPhotos.jolieAndTheresa.src, beforeAfterPhotos[0].src].map((src) => `${SITE_URL}${src}`),
    areaServed: cities(serviceAreas),
    sameAs: [business.socials.facebook, business.socials.yelp],
  };
}

export function serviceSchema(opts: {
  pageUrl: string;
  name: string;
  description: string;
  areaServed?: readonly string[];
  withPackages?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.pageUrl,
    areaServed: cities(opts.areaServed ?? serviceAreas),
    provider: { "@id": BUSINESS_ID },
    ...(opts.withPackages
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Dog grooming packages",
            itemListElement: packages.map((p) => ({
              "@type": "Offer",
              name: p.name,
              priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", minPrice: p.price },
            })),
          },
        }
      : {}),
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
