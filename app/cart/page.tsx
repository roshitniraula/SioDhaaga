import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <PlaceholderPage
      title="Your cart is quiet."
      eyebrow="Cart"
      backHref="/shop"
      backLabel="Continue shopping →"
    />
  );
}
