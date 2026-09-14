// ---------------------------------------------------------------------------
// Structured data for a MOBILE SERVICE-AREA BUSINESS.
//
// Two deliberate omissions, both load-bearing:
//
//   1. NO `address`. Groomer On Call is 100% mobile with no customer-facing
//      location. Publishing a street address would invent a storefront, and
//      the only address in public record for this phone number is historical
//      and unconfirmed. `areaServed` carries the geography instead — the
//      documented schema.org pattern for a service-area business.
//   2. NO `aggregateRating` / `review`. No review count or star rating has
//      been verified for this business, and fabricating either is both a
//      Google structured-data violation and a lie. Nothing is emitted until
//      real review data exists.
//
// `openingHoursSpecification` is also absent while hours are unconfirmed —
// see hoursConfirmed in lib/site-data.ts.
// ---------------------------------------------------------------------------
import { business, market, telephoneE164, SITE_URL } from "./site-data";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const BUSINESS_ID = `${SITE_URL}/#business`;

const businessDescription =
  `${business.name} is a mobile pet grooming service based in the ${market.cityState} area. ` +
  `Dog and cat grooming is carried out at the customer's home — there is no salon to visit.`;

/** Geography this business serves, as schema.org objects. */
function areaServed() {
  return [
    { "@type": "City", name: `${market.city}, ${market.state}` },
    { "@type": "AdministrativeArea", name: `${market.region}` },
  ];
}

/**
 * The canonical business entity, emitted once per page from the site layout.
 * `PetGroomer` is a LocalBusiness subtype, which is what Google expects for
 * a grooming business.
 */
export function localBusinessSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    "@id": BUSINESS_ID,
    name: business.name,
    url: pageUrl,
    telephone: telephoneE164,
    description: businessDescription,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/opengraph-image`,
    priceRange: "$$",
    areaServed: areaServed(),
    sameAs: [business.facebookUrl],
  };
}

/** Entity + site identity, homepage only. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    description: businessDescription,
    publisher: { "@id": BUSINESS_ID },
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
      item: item.url,
    })),
  };
}

/**
 * FAQPage schema. Only ever called with Q&A pairs that are also rendered as
 * visible text on the same page — schema that doesn't match visible content
 * is a manual-action risk.
 */
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

export function serviceSchema(opts: { pageUrl: string; name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.pageUrl}#service`,
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.pageUrl,
    areaServed: areaServed(),
    // Carries the same @id as localBusinessSchema (emitted on every page by
    // the site layout) so Google resolves this as the same entity rather
    // than a new business per service page — with enough inline fields that
    // the node is still self-contained for parsers that don't merge by @id.
    provider: {
      "@type": "PetGroomer",
      "@id": BUSINESS_ID,
      name: business.name,
      telephone: telephoneE164,
      areaServed: areaServed(),
    },
  };
}

export function blogPostingSchema(opts: {
  pageUrl: string;
  headline: string;
  description: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    image: `${SITE_URL}/opengraph-image`,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    url: opts.pageUrl,
    mainEntityOfPage: opts.pageUrl,
    author: { "@type": "Organization", name: business.name, url: SITE_URL },
    publisher: { "@id": BUSINESS_ID },
  };
}
