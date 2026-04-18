import { CollectionPage } from "@/components/CollectionPage";
import { allProducts } from "@/lib/products";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <CollectionPage
      title="Everything"
      slug="shop"
      description="The full edit. Linens, canvas, merino, and selvedge — made slowly, priced honestly."
      // TODO: replace with brand photography — shop all banner
      heroImage="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
      products={allProducts}
    />
  );
}
