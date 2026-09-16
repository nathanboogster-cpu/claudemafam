"use client";

import Link from "next/link";
import type { ClientBuild } from "@/lib/client-builds";
import { caseStudyPath } from "@/lib/site-data";
import { EVENTS, trackEvent } from "@/lib/track";
import { ArrowRightIcon, MapPinIcon, ScissorsIcon } from "./icons";

export function CaseStudyCard({ build, location }: { build: ClientBuild; location: string }) {
  return (
    <Link
      href={caseStudyPath(build.slug)}
      onClick={() => trackEvent(EVENTS.caseStudyView, { location, client: build.slug })}
      className="group flex h-full flex-col rounded-3xl border border-tf-border bg-white p-6 transition-colors hover:border-tf-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark"
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-tf-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <MapPinIcon className="h-4 w-4 text-tf-brown-dark" />
          {build.market}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ScissorsIcon className="h-4 w-4 text-tf-brown-dark" />
          {build.businessType}
        </span>
      </div>

      <h3 className="mt-3 font-tf-display text-xl font-bold text-tf-ink">{build.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-tf-ink-soft">{build.problem}</p>

      <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-tf-border pt-4 text-center">
        <div>
          <dt className="text-xs text-tf-ink-soft">Pages</dt>
          <dd className="font-tf-display text-lg font-bold text-tf-ink">{build.pages.total}</dd>
        </div>
        <div>
          <dt className="text-xs text-tf-ink-soft">Services</dt>
          <dd className="font-tf-display text-lg font-bold text-tf-ink">{build.pages.services}</dd>
        </div>
        <div>
          <dt className="text-xs text-tf-ink-soft">Areas</dt>
          <dd className="font-tf-display text-lg font-bold text-tf-ink">{build.pages.areas}</dd>
        </div>
      </dl>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-tf-brown-dark">
        Read the build
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
