import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, PATHS, business, market } from "@/lib/site-data";

// Self-hosted by next/font at build time — no render-blocking request to
// Google Fonts, and `display: swap` so text paints immediately.
//
// Weights are trimmed to exactly what the site uses. The display face renders
// only at 800 (every heading and the wordmark), and the body face never uses
// 500 — shipping the unused weights was the single largest contributor to LCP,
// since the header text that Lighthouse measures is blocked on the font.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const defaultTitle = `Mobile Pet Grooming in ${market.cityState} | ${business.name}`;
const defaultDescription =
  `Professional mobile dog and cat grooming in the ${market.cityState} area — your groomer comes to your home. ` +
  `Call ${business.phoneDisplay} to book.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${business.name}`,
  },
  description: defaultDescription,
  alternates: { canonical: PATHS.home },
  openGraph: {
    type: "website",
    siteName: business.name,
    title: defaultTitle,
    description: defaultDescription,
    url: PATHS.home,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#fff7ef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${outfit.variable} ${jakarta.variable}`}>
      <body className="flex min-h-full flex-col font-goc-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
