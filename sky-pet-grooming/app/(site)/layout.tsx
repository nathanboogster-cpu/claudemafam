import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd, localBusinessSchema, webSiteSchema } from "@/lib/schema";

// Chrome for the public site only. The internal /requests inbox lives outside
// this route group so it renders without header, footer or schema.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={webSiteSchema()} />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
