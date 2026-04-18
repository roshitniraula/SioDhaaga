"use client";

// TODO: Replace with Shopify Storefront API / Hydrogen checkout redirect.
// The cart state from CartContext should serialize into a Shopify checkout URL.

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { lines, subtotal } = useCart();

  return (
    <>
      <Header />
      <main className="pt-28 pb-32 min-h-screen">
        <Container>
          <div className="max-w-xl mx-auto">
            {/* Notice card */}
            <div className="bg-[--color-header] border border-[--color-line] p-10 text-center mb-16">
              <p className="type-eyebrow text-[--color-muted] mb-4">Coming soon</p>
              <h1 className="type-h2 text-[--color-walnut] mb-6">Checkout</h1>
              <p className="type-body text-[--color-walnut-soft] leading-relaxed">
                SioDhaga is preparing a secure checkout experience. You&apos;ll be redirected here
                automatically once it&apos;s live.
              </p>
            </div>

            {/* Cart summary */}
            {lines.length > 0 && (
              <div>
                <p className="type-eyebrow text-[--color-muted] mb-6">Your order</p>
                <ul className="divide-y divide-[--color-line] mb-8">
                  {lines.map((line) => (
                    <li key={line.id} className="flex items-center gap-4 py-4">
                      <div
                        className="relative shrink-0 bg-[--color-bone] overflow-hidden"
                        style={{ width: 56, height: 70 }}
                      >
                        <Image
                          src={line.image}
                          alt={line.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="type-small text-[--color-ink] font-medium">{line.name}</p>
                        <p className="type-small text-[--color-muted]">{line.fabric}</p>
                        {line.size && (
                          <p className="type-small text-[--color-muted]">Size: {line.size}</p>
                        )}
                        <p className="type-small text-[--color-muted]">Qty: {line.quantity}</p>
                      </div>
                      <p className="type-small text-[--color-ink] tabular-nums shrink-0">
                        ${(line.price * line.quantity).toFixed(0)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between py-4 border-t border-[--color-line]">
                  <span className="type-small text-[--color-ink] font-medium">Subtotal</span>
                  <span className="type-small text-[--color-ink] font-medium tabular-nums">
                    ${subtotal.toFixed(0)}
                  </span>
                </div>
              </div>
            )}

            <Link
              href="/cart"
              className="type-small text-[--color-muted] hover:text-[--color-ink] transition-colors"
            >
              ← Back to cart
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
