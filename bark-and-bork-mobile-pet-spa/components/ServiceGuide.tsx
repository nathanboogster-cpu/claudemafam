import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { serviceGuides } from "@/lib/service-content";
import { serviceAreas, areaPath, type ServiceSlug } from "@/lib/site-data";

export function ServiceGuide({ slug, serviceName }: { slug: ServiceSlug; serviceName: string }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <div className="space-y-10">
        {serviceGuides[slug].map((section) => (
          <div key={section.heading}>
            <h2 className="font-bb-display text-2xl font-bold text-bb-ink sm:text-3xl">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-bb-ink-soft">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-bb-ink-soft">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-bb-coral-dark" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-bb-border bg-white p-5">
        <h2 className="font-semibold text-bb-ink">{serviceName} Service Areas</h2>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {serviceAreas.map((a) => (
            <li key={a.slug}>
              <Link href={areaPath(a.slug)} className="text-bb-coral-dark underline underline-offset-4">
                {a.city}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
