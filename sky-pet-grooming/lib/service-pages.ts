// Page copy for each service page at /mobile-pet-grooming/<key>/. What each
// service includes and how it can be booked (on its own, or only with a
// bath or groom) comes from the owner's MoeGo booking page; everything else
// is general grooming knowledge. No prices: they change, so every page sends
// people to the booking page for current ones.

import type { ServiceKey } from "./site-data";

export type ServicePage = {
  h1: string;
  metaTitle: string; // <= 60 characters
  metaDescription: string; // <= 160 characters
  intro: string[];
  sections: ({ h2: string } & ({ p: string } | { list: string[] }))[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: Record<ServiceKey, ServicePage> = {
  "full-dog-grooming": {
    h1: "Mobile Full Dog Grooming",
    metaTitle: "Mobile Full Dog Grooming, SF Peninsula | Sky Pet",
    metaDescription:
      "Full dog grooming at your door: bath, haircut, ear cleaning and nail trim, with packages for every size. Serving San Francisco and the Peninsula.",
    intro: [
      "Our full grooming packages are the complete works for your dog, done in our van parked right outside your home. There is no car ride, no drop-off and no waiting room: your dog is groomed at your door and back inside with you as soon as they are done.",
      "Packages are sized to your dog, from Small through Medium, Large and Extra Large up to XXLarge, because a Yorkie and a Newfoundland need very different amounts of time and care.",
    ],
    sections: [
      {
        h2: "What a Full Groom Includes",
        list: [
          "A brush-out before the bath, to loosen dead hair and find tangles.",
          "A bath in the van's full-size tub, with a thorough rinse.",
          "Drying with professional dryers.",
          "A haircut or trim to suit your dog and what you ask for.",
          "Ear cleaning.",
          "A nail trim.",
        ],
      },
      {
        h2: "Add-Ons",
        p: "With a grooming package you can also add de-shedding, detangling, teeth brushing or anal gland expression. Pick them when you book online.",
      },
      {
        h2: "Choosing the Right Size",
        p: "Choose the package that matches your dog's size when you book. If you are not sure which size your dog is, call us and we will help you pick.",
      },
    ],
    faqs: [
      {
        question: "How much does a full groom cost?",
        answer: "It depends on your dog's size and the add-ons you choose. You will see current prices for every size on our booking page.",
      },
      {
        question: "What if my dog is matted?",
        answer:
          "Tell us when you book. Matted coats take extra time and care, so there is an extra charge, and very tight mats may need a shorter clip.",
      },
    ],
  },
  "dog-bath": {
    h1: "Mobile Dog Bath",
    metaTitle: "Mobile Dog Bath at Your Door, SF Peninsula | Sky Pet",
    metaDescription:
      "A bath-only appointment for dogs who need a wash, not a haircut. Mobile dog baths from small to XXL in San Francisco and on the Peninsula.",
    intro: [
      "Not every dog needs a haircut every time. Our bath-only appointments are for short-coated dogs, dogs between full grooms, and any dog who has rolled in something they should not have.",
      "Like every service, it happens in our van at your home, so you skip the muddy-dog-in-the-bathtub routine entirely.",
    ],
    sections: [
      {
        h2: "Who a Bath Is For",
        list: [
          "Short-coated breeds such as Labradors, Boxers, Beagles and French Bulldogs.",
          "Dogs in between full grooms who just need freshening up.",
          "Dogs who come home from the beach, the park or the trail smelling like it.",
        ],
      },
      {
        h2: "Sized to Your Dog",
        p: "Baths are booked by size, from Small through Medium, Large and Extra Large up to XXLarge.",
      },
      {
        h2: "Add-Ons",
        p: "With a bath you can add de-shedding, detangling, teeth brushing, a face trim or anal gland expression. A face trim is a good way to keep the eyes clear between full grooms.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a bath and a full groom?",
        answer: "A bath is a wash and dry without a haircut. A full groom adds the haircut or trim, ear cleaning and a nail trim.",
      },
      {
        question: "Do you also do nail trims?",
        answer: "Yes. Nail trims can be booked on their own, and they are included in every full grooming package.",
      },
    ],
  },
  "cat-grooming": {
    h1: "Mobile Cat Grooming",
    metaTitle: "Mobile Cat Grooming at Home, SF Peninsula | Sky Pet",
    metaDescription:
      "Cat grooming and cat baths at your door, with no carrier and no car ride. Mobile cat grooming in San Francisco and on the Peninsula.",
    intro: [
      "For most cats, the worst part of grooming is getting there: the carrier, the car ride and a salon full of barking dogs. Our van comes to your home instead, and your cat is back inside as soon as the groom is done.",
      "We offer cat grooming and a bath-only cat bath. Long-haired, older and less agile cats often need the most help keeping their coats in shape.",
    ],
    sections: [
      {
        h2: "Cat Services",
        list: [
          "Cat grooming, for coats that need more than a wash.",
          "A cat bath, for a bath-only appointment.",
          "Skunk-Off, if your cat has had a run-in with a skunk.",
          "Detangling and other add-ons with a bath or groom.",
        ],
      },
      {
        h2: "Signs Your Cat Needs a Groom",
        list: [
          "Mats on the belly, armpits, behind the ears or around the back legs.",
          "A greasy or unkempt coat along the back.",
          "More hairballs than usual.",
          "Mess caught in the fur around the tail.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you groom cats as well as dogs?",
        answer: "Yes. We offer cat grooming and cat baths, at your door.",
      },
      {
        question: "Should I cut out my cat's mats myself?",
        answer: "Please don't. A cat's skin is thin and easy to cut by accident. Book a groom and add detangling instead.",
      },
    ],
  },
  "skunk-off": {
    h1: "Mobile Skunk-Off Treatment",
    metaTitle: "Skunk-Off Treatment for Dogs & Cats | Sky Pet Grooming",
    metaDescription:
      "Has your dog or cat been sprayed by a skunk? Our bath-only Skunk-Off treatment comes to your door in San Francisco and on the Peninsula.",
    intro: [
      "Skunk spray is oily, clings to fur and gets everywhere your pet goes. Our Skunk-Off treatment is a bath-only service that tackles it in our van, so the smell stays outside instead of in your home.",
      "It is available for dogs of every size, from Small to XXLarge, and for cats.",
    ],
    sections: [
      {
        h2: "Right After a Skunk Encounter",
        list: [
          "Keep your pet outside if you can, so the smell does not spread through the house.",
          "Check the eyes: if they look red or irritated, rinse gently with water and call your vet.",
          "Book a Skunk-Off treatment, or call us.",
        ],
      },
      {
        h2: "Why a Proper Treatment Helps",
        p: "Skunk spray is oily and clings to fur, so a quick wash at home rarely gets it all. A skunk treatment needs time and a very thorough rinse, which is what our van's full bathtub is for.",
      },
    ],
    faqs: [
      {
        question: "Is Skunk-Off available for cats?",
        answer: "Yes. There is a Skunk-Off treatment for cats as well as for dogs of every size.",
      },
      {
        question: "Does Skunk-Off include a haircut?",
        answer: "No. Skunk-Off is a bath-only treatment. If your pet is due for a groom too, call us to talk it through.",
      },
    ],
  },
  "nail-trimming": {
    h1: "Mobile Nail Trimming",
    metaTitle: "Mobile Nail Trims at Your Door, SF Peninsula | Sky Pet",
    metaDescription:
      "Nail trims on their own, no bath or groom needed, done in our van at your door. Mobile nail trimming in San Francisco and on the Peninsula.",
    intro: [
      "Long nails change the way a dog stands and walks, and they catch on carpets and furniture. Our nail trims can be booked on their own, so there is no need to wait for a full groom.",
      "Nail trims are also included in every full grooming package.",
    ],
    sections: [
      {
        h2: "Signs Nails Are Too Long",
        list: [
          "You can hear clicking on hard floors.",
          "The nails touch the ground when your dog is standing still.",
          "Dewclaws are curling toward the leg.",
          "Your dog is slipping more on smooth floors.",
        ],
      },
      {
        h2: "How Often",
        p: "Most dogs need a trim every three to four weeks. Regular trims also help the quick, the living part inside the nail, recede, so nails can be kept at a healthy length.",
      },
      {
        h2: "More Than One Pet",
        p: "Booking nail trims for two pets in the same visit costs less for the second one. You will see the details on our booking page.",
      },
    ],
    faqs: [
      {
        question: "Can I book just a nail trim?",
        answer: "Yes. Nail trimming can be booked on its own, without a bath or groom.",
      },
      {
        question: "My dog hates nail trims. Can you help?",
        answer:
          "Practicing paw handling with treats at home makes a big difference. Doing the trim at your door, without a car ride or a busy salon, helps a lot of nervous dogs too.",
      },
    ],
  },
  "de-shedding": {
    h1: "De-Shedding Treatment",
    metaTitle: "De-Shedding Treatment for Dogs, SF Peninsula | Sky Pet",
    metaDescription:
      "Less dog hair on your floors. Our de-shedding add-on brushes out loose undercoat with a bath or groom, at your door on the SF Peninsula.",
    intro: [
      "If you are vacuuming dog hair every day, de-shedding is for you. It brushes out the loose, fuzzy undercoat that otherwise ends up on your couch, your clothes and your floors.",
      "De-shedding is an add-on: choose it with a bath or a grooming package when you book.",
    ],
    sections: [
      {
        h2: "Which Dogs Need It",
        p: "Double-coated breeds benefit most: Golden Retrievers, Labradors, German Shepherds, Huskies, Samoyeds, Corgis and Pomeranians. They shed all year, and heavily when the seasons change.",
      },
      {
        h2: "How It Works",
        list: [
          "The bath helps loosen the dead undercoat.",
          "Drying with professional dryers blows a lot of loose hair out.",
          "Thorough brushing removes the rest, down to the skin.",
        ],
      },
      {
        h2: "De-Shedding, Not Shaving",
        p: "A double coat helps protect a dog from sun and heat, and shaving it can leave it growing back patchy. De-shedding keeps the coat intact and clears out the hair that is already on its way out.",
      },
    ],
    faqs: [
      {
        question: "Can I book de-shedding on its own?",
        answer: "No. De-shedding is an add-on, so book it with a bath or a grooming package.",
      },
      {
        question: "How often should my dog be de-shedded?",
        answer: "Many double-coated dogs do well every six to eight weeks, with an extra one when they are blowing their coat.",
      },
    ],
  },
  detangling: {
    h1: "Detangling for Dogs and Cats",
    metaTitle: "Detangling for Dogs & Cats, SF Peninsula | Sky Pet",
    metaDescription:
      "Knots and tangles worked out of dog and cat coats, as an add-on with a bath or groom, at your door in San Francisco and on the Peninsula.",
    intro: [
      "Tangles pull on the skin every time a pet moves, and left alone they tighten into mats. Our detangling add-on works knots out of dog and cat coats so the coat can be kept at its length.",
      "Detangling is an add-on: choose it with a bath or a grooming package when you book.",
    ],
    sections: [
      {
        h2: "Where Tangles Start",
        list: ["Behind the ears", "Under the collar or harness", "In the armpits and groin", "On the back of the legs and around the tail"],
      },
      {
        h2: "Tangles vs Tight Mats",
        p: "Loose tangles can usually be worked out. When mats are tight against the skin, brushing them out would hurt, so a shorter clip is the kinder choice. Matted coats take extra time, so there is an extra charge; please mention matting when you book.",
      },
      {
        h2: "Keeping Tangles Away",
        p: "Brush down to the skin a few times a week, dry your pet fully after baths, rain or fog, and keep long and curly coats on a regular grooming schedule.",
      },
    ],
    faqs: [
      {
        question: "Do you detangle cats?",
        answer: "Yes. Detangling is available for dogs and cats, with a bath or grooming package.",
      },
      {
        question: "Is there an extra charge for matted pets?",
        answer: "Yes, matted coats have an extra charge because they take more time. Mention it when you book.",
      },
    ],
  },
  "teeth-brushing": {
    h1: "Teeth Brushing Add-On",
    metaTitle: "Pet Teeth Brushing Add-On, SF Peninsula | Sky Pet",
    metaDescription:
      "Add teeth brushing to your pet's bath or groom. A simple add-on for fresher breath, at your door in San Francisco and on the Peninsula.",
    intro: [
      "Brushing is one of the simplest things you can do for your pet's mouth. Add teeth brushing to a bath or groom and it is taken care of in the same visit.",
      "Teeth brushing is an add-on: choose it with a bath or a grooming package when you book.",
    ],
    sections: [
      {
        h2: "Why Brushing Matters",
        p: "Plaque builds up on teeth every day. Regular brushing helps keep it under control and keeps breath fresher. Brushing at grooming time is a good habit, and brushing at home in between is even better.",
      },
      {
        h2: "When to See Your Vet",
        list: [
          "Very bad breath that does not improve.",
          "Red, swollen or bleeding gums.",
          "Loose or broken teeth.",
          "Trouble eating, or pawing at the mouth.",
        ],
      },
      {
        h2: "Brushing at Home",
        p: "Use a toothpaste made for pets, never human toothpaste. Start slowly with a finger brush, and keep sessions short and positive.",
      },
    ],
    faqs: [
      {
        question: "Is teeth brushing the same as a dental cleaning?",
        answer: "No. Brushing removes surface plaque. A full dental cleaning is a veterinary procedure. Ask your vet if your pet needs one.",
      },
      {
        question: "Can I book teeth brushing on its own?",
        answer: "No. It is an add-on, so book it with a bath or a grooming package.",
      },
    ],
  },
  "face-trim": {
    h1: "Face Trim for Dogs",
    metaTitle: "Dog Face Trim Add-On, SF Peninsula | Sky Pet Grooming",
    metaDescription:
      "A neat trim around the eyes, muzzle and ears, added to a bath. Keeps your dog's face tidy between full grooms, at your door on the SF Peninsula.",
    intro: [
      "Hair around the eyes grows fast on Shih Tzus, Maltese, Poodles, doodles and other long-faced breeds. A face trim keeps the eyes clear and the face tidy between full grooms.",
      "A face trim is an add-on to a bath: choose it when you book a bath.",
    ],
    sections: [
      {
        h2: "What a Face Trim Covers",
        list: [
          "Clearing hair away from the eyes so your dog can see.",
          "Tidying the muzzle and beard.",
          "Neatening around the ears.",
        ],
      },
      {
        h2: "Why It Helps Between Grooms",
        p: "Hair poking into the eyes can cause irritation and tear staining, and a messy beard collects food and water. Pairing a bath with a face trim keeps your dog looking and feeling fresh until the next full groom.",
      },
    ],
    faqs: [
      {
        question: "Can I add a face trim to a full groom?",
        answer: "A full groom already includes a haircut or trim. The face trim add-on is for bath appointments.",
      },
      {
        question: "Which dogs need face trims most?",
        answer: "Dogs with long or curly hair on the face: Shih Tzus, Maltese, Yorkies, Poodles, doodles and Bichons.",
      },
    ],
  },
  "anal-gland-expression": {
    h1: "Anal Gland Expression",
    metaTitle: "Anal Gland Expression for Dogs, SF Peninsula | Sky Pet",
    metaDescription:
      "External anal gland expression for dogs that need it, added to a bath or groom, at your door. Signs to watch for and when to see your vet.",
    intro: [
      "Scooting, licking at the rear or a fishy smell can mean your dog's anal glands are not emptying on their own. External expression, added to a bath or groom, gently empties them.",
      "Anal gland expression is an add-on: choose it with a bath or a grooming package when you book.",
    ],
    sections: [
      {
        h2: "Signs to Watch For",
        list: ["Scooting along the floor or grass", "Licking or chewing at the tail area", "A strong, fishy smell", "Discomfort when sitting"],
      },
      {
        h2: "Not Every Dog Needs It",
        p: "Many dogs empty their glands naturally and never need help. If your dog shows no signs, there is no need to add it every time.",
      },
      {
        h2: "When to See Your Vet Instead",
        p: "Swelling, a lump near the rear, bleeding, pus or obvious pain need a vet, not a groomer. So does scooting that continues after expression.",
      },
    ],
    faqs: [
      {
        question: "Can I book anal gland expression on its own?",
        answer: "No. It is an add-on, so book it with a bath or a grooming package.",
      },
      {
        question: "How is it done?",
        answer: "Groomers express the glands externally, by hand. Internal expression is a veterinary procedure.",
      },
    ],
  },
};
