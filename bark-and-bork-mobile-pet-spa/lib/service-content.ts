import type { ServiceSlug } from "./site-data";

// In-depth guide copy for each service page. Business facts (prices, times,
// what's included, limits) must match lib/site-data.ts; everything else is
// general, hedged dog-care guidance. No medical claims — anything health
// related points to a veterinarian.
export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export const serviceGuides: Record<ServiceSlug, GuideSection[]> = {
  "mobile-dog-grooming": [
    {
      heading: "What It Costs",
      paragraphs: [
        "Pricing starts from your dog's size and the package you choose. Bath & Tidy runs from $75+ for small dogs up to $135+ for extra-large dogs. Full Groom, which adds a complete haircut, runs from $100+ up to $160+.",
        "Add-ons are flat-priced: teeth brushing is $10, and anal gland expression, flea & tick treatment, and the De-Shedding Treatment are $15 each. Dematting is priced separately by size, from $50 to $80. Final prices can vary with coat condition, matting, and your dog's specific needs.",
      ],
    },
    {
      heading: "Is Mobile Grooming a Good Fit for Your Dog?",
      paragraphs: [
        "Mobile grooming suits a lot of dogs, and it's especially helpful for a few kinds. Dogs who get carsick or anxious on drives skip the ride completely. Dogs who find a busy salon overwhelming get a one-on-one appointment with no other dogs around. Large dogs that are hard to lift into a car are groomed right outside your home.",
        "It also works for owners. You don't have to drop off and pick up, block out an afternoon of driving, or wait for a call saying your dog is ready. Booking is online, any day of the week between 9 AM and 7 PM.",
      ],
    },
    {
      heading: "Where the Van Goes",
      paragraphs: [
        "Bark and Bork is based in Compton and serves nearby communities across southern Los Angeles County, including Lynwood, Paramount, Willowbrook, South Gate, Downey, Bellflower, Gardena, Hawthorne, Inglewood, Carson, and Long Beach. If you're elsewhere in greater Los Angeles, call before booking to check your address.",
      ],
    },
  ],

  "full-dog-grooming": [
    {
      heading: "When to Choose a Full Groom",
      paragraphs: [
        "Choose a Full Groom when your dog's coat needs to be cut, not just cleaned. That usually means long or continuously growing coats, such as poodles and poodle mixes, Shih Tzus, Yorkies, Bichons, and doodles. These coats keep growing and tangle if they aren't trimmed regularly.",
        "It's also the right choice when a coat has grown out of shape, is starting to cover your dog's eyes, or is collecting debris around the paws and rear.",
      ],
    },
    {
      heading: "How Long It Takes",
      paragraphs: [
        "Because it includes a haircut, a Full Groom takes longer than a Bath & Tidy. Expect about 1.5–2.5 hours for small dogs, 2–3 hours for medium, 2.5–3.5 hours for large, and 3–4 hours for extra-large dogs. Nervous dogs and dogs who need breaks may take longer, and most appointments finish within four hours.",
      ],
    },
    {
      heading: "Keeping the Cut Looking Good",
      paragraphs: [
        "A few habits help a fresh cut last:",
      ],
      bullets: [
        "Brush a few times a week, paying extra attention behind the ears and under the legs.",
        "Book a Bath & Tidy between haircuts to keep the coat clean and nails short.",
        "Tell the groomer how you like your dog's coat kept, so each cut matches what you want.",
      ],
    },
  ],

  "bath-and-tidy": [
    {
      heading: "Who Bath & Tidy Is For",
      paragraphs: [
        "Bath & Tidy is maintenance grooming. It fits short-coated dogs that never need a haircut, like Labs, pit bull mixes, and Chihuahuas, as well as long-coated dogs between Full Grooms. You get a clean, fresh dog with trimmed nails and tidy edges, without a change in coat length.",
      ],
    },
    {
      heading: "How the Appointment Goes",
      paragraphs: [
        "The bath comes first, with shampoo and conditioner, followed by a blow dry and brush out to remove loose hair. The groomer then trims the nails, cleans the ears, and does a sanitary trim and paw pad trim so your dog stays clean and has better footing. A light face tidy and finishing spray complete the visit.",
        "Small dogs usually take 1–2 hours, and extra-large dogs up to 2.5–4 hours, depending on coat and temperament.",
      ],
    },
    {
      heading: "Bath & Tidy or Full Groom?",
      paragraphs: [
        "If the coat is the length you like and just needs cleaning, Bath & Tidy is enough. If the coat is too long, uneven, or starting to tangle, book a Full Groom, which includes everything here plus a complete haircut.",
      ],
    },
  ],

  deshedding: [
    {
      heading: "Why Double-Coated Dogs Shed So Much",
      paragraphs: [
        "Breeds like huskies and German Shepherds have two layers of coat: a coarse outer coat and a soft, dense undercoat. The undercoat sheds constantly and heavily when the seasons change. Much of that loose fur stays trapped close to the skin until it's brushed out, or until it lands on your couch.",
      ],
    },
    {
      heading: "What the Treatment Does, and What It Doesn't",
      paragraphs: [
        "The De-Shedding Treatment spends about 30 extra minutes working loose undercoat out of the coat during the grooming visit. Less undercoat means less fur around your home for a while afterward.",
        "It doesn't stop shedding, because shedding is a natural part of a double coat. It also doesn't replace brushing between appointments. Many owners find it most worthwhile during seasonal coat changes, when shedding is heaviest.",
      ],
    },
    {
      heading: "Between Appointments",
      paragraphs: ["A little upkeep at home stretches the results:"],
      bullets: [
        "Brush a few times a week with a brush suited to double coats, working down to the undercoat.",
        "Brush more often during heavy shedding seasons.",
        "Ask your vet if shedding suddenly changes or comes with bald patches or skin irritation.",
      ],
    },
  ],

  dematting: [
    {
      heading: "Why Mats Are More Than a Cosmetic Problem",
      paragraphs: [
        "A mat is loose hair that has tangled and tightened into a clump. Mats hold moisture and dirt against the skin and pull when your dog moves, which can be uncomfortable. They often start in friction spots: behind the ears, in the armpits, along the belly, and under the collar.",
      ],
    },
    {
      heading: "What Happens During Dematting",
      paragraphs: [
        "The groomer works through tangles carefully, section by section, with about 60 minutes set aside. Small, loose mats can usually be worked out. When mats are tight against the skin, brushing them out would hurt, so clipping the coat short is kinder. The groomer will explain what they find and talk the options through with you before going ahead.",
      ],
    },
    {
      heading: "Keeping Mats From Coming Back",
      paragraphs: ["Once the coat is back in shape, prevention is mostly routine:"],
      bullets: [
        "Brush all the way down to the skin, not just the top layer.",
        "Check the friction spots after walks, baths, and swims.",
        "Keep a regular grooming schedule so tangles never have time to tighten.",
      ],
    },
  ],

  "flea-tick-treatment": [
    {
      heading: "What's Included",
      paragraphs: [
        "The treatment is added to a grooming visit for $15 and takes about 15 minutes. It includes a flea and tick shampoo, thorough rinsing, and careful combing, plus removal of fleas, flea debris, and ticks when possible.",
      ],
    },
    {
      heading: "When to Add It",
      paragraphs: [
        "Add it if you've seen fleas or ticks on your dog, noticed flea dirt (small dark specks) in the coat, or your dog has been scratching more than usual. It's also worth considering after time in tall grass or brush.",
        "It handles pests found during the appointment. It doesn't provide ongoing protection, so fleas can come back from the environment or other pets.",
      ],
    },
    {
      heading: "After the Appointment",
      paragraphs: ["A few steps help keep fleas from coming back:"],
      bullets: [
        "Wash your dog's bedding and vacuum the areas where they rest.",
        "Check other pets in the home too.",
        "Talk to your veterinarian about an ongoing flea and tick preventative.",
      ],
    },
  ],

  "anal-gland-expression": [
    {
      heading: "What Anal Glands Are",
      paragraphs: [
        "Dogs have two small scent glands just inside the rear end. Normally they empty on their own. When they don't, dogs may scoot, lick or chew the area, or give off a fishy smell.",
      ],
    },
    {
      heading: "What We Do, and What We Don't",
      paragraphs: [
        "Bark and Bork offers external anal gland expression as a $15 add-on, about 10 minutes, performed when appropriate during grooming. External means gentle pressure from outside. It is not the internal expression a veterinarian performs.",
        "Not every dog needs it. Many dogs never have gland problems, so you only need to add it if your dog shows signs or your vet has recommended it.",
      ],
    },
  ],

  "teeth-brushing": [
    {
      heading: "What the Add-On Covers",
      paragraphs: [
        "Teeth Brushing is a $10 add-on that takes about 10 minutes during your dog's grooming appointment. The groomer brushes your dog's teeth as part of the visit, a simple way to add some dental care to a routine you're already keeping.",
        "It is not a professional dental cleaning. It doesn't remove hardened tartar below the gumline, and it doesn't replace dental exams at your vet.",
      ],
    },
    {
      heading: "Signs Your Dog Should See a Vet",
      paragraphs: ["Brushing helps with daily care, but some signs need a veterinarian:"],
      bullets: [
        "Persistent bad breath",
        "Red, swollen, or bleeding gums",
        "Loose, broken, or discolored teeth",
        "Dropping food or chewing on one side",
      ],
    },
    {
      heading: "Brushing at Home",
      paragraphs: [
        "The biggest benefit comes from brushing between appointments. Use a toothpaste made for dogs, never human toothpaste, and start with short sessions so your dog gets used to it.",
      ],
    },
  ],
};
