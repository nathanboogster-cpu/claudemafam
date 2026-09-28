import { Eyebrow } from "@/components/Eyebrow";
import { BookButton, SecondaryLinkButton } from "@/components/CTAButton";
import { PATHS } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-bb-display text-4xl font-bold text-bb-ink sm:text-5xl">Page Not Found</h1>
      <p className="max-w-md text-bb-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist. Here&apos;s how to find what you need, or book a
        mobile grooming appointment directly.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <BookButton location="not_found" variant="primary" />
        <SecondaryLinkButton location="not_found" variant="secondary" label="Back to Home" href={PATHS.home} />
      </div>
    </section>
  );
}
