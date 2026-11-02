import { business } from "@/lib/site-data";
import { BookButton, CallButton } from "./CTAButton";

// Closing call to action in the van's blue-to-pink colours.
export function BottomCta({ title, body, location }: { title: string; body?: string; location: string }) {
  return (
    <section className="bg-van">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/85">{business.slogan}</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="mt-3 text-lg text-white/90">{body ?? `Mobile dog and cat grooming in ${business.area}.`}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <BookButton location={location} variant="ghost" className="text-accent-dark" />
          <CallButton location={location} variant="light" />
        </div>
      </div>
    </section>
  );
}
