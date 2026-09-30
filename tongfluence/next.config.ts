import path from "node:path";
import type { NextConfig } from "next";

// GoHighLevel funnel pages that used to be served at tongfluence.com before
// the root domain moved to this site. They now live on the funnel subdomain,
// and the old URLs (which ads and Instant Forms still point at) redirect
// there with any query string intact. Add a path here for every funnel step
// that was published under the root domain.
const FUNNEL_HOST = "https://go.tongfluence.com";
const funnelPaths = ["/dog-groomers-welcome"];

const nextConfig: NextConfig = {
  // This app lives in a subdirectory of a monorepo that also contains the
  // grooming client sites Tongfluence builds, each with its own lockfile.
  // Pin the Turbopack root so it doesn't guess based on a sibling lockfile.
  turbopack: {
    root: path.join(__dirname),
  },
  redirects() {
    // 307, not 308: browsers cache a permanent redirect for good, and the
    // funnel host may still move once.
    return funnelPaths.map((p) => ({ source: p, destination: `${FUNNEL_HOST}${p}`, permanent: false }));
  },
};

export default nextConfig;
