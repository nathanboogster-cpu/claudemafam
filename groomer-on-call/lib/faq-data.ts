// ---------------------------------------------------------------------------
// FAQ content.
//
// Every answer here is either (a) a fact already verified in site-data.ts, or
// (b) general grooming information true of the service in the abstract. None
// of them state hours, prices, a street address, a booking URL, a turnaround
// time, or a service that isn't on the verified GBP list — because none of
// those are verified for this business.
//
// The FAQPage structured data is emitted ONLY from /faq (see
// app/(site)/faq/page.tsx). Service pages and the homepage render FAQ text
// visibly without schema, so two pages never compete to own the same
// FAQPage entity.
// ---------------------------------------------------------------------------

import type { Faq } from "@/components/FaqBlock";
import { business, market } from "./site-data";

export type FaqGroup = { heading: string; faqs: Faq[] };

const q = {
  whatIsMobile: {
    question: "What does mobile pet grooming actually mean?",
    answer:
      "It means the groomer travels to you. Instead of driving your pet to a salon and coming back later to collect them, you book an appointment, you're home at that time, and your pet is groomed at your address. Groomer On Call is 100% mobile — there is no salon to visit.",
  },
  doYouHaveSalon: {
    question: "Do you have a salon or shop I can bring my pet to?",
    answer:
      "No. Groomer On Call is a mobile-only service and does not operate a walk-in grooming salon or a public address. All grooming happens at the customer's home.",
  },
  howToBook: {
    question: "How do I book an appointment?",
    answer: `By phone. Call ${business.phoneDisplay} and we'll go over what your pet needs, confirm we reach your address, and agree a time. There is no online booking system — a call is the way to get an appointment.`,
  },
  areaCovered: {
    question: "Do you come to my area?",
    answer: `Groomer On Call serves the ${market.cityState} area, including nearby ${market.nearbyCity}. Because coverage depends on where exactly you are, the quickest answer is to call ${business.phoneDisplay} and ask — we'll tell you straight away whether we reach your address.`,
  },
  whichPets: {
    question: "Do you groom cats as well as dogs?",
    answer:
      "Yes, with a clear scope. For dogs: full-service grooming, grooming and styling, bathing and blow dry, nail trimming and ear cleaning. For cats: bathing and ear cleaning. Cat haircuts, shave-downs, de-matting and cat nail trims are not currently offered.",
  },
  whatIncluded: {
    question: "What's included in a full-service dog groom?",
    answer:
      "A full-service groom covers the whole dog: a bath, a full blow dry, a brush-out, a haircut and styling, a nail trim and ear cleaning. If your dog doesn't need a haircut, a bath and blow dry on its own is usually the better appointment.",
  },
  howLong: {
    question: "How long does an appointment take?",
    answer:
      "It depends far more on the dog than on anything else. A short-coated dog having a bath and nails is quick; a long or double-coated dog having a full groom with a proper brush-out takes considerably longer, and a matted coat takes longer again because the work has to be done carefully. Describe the coat when you call and you'll get a realistic answer for your pet.",
  },
  needToBeHome: {
    question: "Do I need to be home during the appointment?",
    answer:
      "Yes — plan to have an adult at home unless you've specifically agreed otherwise in advance. You'll usually be asked to confirm a length or make a call about a mat partway through, and being reachable keeps the appointment moving.",
  },
  whatDoYouNeed: {
    question: "What do you need from me on the day?",
    answer:
      "Somewhere reasonably close to your door to park, a toilet break for your dog shortly beforehand, and a heads-up about anything the groomer should know — a sore spot, a recent injury, an ear your pet won't let you touch, or a dog who has found nail trims difficult before.",
  },
  matted: {
    question: "My dog is badly matted. Is that a problem?",
    answer:
      "It's not a judgement, but it is worth saying on the phone, because it changes what's realistic to do in one appointment. Heavily matted coats sometimes have to be clipped short for the pet's comfort rather than brushed out, and it's much better to plan for that in advance than to find out on the day.",
  },
  nervous: {
    question: "My pet is nervous about grooming. What should I do?",
    answer:
      "Say so when you book. It's genuinely useful information, and it lets the appointment be planned around your pet rather than discovered mid-groom. Mobile grooming removes the car journey and the unfamiliar building from the experience, which is a real part of what some pets find hard — though it's worth being clear that the handling itself is the same handling.",
  },
  howOften: {
    question: "How often should my dog be groomed?",
    answer:
      "It depends on the coat. Coats that keep growing — poodles, doodles, Shih Tzus and similar — commonly need a full groom every four to six weeks, because the hair doesn't shed out and mats instead. Shedding double coats often go six to twelve weeks between baths and blow-outs. Short smooth coats need the least. Nails run on their own clock at roughly three to six weeks regardless of coat.",
  },
  pricing: {
    question: "How much does it cost?",
    answer:
      "Pricing isn't listed on this site, because what a groom costs depends on the pet — size, coat type, condition, and which service you're booking. Call and describe your pet and you'll get a straight answer rather than a range that may not apply to you.",
  },
  nailTrimOnly: {
    question: "Can I book just a nail trim?",
    answer:
      "Yes. A nail trim is a short appointment and doesn't have to be attached to a full groom. It can also be added to a bath or a groom if you're booking one anyway.",
  },
  availability: {
    question: "When are you available?",
    answer: `Call ${business.phoneDisplay} to check current availability. Popular times go early with a mobile groomer, since it's one calendar rather than a salon with several groomers, so booking ahead helps.`,
  },
} satisfies Record<string, Faq>;

/** The five highest-intent questions, shown on the homepage. */
export const homeFaqs: Faq[] = [q.whatIsMobile, q.areaCovered, q.howToBook, q.whichPets, q.pricing];

/** The full, grouped FAQ — the only place FAQPage schema is emitted. */
export const faqGroups: FaqGroup[] = [
  {
    heading: "How Mobile Grooming Works",
    faqs: [q.whatIsMobile, q.doYouHaveSalon, q.needToBeHome, q.whatDoYouNeed, q.howLong],
  },
  {
    heading: "Booking & Service Area",
    faqs: [q.howToBook, q.areaCovered, q.availability, q.pricing],
  },
  {
    heading: "Services",
    faqs: [q.whichPets, q.whatIncluded, q.nailTrimOnly],
  },
  {
    heading: "Your Pet",
    faqs: [q.howOften, q.matted, q.nervous],
  },
];

/** Flattened, for FAQPage structured data on /faq. */
export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs);

/**
 * Per-service FAQs. Rendered as visible text on the service pages, without
 * FAQPage schema — /faq owns that entity for the whole site.
 */
export const serviceFaqs = {
  "mobile-dog-grooming": [q.whatIncluded, q.howOften, q.howLong, q.matted, q.pricing],
  "dog-bath-and-blow-dry": [q.howOften, q.howLong, q.needToBeHome, q.pricing],
  "dog-nail-trimming": [q.nailTrimOnly, q.nervous, q.pricing],
  "mobile-cat-bathing": [q.whichPets, q.needToBeHome, q.pricing],
} as const;

export const contactFaqs: Faq[] = [q.howToBook, q.areaCovered, q.doYouHaveSalon, q.availability];
