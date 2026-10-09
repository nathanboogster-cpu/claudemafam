import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { PATHS } from "@/lib/site-data";
import { watchVideos, getWatchVideo, videoPath, thumbnailUrl, embedUrl, isoDuration, durationLabel } from "@/lib/videos";
import { fetchWistiaExtras } from "@/lib/wistia";
import { JsonLd, breadcrumbSchema, videoSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section, Eyebrow } from "@/components/Section";
import { WistiaPlayer } from "@/components/WistiaPlayer";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRightIcon } from "@/components/icons";

// WATCH PAGES
//   One video per page, and the video is the page: the player is the first
//   and largest thing, above the fold on every screen size. Below it, the
//   title as the H1, a short description, the transcript, the other videos,
//   and the call to action. VideoObject structured data on the page points
//   at itself, which is what lets Google index the video at all.
export function generateStaticParams() {
  return watchVideos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const video = getWatchVideo(slug);
  if (!video) return {};
  return pageMetadata({
    title: `${video.name} (video)`,
    description: `${video.description} ${durationLabel(video.durationSeconds)} long, with a full transcript.`,
    path: videoPath(video.slug),
  });
}

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = getWatchVideo(slug);
  if (!video) notFound();

  const path = videoPath(video.slug);
  const extras = await fetchWistiaExtras(video.mediaId);
  const others = watchVideos.filter((v) => v.slug !== video.slug);
  const sourceLabel = video.source === "home" ? "Home" : "FAQ";
  const sourcePath = video.source === "home" ? PATHS.home : PATHS.faq;
  const breadcrumbs = [
    { name: "Home", href: PATHS.home },
    { name: "Videos", href: path },
    { name: video.name, href: path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.href })))} />
      <JsonLd
        data={videoSchema({
          name: video.name,
          description: video.description,
          thumbnailUrl: thumbnailUrl(video),
          uploadDate: video.uploadDate,
          duration: isoDuration(video.durationSeconds),
          embedUrl: embedUrl(video),
          contentUrl: extras.contentUrl ?? undefined,
          pagePath: path,
          transcript: extras.transcript ?? undefined,
        })}
      />

      {/* The player first. No hero, no heading above it. */}
      <Section className="pt-4 pb-6 sm:pt-6">
        <div className="mx-auto w-full max-w-4xl">
          <WistiaPlayer mediaId={video.mediaId} aspect={video.aspect} location={`video_${video.slug}`} className="rounded-2xl shadow-sm" />
        </div>
      </Section>

      <Section width="narrow" className="pb-8">
        <Eyebrow>Video · {durationLabel(video.durationSeconds)}</Eyebrow>
        <h1 className="mt-3 font-tf-display text-[1.9rem] font-bold leading-[1.12] tracking-[-0.02em] text-tf-ink sm:text-4xl">
          {video.name}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-tf-ink-soft sm:text-lg">
          {video.description}{" "}
          {video.source === "home"
            ? "It is the same video that plays on the homepage and the booking page."
            : "It is one of the seven short answers on the FAQ page."}
        </p>
      </Section>

      <Breadcrumbs items={breadcrumbs.map((b) => ({ name: b.name, href: b.href }))} />

      <Section width="narrow" className="py-10" labelledBy="transcript">
        <h2 id="transcript" className="font-tf-display text-2xl font-bold text-tf-ink">
          Transcript
        </h2>
        {extras.transcript ? (
          <div className="tf-prose mt-4">
            {extras.transcript.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          // Placeholder, shown only when Wistia's captions could not be
          // fetched at build time. Nothing here is written for the video.
          <div className="mt-4 rounded-xl border border-dashed border-tf-border-strong bg-tf-card p-5 text-sm leading-relaxed text-tf-ink-soft">
            <p className="font-semibold text-tf-ink">Transcript coming soon.</p>
            <p className="mt-1">
              The written version of this video is not up yet. Everything it covers is also on{" "}
              <Link href={sourcePath} className="font-medium text-tf-brown-dark underline underline-offset-4">
                the {sourceLabel.toLowerCase()} page
              </Link>
              .
            </p>
          </div>
        )}
      </Section>

      {others.length > 0 ? (
        <Section width="narrow" className="pb-12" labelledBy="more-videos">
          <h2 id="more-videos" className="font-tf-display text-xl font-bold text-tf-ink">
            More videos
          </h2>
          <ul className="mt-4 divide-y divide-tf-border rounded-2xl border border-tf-border bg-tf-card">
            {others.map((v) => (
              <li key={v.slug}>
                <Link
                  href={videoPath(v.slug)}
                  className="group flex items-center justify-between gap-4 px-5 py-3.5 text-sm hover:bg-tf-brown-wash"
                >
                  <span className="font-medium text-tf-ink">{v.name}</span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-tf-ink-soft">
                    {durationLabel(v.durationSeconds)}
                    <ArrowRightIcon className="h-4 w-4 text-tf-brown-dark transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section className="py-10">
        <CtaBand
          location={`video_${video.slug}_footer`}
          title="Want this for your grooming business?"
          body="Book a short call. We open your Google profile and your site while you are on the line and tell you what we would change first."
        />
      </Section>
    </>
  );
}
