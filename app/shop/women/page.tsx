import { CollectionPage } from "@/components/CollectionPage";
import { getProductsByCollection } from "@/lib/products";

export const metadata = { title: "Women" };

export default function WomenPage() {
  return (
    <CollectionPage
      title="Women"
      slug="women"
      description="Washed linens, cotton canvas, and merino — cut for ease, finished by hand. Each piece is made in small runs with fabric we'd wear ourselves."
      // TODO: replace with brand photography — women's collection banner
      heroImage="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1400&q=85"
      products={getProductsByCollection("women")}
    />
  );
}
