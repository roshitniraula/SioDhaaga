export type JournalPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

// TODO: replace with CMS data (Sanity / Contentful) in v2
export const journalPosts: JournalPost[] = [
  {
    slug: "on-washed-linen",
    date: "Mar 2026",
    title: "On washed linen, and why we wash it twice.",
    excerpt: "The second wash is what takes linen from fabric to garment.",
    // TODO: replace with brand photography — linen fabric detail
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85",
    imageAlt: "TODO: replace with brand photography — washed linen detail",
  },
  {
    slug: "notes-from-okayama",
    date: "Feb 2026",
    title: "Notes from the denim mill in Okayama.",
    excerpt: "Three days with the weavers behind our selvedge.",
    // TODO: replace with brand photography — denim weaving
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "TODO: replace with brand photography — denim mill, Okayama",
  },
  {
    slug: "one-price-always",
    date: "Jan 2026",
    title: "One price, always — the math behind it.",
    excerpt: "Why we don't do sales, and what that means for you.",
    // TODO: replace with brand photography — workshop / atelier
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=85",
    imageAlt: "TODO: replace with brand photography — atelier, pricing transparency",
  },
];
