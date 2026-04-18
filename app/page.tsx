import { Container } from "@/components/ui";

export default function HomePage() {
  return (
    <main>
      <Container className="py-32 text-center">
        <p className="type-eyebrow text-[--color-muted] mb-6">Phase 1 — Foundation</p>
        <h1 className="type-h1 text-[--color-walnut] mb-6">
          A thread of honest luxury.
        </h1>
        <p className="type-body text-[--color-walnut-soft] mb-12 max-w-xl mx-auto">
          Ready-to-wear fusion garments, made with luxury-grade fabrics and finishing,
          priced without the retail markup.
        </p>
        <a
          href="/styleguide"
          className="type-small text-[--color-sage] border-b border-[--color-sage] pb-0.5 hover:text-[--color-sage-deep] hover:border-[--color-sage-deep] transition-colors duration-[400ms]"
        >
          View design system →
        </a>
      </Container>
    </main>
  );
}
