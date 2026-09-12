// General pet-care educational content — not business-fact claims. Where a
// post touches something specific to Pet Spa Luxe (pricing, what's included
// in a package), it pulls from lib/site-data.ts rather than restating a
// number here, so it can never drift out of sync with the verified data.
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string; // ISO date
  readMinutes: number;
  sections: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-groom-your-dog",
    title: "How Often Should You Groom Your Dog? A Practical Guide",
    description:
      "Grooming frequency depends on coat type, size, and lifestyle more than a single fixed schedule. Here's how to figure out what your dog actually needs.",
    publishedDate: "2026-07-15",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "There's no single answer that fits every dog — a short-haired dog who mostly lounges indoors and a double-coated dog who spends afternoons in the yard are on completely different schedules. What matters more than a fixed number of weeks is paying attention to coat type, activity level, and a few visible signs.",
        ],
      },
      {
        heading: "By coat type",
        paragraphs: [
          "Short, smooth coats (think Beagles, Boxers, many mixed breeds) shed year-round in small amounts and generally do well with a bath every 4–6 weeks, mostly to manage odor and loose hair.",
          "Double-coated breeds (Huskies, Golden Retrievers, Corgis, German Shepherds) carry a dense undercoat that traps loose hair and can mat if it's not worked out regularly. These dogs benefit from more frequent deshedding, especially during seasonal coat blows in spring and fall.",
          "Long or curly coats (Poodles, Shih Tzus, Cocker Spaniels) mat the fastest of any coat type. Left too long between grooms, mats can form close to the skin and become genuinely painful to remove — for these dogs, a full groom every 4–6 weeks isn't a luxury, it's maintenance.",
        ],
      },
      {
        heading: "Signs it's time, regardless of the calendar",
        paragraphs: ["A few things are more reliable than counting weeks:"],
        bullets: [
          "You can smell your dog before you see them",
          "The coat feels greasy or looks dull rather than glossy",
          "You're finding tangles or the beginnings of mats, especially behind the ears, under the collar, or in the armpits",
          "Nails are clicking audibly on hard floors",
          "There's noticeably more loose hair around the house than usual",
        ],
      },
      {
        heading: "A groom isn't always a full groom",
        paragraphs: [
          "Not every visit needs to be a full haircut. A lot of dogs do fine cycling between a simpler bath-and-deshed service for maintenance and a full groom every couple of cycles when the coat actually needs cutting or shaping. That's part of why Pet Spa Luxe offers both an Essential Bath and a Full Dog Grooming package, priced by dog size — so you're not paying for a full groom every time when a bath is really all that's needed.",
        ],
      },
    ],
  },
  {
    slug: "mobile-vs-traditional-dog-grooming",
    title: "Mobile Dog Grooming vs. Traditional Salons: What's the Difference?",
    description:
      "Mobile grooming isn't just a convenience upgrade — for a lot of dogs, it changes the entire experience. Here's how it actually compares to a drop-off salon.",
    publishedDate: "2026-08-01",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "On paper, both get your dog clean and groomed. In practice, the experience for the dog — and for you — is pretty different.",
        ],
      },
      {
        heading: "The traditional salon experience",
        paragraphs: [
          "A typical grooming salon runs multiple dogs through the day. That usually means a drop-off, a wait (often several hours), and time spent in a kennel or crate between steps of the groom while the groomer works on other dogs. For a confident, social dog, that's not a big deal. For a dog who gets anxious around unfamiliar animals, loud dryers, or being separated from you for hours, it can be genuinely stressful.",
        ],
      },
      {
        heading: "What's different about mobile grooming",
        paragraphs: [
          "A mobile groomer comes to you, works on one dog at a time in a fully equipped van, and hands your dog back the same visit — no drop-off, no waiting room, no other dogs in the space. The whole appointment happens in the time it takes for that one groom, start to finish.",
        ],
        bullets: [
          "One-on-one attention the entire appointment — never rushed to make room for the next dog",
          "No car ride to a salon, which matters for dogs who get carsick or anxious in the car",
          "No time spent caged or crated between steps",
          "Familiar surroundings — your dog is groomed right outside your own home",
        ],
      },
      {
        heading: "Who benefits most",
        paragraphs: [
          "Mobile grooming tends to make the biggest difference for senior dogs who don't do well with long waits, anxious or reactive dogs who struggle in a busy salon environment, and multi-pet or multi-person households where coordinating a salon drop-off is its own hassle. That said, plenty of dogs who'd be totally fine at a salon still prefer the one-on-one, low-stress version — it's simply a calmer way to get groomed.",
        ],
      },
    ],
  },
  {
    slug: "signs-your-dog-needs-a-bath",
    title: "5 Signs Your Dog Needs a Bath (Before It Becomes a Bigger Job)",
    description:
      "A dog that \"smells a little\" today can turn into a matted, irritated coat in a few weeks. Here's what to watch for, and why waiting rarely makes the job easier.",
    publishedDate: "2026-08-20",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "It's easy to let bath time slide a week or two past when you first notice something's off. The trouble is, coat and skin problems tend to compound rather than stay the same size — so it's worth catching the early signs.",
        ],
      },
      {
        heading: "The signs",
        bullets: [
          "Noticeable odor, especially somewhere other than right after a walk or play session",
          "A dull, greasy, or flat-looking coat instead of its usual shine",
          "Visible dirt, especially around the paws, belly, and legs",
          "Scratching or licking more than usual, which can point to a buildup of allergens or irritants in the coat",
          "Early tangles forming, particularly in areas that rub — behind the ears, under the collar, the armpits",
        ],
        paragraphs: [],
      },
      {
        heading: "What happens if you wait",
        paragraphs: [
          "A slightly overdue bath is a quick fix. A coat that's gone unwashed for a long stretch, especially on a dog with a longer or double coat, tends to develop small tangles that tighten into real mats. Mats close to the skin can pull and irritate, and by the time they're bad enough to notice, the fix usually isn't a bath anymore — it's a much shorter haircut to remove them safely.",
          "Skin underneath a dirty or matted coat also doesn't get the airflow it needs, which is part of why a lot of skin irritation in dogs traces back to a coat that's overdue for attention.",
        ],
      },
      {
        heading: "A bath doesn't have to mean a full groom",
        paragraphs: [
          "If your dog's coat doesn't actually need cutting, a bath-focused service — a warm-water wash, deshedding, nail trim, ear cleaning — is usually enough to reset things without the cost or time of a full haircut. That's what Pet Spa Luxe's Essential Bath package covers, and it's a good option to reach for the moment you notice any of the signs above, rather than waiting for a bigger problem.",
        ],
      },
    ],
  },
  {
    slug: "deshedding-101",
    title: "Deshedding 101: Why It Matters More Than a Regular Bath",
    description:
      "A normal shampoo and rinse cleans the coat, but it doesn't remove the loose undercoat that causes most shedding and matting. Here's what deshedding actually does.",
    publishedDate: "2026-09-05",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Deshedding gets lumped in with regular bathing, but it's really solving a different problem. A standard bath cleans the coat and skin. Deshedding specifically targets the loose, dead undercoat sitting underneath the topcoat — the layer that a normal wash doesn't fully clear out.",
        ],
      },
      {
        heading: "Which dogs need it most",
        paragraphs: [
          "Double-coated breeds — Huskies, Golden Retrievers, German Shepherds, Corgis, and similar — carry a dense undercoat built for insulation. Twice a year, usually in spring and fall, that undercoat sheds heavily all at once, sometimes called \"blowing coat.\" Left alone, that loose hair doesn't fall out cleanly — it packs down against the skin and can mat, especially in areas with friction like behind the ears or around the hips.",
          "Single-coated breeds shed too, just more evenly year-round and typically in smaller amounts, so they benefit from deshedding but usually don't need it as urgently as a double-coated dog mid-shed.",
        ],
      },
      {
        heading: "What it actually does",
        bullets: [
          "Removes loose undercoat before it mats against the skin",
          "Noticeably cuts down on the hair that ends up on your floors and furniture",
          "Lets air reach the skin better, which supports overall coat and skin health",
          "Makes the next bath or groom faster and more comfortable for the dog, since there's less trapped hair to work through",
        ],
        paragraphs: [],
      },
      {
        heading: "It's already part of the standard groom",
        paragraphs: [
          "Deshedding isn't an upsell here — it's included in both the Essential Bath and Full Dog Grooming packages at Pet Spa Luxe, at every dog size. If your dog is a heavy shedder, it's worth timing appointments around the spring and fall coat blow specifically, rather than sticking to the same schedule year-round.",
        ],
      },
    ],
  },
  {
    slug: "nail-trimming-vs-grinding-for-dogs",
    title: "Nail Trimming vs. Nail Grinding: Which Is Better for Your Dog?",
    description:
      "Clippers and grinders both get nails short — but they solve the problem differently, and one is often the safer choice for dogs with dark nails. Here's how to tell which your dog needs.",
    publishedDate: "2026-09-12",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Nail length isn't just a cosmetic thing. Nails that are allowed to get too long push back into the nail bed every time a dog's foot hits the ground, which changes how they stand and walk — over time that can put extra strain on the toes and joints. Keeping nails short is one of the simplest things that has an outsized effect on comfort, and it's usually the maintenance item owners put off longest.",
        ],
      },
      {
        heading: "Two different tools, two different jobs",
        paragraphs: [
          "A nail trim uses clippers to cut the nail to length in one motion. It's fast, and for most dogs it's all that's needed — but on dogs with dark or black nails, the quick (the blood vessel and nerve running through the nail) is hard to see, which makes it easy to cut too far back if you're not experienced.",
          "A nail grind uses a rotating sanding tool to wear the nail down gradually instead of cutting it in one pass. It takes a little longer, but it lets a groomer get closer to the quick safely since they can stop the moment the nail starts to look pink, and it leaves a smooth, rounded edge instead of a flat-cut one that can snag on carpet or furniture.",
        ],
      },
      {
        heading: "Which one your dog actually needs",
        bullets: [
          "Dark or black nails, where the quick isn't visible — grinding is usually the safer option",
          "A dog who's had a nail cut too short before and is now nervous about clippers — the sound of a grinder is different, and some dogs tolerate it better once they're used to it",
          "Very thick or overgrown nails — grinding can round them off without a single big cut",
          "Light-colored nails where the quick is easy to see, and a calm dog — a quick clipper trim is usually plenty",
        ],
        paragraphs: [],
      },
      {
        heading: "Nails are only half of it",
        paragraphs: [
          "Nail care and ear care tend to get bundled together for a practical reason — both are quick to check, both are easy to overlook between full grooms, and both are things a lot of owners aren't fully equipped to do safely at home. Ears are worth a look at the same time as nails: redness, a noticeable odor, or a dog shaking its head or scratching at one ear more than usual are all worth having a groomer or vet take a look at.",
          "That's exactly why Pet Spa Luxe offers Nail Care & Ear Cleaning as its own standalone visit, with both nail trimming and nail grinding available depending on what your dog needs, rather than only bundling it into a full groom.",
        ],
      },
      {
        heading: "Don't wait for the next full groom",
        paragraphs: [
          "Nails grow faster than most people expect, and a dog that gets a full groom every 4–6 weeks can still end up with nails that are too long in between visits, especially indoor or less active dogs who don't wear them down naturally on pavement. A standalone Nail & Ear Care visit is a fast, low-cost way to stay on top of it without waiting for the next full appointment.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
