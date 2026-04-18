import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container, Eyebrow, Button } from "./ui";

type Props = {
  title: string;
  eyebrow?: string;
  backHref?: string;
  backLabel?: string;
};

export function PlaceholderPage({
  title,
  eyebrow = "Coming soon",
  backHref = "/",
  backLabel = "Back to home →",
}: Props) {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <Container className="py-40 text-center">
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <h1 className="type-h2 text-[--color-walnut] mb-8">{title}</h1>
          <Button variant="text" href={backHref}>
            {backLabel}
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
