import { Eyebrow } from "@/components/Eyebrow";
import { CallButton, SecondaryLinkButton } from "@/components/CTAButton";
import { PATHS } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="font-sp-display text-4xl font-bold text-sp-ink sm:text-5xl">Page Not Found</h1>
      <p className="max-w-md text-sp-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist. Here&apos;s how to find what you need, or call us
        directly.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <CallButton location="not_found" variant="primary" />
        <SecondaryLinkButton location="not_found" variant="secondary" label="Back to Home" href={PATHS.home} />
      </div>
    </section>
  );
}
