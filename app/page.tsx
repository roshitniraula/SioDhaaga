import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryTile } from "@/components/CategoryTile";
import { ProductGrid } from "@/components/ProductGrid";
import { Container, Eyebrow, Button } from "@/components/ui";
import { featuredProducts, shopTheLookProducts } from "@/lib/products";
import { categories } from "@/lib/categories";
import { journalPosts } from "@/lib/journal";

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

/* ── Featured pieces + shop the look ───────────────────────────────── */
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

        {/* Shop the look row */}
        <div className="mt-20 md:mt-24 pt-12 border-t border-[--color-line]">
          <div className="flex items-end justify-between mb-2">
            <Eyebrow>Shop the look</Eyebrow>
          </div>
          <ProductGrid products={shopTheLookProducts} />
        </div>

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
      {/* Full-width editorial image above the section */}
      <div className="relative w-full h-64 md:h-[420px] mb-16 md:mb-24 overflow-hidden">
        {/* TODO: replace with brand photography — fabric/loom close-up */}
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85"
          alt="TODO: replace with brand photography — fabric detail, hands at loom"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[--color-walnut]/10" />
      </div>

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

        {/* Pull-quote */}
        <div className="mt-16 md:mt-20 pt-12 border-t border-[--color-line] text-center max-w-2xl mx-auto">
          <p className="type-h3 text-[--color-walnut] italic leading-[1.5]">
            &ldquo;We&apos;d rather make one shirt right than ten shirts fast.&rdquo;
          </p>
          <p className="type-small text-[--color-muted] mt-4">— SioDhaga, est. 2024</p>
        </div>
      </Container>
    </section>
  );
}

/* ── Makers ─────────────────────────────────────────────────────────── */
function Makers() {
  return (
    <section className="py-20 md:py-32 bg-[--color-bone]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
            {/* TODO: replace with brand photography — workshop / maker portrait */}
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85"
              alt="TODO: replace with brand photography — maker at work, atelier"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <Eyebrow className="mb-8">Makers</Eyebrow>
            <h2 className="type-h2 text-[--color-walnut] mb-8">
              The people behind the thread.
            </h2>
            <p className="type-body text-[--color-walnut-soft] mb-6 leading-[1.75]">
              Every SioDhaga piece is made in partnership with small ateliers we
              visit in person. We know their names, their workshop schedules, and
              which makers cut which patterns. That relationship is not a footnote
              — it is why the garment is what it is.
            </p>
            <p className="type-body text-[--color-walnut-soft] mb-10 leading-[1.75]">
              We pay above the regional rate, commit to minimum order quantities
              that keep the teams stable, and name the workshop on every product
              page. Transparency is the only supply chain we trust.
            </p>
            <Button variant="text" href="/makers">
              Meet the makers →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Journal ────────────────────────────────────────────────────────── */
function Journal() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="flex items-end justify-between mb-10">
          <Eyebrow>Journal</Eyebrow>
          <Button variant="text" href="/journal" className="hidden md:inline-flex">
            All notes →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {journalPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[--color-bone] mb-5">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* Meta */}
              <p className="type-small text-[--color-muted] mb-2">{post.date}</p>
              <h3 className="type-h4 text-[--color-walnut] mb-2 group-hover:text-[--color-sage] transition-colors duration-[400ms]">
                {post.title}
              </h3>
              <p className="type-small text-[--color-walnut-soft]">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Button variant="text" href="/journal">All notes →</Button>
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
        <Makers />
        <Journal />
      </main>
      <Footer />
    </>
  );
}
