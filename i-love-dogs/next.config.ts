import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a monorepo that also contains
  // several other unrelated client apps, each with its own lockfile. Pin
  // the Turbopack root here so it doesn't guess based on a sibling lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
  // Every URL on this site ends in a slash (/dog-grooming/, /faq/ ...).
  trailingSlash: true,
  poweredByHeader: false,
  // Client photos are served as responsive AVIF/WebP by next/image.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The stylesheet is a few KB, so inline it rather than make the first
  // mobile visit wait on a render-blocking CSS request.
  experimental: {
    inlineCss: true,
  },
  // The client's current Squarespace site has /home indexed. Send it to the
  // home page in one hop with a true 301 (Next's `permanent` would be 308).
  async redirects() {
    return [
      { source: "/home", destination: "/", statusCode: 301 },
      { source: "/home/", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
