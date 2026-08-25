import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    default: "Pampered Puppies | Dog & Cat Grooming in Victorville, CA",
    template: "%s",
  },
  description:
    "Dog & cat grooming in Victorville, CA — in-store and mobile. Hundreds of 5-star Google reviews, BBB A+ accredited. Call to book with Ellen.",
};

export default function PamperedPuppiesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={localBusinessSchema(SITE_URL)} />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
