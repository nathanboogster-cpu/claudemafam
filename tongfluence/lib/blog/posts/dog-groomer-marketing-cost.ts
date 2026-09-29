import type { BlogPost } from "../types";

// SEARCH INTENT
//   Primary:    dog groomer marketing cost
//   Secondary:  how much should a dog groomer spend on marketing, dog
//               grooming marketing budget, dog grooming marketing prices
//   Intent:     commercial investigation, price-checking.
//   Business:   frame the comparison as cost per booked appointment and
//               state our price plainly against the usual models.
export const post: BlogPost = {
  slug: "dog-groomer-marketing-cost",
  title: "How Much Does Dog Groomer Marketing Cost? What You Actually Pay For",
  metaTitle: "How Much Does Dog Groomer Marketing Cost? (Real Models)",
  metaDescription:
    "What dog groomer marketing costs under each model: do it yourself, a website builder, an agency retainer, per click and per lead. And the one number to compare.",
  excerpt:
    "Do it yourself, a website builder, an agency retainer, per click, per lead. What each really costs a groomer, and the one number to compare them on.",
  intro:
    "The honest answer is “it depends on how you pay.” There are five common ways, and each hides its cost in a different place. Here is what each one really costs a grooming business, and the one number that lets you compare them fairly.",
  primaryQuery: "dog groomer marketing cost",
  secondaryQueries: ["how much should a dog groomer spend on marketing", "dog grooming marketing budget"],
  publishedAt: "2026-09-29",
  photo: 3,
  takeaways: [
    "The number to compare is cost per booked appointment, not the monthly fee.",
    "Doing it yourself is not free. It costs evenings, for weeks, and then upkeep.",
    "Retainers usually run hundreds to thousands a month. Ask what you own if you leave.",
    "Per-click and per-lead costs never go away and usually go up.",
  ],
  sections: [
    {
      id: "models",
      heading: "The five ways you pay",
      blocks: [
        {
          type: "ol",
          items: [
            "**Your own time.** Free in cash. Expensive in evenings.",
            "**A website builder plus your time.** A small monthly fee for the tool, and the work is still yours.",
            "**An agency retainer.** A flat monthly fee for a set of services. Often a setup fee on top.",
            "**Per click.** Google or Facebook ads. You pay each time someone clicks.",
            "**Per lead.** Local Services Ads or a lead-selling company. You pay each time someone contacts you.",
          ],
        },
      ],
    },
    {
      id: "diy",
      heading: "Doing it yourself",
      blocks: [
        {
          type: "p",
          text: "Everything that matters for a groomer can be done without hiring anyone. Finishing your Google profile is an afternoon. A page per service and per town is a few weeks of evenings the first time. Asking for reviews is a habit. We wrote [the whole method](/resources/how-to-rank-dog-grooming-business-on-google) so you can.",
        },
        {
          type: "p",
          text: "The cost is time you are not grooming, and the upkeep after. Most groomers who start this do the profile and stop. That is still worth doing.",
        },
      ],
    },
    {
      id: "builder",
      heading: "A website builder",
      blocks: [
        {
          type: "p",
          text: "Builders commonly cost somewhere between a takeout dinner and a tank of gas each month. That is fine. The problem is not the tool. It is that most builder sites end up as five pages: Home, About, Services, Gallery, Contact. A site like that cannot show up for twenty different searches. It has nothing to match them with. The builder is cheap. The site it usually produces is not worth much.",
        },
      ],
    },
    {
      id: "retainer",
      heading: "An agency retainer",
      blocks: [
        {
          type: "p",
          text: "General marketing agencies commonly charge from a few hundred to a few thousand dollars a month, often with a setup or build fee of a few thousand on top, and often on a six or twelve month contract. That is not greed. A general agency starts from zero on every client, and somebody has to pay for that.",
        },
        {
          type: "p",
          text: "The questions that matter: What is included each month? Is the Google profile work in it? Is there a charge per page when you add a service? And what do you own if you leave? A retainer where the agency owns your domain is far more expensive than its price.",
        },
      ],
    },
    {
      id: "per-click",
      heading: "Per click and per lead",
      blocks: [
        {
          type: "p",
          text: "Ads cost whatever the auction says that day. For local services, a click is commonly a few dollars, and a lead through Local Services Ads is commonly more than a click and less than a groom. Those costs never go away, and in most markets they go up over time.",
        },
        {
          type: "p",
          text: "Ads are not bad. They bring appointments this week. But they are a cost you pay every time, forever. A profile and a website that rank keep working after the work is done. [When Google ads make sense for a groomer](/blog/google-ads-for-dog-groomers).",
        },
      ],
    },
    {
      id: "compare",
      heading: "The one number to compare",
      blocks: [
        {
          type: "p",
          text: "**Cost per booked appointment.** Take what you pay in a month. Divide by the appointments it brought in. That is the number. A $300 service that brings six extra grooms costs $50 each. A $1,500 service that brings ten costs $150 each. A “free” builder that brings none costs infinity.",
        },
        {
          type: "p",
          text: "Then ask what one appointment is really worth to you. A grooming client who comes back every six weeks is worth many visits, not one. That is why a small, steady flow of the right clients is worth more than a big spike of the wrong ones.",
        },
        {
          type: "callout",
          label: "A simple test",
          text: "Work out what one new regular client is worth to you over a year. Then work out how many new regulars a month a service would need to bring in to pay for itself. If the answer is one or two, the risk is small.",
        },
      ],
    },
    {
      id: "hidden",
      heading: "The hidden costs to ask about",
      blocks: [
        {
          type: "ul",
          items: [
            "**Setup or build fees.** Often larger than the monthly fee.",
            "**Per-page fees.** A charge every time you add a service or a town. A site you pay to change is a site that never changes.",
            "**Contracts.** Six or twelve months, whether it works or not.",
            "**Owning nothing.** Your domain or Google profile in their name. Leaving means starting over.",
            "**Reports you do not read.** If the monthly report is about impressions and awareness, you are paying for the report.",
          ],
        },
      ],
    },
    {
      id: "tongfluence",
      heading: "What we charge, and why",
      blocks: [
        {
          type: "p",
          text: "Tongfluence is $297 a month. That covers an SEO-built website with a page per service and town, Google Business Profile optimization, a review request system, and monthly search work based on your real data. No setup fee. No per-page fee. No contract. You own the domain, the content and the profile. It costs that because we only do grooming, so the page layout, the profile checklist and the review system already exist.",
        },
        { type: "proof" },
      ],
    },
  ],
  faqs: [
    {
      question: "How much should a dog groomer spend on marketing?",
      answer:
        "There is no right share of revenue. The useful test is cost per booked appointment. If a channel brings a steady flow of new clients at a price you would gladly pay again, keep it. If you cannot measure it, fix that or stop.",
    },
    {
      question: "Is it cheaper to do dog groomer marketing myself?",
      answer:
        "In cash, yes. In time, it is a few weeks of evenings the first time, then upkeep every month. If you would rather spend those hours grooming, a service that costs less than a couple of extra grooms a month is a fair trade.",
    },
    {
      question: "Why is Tongfluence only $297 a month?",
      answer:
        "Because we do one thing for one industry. There is no research phase, no custom design phase and no account manager. The website structure, the profile checklist and the review system are already built. A general agency charges more because it starts from zero every time.",
    },
    {
      question: "Are ads or SEO cheaper for a dog groomer?",
      answer:
        "Ads cost less to start and more forever. Search work costs more up front in time or fees, then keeps bringing calls after the work is done. Most groomers who do both find the search side brings the cheaper appointment over a year.",
    },
  ],
  related: [
    { href: "/dog-groomer-marketing", label: "Dog groomer marketing, explained" },
    { href: "/blog/best-dog-groomer-marketing-service", label: "How to choose a marketing service" },
    { href: "/faq", label: "Questions groomers ask" },
    { href: "/book", label: "Book a call" },
  ],
  cta: {
    title: "One price. Here is what it covers.",
    body: "On a short call we look at your Google profile and your current site and tell you what we would change. Then you can work out what one extra regular client is worth to you.",
  },
};
