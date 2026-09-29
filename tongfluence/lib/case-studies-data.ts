// ---------------------------------------------------------------------------
// CASE STUDIES
//
// Every fact in this file can be checked by opening the site it describes.
// The client names, markets and business types are public: those businesses
// publish them themselves. The page counts and the choices behind each site
// come from the sites.
//
// WHAT IS LEFT OUT ON PURPOSE: rankings, traffic, views, clicks, call counts,
// lead counts, review growth, revenue. None of that has been measured and
// exported yet. Each case study says so in its own words instead of quietly
// skipping the question. An agency case study with no numbers and no reason
// is how readers learn to assume the numbers are bad.
//
// When real Search Console and Google Business Profile data exists, it goes
// in `results.measured` with what was measured, when, where it came from,
// and what changed. Never as a bare percentage.
//
// Written to a 5th-grade reading level: short sentences, common words.
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
      "Rebuilding a mobile dog groomer's website around the fifteen Bay Area cities its van really serves: 35 pages, no street address, and honest review handling.",
    h1: "Pet Spa Luxe: one van, six counties, and a website that only named one town",
    dek: "A mobile grooming business whose van goes from Berkeley to Napa. Its website only spoke to the one town it is based in.",
    publishedAt: "2026-09-15",
    atAGlance: [
      { label: "Business", value: "Pet Spa Luxe" },
      { label: "Market", value: "El Sobrante, CA" },
      { label: "Type", value: "Mobile dog grooming, no walk-in salon" },
      { label: "Live at", value: "petspaluxe.com" },
      { label: "Pages built", value: "35 pages" },
      { label: "Service areas", value: "15 cities across 6 counties" },
    ],
    situation: [
      "Pet Spa Luxe is a luxury mobile dog grooming business based in El Sobrante, in the East Bay. The van travels a long way. It covers Contra Costa, Alameda, Marin, Solano, Napa and Sonoma counties. The business has a strong name, with a 5.0 star rating on Yelp.",
      "The problem was location. A mobile business cannot lean on the map the way a salon can. Google's map results depend a lot on how close the searcher is to the business. El Sobrante is not close to Napa. Someone in Walnut Creek searching for mobile dog grooming was not going to find a business whose whole website pointed at one town thirty minutes away.",
      "There was also a small but tricky reviews problem. The business had real five-star Google reviews, sent to us as screenshots. It had a real 5.0 Yelp rating. But the review count was different depending on where you looked. That is exactly the spot where most agencies make up a tidy number.",
    ],
    diagnosis: [
      {
        title: "The towns lived in a footer",
        body: "Fifteen real service cities, and nothing on the web about grooming in any of them. A search in Concord, Berkeley, Novato or Vallejo had no page to match.",
      },
      {
        title: "Services were one list, not four subjects",
        body: "A full haircut, a bath and deshed, a nail and ear visit, and mobile grooming itself are four different searches. They were one page.",
      },
      {
        title: "A home address that needed care",
        body: "The business has a base address so its details match everywhere. But customers never go there. Grooming happens at their home. Showing it as a place to visit would have been wrong and unhelpful.",
      },
      {
        title: "Real reviews with no one trusted total",
        body: "Each review could be checked. The total count could not. Yelp, Google and the screenshots did not agree. Making up a count would have been the easy way out.",
      },
    ],
    built: [
      {
        heading: "The website",
        id: "website",
        items: [
          {
            title: "A page for each of the fifteen cities",
            body: "One page per city. Each one names its county and is written about that place. Not a template with the name swapped. El Sobrante, the home base, got its own hand-written page.",
          },
          {
            title: "Four service pages instead of one list",
            body: "Mobile dog grooming, full haircuts and grooming, bath and deshedding, and nail and ear care. Each one is a real page about that service. That is what lets it rank for that search.",
          },
          {
            title: "A booking page and a working contact form",
            body: "A booking page, plus a contact form that emails a real inbox. If the send fails, the form tells the visitor to call instead. A form that fails quietly is worse than no form.",
          },
          {
            title: "35 pages in total",
            body: "Ten core pages, four service pages, fifteen city pages and six articles. All of them can be reached by normal links. All of them are in the sitemap.",
          },
        ],
      },
      {
        heading: "The Google Business Profile and business details",
        id: "profile",
        items: [
          {
            title: "Set up as a service-area business",
            body: "The base address stays the same everywhere so the details match. But the site never shows it as a place a customer can go. Every call to action is about the van coming to them.",
          },
          {
            title: "Services list matched to the service pages",
            body: "The services on the profile and the services with pages on the site are the same, with the same names. That match is a big part of what Google means by a good fit.",
          },
        ],
      },
      {
        heading: "Reviews, handled honestly",
        id: "reviews",
        items: [
          {
            title: "Only reviews we could really read were used",
            body: "Two of the Google reviews sent as screenshots were left out. One only showed as a Google translation into Portuguese, with the English hidden. One only showed the owner's reply, not the customer's words. Misquoting a real customer to fill a spot was not worth it.",
          },
          {
            title: "No made-up star total",
            body: "The 5.0 Yelp rating is shown because it is real. No Google star average and no total review count appear anywhere, because the sources did not agree. The reviews page links to the live listings, so the reader can see the current numbers themselves.",
          },
          {
            title: "No hidden star code",
            body: "No hidden code was added to get stars in search results. Google restricts that, and the gain is only cosmetic.",
          },
        ],
      },
    ],
    results: {
      shipped: [
        "Live on the client's own domain, petspaluxe.com. Every page points to the real domain, not a temporary one.",
        "35 pages in the sitemap, up from a website that spoke to one of fifteen cities.",
        "The hidden labels that tell Google what each page is, on every page. No star-rating code anywhere.",
        "A contact form that tells the visitor when a send fails, instead of hiding it.",
      ],
      measured: [],
      pending:
        "We have not shown search results for this site. Search Console is connected. But we have not checked a set of data we would stand behind. A percentage with no metric, no dates and no source is not proof. When there is a real before-and-after to show, it will appear here with all of those.",
    },
    lessons: [
      {
        title: "For a mobile groomer, the website carries the towns",
        body: "The map will mostly show you near your base. Pages about the places you really drive to are the only real way into those towns. That is why fifteen of this site's pages are city pages.",
      },
      {
        title: "A real number beats a tidy one",
        body: "Saying '5.0 on Yelp' and nothing else looks less impressive than '5.0 from 40+ reviews'. But it is true, and it survives a customer checking.",
      },
      {
        title: "Leaving a review spot empty is allowed",
        body: "Two real reviews were dropped because we could not read the customer's real words. The page is a little shorter and fully trusted.",
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
      "A Maryland grooming salon sits in Funkstown, but its customers search for Hagerstown. How we built 33 pages around that gap without making up a single fact.",
    h1: "Sittin' Pretty: the salon is in Funkstown, but everybody searches for Hagerstown",
    dek: "A long-running grooming salon in a small town. Its customers, and the searches, belong to the bigger town next door.",
    publishedAt: "2026-09-15",
    atAGlance: [
      { label: "Business", value: "Sittin' Pretty Pet Grooming" },
      { label: "Market", value: "Funkstown, MD, in Washington County" },
      { label: "Type", value: "Dog and cat grooming salon" },
      { label: "Pages built", value: "33 pages" },
      { label: "Service areas", value: "11 towns" },
      { label: "Services", value: "6 service pages" },
    ],
    situation: [
      "Sittin' Pretty is a grooming salon at 6 N Westside Ave in Funkstown, Maryland. Funkstown is a town of a few hundred people, just south-east of Hagerstown. The salon has been grooming for a long time. It has a real local name and a real Facebook following. Its customers come from across Washington County.",
      "This is one of the most common problems in local search, and one of the least talked about. The business's address and the business's market are two different places. Almost nobody searches 'dog grooming Funkstown', because almost nobody lives in Funkstown. They search 'dog grooming Hagerstown'. A salon whose whole website says Funkstown has nothing for that search to find.",
      "The business also came with several facts nobody could confirm. That is normal. It is also where most agency websites start making things up. Public listings said the salon had been going since about 1996. The exact Google star rating and review count changed by source and by day. Nobody had confirmed the team's names.",
    ],
    diagnosis: [
      {
        title: "The real market could not be seen",
        body: "Hagerstown, Halfway, Williamsport, Maugansville and the rest of Washington County are where the customers are. The site spoke to one town of a few hundred people.",
      },
      {
        title: "Cage-free grooming had no page",
        body: "Cage-free grooming is something worried owners search for and care about a lot. It was a mention, not a subject.",
      },
      {
        title: "Cat grooming was buried",
        body: "Cat grooming is rare, searched for, and much harder for an owner to find than dog grooming. Listing it as a bullet point wastes it.",
      },
      {
        title: "Several 'facts' were just stories",
        body: "A founding year that only public listings claimed. A star rating that moved depending on where you looked. Add-on services nobody had confirmed. Each one was a chance to post something that sounds right and is wrong.",
      },
    ],
    built: [
      {
        heading: "The website",
        id: "website",
        items: [
          {
            title: "Eleven town pages, led by Hagerstown",
            body: "Funkstown, Hagerstown, Halfway, Williamsport, Maugansville, Long Meadow, Robinwood, Beaver Creek, Downsville, Cavetown and Boonsboro. Each one says something real about the drive and the area. Not a template with the town name swapped.",
          },
          {
            title: "Six service pages",
            body: "Dog grooming, dog bath and brush, cat grooming, nail trim and ear cleaning, deshedding, and puppy's first groom. Cat grooming and puppy's first groom are searches that one mixed services page can never win.",
          },
          {
            title: "A page just for cage-free grooming",
            body: "Not a paragraph on the homepage. Its own page. 'Cage free dog grooming near me' is a search made by a specific, motivated person. They will pick the business that clearly says yes.",
          },
          {
            title: "33 pages in total",
            body: "Ten core pages, six services, eleven towns and six articles. Every one is linked from the normal menu and listed in the sitemap.",
          },
        ],
      },
      {
        heading: "Handling what could not be confirmed",
        id: "verification",
        items: [
          {
            title: "No founding year",
            body: "Public data pointed at about 1996, but the owner had not confirmed it. The site says 'decades' instead of a year. Once it is confirmed, it becomes a real trust point. Until then, it would just be a number we made up.",
          },
          {
            title: "No star rating, no review count",
            body: "Sources did not agree, and they go stale. Instead of typing in a number that would quietly become wrong, the reviews and contact pages link to a live Google Maps search for the business. That is always current.",
          },
          {
            title: "No made-up team or service list",
            body: "Owner and staff names are not on the site because they were not confirmed. Add-on services beyond dog grooming, dog bathing and cat grooming are not claimed.",
          },
          {
            title: "Honest photo placeholders",
            body: "Nine real client photos and the real logo are used across the site. Three spots have no real photo yet: cat grooming, the salon inside, and the storefront. Those show a plain placeholder instead of a stock photo. The page never shows a salon that is not theirs.",
          },
        ],
      },
      {
        heading: "Getting the call, and the profile",
        id: "conversion",
        items: [
          {
            title: "Every button goes to the phone",
            body: "The salon takes bookings by phone. No fake booking widget was added. A booking form that sends an email nobody reads is worse than a phone number.",
          },
          {
            title: "Profile and site tell the same story",
            body: "The services on the Google profile match the service pages on the site. The name, address and phone are the same on both. That match is the cheapest ranking work there is, and it is almost always partly broken.",
          },
        ],
      },
    ],
    results: {
      shipped: [
        "33 pages, built around Hagerstown and Washington County instead of the salon's mailing address.",
        "A page just for cage-free grooming and a page just for cat grooming. Two specific searches the old site could not answer.",
        "The real logo and nine real client photos in use. Honest placeholders, never stock, in the spots still waiting for real photos.",
        "No founding year, star rating, review count, team names or add-on services posted without confirmation.",
      ],
      measured: [],
      pending:
        "No search results are shown for this site yet. The site is built, and Search Console is ready to connect at launch. Until there is a set of data with a metric, dates and a source behind it, there is nothing here worth showing you.",
    },
    lessons: [
      {
        title: "Your address and your market are often two different places",
        body: "If your town is smaller than the town next door, the searches belong to the neighbor. The map will not solve that for you. Pages will.",
      },
      {
        title: "The thing you think everyone knows is the thing worth a page",
        body: "Cage-free is obvious inside the business and invisible outside it. The searches that bring the best clients are usually about something specific you already do and never wrote down.",
      },
      {
        title: "'We don't know that yet' is a fine answer",
        body: "Four separate facts were left off this site because nobody had confirmed them. The site is no weaker for it. And every claim on it survives a customer checking.",
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
      "A mobile pet spa in the biggest grooming market in the US, with two different phone numbers on its own materials and a booking app that had to stay. 34 pages.",
    h1: "Bark and Bork: a mobile spa in the biggest grooming market in the country",
    dek: "Greater Los Angeles has more grooming competition than anywhere else in the US. It also has more demand than anywhere else, if a business is clear about what it does and where it goes.",
    publishedAt: "2026-09-15",
    atAGlance: [
      { label: "Business", value: "Bark and Bork Mobile Pet Spa" },
      { label: "Market", value: "Compton, CA, in Greater Los Angeles" },
      { label: "Type", value: "Mobile dog grooming, no shop" },
      { label: "Pages built", value: "34 pages" },
      { label: "Service areas", value: "13 cities" },
      { label: "Services", value: "8 service pages" },
    ],
    situation: [
      "Bark and Bork is a mobile pet spa based in Compton. It works across greater Los Angeles out of a pink van. Every visit happens at the customer's own place. There is no salon to visit.",
      "Competing in Los Angeles as a mobile groomer is two problems at once. There is huge demand. There are also a lot of businesses chasing the plain version of it. There is much less competition for the specific version. Dematting in Lynwood. Flea and tick treatment in Gardena. A deshedding visit in Long Beach.",
      "Two real-world limits shaped the build. First, the business already took bookings through an online booking app its customers knew. Any new site had to send people to it, not replace it. Second, the client's own materials did not agree on the phone number. The van and the original business record showed one number. A business card showed a different one.",
    ],
    diagnosis: [
      {
        title: "Two phone numbers on the business's own materials",
        body: "A customer might never notice. But a search engine reads it as not being sure which business this is. It also risks calls going to a number nobody answers.",
      },
      {
        title: "Eight services, one page",
        body: "Dematting, deshedding, flea and tick, anal gland expression, teeth brushing and the rest are each searched for on their own. Each has its own price and its own urgency. Squeezed into one list, none of them can rank.",
      },
      {
        title: "A metro area, not a town",
        body: "'Greater Los Angeles' is not a place anyone searches for grooming in. Compton, Lynwood, Downey, Gardena, Inglewood and Long Beach are.",
      },
      {
        title: "A booking app worth keeping",
        body: "Replacing a booking system customers already use, just to make a website tidier, loses bookings. The urge to build a shiny new form was the wrong one.",
      },
    ],
    built: [
      {
        heading: "Sorting out the facts first",
        id: "facts",
        items: [
          {
            title: "The phone number was confirmed before anything went live",
            body: "Two separate sources agreed on one number: the van signage and the client's original business record. The client confirmed it. That number is the only one that appears anywhere on the site. The business card's number is noted in the project files and shown nowhere.",
          },
          {
            title: "No street address, anywhere",
            body: "Bark and Bork has no place for customers to visit. Compton is the home base of the route, not a shop. No street address appears on the site. The business is described exactly as it works.",
          },
        ],
      },
      {
        heading: "The website",
        id: "website",
        items: [
          {
            title: "Eight service pages",
            body: "Mobile dog grooming as the main one. Then full groom, bath and tidy, deshedding, dematting, flea and tick treatment, anal gland expression and teeth brushing. The specific ones matter most. Someone searching for dematting has an urgent, costly problem and very few results that clearly say yes.",
          },
          {
            title: "Thirteen city pages across the route",
            body: "Compton and Los Angeles first. Then South Gate, Lynwood, Carson, Gardena, Long Beach, Inglewood, Paramount, Willowbrook, Downey, Bellflower and Hawthorne. These are the cities the van really covers. Each is marked as a main or a secondary stop on the route, not all claimed equally.",
          },
          {
            title: "Every booking button points at the app they already use",
            body: "The site sends bookings to the client's own booking app. No second booking form was made. Two booking paths means one of them gets ignored.",
          },
          {
            title: "34 pages in total",
            body: "Eight core pages, eight services, thirteen cities and five articles.",
          },
        ],
      },
      {
        heading: "Photos, honestly",
        id: "photos",
        items: [
          {
            title: "Real van photos where they existed",
            body: "The inside of the van, with its steel tub and grooming table, and the wrapped outside. Real photos of the real van. This is the single most convincing thing a mobile groomer has. It answers 'what is going to show up outside my house?'",
          },
          {
            title: "Placeholders, not stock, everywhere else",
            body: "Every spot without a real photo shows a plain placeholder. Dropping a real photo into one line of the data file replaces it with no other change. The gap is a to-do, not a design choice.",
          },
        ],
      },
    ],
    results: {
      shipped: [
        "34 pages, built around thirteen named cities and eight services people search for on their own.",
        "One confirmed phone number across the whole site. The other number appears nowhere.",
        "No street address anywhere, for a business that has no place to visit.",
        "Bookings sent to the client's own app, not a new form.",
      ],
      measured: [],
      pending:
        "No traffic, ranking or booking figures are shown for this site. When Search Console holds a set of data we have checked, the before-and-after goes here. With what was measured, the dates, and where it came from. Not as a headline percentage.",
    },
    lessons: [
      {
        title: "Check the phone number before you build anything",
        body: "It sounds small. It is the most common contact-details problem we find. It usually comes from a number that changed years ago. Every place the old one survives is a call that goes nowhere.",
      },
      {
        title: "In a crowded market, specific beats broad",
        body: "Competing for 'dog grooming Los Angeles' as a one-van business is a losing game. Competing for dematting in Lynwood can be won. And the person searching for it needs you more.",
      },
      {
        title: "Don't replace a booking system that works",
        body: "A new website is not a reason to move a client's customers onto a new booking flow. Point at what they already use. Spend the effort on getting more people to it.",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
