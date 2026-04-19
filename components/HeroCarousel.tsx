"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";

type Slide = {
  image: string;
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
  href: string;
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1800&q=90",
    eyebrow: "New season",
    headline: "A thread of honest luxury.",
    sub: "Luxury-grade garments, priced without the markup.",
    cta: "Shop the collection →",
    href: "/shop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=90",
    eyebrow: "The edit",
    headline: "Softer than it looks.",
    sub: "Washed linen, cut slowly, finished by hand.",
    cta: "Shop linen →",
    href: "/shop/women",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1800&q=90",
    eyebrow: "Denim",
    headline: "Selvedge, without the sermon.",
    sub: "Indigo that ages with you, not against you.",
    cta: "Shop denim →",
    href: "/shop/denim",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=1800&q=90",
    eyebrow: "How we price",
    headline: "One price. Always.",
    sub: "No sales. No inflated MSRPs. What it costs to make it well.",
    cta: "Read how →",
    href: "/how-we-price",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=90",
    eyebrow: "Hoodies",
    headline: "Brushed cotton, broken in.",
    sub: "Heavyweight, fleece-lined, made to outlast trends.",
    cta: "Shop hoodies →",
    href: "/shop/hoodies",
  },
];

const INTERVAL = 3000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pause when tab is hidden
  useEffect(() => {
    const onVisibility = () => setTabHidden(document.visibilityState === "hidden");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Pause when mega-nav dropdown is open
  useEffect(() => {
    const handler = (e: Event) => setNavOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    document.addEventListener("sio:nav", handler);
    return () => document.removeEventListener("sio:nav", handler);
  }, []);

  const paused = hovered || tabHidden || reducedMotion || navOpen;

  const goNext = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const goPrev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  // Auto-rotation — resets timer whenever current or paused changes
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [paused, current, goNext]);

  // Swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  const fadeDuration = reducedMotion ? "duration-0" : "duration-700";

  return (
    <section
      className="relative flex flex-col md:flex-row h-screen"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Featured collections"
    >
      {/* Accessible live region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {slides[current].headline}
      </div>

      {/* ── Image zone — left 60% ─────────────────────────── */}
      <div className="relative w-full h-[55vh] md:w-[60%] md:h-full overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity ease-[cubic-bezier(0.4,0,0.2,1)] ${fadeDuration} ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.image}
              alt={`TODO: replace with brand photography — ${slide.headline}`}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        ))}

        {/* Arrows — desktop only, hidden when nav dropdown is open */}
        <div className={`hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-5 pointer-events-none z-10 transition-opacity duration-200 ${navOpen ? "opacity-0" : "opacity-100"}`}>
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="pointer-events-auto w-10 h-10 flex items-center justify-center bg-[--color-ivory]/80 hover:bg-[--color-ivory] rounded-full transition-colors duration-[400ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-walnut]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12 6 8l4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="pointer-events-auto w-10 h-10 flex items-center justify-center bg-[--color-ivory]/80 hover:bg-[--color-ivory] rounded-full transition-colors duration-[400ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[--color-walnut]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div
          className={`absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2 z-10 transition-opacity duration-200 ${navOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          role="tablist"
          aria-label="Slides"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`transition-all duration-[400ms] rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-ivory] ${
                i === current
                  ? "w-6 h-1.5 bg-[--color-ivory]"
                  : "w-1.5 h-1.5 bg-[--color-ivory]/50 hover:bg-[--color-ivory]/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Text zone — right 40% ─────────────────────────── */}
      <div className="relative w-full flex-1 md:w-[40%] md:h-full bg-[--color-ivory] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center transition-opacity ease-[cubic-bezier(0.4,0,0.2,1)] ${fadeDuration} ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== current}
          >
            <div className="w-full px-8 py-12 md:py-0 md:px-14 xl:px-20 md:pt-24">
              <Eyebrow className="mb-8">{slide.eyebrow}</Eyebrow>
              <h1 className="type-h1 text-[--color-walnut] mb-7">{slide.headline}</h1>
              <p className="type-body text-[--color-walnut-soft] mb-10 max-w-sm leading-[1.7]">
                {slide.sub}
              </p>
              <Link
                href={slide.href}
                tabIndex={i === current ? 0 : -1}
                className="type-small text-[--color-sage] border-b border-[--color-sage] pb-0.5 hover:text-[--color-sage-deep] hover:border-[--color-sage-deep] transition-colors duration-[400ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--color-sage]"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
