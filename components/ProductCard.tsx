import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ name, price, handle, image, imageAlt, hoverImage, fabric }: Product) {
  return (
    <Link href={`/products/${handle}`} className="group block">
      {/* Image container with hover cross-fade */}
      <div className="relative overflow-hidden aspect-[3/4] rounded-[2px] bg-[--color-bone] mb-4">
        {/* Primary image */}
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Hover image */}
        <Image
          src={hoverImage}
          alt={imageAlt}
          fill
          className="object-cover opacity-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          aria-hidden="true"
        />
      </div>
      {/* Info */}
      <div className="space-y-1">
        <p className="type-body text-[--color-walnut]">{name}</p>
        <p className="type-small text-[--color-muted]">{fabric}</p>
        <p className="type-body text-[--color-walnut-soft]">${price}</p>
      </div>
    </Link>
  );
}
