// ---------------------------------------------------------------------------
// CASE STUDIES
//
// Every fact in this file is verifiable by opening the build it describes.
// The client names, markets and business types are public information those
// businesses publish themselves; the page counts and structural decisions come
// from the builds.
//
// WHAT IS DELIBERATELY ABSENT: rankings, traffic, impressions, clicks, call
// volume, lead counts, review growth, revenue. None of that has been measured
// and exported yet. Each case study says so in its own words rather than
// quietly omitting the question — an agency case study with no numbers and no
// explanation is how readers get trained to assume the numbers are bad.
//
// When real Search Console and Google Business Profile data exists, it goes in
// `results.measured` with its metric, period, source and what changed — never
// as a bare percentage.
// ---------------------------------------------------------------------------

export type CaseStudySection = {
  heading: string;
  id: string;
  paragraphs?: string[];
  items?: { title: string; body: string }[];
};

export type CaseStudy = {
  slug: string;
  clientName: string;
  market: string;
  businessType: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  dek: string;
  publishedAt: string;
  atAGlance: { label: string; value: string }[];
  situation: string[];
  diagnosis: { title: string; body: string }[];
  built: CaseStudySection[];
  results: {
    shipped: string[];
    measured: { metric: string; period: string; source: string; value: string; change: string }[];
    pending: string;
  };
  lessons: { title: string; body: string }[];
};

