import { PlaceholderPage } from "@/components/PlaceholderPage";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const title = handle
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return <PlaceholderPage title={title} eyebrow="Product" backHref="/shop" backLabel="Back to shop →" />;
}
