import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { business, SITE_URL } from "@/lib/site-data";

// Same type pairing as the Pampered Puppies site: bold serif display, clean
// sans body, tracked monospace for eyebrow labels. next/font self-hosts the
// files at build time, so pages make no requests to Google. Inter and
// Playfair Display are variable fonts, so each loads as one file covering
// every weight; no italics are used on this site.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: business.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#12307a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${playfair.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
