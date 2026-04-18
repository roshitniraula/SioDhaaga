export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  fabric: string;
  color: string;
  handle: string;
  image: string;
  imageAlt: string;
  hoverImage: string;
};

// TODO: replace with live Shopify data in Phase 3
export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "The Sable Shirt",
    price: 44,
    category: "Women",
    fabric: "Washed Linen",
    color: "Ivory",
    handle: "sable-shirt",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=85",
    imageAlt: "TODO: replace with brand photography — The Sable Shirt in Ivory",
    hoverImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: "2",
    name: "The Drift Trouser",
    price: 52,
    category: "Men",
    fabric: "Cotton Canvas",
    color: "Stone",
    handle: "drift-trouser",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=600&q=85",
    imageAlt: "TODO: replace with brand photography — The Drift Trouser in Stone",
    hoverImage:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: "3",
    name: "The Still Hoodie",
    price: 55,
    category: "Unisex",
    fabric: "Brushed Cotton",
    color: "Bone",
    handle: "still-hoodie",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=600&q=85",
    imageAlt: "TODO: replace with brand photography — The Still Hoodie in Bone",
    hoverImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: "4",
    name: "The Indigo Jean",
    price: 60,
    category: "Denim",
    fabric: "Selvedge Denim",
    color: "Indigo",
    handle: "indigo-jean",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=85",
    imageAlt: "TODO: replace with brand photography — The Indigo Jean",
    hoverImage:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=85",
  },
];

export const shopTheLookProducts: Product[] = [
  {
    id: "5",
    name: "The Linen Overshirt",
    price: 68,
    category: "Women",
    fabric: "Washed Linen",
    color: "Sand",
    handle: "linen-overshirt",
    image:
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=85",
    imageAlt: "TODO: replace with brand photography — The Linen Overshirt in Sand",
    hoverImage:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: "6",
    name: "The Merino Crew",
    price: 58,
    category: "Unisex",
    fabric: "Merino Wool",
    color: "Oat",
    handle: "merino-crew",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=85",
    imageAlt: "TODO: replace with brand photography — The Merino Crew in Oat",
    hoverImage:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: "7",
    name: "The Raw Jean",
    price: 72,
    category: "Denim",
    fabric: "Selvedge Denim",
    color: "Raw Indigo",
    handle: "raw-jean",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=85",
    imageAlt: "TODO: replace with brand photography — The Raw Jean in Raw Indigo",
    hoverImage:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=85",
  },
];
