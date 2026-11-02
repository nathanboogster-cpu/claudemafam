// Blog: one guide per service (lib/site-data.ts services) and one post per
// service area (serviceAreas). Service guides explain what the service is and
// who needs it; area posts pair something true about the town (public
// geography only) with well-established, general pet-care advice. Both close
// on the verified business facts: the van comes to you, the service list,
// Book Online and the phone number. Never invent anything about Sky Pet Grooming itself: no
// prices, hours, staff, years, results or testimonials. Posts are content
// blocks so app/(site)/blog/[slug]/page.tsx renders them all the same way
// (the Bow Wags pattern).

import { business, type ServiceKey } from "./site-data";

export type BlogBlock = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  // Exactly one of these: the service area (areaByKey) or the service the
  // post is written for.
  area?: string;
  service?: ServiceKey;
  title: string;
  metaDescription: string;
  excerpt: string;
  eyebrow: string;
  publishedAt: string; // ISO date
  photo: string; // lib/photos.ts slug
  body: BlogBlock[];
};

const PHONE = business.phone.display;

function close(city: string): BlogBlock[] {
  return [
    { type: "h2", text: `Mobile Grooming in ${city}` },
    {
      type: "p",
      text: `Sky Pet Grooming's van comes to homes in ${city}, with a full bathtub, a grooming table and professional dryers on board, so your pet is groomed right outside your door. We offer full dog grooming, cat grooming, de-shedding, detangling, nail trimming and anal gland expression. Book online any time, or call ${PHONE}.`,
    },
  ];
}

// Close for service guides, which are not about one town.
function closeService(what: string): BlogBlock[] {
  return [
    { type: "h2", text: "Book It at Your Door" },
    {
      type: "p",
      text: `Sky Pet Grooming's van comes to your home in San Bruno, South San Francisco, Millbrae, Burlingame, San Mateo and across the northern Peninsula, plus southern and western San Francisco. Add ${what} when you book online, or call ${PHONE} with any questions.`,
    },
  ];
}

