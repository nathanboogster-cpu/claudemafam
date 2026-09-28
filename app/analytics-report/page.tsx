import { getReport } from "@/lib/analytics-store";

export const metadata = { robots: { index: false, follow: false } };

const DAY_FORMAT = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

function formatDay(day: string) {
  return DAY_FORMAT.format(new Date(`${day}T00:00:00Z`));
}

export default async function AnalyticsReportPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  const secret = process.env.ANALYTICS_REPORT_SECRET;

  if (!secret || key !== secret) {
    return (
      <main className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-xl font-semibold">Not authorized</h1>
        <p className="mt-2 text-sm text-gray-600">
          This page needs a valid <code>?key=</code> in the URL.
        </p>
      </main>
    );
  }

  const report = await getReport();

  if (!report.connected) {
    return (
      <main className="mx-auto max-w-lg px-4 py-20">
        <h1 className="text-xl font-semibold">Tracking isn&apos;t connected yet</h1>
        <p className="mt-2 text-sm text-gray-600">
          Add the &quot;Upstash for Redis&quot; storage integration to this project in the
          Vercel dashboard, then click Call Now / Book Now on the live site once the
          deploy picks up the new environment variables — data will start showing here.
        </p>
      </main>
    );
  }

  const last7 = report.byDay.slice(0, 7);
  const last7Calls = last7.reduce((sum, d) => sum + d.call_click, 0);
  const last7Books = last7.reduce((sum, d) => sum + d.book_click, 0);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold">Pampered Puppies — Click Analytics</h1>
      <p className="mt-1 text-sm text-gray-600">
        Counts of Call Now and Book Now button clicks across the whole site.
      </p>

      <section className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label="Total calls" value={report.totals.call_click} />
        <Stat label="Total bookings" value={report.totals.book_click} />
        <Stat label="Calls, last 7 days" value={last7Calls} />
        <Stat label="Bookings, last 7 days" value={last7Books} />
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Last 30 days</h2>
        {report.byDay.length === 0 ? (
          <p className="mt-2 text-sm text-gray-600">No clicks recorded yet.</p>
        ) : (
          <table className="mt-3 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-300 text-gray-600">
                <th className="py-2 pr-4 font-medium">Day</th>
                <th className="py-2 pr-4 font-medium">Calls</th>
                <th className="py-2 font-medium">Bookings</th>
              </tr>
            </thead>
            <tbody>
              {report.byDay.map((d) => (
                <tr key={d.day} className="border-b border-gray-100">
                  <td className="py-1.5 pr-4">{formatDay(d.day)}</td>
                  <td className="py-1.5 pr-4">{d.call_click}</td>
                  <td className="py-1.5">{d.book_click}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="mt-10 grid gap-8 sm:grid-cols-2">
        <LocationBreakdown title="Where calls come from" rows={report.byLocation.call_click} />
        <LocationBreakdown title="Where bookings come from" rows={report.byLocation.book_click} />
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
}

function LocationBreakdown({
  title,
  rows,
}: {
  title: string;
  rows: { location: string; count: number }[];
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      {rows.length === 0 ? (
        <p className="mt-2 text-sm text-gray-600">No clicks recorded yet.</p>
      ) : (
        <ul className="mt-3 space-y-1 text-sm">
          {rows.map((r) => (
            <li key={r.location} className="flex justify-between border-b border-gray-100 py-1">
              <span>{r.location}</span>
              <span className="font-medium">{r.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
