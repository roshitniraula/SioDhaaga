import Link from "next/link";
import { Container } from "./ui";
import { NewsletterForm } from "./NewsletterForm";

const shopLinks = [
  { label: "Women", href: "/shop/women" },
  { label: "Men", href: "/shop/men" },
  { label: "Hoodies", href: "/shop/hoodies" },
  { label: "Denim", href: "/shop/denim" },
  { label: "Everything", href: "/shop" },
];

const aboutLinks = [
  { label: "Our story", href: "/about" },
  { label: "How we price", href: "/how-we-price" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

const helpLinks = [
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Size guide", href: "/size-guide" },
  { label: "FAQ", href: "/faq" },
];

function FooterCol({ heading, links }: { heading: string; links: typeof shopLinks }) {
  return (
    <div>
      <p className="type-eyebrow text-[--color-muted] mb-5">{heading}</p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="type-small text-[--color-walnut-soft] hover:text-[--color-sage] transition-colors duration-[400ms]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="9" cy="9" r="3.25" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="13.25" cy="4.75" r="0.75" fill="currentColor" />
    </svg>
  );
}

function IconPinterest() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M7 14c.5-1.5 1-3 1-4.5 0-.5-.1-1-.1-1.5.3-.8 1.1-1 1.5-.4.5.7.2 2-.3 2.8-.3.5-.1 1 .5 1.1 1.2.2 2-1.2 2-2.5 0-2-1.5-3-3-3-2 0-3 1.5-3 3 0 .8.3 1.5.8 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[--color-line] bg-[--color-ivory]">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Shop */}
          <FooterCol heading="Shop" links={shopLinks} />
          {/* About */}
          <FooterCol heading="About" links={aboutLinks} />
          {/* Help */}
          <FooterCol heading="Help" links={helpLinks} />

          {/* Newsletter */}
          <div>
            <p className="type-eyebrow text-[--color-muted] mb-5">Stay in touch</p>
            <p className="type-small text-[--color-walnut-soft] leading-relaxed">
              Seasonal notes on fabric, craft, and what we&apos;re making next.
              No spam. Four emails a year.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[--color-line] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="type-small text-[--color-muted]">© SioDhaga 2026</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="type-small text-[--color-muted] hover:text-[--color-sage] transition-colors duration-[400ms]">
              Privacy
            </Link>
            <Link href="/terms" className="type-small text-[--color-muted] hover:text-[--color-sage] transition-colors duration-[400ms]">
              Terms
            </Link>
            <div className="flex items-center gap-3 text-[--color-muted]">
              <a href="#" aria-label="Instagram" className="hover:text-[--color-sage] transition-colors duration-[400ms]">
                <IconInstagram />
              </a>
              <a href="#" aria-label="Pinterest" className="hover:text-[--color-sage] transition-colors duration-[400ms]">
                <IconPinterest />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
