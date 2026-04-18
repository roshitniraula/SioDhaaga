"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container, Eyebrow } from "./ui";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/products";

type SortKey = "featured" | "price-asc" | "price-desc";

type CollectionPageProps = {
  title: string;
  description: string;
  slug: string;
  heroImage: string;
  products: Product[];
};

export function CollectionPage({
  title,
  description,
  heroImage,
  products,
}: CollectionPageProps) {
  const [sort, setSort] = useState<SortKey>("featured");

  const sorted = useMemo(() => {
    const copy = [...products];
    if (sort === "price-asc") copy.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") copy.sort((a, b) => b.price - a.price);
    return copy;
  }, [products, sort]);

  return (
    <>
      <Header />
      <main>
        {/* ── Hero banner ──────────────────────────────── */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          {/* TODO: replace with brand photography — collection banner */}
          <Image
            src={heroImage}
            alt={`TODO: replace with brand photography — ${title} collection`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[--color-walnut]/30" />
          <div className="absolute inset-0 flex items-end">
            <Container className="pb-10 md:pb-14">
              <h1 className="type-h1 text-[--color-ivory]">{title}</h1>
            </Container>
          </div>
        </div>

        {/* ── Collection body ──────────────────────────── */}
        <Container className="py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 type-small text-[--color-muted] mb-10">
            <Link href="/" className="hover:text-[--color-sage] transition-colors duration-[400ms]">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[--color-sage] transition-colors duration-[400ms]">Shop</Link>
            <span>/</span>
            <span className="text-[--color-walnut]">{title}</span>
          </nav>

          {/* Description + sort */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[--color-line]">
            <div>
              <Eyebrow className="mb-3">{sorted.length} {sorted.length === 1 ? "piece" : "pieces"}</Eyebrow>
              <p className="type-body text-[--color-walnut-soft] max-w-md">{description}</p>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3 shrink-0">
              <label htmlFor="sort" className="type-small text-[--color-muted]">Sort</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="type-small text-[--color-walnut] bg-transparent border-b border-[--color-line] pb-1 pr-6 focus:outline-none focus:border-[--color-walnut] transition-colors duration-[400ms] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </div>
          </div>

          {/* Product grid */}
          {sorted.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {sorted.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center">
              <p className="type-h3 text-[--color-walnut] italic">
                &ldquo;The edit is small by design. More soon.&rdquo;
              </p>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
