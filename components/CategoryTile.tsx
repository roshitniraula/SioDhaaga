import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/categories";

export function CategoryTile({ name, slug, image, imageAlt }: Category) {
  return (
    <Link
      href={`/shop/${slug}`}
      className="group relative overflow-hidden aspect-[3/4] block rounded-[2px]"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      {/* Gradient overlay — bottom-heavy */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E22]/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <h3 className="type-h2 text-[--color-ivory]">{name}</h3>
      </div>
    </Link>
  );
}
