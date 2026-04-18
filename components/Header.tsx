"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Container } from "./ui";
import { useCart } from "@/lib/cart-context";

/* ── Icons ─────────────────────────────────────────────────────── */
function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.25" />
      <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
function IconAccount() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
function IconCart({ count }: { count: number }) {
  return (
    <span className="relative flex items-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 3h2l2.5 10h9l2-7H6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="16.5" r="1" fill="currentColor" />
        <circle cx="14" cy="16.5" r="1" fill="currentColor" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[--color-walnut] text-[--color-ivory] text-[9px] flex items-center justify-center font-medium">
          {count}
        </span>
      )}
    </span>
  );
}
function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 5l12 12M17 5 5 17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

/* ── Mega-nav data ──────────────────────────────────────────────── */
type NavColumn = { heading: string; links: { label: string; href: string }[] };
type NavDropdown = {
  columns: NavColumn[];
  editorial: { image: string; caption: string; href: string };
  utilityLinks: { label: string; href: string }[];
};
type NavItem = { label: string; href?: string; dropdown?: NavDropdown };

const navItems: NavItem[] = [
  {
    label: "Women",
    dropdown: {
      columns: [
        {
          heading: "Shop",
          links: [
            { label: "New arrivals", href: "/shop/women/new" },
            { label: "Best sellers", href: "/shop/women/best" },
            { label: "The edit", href: "/shop/women" },
            { label: "Everything", href: "/shop/women/all" },
          ],
        },
        {
          heading: "Categories",
          links: [
            { label: "Shirts & blouses", href: "/shop/women/shirts" },
            { label: "Trousers", href: "/shop/women/trousers" },
            { label: "Knitwear", href: "/shop/women/knitwear" },
            { label: "Dresses", href: "/shop/women/dresses" },
            { label: "Outerwear", href: "/shop/women/outerwear" },
            { label: "Denim", href: "/shop/women/denim" },
          ],
        },
        {
          heading: "By fabric",
          links: [
            { label: "Washed linen", href: "/shop/women/linen" },
            { label: "Cotton canvas", href: "/shop/women/cotton" },
            { label: "Merino", href: "/shop/women/merino" },
            { label: "Silk", href: "/shop/women/silk" },
          ],
        },
      ],
      editorial: {
        // TODO: replace with brand photography — The Sable Shirt
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=85",
        caption: "The Sable Shirt — Washed linen, made slowly.",
        href: "/products/sable-shirt",
      },
      utilityLinks: [
        { label: "Size guide", href: "/size-guide" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
      ],
    },
  },
  {
    label: "Men",
    dropdown: {
      columns: [
        {
          heading: "Shop",
          links: [
            { label: "New arrivals", href: "/shop/men/new" },
            { label: "Best sellers", href: "/shop/men/best" },
            { label: "The edit", href: "/shop/men" },
            { label: "Everything", href: "/shop/men/all" },
          ],
        },
        {
          heading: "Categories",
          links: [
            { label: "Shirts", href: "/shop/men/shirts" },
            { label: "Trousers", href: "/shop/men/trousers" },
            { label: "Knitwear", href: "/shop/men/knitwear" },
            { label: "Outerwear", href: "/shop/men/outerwear" },
            { label: "Tees", href: "/shop/men/tees" },
            { label: "Denim", href: "/shop/men/denim" },
          ],
        },
        {
          heading: "By fabric",
          links: [
            { label: "Washed linen", href: "/shop/men/linen" },
            { label: "Cotton canvas", href: "/shop/men/cotton" },
            { label: "Brushed cotton", href: "/shop/men/brushed-cotton" },
            { label: "Wool", href: "/shop/men/wool" },
          ],
        },
      ],
      editorial: {
        // TODO: replace with brand photography — The Drift Trouser
        image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=400&q=85",
        caption: "The Drift Trouser — Cotton canvas, cut clean.",
        href: "/products/drift-trouser",
      },
      utilityLinks: [
        { label: "Size guide", href: "/size-guide" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
      ],
    },
  },
  {
    label: "Hoodies",
    dropdown: {
      columns: [
        {
          heading: "Shop",
          links: [
            { label: "All hoodies", href: "/shop/hoodies" },
            { label: "New arrivals", href: "/shop/hoodies/new" },
            { label: "Heavyweight", href: "/shop/hoodies/heavyweight" },
            { label: "Lightweight", href: "/shop/hoodies/lightweight" },
          ],
        },
        {
          heading: "For",
          links: [
            { label: "Women's hoodies", href: "/shop/women/hoodies" },
            { label: "Men's hoodies", href: "/shop/men/hoodies" },
            { label: "Unisex", href: "/shop/hoodies/unisex" },
          ],
        },
        {
          heading: "Finish",
          links: [
            { label: "Brushed cotton", href: "/shop/hoodies/brushed-cotton" },
            { label: "French terry", href: "/shop/hoodies/french-terry" },
            { label: "Fleece-lined", href: "/shop/hoodies/fleece" },
          ],
        },
      ],
      editorial: {
        // TODO: replace with brand photography — The Still Hoodie
        image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=400&q=85",
        caption: "The Still Hoodie — Brushed cotton, built to outlast.",
        href: "/products/still-hoodie",
      },
      utilityLinks: [
        { label: "Size guide", href: "/size-guide" },
        { label: "Fabric guide", href: "/fabric-guide" },
        { label: "Returns", href: "/returns" },
      ],
    },
  },
  {
    label: "Denim",
    dropdown: {
      columns: [
        {
          heading: "Shop",
          links: [
            { label: "All denim", href: "/shop/denim" },
            { label: "New arrivals", href: "/shop/denim/new" },
            { label: "Jeans", href: "/shop/denim/jeans" },
            { label: "Jackets", href: "/shop/denim/jackets" },
          ],
        },
        {
          heading: "Fit",
          links: [
            { label: "Straight", href: "/shop/denim/straight" },
            { label: "Slim", href: "/shop/denim/slim" },
            { label: "Relaxed", href: "/shop/denim/relaxed" },
            { label: "Wide", href: "/shop/denim/wide" },
          ],
        },
        {
          heading: "Wash",
          links: [
            { label: "Raw indigo", href: "/shop/denim/raw" },
            { label: "Stone wash", href: "/shop/denim/stone" },
            { label: "Rinse", href: "/shop/denim/rinse" },
            { label: "Black", href: "/shop/denim/black" },
          ],
        },
      ],
      editorial: {
        // TODO: replace with brand photography — The Indigo Jean
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=85",
        caption: "The Indigo Jean — Selvedge, ages with you.",
        href: "/products/indigo-jean",
      },
      utilityLinks: [
        { label: "Size guide", href: "/size-guide" },
        { label: "Care guide", href: "/care-guide" },
        { label: "Returns", href: "/returns" },
      ],
    },
  },
  { label: "Journal", href: "/journal" },
];

/* ── Nav link — uppercase with animated underline ───────────────── */
function NavLink({
  item,
  active,
  onEnter,
}: {
  item: NavItem;
  active: boolean;
  onEnter: () => void;
}) {
  const base =
    "relative type-eyebrow text-[11px] text-[--color-walnut] tracking-[0.1em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--color-sage] after:absolute after:bottom-[-2px] after:left-0 after:h-px after:bg-[--color-walnut] after:transition-[width] after:duration-200 after:ease-[cubic-bezier(0.4,0,0.2,1)]";
  const underline = active ? "after:w-full" : "after:w-0 hover:after:w-full";

  if (item.dropdown) {
    return (
      <button
        onMouseEnter={onEnter}
        aria-expanded={active}
        aria-haspopup="true"
        className={`${base} ${underline}`}
      >
        {item.label}
      </button>
    );
  }
  return (
    <Link href={item.href ?? "#"} className={`${base} ${underline}`}>
      {item.label}
    </Link>
  );
}

/* ── Mega-nav dropdown panel ────────────────────────────────────── */
function MegaNavPanel({ dropdown }: { dropdown: NavDropdown }) {
  return (
    <div className="w-full bg-[--color-header] border-b border-[rgba(60,45,30,0.08)]">
      <Container className="py-10">
        <div className="flex gap-12">
          {/* Columns */}
          <div className="flex-1 grid grid-cols-3 gap-10">
            {dropdown.columns.map((col) => (
              <div key={col.heading}>
                <p className="type-eyebrow text-[--color-muted] mb-5">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="type-small text-[--color-walnut] hover:text-[--color-sage] transition-colors duration-[400ms]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Editorial card */}
          <Link
            href={dropdown.editorial.href}
            className="group relative w-48 shrink-0 overflow-hidden rounded-[2px] bg-[--color-bone]"
          >
            <Image
              src={dropdown.editorial.image}
              alt={dropdown.editorial.caption}
              fill
              className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
              sizes="192px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E22]/60 via-transparent to-transparent" />
            <p className="absolute bottom-0 left-0 right-0 p-4 type-small text-[--color-ivory] leading-snug">
              {dropdown.editorial.caption}
            </p>
          </Link>
        </div>

        {/* Utility footer row */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(60,45,30,0.06)]">
          <Link
            href="/shop"
            className="inline-flex items-center h-8 px-4 bg-[--color-ink] text-[--color-ivory] type-eyebrow text-[10px] tracking-[0.12em] hover:bg-[--color-walnut] transition-colors"
          >
            Shop new arrivals
          </Link>
          <div className="flex items-center gap-5">
            {dropdown.utilityLinks.map((u) => (
              <Link
                key={u.label}
                href={u.href}
                className="type-small text-[--color-muted] hover:text-[--color-ink] transition-colors"
              >
                {u.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

/* ── Header ─────────────────────────────────────────────────────── */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { itemCount, toggleCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function handleNavEnter(label: string) {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    openTimeoutRef.current = setTimeout(() => setActiveMenu(label), 150);
  }

  function handleNavLeave() {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    setActiveMenu(null);
  }

  const activeDropdown = navItems.find((n) => n.label === activeMenu)?.dropdown;

  const shadowClass = scrolled
    ? "shadow-[0_1px_0_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.04)]"
    : "";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-[--color-header] border-b border-[rgba(60,45,30,0.08)] transition-shadow duration-300 ${shadowClass}`}
        onMouseLeave={handleNavLeave}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Mobile: hamburger */}
            <button
              className="md:hidden text-[--color-walnut] -ml-1 p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu />
            </button>

            {/* Wordmark */}
            <Link
              href="/"
              onClick={() => setActiveMenu(null)}
              className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 font-[family-name:var(--font-cormorant)] text-[22px] tracking-[-0.01em] font-normal text-[--color-walnut] hover:text-[--color-walnut-soft] transition-colors duration-[400ms]"
            >
              SioDhaga
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  active={activeMenu === item.label}
                  onEnter={() => handleNavEnter(item.label)}
                />
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4 text-[--color-walnut]">
              <button
                aria-label="Search"
                className="hidden md:flex hover:text-[--color-sage] transition-colors duration-[400ms]"
              >
                <IconSearch />
              </button>
              <button
                aria-label="Account"
                className="hidden md:flex hover:text-[--color-sage] transition-colors duration-[400ms]"
              >
                <IconAccount />
              </button>
              <button
                aria-label="Open cart"
                onClick={toggleCart}
                className="hover:text-[--color-sage] transition-colors duration-[400ms]"
              >
                <IconCart count={itemCount} />
              </button>
            </div>
          </div>
        </Container>

        {/* Mega-nav dropdown */}
        <div
          className="hidden md:block overflow-hidden transition-[max-height] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
          style={{ maxHeight: activeDropdown ? "520px" : "0" }}
        >
          {activeDropdown && <MegaNavPanel dropdown={activeDropdown} />}
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-[--color-walnut]/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-4/5 max-w-xs bg-[--color-header] flex flex-col px-8 py-10">
            <button
              className="self-end text-[--color-walnut] mb-10 -mr-2 p-1"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <IconClose />
            </button>
            <nav className="flex flex-col gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href ?? (item.dropdown ? `#` : "#")}
                  onClick={() => setMobileOpen(false)}
                  className={`type-h3 transition-colors duration-[400ms] ${
                    item.href === "/journal"
                      ? "text-[--color-muted]"
                      : "text-[--color-walnut] hover:text-[--color-sage]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
