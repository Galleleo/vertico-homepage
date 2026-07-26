"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-auto" tone="dark" />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm text-ink hover:text-primary border-b border-transparent hover:border-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center gap-1.5 h-10 w-10"
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="md:hidden fixed inset-0 top-16 bg-surface flex flex-col items-center gap-6 pt-12"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading text-2xl text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
