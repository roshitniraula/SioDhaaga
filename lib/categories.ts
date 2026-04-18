export type Category = {
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
};

// TODO: replace with Shopify collection data in Phase 3
export const categories: Category[] = [
  {
    name: "Women",
    slug: "women",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",
    imageAlt: "TODO: replace with brand photography — Women's collection",
  },
  {
    name: "Men",
    slug: "men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85",
    imageAlt: "TODO: replace with brand photography — Men's collection",
  },
  {
    name: "Hoodies",
    slug: "hoodies",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=900&q=85",
    imageAlt: "TODO: replace with brand photography — Hoodies collection",
  },
  {
    name: "Denim",
    slug: "denim",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "TODO: replace with brand photography — Denim collection",
  },
];
