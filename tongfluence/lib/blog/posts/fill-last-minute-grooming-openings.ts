import type { BlogPost } from "../types";

// SEARCH INTENT
//   Primary:    how to fill last minute grooming openings
//   Secondary:  dog grooming cancellation list, grooming cancellations,
//               reduce no shows dog grooming
//   Intent:     informational, operational. Groomer with a gap today.
//   Business:   the "more appointments" cluster from the retention side.
export const post: BlogPost = {
  slug: "fill-last-minute-grooming-openings",
  title: "How to Fill Last-Minute Dog Grooming Openings and Cancellations",
  metaTitle: "How to Fill Last-Minute Grooming Openings and Cancellations",
  metaDescription:
    "How groomers fill last-minute openings: a cancellation list, the one text that fills a gap, reminders that cut no-shows, and a fair deposit policy.",
  excerpt:
    "A cancellation list, the one text that fills a gap in an hour, reminders that cut no-shows, and a fair deposit policy. Nothing to buy.",
  intro:
    "A cancellation at 8am is a hole in today's income. The groomers who fill it by 9am are not lucky. They built a list, and they send one text. Here is the whole system, and nothing on it costs money.",
  primaryQuery: "how to fill last minute grooming openings",
  secondaryQueries: ["dog grooming cancellation list", "reduce no shows dog grooming"],
  publishedAt: "2026-09-29",
  photo: 9,
  takeaways: [
    "Ask at booking: “Want a text if a sooner spot opens?” That is the whole list.",
    "One short text to the list fills most gaps within the hour.",
    "Reminders two days out and the morning of cut no-shows more than any policy.",
    "A small deposit for new clients is fair. A discount for every gap is not.",
  ],
  sections: [
    {
      id: "why-gaps",
      heading: "Why gaps happen",
      blocks: [
        {
          type: "p",
          text: "Dogs get sick. Owners forget. Kids have a fever. Some of it you cannot stop. But two things make it worse: nobody was reminded, and nobody was waiting for the slot. Fix those two and most gaps fill themselves.",
        },
      ],
    },
    {
      id: "list",
      heading: "Build the cancellation list",
      blocks: [
        {
          type: "p",
          text: "Every time you book someone two or three weeks out, ask one question: “Want a text if a spot opens sooner?” Most say yes. Write their name, their dog and the days they can do in a note, a spreadsheet, or the flag in your booking app. That is the list. In a month you will have twenty names on it.",
        },
        {
          type: "p",
          text: "For a mobile groomer, add the town. A cancellation in Compton is best filled by the next dog in Compton, not one forty minutes away.",
        },
      ],
    },
    {
      id: "the-text",
      heading: "The one text that fills the gap",
      blocks: [
        {
          type: "p",
          text: "Short, specific, first come first served. Something like:",
        },
        {
          type: "callout",
          label: "The text",
          text: "“Hi Sam, a spot just opened today at 1pm for Max. Want it? Reply YES and it's yours. First reply gets it.”",
        },
        {
          type: "p",
          text: "Send it to the people on the list who can do that day. The first YES gets it. Reply to the others: “Gone this time, you are still on the list.” The whole thing takes five minutes.",
        },
      ],
    },
    {
      id: "google-post",
      heading: "A Google post for open slots",
      blocks: [
        {
          type: "p",
          text: "Your Google Business Profile lets you post updates. “Two openings this Thursday, call to book” is exactly what posts are for. It shows to people looking at your profile that week. It costs nothing. Delete it when the slots are gone. [More on the profile](/google-business-profile-for-dog-groomers).",
        },
      ],
    },
    {
      id: "reminders",
      heading: "Reminders that cut no-shows",
      blocks: [
        {
          type: "p",
          text: "Two texts. One two days before: “Max is booked Thursday at 10. Reply C to confirm or R to reschedule.” One the morning of: “See you and Max at 10.” Most booking apps send these for you. If yours does not, send them by hand. A reminder two days out gives people time to tell you they cannot make it, which turns a no-show into a slot you can fill.",
        },
      ],
    },
    {
      id: "deposit",
      heading: "A fair deposit policy",
      blocks: [
        {
          type: "p",
          text: "A small deposit for new clients, taken at booking, applied to the groom. A clear rule: cancel with 24 hours' notice and it moves to the next visit. Less than that and it is kept. Say it on the website and in the confirmation text. Regular clients who have never missed do not need one. The deposit is not about the money. It is about the booking being real.",
        },
      ],
    },
    {
      id: "no-discount",
      heading: "Do not discount every gap",
      blocks: [
        {
          type: "p",
          text: "Offering a discount on every open slot teaches your best clients to wait for one. The list works at full price, because the offer is “sooner,” not “cheaper.” Save discounts for a slow season, with an end date. [Ranked marketing ideas, including which offers work](/blog/dog-grooming-marketing-ideas).",
        },
      ],
    },
    {
      id: "fewer-gaps",
      heading: "Fewer gaps in the first place",
      blocks: [
        {
          type: "p",
          text: "Rebook every client at pickup. A calendar that is booked six weeks out has fewer gaps than one that fills week by week. And keep the new clients coming from Google, so a cancellation is a small problem instead of a big one. [How to get more appointments](/blog/how-to-get-more-dog-grooming-appointments).",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How do I fill a last-minute grooming cancellation?",
      answer:
        "Keep a list of clients who said yes to “want a text if a sooner spot opens?” When a slot opens, send one short text to the ones who can do that day. First reply gets it. Most gaps fill within the hour.",
    },
    {
      question: "How do I reduce no-shows at my grooming salon?",
      answer:
        "Two reminder texts, one two days out asking them to confirm, one the morning of. A small deposit for new clients. And a clear 24-hour rule, stated on the site and in the confirmation. Reminders do more than the deposit.",
    },
    {
      question: "Should I charge a cancellation fee for dog grooming?",
      answer:
        "A small deposit for new clients, applied to the groom, with a fair 24-hour rule, is reasonable and common. Regulars who have never missed do not need one. Make the rule easy to find so nobody is surprised.",
    },
  ],
  related: [
    { href: "/blog/how-to-get-more-dog-grooming-appointments", label: "How to get more appointments" },
    { href: "/google-business-profile-for-dog-groomers", label: "Your Google Business Profile" },
    { href: "/dog-grooming-lead-generation", label: "Turning searches into calls" },
    { href: "/dog-groomer-website-design", label: "Booking and deposits on the site" },
  ],
  cta: {
    title: "Fewer gaps starts with more of the right calls",
    body: "The list fills a slot. A finished Google profile and a page per service keep the calendar full in the first place. On a short call we tell you what we would fix first.",
  },
};
