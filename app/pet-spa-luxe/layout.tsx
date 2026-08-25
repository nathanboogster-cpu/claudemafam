import type { Metadata } from "next";
import { Header } from "@/components/psl/Header";
import { Footer } from "@/components/psl/Footer";
import { StickyMobileCTA } from "@/components/psl/StickyMobileCTA";
import { JsonLd, localBusinessSchema } from "@/lib/psl/schema";
import { SITE_URL, PATHS } from "@/lib/psl/site-data";

export const metadata: Metadata = {
  title: {
    default: "Pet Spa Luxe | Luxury Mobile Dog Grooming in El Sobrante, CA",
    template: "%s | Pet Spa Luxe",
  },
  description:
    "Luxury mobile dog grooming brought to your door in El Sobrante, CA and the Bay Area. Cage-free, one-on-one grooming. Rated 5.0 stars on Yelp. Call (650) 576-1194.",
  alternates: {
    canonical: PATHS.home,
  },
  openGraph: {
    type: "website",
    siteName: "Pet Spa Luxe",
    title: "Pet Spa Luxe | Luxury Mobile Dog Grooming in El Sobrante, CA",
    description:
      "Cage-free, one-on-one mobile dog grooming brought to your door in El Sobrante, CA and the Bay Area.",
    url: PATHS.home,
  },
};

export default function PetSpaLuxeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={localBusinessSchema(`${SITE_URL}${PATHS.home}`)} />
      <Header />
      <main id="main-content" className="flex-1 font-psl-sans">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
