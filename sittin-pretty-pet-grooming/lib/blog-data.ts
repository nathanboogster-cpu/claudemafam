// Blog content — general, evergreen pet-grooming and pet-care information,
// not specific claims about Sittin' Pretty beyond what's already verified
// elsewhere in lib/site-data.ts (experience, cage-free environment, cat
// specialization, hours, etc.). Written as structured content blocks so
// app/(site)/blog/[slug]/page.tsx can render every post the same way
// without a one-off .tsx file per post — mirrors the areaContent pattern
// used for service-area pages.

import type { ServiceSlug } from "./site-data";
import { photos } from "./site-data";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  eyebrow: string;
  publishedAt: string; // ISO date
  heroPhotoKey: keyof typeof photos;
  body: BlogBlock[];
  relatedServiceSlugs: ServiceSlug[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-groom-your-dog",
    title: "How Often Should You Groom Your Dog? A Seasonal Guide",
    metaDescription:
      "How often your dog needs grooming depends on coat type and season. A general guide to bath, brush, and full-groom frequency for dogs.",
    excerpt:
      "Grooming frequency depends a lot on your dog's coat type and the season. Here's a general guide to help you plan.",
    eyebrow: "Dog Grooming",
    publishedAt: "2026-09-12",
    heroPhotoKey: "tanTerrierMix",
    body: [
      {
        type: "p",
        text: "There's no single right answer to \"how often should I groom my dog\" — it depends on coat type, activity level, and the time of year. That said, some general guidelines can help you plan ahead instead of waiting until mats or heavy shedding force the issue.",
      },
      { type: "h2", text: "By Coat Type" },
      {
        type: "list",
        items: [
          "Short, smooth coats (Labs, Beagles): a bath and brush every 6–8 weeks is often plenty, with regular at-home brushing to manage shedding in between.",
          "Double coats (Huskies, Shepherds, Corgis): these breeds don't usually need haircuts, but benefit from a deshedding treatment a few times a year, especially during seasonal coat blows.",
          "Curly or continuously growing coats (Poodles, Doodles, Bichons): these need a full groom roughly every 4–6 weeks, since their coat doesn't shed out on its own and mats easily if left too long.",
          "Long, silky coats (Shih Tzus, Yorkies, Maltese): frequent brushing at home plus a full groom every 4–6 weeks helps prevent painful matting, especially around the ears and legs.",
        ],
      },
      { type: "h2", text: "Seasonal Considerations" },
      {
        type: "p",
        text: "Spring and fall are typically the heaviest shedding seasons for double-coated breeds, so that's often the best time to schedule a deshedding treatment. In summer, keeping a shorter, well-maintained coat can help dogs stay more comfortable in the heat — though it's worth talking to your groomer about the right length for your dog's specific coat, since some double coats actually protect against heat and shouldn't be shaved down.",
      },
      {
        type: "p",
        text: "If you're not sure where your dog's coat falls, or it's been a while since their last groom, a groomer can take a look and recommend a schedule that fits.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "dog-bath-and-brush", "deshedding-treatment"],
  },
  {
    slug: "signs-your-cat-could-use-a-professional-groom",
    title: "5 Signs Your Cat Could Use a Professional Groom",
    metaDescription:
      "Most cats self-groom well, but some situations call for a professional cat groomer. Five signs it might be time to book a visit.",
    excerpt:
      "Most cats handle their own grooming just fine — but a few situations call for professional help. Here's what to watch for.",
    eyebrow: "Cat Grooming",
    publishedAt: "2026-09-12",
    heroPhotoKey: "grayWhiteShihTzu",
    body: [
      {
        type: "p",
        text: "Cats are famously good at grooming themselves, which is part of why professional cat grooming isn't as widely offered as dog grooming — plenty of groomers simply don't take cats. But there are real situations where a cat benefits from professional help.",
      },
      { type: "h2", text: "Signs It Might Be Time" },
      {
        type: "list",
        items: [
          "Matting, especially around the belly, armpits, or behind the ears — mats can pull painfully on the skin and are hard to remove safely at home.",
          "A long-haired cat shedding heavily or developing a greasy, unkempt coat, which can happen as cats age and become less flexible.",
          "Overgrown nails that are starting to curl or catch on carpet and furniture.",
          "A cat that's stressed by bath time at home, where a calmer, more practiced approach can help.",
          "Senior cats who are grooming themselves less due to arthritis or reduced mobility.",
        ],
      },
      {
        type: "p",
        text: "None of these are emergencies, but left unaddressed, matting in particular can become uncomfortable enough that it needs to be shaved out rather than brushed out. Catching it early makes for a much easier visit.",
      },
      {
        type: "p",
        text: "Because not every groomer works with cats, it's worth calling ahead to confirm cat grooming is offered before you show up.",
      },
    ],
    relatedServiceSlugs: ["cat-grooming", "nail-trim-ear-cleaning"],
  },
  {
    slug: "why-cage-free-grooming-helps-nervous-pets",
    title: "Why a Cage-Free Grooming Visit Is Easier on Nervous Pets",
    metaDescription:
      "Cage-free grooming keeps pets out with their groomer instead of kenneled between steps. Here's why that can make a real difference for nervous pets.",
    excerpt:
      "Being kenneled between grooming steps can add stress for an already-nervous pet. Here's why a cage-free visit often goes more smoothly.",
    eyebrow: "Cage-Free Grooming",
    publishedAt: "2026-09-12",
    heroPhotoKey: "sheepdogBandana",
    body: [
      {
        type: "p",
        text: "A traditional grooming visit often involves a fair amount of waiting — a pet gets bathed, then waits in a kennel to dry, then waits again between steps. For a confident, easygoing pet, that's usually not a big deal. For a nervous or anxious one, all that caged waiting time can add stress on top of an already unfamiliar experience.",
      },
      { type: "h2", text: "What \"Cage-Free\" Actually Means" },
      {
        type: "p",
        text: "Cage-free grooming means a pet stays out with their groomer throughout the visit instead of being kenneled between steps. It doesn't change what's being done — a bath is still a bath, a haircut is still a haircut — but it removes the long stretches of isolated waiting that can wind a nervous pet up further.",
      },
      { type: "h2", text: "Why It Tends to Help" },
      {
        type: "list",
        items: [
          "Less isolated waiting time means less opportunity for anxiety to build between steps.",
          "Staying with a familiar groomer throughout the visit can be more reassuring than being left alone in a kennel.",
          "It tends to suit senior pets and large-breed dogs particularly well, since they're not confined to a small space for extended periods.",
        ],
      },
      {
        type: "p",
        text: "If your pet has struggled at a caged, high-volume grooming facility before, a cage-free, more personal approach is worth asking about.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "cat-grooming"],
  },
  {
    slug: "preparing-your-puppy-for-their-first-grooming-visit",
    title: "Preparing Your Puppy (or Kitten) for Their First Grooming Visit",
    metaDescription:
      "A few tips for getting your puppy or kitten ready for their first professional grooming visit, and what to expect once you're there.",
    excerpt:
      "A little preparation goes a long way toward a calm first grooming visit. Here's what to know before you go.",
    eyebrow: "New Pet Owners",
    publishedAt: "2026-09-12",
    heroPhotoKey: "whiteFluffyPuppy",
    body: [
      {
        type: "p",
        text: "A puppy or kitten's first grooming visit sets the tone for every visit after it. The goal of that first appointment usually isn't a full, intricate haircut — it's a calm, positive introduction to the grooming table, tools, and handling.",
      },
      { type: "h2", text: "Before the Visit" },
      {
        type: "list",
        items: [
          "Get your puppy or kitten comfortable with everyday handling at home — touching paws, ears, and mouth briefly and rewarding calm behavior.",
          "If possible, introduce the sound of a hair dryer or clippers from a distance beforehand so it's not a total surprise.",
          "Skip a big meal right before the appointment — a full stomach and an unfamiliar new experience don't always mix well.",
          "Mention your pet's age, breed, and coat type when you call to schedule, so the groomer can plan an appropriately short, gentle first visit.",
        ],
      },
      { type: "h2", text: "What to Expect" },
      {
        type: "p",
        text: "A first groom is typically kept short and low-key. Depending on age and coat, that might mean a light trim and a bath rather than a full haircut. The priority is a positive experience that sets your puppy or kitten up to be comfortable at every future visit — not cramming in every possible service on day one.",
      },
    ],
    relatedServiceSlugs: ["puppy-first-groom", "nail-trim-ear-cleaning"],
  },
  {
    slug: "deshedding-101-which-breeds-benefit-most",
    title: "Deshedding 101: What It Is and Which Breeds Benefit Most",
    metaDescription:
      "What a deshedding treatment actually does, how it's different from a regular bath, and which dog and cat breeds benefit from it most.",
    excerpt:
      "Deshedding treatments go deeper than a regular bath and brush. Here's what they do and which pets benefit most.",
    eyebrow: "Deshedding",
    publishedAt: "2026-09-12",
    heroPhotoKey: "creamFluffyDog",
    body: [
      {
        type: "p",
        text: "\"Deshedding\" gets used loosely, but a real deshedding treatment is more thorough than a standard bath and brush. It typically combines a specialized bath, deep brushing, and a blow-out process aimed at loosening and removing dead undercoat before it ends up on your floor and furniture.",
      },
      { type: "h2", text: "Which Pets Benefit Most" },
      {
        type: "list",
        items: [
          "Double-coated dog breeds (Huskies, Shepherds, Labs, Corgis) that grow a dense undercoat and \"blow coat\" seasonally.",
          "Long-haired cats, who can develop loose undercoat that contributes to hairballs if it's not managed.",
          "Any heavy-shedding pet during spring and fall, when seasonal coat changes are at their peak.",
        ],
      },
      { type: "h2", text: "What It Won't Do" },
      {
        type: "p",
        text: "A deshedding treatment reduces loose, dead undercoat — it doesn't stop healthy shedding altogether, and it isn't a haircut. For breeds that don't grow a double coat, or shorthaired breeds with a single coat, the benefit is usually smaller. If you're not sure whether your pet's coat type would benefit, it's a quick question to ask when you book.",
      },
    ],
    relatedServiceSlugs: ["deshedding-treatment", "dog-bath-and-brush"],
  },
  {
    slug: "why-regular-nail-trims-and-ear-cleanings-matter",
    title: "Why Regular Nail Trims and Ear Cleanings Matter",
    metaDescription:
      "Overgrown nails and neglected ears are easy to overlook between full grooms. Why regular nail trims and ear cleanings matter, and how to keep up with them.",
    excerpt:
      "Nail and ear care are easy to overlook between full grooms — here's why they're worth keeping up with on their own.",
    eyebrow: "Nail & Ear Care",
    publishedAt: "2026-09-14",
    heroPhotoKey: "corgiClipperDetail",
    body: [
      {
        type: "p",
        text: "Nail trims and ear cleaning are two of the easiest things to let slide between full grooms — a pet still looks fine day to day, so it's tempting to push them off. But both matter more than they might seem, and neither requires waiting for a full haircut to address.",
      },
      { type: "h2", text: "Why Nail Length Matters" },
      {
        type: "list",
        items: [
          "Overgrown nails can change how a dog or cat walks, putting uneven pressure on their paws and joints over time.",
          "Long nails are more likely to catch on carpet or furniture and tear, which is painful and can lead to bleeding.",
          "In severe cases, nails left too long can curl and grow into the paw pad.",
        ],
      },
      { type: "h2", text: "Why Ears Need Attention Too" },
      {
        type: "p",
        text: "Ears trap moisture, wax, and debris, especially in floppy-eared breeds with less airflow. Left unaddressed, buildup can lead to odor or irritation. A regular cleaning schedule makes it easier to catch a problem early, before it becomes uncomfortable for your pet.",
      },
      { type: "h2", text: "It Doesn't Require a Full Groom" },
      {
        type: "p",
        text: "Nail trims and ear cleaning are available as a quick, standalone visit at our Funkstown salon — you don't need to book a full groom just to keep up with them between appointments. A cage-free approach also means a fast in-and-out visit doesn't turn into a long, stressful wait for a pet who's just there for a few minutes of work.",
      },
    ],
    relatedServiceSlugs: ["nail-trim-ear-cleaning", "dog-grooming"],
  },
  {
    slug: "grooming-tips-for-senior-dogs-and-cats",
    title: "Grooming Tips for Senior Dogs and Cats",
    metaDescription:
      "Grooming needs change as pets get older. What tends to change for senior dogs and cats, and how a groomer can adjust a visit to fit.",
    excerpt:
      "Senior pets often need a gentler, more patient approach to grooming. Here's what tends to change and what to ask about.",
    eyebrow: "Senior Pets",
    publishedAt: "2026-09-17",
    heroPhotoKey: "seniorBlackDogRedBow",
    body: [
      {
        type: "p",
        text: "As pets get older, grooming often needs a gentler, more patient approach than it did when they were younger. Skin can become thinner and more sensitive, joints get stiffer, and a pet who used to stand happily through a long groom may need more frequent breaks or a shorter session altogether.",
      },
      { type: "h2", text: "What Tends to Change" },
      {
        type: "list",
        items: [
          "Skin and coat: senior pets' skin can become drier or thinner, so a gentler touch and less aggressive brushing matters more.",
          "Joints and mobility: standing for a long grooming session can be harder on stiff hips or knees, so shorter, more frequent visits sometimes work better than one long one.",
          "Nail growth: senior pets are often less active, which can mean nails wear down less naturally on their own and need more frequent trims.",
          "Patience and stress tolerance: a senior pet who handled grooming easily for years may need extra reassurance or a slower pace as they age.",
        ],
      },
      { type: "h2", text: "A Calmer Way to Groom" },
      {
        type: "p",
        text: "A cage-free approach can make a real difference for senior pets specifically — less time confined and waiting means less physical strain on stiff joints and less stress overall. Mentioning your pet's age and any mobility changes when you schedule helps your groomer plan a visit that fits where they're at now, not where they were a few years ago.",
      },
      {
        type: "p",
        text: "At our Funkstown salon, we're comfortable working at whatever pace an older pet needs — the goal is a comfortable, low-stress visit, not rushing through a checklist.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "nail-trim-ear-cleaning"],
  },
  {
    slug: "how-to-choose-a-groomer-for-your-dog-or-cat",
    title: "How to Choose a Groomer for Your Dog or Cat",
    metaDescription:
      "Not all groomers are the same. A few things worth asking about before booking a groomer for your dog or cat, from experience to how nervous pets are handled.",
    excerpt: "Not all groomers are the same. Here are a few things worth asking about before you book.",
    eyebrow: "Choosing a Groomer",
    publishedAt: "2026-09-21",
    heroPhotoKey: "catGrooming",
    body: [
      {
        type: "p",
        text: "Not every groomer is the same, and picking the right one can make a real difference in how your pet experiences every visit after the first one. A few things are worth asking about before you book, especially if it's your first time trying somewhere new.",
      },
      { type: "h2", text: "Questions Worth Asking" },
      {
        type: "list",
        items: [
          "How much experience do they have with your pet's breed or coat type? A groomer who's worked with a wide range of coats for years will generally handle tricky mats, thick undercoats, or unusual cuts more confidently than someone newer to the trade.",
          "Do they groom cats as well as dogs? Not every groomer takes cat clients — it's worth confirming upfront rather than assuming, if you have a cat.",
          "Is the facility cage-free, or does your pet wait in a kennel between steps? For a nervous or anxious pet, this can make a noticeable difference in how the visit goes.",
          "Are they comfortable with senior, large-breed, or nervous pets specifically? Some groomers are more patient and experienced with pets that need extra care or a slower pace.",
          "Is it a personal, one-on-one experience, or a high-volume operation where your pet is one of many at once?",
        ],
      },
      { type: "h2", text: "Why It's Worth Asking Upfront" },
      {
        type: "p",
        text: "A groomer's answers to these questions tell you a lot about what kind of visit to expect — not just the haircut itself, but how comfortable your pet will be getting there. At our Funkstown salon, we've been grooming dogs and cats for the greater Hagerstown area for over 40 years, take a cage-free approach, and are comfortable with nervous, senior, and large-breed pets — but the questions above are worth asking anywhere you're considering, not just here.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "cat-grooming"],
  },
  {
    slug: "brushing-at-home-between-grooms-preventing-mats",
    title: "Brushing at Home Between Grooms: How to Keep Mats From Forming",
    metaDescription:
      "What happens between professional grooms makes the biggest difference in whether a coat mats. A simple at-home brushing routine for dogs and cats, and what to do if a mat has already formed.",
    excerpt:
      "Regular professional grooming is only half of it — what happens at home in between decides whether a coat stays comfortable or mats. Here's a routine that works.",
    eyebrow: "At-Home Care",
    publishedAt: "2026-09-24",
    heroPhotoKey: "oldEnglishSheepdogBlue",
    body: [
      {
        type: "p",
        text: "Even on a regular professional grooming schedule, what happens at home between visits is what decides whether a coat stays soft and comfortable or slowly works itself into mats. Fall makes this a little harder around Washington County: damp mornings, wet leaves on walks, and the return of sweaters and harnesses all add moisture and friction — the two things mats love most.",
      },
      { type: "h2", text: "Where Mats Start" },
      {
        type: "p",
        text: "Mats almost never start on the broad, easy-to-reach parts of the back. They form where hair rubs against hair, skin, or gear — and those are exactly the spots that get skipped during a quick brush:",
      },
      {
        type: "list",
        items: [
          "Behind and under the ears, where hair is fine and gets rubbed by scratching.",
          "The armpits and the inside of the back legs, where the legs move against the body constantly.",
          "Under the collar or along the harness line — friction plus trapped moisture after a walk.",
          "The belly and chest, especially on long-haired cats and low-to-the-ground dogs that pick up damp from grass and leaves.",
          "Feathering on the legs and tail, where burrs and leaf bits tangle in and pull hair together.",
        ],
      },
      { type: "h2", text: "A Simple Routine That Actually Works" },
      {
        type: "list",
        items: [
          "Brush a few times a week for most coats, and daily for long, silky, or curly coats (Doodles, Shih Tzus, Maltese, long-haired cats). A few minutes often beats one long session once a week.",
          "Use two tools, not one: a slicker brush to work through the coat, then a metal comb to check your work. If the comb won't glide through to the skin, the brush hasn't reached it yet — that's where mats are quietly forming.",
          "Work in sections, brushing outward from the skin in layers rather than just skimming the top of the coat. Surface brushing looks tidy but leaves the undercoat to tangle.",
          "Always brush before a bath, never after. Water tightens an existing tangle into a solid mat that's much harder to remove.",
          "Dry your pet fully after rain, a muddy walk, or a bath, paying attention to armpits and belly. Damp hair left to air-dry felts together.",
          "Check the harness and sweater areas after every walk — a quick pass with the comb catches friction tangles while they're still loose.",
        ],
      },
      { type: "h2", text: "If a Mat Has Already Formed" },
      {
        type: "p",
        text: "Small, loose tangles can often be worked out from the edges with a comb and a little patience — start at the outside of the tangle and work inward, holding the hair at the base so you're not pulling on the skin. Two things to avoid: don't cut a mat out with scissors, and don't bathe a matted pet. A tight mat pulls the skin up into it, which makes scissor cuts to the skin surprisingly common, and water only makes the mat tighter.",
      },
      {
        type: "p",
        text: "A mat that's tight against the skin, or one that's spread across a larger area, is safer to have clipped out professionally with the right tools. It's not a failure on your part — it happens to attentive owners all the time, especially with fast-growing coats. If you're not sure whether what you're feeling is still brushable, call our Funkstown salon and ask. After more than 40 years of grooming dogs and cats for the Hagerstown area, it's a question we're glad to answer before a small tangle turns into a full shave-down.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "dog-bath-and-brush", "cat-grooming"],
  },
  {
    slug: "getting-your-pets-coat-ready-for-cold-weather",
    title: "Getting Your Pet's Coat and Paws Ready for Cold Weather",
    metaDescription:
      "Should you let your dog's coat grow out for winter? What cold weather, snow, and road salt mean for dog and cat coats and paws, and how to adjust grooming for the season.",
    excerpt:
      "Colder months change what a coat and paws need. Here's how to adjust grooming for winter without overdoing it or letting things slide.",
    eyebrow: "Seasonal Care",
    publishedAt: "2026-09-28",
    heroPhotoKey: "tricolorDogBandana",
    body: [
      {
        type: "p",
        text: "As fall turns to winter around Hagerstown and the rest of Washington County, a lot of pet owners wonder whether they should change their dog's or cat's grooming routine. The short answer is yes, a little. Cold, wet weather, snow, road salt, and dry indoor heat all affect coats and paws differently than summer does. The goal isn't to stop grooming for the season; it's to groom for the conditions.",
      },
      { type: "h2", text: "Should You Let the Coat Grow Out?" },
      {
        type: "p",
        text: "For many dogs, leaving the coat a bit longer through winter makes sense, but longer isn't automatically warmer if the coat isn't maintained. A long coat that's matted doesn't insulate well: mats hold moisture against the skin and leave gaps where the coat can't loft. A slightly longer, well-brushed coat does the job better than a long, neglected one.",
      },
      {
        type: "list",
        items: [
          "Double-coated breeds (Huskies, Malamutes, Shepherds) are built for cold, so their undercoat does the work. Keeping loose undercoat brushed out helps it insulate properly rather than packing down.",
          "Curly and continuously growing coats (Poodles, Doodles, Bichons) still grow all winter and still mat, so regular grooms matter just as much in January as in July. Many owners simply ask for a slightly longer trim.",
          "Short, single-coated dogs don't gain much from skipping grooms, and small or thin-coated breeds may be more comfortable in a sweater on the coldest walks.",
        ],
      },
      { type: "h2", text: "Paws Take the Brunt of Winter" },
      {
        type: "p",
        text: "Paws deal with snow, ice, and the salt and de-icer spread on sidewalks and roads. A few habits help a lot:",
      },
      {
        type: "list",
        items: [
          "Wipe paws with a damp cloth after walks on salted surfaces, since salt and de-icers can dry and irritate the pads, and dogs will lick them off.",
          "Keep the fur between the paw pads short. Long fur there collects snowballs and ice clumps that pull on the skin, and it holds onto salt. It's an easy thing to mention at your pet's next groom.",
          "Keep an eye on nail length. Dogs often walk less on hard pavement in winter, so nails wear down less on their own and can get long faster than you expect.",
        ],
      },
      { type: "h2", text: "Baths and Dry Indoor Air" },
      {
        type: "p",
        text: "Winter baths are fine as long as your pet is dried completely, down to the skin, before going back out into the cold. A damp undercoat stays cold for a long time. Dry indoor heat can also leave some dogs and cats with flaky skin or static-prone coats; regular brushing helps spread natural oils, and over-bathing can make dryness worse. Cats, especially long-haired ones who spend more time curled up indoors, can develop mats in their belly and armpit fur during the colder months, so it's worth checking them too.",
      },
      {
        type: "p",
        text: "If you'd like a coat or paws looked at before the cold really sets in, call our Funkstown salon. We've been grooming dogs and cats for the Hagerstown area through more than 40 winters, and we're happy to talk through what your pet's coat needs this season.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "deshedding-treatment", "nail-trim-ear-cleaning"],
  },
  {
    slug: "fall-tick-and-flea-checks-for-dogs-and-cats",
    title: "Fall Tick and Flea Checks: What to Look For After Walks",
    metaDescription:
      "Ticks and fleas don't disappear when summer ends. Where to check your dog or cat after fall walks, how to remove a tick safely, and signs of fleas to watch for.",
    excerpt:
      "Ticks and fleas don't quit when summer ends. Here's where to check after fall walks, and what to do if you find something.",
    eyebrow: "Seasonal Care",
    publishedAt: "2026-10-01",
    heroPhotoKey: "blackLabPinkBandana",
    body: [
      {
        type: "p",
        text: "It's easy to assume tick and flea season wraps up with summer, but fall is still an active time for both. Adult deer ticks are out in autumn and on mild winter days, and fleas brought indoors can keep breeding in a warm house long after the weather turns. Leaf piles, tall grass at field edges, and wooded trails around Washington County, from the C&O Canal towpath near Williamsport to backyard tree lines in Funkstown and Hagerstown, are all prime spots for a dog to pick something up.",
      },
      { type: "h2", text: "Where to Check After a Walk" },
      {
        type: "p",
        text: "Ticks tend to crawl to warm, sheltered spots before they attach, so a quick pass over the top of the back can miss them. Run your fingers slowly through the coat, down to the skin, and pay extra attention to:",
      },
      {
        type: "list",
        items: [
          "In and around the ears, including the folds of floppy ears.",
          "Under the collar or harness.",
          "The armpits and the groin, where the legs meet the body.",
          "Between the toes and around the paw pads.",
          "Around the eyes and along the muzzle.",
          "Under the tail and around the base of the tail.",
        ],
      },
      {
        type: "p",
        text: "A tick that's attached can feel like a small, firm bump, and it's easy to mistake for a skin tag or a burr. Thick or long coats make this harder, which is one more reason regular brushing at home pays off: you're far more likely to notice something new when you're working through the coat a few times a week.",
      },
      { type: "h2", text: "If You Find a Tick" },
      {
        type: "list",
        items: [
          "Use fine-tipped tweezers or a tick-removal tool and grasp the tick as close to the skin as you can.",
          "Pull straight out with steady, even pressure. Don't twist, squeeze the body, or jerk it out.",
          "Skip the old tricks like petroleum jelly, nail polish, or a hot match. They don't make the tick let go, and they can make things worse.",
          "Clean the spot afterward and keep an eye on it for a few days. If it looks red or swollen, or your pet seems off, check in with your vet.",
        ],
      },
      { type: "h2", text: "Signs of Fleas" },
      {
        type: "p",
        text: "Fleas are quick and hard to spot directly, so look for the clues they leave: more scratching or chewing than usual, especially around the lower back and tail base, and tiny black specks in the coat called flea dirt. To tell flea dirt from ordinary dirt, put a few specks on a damp white paper towel. If they smear reddish-brown, it's flea dirt. Cats, even indoor ones, can get fleas carried in on people or other pets, and they often over-groom rather than scratch, so thinning fur or hair in the litter box area can be a sign.",
      },
      {
        type: "p",
        text: "Prevention is a conversation for your veterinarian, who can recommend a product that suits your pet's age, size, and health. One important note: never use a dog flea product on a cat. Some ingredients that are safe for dogs are toxic to cats.",
      },
      {
        type: "p",
        text: "A bath and thorough brush-out between full grooms is also a good chance to get a close look at skin and coat. If your pet is due for one, or you've recently found fleas and want to mention it ahead of an appointment, call our Funkstown salon.",
      },
    ],
    relatedServiceSlugs: ["dog-bath-and-brush", "dog-grooming", "cat-grooming"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
