import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/CartDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SioDhaga — A thread of honest luxury.",
    template: "%s | SioDhaga",
  },
  description:
    "Ready-to-wear fusion garments, made with luxury-grade fabrics and finishing, priced without the retail markup.",
  openGraph: {
    siteName: "SioDhaga",
    type: "website",
    locale: "en_US",
  },
  // TODO: replace with brand favicon once brand assets are ready
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        {/* TODO: add GA4 or Plausible analytics script here */}
      </body>
    </html>
  );
}
