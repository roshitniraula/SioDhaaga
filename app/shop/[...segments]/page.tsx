import { PlaceholderPage } from "@/components/PlaceholderPage";

export default async function ShopSegmentPage({
  params,
}: {
  params: Promise<{ segments: string[] }>;
}) {
  const { segments } = await params;
  const title = segments
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " "))
    .join(" / ");
  return <PlaceholderPage title={title} eyebrow="Shop" backHref="/shop" backLabel="Back to shop →" />;
}
