"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { lines, subtotal, removeLine, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="pt-24 pb-32 min-h-screen">
        <Container>
          <h1 className="type-h1 text-[--color-walnut] mb-12">Cart</h1>

          {lines.length === 0 ? (
            <div className="py-32 flex flex-col items-center gap-8 text-center">
              <p className="type-body text-[--color-muted]">Your cart is empty.</p>
              <div className="flex gap-6">
                <Link
                  href="/shop/women"
                  className="type-eyebrow text-[11px] tracking-[0.1em] text-[--color-walnut] border-b border-[--color-line] pb-px hover:border-[--color-walnut] transition-colors"
                >
                  Shop Women
                </Link>
                <Link
                  href="/shop/men"
                  className="type-eyebrow text-[11px] tracking-[0.1em] text-[--color-walnut] border-b border-[--color-line] pb-px hover:border-[--color-walnut] transition-colors"
                >
                  Shop Men
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
              {/* Line items */}
              <div>
                <ul className="divide-y divide-[--color-line]">
                  {lines.map((line) => (
                    <li key={line.id} className="flex gap-6 py-8">
                      <div
                        className="relative shrink-0 bg-[--color-bone] overflow-hidden"
                        style={{ width: 120, height: 150 }}
                      >
                        <Image
                          src={line.image}
                          alt={line.name}
                          fill
                          className="object-cover"
                          sizes="120px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/products/${line.productId}`}
                          className="type-body text-[--color-ink] font-medium hover:text-[--color-sage] transition-colors"
                        >
                          {line.name}
                        </Link>
                        <p className="type-small text-[--color-muted] mt-1">{line.fabric}</p>
                        {line.size && (
                          <p className="type-small text-[--color-muted]">Size: {line.size}</p>
                        )}
                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-[--color-muted] hover:text-[--color-ink] transition-colors text-lg"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="type-small text-[--color-ink] w-6 text-center tabular-nums">
                            {line.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-[--color-muted] hover:text-[--color-ink] transition-colors text-lg"
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeLine(line.id)}
                          className="mt-3 type-small text-[--color-muted] hover:text-[--color-error] transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="shrink-0 pt-1">
                        <p className="type-body text-[--color-ink] tabular-nums">
                          ${(line.price * line.quantity).toFixed(0)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={clearCart}
                  className="mt-4 type-small text-[--color-muted] hover:text-[--color-error] transition-colors"
                >
                  Clear cart
                </button>
              </div>

              {/* Summary */}
              <div className="lg:sticky lg:top-28 h-fit">
                <div className="bg-[--color-header] border border-[--color-line] p-8 space-y-5">
                  <h2 className="type-h4 text-[--color-walnut]">Summary</h2>
                  <div className="space-y-3 pb-5 border-b border-[--color-line]">
                    <div className="flex justify-between">
                      <span className="type-small text-[--color-walnut-soft]">Subtotal</span>
                      <span className="type-small text-[--color-ink] tabular-nums">
                        ${subtotal.toFixed(0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="type-small text-[--color-muted]">Shipping</span>
                      <span className="type-small text-[--color-muted]">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="type-small text-[--color-muted]">Taxes</span>
                      <span className="type-small text-[--color-muted]">Calculated at checkout</span>
                    </div>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="type-small text-[--color-ink] font-medium">Estimated total</span>
                    <span className="type-small text-[--color-ink] font-medium tabular-nums">
                      ${subtotal.toFixed(0)}
                    </span>
                  </div>
                  <button
                    onClick={() => router.push("/checkout")}
                    className="w-full h-12 bg-[--color-ink] text-[--color-ivory] type-eyebrow tracking-[0.1em] hover:bg-[--color-walnut] transition-colors mt-2"
                  >
                    Checkout →
                  </button>
                  <p className="type-small text-[--color-muted] text-center">
                    Free returns. One price, always.
                  </p>
                </div>
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
