import Link from "next/link";
import { Logo } from "./Logo";
import { business, market, PATHS, services, servicePath, hoursNote } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";
import { blogPostPath } from "@/lib/site-data";
import { PhoneIcon, PinIcon, ClockIcon, FacebookIcon, VanIcon } from "./icons";

/**
 * Footer. Doubles as the site's crawl floor: every indexable URL on the site
 * is reachable from here as a plain <a>, so no page is an orphan and nothing
 * depends on JavaScript to be discovered. The three most recent guides are
 * linked directly rather than only via the blog hub, to shorten the click
 * depth on the newest content.
 */
export function Footer() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <footer className="goc-dark goc-paw-pattern-light mt-auto bg-goc-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Professional dog and cat grooming brought directly to your home in the {market.cityState} area. No
            drop-off, no waiting room — we come to you.
          </p>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-bold hover:border-white hover:bg-white/10"
          >
            <FacebookIcon className="h-4 w-4" />
            Groomer On Call on Facebook
          </a>
        </div>

        <div>
          <h2 className="font-goc-display text-sm font-extrabold uppercase tracking-[0.14em] text-goc-orange">
            Grooming Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={servicePath(service.slug)} className="inline-block py-0.5 text-white/75 underline-offset-4 hover:text-white hover:underline">
                  {service.navLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link href={PATHS.services} className="inline-block py-0.5 font-bold text-white underline-offset-4 hover:underline">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-goc-display text-sm font-extrabold uppercase tracking-[0.14em] text-goc-orange">
            Groomer On Call
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href={PATHS.about} className="inline-block py-0.5 text-white/75 underline-offset-4 hover:text-white hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href={PATHS.serviceAreas} className="inline-block py-0.5 text-white/75 underline-offset-4 hover:text-white hover:underline">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href={PATHS.faq} className="inline-block py-0.5 text-white/75 underline-offset-4 hover:text-white hover:underline">
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link href={PATHS.contact} className="inline-block py-0.5 text-white/75 underline-offset-4 hover:text-white hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href={PATHS.blog} className="inline-block py-0.5 text-white/75 underline-offset-4 hover:text-white hover:underline">
                Grooming Guides
              </Link>
            </li>
            {recentPosts.map((post) => (
              <li key={post.slug} className="pl-3 text-white/60">
                <Link href={blogPostPath(post.slug)} className="inline-block py-0.5 underline-offset-4 hover:text-white hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-goc-display text-sm font-extrabold uppercase tracking-[0.14em] text-goc-orange">
            Book A Groom
          </h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 text-goc-orange" />
              <a
                href={business.phoneHref}
                data-goc-event="call_click"
                data-goc-location="footer"
                className="inline-block py-1 text-lg font-extrabold text-white underline-offset-4 hover:underline"
              >
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3 text-white/75">
              <VanIcon className="mt-0.5 h-5 w-5 text-goc-orange" />
              <span>
                100% mobile — we travel to you.
                <br />
                There is no salon to visit.
              </span>
            </li>
            <li className="flex gap-3 text-white/75">
              <PinIcon className="mt-0.5 h-5 w-5 text-goc-orange" />
              <span>
                Serving the {market.cityState} area.
                <br />
                <Link href={PATHS.serviceAreas} className="underline underline-offset-4 hover:text-white">
                  Check if we reach you
                </Link>
              </span>
            </li>
            <li className="flex gap-3 text-white/75">
              <ClockIcon className="mt-0.5 h-5 w-5 text-goc-orange" />
              <span>{hoursNote}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Mobile pet grooming, {market.cityState}.
          </p>
          <p>
            Mobile service-area business — no public salon address.
          </p>
        </div>
      </div>
    </footer>
  );
}
