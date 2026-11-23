import { PATHS } from "./site-data";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date, e.g. "2026-08-18"
  category: string;
  excerpt: string;
  content: BlogContentBlock[];
  relatedPath: string;
  relatedLabel: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-to-groom-your-dog-in-the-high-desert-heat",
    title: "How Often Should You Groom Your Dog in the High Desert Heat?",
    description:
      "How Victorville's hot, dry summers affect your dog's coat and skin, and how often to schedule grooming to keep them comfortable.",
    date: "2026-08-05",
    category: "Grooming Tips",
    excerpt:
      "Victorville summers are hot and dry, and that combination is tougher on a dog's coat and skin than most pet parents realize.",
    relatedPath: PATHS.dog,
    relatedLabel: "See our Dog Grooming services",
    content: [
      {
        type: "paragraph",
        text: "Victorville summers are hot and dry, and that combination is tougher on a dog's coat and skin than most pet parents realize. Heat and low humidity dry out skin, and a matted or overgrown coat traps warmth right against the body instead of letting it escape.",
      },
      { type: "heading", text: "Why coat condition matters more in summer" },
      {
        type: "paragraph",
        text: "A dog's coat is part of their temperature regulation system, not just their appearance. Mats and heavy undercoat buildup block airflow to the skin and can make it harder for a dog to cool down. Regular brushing and deshedding during the warmer months helps their natural cooling actually work.",
      },
      { type: "heading", text: "A general grooming schedule" },
      {
        type: "list",
        items: [
          "Short-coated breeds: every 6–8 weeks, with more frequent brushing at home",
          "Double-coated breeds (Huskies, Shepherds, etc.): deshedding every 4–6 weeks during shedding season",
          "Long-haired or curly-coated breeds: every 4–6 weeks to prevent matting",
          "Any breed, any coat: check paw pads and between toes more often in summer — hot pavement and dry skin cause more irritation this time of year",
        ],
      },
      {
        type: "paragraph",
        text: "Every dog's coat and skin are different, so these are general guidelines rather than a fixed rule — a quick call is the easiest way to figure out the right interval for your specific dog.",
      },
    ],
  },
  {
    slug: "mobile-vs-in-store-grooming-which-is-right-for-your-pet",
    title: "Mobile vs. In-Store Grooming: Which Is Right for Your Pet?",
    description:
      "The real tradeoffs between mobile pet grooming and a traditional in-store appointment, so you can pick what actually fits your pet and your schedule.",
    date: "2026-08-19",
    category: "Grooming Tips",
    excerpt:
      "Neither option is universally \"better\" — it comes down to your pet's temperament, your schedule, and what you're trying to solve for.",
    relatedPath: PATHS.mobile,
    relatedLabel: "Learn about Pampered Puppies At Your Door",
    content: [
      {
        type: "paragraph",
        text: "Mobile grooming has grown a lot in popularity, but that doesn't mean it's automatically the right fit for every pet. Neither option is universally \"better\" — it comes down to your pet's temperament, your schedule, and what you're trying to solve for.",
      },
      { type: "heading", text: "When mobile grooming tends to make sense" },
      {
        type: "list",
        items: [
          "Pets that get anxious around other animals or unfamiliar spaces",
          "Senior pets or pets with mobility issues who'd rather skip the car ride",
          "Multi-pet households where coordinating one in-store trip is a hassle",
          "Busy schedules where a groomer coming to you saves real time",
        ],
      },
      { type: "heading", text: "When an in-store visit still fits better" },
      {
        type: "list",
        items: [
          "Pets that do fine with new environments and enjoy the outing",
          "More involved services that benefit from a full studio setup",
          "Pet parents who prefer the lower per-visit cost of an in-store appointment",
        ],
      },
      {
        type: "paragraph",
        text: "Mobile visits typically run a bit higher than the same in-store service, since it covers the groomer's travel and setup at your home. If you're not sure which makes sense for your pet, it's worth just asking — a quick conversation about your pet's personality and your routine usually makes the answer obvious.",
      },
    ],
  },
  {
    slug: "getting-your-anxious-dog-ready-for-their-first-groom",
    title: "Getting Your Anxious Dog Ready for Their First Groom",
    description:
      "Practical, low-stress ways to prepare a nervous or first-time dog for their grooming appointment, from handling practice to what to tell your groomer.",
    date: "2026-09-02",
    category: "Pet Care",
    excerpt:
      "A little preparation at home can make a real difference in how your dog experiences their first appointment.",
    relatedPath: PATHS.anxious,
    relatedLabel: "See our Anxious & Senior Dog Grooming page",
    content: [
      {
        type: "paragraph",
        text: "A nervous first grooming visit is one of the most common worries pet parents bring up — and it's a completely reasonable one. Clippers, water, and being handled by someone new are all new experiences for a dog, and a little preparation at home can make a real difference in how they experience their first appointment.",
      },
      { type: "heading", text: "Before the appointment" },
      {
        type: "list",
        items: [
          "Get your dog comfortable being touched on their paws, ears, and face during normal petting at home",
          "Let them hear the sound of clippers or a hair dryer from a distance (a video works fine) so it's not their first time hearing it at the groomer",
          "Keep the morning of the appointment calm — a walk beforehand can help burn off nervous energy",
          "Avoid a big breakfast right before if your dog tends to get carsick or anxious",
        ],
      },
      { type: "heading", text: "What to tell your groomer" },
      {
        type: "paragraph",
        text: "Always mention any past bad experiences, specific triggers (nail trims, dryers, being crated), or medical issues before the appointment starts. A groomer who knows what to expect can adjust their pace and approach instead of discovering it mid-groom.",
      },
      {
        type: "paragraph",
        text: "For dogs who are especially anxious or senior dogs who need a slower pace, a patient, low-cage-time approach makes a real difference — it's worth asking specifically how a groomer handles nervous dogs before booking.",
      },
    ],
  },
  {
    slug: "why-cats-need-professional-grooming-too",
    title: "Why Cats Need Professional Grooming Too",
    description:
      "Cats groom themselves, but self-grooming has real limits — here's when a professional cat groom actually helps, from mats to hairballs to overdue nail trims.",
    date: "2026-11-05",
    category: "Pet Care",
    excerpt:
      "Self-grooming has real limits — here's when your cat could use some professional help, and why it matters more than most pet parents realize.",
    relatedPath: PATHS.cat,
    relatedLabel: "See our Cat Grooming services",
    content: [
      {
        type: "paragraph",
        text: "It's a common assumption that cats don't need grooming help since they groom themselves — and for plenty of short-haired, healthy adult cats, that's mostly true. But self-grooming has real limits, and knowing when a cat could use some extra help keeps their coat and skin genuinely healthy, not just tidy.",
      },
      { type: "heading", text: "What self-grooming doesn't cover" },
      {
        type: "paragraph",
        text: "A cat's tongue is great at maintaining a healthy coat day to day, but it can't do everything. Loose fur a cat swallows while grooming has to go somewhere — more hairballs are often a sign there's more loose coat than self-grooming can keep up with. Cats also can't reach every spot on their own body, so mats tend to form in the same few places: behind the legs, under the arms, and around the belly. And grooming doesn't include nail trims, which still need to happen on their own schedule.",
      },
      { type: "heading", text: "Signs your cat could use a groom" },
      {
        type: "list",
        items: [
          "Visible mats or tangles, especially behind the legs, under the arms, or on the belly",
          "More hairballs than usual, or excessive loose fur around the house",
          "Nails long enough to catch on fabric or furniture",
          "A senior or overweight cat who seems to be grooming less than they used to",
          "A coat that looks oily, dull, or has a noticeable odor",
        ],
      },
      {
        type: "paragraph",
        text: "Mats that are tight against the skin can be genuinely painful and sometimes mask irritation or sores underneath — if a mat looks severe or your cat reacts painfully when you touch it, it's worth having it checked by a veterinarian rather than working it out at home.",
      },
      {
        type: "paragraph",
        text: "Even short-haired cats benefit from an occasional professional groom, and long-haired breeds typically need it more regularly to stay comfortable. A groomer experienced with cats can also make the whole experience far less stressful than most pet parents expect.",
      },
    ],
  },
  {
    slug: "when-to-schedule-your-puppys-first-grooming-appointment",
    title: "When Should You Schedule Your Puppy's First Grooming Appointment?",
    description:
      "When to book your puppy's first grooming visit, why early positive exposure matters, and what a first appointment typically looks like.",
    date: "2026-11-09",
    category: "Pet Care",
    excerpt:
      "Starting early and keeping the first visit low-key sets the tone for every grooming appointment that follows.",
    relatedPath: PATHS.puppy,
    relatedLabel: "See our Puppy Grooming page",
    content: [
      {
        type: "paragraph",
        text: "One of the most common questions new puppy owners ask is when to start grooming — too early and it feels unnecessary, too late and a puppy can already have developed matting or a fear of the process. Getting the timing right makes grooming a normal, low-stress part of their routine instead of something to dread.",
      },
      { type: "heading", text: "Why early exposure matters" },
      {
        type: "paragraph",
        text: "Puppies go through a key socialization window roughly between 8 and 16 weeks of age, when new experiences are much more likely to be accepted calmly rather than feared. A positive first grooming visit during this window — gentle handling, the sound of clippers or a dryer, being on a grooming table — helps a puppy grow into an adult dog who's relaxed about grooming rather than anxious about it.",
      },
      { type: "heading", text: "What a first visit typically looks like" },
      {
        type: "list",
        items: [
          "Shorter and lighter than an adult groom — often just a bath, a light trim around the face, feet, and sanitary areas, and getting comfortable with being handled",
          "A slower pace with more breaks, prioritizing a calm experience over a perfectly polished result",
          "Many groomers ask about vaccination status before a puppy's first visit, since they'll be around other animals and shared equipment",
          "Breeds with fast-growing or curly coats (poodles, doodles, and similar) may need their first trim earlier than breeds with a slower-growing coat",
        ],
      },
      {
        type: "paragraph",
        text: "If your puppy already seems nervous by the time you're ready to book, the same patient, go-slow approach used for anxious dogs works well for puppies too — there's no reason a first grooming experience has to be stressful for either of you.",
      },
    ],
  },
  {
    slug: "is-a-pet-grooming-membership-worth-it",
    title: "Is a Pet Grooming Membership Worth It?",
    description:
      "How to tell if a pet grooming membership or loyalty plan actually pays off, and what a good one should include.",
    date: "2026-11-12",
    category: "Pet Care",
    excerpt:
      "Grooming is a recurring cost, not a one-time one — which makes it worth asking whether a membership plan actually saves you money.",
    relatedPath: PATHS.membership,
    relatedLabel: "Learn about our VIP Membership",
    content: [
      {
        type: "paragraph",
        text: "Most pets need professional grooming on a repeating schedule — every 4 to 8 weeks depending on coat type — which means it's a recurring cost, not a one-time one. That's exactly what makes it worth asking whether a membership or loyalty plan actually saves you money over a year of visits, rather than just assuming it does.",
      },
      { type: "heading", text: "What a good grooming membership should include" },
      {
        type: "list",
        items: [
          "A straightforward discount on every visit, not just your first one",
          "No blackout dates or complicated restrictions on when the discount applies",
          "Some kind of scheduling benefit, like priority booking, since grooming slots fill up",
          "A fee structure where the math actually works out for how often your pet needs grooming",
        ],
      },
      { type: "heading", text: "Running the numbers before you sign up" },
      {
        type: "paragraph",
        text: "The simplest way to check if a membership is worth it: take your pet's typical per-visit cost, multiply the plan's discount percentage against it, then multiply that savings by how many times a year your pet actually gets groomed. If that total savings is close to or more than the membership fee itself, it's a good deal — if your pet only gets groomed once or twice a year, the math usually doesn't favor a membership.",
      },
      {
        type: "paragraph",
        text: "Our own PPG VIP Membership is a straightforward example of this: $99 a year for 18% off every grooming visit plus priority scheduling, no blackout dates. For a pet groomed every 6–8 weeks, that discount adds up quickly — it's worth asking your groomer directly whether a plan like this makes sense for your specific pet and schedule.",
      },
    ],
  },
  {
    slug: "winter-coat-and-paw-care-for-your-dog",
    title: "Winter Coat and Paw Care for Your Dog in the High Desert",
    description:
      "How cold, dry High Desert winters affect a dog's coat and paws differently than summer heat, and what grooming adjustments help.",
    date: "2026-11-16",
    category: "Grooming Tips",
    excerpt:
      "High Desert winters bring cold, dry air that affects a dog's coat and paws in different ways than summer heat does — and the grooming approach should shift with it.",
    relatedPath: PATHS.dog,
    relatedLabel: "See our Dog Grooming services",
    content: [
      {
        type: "paragraph",
        text: "High Desert days can still feel mild in winter, but nights and mornings drop cold, and the air stays dry year-round. That combination affects a dog's coat and paws differently than summer heat does, and it's worth adjusting grooming habits for the season rather than sticking with a summer routine straight through winter.",
      },
      { type: "heading", text: "Don't over-shave in cold months" },
      {
        type: "paragraph",
        text: "A dog's coat is natural insulation, and shaving it down too short right before cold weather removes that protection when they need it most. For breeds that are typically trimmed short, keeping a slightly longer length through the winter months — rather than the shortest possible cut — helps them stay comfortably warm without sacrificing a tidy look.",
      },
      { type: "heading", text: "Paw care in cold, dry weather" },
      {
        type: "list",
        items: [
          "Trim the fur between paw pads so it doesn't collect ice, mud, or de-icing chemicals on walks",
          "Check pads regularly for cracking or dryness — cold pavement and low humidity are hard on paw skin",
          "Wipe paws down after walks on treated sidewalks or roads to remove salt or ice-melt residue",
          "Keep nails trimmed — longer nails can make it harder for a dog to get solid footing on cold, slick surfaces",
        ],
      },
      {
        type: "paragraph",
        text: "If a paw pad looks cracked, raw, or your dog is limping or favoring a paw, that goes beyond routine grooming — have a veterinarian take a look before it gets worse. For everything else, a seasonal check-in with your groomer about coat length and paw care is an easy way to keep your dog comfortable all winter.",
      },
    ],
  },
  {
    slug: "grooming-considerations-for-senior-dogs",
    title: "Grooming Considerations for Senior Dogs",
    description:
      "How grooming needs shift as a dog ages, from skin and joint changes to session length, and what to ask your groomer for an older dog.",
    date: "2026-11-19",
    category: "Pet Care",
    excerpt:
      "A senior dog's grooming needs aren't about fear the way a nervous dog's can be — they're about physical comfort, and that calls for a different approach.",
    relatedPath: PATHS.anxious,
    relatedLabel: "See our Anxious & Senior Dog Grooming page",
    content: [
      {
        type: "paragraph",
        text: "A senior dog's grooming needs aren't about fear the way a nervous dog's can be — they're about physical comfort. As dogs age, their skin, joints, and stamina all change, and a grooming routine that worked fine for years can need some real adjustments to stay comfortable.",
      },
      { type: "heading", text: "What changes as dogs age" },
      {
        type: "list",
        items: [
          "Skin tends to get thinner and drier, making it more sensitive to handling and water temperature",
          "Joint stiffness or arthritis can make standing for a long groom, or holding certain positions, uncomfortable",
          "Coats can mat more easily if an older dog is less active and self-maintaining than they used to be",
          "Nails may grow thicker or more brittle, and quicker to overgrow if a senior dog is walking less",
        ],
      },
      { type: "heading", text: "Grooming adjustments that help" },
      {
        type: "paragraph",
        text: "Shorter sessions with more breaks, warm water, and extra support getting on and off the grooming table all make a real difference for an older dog. More frequent brushing between appointments also helps prevent the kind of matting that would otherwise require a longer, more involved dematting session later. A patient, low-cage-time approach — the same one that helps anxious dogs — tends to suit senior dogs well too.",
      },
      {
        type: "paragraph",
        text: "If you notice new lumps, bumps, unusual sensitivity, or signs of pain during grooming, it's worth having your veterinarian take a look rather than waiting until the next appointment. Otherwise, letting your groomer know your dog is a senior — and what specifically has gotten harder for them — helps them adjust their pace and approach from the start.",
      },
    ],
  },
  {
    slug: "flea-and-tick-prevention-what-grooming-can-and-cant-do",
    title: "Flea and Tick Prevention: What Grooming Can (and Can't) Do",
    description:
      "How professional grooming helps catch and remove fleas and ticks, and why it's not a substitute for ongoing veterinary prevention between visits.",
    date: "2026-11-23",
    category: "Pet Care",
    excerpt:
      "Grooming is genuinely useful against fleas and ticks, but it's easy to overestimate what it can do on its own.",
    relatedPath: PATHS.dog,
    relatedLabel: "See our Dog Grooming services",
    content: [
      {
        type: "paragraph",
        text: "A professional groom is genuinely useful against fleas and ticks — but it's easy to overestimate what it can do on its own. Knowing the difference between what grooming handles well and what it can't replace helps keep your pet actually protected, not just freshly bathed.",
      },
      { type: "heading", text: "What grooming can do" },
      {
        type: "list",
        items: [
          "Catch fleas, ticks, or flea dirt during the groom that you might not have noticed at home",
          "Remove fleas and ticks already present through bathing and flea/tick treatment",
          "Spot early skin irritation, hot spots, or scabbing caused by bites",
          "Find ticks hiding in dense, long, or matted fur that's hard to check at home",
        ],
      },
      { type: "heading", text: "What grooming can't do" },
      {
        type: "paragraph",
        text: "A single grooming appointment removes what's already there — it doesn't create ongoing protection between visits. New fleas and ticks can still latch on the day after a groom. Year-round prevention really comes down to a vet-prescribed product (oral, topical, or a collar), not grooming frequency. Grooming is a good way to catch a problem early and deal with what's already present, but it works alongside prevention, not instead of it.",
      },
      {
        type: "paragraph",
        text: "If you find a tick still attached, notice signs of flea allergy dermatitis (excessive scratching, hair loss, scabbing), or your pet seems unusually itchy or lethargic, that's a question for your veterinarian rather than something grooming alone can resolve. Flea treatment and tick removal are part of our regular service list for both dogs and cats, so it's worth mentioning any concerns when you book.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
