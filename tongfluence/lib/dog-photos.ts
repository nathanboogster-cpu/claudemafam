// ---------------------------------------------------------------------------
// DOG PHOTOS — real dogs, groomed by Tongfluence clients.
//
// Supplied by the clients for their own website builds (Bark and Bork Mobile
// Pet Spa in Compton, CA, and Pampered Puppies in Victorville, CA) and used
// here with each photo credited to the business that groomed the dog. No
// stock photography: /about promises none, and a stranger's show dog would
// say nothing about the work these businesses do.
//
// Each photo exists as a 4:5 portrait (`src`) and a square crop (`square`),
// both in public/images/dogs/.
// ---------------------------------------------------------------------------
export type DogPhoto = {
  slug: string;
  alt: string;
  /** Slug of the client build that groomed the dog (lib/client-builds.ts). */
  buildSlug: "bark-and-bork-mobile-pet-spa" | "pampered-puppies";
  credit: string;
  src: string;
  square: string;
  width: number;
  height: number;
};

const photo = (
  slug: string,
  buildSlug: DogPhoto["buildSlug"],
  alt: string,
): DogPhoto => ({
  slug,
  alt,
  buildSlug,
  credit: buildSlug === "pampered-puppies" ? "Pampered Puppies, Victorville, CA" : "Bark and Bork Mobile Pet Spa, Compton, CA",
  src: `/images/dogs/${slug}.jpg`,
  square: `/images/dogs/${slug}-sq.jpg`,
  // Pampered Puppies supplied full-resolution originals; Bark and Bork's are
  // 768px wide, which is plenty for a hero column but not for a full-bleed.
  width: buildSlug === "pampered-puppies" ? 1000 : 768,
  height: buildSlug === "pampered-puppies" ? 1250 : 960,
});

export const dogPhotos: DogPhoto[] = [
  photo("pampered-puppies-doodle-bandana", "pampered-puppies", "A freshly groomed cream doodle in a purple bandana standing on the grooming table at Pampered Puppies."),
  photo("bark-and-bork-scissors-white-dog", "bark-and-bork-mobile-pet-spa", "A groomer at Bark and Bork finishing a small white dog with scissors; the dog is looking at the camera with its tongue out."),
  photo("bark-and-bork-grey-terrier-bow", "bark-and-bork-mobile-pet-spa", "A small grey terrier mix with a pink bow tie, just groomed, lying on the table at Bark and Bork."),
  photo("bark-and-bork-long-haired-chihuahua", "bark-and-bork-mobile-pet-spa", "A long-haired tan chihuahua in a blue bow tie sitting on the grooming table at Bark and Bork."),
  photo("bark-and-bork-yorkie-bow-tie", "bark-and-bork-mobile-pet-spa", "A yorkie with a fresh trim and a green bow tie on the grooming table at Bark and Bork."),
  photo("bark-and-bork-white-fluffy-with-groomer", "bark-and-bork-mobile-pet-spa", "A groomer's hands steadying a fluffy white dog on the table at Bark and Bork; the dog is mid-smile."),
  photo("bark-and-bork-black-shih-tzu-bandana", "bark-and-bork-mobile-pet-spa", "A black and tan shih tzu in a palm-tree bandana sitting on the grooming table at Bark and Bork."),
  photo("bark-and-bork-tan-terrier-bandana", "bark-and-bork-mobile-pet-spa", "A tan terrier in a bright bandana sitting on the grooming table at Bark and Bork."),
  photo("bark-and-bork-french-bulldog", "bark-and-bork-mobile-pet-spa", "A cream French bulldog on the grooming table at Bark and Bork."),
  photo("pampered-puppies-fiesta", "pampered-puppies", "A small cream dog in a sombrero and striped serape, posed for a fiesta photo at Pampered Puppies."),
];

export const heroDogPhoto = dogPhotos[0];
export const heroDetailPhoto = dogPhotos[1];

// Photos to use on inner-page heroes, by page, so no two pages share one.
export const pageDogPhoto = {
  marketing: dogPhotos[1],
  seo: dogPhotos[6],
  websiteDesign: dogPhotos[3],
  gbp: dogPhotos[5],
  leadGeneration: dogPhotos[7],
  reviews: dogPhotos[2],
  about: dogPhotos[9],
  book: dogPhotos[4],
} as const;
