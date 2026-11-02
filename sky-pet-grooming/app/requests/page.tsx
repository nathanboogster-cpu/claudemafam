import type { Metadata } from "next";
import { isStoreConnected, listRequests } from "@/lib/requests-store";

// Private inbox for appointment requests sent from /book/. Open it at
// /requests?key=<REQUESTS_SECRET>. Lives outside the (site) route group so it
// renders without the public header, footer or schema.
export const metadata: Metadata = {
  title: { absolute: "Appointment requests | Sky Pet Grooming" },
  robots: { index: false, follow: false },
};

const WHEN = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

export default async function RequestsPage({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams;
  const secret = process.env.REQUESTS_SECRET;

  if (!secret || key !== secret) {
    return (
      <main className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-xl font-semibold">Not authorized</h1>
        <p className="mt-2 text-sm text-ink-soft">
          This page needs a valid <code>?key=</code> in the URL.
        </p>
      </main>
    );
  }

  if (!isStoreConnected()) {
    return (
      <main className="mx-auto max-w-lg px-4 py-20">
        <h1 className="text-xl font-semibold">Request storage isn&apos;t connected yet</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Add the &quot;Upstash for Redis&quot; storage integration to this project in the Vercel dashboard and redeploy.
          Until then, the booking form on the live site cannot send requests.
        </p>
      </main>
    );
  }

  const requests = await listRequests();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold">Sky Pet Grooming — Appointment Requests</h1>
      <p className="mt-1 text-sm text-ink-soft">Newest first. Times are Pacific. Showing the latest {requests.length}.</p>

      {requests.length === 0 ? (
        <p className="mt-8 text-ink-soft">No requests yet.</p>
      ) : (
        <ul className="mt-8 space-y-4">
          {requests.map((r) => (
            <li key={r.id} className="rounded-xl border border-border bg-white p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold">{r.name}</h2>
                <span className="text-sm text-ink-soft">{WHEN.format(new Date(r.receivedAt))}</span>
              </div>
              <dl className="mt-3 grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[8rem_1fr]">
                <dt className="font-medium text-ink-soft">Phone</dt>
                <dd>
                  <a href={`tel:${r.phone.replace(/[^\d+]/g, "")}`} className="text-brand underline">
                    {r.phone}
                  </a>
                </dd>
                {r.email && (
                  <>
                    <dt className="font-medium text-ink-soft">Email</dt>
                    <dd>
                      <a href={`mailto:${r.email}`} className="text-brand underline">
                        {r.email}
                      </a>
                    </dd>
                  </>
                )}
                <dt className="font-medium text-ink-soft">Where</dt>
                <dd>{r.location}</dd>
                <dt className="font-medium text-ink-soft">Pet</dt>
                <dd className="whitespace-pre-line">{r.pets}</dd>
                {r.timing && (
                  <>
                    <dt className="font-medium text-ink-soft">When</dt>
                    <dd>{r.timing}</dd>
                  </>
                )}
                {r.notes && (
                  <>
                    <dt className="font-medium text-ink-soft">Notes</dt>
                    <dd className="whitespace-pre-line">{r.notes}</dd>
                  </>
                )}
              </dl>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
