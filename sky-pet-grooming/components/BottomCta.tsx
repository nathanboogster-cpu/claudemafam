import { business } from "@/lib/site-data";
import { BookButton } from "./CTAButton";

export function BottomCta({ title, body, location }: { title: string; body?: string; location: string }) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-3 text-sky">{body ?? business.tagline}</p>
        <div className="mt-6 flex justify-center">
          <BookButton location={location} />
        </div>
      </div>
    </section>
  );
}
