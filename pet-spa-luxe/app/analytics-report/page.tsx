import type { Metadata } from "next";
import { getReport } from "@/lib/analytics-store";

// Internal-only ops page — deliberately outside the (site) route group, so
// it renders with none of the public site's header/promo bar/footer. Kept
// out of search results via metadata below and disallowed in robots.ts.
export const metadata: Metadata = {
  title: "Analytics Report",
  robots: { index: false, follow: false },
};

const shell = "min-h-screen bg-gray-50 px-4 py-10 font-sans text-gray-900";
const card = "rounded-xl border border-gray-200 bg-white p-6 shadow-sm";

export default async function AnalyticsReportPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  const secret = process.env.ANALYTICS_REPORT_SECRET;
  const authorized = Boolean(secret) && key === secret;

  if (!authorized) {
    return (
      <div className={shell}>
        <div className={`${card} mx-auto max-w-md text-center`}>
          <h1 className="text-lg font-semibold">Not authorized</h1>
          <p className="mt-2 text-sm text-gray-500">
            Add the correct <code className="rounded bg-gray-100 px-1 py-0.5">?key=</code> to the URL.
          </p>
        </div>
      </div>
    );
  }

  const report = await getReport();

  if (!report.connected) {
    return (
      <div className={shell}>
        <div className={`${card} mx-auto max-w-lg`}>
          <h1 className="text-lg font-semibold">Click tracker not connected</h1>
          <p className="mt-2 text-sm text-gray-600">
            {report.reason === "error"
              ? "Redis is configured but a request failed — check the connection details are still valid."
              : "No Redis connection is configured yet."}
          </p>
          <p className="mt-3 text-sm text-gray-600">
            In the Vercel dashboard, go to your project&apos;s <strong>Storage</strong> tab → Create
            Database → <strong>Upstash for Redis</strong> (free tier), connect it to this project, then
            redeploy. This page will start showing data once that&apos;s done.
          </p>
        </div>
      </div>
    );
  }

  const { types, totals, last7Days, dayByDay, byLocation } = report;

  return (
    <div className={shell}>
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-2xl font-bold">CTA Click Tracker</h1>
          <p className="mt-1 text-sm text-gray-500">
            Self-hosted click counts for the site&apos;s conversion buttons — no monthly event cap.
          </p>
        </div>

        <div className={card}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">All-Time Totals</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {types.map(({ type, label }) => (
              <div key={type} className="rounded-lg border border-gray-200 p-4">
                <p className="text-3xl font-bold">{totals[type].toLocaleString()}</p>
                <p className="mt-1 text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={card}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Last 7 Days</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {types.map(({ type, label }) => (
              <div key={type} className="rounded-lg border border-gray-200 p-4">
                <p className="text-3xl font-bold">{last7Days[type].toLocaleString()}</p>
                <p className="mt-1 text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={card}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Last 30 Days</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-4 font-medium">Day (UTC)</th>
                  {types.map(({ type, label }) => (
                    <th key={type} className="py-2 pr-4 font-medium">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dayByDay.map(({ day, counts }) => (
                  <tr key={day} className="border-b border-gray-100 last:border-0">
                    <td className="py-1.5 pr-4 text-gray-600">{day}</td>
                    {types.map(({ type }) => (
                      <td key={type} className="py-1.5 pr-4">
                        {counts[type]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={card}>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">By Location</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {types.map(({ type, label }) => (
              <div key={type}>
                <h3 className="text-sm font-semibold">{label}</h3>
                {byLocation[type].length === 0 ? (
                  <p className="mt-2 text-sm text-gray-400">No clicks recorded yet.</p>
                ) : (
                  <ul className="mt-2 space-y-1 text-sm">
                    {byLocation[type].map(({ location, count }) => (
                      <li key={location} className="flex justify-between gap-4 border-b border-gray-100 py-1">
                        <span className="text-gray-600">{location}</span>
                        <span className="font-medium">{count}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
