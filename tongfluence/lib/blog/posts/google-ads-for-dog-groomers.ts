import type { BlogPost } from "../types";

// SEARCH INTENT
//   Primary:    google ads for dog groomers
//   Secondary:  local services ads for dog groomers, google local services
//               ads pet grooming, google ads pet grooming
//   Intent:     informational-commercial. Owner deciding whether to run
//               ads and which kind.
//   Business:   we run Local Services Ads and search ads for groomers;
//               state when each fits and what has to be in place first.
export const post: BlogPost = {
  slug: "google-ads-for-dog-groomers",
  title: "Google Ads for Dog Groomers: Local Services Ads vs Search Ads",
  metaTitle: "Google Ads for Dog Groomers: Local Services Ads vs Search Ads",
  metaDescription:
    "The two kinds of Google ads a dog groomer can run, how each is paid for, which one fits a grooming business, and what to have in place before you spend a dollar.",
  excerpt:
    "Two kinds of Google ads, paid two different ways. Which one fits a groomer, and the four things to have in place before you spend a dollar.",
  intro:
    "Google sells groomers two very different kinds of ads. One is paid per lead and sits at the very top of the page. The other is paid per click and needs a good landing page. Here is how each works, which one fits a grooming business, and what to have ready first.",
  primaryQuery: "google ads for dog groomers",
  secondaryQueries: ["local services ads for dog groomers", "google local services ads pet grooming"],
  publishedAt: "2026-09-29",
  photo: 4,
  takeaways: [
    "Local Services Ads charge per lead and show above everything else, with a Google badge.",
    "Search ads charge per click and only work if the page they land on convinces.",
    "Finish your Google profile and service pages first. Ads land on them.",
    "Judge ads by cost per booked appointment, checked monthly.",
  ],
  sections: [
    {
      id: "two-kinds",
      heading: "The two kinds of Google ads",
      blocks: [
        {
          type: "p",
          text: "Search for “dog groomer near me” and look at the page from the top. First, sometimes, a row of businesses with a green check mark. Those are **Local Services Ads**. Then text ads marked “Sponsored.” Those are **search ads**. Then the map. Then the list of websites. Both kinds of ads are above the map, which is why groomers ask about them.",
        },
      ],
    },
    {
      id: "lsa",
      heading: "Local Services Ads: pay per lead",
      blocks: [
        {
          type: "p",
          text: "Local Services Ads are the simplest ads a groomer can run. You do not write an ad. Google shows your business name, your rating, your hours and a call button. You pay when someone contacts you through the ad, not when they click. Google checks your business before it lets you run them, and gives you a badge when you pass.",
        },
        {
          type: "ul",
          items: [
            "**Good:** the lead is someone who called or messaged. You set a weekly budget. You can dispute leads that were not real.",
            "**Good:** your reviews show right in the ad, so the review habit pays twice.",
            "**Watch:** you must answer the phone. A missed call is a paid lead you did not get.",
            "**Watch:** ranking within the ads depends partly on how fast you respond and how many reviews you have.",
          ],
        },
      ],
    },
    {
      id: "search",
      heading: "Search ads: pay per click",
      blocks: [
        {
          type: "p",
          text: "Search ads are the text ads. You pick the searches you want to show for, write the ad, and pay each time someone clicks. The click lands on a page of your website. That page does the convincing. If it is a homepage that does not mention what they searched for, you paid for nothing.",
        },
        {
          type: "ul",
          items: [
            "**Good:** you can target one service in one town. “Deshedding in Marietta” lands on your deshedding page.",
            "**Good:** you control the message and the offer.",
            "**Watch:** a click is not a call. The page has to have a price, real photos and a tap-to-call number.",
            "**Watch:** without good settings, you pay for clicks from people looking for grooming jobs, grooming schools, or dog groomer in a town you do not serve.",
          ],
        },
      ],
    },
    {
      id: "which",
      heading: "Which one for a grooming business",
      blocks: [
        {
          type: "p",
          text: "For most groomers, **Local Services Ads first**. You pay for contact, not curiosity. Your reviews do the selling. There is nothing to write and no landing page to get wrong.",
        },
        {
          type: "p",
          text: "**Search ads** make sense when you want to push one service, one town, or one offer. A new deshedding service. A town your van just added. A slow season. They need a real page to land on, which is why the site comes first.",
        },
        {
          type: "p",
          text: "Some groomers run both. That is fine. They do different jobs.",
        },
      ],
    },
    {
      id: "before",
      heading: "Four things to have in place first",
      blocks: [
        {
          type: "ol",
          items: [
            "**A finished Google Business Profile.** Local Services Ads pull from it. Search ads sit next to it. [What to fix on it](/google-business-profile-for-dog-groomers).",
            "**A page for each service you will advertise.** The ad click lands here. A “Services” page wastes the click.",
            "**A tap-to-call number and a price range on that page.** The two things a paid visitor checks before calling.",
            "**Call tracking.** So you know which calls came from ads and which came from search. Without it you cannot judge the ads.",
          ],
        },
        {
          type: "callout",
          label: "Why this order",
          text: "Ads send people to your profile and your site. If those are not ready, ads pay to show people a half-finished business. Fix the free things first. Then ads work better and cost less.",
        },
      ],
    },
    {
      id: "budget",
      heading: "How to set a budget and judge it",
      blocks: [
        {
          type: "p",
          text: "Start with a weekly amount you would not miss. Run it for a full month. Then count booked appointments, not clicks or leads, and divide. That is your cost per appointment. Compare it with what a new regular client is worth over a year. If it is clearly worth it, raise the budget a little. If it is not, fix the page or the profile before you spend more.",
        },
        {
          type: "p",
          text: "The one thing ads cannot do is keep working after you stop paying. Your profile and your website can. That is why we treat ads as a way to bring appointments sooner, on top of the search work, not instead of it. [More on cost](/blog/dog-groomer-marketing-cost).",
        },
      ],
    },
    {
      id: "we-run-them",
      heading: "We run both for groomers",
      blocks: [
        {
          type: "p",
          text: "Tongfluence runs Google Local Services Ads and search ads for grooming businesses that want appointments sooner. The $297 a month covers the search side: the website, the profile, the review system and the monthly work. Ads are separate. Ask about them when you [book a call](/book), and we will tell you honestly whether they make sense for your business yet.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "Are Google Local Services Ads worth it for a dog groomer?",
      answer:
        "Often, yes, once your Google profile and reviews are in good shape. You pay per lead, not per click, and your reviews show in the ad. The main risk is missed calls. Every one is a paid lead you did not get.",
    },
    {
      question: "How much do Google ads cost for a dog groomer?",
      answer:
        "Whatever the auction says in your market that day. A click is commonly a few dollars. A Local Services lead is commonly more than a click and less than a groom. Set a weekly budget you would not miss, run it a month, and judge it by cost per booked appointment.",
    },
    {
      question: "Should I run Google ads or do SEO first?",
      answer:
        "Do the free things first: finish your profile, build a page per service, add a tap-to-call number. Ads land on those. Then run ads if you want appointments sooner. Search work keeps bringing calls after you stop paying. Ads do not.",
    },
    {
      question: "Can I run Google ads without a website?",
      answer:
        "Local Services Ads, yes. They use your Google profile and a call button. Search ads need a page to land on. Without one the click goes to your homepage or nowhere useful, and you pay for it either way.",
    },
  ],
  related: [
    { href: "/dog-grooming-lead-generation", label: "Turning searches into calls" },
    { href: "/google-business-profile-for-dog-groomers", label: "Your Google Business Profile" },
    { href: "/blog/facebook-ads-for-dog-groomers", label: "Facebook and Instagram ads for groomers" },
    { href: "/dog-groomer-marketing", label: "Search, social and ads compared" },
  ],
  cta: {
    title: "Not sure if ads make sense yet?",
    body: "On a short call we look at your Google profile and your site and tell you whether they are ready for ads, and what to fix first if not.",
  },
};
