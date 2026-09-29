import type { BlogPost } from "../types";

// SEARCH INTENT
//   Primary:    dog grooming referral program
//   Secondary:  dog grooming loyalty program ideas, grooming referral
//               rewards, dog groomer referral card
//   Intent:     informational, ideas list.
//   Business:   repeat-client side of "more appointments"; draws the line
//               between referral rewards (fine) and review rewards (not).
export const post: BlogPost = {
  slug: "dog-grooming-referral-program",
  title: "Dog Grooming Referral Program Ideas That Bring Repeat Clients",
  metaTitle: "Dog Grooming Referral Program Ideas That Bring Repeat Clients",
  metaDescription:
    "Simple dog grooming referral program ideas: one reward, both sides, asked at pickup. The script, the card, how to track it, and the one rule never to break.",
  excerpt:
    "One reward, both sides, asked at pickup. Six referral ideas that work for groomers, the script, the card, and the one rule never to break.",
  intro:
    "Dog owners know other dog owners. They walk the same park, use the same vet, sit in the same daycare lobby. A referral program just gives them a reason to mention you. The best ones are simple enough to say in one sentence at pickup.",
  primaryQuery: "dog grooming referral program",
  secondaryQueries: ["dog grooming loyalty program ideas", "grooming referral rewards"],
  publishedAt: "2026-09-29",
  photo: 0,
  takeaways: [
    "One reward, for both sides, that you can say in one sentence.",
    "Ask at pickup, when the dog looks great. Hand them a card and text the same offer.",
    "Track it by asking every new client how they found you.",
    "Rewards for referrals are fine. Rewards for Google reviews are not.",
  ],
  sections: [
    {
      id: "why-grooming",
      heading: "Why referrals fit grooming so well",
      blocks: [
        {
          type: "p",
          text: "You hand someone a happy, freshly groomed dog, in person, every six weeks. That is a moment most local businesses would pay for. The client is pleased, the dog looks great, and the next person who says “who does your grooming?” at the park gets your name. A program just makes sure they have a reason, and a card, when that happens.",
        },
      ],
    },
    {
      id: "simple",
      heading: "Keep it to one sentence",
      blocks: [
        {
          type: "p",
          text: "Points, tiers and apps die in a grooming shop. The program that works is one reward, both sides, that you can say in one breath: “Bring a friend, you both get a free nail trim.” If it takes a leaflet to explain, it is too much.",
        },
      ],
    },
    {
      id: "ideas",
      heading: "Six referral rewards that work for groomers",
      blocks: [
        {
          type: "ol",
          items: [
            "**A free nail trim for both.** Ten minutes of your time, real value to them. The default.",
            "**$10 off the next groom for both.** Simple and clear. Set it below what a new regular is worth to you.",
            "**A free add-on.** Teeth brushing, a blueberry facial, a de-shed treatment. Costs you little, feels like a treat.",
            "**A bandana or bow for the dog.** Cheap, photographed, and posted. The photo is the referral.",
            "**Every fifth groom free for the referrer.** For clients who bring several friends. Track it on a card.",
            "**A donation in their name.** A few dollars to the local shelter per referral. Some clients like this more than a discount.",
          ],
        },
      ],
    },
    {
      id: "the-ask",
      heading: "The ask at pickup",
      blocks: [
        {
          type: "p",
          text: "Say it when they see the dog, not when they are paying. Same words every time, from everyone in the shop.",
        },
        {
          type: "callout",
          label: "The script",
          text: "“If you know anyone who needs a groomer, here is a card. Bring a friend and you both get a free nail trim. I will text it to you too so you have it.”",
        },
        {
          type: "p",
          text: "Then text it. The text survives the drive home. The card survives the park.",
        },
      ],
    },
    {
      id: "make-it-land",
      heading: "Make sure the referral can find you",
      blocks: [
        {
          type: "p",
          text: "The friend hears your name and searches it. What they find decides whether they call. A finished Google profile with recent photos and reviews. A website with your services, a price range and a tap-to-call number. A referral that lands on six photos from 2019 and no prices often goes to whoever ranked next to you. [What to fix on the profile](/google-business-profile-for-dog-groomers).",
        },
      ],
    },
    {
      id: "track",
      heading: "Track it the simple way",
      blocks: [
        {
          type: "p",
          text: "Ask every new client: “How did you find us?” Write it down. If they name a client, that client gets the reward on their next visit, and you send a thank-you text. In three months you will know whether the program is bringing one client a month or ten, and which regulars are doing the referring.",
        },
      ],
    },
    {
      id: "one-rule",
      heading: "The one rule never to break",
      blocks: [
        {
          type: "callout",
          label: "Referrals yes, reviews no",
          text: "A reward for bringing a friend is fine. A reward for leaving a Google review is not. Offering anything for a review breaks Google's rules and can get reviews removed or the profile punished. Keep the two asks separate. Ask for the review with no strings. Ask for the referral with the card.",
        },
        {
          type: "p",
          text: "[How the review ask works, by the rules](/dog-groomer-review-management).",
        },
      ],
    },
    {
      id: "loyalty",
      heading: "What about a loyalty program?",
      blocks: [
        {
          type: "p",
          text: "The best loyalty program for grooming is rebooking at pickup. “Same time in six weeks?” keeps a client better than any punch card. If you want a reward on top, make it the same one-sentence rule: every tenth groom, a free add-on. Do not build a points system. Nobody will track it, including you.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What is a good referral reward for a dog groomer?",
      answer:
        "A free nail trim for both the referrer and the friend is the default. It costs you ten minutes and feels like real value. $10 off the next groom for both, or a free add-on, also work. Keep it to one reward you can say in one sentence.",
    },
    {
      question: "Can I give a discount for a Google review?",
      answer:
        "No. Offering anything for a review breaks Google's rules and can get reviews removed. Rewards for referrals are fine. Keep the two asks separate.",
    },
    {
      question: "How do I track grooming referrals?",
      answer:
        "Ask every new client how they found you and write it down. If they name a client, that client gets the reward next visit. After three months you will know how many referrals the program brings and who is sending them.",
    },
    {
      question: "Do loyalty programs work for dog grooming?",
      answer:
        "Rebooking at pickup does more than any card. If you add a reward, keep it as simple as the referral: every tenth groom, a free add-on. Points systems get abandoned by clients and groomers alike.",
    },
  ],
  related: [
    { href: "/dog-groomer-review-management", label: "The review ask, by the rules" },
    { href: "/blog/how-to-get-more-dog-grooming-appointments", label: "How to get more appointments" },
    { href: "/google-business-profile-for-dog-groomers", label: "Your Google Business Profile" },
    { href: "/dog-grooming-lead-generation", label: "Turning searches into calls" },
  ],
  cta: {
    title: "Make every referral land",
    body: "A referral only works if the friend can find you and likes what they see. The profile, the site and the review system are what $297 a month covers. Book a short call and we will show you what a referred client sees today.",
  },
};
