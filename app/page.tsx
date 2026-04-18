import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryTile } from "@/components/CategoryTile";
import { ProductGrid } from "@/components/ProductGrid";
import { Container, Eyebrow, Button } from "@/components/ui";
import { featuredProducts } from "@/lib/products";
import { categories } from "@/lib/categories";

/* ── Category tiles ─────────────────────────────────────────────────── */
function ShopByCategory() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <Eyebrow className="mb-10">The edit</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.slug} {...cat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Featured pieces ────────────────────────────────────────────────── */
function FeaturedPieces() {
  return (
    <section className="py-20 md:py-32 bg-[--color-bone]">
      <Container>
        <div className="flex items-end justify-between mb-2">
          <Eyebrow>New this season</Eyebrow>
          <Button variant="text" href="/shop" className="hidden md:inline-flex">
            View all →
          </Button>
        </div>
        <ProductGrid products={featuredProducts} />
        <div className="mt-12 md:hidden">
          <Button variant="text" href="/shop">View all →</Button>
        </div>
      </Container>
    </section>
  );
}

/* ── Brand promise ──────────────────────────────────────────────────── */
const promises = [
  {
    heading: "Fabric, not markup.",
    body: "We spend on the material. Not on the middle. Every dollar goes toward the thread, not the margin.",
  },
  {
    heading: "Small runs, made slowly.",
    body: "We produce in small batches, by makers we know. The result holds its shape long after fast fashion unravels.",
  },
  {
    heading: "One price, always.",
    body: "No sales. No inflated MSRPs. What you see is what it costs to make something well.",
  },
];

function BrandPromise() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <Eyebrow className="mb-14">How we price</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {promises.map((p) => (
            <div key={p.heading}>
              <h3 className="type-h3 text-[--color-walnut] mb-4">{p.heading}</h3>
              <p className="type-body text-[--color-walnut-soft]">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Journal teaser ─────────────────────────────────────────────────── */
function JournalTeaser() {
  return (
    <section className="py-20 md:py-32 bg-[--color-bone]">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <Eyebrow className="mb-8">Journal</Eyebrow>
          <p className="type-h3 text-[--color-walnut] leading-[1.4]">
            Notes on fabric, craft, and what we&apos;re making next.
          </p>
          <p className="type-body text-[--color-muted] mt-5">Coming soon.</p>
        </div>
      </Container>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <ShopByCategory />
        <FeaturedPieces />
        <BrandPromise />
        <JournalTeaser />
      </main>
      <Footer />
    </>
  );
}
