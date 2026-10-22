import { business } from "@/lib/site-data";
import { CallButton, DirectionsButton } from "./CTAButton";

export function BottomCta({ title, body, location }: { title: string; body?: string; location: string }) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-3 text-cream">{body ?? business.addressFull}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location={location} />
          <DirectionsButton location={location} variant="ghost" />
        </div>
      </div>
    </section>
  );
}
