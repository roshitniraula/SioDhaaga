"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "./ui";

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

const navLinks = [
  { label: "Women", href: "/shop/women" },
  { label: "Men", href: "/shop/men" },
  { label: "Hoodies", href: "/shop/hoodies" },
  { label: "Denim", href: "/shop/denim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = scrolled
    ? "bg-[--color-ivory] border-b border-[--color-line]"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${headerBg}`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Mobile: hamburger left */}
            <button
              className="md:hidden text-[--color-walnut] -ml-1 p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu />
            </button>

            {/* Wordmark — center on mobile, left on desktop */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 font-[family-name:var(--font-cormorant)] text-[22px] tracking-[-0.01em] font-normal text-[--color-walnut] hover:text-[--color-walnut-soft] transition-colors duration-[400ms]"
            >
              SioDhaga
            </Link>

            {/* Center nav — desktop only */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="type-small text-[--color-walnut] hover:text-[--color-sage] transition-colors duration-[400ms]"
                >
                  {link.label}
                </Link>
              ))}
              <span className="type-small text-[--color-muted] cursor-default select-none">
                Journal
              </span>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4 text-[--color-walnut]">
              <button aria-label="Search" className="hidden md:flex hover:text-[--color-sage] transition-colors duration-[400ms]">
                <IconSearch />
              </button>
              <button aria-label="Account" className="hidden md:flex hover:text-[--color-sage] transition-colors duration-[400ms]">
                <IconAccount />
              </button>
              <Link href="/cart" aria-label="Cart" className="hover:text-[--color-sage] transition-colors duration-[400ms]">
                <IconCart count={0} />
              </Link>
            </div>

          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[--color-walnut]/40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div className="absolute inset-y-0 left-0 w-4/5 max-w-xs bg-[--color-ivory] flex flex-col px-8 py-10">
            <button
              className="self-end text-[--color-walnut] mb-10 -mr-2 p-1"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <IconClose />
            </button>
            <nav className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="type-h3 text-[--color-walnut] hover:text-[--color-sage] transition-colors duration-[400ms]"
                >
                  {link.label}
                </Link>
              ))}
              <span className="type-h3 text-[--color-muted] cursor-default">
                Journal
              </span>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
