import { CollectionPage } from "@/components/CollectionPage";
import { getProductsByCollection } from "@/lib/products";

export const metadata = { title: "Hoodies" };

export default function HoodiesPage() {
  return (
    <CollectionPage
      title="Hoodies"
      slug="hoodies"
      description="Heavyweight brushed cotton and french terry, cut generously, fleece-lined for the long haul. Made to be worn ten years from now."
      // TODO: replace with brand photography — hoodies collection banner
      heroImage="https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=1400&q=85"
      products={getProductsByCollection("hoodies")}
    />
  );
}