const servicePosts: BlogPost[] = [
  {
    slug: "what-happens-during-a-mobile-dog-groom",
    service: "full-dog-grooming",
    title: "What Happens During a Mobile Dog Groom",
    metaDescription:
      "Never booked a mobile groomer? What a full dog groom usually involves, step by step, how to get ready, and what changes when the groomer comes to you.",
    excerpt: "From the brush-out to the final trim: what a full groom usually involves, and why doing it at your door is different.",
    eyebrow: "Full Dog Grooming",
    publishedAt: "2026-11-02",
    photo: "golden-retriever-on-grooming-table",
    body: [
      {
        type: "p",
        text: "If your dog has only ever been groomed at a salon, mobile grooming can feel unfamiliar. The groom itself covers the same ground. What changes is everything around it: no drive, no drop-off and no waiting room, because the salon parks outside your home.",
      },
      { type: "h2", text: "What a Full Groom Usually Covers" },
      {
        type: "list",
        items: [
          "A brush-out to loosen dead hair and find any tangles before the bath.",
          "A bath in a proper tub, with a thorough rinse.",
          "Drying with professional dryers, brushing as the coat dries so it lies smooth.",
          "A haircut or trim to suit the breed and your preferences, including face, feet and a sanitary trim.",
          "Nail trimming, and a look at the ears.",
        ],
      },
      {
        type: "p",
        text: "Every dog is different, so tell us what you would like when you book: a short, easy-care cut, a breed-style trim, or just a tidy-up. You can see the options on our booking page.",
      },
      { type: "h2", text: "How to Get Your Dog Ready" },
      {
        type: "list",
        items: [
          "Take your dog out for a walk and a bathroom break beforehand.",
          "Let us know about any sensitive spots, health issues or behavior worries.",
          "If the coat is badly matted, say so when you book, so the groom can be planned for it.",
          "Keep your hello and goodbye calm and short.",
        ],
      },
      { type: "h2", text: "Why Mobile Is Different" },
      {
        type: "p",
        text: "Your dog skips the car ride and the barking of a busy salon, and is back inside with you as soon as the groom is done. For nervous, older or very large dogs, that alone can make grooming day far easier.",
      },
      ...closeService("a full groom"),
    ],
  },
  {
    slug: "mobile-cat-grooming-what-it-involves",
    service: "cat-grooming",
    title: "Mobile Cat Grooming: What It Is and When Your Cat Needs It",
    metaDescription:
      "Does your cat need professional grooming? Signs to watch for, what cat grooming usually includes, and why a groomer at your door is easier on cats.",
    excerpt: "Most cats groom themselves, but not all can keep up. The signs your cat needs help, and what a cat groom usually involves.",
    eyebrow: "Cat Grooming",
    publishedAt: "2026-11-02",
    photo: "gray-long-haired-cat",
    body: [
      {
        type: "p",
        text: "Cats spend a big part of their day grooming, so it is easy to assume they never need help. Many do, though, especially long-haired cats, older cats and cats who cannot comfortably reach every part of their body.",
      },
      { type: "h2", text: "Signs Your Cat Needs a Groom" },
      {
        type: "list",
        items: [
          "Clumps or mats on the belly, the armpits, behind the ears or around the back legs.",
          "A greasy, spiky or unkempt coat along the back.",
          "More hairballs than usual, or a lot of hair around the house.",
          "Debris or mess caught in the fur around the tail.",
          "Nails that catch on carpet and furniture or curl toward the pads.",
        ],
      },
      { type: "h2", text: "What Cat Grooming Usually Includes" },
      {
        type: "p",
        text: "Depending on the cat and the coat, a cat groom can include a thorough comb-out, clipping out mats safely, a sanitary trim, a nail trim, and for heavily matted long-haired cats, a shorter all-over clip. Some cats are bathed, others only need the brush-out and a tidy-up.",
      },
      { type: "h2", text: "Why Cats Do Better at Home" },
      {
        type: "p",
        text: "For most cats, the stressful part of grooming is getting there: the carrier, the car ride and a salon full of unfamiliar smells and barking dogs. With mobile grooming, the van parks at your door and your cat is back home as soon as the groom is done.",
      },
      { type: "h2", text: "Between Grooms" },
      {
        type: "p",
        text: "Short, gentle brushing sessions a few times a week keep mats from forming. Use a wide-toothed comb and stop before your cat has had enough. Never try to cut a mat out with scissors: a cat's skin is thin and easy to cut by accident.",
      },
      ...closeService("cat grooming"),
    ],
  },
  {
    slug: "what-is-a-de-shedding-treatment",
    service: "de-shedding",
    title: "What Is a De-Shedding Treatment, and Does Your Dog Need One?",
    metaDescription:
      "De-shedding removes loose undercoat so there is less hair on your floors. Which dogs benefit, how the treatment works, and how often to book it.",
    excerpt: "Hair on the couch, tumbleweeds on the floor? A de-shedding treatment clears the loose undercoat at the source.",
    eyebrow: "De-Shedding",
    publishedAt: "2026-11-02",
    photo: "white-fluffy-dog-in-van",
    body: [
      {
        type: "p",
        text: "If you are vacuuming dog hair every day, a de-shedding treatment may be what your dog needs. It targets the loose, dead undercoat that ends up on your floors and clothes, and removes it in one go instead of a little at a time all over the house.",
      },
      { type: "h2", text: "Which Dogs Benefit Most" },
      {
        type: "p",
        text: "De-shedding is for dogs with a double coat: a dense, soft undercoat under a longer top coat. Think Golden Retrievers, Labradors, German Shepherds, Huskies, Samoyeds, Corgis and Pomeranians. These dogs shed all year and drop a lot of undercoat, often called blowing their coat, as the seasons change.",
      },
      { type: "h2", text: "How It Works" },
      {
        type: "list",
        items: [
          "A bath to clean the coat and help loosen the dead undercoat.",
          "Drying with a high-powered dryer, which blows out a large amount of loose hair.",
          "Thorough brushing with undercoat tools to remove what is left, right down to the skin.",
        ],
      },
      { type: "h2", text: "What It Is Not" },
      {
        type: "p",
        text: "De-shedding is not shaving. A double coat helps protect a dog from sun and heat, and shaving it can leave the coat growing back patchy. De-shedding keeps the coat intact and simply clears out the hair that is already on its way out.",
      },
      { type: "h2", text: "How Often to Book" },
      {
        type: "p",
        text: "Many double-coated dogs do well with a de-shedding treatment every six to eight weeks, with an extra one when they are blowing their coat. Brushing a few times a week at home in between keeps the results going longer.",
      },
      ...closeService("de-shedding"),
    ],
  },
  {
    slug: "detangling-vs-shave-down-matted-dog",
    service: "detangling",
    title: "Detangling or Shave-Down? What to Do When Your Dog Has Mats",
    metaDescription:
      "Mats pull on the skin and can hide sores. When tangles can be brushed out, when a shorter clip is kinder, and how to stop mats coming back.",
    excerpt: "Small tangles can be worked out. Tight, close-to-the-skin mats often cannot. How groomers decide, and how to prevent them.",
    eyebrow: "Detangling",
    publishedAt: "2026-11-02",
    photo: "black-and-white-dog-halloween",
    body: [
      {
        type: "p",
        text: "Mats are clumps of tangled hair that tighten over time. They are more than a cosmetic problem: tight mats pull on the skin every time a dog moves, trap moisture and dirt, and can hide sores or irritation underneath.",
      },
      { type: "h2", text: "When Detangling Works" },
      {
        type: "p",
        text: "Loose tangles and small mats near the tips of the hair can usually be worked out. A groomer uses detangling products, slicker brushes and combs to loosen the hair a little at a time, so the coat can be saved at its current length.",
      },
      { type: "h2", text: "When a Shorter Clip Is Kinder" },
      {
        type: "p",
        text: "When mats are tight against the skin, or the coat has matted into one solid layer, brushing them out would take a long time and hurt. In that case, clipping the coat short underneath the mats is the more humane choice. The good news is that hair grows back, and a fresh start makes the new coat much easier to keep tangle-free.",
      },
      { type: "h2", text: "How to Stop Mats Coming Back" },
      {
        type: "list",
        items: [
          "Brush all the way down to the skin, then check with a metal comb.",
          "Focus on friction spots: behind the ears, the collar and harness line, the armpits and the back legs.",
          "Dry your dog fully after baths, rain, fog or swimming. Damp coats mat fastest.",
          "Keep a curly or long coat on a regular grooming schedule, usually every four to six weeks.",
          "Ask for a shorter trim if daily brushing is not realistic.",
        ],
      },
      ...closeService("detangling"),
    ],
  },
  {
    slug: "why-regular-nail-trims-matter",
    service: "nail-trimming",
    title: "Why Regular Nail Trims Matter for Dogs and Cats",
    metaDescription:
      "Long nails change how a dog stands and walks. Why regular trims matter, how often dogs and cats need them, and what the quick is.",
    excerpt: "Overgrown nails are more than noisy on the floor. Why they matter, how often to trim, and how to make trims easier.",
    eyebrow: "Nail Trimming",
    publishedAt: "2026-11-02",
    photo: "smiling-pomeranian",
    body: [
      {
        type: "p",
        text: "Nail trims are one of the quickest parts of grooming, and one of the most important. Nails that grow too long do not just click on the floor. They change the way a dog stands and walks.",
      },
      { type: "h2", text: "Why Long Nails Are a Problem" },
      {
        type: "list",
        items: [
          "When nails hit the ground, they push the toes up and shift weight onto the back of the foot.",
          "Over time that strains the feet, legs and joints, which is especially hard on older dogs.",
          "Long nails catch on carpet and can tear or split.",
          "Dewclaws never touch the ground, so they can curl around and grow into the pad.",
          "A cat's nails can curl into the pads too, especially in older or less active cats.",
        ],
      },
      { type: "h2", text: "What Is the Quick?" },
      {
        type: "p",
        text: "Inside each nail is the quick, which carries a blood supply and nerves. Cutting into it hurts and bleeds. When nails are left long, the quick grows longer too, which makes it harder to get the nails short. Regular trims encourage the quick to recede, so the nails can be kept at a healthy length.",
      },
      { type: "h2", text: "How Often to Trim" },
      {
        type: "p",
        text: "Most dogs need a trim every three to four weeks, and cats every few weeks as well. A simple test for dogs: if you can hear the nails on a hard floor, they are due.",
      },
      { type: "h2", text: "Making Trims Less Stressful" },
      {
        type: "p",
        text: "Practice handling your pet's paws for a few seconds at a time, with treats, between appointments. Skipping the car ride helps too: with mobile grooming, the trim happens right outside your home.",
      },
      ...closeService("nail trimming"),
    ],
  },
  {
    slug: "dog-anal-glands-when-they-need-help",
    service: "anal-gland-expression",
    title: "Anal Glands: What They Are and When Your Dog Needs Help",
    metaDescription:
      "Scooting, licking or a fishy smell can mean full anal glands. What anal glands do, the signs to watch for, and when to see your vet instead.",
    excerpt: "Scooting across the carpet? It might be the anal glands. What they are, the signs, and when expression helps.",
    eyebrow: "Anal Gland Expression",
    publishedAt: "2026-11-02",
    photo: "cream-doodle-smiling",
    body: [
      {
        type: "p",
        text: "It is not the most glamorous part of grooming, but it is a common question. Dogs have two small glands just inside the rear. They normally empty a little scent-marking fluid when a dog goes to the bathroom. Sometimes they do not empty properly, and that is when dogs start showing signs.",
      },
      { type: "h2", text: "Signs the Glands May Be Full" },
      {
        type: "list",
        items: [
          "Scooting the rear along the floor or grass.",
          "Licking or chewing at the tail area.",
          "A strong, fishy smell.",
          "Discomfort when sitting down.",
        ],
      },
      { type: "h2", text: "What Expression Is" },
      {
        type: "p",
        text: "Expression means gently emptying the glands by hand. Groomers do this externally, as part of a groom, for dogs that need it. It is quick, and many owners notice the scooting stops.",
      },
      { type: "h2", text: "Not Every Dog Needs It" },
      {
        type: "p",
        text: "Plenty of dogs never have a problem and empty their glands naturally. If your dog shows no signs, there is no need to add it to every groom. Diet, weight and stool consistency all play a part, so your vet is the right person to ask if it keeps happening.",
      },
      { type: "h2", text: "When to See Your Vet" },
      {
        type: "p",
        text: "Swelling or a lump near the rear, bleeding, pus, obvious pain, or scooting that continues after expression all need a vet, not a groomer. These can be signs of an impaction, infection or abscess that needs treatment.",
      },
      ...closeService("anal gland expression"),
    ],
  },
];

