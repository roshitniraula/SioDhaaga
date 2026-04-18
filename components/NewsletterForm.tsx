"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up email provider (Klaviyo, Mailchimp, etc.)
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <p className="type-small text-[--color-sage]">
        You&apos;re on the list. Four emails a year, nothing more.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mt-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 bg-transparent border-b border-[--color-line] pb-1 type-small text-[--color-walnut] placeholder:text-[--color-muted] focus:outline-none focus:border-[--color-walnut] transition-colors duration-[400ms]"
      />
      <button
        type="submit"
        className="type-small text-[--color-sage] hover:text-[--color-sage-deep] border-b border-[--color-sage] hover:border-[--color-sage-deep] pb-1 transition-colors duration-[400ms] shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
