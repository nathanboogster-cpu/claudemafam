import { business, hoursSchema, serviceAreas, SITE_URL } from "./site-data";

// NOTE: Per the client handoff §2/§8, AggregateRating/Review schema must NOT be added
// anywhere on this site (Google's structured-data guidelines restrict third-party-sourced
// ratings). The 4.3★/226-review figure is shown as visible page content only — never here.

export function localBusinessSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    image: `${SITE_URL}/images/storefront.jpg`,
    logo: `${SITE_URL}/images/logo-full.png`,
    url: pageUrl,
    telephone: business.phoneDisplay,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine1,
      addressLocality: business.addressCity,
      addressRegion: business.addressState,
      postalCode: business.addressZip,
      addressCountry: "US",
    },
    // Hours are a GBP-sourced placeholder pending Ellen's final confirmation
    // (three sources conflicted at build time — see lib/site-data.ts `hours`).
    openingHoursSpecification: hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };
}

export function serviceSchema(opts: {
  pageUrl: string;
  name: string;
  description: string;
  areaServed?: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.pageUrl,
    areaServed: (opts.areaServed ?? serviceAreas).map((city) => ({
      "@type": "City",
      name: city,
    })),
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.addressLine1,
        addressLocality: business.addressCity,
        addressRegion: business.addressState,
        postalCode: business.addressZip,
        addressCountry: "US",
      },
    },
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

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
