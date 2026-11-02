import path from "node:path";
import type { NextConfig } from "next";

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
};

export default nextConfig;
