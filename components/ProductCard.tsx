"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const SIZES = ["XS", "S", "M", "L", "XL"];

function QuickAdd({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const { addLine } = useCart();

  function pick(size: string) {
    addLine({
      id: `${product.id}-${size}`,
      productId: product.id,
      name: product.name,
      fabric: product.fabric,
      price: product.price,
      image: product.image,
      size,
    });
    setOpen(false);
  }

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 transition-transform duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
        open
          ? "translate-y-0"
          : "translate-y-full group-hover:translate-y-0 focus-within:translate-y-0"
      }`}
    >
      {!open ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          className="w-full h-10 bg-[--color-ink] text-[--color-ivory] type-eyebrow tracking-[0.1em] hover:bg-[--color-walnut] transition-colors"
        >
          Quick add
        </button>
      ) : (
        <div className="bg-[--color-ink] px-3 pt-3 pb-2">
          <div className="flex gap-1.5 justify-center">
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={(e) => {
                  e.preventDefault();
                  pick(s);
                }}
                className="flex-1 h-9 type-eyebrow text-[10px] text-[--color-ivory] border border-[--color-ivory]/25 hover:border-[--color-ivory] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            className="w-full mt-2 type-small text-[10px] text-[--color-ivory]/50 hover:text-[--color-ivory]/80 text-center transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export function ProductCard(product: Product) {
  const { name, price, handle, image, imageAlt, hoverImage, fabric } = product;

  return (
    <Link href={`/products/${handle}`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/5] bg-[--color-bone] mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-[3px] group-hover:shadow-[0_4px_8px_rgba(0,0,0,0.06),0_16px_40px_rgba(0,0,0,0.08)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <Image
          src={hoverImage}
          alt={imageAlt}
          fill
          aria-hidden="true"
          className="object-cover opacity-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Fabric chip */}
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-[--color-ivory]/90 backdrop-blur-[2px]">
          <span className="type-eyebrow text-[10px] text-[--color-ink] tracking-[0.1em]">
            {fabric.toUpperCase()}
          </span>
        </div>
        {/* Quick add */}
        <QuickAdd product={product} />
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="type-small text-[--color-ink] font-medium">{name}</p>
        <p className="type-small tabular-nums text-[--color-muted] transition-colors duration-200 group-hover:text-[--color-ink]">
          ${price}
        </p>
      </div>
    </Link>
  );
}
