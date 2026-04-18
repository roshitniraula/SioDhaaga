"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

function Stepper({
  quantity,
  onDec,
  onInc,
}: {
  quantity: number;
  onDec: () => void;
  onInc: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDec}
        aria-label="Decrease quantity"
        className="w-7 h-7 flex items-center justify-center text-[--color-muted] hover:text-[--color-ink] transition-colors text-lg leading-none"
      >
        −
      </button>
      <span className="type-small text-[--color-ink] w-5 text-center tabular-nums">
        {quantity}
      </span>
      <button
        onClick={onInc}
        aria-label="Increase quantity"
        className="w-7 h-7 flex items-center justify-center text-[--color-muted] hover:text-[--color-ink] transition-colors text-lg leading-none"
      >
        +
      </button>
    </div>
  );
}

export function CartDrawer() {
  const { lines, isOpen, subtotal, itemCount, closeCart, removeLine, updateQuantity } =
    useCart();
  const closeRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setTimeout(() => closeRef.current?.focus(), 50);
  }, [isOpen]);

  function handleCheckout() {
    closeCart();
    router.push("/checkout");
  }

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={`fixed inset-0 z-[70] bg-[--color-ink]/40 transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 bottom-0 z-[80] w-full md:w-[420px] bg-[--color-header] flex flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[--color-line] shrink-0">
          <span className="type-eyebrow text-[--color-ink]">
            Cart {itemCount > 0 && `(${itemCount})`}
          </span>
          <button
            ref={closeRef}
            onClick={closeCart}
            aria-label="Close cart"
            className="text-[--color-muted] hover:text-[--color-ink] transition-colors p-1 -mr-1"
          >
            <IconX />
          </button>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
              <p className="type-body text-[--color-muted]">Your cart is empty.</p>
              <button
                onClick={closeCart}
                className="type-small text-[--color-walnut-soft] border-b border-[--color-line] pb-px hover:text-[--color-ink] hover:border-[--color-walnut-soft] transition-colors"
              >
                Continue shopping →
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[--color-line]">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4 px-6 py-5">
                  <div className="relative w-20 shrink-0 bg-[--color-bone] overflow-hidden" style={{ height: 100 }}>
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="type-small text-[--color-ink] font-medium leading-snug mb-0.5">
                      {line.name}
                    </p>
                    <p className="type-small text-[--color-muted] mb-0.5">{line.fabric}</p>
                    {line.size && (
                      <p className="type-small text-[--color-muted] mb-3">Size: {line.size}</p>
                    )}
                    <Stepper
                      quantity={line.quantity}
                      onDec={() => updateQuantity(line.id, line.quantity - 1)}
                      onInc={() => updateQuantity(line.id, line.quantity + 1)}
                    />
                    <button
                      onClick={() => removeLine(line.id)}
                      className="mt-2 type-small text-[--color-muted] hover:text-[--color-error] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="shrink-0 pt-px">
                    <p className="type-small text-[--color-ink] tabular-nums">
                      ${(line.price * line.quantity).toFixed(0)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-[--color-line] px-6 py-6 space-y-4 shrink-0">
            <div className="flex items-center justify-between">
              <span className="type-small text-[--color-ink]">Subtotal</span>
              <span className="type-small text-[--color-ink] font-medium tabular-nums">
                ${subtotal.toFixed(0)}
              </span>
            </div>
            <p className="type-small text-[--color-muted]">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              onClick={handleCheckout}
              className="w-full h-12 bg-[--color-ink] text-[--color-ivory] type-eyebrow tracking-[0.1em] hover:bg-[--color-walnut] transition-colors"
            >
              Checkout →
            </button>
            <div className="text-center">
              <Link
                href="/cart"
                onClick={closeCart}
                className="type-small text-[--color-muted] hover:text-[--color-ink] transition-colors"
              >
                View cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
