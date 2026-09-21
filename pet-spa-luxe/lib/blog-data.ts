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
  {
    slug: "what-to-expect-first-mobile-grooming-appointment",
    title: "What to Expect at Your First Mobile Grooming Appointment",
    description:
      "Booking a mobile groomer for the first time? Here's exactly what happens from the call to drop-off, so there are no surprises on appointment day.",
    publishedDate: "2026-09-14",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "If you've only ever used a walk-in salon, a mobile appointment can feel like an unknown — there's no lobby to sit in, no drop-off desk, no sense of the routine. In practice it's a lot simpler than a salon visit, but it helps to know what actually happens before the van shows up.",
        ],
      },
      {
        heading: "Before the appointment",
        paragraphs: [
          "Booking starts with a phone call rather than an online form. Have your dog's breed, size, and coat condition ready — whether they're due for a full haircut or just a bath, and any mats, sensitive areas, or handling quirks worth mentioning — so the groomer knows exactly what to bring.",
        ],
        bullets: [
          "Have a spot near your home clear enough for the van to park and set up",
          "Keep your dog inside or on a leash until the groomer arrives and is ready",
          "Mention anything that affects handling — anxiety, mobility issues, sensitive ears or paws — on the call, not as a surprise on-site",
        ],
      },
      {
        heading: "What actually happens",
        paragraphs: [
          "The van arrives at your home and the groom happens right there — no car ride, no drop-off, no time spent waiting in a lobby. Your dog gets one-on-one attention for the entire appointment, in a cage-free setup, with nothing rushed to make room for another dog on the schedule. A warm-water bath with premium shampoo and conditioner is part of every groom, along with whatever else the appointment calls for — deshedding, a haircut, nail trim, ear cleaning — all in that single visit.",
        ],
      },
      {
        heading: "When it's done",
        paragraphs: [
          "Your dog comes back groomed, dried, and ready — handed off right in your driveway. There's no pickup window to plan around and no second trip; the whole thing starts and ends at your door.",
        ],
      },
      {
        heading: "First time is a good time to ask questions",
        paragraphs: [
          "If it's your dog's first professional groom, or first time with a mobile groomer specifically, say so on the booking call — a groomer working with a new dog for the first time will usually take a little extra time to let them settle in before starting. Pet Spa Luxe is available seven days a week, 7 AM to 9 PM, so there's flexibility in picking a time that works for a first visit without rushing.",
        ],
      },
    ],
  },
  {
    slug: "senior-dog-grooming-tips",
    title: "Grooming Senior Dogs: What Changes, and Why It's Worth Doing Differently",
    description:
      "An older dog's skin, joints, and patience for a long appointment are all different from a younger dog's. Here's what to expect, and why a calmer format matters more with age.",
    publishedDate: "2026-09-17",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Grooming doesn't stop mattering as a dog gets older — if anything, it matters more, since an aging dog is less able to compensate for overgrown nails or a matted coat than a younger one. But the way a groom should be handled does change, and it's worth knowing what's different before booking.",
        ],
      },
      {
        heading: "What changes with age",
        paragraphs: [
          "Older dogs tend to have thinner, more sensitive skin that's more easily irritated by rough handling or harsh products, and coats can thin or change texture. Joint stiffness and arthritis are common too, which makes standing still for a long stretch — especially on a slippery table — more physically taxing than it used to be. Hearing or vision that isn't what it used to be can also make a dog more easily startled by being touched or approached from an angle they didn't see coming.",
        ],
      },
      {
        heading: "Why a calmer format matters more here",
        paragraphs: [
          "A long wait in an unfamiliar space with other dogs is harder on an older dog's patience and joints than a younger one's. One-on-one, cage-free attention for the whole appointment — with no car ride and no time spent waiting for a groomer to finish with another dog first — cuts down on exactly the parts of a grooming visit that tend to be hardest on a senior dog: standing around, waiting, and unfamiliar noise and movement from other animals nearby.",
        ],
      },
      {
        heading: "Worth mentioning when you book",
        bullets: [
          "Any joint, hip, or mobility issues that affect how long your dog can comfortably stand",
          "Hearing or vision changes, so the groomer can approach in a way that won't startle your dog",
          "Skin sensitivities or known reactions to specific products",
          "Any medications that affect temperature regulation or skin sensitivity",
        ],
        paragraphs: [],
      },
      {
        heading: "Don't stretch out the schedule",
        paragraphs: [
          "It's tempting to assume an older, calmer dog needs grooming less often, but the opposite is usually closer to true — less active senior dogs wear their nails down less on their own, and thinner skin is more vulnerable when a coat is allowed to mat. The frequency shouldn't necessarily change; what should change is making sure the groomer knows what to expect before the appointment starts. Mentioning your dog's age and any health notes on the booking call is enough to make sure that happens.",
        ],
      },
    ],
  },
  {
    slug: "home-coat-care-between-grooming-appointments",
    title: "What You Can Do Between Grooming Appointments",
    description:
      "A few minutes of home care between professional grooms keeps a coat from backsliding — and makes the next appointment faster and easier. Here's what actually helps.",
    publishedDate: "2026-09-21",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Professional grooming handles the deep work — the bath, the deshedding, the parts that are hard or risky to do yourself. But a little bit of home care in between appointments makes a real difference, especially for dogs with longer or double coats, and it makes the next professional groom go faster too.",
        ],
      },
      {
        heading: "Brushing at home",
        paragraphs: [
          "Brush in the direction the coat grows, and focus on the spots where mats actually start — behind the ears, under the collar, and in the armpits, since those are the areas that rub and tangle first. How often depends on the coat: a short, smooth coat barely needs it between visits, while a longer or double coat benefits from a quick brush-through every few days, more often during a seasonal shed.",
        ],
      },
      {
        heading: "Nails between visits",
        paragraphs: [
          "If you can hear nails clicking on hard flooring, they're overdue no matter how recently the last full groom was — this is especially common for less active or indoor dogs who don't wear nails down naturally. A standalone nail trim between full grooms is a fast way to stay on top of it without waiting for the next scheduled appointment.",
        ],
      },
      {
        heading: "What's better left to a professional",
        bullets: [
          "Bathing with anything other than a dog-formulated shampoo — human shampoo is a different pH and can dry out or irritate a dog's skin",
          "Trying to brush or cut out a mat that's already tight against the skin — this can hurt the dog, and a professional shave-down is usually the safer fix once a mat has set in",
          "Ear cleaning beyond wiping the visible outer ear — going deeper without the right tools risks doing more harm than good",
        ],
        paragraphs: [],
      },
      {
        heading: "Home care complements the professional groom, not replaces it",
        paragraphs: [
          "None of this is a substitute for a full appointment — deshedding the undercoat, a safe nail trim close to the quick, a proper haircut all still need a groomer's tools and experience. What home care does is stretch out how good the coat looks between visits and make each Essential Bath or Full Dog Grooming appointment a little faster, since the groomer isn't starting from a fully matted or overgrown state every time.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
