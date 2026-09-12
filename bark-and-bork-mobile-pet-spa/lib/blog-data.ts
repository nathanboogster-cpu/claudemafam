// Bark and Bork blog — original educational content written for this site.
// General dog-grooming advice only: nothing here states a specific fact
// about Bark and Bork itself (no invented history, certifications, awards,
// or client counts) beyond what's already verified in site-data.ts. Posts
// link back to real service pages and the real booking URL, never a
// fabricated CTA.

export type BlogBlock = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date — the real date each post first went live
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-groom-your-dog",
    title: "How Often Should You Groom Your Dog?",
    excerpt:
      "A practical guide to grooming frequency by coat type — and the warning signs that mean your dog needs a bath sooner than planned.",
    publishedAt: "2026-09-12",
    body: [
      {
        type: "p",
        text: "There's no single answer that fits every dog — coat type, activity level, and skin sensitivity all play a role. But most dogs do best on a regular schedule rather than waiting until grooming feels urgent.",
      },
      { type: "h2", text: "A general starting point" },
      {
        type: "ul",
        items: [
          "Short-haired, single-coated breeds (Beagles, Boxers, many mixed breeds): every 6–8 weeks",
          "Double-coated breeds (Huskies, German Shepherds, Golden Retrievers): every 8–12 weeks, with deshedding in between to manage the undercoat",
          "Curly and wiry coats that don't shed (Poodles, Bichon Frises, Doodles): every 4–6 weeks — these coats mat quickly without regular trims",
          "Long, silky coats (Shih Tzus, Yorkies, Maltese): every 4–6 weeks, plus brushing at home between visits",
        ],
      },
      {
        type: "p",
        text: "Puppies are the exception — most groomers recommend a gentle first visit around 10–12 weeks (after their initial vaccinations), mainly to get them comfortable with the experience rather than for a full haircut.",
      },
      { type: "h2", text: "Signs it's time, regardless of the calendar" },
      {
        type: "ul",
        items: [
          "You can feel tangles or mats when you run your fingers through the coat",
          "There's a noticeable \"doggy\" odor even a few days after a bath at home",
          "Nails click loudly on hard floors",
          "Your dog is scratching or licking more than usual — sometimes a sign the coat or skin needs attention",
        ],
      },
      {
        type: "p",
        text: "If it's been a while and you're not sure where your dog's coat stands, a Bath & Tidy is a low-commitment way to get a professional opinion — the groomer can tell you on the spot whether a Full Groom or a dematting treatment makes more sense next time.",
      },
    ],
  },
  {
    slug: "mobile-grooming-vs-traditional-salons",
    title: "Mobile Dog Grooming vs. Traditional Salons: What's the Difference?",
    excerpt:
      "Same services, different experience. Here's what actually changes when a groomer comes to your driveway instead of you driving to a salon.",
    publishedAt: "2026-09-12",
    body: [
      {
        type: "p",
        text: "Mobile grooming isn't a stripped-down version of a salon visit — it's the same core services (bath, brush-out, haircut, nail trim, ear cleaning) delivered in a fully equipped van instead of a storefront. The differences show up in the experience, not the results.",
      },
      { type: "h2", text: "One dog at a time" },
      {
        type: "p",
        text: "A mobile groomer typically works with one dog per appointment before moving to the next house. There's no kennel, no waiting area full of unfamiliar dogs, and no being tied up for hours between drop-off and pickup — just a single focused appointment start to finish.",
      },
      { type: "h2", text: "No car ride, no waiting room" },
      {
        type: "p",
        text: "For dogs that get anxious in the car or overwhelmed by a busy salon lobby, skipping both entirely can make a real difference. The whole appointment happens somewhere your dog already knows: right outside your home.",
      },
      { type: "h2", text: "Your time, not a drop-off window" },
      {
        type: "p",
        text: "Traditional salons often ask you to drop off in the morning and pick up in the afternoon, with your dog waiting in a kennel in between. Mobile grooming is scheduled for a specific appointment window at your address — you know roughly when the groomer arrives and when they're done.",
      },
      { type: "h2", text: "What stays the same" },
      {
        type: "p",
        text: "Pricing is typically comparable once you factor in that mobile grooming eliminates a mid-day trip across town, and the service itself — Bath & Tidy or a Full Groom with a complete haircut — covers the same ground either way. The van is just the location.",
      },
    ],
  },
  {
    slug: "5-signs-your-dog-is-overdue-for-a-groom",
    title: "5 Signs Your Dog Is Overdue for a Groom",
    excerpt:
      "Coat and skin issues rarely show up all at once — here are the early signs worth acting on before they turn into a bigger (and pricier) fix.",
    publishedAt: "2026-09-12",
    body: [
      {
        type: "p",
        text: "It's easy for grooming to slip a few weeks past when it should happen — life gets busy, and a dog's coat changes gradually enough that it's hard to notice day to day. Here's what to watch for.",
      },
      { type: "h2", text: "1. Matting near the ears, armpits, or collar line" },
      {
        type: "p",
        text: "These are the first spots to mat on most breeds, since they get the most friction from movement and collars. Small mats caught early can often be brushed or trimmed out. Left alone, they tighten and pull on the skin — at that point, a full dematting treatment or a shorter clip is usually the safer option.",
      },
      { type: "h2", text: "2. Long nails changing how your dog walks" },
      {
        type: "p",
        text: "If you hear clicking on hard floors or notice your dog's feet splaying slightly when they stand, nails have likely gone too long. Overgrown nails can alter a dog's gait and posture over time.",
      },
      { type: "h2", text: "3. A dull, dry, or flaky coat" },
      {
        type: "p",
        text: "A bath with the right shampoo and conditioner — and a full blow-dry and brush-out rather than air-drying — makes a noticeable difference in coat texture and shine.",
      },
      { type: "h2", text: "4. Persistent odor" },
      {
        type: "p",
        text: "Some odor after a long day outside is normal. Odor that lingers for days, even after time indoors, is usually a sign the coat and skin need a proper wash — not just a wipe-down at home." ,
      },
      { type: "h2", text: "5. Visible shedding building up around the house" },
      {
        type: "p",
        text: "Double-coated breeds shed year-round with heavier seasonal blowouts. A deshedding treatment goes deeper than a standard bath and noticeably cuts down on loose undercoat for weeks afterward.",
      },
    ],
  },
  {
    slug: "why-matting-happens-and-how-to-prevent-it",
    title: "Why Matting Happens (and How to Prevent It)",
    excerpt:
      "Matting is one of the most common — and most preventable — coat problems. Here's why it forms and what actually stops it.",
    publishedAt: "2026-09-12",
    body: [
      {
        type: "p",
        text: "A mat forms when loose fur, dead undercoat, and new growth tangle together faster than they can be brushed out. It happens most in areas with the most friction and moisture — behind the ears, under the collar, in the armpits, and around the tail.",
      },
      { type: "h2", text: "What speeds it up" },
      {
        type: "ul",
        items: [
          "Skipping brushing between grooming appointments, especially on curly or long coats",
          "Getting the coat wet (bath, rain, swimming) without fully drying and brushing it out afterward",
          "Friction from a harness, collar, or regularly lying in the same spot",
          "Letting a coat go too long between trims, especially on breeds that don't shed",
        ],
      },
      { type: "h2", text: "Why severe mats sometimes mean a shorter cut" },
      {
        type: "p",
        text: "A light mat can usually be worked out with a slicker brush and a dematting comb. A mat that's pulled tight against the skin is a different situation — trying to brush it out at that point is painful for the dog and can cause skin irritation or breakage. In those cases, clipping the coat shorter is the safer, more comfortable option, even if it's not the preferred look. A good groomer will always explain the coat's condition and the options before starting, not after.",
      },
      { type: "h2", text: "Prevention that actually works" },
      {
        type: "ul",
        items: [
          "Brush a few times a week with a tool suited to your dog's coat type (a slicker brush works for most curly and double coats)",
          "Always brush before a bath, not just after — wet mats tighten further",
          "Keep up with a regular grooming schedule rather than stretching it out",
          "Ask your groomer which brush and technique fits your dog's specific coat",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-your-dog-for-a-mobile-grooming-appointment",
    title: "How to Prepare Your Dog for a Mobile Grooming Appointment",
    excerpt:
      "A little prep makes the appointment smoother for your dog and the groomer. Here's what actually helps.",
    publishedAt: "2026-09-12",
    body: [
      {
        type: "p",
        text: "Mobile grooming is generally lower-stress than a salon visit since your dog never leaves home, but a bit of preparation still helps the appointment go smoothly.",
      },
      { type: "h2", text: "Before the groomer arrives" },
      {
        type: "ul",
        items: [
          "Give your dog a short walk or bathroom break shortly before the appointment",
          "Have a clear, accessible parking spot near your door for the van",
          "Let your dog burn off a bit of extra energy beforehand if they tend to be wound up",
          "Mention any recent injuries, sensitive areas, or health changes when you book",
        ],
      },
      { type: "h2", text: "During the appointment" },
      {
        type: "p",
        text: "You don't need to stay right by the van the whole time — most dogs settle in faster without an owner hovering nearby. Staying close enough to be reachable is usually enough.",
      },
      { type: "h2", text: "For anxious or first-time dogs" },
      {
        type: "p",
        text: "If your dog has never been groomed before or gets nervous around new experiences, say so when you book. A groomer can plan a shorter, calmer first visit — sometimes just a bath and brush-out — rather than jumping straight into a full haircut.",
      },
      {
        type: "p",
        text: "Ready to schedule? You can book a Bath & Tidy or Full Groom online any day of the week, sized to your dog and matched to your home address.",
      },
    ],
  },
];

export function blogPostPath(slug: string) {
  return `/blog/${slug}`;
}
