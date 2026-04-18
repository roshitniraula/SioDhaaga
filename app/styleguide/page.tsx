import { Button, Container, Eyebrow } from "@/components/ui";

const colors = [
  { name: "Ivory", var: "--color-ivory", hex: "#F5F1EA", label: "Primary background" },
  { name: "Bone", var: "--color-bone", hex: "#EDE6DA", label: "Secondary surface / cards" },
  { name: "Walnut", var: "--color-walnut", hex: "#3D2E22", label: "Primary text" },
  { name: "Walnut Soft", var: "--color-walnut-soft", hex: "#5A463A", label: "Secondary text" },
  { name: "Sage", var: "--color-sage", hex: "#8A9282", label: "Accent — links / hover" },
  { name: "Sage Deep", var: "--color-sage-deep", hex: "#6B7463", label: "Accent hover" },
  { name: "Line", var: "--color-line", hex: "#E0D8CA", label: "Hairline borders" },
  { name: "Muted", var: "--color-muted", hex: "#9A8F80", label: "Captions / meta" },
  { name: "Error", var: "--color-error", hex: "#9B4A3E", label: "Form errors" },
  { name: "Success", var: "--color-success", hex: "#6B7463", label: "Success state" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-16 border-b border-[--color-line]">
      <h2 className="type-eyebrow text-[--color-muted] mb-10">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <main className="min-h-screen" style={{ background: `linear-gradient(135deg, var(--color-bone) 0%, var(--color-line) 100%)` }}>
      <div className="bg-[--color-walnut] text-[--color-ivory] py-4">
        <Container>
          <p className="type-small">SioDhaga — Design System</p>
        </Container>
      </div>

      <Container className="py-16">

        {/* ── Colors ─────────────────────────────────────────────── */}
        <Section title="Color Palette">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {colors.map((c) => (
              <div key={c.var}>
                <div
                  className="h-20 rounded-sm border border-[--color-line] mb-3"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="type-h4 text-sm font-medium text-[--color-walnut]">{c.name}</p>
                <p className="type-small text-[--color-muted] mt-0.5">{c.hex}</p>
                <p className="type-small text-[--color-muted]">{c.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Typography ─────────────────────────────────────────── */}
        <Section title="Typography Scale">
          <div className="space-y-12">

            <div className="flex items-baseline gap-8 flex-wrap">
              <div className="w-32 shrink-0">
                <p className="type-small text-[--color-muted]">H1 — Display</p>
                <p className="type-small text-[--color-muted]">Cormorant 300</p>
                <p className="type-small text-[--color-muted]">64px / 1.1</p>
              </div>
              <h1 className="type-h1 text-[--color-walnut]">A thread of honest luxury.</h1>
            </div>

            <div className="flex items-baseline gap-8 flex-wrap">
              <div className="w-32 shrink-0">
                <p className="type-small text-[--color-muted]">H2</p>
                <p className="type-small text-[--color-muted]">Cormorant 400</p>
                <p className="type-small text-[--color-muted]">44px / 1.15</p>
              </div>
              <h2 className="type-h2 text-[--color-walnut]">The Edit</h2>
            </div>

            <div className="flex items-baseline gap-8 flex-wrap">
              <div className="w-32 shrink-0">
                <p className="type-small text-[--color-muted]">H3</p>
                <p className="type-small text-[--color-muted]">Cormorant 400</p>
                <p className="type-small text-[--color-muted]">28px / 1.3</p>
              </div>
              <h3 className="type-h3 text-[--color-walnut]">Fabric, not markup.</h3>
            </div>

            <div className="flex items-baseline gap-8 flex-wrap">
              <div className="w-32 shrink-0">
                <p className="type-small text-[--color-muted]">H4</p>
                <p className="type-small text-[--color-muted]">Inter 500</p>
                <p className="type-small text-[--color-muted]">20px / 1.4</p>
              </div>
              <h4 className="type-h4 text-[--color-walnut]">Small runs, made slowly.</h4>
            </div>

            <div className="flex items-baseline gap-8 flex-wrap">
              <div className="w-32 shrink-0">
                <p className="type-small text-[--color-muted]">Body</p>
                <p className="type-small text-[--color-muted]">Inter 400</p>
                <p className="type-small text-[--color-muted]">16px / 1.6</p>
              </div>
              <p className="type-body text-[--color-walnut] max-w-xl">
                We produce in small batches, by makers we know. The result is a garment that holds
                its shape, its color, and its finish long after fast fashion has unraveled.
              </p>
            </div>

            <div className="flex items-baseline gap-8 flex-wrap">
              <div className="w-32 shrink-0">
                <p className="type-small text-[--color-muted]">Small</p>
                <p className="type-small text-[--color-muted]">Inter 400</p>
                <p className="type-small text-[--color-muted]">13px / 1.5</p>
              </div>
              <p className="type-small text-[--color-walnut-soft]">
                Made slowly, by makers we know.
              </p>
            </div>

            <div className="flex items-baseline gap-8 flex-wrap">
              <div className="w-32 shrink-0">
                <p className="type-small text-[--color-muted]">Eyebrow</p>
                <p className="type-small text-[--color-muted]">Inter 500</p>
                <p className="type-small text-[--color-muted]">11px / 0.15em</p>
              </div>
              <Eyebrow>New this season</Eyebrow>
            </div>

          </div>
        </Section>

        {/* ── Buttons ────────────────────────────────────────────── */}
        <Section title="Buttons">
          <div className="flex flex-wrap gap-8 items-center">

            <div className="space-y-2">
              <p className="type-small text-[--color-muted]">Primary — walnut filled</p>
              <div className="w-56">
                <Button variant="primary">Add to cart</Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="type-small text-[--color-muted]">Primary (disabled)</p>
              <div className="w-56">
                <Button variant="primary" disabled>Sold out</Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="type-small text-[--color-muted]">Text — underline on hover</p>
              <Button variant="text" href="#">Shop the collection →</Button>
            </div>

          </div>
        </Section>

        {/* ── Eyebrow ────────────────────────────────────────────── */}
        <Section title="Eyebrow / Section Labels">
          <div className="space-y-4">
            <Eyebrow>The edit</Eyebrow>
            <Eyebrow>New this season</Eyebrow>
            <Eyebrow>How we price</Eyebrow>
            <Eyebrow>Journal</Eyebrow>
          </div>
        </Section>

        {/* ── Spacing ────────────────────────────────────────────── */}
        <Section title="Spacing Scale (4px base unit)">
          <div className="space-y-3">
            {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32].map((step) => (
              <div key={step} className="flex items-center gap-4">
                <p className="type-small text-[--color-muted] w-16">×{step} = {step * 4}px</p>
                <div
                  className="h-4 bg-[--color-sage] rounded-[1px]"
                  style={{ width: `${step * 4}px` }}
                />
              </div>
            ))}
          </div>
        </Section>

        {/* ── Container demo ─────────────────────────────────────── */}
        <Section title="Container (max 1440px / px-5 md:px-12 xl:px-24)">
          <div className="border border-dashed border-[--color-sage] p-4">
            <p className="type-small text-[--color-muted]">
              This text lives inside a Container — max-width 1440px, 20px padding mobile,
              48px tablet, 96px desktop.
            </p>
          </div>
        </Section>

      </Container>
    </main>
  );
}