const areaPosts: BlogPost[] = [
  {
    slug: "how-often-to-groom-your-dog-san-bruno",
    area: "san-bruno",
    title: "How Often Should You Groom Your Dog? A San Bruno Guide",
    metaDescription:
      "How often your dog needs grooming depends on the coat. A simple schedule for short, double, curly and silky coats, from a San Bruno mobile groomer.",
    excerpt: "Short coat, double coat, curls or silky hair: here is how often each one really needs a groom, and what to do in between.",
    eyebrow: "San Bruno",
    publishedAt: "2026-11-02",
    photo: "white-curly-dog-teddy-face",
    body: [
      {
        type: "p",
        text: "Whether you live up near Skyline Boulevard or down by Tanforan, the question we hear most from San Bruno dog owners is the simplest one: how often should my dog be groomed? The honest answer is that it depends on the coat. A Labrador and a doodle can live on the same street and need completely different schedules.",
      },
      { type: "h2", text: "A Rule-of-Thumb Schedule by Coat Type" },
      {
        type: "list",
        items: [
          "Short, smooth coats (Labradors, Boxers, French Bulldogs): a bath, nail trim and ear check every two to three months, with a quick brush once a week.",
          "Double coats (Golden Retrievers, Huskies, Pomeranians, Samoyeds): a groom with de-shedding every six to eight weeks, and brushing a few times a week, more when they blow their coat.",
          "Curly and wool coats (Poodles, doodles, Bichons): a full groom every four to six weeks. These coats keep growing and mat quickly if they are left too long.",
          "Long, silky coats (Shih Tzus, Maltese, Yorkies): every four to six weeks, plus daily or every-other-day brushing at home.",
          "Nails, for every dog: roughly every three to four weeks. If you can hear them clicking on the floor, they are due.",
        ],
      },
      { type: "h2", text: "Signs Your Dog Is Overdue" },
      {
        type: "p",
        text: "Calendars are a guide, not a rule. Book sooner if you notice tangles behind the ears or under the legs, a smell that comes back soon after a bath, hair growing over the eyes, scooting, or nails that touch the ground when your dog stands still.",
      },
      { type: "h2", text: "What to Do Between Grooms" },
      {
        type: "p",
        text: "A few minutes of brushing a week does more than any single groom. Brush all the way down to the skin, not just over the top layer, and pay extra attention to friction spots: behind the ears, the collar line, the armpits and the back of the legs. Wipe paws after muddy walks and keep an eye on the ears, especially in floppy-eared breeds.",
      },
      ...close("San Bruno"),
    ],
  },
  {
    slug: "foxtail-season-dog-safety-south-san-francisco",
    area: "south-san-francisco",
    title: "Foxtail Safety for Dogs in South San Francisco",
    metaDescription:
      "Foxtails from dry grass can work into a dog's paws, ears and nose. How to check your dog after hikes in South San Francisco, and how grooming helps.",
    excerpt: "Dry summer grass means foxtails. Where they hide on your dog, the warning signs, and how a tidy trim makes them easier to spot.",
    eyebrow: "South San Francisco",
    publishedAt: "2026-11-02",
    photo: "golden-retriever-puppy-doorstep",
    body: [
      {
        type: "p",
        text: "The trails on Sign Hill are a favorite walk in South San Francisco, but once the hillside grass dries out in late spring and summer, it comes with a hidden hazard for dogs: foxtails. These barbed grass seeds are built to work their way in one direction only, which is why they are worth taking seriously.",
      },
      { type: "h2", text: "Where Foxtails Hide" },
      {
        type: "list",
        items: [
          "Between the toes and pads, the most common spot of all.",
          "Inside the ears, especially on dogs with long, floppy ears.",
          "In the nose, after a good sniff through tall grass.",
          "In the armpits, groin and under the tail, wherever fur is long and dense.",
          "Around the eyes.",
        ],
      },
      { type: "h2", text: "A Quick Check After Every Walk" },
      {
        type: "p",
        text: "Run your hands slowly over your dog from nose to tail, spreading the toes and lifting the ears to look inside. Brush out the feathering on the legs and belly. It takes a couple of minutes, and it is far easier on a dog whose coat is kept neat.",
      },
      { type: "h2", text: "Signs to Call Your Vet" },
      {
        type: "p",
        text: "Sudden head shaking or pawing at an ear, repeated sneezing, licking or limping on one foot, or a swollen bump between the toes can all mean a foxtail has got in. Do not try to dig one out yourself: a vet can remove it safely before it travels further.",
      },
      { type: "h2", text: "How Grooming Helps" },
      {
        type: "p",
        text: "A tidy paw trim, a sanitary trim and keeping long feathering under control give foxtails fewer places to hide and make your after-walk check much quicker. During the dry months, ask for the fur between the pads to be trimmed short when you book.",
      },
      ...close("South San Francisco"),
    ],
  },
  {
    slug: "helping-a-nervous-dog-enjoy-grooming-millbrae",
    area: "millbrae",
    title: "Helping a Nervous Dog Enjoy Grooming Day in Millbrae",
    metaDescription:
      "Is your dog anxious about grooming? Simple steps to build confidence at home, and why grooming at your door can be calmer. From a Millbrae mobile groomer.",
    excerpt: "Some dogs dread the groomer. Practice at home, short sessions and skipping the car ride can make grooming day far easier.",
    eyebrow: "Millbrae",
    publishedAt: "2026-11-02",
    photo: "white-dog-rounded-trim",
    body: [
      {
        type: "p",
        text: "Plenty of Millbrae dogs are perfectly happy until the clippers come out. Shaking, hiding, or refusing to have their paws touched are all common. The good news is that most nervous dogs can become much more relaxed about grooming with a bit of practice and the right setting.",
      },
      { type: "h2", text: "Practice the Handling at Home" },
      {
        type: "list",
        items: [
          "Touch your dog's paws, ears and tail for a few seconds at a time, then reward with a treat.",
          "Hold each paw gently and press lightly on the pads, the same way a groomer does before trimming nails.",
          "Let your dog sniff a brush or comb before you use it, and keep early brushing sessions very short.",
          "Run an electric toothbrush or phone vibration near your dog so the buzz of clippers is less of a surprise.",
          "Stop while your dog is still calm, so every session ends on a good note.",
        ],
      },
      { type: "h2", text: "Why the Setting Matters" },
      {
        type: "p",
        text: "For many anxious dogs, the hardest part of grooming happens before it starts: the car ride, a noisy waiting room, other dogs barking and being left somewhere unfamiliar. A mobile groom takes most of that away. The van parks outside your home, there is no waiting room, and your dog is back inside with you as soon as the groom is done.",
      },
      { type: "h2", text: "On the Day" },
      {
        type: "p",
        text: "A walk beforehand helps burn off nervous energy. Tell us about anything your dog is sensitive to when you book, such as feet, ears or loud dryers, so the groom can be planned around it. Keep your goodbye low-key: a big emotional send-off can make a nervous dog more anxious.",
      },
      ...close("Millbrae"),
    ],
  },
  {
    slug: "ticks-burrs-and-muddy-paws-brisbane",
    area: "brisbane",
    title: "Ticks, Burrs and Muddy Paws: Grooming Tips for Brisbane Dogs",
    metaDescription:
      "Hillside walks near Brisbane can mean burrs, ticks and muddy paws. How to check your dog's coat after a hike, and when to book a groom.",
    excerpt: "Living next to San Bruno Mountain means brushy walks. Here is how to check for ticks and burrs and keep paws clean.",
    eyebrow: "Brisbane",
    publishedAt: "2026-11-02",
    photo: "gray-and-white-shaggy-dog",
    body: [
      {
        type: "p",
        text: "Brisbane sits right against San Bruno Mountain, and plenty of local walks pass through grass and brush. That is great exercise for your dog, but it also means burrs in the coat, mud on the paws and, in the Bay Area's grassy areas, the occasional tick.",
      },
      { type: "h2", text: "Checking for Ticks" },
      {
        type: "p",
        text: "Ticks like warm, sheltered spots. After a walk through grass or brush, run your fingers slowly over your dog and look closely at the ears, around the eyes, the collar line, the armpits, between the toes and under the tail. If you find one attached, remove it with fine-tipped tweezers or a tick tool, gripping close to the skin and pulling straight out. Ask your vet which tick prevention suits your dog.",
      },
      { type: "h2", text: "Getting Burrs Out" },
      {
        type: "list",
        items: [
          "Work burrs out with your fingers first, teasing the hair away a few strands at a time.",
          "A little cornstarch or a dog-safe detangling spray helps the hair slide free.",
          "Use a metal comb, starting from the tips of the hair and working toward the skin.",
          "Avoid cutting burrs out with scissors, since it is very easy to nick the skin underneath.",
        ],
      },
      { type: "h2", text: "Mud and Paws" },
      {
        type: "p",
        text: "Rinse or wipe muddy paws after a walk and dry well between the toes, where trapped moisture can irritate the skin. Keeping the fur on the feet trimmed short means less mud comes home with your dog, and burrs have less to cling to.",
      },
      ...close("Brisbane"),
    ],
  },
  {
    slug: "doodle-coat-care-burlingame",
    area: "burlingame",
    title: "Doodle Coat Care: Keeping a Burlingame Doodle Mat-Free",
    metaDescription:
      "Doodle coats mat fast. How to brush a doodle properly, where mats start, and how often to book a groom, from a mobile groomer serving Burlingame.",
    excerpt: "Doodles are everywhere on Burlingame Avenue, and so are their mats. Here is how to brush a doodle so it actually works.",
    eyebrow: "Burlingame",
    publishedAt: "2026-11-02",
    photo: "apricot-doodle-bandana",
    body: [
      {
        type: "p",
        text: "Take a stroll down Burlingame Avenue or Broadway and you will meet plenty of doodles. They are friendly, popular dogs, but their coats are one of the most demanding to look after. A doodle coat can look fluffy on top while it is quietly matting right next to the skin.",
      },
      { type: "h2", text: "Why Doodle Coats Mat" },
      {
        type: "p",
        text: "Most doodles have a curly or wavy coat that keeps growing and does not shed much. The loose hair stays caught in the coat instead of falling out, and it twists into mats wherever there is friction or moisture.",
      },
      { type: "h2", text: "Where Mats Start" },
      {
        type: "list",
        items: [
          "Behind the ears",
          "Under the collar or harness",
          "In the armpits and the groin",
          "On the back of the legs and around the tail",
          "Between the toes",
        ],
      },
      { type: "h2", text: "How to Brush a Doodle Properly" },
      {
        type: "p",
        text: "Use a slicker brush, then follow with a metal comb. Work in small sections and lift the hair so you brush from the skin outward, not just over the top. If the comb glides from skin to tip, that section is done; if it snags, keep working gently. Aim for a thorough brush-out several times a week.",
      },
      { type: "h2", text: "How Often to Book" },
      {
        type: "p",
        text: "Most doodles do best with a full groom every four to six weeks. A shorter trim is easier to keep up with between appointments. If your doodle is already heavily matted, a shorter clip and a fresh start is kinder than a long, painful de-matting session.",
      },
      ...close("Burlingame"),
    ],
  },
  {
    slug: "grooming-senior-dogs-at-home-colma",
    area: "colma",
    title: "Grooming Senior Dogs: Gentle Care at Home in Colma",
    metaDescription:
      "Older dogs need gentler grooming: shorter sessions, careful nail trims and no stressful car rides. Senior dog grooming tips for Colma owners.",
    excerpt: "As dogs age, grooming matters more and gets harder. How to keep a senior dog comfortable, clean and moving well.",
    eyebrow: "Colma",
    publishedAt: "2026-11-02",
    photo: "black-and-white-shih-tzu",
    body: [
      {
        type: "p",
        text: "Colma is a small, quiet town, and plenty of the dogs in it are quiet, older companions. Senior dogs still need regular grooming, often more than ever, but stiff joints, thinner skin and less patience mean they need it done gently.",
      },
      { type: "h2", text: "Why Grooming Matters More with Age" },
      {
        type: "list",
        items: [
          "Long nails change how a dog stands and walks, which is hard on arthritic joints.",
          "Fur between the pads makes it easier to slip on smooth floors.",
          "Older dogs groom themselves less, so the coat mats and smells more easily.",
          "Regular handling is a chance to notice new lumps, sore spots or changes in the skin. Mention anything new to your vet.",
        ],
      },
      { type: "h2", text: "Making Grooming Comfortable" },
      {
        type: "p",
        text: "Keep sessions short and let your dog rest. Support them rather than asking them to stand for long. Use lukewarm water and dry thoroughly, since older dogs feel the cold more. A shorter, easy-care trim often suits a senior dog better than a style that needs a lot of brushing.",
      },
      { type: "h2", text: "Skipping the Car Ride" },
      {
        type: "p",
        text: "Getting in and out of a car, waiting in a busy salon and a long day away from home can wear out an older dog. With mobile grooming, your dog only has to walk out to the van at your door, and is back home on their own bed right after.",
      },
      ...close("Colma"),
    ],
  },
  {
    slug: "grooming-large-double-coated-dogs-hillsborough",
    area: "hillsborough",
    title: "Big Dogs, Big Coats: Grooming Large Breeds in Hillsborough",
    metaDescription:
      "Golden Retrievers, Samoyeds and other big double-coated dogs need de-shedding, not shaving. Large-breed grooming tips for Hillsborough owners.",
    excerpt: "Big double-coated dogs shed a lot and are hard to drive anywhere. How to keep the undercoat under control at home.",
    eyebrow: "Hillsborough",
    publishedAt: "2026-11-02",
    photo: "golden-retriever-standing-in-van",
    body: [
      {
        type: "p",
        text: "Hillsborough's big lots and leafy streets suit big dogs: Golden Retrievers, Samoyeds, Bernese Mountain Dogs and other large, double-coated breeds. These dogs are wonderful companions, but their coats need real work, and lifting a large dog in and out of a car for every groom is no fun for anyone.",
      },
      { type: "h2", text: "Understanding the Double Coat" },
      {
        type: "p",
        text: "A double coat has two layers: longer guard hairs on top and a soft, dense undercoat beneath. The undercoat sheds heavily, especially when the seasons change. If it is not brushed out, it packs down, holds moisture and dirt, and can mat close to the skin.",
      },
      { type: "h2", text: "At-Home Brushing for Big Dogs" },
      {
        type: "list",
        items: [
          "Use an undercoat rake to pull out loose undercoat, followed by a slicker brush for the top coat.",
          "Brush a few times a week, and every day during heavy shedding.",
          "Do not forget the trousers, the tail and behind the ears, where big coats tangle most.",
          "Brush in sections, working from the skin outward.",
        ],
      },
      { type: "h2", text: "Why Not Just Shave Them?" },
      {
        type: "p",
        text: "Shaving a double-coated dog is usually a mistake. The coat helps protect against heat and sun, and it can grow back patchy or uneven. A proper de-shedding treatment removes the dead undercoat while leaving the coat to do its job.",
      },
      { type: "h2", text: "Why Mobile Suits Large Dogs" },
      {
        type: "p",
        text: "With a mobile groom, there is no need to load a large dog into the car. Our van parks in your driveway or on your street, and your dog is groomed right there.",
      },
      ...close("Hillsborough"),
    ],
  },
  {
    slug: "beach-dog-grooming-salt-sand-pacifica",
    area: "pacifica",
    title: "After the Beach: Rinsing Salt and Sand from Pacifica Dogs",
    metaDescription:
      "Beach days leave salt, sand and damp fur in your dog's coat. How to rinse, dry and care for a beach dog's coat, paws and ears in Pacifica.",
    excerpt: "Salt water and sand are hard on skin and coat. A simple after-beach routine for Pacifica dogs, plus ears and paws.",
    eyebrow: "Pacifica",
    publishedAt: "2026-11-02",
    photo: "two-doodles-in-van-bathtub",
    body: [
      {
        type: "p",
        text: "From Rockaway Beach to Linda Mar, a walk by the ocean is one of the joys of living in Pacifica. Dogs love it too. But salt water, sand and the coast's damp, foggy air can leave a dog's coat itchy, tangled and slow to dry.",
      },
      { type: "h2", text: "Rinse After Every Beach Trip" },
      {
        type: "p",
        text: "Salt dries out skin and leaves the coat feeling coarse. A quick rinse with fresh water after the beach washes it out, along with most of the sand. You do not need a full shampoo every time: plain water and a towel go a long way.",
      },
      { type: "h2", text: "Dry Thoroughly" },
      {
        type: "list",
        items: [
          "Towel off well, then let your dog finish drying somewhere warm.",
          "Pay attention to the ears: moisture trapped in floppy ears can lead to irritation.",
          "Dry between the toes and pads, where sand and damp skin rub together.",
          "On curly or long coats, brush once dry, since damp coats tangle and mat more easily.",
        ],
      },
      { type: "h2", text: "Watch the Paws" },
      {
        type: "p",
        text: "Sand can work between the pads and cause sore spots. Check the feet after a long beach walk, and keep the fur on the paws trimmed so less sand and salt get trapped.",
      },
      { type: "h2", text: "Why a Regular Groom Helps Beach Dogs" },
      {
        type: "p",
        text: "A proper bath and blow-dry clears out salt and sand that a quick rinse misses, and a neat trim helps the coat dry faster between beach days. In the van, your dog gets a full bath in a real tub, without you having to bathe a sandy dog in your own shower.",
      },
      ...close("Pacifica"),
    ],
  },
  {
    slug: "fog-damp-coats-matting-daly-city",
    area: "daly-city",
    title: "Fog, Damp Coats and Matting: Tips for Daly City Dogs",
    metaDescription:
      "Daly City's foggy air keeps coats damp, and damp coats mat. How to dry, brush and protect your dog's coat in a foggy neighborhood.",
    excerpt: "Daly City is famous for its fog, and fog is hard on curly and long coats. How to stop damp fur turning into mats.",
    eyebrow: "Daly City",
    publishedAt: "2026-11-02",
    photo: "apricot-poodle-curly-trim",
    body: [
      {
        type: "p",
        text: "Daly City is well known for its fog. It rolls in off the ocean and settles over Westlake and Serramonte for days at a time. For dogs with curly or long coats, that constant damp air can quietly cause one of the most common grooming problems: matting.",
      },
      { type: "h2", text: "Why Damp Coats Mat" },
      {
        type: "p",
        text: "Moisture makes hair swell and cling together. Add friction from a collar, a harness or lying down, and loose hair twists into knots that tighten as they dry. In a foggy neighborhood, a coat can stay slightly damp much of the day without looking wet.",
      },
      { type: "h2", text: "Simple Habits That Help" },
      {
        type: "list",
        items: [
          "Towel your dog after foggy walks, not just rainy ones.",
          "Brush once the coat is fully dry, working from the skin out.",
          "Check friction spots often: behind the ears, under the collar or harness, and the armpits.",
          "Take the harness off at home so the coat underneath can breathe.",
          "Keep the coat a little shorter through the foggiest months, so it dries faster.",
        ],
      },
      { type: "h2", text: "Watch for Damp Skin" },
      {
        type: "p",
        text: "Skin that stays damp under a thick coat can become irritated or develop hot spots. If you notice a red, moist or smelly patch, or your dog keeps licking one spot, check with your vet.",
      },
      { type: "h2", text: "Regular Grooms Keep Mats Away" },
      {
        type: "p",
        text: "For curly breeds and doodles, a full groom every four to six weeks keeps the coat at a length you can manage, and a thorough blow-dry in the van means your dog goes back inside completely dry.",
      },
      ...close("Daly City"),
    ],
  },
  {
    slug: "should-you-shave-your-dog-for-summer-san-mateo",
    area: "san-mateo",
    title: "Should You Shave Your Dog for Summer? Advice for San Mateo",
    metaDescription:
      "Shaving a double-coated dog for summer usually backfires. Which coats can be trimmed short, which should be de-shedded instead, and heat tips.",
    excerpt: "Warm days tempt owners to shave their dogs. For many breeds that is the wrong move. Here is what to do instead.",
    eyebrow: "San Mateo",
    publishedAt: "2026-11-02",
    photo: "white-fluffy-dog-sitting",
    body: [
      {
        type: "p",
        text: "On the Bay side of the hills, San Mateo often gets warmer, sunnier days than the foggy coast. When the heat arrives, many owners ask us to shave their dog down to keep them cool. For some dogs a short trim is great. For others, shaving can do more harm than good.",
      },
      { type: "h2", text: "Double-Coated Dogs: De-Shed, Do Not Shave" },
      {
        type: "p",
        text: "Huskies, Samoyeds, Golden Retrievers, Pomeranians and other double-coated breeds have a dense undercoat beneath their outer coat. Together, the layers help shield the skin from sun and heat. Shaving removes that protection, can leave the skin exposed to sunburn, and the coat may grow back patchy. Removing the loose undercoat with a de-shedding treatment lets air reach the skin while keeping the coat intact.",
      },
      { type: "h2", text: "Single Coats: A Shorter Trim Is Fine" },
      {
        type: "p",
        text: "Poodles, doodles, Bichons, Shih Tzus and other dogs with continuously growing hair can happily wear a shorter summer cut. It keeps them cooler, dries faster after a swim and is easier to keep tangle-free.",
      },
      { type: "h2", text: "Keeping Any Dog Cool" },
      {
        type: "list",
        items: [
          "Walk early or late in the day, when it is cooler.",
          "Test pavement with the back of your hand: if it is too hot to hold there, it is too hot for paws.",
          "Always have water and shade available.",
          "Never leave a dog in a parked car, even for a few minutes.",
          "Watch for heavy panting, drooling or weakness, and call your vet if you are worried.",
        ],
      },
      ...close("San Mateo"),
    ],
  },
  {
    slug: "paw-and-nail-care-foster-city",
    area: "foster-city",
    title: "Paw and Nail Care for Foster City's Walking Dogs",
    metaDescription:
      "Daily walks on paved paths wear paws and nails differently. How to check paws, when to trim nails and why paw fur matters, for Foster City dogs.",
    excerpt: "Lagoon loops and Bay Trail walks are great for dogs. Here is how to keep the paws doing all that walking healthy.",
    eyebrow: "Foster City",
    publishedAt: "2026-11-02",
    photo: "pomeranian-with-grooming-shears",
    body: [
      {
        type: "p",
        text: "Foster City is made for walking dogs, with paths that loop around the lagoons and run along the Bay shoreline. All those miles are great exercise, but they put a lot of wear on the part of your dog that does the work: the paws.",
      },
      { type: "h2", text: "Nails: Shorter Is Better" },
      {
        type: "p",
        text: "Many owners assume walking on pavement keeps nails short, but most dogs still need regular trims, and the dewclaws never touch the ground at all. Long nails push the toes up and change how a dog stands. If you can hear clicking on a hard floor, the nails are too long. Most dogs need a trim every three to four weeks.",
      },
      { type: "h2", text: "Check the Pads" },
      {
        type: "list",
        items: [
          "Look for cracks, cuts or dry, rough patches on the pads.",
          "Check between the toes for redness, grass seeds or debris.",
          "Notice any limping or licking at one foot, and see your vet if it continues.",
          "On hot days, test the pavement with your hand before a long walk.",
        ],
      },
      { type: "h2", text: "Trim the Paw Fur" },
      {
        type: "p",
        text: "Fur growing between and over the pads reduces grip on smooth floors, traps moisture and gives grass seeds somewhere to hide. Keeping it trimmed level with the pads is a small job that makes a big difference, especially for long-haired and curly breeds.",
      },
      { type: "h2", text: "Making Nail Trims Easier" },
      {
        type: "p",
        text: "If your dog dislikes having their feet handled, practice touching and holding the paws for a few seconds at a time, with treats, between appointments. Nail trimming is one of the services you can choose when you book.",
      },
      ...close("Foster City"),
    ],
  },
  {
    slug: "cat-grooming-at-home-san-francisco",
    area: "san-francisco",
    title: "Cat Grooming at Home: A Guide for San Francisco Cat Owners",
    metaDescription:
      "Long-haired cats mat easily and hate car rides. Brushing tips, how to handle mats safely, and why mobile cat grooming suits San Francisco homes.",
    excerpt: "Cats groom themselves, but many still need help. Brushing, mats, nails, and why skipping the carrier makes it easier.",
    eyebrow: "San Francisco",
    publishedAt: "2026-11-02",
    photo: "two-fluffy-cats-after-grooming",
    body: [
      {
        type: "p",
        text: "In the Sunset, Parkside, West Portal and across the southern and western neighborhoods, plenty of San Francisco homes have a cat in charge. Cats are famously good at grooming themselves, but long-haired and older cats often need help, and very few cats enjoy a trip across the city in a carrier.",
      },
      { type: "h2", text: "Which Cats Need Grooming Help" },
      {
        type: "list",
        items: [
          "Long-haired breeds such as Persians, Maine Coons, Ragdolls and Siberians, whose coats tangle easily.",
          "Older cats, who often groom themselves less thoroughly.",
          "Overweight cats, who struggle to reach their back and hindquarters.",
          "Cats who shed heavily, to cut down on hairballs.",
        ],
      },
      { type: "h2", text: "Brushing a Cat" },
      {
        type: "p",
        text: "Keep sessions short and stop before your cat gets annoyed. Use a wide-toothed comb or a soft slicker brush, and focus on the belly, armpits, behind the ears and the back of the legs, where mats form first. A few minutes a few times a week is better than one long session.",
      },
      { type: "h2", text: "Do Not Cut Mats with Scissors" },
      {
        type: "p",
        text: "Cat skin is thin and stretches into the mat, so it is very easy to cut the skin by accident. Small tangles can be teased out with a comb. Larger or tight mats are best clipped out by a groomer.",
      },
      { type: "h2", text: "Why Mobile Grooming Suits Cats" },
      {
        type: "p",
        text: "For most cats, the car ride and a noisy salon full of barking dogs are the most stressful part of grooming. With mobile grooming, there is no long drive across the city: the van parks at your door and your cat is home again right after.",
      },
      ...close("San Francisco"),
    ],
  },
];

// Service guides first, then one post per area.
export const blogPosts: BlogPost[] = [...servicePosts, ...areaPosts];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function postForArea(areaKey: string): BlogPost | undefined {
  return blogPosts.find((p) => p.area === areaKey);
}

export function postForService(key: ServiceKey): BlogPost | undefined {
  return blogPosts.find((p) => p.service === key);
}

export function formatBlogDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
