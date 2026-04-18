import { CollectionPage } from "@/components/CollectionPage";
import { getProductsByCollection } from "@/lib/products";

export const metadata = { title: "Men" };

export default function MenPage() {
  return (
    <CollectionPage
      title="Men"
      slug="men"
      description="Clean silhouettes in cotton canvas, washed linen, and selvedge denim. No logos. No noise. Just garments that hold their shape and age well."
      // TODO: replace with brand photography — men's collection banner
      heroImage="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1400&q=85"
      products={getProductsByCollection("men")}
    />
  );
}
