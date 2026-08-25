import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PromoBar } from "@/components/PromoBar";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { SITE_URL, PATHS } from "@/lib/site-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Pet Spa Luxe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Spa Luxe | Luxury Mobile Dog Grooming in El Sobrante, CA",
    description:
      "Cage-free, one-on-one mobile dog grooming brought to your door in El Sobrante, CA and the Bay Area.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col font-psl-sans">
        <JsonLd data={localBusinessSchema(SITE_URL)} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-psl-brass-dark focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <PromoBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
