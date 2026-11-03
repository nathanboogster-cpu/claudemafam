import { business, faqs, serviceAreas, services, SITE_URL } from "./site-data";

// NOTE: Sky Pet Grooming is a mobile, service-area business, so there is no
// street address. No openingHours, priceRange, email, AggregateRating or
// Review either: none of those are verified. Add them only once the owner
// confirms them.

const BUSINESS_ID = `${SITE_URL}/#business`;

// Every service-area city (see serviceAreas in site-data for how they were
// chosen).
const areaServed = serviceAreas.map((a) => ({ "@type": "City", name: `${a.city}, CA` }));

function city(name: string) {
  return { "@type": "City", name: `${name}, CA` };
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
    description: business.tagline,
    slogan: business.slogan,
    url: `${SITE_URL}/`,
    telephone: business.phone.e164,
    logo: `${SITE_URL}/logo-full.png`,
    image: [`${SITE_URL}/photos/sky-pet-grooming-van.webp`, `${SITE_URL}/logo-full.png`],
    areaServed,
  };
}

export function serviceSchema(opts: {
  pageUrl: string;
  name: string;
  description: string;
  city?: string;
  catalog?: boolean;
  // Confirmed prices for this service (site-data confirmedPrices), if any.
  offers?: readonly { label: string; amount: number }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.pageUrl,
    areaServed: opts.city ? city(opts.city) : areaServed,
    provider: { "@id": BUSINESS_ID },
    ...(opts.offers?.length
      ? {
          offers: opts.offers.map((o) => ({
            "@type": "Offer",
            name: o.label,
            price: o.amount.toFixed(2),
            priceCurrency: "USD",
          })),
        }
      : {}),
    // Single-service pages describe one service, so they skip the catalog.
    ...(opts.catalog === false
      ? {}
      : {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Mobile grooming services",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.body },
            })),
          },
        }),
  };
}

export function blogPostingSchema(opts: {
  pageUrl: string;
  headline: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  // Area posts name their town; service guides have none.
  city?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    image: opts.imageUrl,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    url: opts.pageUrl,
    mainEntityOfPage: opts.pageUrl,
    ...(opts.city ? { contentLocation: city(opts.city) } : {}),
    author: { "@id": BUSINESS_ID },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png` },
    },
  };
}

// Gallery page: the owner's photos as an ImageGallery.
export function imageGallerySchema(opts: { pageUrl: string; images: readonly { slug: string; alt: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${business.name} gallery`,
    url: opts.pageUrl,
    about: { "@id": BUSINESS_ID },
    image: opts.images.map((p) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/photos/${p.slug}.webp`,
      description: p.alt,
    })),
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
