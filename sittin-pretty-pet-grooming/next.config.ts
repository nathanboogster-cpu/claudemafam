import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a monorepo that also contains other
  // unrelated client apps, each with its own lockfile. Pin the Turbopack
  // root here so it doesn't guess based on the parent lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
  // Inlines critical above-the-fold CSS and defers the rest, reducing
  // render-blocking CSS on first paint (LCP).
  experimental: {
    optimizeCss: true,
  },
  // Google indexed the vercel.app copy before the custom domain was the
  // canonical, and kept treating it as the main version. A permanent redirect
  // consolidates everything onto www. Only the exact production alias and the
  // bare domain are matched, so per-deployment preview URLs keep working.
  async redirects() {
    return ["sittin-pretty-pet-grooming.vercel.app", "sittinprettypetgrooming.com"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://www.sittinprettypetgrooming.com/:path*",
      permanent: true,
    }));
  },
  // Baseline hardening headers. This is a fully static marketing site (no
  // forms, no API routes, no user input) so there's no injectable content
  // to write a content-security-policy around — these just close off
  // clickjacking, MIME-sniffing, and unnecessary referrer/permission leaks.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
