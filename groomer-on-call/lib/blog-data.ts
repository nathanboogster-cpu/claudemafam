// ---------------------------------------------------------------------------
// GROOMING GUIDES — /blog
//
// Six articles, not sixty. Each one exists because it answers a question a
// real pet owner types into Google before they book, and each one has a
// named commercial page it is there to support. `primaryQuery`,
// `searchIntent` and `targetReader` are kept on the data itself so the
// keyword map in the README can never drift away from what was published.
//
// EVERYTHING HERE IS GENERAL PET-CARE INFORMATION. No article states a fact
// about Groomer On Call beyond what lib/site-data.ts already verifies — no
// pricing, no hours, no service claims, no reviews, no medical advice.
// ---------------------------------------------------------------------------

import type { ServiceSlug } from "./site-data";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /**
   * Shorter <title> for posts whose headline would be truncated in search
   * results once the " | Groomer On Call" suffix is added. The full headline
   * is still the visible H1 — this only shortens what Google displays.
   */
  seoTitle?: string;
  metaDescription: string;
  excerpt: string;
  eyebrow: string;
  publishedAt: string;
  readingMinutes: number;
  art: "route" | "bath" | "cat" | "tools";
  /** The single query this article is written to answer. */
  primaryQuery: string;
  searchIntent: "informational" | "commercial-investigation";
  targetReader: string;
  body: BlogBlock[];
  relatedServiceSlugs: ServiceSlug[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-mobile-dog-grooming",
    title: "What Is Mobile Dog Grooming, and How Does It Work?",
    seoTitle: "What Is Mobile Dog Grooming?",
    metaDescription:
      "Mobile dog grooming means the groomer travels to your home instead of you driving to a salon. Here's how an appointment actually works, start to finish.",
    excerpt:
      "If you've never booked a mobile groomer before, the whole thing can sound vague. Here's what actually happens, in order.",
    eyebrow: "Mobile Grooming Basics",
    publishedAt: "2026-09-14",
    readingMinutes: 5,
    art: "route",
    primaryQuery: "what is mobile dog grooming",
    searchIntent: "informational",
    targetReader: "A pet owner who has seen mobile grooming advertised and wants to understand it before calling.",
    body: [
      {
        type: "p",
        text: "Mobile dog grooming is exactly what the name suggests: instead of you loading your dog into the car and driving to a salon, the groomer comes to your home and grooms your dog there. The service is the same service — bath, dry, brush-out, haircut, nails, ears — but the logistics around it are completely different, and that's usually the part people want explained before they book.",
      },
      { type: "h2", text: "What Happens On The Day" },
      {
        type: "p",
        text: "You book a time, you're home at that time, and your groomer arrives. From your side, that's most of it. You'll normally hand your dog over, mention anything specific you want — shorter on the body, leave the tail, careful with the left ear — and then get on with your day while the groom happens.",
      },
      {
        type: "p",
        text: "There's no drop-off window in the morning and no second trip to collect your dog in the afternoon. For a lot of households, that alone is the reason mobile grooming is worth it: a full groom stops eating a chunk out of the middle of the day.",
      },
      { type: "h2", text: "How Long It Takes" },
      {
        type: "p",
        text: "Grooming time depends far more on the dog than on where it happens. A short-coated dog getting a bath and nails is a quick appointment. A long-coated or double-coated dog getting a full groom with a proper brush-out takes considerably longer, and a matted coat takes longer again because the work has to be done carefully.",
      },
      {
        type: "p",
        text: "What mobile grooming removes is the waiting. In a salon model, a dog is often dropped off and waits its turn, so the dog's total day is far longer than the actual grooming time. With a mobile appointment, the grooming time and the appointment time are close to the same thing.",
      },
      { type: "h2", text: "What The Groomer Needs From You" },
      {
        type: "list",
        items: [
          "Somewhere to park reasonably close to your door.",
          "An adult at home for the appointment, unless you've agreed otherwise in advance.",
          "A heads-up about anything the groomer should know — a sore spot, a hip your dog doesn't like handled, a dog who's nervous about nail trims, a recent injury.",
          "Honesty about the coat. If it's been six months and there's matting, say so on the phone. It changes what's realistic to do in one appointment, and it's much better to plan for that than to discover it on the day.",
        ],
      },
      { type: "h2", text: "Is It Right For Every Dog?" },
      {
        type: "p",
        text: "Mobile grooming suits most dogs, and it particularly suits dogs who find the car ride or a room full of other animals harder than the grooming itself. It also suits owners with limited time, no car, mobility issues, small children, or a schedule that can't absorb two trips across town.",
      },
      {
        type: "p",
        text: "It isn't a substitute for veterinary care. If something about your dog's skin, ears or nails looks wrong rather than just overdue, that's a vet conversation, not a grooming one — and a good groomer will tell you so.",
      },
      {
        type: "callout",
        text: "The quickest way to find out whether mobile grooming fits your dog is to describe your dog on the phone — breed, coat, how long since the last groom, and anything they're funny about.",
      },
    ],
    relatedServiceSlugs: ["mobile-dog-grooming", "dog-bath-and-blow-dry"],
  },

  {
    slug: "how-often-should-a-dog-be-groomed",
    title: "How Often Should a Dog Be Groomed?",
    metaDescription:
      "Grooming frequency depends on coat type, not breed popularity. A practical guide to how often dogs need a full groom, a bath, and a brush at home.",
    excerpt:
      "There's no single right answer — but there is a right answer for your dog's coat. Here's how to work out what it is.",
    eyebrow: "Grooming Schedules",
    publishedAt: "2026-09-14",
    readingMinutes: 6,
    art: "tools",
    primaryQuery: "how often should a dog be groomed",
    searchIntent: "informational",
    targetReader: "An owner unsure whether they're grooming their dog often enough.",
    body: [
      {
        type: "p",
        text: "The honest answer is that it depends on the coat, not the calendar. Two dogs of the same size and the same age can need grooming on completely different schedules, because what actually drives the schedule is how the coat behaves — whether it keeps growing, whether it sheds out, and how easily it tangles.",
      },
      { type: "h2", text: "Coats That Keep Growing" },
      {
        type: "p",
        text: "Poodles, doodles, Shih Tzus, Bichons, Maltese, Havanese and similar coats never really stop growing, and they don't shed out on their own. Loose hair stays trapped against the skin instead of falling away, which is why these coats mat so readily.",
      },
      {
        type: "p",
        text: "For these dogs, a full groom roughly every four to six weeks is a common starting point, with brushing at home in between. If brushing every day isn't realistic in your household — and for plenty of people it isn't — the practical answer is usually a shorter clip, so the coat has less length to tangle before the next appointment.",
      },
      { type: "h2", text: "Double Coats That Shed" },
      {
        type: "p",
        text: "Huskies, German Shepherds, Golden Retrievers, Labradors, Pomeranians and similar dogs shed out seasonally. These coats generally don't need cutting, but they do need a thorough bath and a proper blow dry to clear out the dead undercoat — which is the part a home bath almost never achieves.",
      },
      {
        type: "p",
        text: "Every six to twelve weeks works for many double-coated dogs, tightening up around the heavy shedding periods when the undercoat is releasing in quantity.",
      },
      { type: "h2", text: "Short, Smooth Coats" },
      {
        type: "p",
        text: "Beagles, Boxers, Pit Bull types, Dachshunds and similar short coats are the lowest-maintenance group. A bath, nails and ears every six to twelve weeks is usually plenty, and the nail trim is often the part that genuinely can't wait.",
      },
      { type: "h2", text: "The Bits That Run On Their Own Clock" },
      {
        type: "list",
        items: [
          "Nails keep growing regardless of coat type. If you can hear them clicking on a hard floor, they're ready for a trim.",
          "Ears on floppy-eared and hairy-eared dogs need checking more often than the rest of the dog needs grooming.",
          "Puppies benefit from early, short, positive grooming appointments long before they strictly need one — the point is the habit, not the haircut.",
          "Seniors often do better with shorter, more frequent appointments than with one long one.",
        ],
      },
      { type: "h2", text: "The Simplest Test" },
      {
        type: "p",
        text: "Push a comb right down to the skin behind the ears, under the front legs, and around the collar — the three places that mat first. If it moves through cleanly, you're on top of it. If it snags or won't reach the skin, you're already behind, and waiting another month will make the appointment harder rather than cheaper.",
      },
      {
        type: "callout",
        text: "If you're not sure which group your dog falls into, describe the coat on the phone and a groomer can tell you what schedule is realistic.",
      },
    ],
    relatedServiceSlugs: ["mobile-dog-grooming", "dog-bath-and-blow-dry"],
  },

  {
    slug: "mobile-grooming-vs-salon-grooming",
    title: "Mobile Grooming vs. Salon Grooming: What's Actually Different",
    seoTitle: "Mobile Grooming vs. Salon Grooming",
    metaDescription:
      "A straight comparison of mobile and salon dog grooming — time, handling, scheduling and cost — so you can tell which one suits your dog and your week.",
    excerpt:
      "Both get your dog groomed. The difference is in everything around the groom — and for some dogs that difference matters a lot.",
    eyebrow: "Choosing A Groomer",
    publishedAt: "2026-09-14",
    readingMinutes: 5,
    art: "route",
    primaryQuery: "mobile grooming vs salon grooming",
    searchIntent: "commercial-investigation",
    targetReader: "An owner deciding between booking a mobile groomer and a traditional salon.",
    body: [
      {
        type: "p",
        text: "People usually ask this question expecting one option to be better. It isn't that simple — but the differences are real and they're easy to lay out, so you can match them against your own dog and your own week.",
      },
      { type: "h2", text: "The Length Of Your Dog's Day" },
      {
        type: "p",
        text: "This is the biggest difference. In a salon, dogs are commonly dropped off in the morning and collected later, so the dog's day includes waiting time on either side of the actual grooming. A mobile appointment is closer to the grooming time itself — the dog isn't waiting for a slot.",
      },
      { type: "h2", text: "The Environment" },
      {
        type: "p",
        text: "A salon is an unfamiliar building with other animals in it, which some dogs handle without blinking and others genuinely don't. Mobile grooming happens at home, which removes the car ride and the unfamiliar room from the equation.",
      },
      {
        type: "p",
        text: "It's worth being clear-eyed here: mobile grooming is not a fix for a dog who is frightened of being groomed. The handling is the same handling. What changes is the travel and the surroundings, and for some dogs that's a meaningful part of what they found hard.",
      },
      { type: "h2", text: "Your Own Schedule" },
      {
        type: "list",
        items: [
          "Salon: two trips across town, built around the salon's opening hours and someone else's drop-off window.",
          "Mobile: one appointment at your address, with no driving at either end.",
          "Salon: usually easier to get a last-minute slot in a larger operation with several groomers.",
          "Mobile: a single groomer's calendar, so popular times go early and booking ahead matters more.",
        ],
      },
      { type: "h2", text: "Cost" },
      {
        type: "p",
        text: "Mobile grooming often costs somewhat more than the equivalent salon appointment, because the groomer travels to one household at a time rather than working through several dogs in one place. Whether that's worth it depends on what your time and the car journey are worth to you — which is a personal calculation, not a universal one.",
      },
      { type: "h2", text: "Which One Suits Your Dog" },
      {
        type: "p",
        text: "Mobile tends to suit dogs who find travel harder than grooming, households where two trips across town is a real cost, owners without a car or with mobility limits, and anyone whose day genuinely can't absorb a drop-off and a pick-up. A calm dog who travels well and lives near a good salon may be perfectly served either way.",
      },
      {
        type: "callout",
        text: "If you're weighing it up, the useful question isn't \"which is better\" — it's \"which part of grooming does my dog find hard\". Answer that and the choice usually makes itself.",
      },
    ],
    relatedServiceSlugs: ["mobile-dog-grooming"],
  },

  {
    slug: "how-to-prepare-for-a-mobile-grooming-appointment",
    title: "How To Prepare For a Mobile Grooming Appointment",
    seoTitle: "How To Prepare For Mobile Grooming",
    metaDescription:
      "A short checklist for your first mobile dog grooming appointment — parking, timing, what to tell your groomer, and what to do with the coat beforehand.",
    excerpt:
      "Five minutes of preparation makes a mobile groom go smoothly. Here's the short list.",
    eyebrow: "Before Your Appointment",
    publishedAt: "2026-09-14",
    readingMinutes: 4,
    art: "tools",
    primaryQuery: "how to prepare for mobile dog grooming",
    searchIntent: "informational",
    targetReader: "An owner who has booked their first mobile groom and wants to get it right.",
    body: [
      {
        type: "p",
        text: "Mobile grooming is low-effort by design, but a few things genuinely help — mostly because they save time that would otherwise come out of your dog's appointment.",
      },
      { type: "h2", text: "Before The Day" },
      {
        type: "list",
        items: [
          "Say what your dog actually is. Breed or mix, rough size, coat length, and how long since the last groom. This determines how long the appointment needs to be.",
          "Mention anything sensitive. A sore hip, an ear your dog won't let you touch, a dog who has bitten during nail trims before, a recent surgery. None of this is a problem to know about in advance; all of it is a problem to discover mid-groom.",
          "Be honest about matting. A matted coat isn't a judgement, it's a scheduling fact — it changes what can be achieved in one appointment.",
          "Check parking. Somewhere reasonably close to your door, without blocking a neighbour in.",
        ],
      },
      { type: "h2", text: "On The Day" },
      {
        type: "list",
          items: [
          "Give your dog a toilet break shortly before the appointment. It's the single most useful thing you can do.",
          "Don't feed a big meal right beforehand.",
          "Skip the home bath. A dog bathed the night before and left to air-dry is often harder to work on, not easier, because a partly-dried coat tightens tangles.",
          "Brush if you already brush. If you don't, don't start with an hour of frantic detangling on the morning of — you'll make your dog sore and put them in a bad mood for the appointment.",
          "Be reachable. You'll likely be asked to confirm a length or make a call about a mat, and a quick answer keeps things moving.",
        ],
      },
      { type: "h2", text: "Describing The Haircut You Want" },
      {
        type: "p",
        text: "Length in inches beats adjectives. \"Short\" means very different things to different people, and \"puppy cut\" means different things to different groomers. A photo of the result you liked last time is worth more than any description — and if there wasn't a last time, say what you want to be able to do afterwards: walk on the beach, brush it once a week, keep the feet out of the mud.",
      },
      { type: "h2", text: "After" },
      {
        type: "p",
        text: "Tell your groomer what you thought. Too short, not short enough, loved it, the ears could have been longer. A groomer who knows what you actually wanted gets it right next time without you having to explain from scratch.",
      },
      {
        type: "callout",
        text: "Nervous about a first appointment? Say that on the phone too. It's useful information, and a groomer would much rather know.",
      },
    ],
    relatedServiceSlugs: ["mobile-dog-grooming", "dog-bath-and-blow-dry"],
  },

  {
    slug: "how-often-should-you-trim-a-dogs-nails",
    title: "How Often Should You Trim a Dog's Nails?",
    metaDescription:
      "How to tell when your dog's nails are overdue, why overgrown nails change how a dog stands, and what a regular trimming schedule looks like.",
    excerpt:
      "If you can hear them on the floor, they're already long. Here's what that actually does to a dog — and how often to stay ahead of it.",
    eyebrow: "Nail Care",
    publishedAt: "2026-09-14",
    readingMinutes: 4,
    art: "tools",
    primaryQuery: "how often should you trim a dog's nails",
    searchIntent: "informational",
    targetReader: "An owner who suspects their dog's nails are too long and wants a schedule.",
    body: [
      {
        type: "p",
        text: "Nails are the one part of grooming that runs on its own clock. A short-coated dog might genuinely not need a haircut, ever — but every dog's nails keep growing, and unlike a coat, overgrown nails change how the dog physically stands.",
      },
      { type: "h2", text: "How Often" },
      {
        type: "p",
        text: "Every three to six weeks suits most dogs. The variation comes down to how much of the nail is worn down naturally — a dog walked daily on pavement wears nails down considerably; a dog exercised mostly on grass, sand or carpet barely wears them at all and will need trimming at the shorter end of that range.",
      },
      { type: "h2", text: "Signs They're Overdue" },
      {
        type: "list",
        items: [
          "You can hear clicking on hard floors when your dog walks.",
          "The nails touch the ground when your dog is standing still and relaxed.",
          "Your dog is standing with their toes splayed or their weight shifted back.",
          "Any nail has started to curve round towards the pad.",
          "Dewclaws — the ones higher up the leg that never touch the ground — look long. These are the ones that get missed, and the ones that can curl into the skin.",
        ],
      },
      { type: "h2", text: "Why It Matters Beyond The Noise" },
      {
        type: "p",
        text: "When a nail is long enough to hit the floor, it pushes back into the toe every time the dog takes a step. Over time that changes the angle the dog stands at, which shifts load up through the leg. It's the reason a nail trim sometimes visibly changes how an older dog moves.",
      },
      { type: "h2", text: "If Your Dog Hates Having Their Feet Touched" },
      {
        type: "p",
        text: "This is extremely common and it is not a reason to skip trims — it's a reason to have someone do them who does it all day. Say it when you book. A groomer who knows in advance can plan for a short, calm, low-drama appointment instead of a wrestling match.",
      },
      {
        type: "p",
        text: "If nails are so overgrown that the quick has grown out with them, they can't safely be taken back to a normal length in one go. The fix is a series of small trims a couple of weeks apart, letting the quick recede between them — which is exactly why it's worth getting on a schedule rather than waiting for it to become a project.",
      },
      {
        type: "callout",
        text: "A nail trim is a short appointment and doesn't need to be attached to a full groom. It can be booked on its own.",
      },
    ],
    relatedServiceSlugs: ["dog-nail-trimming", "mobile-dog-grooming"],
  },

  {
    slug: "bathing-a-cat-what-to-expect",
    title: "Bathing a Cat: What To Expect, and When It's Worth It",
    seoTitle: "Bathing a Cat: What To Expect",
    metaDescription:
      "Cats groom themselves — but not always enough. When a cat genuinely benefits from a bath, what a professional cat bath involves, and how to prepare.",
    excerpt:
      "Most cats don't need bathing. Some do — and there are a few clear situations where it makes a real difference.",
    eyebrow: "Cat Care",
    publishedAt: "2026-09-14",
    readingMinutes: 4,
    art: "cat",
    primaryQuery: "do cats need baths",
    searchIntent: "informational",
    targetReader: "A cat owner wondering whether to have their cat professionally bathed.",
    body: [
      {
        type: "p",
        text: "Cats are famously self-cleaning, and for a healthy young short-haired cat that's usually the end of the story. But self-grooming has limits, and there are a handful of situations where a bath genuinely helps rather than just being an ordeal for everyone involved.",
      },
      { type: "h2", text: "When A Bath Is Actually Worth It" },
      {
        type: "list",
        items: [
          "Long-haired cats whose coat has started to clump or tangle faster than they can keep up with.",
          "Older cats, or cats carrying extra weight, who can no longer physically reach parts of themselves. A greasy patch along the back is the classic sign.",
          "A cat who has got into something they shouldn't be licking off themselves.",
          "Heavy shedding periods, where a bath and dry clears a large amount of loose coat at once.",
          "Households where a reduction in loose hair and dander around the house matters.",
        ],
      },
      { type: "h2", text: "When It Isn't" },
      {
        type: "p",
        text: "A healthy, young, short-haired cat who is keeping themselves clean doesn't need routine bathing, and there's no benefit in putting them through it on a schedule. And if a cat's coat has changed — gone greasy, dull, or patchy — without an obvious cause, that's a conversation with a vet before it's a conversation with a groomer. A coat change can be the first visible sign of something else.",
      },
      { type: "h2", text: "What A Professional Cat Bath Involves" },
      {
        type: "p",
        text: "Calm, quick and quiet is the whole approach. A cat bath is worked through methodically — wet down, wash, thorough rinse, and a careful dry, because a cat left damp gets cold much faster than a dog does. Ears are usually checked and cleaned at the same time, since it's the moment they're already being handled.",
      },
      {
        type: "p",
        text: "Not every cat is a candidate on the day, and any groomer worth booking will tell you if yours isn't. A cat who is genuinely distressed rather than merely unimpressed is one where stopping is the right call.",
      },
      { type: "h2", text: "Preparing" },
      {
        type: "list",
        items: [
          "Keep your cat indoors and easy to find before the appointment — a cat who has to be extracted from under a bed starts the appointment badly.",
          "Mention anything you already know: a sore spot, a history of not tolerating handling, any recent illness.",
          "Say if the coat is matted. Matting on a cat sits tight to very thin skin and is handled differently from matting on a dog.",
          "Have a warm, quiet room they can settle in afterwards.",
        ],
      },
      {
        type: "callout",
        text: "Cat services at Groomer On Call are bathing and ear cleaning. If your cat needs something beyond that, we'll say so rather than take the booking.",
      },
    ],
    relatedServiceSlugs: ["mobile-cat-bathing"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
