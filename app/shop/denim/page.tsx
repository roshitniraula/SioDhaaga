import { CollectionPage } from "@/components/CollectionPage";
import { getProductsByCollection } from "@/lib/products";

export const metadata = { title: "Denim" };

export default function DenimPage() {
  return (
    <CollectionPage
      title="Denim"
      slug="denim"
      description="Selvedge from mills that have been weaving indigo for generations. Raw, stone-washed, and rinse — each wash telling a different story over time."
      // TODO: replace with brand photography — denim collection banner
      heroImage="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1400&q=85"
      products={getProductsByCollection("denim")}
    />
  );
}
