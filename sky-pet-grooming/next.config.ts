import path from "node:path";
import type { NextConfig } from "next";
import { BOOKING_URL } from "./lib/site-data";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a monorepo that also contains
  // several other unrelated client apps, each with its own lockfile. Pin
  // the Turbopack root here so it doesn't guess based on a sibling lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
  // Every URL on this site ends in a slash (/mobile-pet-grooming/, /faq/ ...).
  trailingSlash: true,
  poweredByHeader: false,
  // The stylesheet is a few KB, so inline it rather than make the first
  // mobile visit wait on a render-blocking CSS request.
  experimental: {
    inlineCss: true,
  },
  // Owner photos live in public/photos/ as 1280px WebP sources; next/image
  // serves resized AVIF/WebP from them. Only those files and the logo may be
  // optimized, with no query strings.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    localPatterns: [
      { pathname: "/photos/**", search: "" },
      { pathname: "/logo.png", search: "" },
      { pathname: "/logo-full.png", search: "" },
    ],
  },
  // /book/ was the old on-site request form, briefly live and in the sitemap.
  // Booking is now the owner's MoeGo page, so send any old links there.
  async redirects() {
    return [{ source: "/book", destination: BOOKING_URL, permanent: false }];
  },
};

export default nextConfig;
