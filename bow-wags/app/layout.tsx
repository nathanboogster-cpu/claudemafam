import type { Metadata } from "next";
import { Baloo_2, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, PATHS } from "@/lib/site-data";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
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
    default: "Dog Daycare, Boarding & Grooming in Marietta, GA | Bow Wags",
    template: "%s | Bow Wags",
  },
  description:
    "Bow Wags offers dog daycare, boarding, and full-service grooming in Marietta, GA — clean, safe, fully supervised care for West Cobb and Cobb County dogs. Call (678) 744-9247.",
  alternates: {
    canonical: PATHS.home,
  },
  openGraph: {
    type: "website",
    siteName: "Bow Wags",
    title: "Dog Daycare, Boarding & Grooming in Marietta, GA | Bow Wags",
    description:
      "Clean, safe, fully supervised dog daycare, boarding, and full-service grooming in Marietta, GA.",
    url: PATHS.home,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Bow Wags" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Daycare, Boarding & Grooming in Marietta, GA | Bow Wags",
    description:
      "Clean, safe, fully supervised dog daycare, boarding, and full-service grooming in Marietta, GA.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${baloo.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col font-bw-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
