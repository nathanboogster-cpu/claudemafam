import Link from "next/link";
import { CallButton, ReserveButton } from "@/components/CTAButton";
import { PATHS } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center">
      <p className="font-bw-display text-6xl font-bold text-bw-orange-dark">404</p>
      <h1 className="mt-4 font-bw-display text-3xl font-bold text-bw-ink">Looks like this page ran off to play</h1>
      <p className="mt-3 text-bw-ink-soft">
        We couldn&apos;t find that page. Head back to the{" "}
        <Link href={PATHS.home} className="font-semibold text-bw-orange-dark hover:underline">
          homepage
        </Link>{" "}
        or check out daycare, boarding, and grooming.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ReserveButton location="404_page" variant="primary" />
        <CallButton location="404_page" variant="secondary" />
      </div>
    </section>
  );
}
