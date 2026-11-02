// Every photo the owner supplied (Google Drive folder "Sky Pet Grooming"),
// converted to 1280px-wide WebP at public/photos/<slug>.webp with EXIF
// (including GPS) stripped; next/image serves smaller sizes from those.
// Alt text describes what is actually in each photo. Tags: van (the grooming van), dog, cat,
// team (the groomer), hero (home page hero picks).

export type Photo = {
  slug: string;
  alt: string;
  // Intrinsic size of the source file, for width/height (no layout shift).
  w: number;
  h: number;
  tags: readonly string[];
};

export const photos: readonly Photo[] = [
  { slug: "sky-pet-grooming-van", alt: "The pink and blue Sky Pet Grooming van parked on a city street", w: 960, h: 1280, tags: ["van"] },
  { slug: "white-dog-outside-grooming-van", alt: "Fluffy white dog on a leash beside the open Sky Pet Grooming van", w: 1280, h: 2276, tags: ["van", "dog"] },
  { slug: "two-doodles-in-van-bathtub", alt: "Two doodles in the bathtub inside the grooming van", w: 1280, h: 2276, tags: ["van", "dog"] },
  { slug: "groomer-with-three-small-dogs", alt: "Sky Pet Grooming groomer with three small white and black dogs in the van", w: 1280, h: 2275, tags: ["dog", "team"] },
  { slug: "golden-retriever-on-grooming-table", alt: "Golden Retriever sitting on the grooming table inside the van", w: 1280, h: 1280, tags: ["dog", "hero"] },
  { slug: "white-curly-dog-teddy-face", alt: "Happy white curly-coated dog with a rounded teddy-bear face trim", w: 1280, h: 1280, tags: ["dog", "hero"] },
  { slug: "apricot-poodle-curly-trim", alt: "Apricot poodle with a fresh curly trim lying on the grooming table", w: 1280, h: 720, tags: ["dog", "hero"] },
  { slug: "gray-long-haired-cat", alt: "Gray long-haired cat on the grooming table", w: 1280, h: 1684, tags: ["cat"] },
  { slug: "two-fluffy-cats-after-grooming", alt: "Two fluffy long-haired cats with blue eyes after grooming", w: 1280, h: 1280, tags: ["cat"] },
  { slug: "white-dog-rounded-trim", alt: "Smiling white dog with a rounded face trim tilting its head", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "white-dog-puppy-cut", alt: "Fluffy white dog with a short puppy cut on the grooming table", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "white-dog-round-head-trim", alt: "White dog with a big round head trim between two Halloween ghost decorations", w: 1280, h: 720, tags: ["dog"] },
  { slug: "black-and-tan-pomeranian", alt: "Black and tan Pomeranian standing on the grooming table", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "pomeranian-with-grooming-shears", alt: "Black and tan Pomeranian beside grooming shears and a comb", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "fluffy-pomeranian", alt: "Fluffy black and tan Pomeranian after a brush-out", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "smiling-pomeranian", alt: "Smiling black and tan Pomeranian sitting next to grooming shears", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "smiling-pit-bull-mix", alt: "Smiling pit bull mix being dried in the grooming van", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "golden-retriever-standing-in-van", alt: "Golden Retriever standing on the grooming table in the van", w: 1280, h: 720, tags: ["dog"] },
  { slug: "golden-retriever-halloween", alt: "Golden Retriever on the grooming table with Halloween decorations", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "golden-retriever-puppy-doorstep", alt: "Golden Retriever puppy on a front doorstep after a groom", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "apricot-poodle-lying-down", alt: "Apricot poodle lying down after a curly trim", w: 1280, h: 720, tags: ["dog"] },
  { slug: "apricot-doodle-halloween", alt: "Apricot doodle on the grooming table between Halloween decorations", w: 1280, h: 2275, tags: ["dog"] },
  { slug: "apricot-doodle-teddy-trim", alt: "Apricot doodle with a teddy trim and Halloween decorations", w: 1280, h: 2275, tags: ["dog"] },
  { slug: "apricot-doodle-bandana", alt: "Apricot doodle wearing a colorful bandana after a groom", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "apricot-doodle-standing", alt: "Apricot doodle with a fresh trim standing on the grooming table", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "cream-doodle-yellow-bandana", alt: "Cream doodle wearing a yellow bandana with Halloween decorations", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "cream-doodle-with-ghosts", alt: "Cream doodle smiling beside two Halloween ghost decorations", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "cream-doodle-smiling", alt: "Cream doodle with a fresh trim smiling on the grooming table", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "black-and-white-dog-halloween", alt: "Black and white curly dog with Halloween decorations", w: 1280, h: 1671, tags: ["dog"] },
  { slug: "black-and-white-shih-tzu", alt: "Black and white Shih Tzu with a fresh trim", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "shih-tzu-with-shears", alt: "Black and white Shih Tzu on the grooming table beside shears", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "gray-dog-with-ghosts", alt: "Gray shaggy dog lying between Halloween ghost decorations", w: 1280, h: 720, tags: ["dog"] },
  { slug: "gray-and-white-shaggy-dog", alt: "Gray and white shaggy dog wearing a purple bandana", w: 1280, h: 2275, tags: ["dog"] },
  { slug: "french-bulldog-with-ghosts", alt: "French Bulldog on the grooming table with Halloween ghost decorations", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "two-beagles-halloween", alt: "Two beagles on the grooming table with Halloween decorations", w: 1280, h: 720, tags: ["dog"] },
  { slug: "four-small-dogs-after-grooming", alt: "Four small dogs lined up on the grooming table after their grooms", w: 1280, h: 720, tags: ["dog"] },
  { slug: "three-small-dogs-halloween", alt: "Three small dogs on the grooming table with Halloween ghost decorations", w: 1280, h: 720, tags: ["dog"] },
  { slug: "white-fluffy-dog-in-van", alt: "Large fluffy white dog standing in the grooming van", w: 1280, h: 2276, tags: ["dog"] },
  { slug: "white-fluffy-dog-sitting", alt: "Large fluffy white dog sitting in the grooming van after a brush-out", w: 1280, h: 2276, tags: ["dog"] },
];

export function photo(slug: string): Photo {
  const p = photos.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown photo: ${slug}`);
  return p;
}

export function withTag(tag: string): Photo[] {
  return photos.filter((p) => p.tags.includes(tag));
}
