import { SITE_URL, business, offer, founder, socialProfiles } from "./site-data";

// ---------------------------------------------------------------------------
// STRUCTURED DATA
//
// Rules this file follows, deliberately:
//   * Every type used is a standard schema.org type. Nothing invented.
//   * Schema only ever describes content that is visible on the page.
//   * No AggregateRating, no Review, no Award, no fabricated statistic. Those
//     are the four things most commonly faked in this industry and Google's
//     own guidelines restrict self-serving review markup.
//   * A single Organization node, referenced by @id everywhere else, so the
//     Tongfluence entity is unambiguous across the whole site.
// ---------------------------------------------------------------------------

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Canonical URL for a path, matching exactly what lib/metadata.ts emits as
// the canonical tag and what app/sitemap.ts emits as <loc> — so a page's
// canonical, its sitemap entry and every @id/url in its structured data are
// byte-identical strings rather than trailing-slash variants of each other.
export function canonicalUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// The canonical Tongfluence entity. Emitted once, in the root layout, so
// every page inherits the same consistent description of the business.
export function organizationSchema() {
  const sameAs = socialProfiles.map((p) => p.url);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: business.name,
    url: SITE_URL,
    description: business.entityDescription,
    // An accurate, plain-language statement of what kind of business this is.
    // Used instead of a LocalBusiness subtype because Tongfluence has no
    // walk-in location and serves grooming businesses remotely.
    knowsAbout: [
      "Dog groomer marketing",
      "Dog groomer SEO",
      "Local search optimization for pet grooming businesses",
      "Google Business Profile optimization",
      "Dog grooming website design",
      "Online review management",
    ],
    areaServed: { "@type": "Country", name: business.areaServed },
    ...(sameAs.length ? { sameAs } : {}),
    ...(founder.name
      ? {
          founder: {
            "@type": "Person",
            name: founder.name,
            jobTitle: founder.role,
            ...(founder.sameAs.length ? { sameAs: founder.sameAs } : {}),
          },
        }
      : {}),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: business.name,
    description: business.entityDescription,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
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
      item: canonicalUrl(item.url),
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

// Each commercial page describes one service Tongfluence really provides,
// at the one real price. The Offer below matches the visible pricing block
// on the page — never a different or promotional number.
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: canonicalUrl(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: business.areaServed },
    audience: {
      "@type": "BusinessAudience",
      name: "Dog grooming businesses",
    },
    offers: {
      "@type": "Offer",
      price: offer.priceNumeric,
      priceCurrency: offer.priceCurrency,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: offer.priceNumeric,
        priceCurrency: offer.priceCurrency,
        billingIncrement: 1,
        unitCode: "MON",
      },
      availability: "https://schema.org/InStock",
      url: canonicalUrl("/book"),
    },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = canonicalUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isAccessibleForFree: true,
  };
}

// Case studies are represented as Articles about a named client, rather than
// with an invented "CaseStudy" type. `about` names the real grooming business
// the piece documents, which is the relationship an AI or search system
// actually needs to understand.
export function caseStudySchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  clientName: string;
  clientMarket: string;
}) {
  const url = canonicalUrl(opts.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isAccessibleForFree: true,
    about: {
      "@type": "LocalBusiness",
      name: opts.clientName,
      description: `Dog grooming business in ${opts.clientMarket}.`,
    },
  };
}