export const caseStudies: CaseStudy[] = [
  // -------------------------------------------------------------------------
  {
    slug: "pet-spa-luxe",
    clientName: "Pet Spa Luxe",
    market: "El Sobrante, CA",
    businessType: "Mobile dog grooming",
    metaTitle: "Pet Spa Luxe: Mobile Grooming SEO Across Six Counties",
    metaDescription:
      "Rebuilding a mobile dog groomer's web presence around the fifteen Bay Area cities its van really serves: 35 pages, no published address, honest review handling.",
    h1: "Pet Spa Luxe: one van, six counties, and a website that only mentioned one town",
    dek: "A mobile grooming business whose service area stretched from Berkeley to Napa, with nothing on the web to match a search in any of those places except the one it is based in.",
    publishedAt: "2026-09-15",
    atAGlance: [
      { label: "Business", value: "Pet Spa Luxe" },
      { label: "Market", value: "El Sobrante, CA" },
      { label: "Type", value: "Mobile dog grooming — no walk-in salon" },
      { label: "Live at", value: "petspaluxe.com" },
      { label: "Pages built", value: "35 indexable pages" },
      { label: "Service areas", value: "15 cities across 6 counties" },
    ],
    situation: [
      "Pet Spa Luxe is a luxury mobile dog grooming business based in El Sobrante, in the East Bay. The van travels a long way — Contra Costa, Alameda, Marin, Solano, Napa and Sonoma counties are all inside its working radius — and the business has a genuinely strong reputation, with a 5.0 star rating on its Yelp listing.",
      "The structural problem was geography. A mobile business does not get to rely on the map pack the way a salon does: Google's local results are heavily influenced by how close the searcher is to the business, and El Sobrante is not close to Napa. Someone in Walnut Creek searching for mobile dog grooming was not going to find a business whose entire web presence pointed at one town thirty minutes away.",
      "There was also a reputation problem of a particular kind — not a bad one, a fiddly one. The business had real five-star Google reviews, supplied as screenshots, and a verified 5.0 Yelp rating whose review count differed depending on which source you looked at. That is exactly the situation in which most agencies invent a tidy number.",
    ],
    diagnosis: [
      {
        title: "The geography lived in a footer",
        body: "Fifteen real service cities, and nothing on the web that was specifically about grooming in any of them. There was no page for a search in Concord, Berkeley, Novato or Vallejo to match against.",
      },
      {
        title: "Services were one list, not four subjects",
        body: "A full haircut, a bath and deshed, a nail and ear appointment, and 'mobile dog grooming' as a concept are four different searches with four different intents. They were one page.",
      },
      {
        title: "A base address that needed careful handling",
        body: "The business has a base address for NAP consistency, but customers never go there — grooming happens at their own home. Presenting it as a place to visit would have been both wrong and unhelpful.",
      },
      {
        title: "Real reviews with no single trustworthy aggregate",
        body: "Individual reviews were verifiable. The total count was not, because Yelp, Google and the screenshots disagreed. Publishing a made-up count would have been the easy option.",
      },
    ],
    built: [
      {
        heading: "The website",
        id: "website",
        items: [
          {
            title: "A page for each of the fifteen cities served",
            body: "One page per city, each naming its county and written about that place rather than produced from a template with the name swapped. El Sobrante — the verified home base — got its own hand-written page rather than being generated alongside the rest.",
          },
          {
            title: "Four service pages instead of one services list",
            body: "Mobile dog grooming, full haircuts and grooming, bath and deshedding, and nail and ear care. Each one is a real page about that service, which is what makes it capable of ranking for that search.",
          },
          {
            title: "A booking page and a working lead form",
            body: "A dedicated booking page, plus a contact form that emails a real inbox on submission and tells the visitor to call instead if the send fails — a silently-failing form on a lead-generation site is worse than no form.",
          },
          {
            title: "35 indexable pages in total",
            body: "Ten core pages, four service pages, fifteen service-area pages and six articles. All of them reachable by normal links, all in the sitemap, all canonical.",
          },
        ],
      },
      {
        heading: "The Google Business Profile and NAP",
        id: "profile",
        items: [
          {
            title: "Treated as a service-area business",
            body: "The base address is kept consistent for NAP purposes but is never presented anywhere on the site as somewhere a customer can go. Every CTA is about the van coming to them.",
          },
          {
            title: "Service list aligned to the service pages",
            body: "The services named on the profile and the services with pages on the site are the same services, with the same names. That agreement between profile and website is a large part of what 'relevance' means in local ranking.",
          },
        ],
      },
      {
        heading: "Reviews, handled honestly",
        id: "reviews",
        items: [
          {
            title: "Only reviews we could actually read were published",
            body: "Of the Google reviews supplied as screenshots, two were left out: one was visible only as a Google auto-translation into Portuguese with the English original hidden, and one showed only the owner's reply, not the customer's text. Misquoting a real customer to fill a testimonial slot was not worth it.",
          },
          {
            title: "No aggregate rating was invented",
            body: "The verified Yelp rating of 5.0 is stated because it is verified. No Google star average and no total review count appear anywhere, because the sources disagreed. The reviews page links to the live listings so the reader can see the current numbers themselves.",
          },
          {
            title: "No review or rating structured data",
            body: "No AggregateRating markup was added to conjure stars in search results. Google restricts self-serving review markup and the gain is cosmetic.",
          },
        ],
      },
    ],
    results: {
      shipped: [
        "Live on the client's own domain, petspaluxe.com, with canonicals, Open Graph URLs and structured data all pointing at the real domain rather than a temporary host.",
        "35 indexable URLs published in the XML sitemap, up from a presence that addressed one of fifteen served cities.",
        "LocalBusiness, Service, BreadcrumbList and FAQPage structured data across the site; no review or rating markup anywhere.",
        "A contact form that reports failures to the visitor rather than swallowing them.",
      ],
      measured: [],
      pending:
        "We have not published search performance figures for this build. Search Console is connected, but we have not exported and verified a dataset we would be willing to stand behind — and a percentage without a metric, a period and a source is not evidence. When there is a real before-and-after to show, it will appear here with all four.",
    },
    lessons: [
      {
        title: "For a mobile groomer, the website carries the geography",
        body: "The map pack will mostly show you near your base. Pages about the places you actually drive to are the only realistic route into those towns, which is why fifteen of this build's pages are service areas.",
      },
      {
        title: "A verified number beats a tidy one",
        body: "Publishing '5.0 on Yelp' and nothing else is less impressive than '5.0 from 40+ reviews'. It is also true, and it is the version that survives a customer checking.",
      },
      {
        title: "Leaving a testimonial slot empty is allowed",
        body: "Two real reviews were dropped because we could not read the customer's actual words. The page is slightly shorter and entirely trustworthy.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "sittin-pretty-pet-grooming",
    clientName: "Sittin' Pretty Pet Grooming",
    market: "Funkstown, MD",
    businessType: "Grooming salon",
    metaTitle: "Sittin' Pretty: Ranking a Salon in the Town Next Door",
    metaDescription:
      "A Maryland grooming salon sits in Funkstown, but its customers search for Hagerstown. How we built 33 pages around that gap without inventing a single fact.",
    h1: "Sittin' Pretty: the salon is in Funkstown, but everybody searches for Hagerstown",
    dek: "A long-established grooming salon in a small town whose customer base, and whose search volume, belongs to the larger town next to it.",
    publishedAt: "2026-09-15",
    atAGlance: [
      { label: "Business", value: "Sittin' Pretty Pet Grooming" },
      { label: "Market", value: "Funkstown, MD — Washington County" },
      { label: "Type", value: "Dog and cat grooming salon" },
      { label: "Pages built", value: "33 indexable pages" },
      { label: "Service areas", value: "11 towns" },
      { label: "Services", value: "6 dedicated service pages" },
    ],
    situation: [
      "Sittin' Pretty is an established grooming salon at 6 N Westside Ave in Funkstown, Maryland — a town of a few hundred people immediately south-east of Hagerstown. It has been grooming for a long time, it has a real local reputation and a real Facebook following, and its customers come from across Washington County.",
      "This is one of the most common structural problems in local search and one of the least discussed: the business's address and the business's market are different places. Almost nobody searches 'dog grooming Funkstown', because almost nobody lives in Funkstown. They search 'dog grooming Hagerstown' — and a salon whose entire web presence says Funkstown has nothing for that search to attach to.",
      "The business also came with several genuinely unverifiable facts, which is normal and is where most agency websites start making things up. Public directory data suggested the salon had been going since around 1996. The exact Google star rating and review count differed by source and by day. Nobody had confirmed the team's names.",
    ],
    diagnosis: [
      {
        title: "The addressable market was invisible",
        body: "Hagerstown, Halfway, Williamsport, Maugansville and the rest of Washington County are where the customers are. The site addressed one town of a few hundred people.",
      },
      {
        title: "Cage-free was a real differentiator with no page",
        body: "Cage-free grooming is a specific thing anxious owners search for and care about intensely. It was a mention, not a subject.",
      },
      {
        title: "Cat grooming was buried",
        body: "Cat grooming is comparatively rare, actively searched for, and much harder for an owner to find than dog grooming. Listing it in a bullet point wastes it.",
      },
      {
        title: "Several 'facts' were folklore",
        body: "A founding year that only public directories asserted, a star rating that moved depending on where you looked, service add-ons nobody had confirmed. Each one was an invitation to publish something plausible and wrong.",
      },
    ],
    built: [
      {
        heading: "The website",
        id: "website",
        items: [
          {
            title: "Eleven service-area pages, led by Hagerstown",
            body: "Funkstown, Hagerstown, Halfway, Williamsport, Maugansville, Long Meadow, Robinwood, Beaver Creek, Downsville, Cavetown and Boonsboro — each with something real to say about the drive and the area rather than a template with the town name substituted.",
          },
          {
            title: "Six service pages",
            body: "Dog grooming, dog bath and brush, cat grooming, nail trim and ear cleaning, deshedding treatment, and puppy's first groom. Cat grooming and puppy's first groom in particular are searches that a combined services page can never win.",
          },
          {
            title: "A dedicated cage-free page",
            body: "Not a paragraph on the homepage. Its own page, because 'cage free dog grooming near me' is a search made by a specific, motivated person who will choose the business that clearly says yes.",
          },
          {
            title: "33 indexable pages in total",
            body: "Ten core pages, six services, eleven service areas and six articles — every one linked from normal navigation and listed in the sitemap.",
          },
        ],
      },
      {
        heading: "Handling what could not be verified",
        id: "verification",
        items: [
          {
            title: "No founding year",
            body: "Public data pointed at around 1996, but the owner had not confirmed it. The site says 'decades' rather than a specific year. The moment it is confirmed it becomes a genuine trust asset; until then it would just be a number we made up.",
          },
          {
            title: "No star rating, no review count",
            body: "Sources conflicted and go stale. Instead of hardcoding a number that would quietly become wrong, the reviews and contact pages link to a live Google Maps search for the business, which is always current.",
          },
          {
            title: "No invented team or service list",
            body: "Owner and staff names are not published because they were not confirmed. Service add-ons beyond dog grooming, dog bathing and cat grooming are not claimed.",
          },
          {
            title: "Honest photo placeholders",
            body: "Nine real client photos and the real logo are used throughout. The three slots with no real photo yet — cat grooming, salon interior, storefront — render an aspect-locked placeholder rather than stock imagery, so the page never shows a salon that is not theirs.",
          },
        ],
      },
      {
        heading: "Conversion and profile",
        id: "conversion",
        items: [
          {
            title: "Every CTA goes to the phone",
            body: "The salon takes bookings by phone. No fake booking widget was added, because a booking form that produces an email nobody reads is worse than a phone number.",
          },
          {
            title: "Profile and site telling the same story",
            body: "The services on the Google Business Profile match the service pages on the site, and the NAP is identical across both. That consistency is the cheapest ranking work available and it is almost always partly broken.",
          },
        ],
      },
    ],
    results: {
      shipped: [
        "33 indexable pages published, built around Hagerstown and Washington County rather than around the salon's postal address.",
        "A dedicated page for cage-free grooming and for cat grooming — two specific, motivated searches the previous presence could not answer.",
        "Real logo and nine real client photos in use; honest placeholders, never stock, in the slots still waiting for real photography.",
        "No founding year, star rating, review count, team names or service add-ons published without confirmation.",
      ],
      measured: [],
      pending:
        "No search performance figures are published for this build yet. The site is built and Search Console is ready to be connected on launch; until there is an exported dataset with a metric, a period and a source behind it, there is nothing here worth showing you.",
    },
    lessons: [
      {
        title: "Your address and your market are often different places",
        body: "If your town is smaller than the town next door, the search volume belongs to the neighbour. The map pack will not solve that for you — pages will.",
      },
      {
        title: "The thing you assume everyone knows is the thing worth a page",
        body: "Cage-free is obvious inside the business and invisible outside it. The searches that convert best are usually the ones about something specific you already do and have never written down.",
      },
      {
        title: "'We don't know that yet' is a publishable answer",
        body: "Four separate facts on this build were left out because nobody had confirmed them. Nothing about the site is weaker for it, and every claim on it survives a customer checking.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  {
    slug: "bark-and-bork-mobile-pet-spa",
    clientName: "Bark and Bork Mobile Pet Spa",
    market: "Compton, CA",
    businessType: "Mobile dog grooming",
    metaTitle: "Bark and Bork: Mobile Grooming SEO in Greater LA",
    metaDescription:
      "A mobile pet spa in the largest grooming market in the US, with two different phone numbers on its own assets and a booking platform that had to stay. 34 pages.",
    h1: "Bark and Bork: a mobile spa in the biggest grooming market in the country",
    dek: "Greater Los Angeles has more grooming competition than anywhere else in the US. It also has more demand than anywhere else — if a business is specific enough about what it does and where it goes.",
    publishedAt: "2026-09-15",
    atAGlance: [
      { label: "Business", value: "Bark and Bork Mobile Pet Spa" },
      { label: "Market", value: "Compton, CA — Greater Los Angeles" },
      { label: "Type", value: "Mobile dog grooming — no storefront" },
      { label: "Pages built", value: "34 indexable pages" },
      { label: "Service areas", value: "13 cities" },
      { label: "Services", value: "8 dedicated service pages" },
    ],
    situation: [
      "Bark and Bork is a mobile pet spa based in Compton, working across greater Los Angeles out of a pink-wrapped van. Every appointment happens at the customer's own location — there is no salon to visit.",
      "Competing in Los Angeles as a mobile groomer is a volume problem and a specificity problem at the same time. There is enormous demand, and there are a lot of businesses chasing the generic version of it. What there is much less competition for is the specific version: dematting in Lynwood, flea and tick treatment in Gardena, a deshedding appointment in Long Beach.",
      "Two practical constraints shaped the build. First, the business already took bookings through an established online booking platform its customers knew, so any new site had to route to it rather than replace it. Second, the client's own assets disagreed about the phone number: the van wrap and the original business record showed one number, and a separately supplied business card showed a different one.",
    ],
    diagnosis: [
      {
        title: "Two phone numbers on a business's own materials",
        body: "A NAP inconsistency that a customer might never notice and that a search engine reads as ambiguity about which business this is. It also risks calls going to a number nobody answers.",
      },
      {
        title: "Eight services, one page",
        body: "Dematting, deshedding, flea and tick, anal gland expression, teeth brushing and the rest are separately searched, separately priced and separately urgent. Collapsed into one list, none of them can rank.",
      },
      {
        title: "A metro area, not a town",
        body: "'Greater Los Angeles' is not a place anyone searches for grooming in. Compton, Lynwood, Downey, Gardena, Inglewood and Long Beach are.",
      },
      {
        title: "An existing booking flow worth protecting",
        body: "Replacing a booking system customers already use, to make a website tidier, loses bookings. The temptation to build a shiny new form was the wrong instinct.",
      },
    ],
    built: [
      {
        heading: "Resolving the facts first",
        id: "facts",
        items: [
          {
            title: "The phone number was confirmed before anything was published",
            body: "Two independent sources — the van wrap signage and the client's original business record — agreed on one number, and the client confirmed it. That number is the only one that appears anywhere on the site or in the structured data. The business card's number is recorded in the project notes and published nowhere.",
          },
          {
            title: "No street address, anywhere",
            body: "Bark and Bork has no customer-facing location. Compton is the home base of the route, not a place to visit, and no street address appears on the site or in the schema. The business is described exactly as it operates.",
          },
        ],
      },
      {
        heading: "The website",
        id: "website",
        items: [
          {
            title: "Eight service pages",
            body: "Mobile dog grooming as the flagship, then full groom, bath and tidy, deshedding, dematting, flea and tick treatment, anal gland expression and teeth brushing. The specific ones matter most: someone searching for dematting has an urgent, expensive problem and very few results that clearly say yes.",
          },
          {
            title: "Thirteen city pages across the route",
            body: "Compton and Los Angeles as primary, then South Gate, Lynwood, Carson, Gardena, Long Beach, Inglewood, Paramount, Willowbrook, Downey, Bellflower and Hawthorne — the cities the van actually covers, each marked as primary or secondary to the route rather than all claimed equally.",
          },
          {
            title: "Every booking CTA points at the existing platform",
            body: "The site sends bookings to the client's established online booking system. No parallel booking form was invented, because two booking paths means one of them eventually gets ignored.",
          },
          {
            title: "34 indexable pages in total",
            body: "Eight core pages, eight services, thirteen service areas and five articles.",
          },
        ],
      },
      {
        heading: "Photography, honestly",
        id: "photos",
        items: [
          {
            title: "Real van photos where they existed",
            body: "The van interior with its stainless tub and grooming table, and the wrapped exterior, are real photos of the real van — the single most convincing asset a mobile groomer has, because it answers 'what is actually going to turn up outside my house?'",
          },
          {
            title: "Placeholders, not stock, everywhere else",
            body: "Every slot without a real photo renders an aspect-locked placeholder. The site is built so that dropping a real photo into one line of the data file replaces a placeholder with no other change — the gap is a to-do, not a design decision.",
          },
        ],
      },
    ],
    results: {
      shipped: [
        "34 indexable pages published, built around thirteen named cities and eight separately-searched services.",
        "One confirmed phone number across the entire site and its structured data, with the conflicting number published nowhere.",
        "No street address published anywhere for a business that has no customer-facing location.",
        "Booking routed to the client's existing platform rather than a replacement flow.",
      ],
      measured: [],
      pending:
        "No traffic, ranking or booking figures are published for this build. When Search Console holds a dataset we have exported and checked, the before-and-after goes here — with the metric, the time period and the source stated, not as a headline percentage.",
    },
    lessons: [
      {
        title: "Check the phone number before you build anything",
        body: "It sounds trivial. It is the single most common NAP problem we find, it is usually caused by a number changing years ago, and every place the old one survives is a call that goes nowhere.",
      },
      {
        title: "In a crowded market, specific beats broad",
        body: "Competing for 'dog grooming Los Angeles' as a one-van business is a losing game. Competing for dematting in Lynwood is winnable, and the person searching it needs you more.",
      },
      {
        title: "Don't replace a booking system that works",
        body: "A new website is not a reason to move a client's customers onto a new booking flow. Point at what they already use and spend the effort on getting more people to it.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
