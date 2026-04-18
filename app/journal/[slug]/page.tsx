import { PlaceholderPage } from "@/components/PlaceholderPage";

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return <PlaceholderPage title={title} eyebrow="Journal" backHref="/journal" backLabel="Back to journal →" />;
}
