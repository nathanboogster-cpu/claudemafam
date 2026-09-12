// Blog content — general, evergreen dog-grooming and pet-care information,
// not specific claims about Flo's Happy Clipper beyond what's already
// verified elsewhere in lib/site-data.ts (services, hours, service area,
// etc.). Written as structured content blocks so
// app/(site)/blog/[slug]/page.tsx can render every post the same way
// without a one-off .tsx file per post — mirrors the areaContent pattern
// used for service-area pages.

import type { ServiceSlug } from "./site-data";
import { photos } from "./site-data";

export type BlogBlock = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "list"; items: string[] };

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
    slug: "how-often-should-you-groom-a-doodle-or-poodle",
    title: "How Often Should You Groom a Doodle or Poodle?",
    metaDescription:
      "Doodles and poodles have continuously-growing coats that need a different grooming schedule than shedding breeds. A general guide to how often.",
    excerpt:
      "Doodle and poodle coats don't shed out on their own, which changes how often they need a full groom. Here's a general guide.",
    eyebrow: "Doodles & Poodles",
    publishedAt: "2026-09-12",
    heroPhotoKey: "toyPoodleApricot",
    body: [
      {
        type: "p",
        text: "Doodles and poodles have a curly, continuously-growing coat — closer to human hair than the shedding double coats most other breeds have. That's a big part of why they're considered lower-shedding, but it also means their coat doesn't take care of itself the way a Lab's or a Shepherd's does.",
      },
      { type: "h2", text: "Why the Schedule Is Different" },
      {
        type: "p",
        text: "Because the coat never sheds out naturally, loose hair stays trapped close to the skin instead of falling out. Left too long between grooms, that trapped hair tangles into mats — which aren't just a cosmetic issue. Mats pull on the skin, trap moisture and dirt underneath, and can become genuinely uncomfortable for a dog well before they're visible from a distance.",
      },
      { type: "h2", text: "A General Guideline" },
      {
        type: "list",
        items: [
          "Full groom every 4–6 weeks for most doodles and poodles, to stay ahead of matting before it starts.",
          "Daily or every-other-day brushing at home, especially behind the ears, under the legs, and around the collar — the spots that mat first.",
          "Puppies growing out their adult coat often need more frequent brushing during the transition, since the new coat texture mats more easily.",
          "A shorter, low-maintenance clip can stretch the time between full grooms if daily brushing isn't realistic for your schedule.",
        ],
      },
      {
        type: "p",
        text: "If it's been longer than 6–8 weeks since the last groom, or you're finding mats you can't work through with a brush, it's worth having a groomer take a look before trying to brush it out yourself — a heavily matted coat sometimes needs to be shaved down for the dog's comfort, and a groomer can tell you honestly whether that's the case.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "dog-bathing"],
  },
  {
    slug: "5-signs-your-dogs-nails-need-a-trim",
    title: "5 Signs Your Dog's Nails Need a Trim",
    metaDescription:
      "Overgrown nails can affect how a dog walks and stands. Five signs it's time for a nail trim, plus why professional trimming helps nervous dogs.",
    excerpt:
      "Overgrown nails do more than click on the floor — they can actually change how a dog stands and walks. Here's what to watch for.",
    eyebrow: "Nail Care",
    publishedAt: "2026-09-08",
    heroPhotoKey: "bichonPoodleMix",
    body: [
      {
        type: "p",
        text: "Nail trims are easy to put off, especially with a dog who doesn't love having their paws handled. But nails that grow too long don't just look overgrown — they can push a dog's toes out of their natural position and change how weight sits on their feet.",
      },
      { type: "h2", text: "Signs to Watch For" },
      {
        type: "list",
        items: [
          "You can hear a clicking sound when your dog walks across a hard floor.",
          "The nails visibly curve or curl, especially on the dewclaws (the ones higher up the leg that don't touch the ground).",
          "Your dog's toes look splayed out to the side rather than sitting naturally under the paw.",
          "Your dog seems reluctant to walk on hard or slippery floors, or shifts their weight oddly when standing.",
          "It's been more than 4–6 weeks since the last trim — a reasonable default even if you haven't noticed any of the above yet.",
        ],
      },
      { type: "h2", text: "Why Professional Trimming Helps" },
      {
        type: "p",
        text: "Every nail has a quick — a blood vessel that grows longer along with the nail — which is why trimming too far can cause bleeding and understandably makes some dogs (and owners) nervous about the whole process. A professional groomer trims a little at a time and knows how to work with a nervous dog patiently, rather than rushing through it. If your dog is particularly anxious about their paws, mentioning that ahead of time helps the groomer plan for it.",
      },
    ],
    relatedServiceSlugs: ["dog-nail-trimming", "dog-grooming"],
  },
  {
    slug: "preparing-a-nervous-dog-for-their-first-grooming-appointment",
    title: "Preparing a Nervous Dog for Their First Grooming Appointment",
    metaDescription:
      "A first grooming appointment can be stressful for a nervous dog. Practical tips to help them feel more comfortable before and during the visit.",
    excerpt:
      "A first groom is a lot of new sensations at once. A few simple steps beforehand can make the visit go more smoothly.",
    eyebrow: "First-Time Grooming",
    publishedAt: "2026-09-05",
    heroPhotoKey: "tanDogSmiling",
    body: [
      {
        type: "p",
        text: "Between the sounds of clippers and dryers, being handled by someone new, and standing still on a grooming table, a first grooming appointment asks a lot of a dog all at once. Some dogs settle in right away; others need a little more support to feel comfortable.",
      },
      { type: "h2", text: "Before the Appointment" },
      {
        type: "list",
        items: [
          "Avoid feeding a large meal right before the appointment — an empty-ish stomach tends to make dogs more comfortable during handling.",
          "A short walk beforehand can help burn off nervous energy.",
          "If your dog has any sensitivities — sore ears, a reactive spot on their body, anxiety around specific sounds — mention it when you schedule or when you drop off.",
          "Bring along anything that helps your dog feel secure, like a favorite towel, if that's part of your dog's routine.",
        ],
      },
      { type: "h2", text: "What to Expect" },
      {
        type: "p",
        text: "A patient groomer will take things at a pace the dog can handle, especially on a first visit — that might mean a shorter session, extra breaks, or focusing on getting the dog comfortable before doing much handling at all. It's normal for a first appointment to take a little longer than future ones will, once your dog knows what to expect.",
      },
      {
        type: "p",
        text: "Most dogs get more comfortable with grooming over repeated visits as it becomes a familiar routine rather than something new and unpredictable. If your dog had a rough first experience somewhere else, it's worth mentioning that too — a groomer who knows the history can adjust their approach accordingly.",
      },
    ],
    relatedServiceSlugs: ["dog-grooming", "dog-bathing"],
  },
  {
    slug: "dog-ear-cleaning-101",
    title: "Dog Ear Cleaning 101: What to Watch For Between Grooms",
    metaDescription:
      "Some dogs are more prone to ear buildup than others. What to watch for between grooming appointments, and when it's time to see a vet instead.",
    excerpt:
      "Some dogs need more attention to their ears than others between grooms. Here's what's normal to manage yourself, and what's not.",
    eyebrow: "Ear Care",
    publishedAt: "2026-09-01",
    heroPhotoKey: "cockapooTan",
    body: [
      {
        type: "p",
        text: "Not every dog needs much help with their ears — but breeds with floppy ears, heavy hair around the ear canal, or a habit of swimming and getting wet tend to build up more dirt and moisture than breeds with upright, well-ventilated ears.",
      },
      { type: "h2", text: "Breeds That Often Need More Attention" },
      {
        type: "list",
        items: [
          "Floppy-eared breeds (Cocker Spaniels, Cockapoos, Bassett Hounds) — less airflow means moisture and debris get trapped more easily.",
          "Water-loving breeds that swim or get bathed frequently, since trapped water is a common contributor to buildup.",
          "Breeds with hair growing inside the ear canal itself, which can trap wax and debris more than a bare canal would.",
        ],
      },
      { type: "h2", text: "Normal Maintenance vs. a Vet Visit" },
      {
        type: "p",
        text: "Routine ear cleaning — wiping away visible dirt and buildup on the outer ear — is a normal part of grooming maintenance for dogs prone to it. But some signs point to something beyond routine cleaning: frequent head shaking or scratching at the ears, a strong odor, redness or swelling, or visible discomfort when the ear is touched. Those are worth a veterinary visit rather than home or grooming-appointment cleaning, since they can indicate an infection that needs treatment, not just a cleaning.",
      },
      {
        type: "p",
        text: "If you're not sure which category your dog falls into, a groomer can take a look during a regular appointment and let you know honestly whether it's routine maintenance or something to bring up with your vet.",
      },
    ],
    relatedServiceSlugs: ["dog-ear-cleaning", "dog-grooming"],
  },
  {
    slug: "flea-and-tick-season-in-monmouth-county",
    title: "Flea & Tick Season in Monmouth County: What Dog Owners Should Know",
    metaDescription:
      "Flea and tick activity picks up in warmer months in Monmouth County, NJ. What to watch for and how grooming visits can help.",
    excerpt:
      "Warmer months bring more flea and tick activity in our area. Here's what to watch for and how a grooming visit fits into prevention.",
    eyebrow: "Seasonal Care",
    publishedAt: "2026-08-28",
    heroPhotoKey: "terrierMixGroom",
    body: [
      {
        type: "p",
        text: "Like most of New Jersey, Monmouth County sees the most flea and tick activity during the warmer months — spring through fall — especially for dogs who spend time in grassy or wooded areas. Even dogs who mostly stick to a yard or sidewalk aren't entirely in the clear, since fleas and ticks can hitch a ride on other animals or from tall grass at the edge of a property.",
      },
      { type: "h2", text: "What to Watch For" },
      {
        type: "list",
        items: [
          "Excessive scratching, licking, or biting at one area of the body.",
          "Small dark specks in the coat, especially near the base of the tail or around the neck — a sign of flea dirt.",
          "A tick attached to the skin, most commonly found around the ears, neck, or between the toes on dogs who've been outside.",
          "Redness, scabbing, or hair loss in a specific spot, which can indicate a reaction to a bite.",
        ],
      },
      { type: "h2", text: "Where Grooming Fits In" },
      {
        type: "p",
        text: "A flea and tick treatment during a bath or full groom can help address an active issue and leave your dog more comfortable, and it's easy to add onto an appointment you're already scheduling. That said, grooming-visit treatment works best as part of a broader routine — most vets recommend a year-round preventive product as the primary line of defense, with grooming treatments as a helpful addition rather than a replacement. If you're not sure what prevention makes sense for your dog, that's a conversation for your veterinarian.",
      },
    ],
    relatedServiceSlugs: ["dog-flea-tick-treatment", "dog-bathing"],
  },
  {
    slug: "anal-gland-expression-what-dog-owners-should-know",
    title: "Anal Gland Expression: What Every Dog Owner Should Know",
    metaDescription:
      "Anal gland issues are common but not often talked about. What the signs look like, why some dogs need regular expression, and when to see a vet.",
    excerpt:
      "It's not the most glamorous grooming topic, but it's a common one. Here's what the signs look like and when regular expression helps.",
    eyebrow: "Health & Wellness",
    publishedAt: "2026-08-25",
    heroPhotoKey: "puppyVisit",
    body: [
      {
        type: "p",
        text: "It's not the most glamorous topic in dog care, but anal gland issues are common enough that it's worth understanding the basics. Dogs have two small glands near the base of their tail that normally empty on their own during bowel movements. In some dogs, they don't empty completely on their own, which can lead to discomfort.",
      },
      { type: "h2", text: "Common Signs" },
      {
        type: "list",
        items: [
          "Scooting — dragging their rear along the floor or ground.",
          "Excessive licking or biting at the area under the tail.",
          "A noticeable odor that wasn't there before.",
          "Visible swelling or sensitivity near the base of the tail.",
        ],
      },
      { type: "h2", text: "Why Some Dogs Need Regular Expression" },
      {
        type: "p",
        text: "Smaller breeds and dogs with looser stools tend to have more trouble emptying these glands naturally, which is why regular expression as part of a grooming routine helps some dogs more than others. For dogs who need it, adding it to a bath or full groom is a straightforward way to stay ahead of the discomfort rather than waiting until it becomes a problem.",
      },
      {
        type: "p",
        text: "This is a routine grooming service, not a veterinary or medical treatment. If your dog is showing signs of infection, swelling, bleeding, or discomfort that doesn't resolve with routine expression, that's a sign to see your veterinarian rather than rely on grooming alone.",
      },
    ],
    relatedServiceSlugs: ["dog-anal-gland-expression", "dog-grooming"],
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
