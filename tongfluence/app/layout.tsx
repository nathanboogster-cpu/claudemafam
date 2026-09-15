import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, PATHS, business } from "@/lib/site-data";
import { JsonLd, organizationSchema, webSiteSchema } from "@/lib/schema";

// Self-hosted via next/font: no render-blocking request to Google, no layout
// shift, and only the weights actually used are downloaded.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dog Groomer Marketing That Gets You Found on Google | Tongfluence",
    template: `%s | ${business.name}`,
  },
  description: business.entityDescription,
  alternates: { canonical: PATHS.home },
  openGraph: {
    type: "website",
    siteName: business.name,
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-full flex-col antialiased">
        {/* Both site-wide entity nodes are emitted once here, so every page
            inherits the same Organization and WebSite definition and other
            schema on the page can just reference them by @id. */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
