import { business, hoursSchema, SITE_URL, PATHS } from "./site-data";

export { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

// NOTE: No AggregateRating/Review schema is added anywhere on this site — Google's
// structured-data guidelines restrict self-published third-party ratings. The
// verified 5.0 Yelp rating is shown as visible page content only, linking out to
// the real Yelp listing, never injected as review/rating schema here.

export function localBusinessSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}${PATHS.home}/#business`,
    name: business.name,
    url: pageUrl,
    telephone: business.phoneDisplay,
    image: `${SITE_URL}${business.logoFull}`,
    logo: `${SITE_URL}${business.logoMark}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine1,
      addressLocality: business.addressCity,
      addressRegion: business.addressState,
      postalCode: business.addressZip,
      addressCountry: "US",
    },
    description:
      "Luxury mobile dog grooming brought directly to your home in El Sobrante and the surrounding Bay Area.",
    openingHoursSpecification: hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [business.yelpUrl],
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
    areaServed: {
      "@type": "City",
      name: business.primaryLocation,
    },
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
