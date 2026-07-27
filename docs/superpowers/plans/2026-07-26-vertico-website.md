# Vertico Website Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Vertico – Bremische Spezialtechnik marketing site as a modern, static-first Next.js application with 7 pages, a shared design system, and no dependency on external font/tracking services.

**Architecture:** Next.js 15 App Router + TypeScript, statically generated pages, Tailwind CSS 4 with custom design tokens (`@theme` in `globals.css`), self-hosted fonts via `@fontsource`, a small set of shared components (Header/Footer/Logo/ServiceCard/icons), and a Server Action placeholder for the contact form.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, `@fontsource/oswald`, `@fontsource/work-sans`, Vitest + React Testing Library (for the handful of pieces with real logic: form validation, metadata helper, nav toggle).

## Global Constraints

- Design spec: `docs/superpowers/specs/2026-07-26-vertico-website-design.md` — every task must match its content, structure, and copy rules.
- Colors: `--color-ink:#1a252f`, `--color-primary:#2c3e50`, `--color-primary-hover:#1a252f`, `--color-surface:#ffffff`, `--color-surface-alt:#f4f5f6`, `--color-border:#d8dce0`, `--color-on-dark:#eef1f3`. No yellow/orange/green accents.
- Fonts: Oswald 600/700 for H1–H3, Work Sans 400/500/600 for body/labels. Self-hosted only — no runtime request to Google/Bunny.
- Exactly one `<h1>` per page. Every `next/image` needs a descriptive German `alt`.
- Company data (real, not placeholder): Vertico – Bremische Spezialtechnik, Inhaberin Swantje Lenz, Lehnstedter Weg 12, 27628 Hagen im Bremischen, s.lenz@vertico-spezialtechnik.de, +49 1514 0154403.
- Leistungs-Reihenfolge überall: Maschinenverleih → Baumfällung & Heckenschnitt → Kletter- & Höhenarbeiten.
- Ton: direkt, sachlich, sicherheitsbetont, kurze Sätze — kein Marketing-Bla.
- **Testing adaptation for this project:** most of this codebase is presentational JSX with no branching logic, which classic TDD doesn't fit well. Real unit tests (Vitest) are written only where there's actual logic: contact form validation, the metadata helper, and the mobile nav's open/close state. Every other task's "test" step is `npm run build` (type-check + compile) plus a manual visual check; the final task does a full browser walkthrough of all 7 pages.
- Source images live in `images/` (repo root, already committed as loose files) — copy (don't move) into `public/images/` with descriptive kebab-case names.

---

## Task 1: Project scaffold

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

**Interfaces:**
- Produces: a running Next.js dev server at `http://localhost:3000` rendering a placeholder home page.

- [ ] **Step 1: Scaffold the Next.js app**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack --use-npm
```
When prompted about a non-empty directory (the `images/` and `docs/` folders exist), confirm to proceed in the current directory.

- [ ] **Step 2: Verify Tailwind 4 install and remove starter boilerplate**

Open `src/app/globals.css` and replace its entire content with:

```css
@import "tailwindcss";
```

Open `src/app/page.tsx` and replace its entire content with:

```tsx
export default function Home() {
  return <main>Vertico</main>;
}
```

- [ ] **Step 3: Run the dev server and verify it boots**

Run: `npm run dev -- -p 3100 &` then `curl -s -o /dev/null -w "%{http_code}" http://localhost:3100`
Expected: `200`. Stop the server afterward (`kill %1` or Ctrl+C in the foreground case).

- [ ] **Step 4: Commit**

```bash
git add -A -- ':!images'
git commit -m "chore: scaffold Next.js app"
```

---

## Task 2: Self-hosted fonts and design tokens

**Files:**
- Modify: `package.json` (add `@fontsource/oswald`, `@fontsource/work-sans`)
- Modify: `src/app/globals.css`

**Interfaces:**
- Produces: CSS custom properties `--color-ink`, `--color-primary`, `--color-primary-hover`, `--color-surface`, `--color-surface-alt`, `--color-border`, `--color-on-dark`, and Tailwind theme fonts `font-heading` (Oswald) and `font-body` (Work Sans), usable as `text-ink`, `bg-primary`, `font-heading` etc. across all later tasks.

- [ ] **Step 1: Install self-hosted font packages**

Run: `npm install @fontsource/oswald @fontsource/work-sans`

- [ ] **Step 2: Wire fonts and tokens into globals.css**

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

@import "@fontsource/oswald/600.css";
@import "@fontsource/oswald/700.css";
@import "@fontsource/work-sans/400.css";
@import "@fontsource/work-sans/500.css";
@import "@fontsource/work-sans/600.css";

@theme {
  --color-ink: #1a252f;
  --color-primary: #2c3e50;
  --color-primary-hover: #1a252f;
  --color-surface: #ffffff;
  --color-surface-alt: #f4f5f6;
  --color-border: #d8dce0;
  --color-on-dark: #eef1f3;

  --font-heading: "Oswald", sans-serif;
  --font-body: "Work Sans", sans-serif;

  --radius-sharp: 2px;
}

body {
  background-color: var(--color-surface);
  color: var(--color-ink);
  font-family: var(--font-body);
}

h1, h2, h3 {
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 1.1;
}
```

- [ ] **Step 3: Verify the build picks up the fonts**

Run: `npm run build`
Expected: build succeeds with no errors; output mentions the home route compiled.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json src/app/globals.css
git commit -m "feat: self-hosted Oswald/Work Sans fonts and design tokens"
```

---

## Task 3: Shared site data and metadata helper (with unit test)

**Files:**
- Create: `src/lib/site-data.ts`
- Create: `src/lib/metadata.ts`
- Create: `src/lib/metadata.test.ts`
- Modify: `package.json` (add Vitest deps + `test` script)
- Create: `vitest.config.ts`

**Interfaces:**
- Produces: `COMPANY` constant (name, owner, street, zip, city, email, phone), `NAV_ITEMS: {href: string; label: string}[]`, and `buildMetadata(input: {title: string; description: string; path: string}): Metadata` — used by every page's `generateMetadata` in later tasks.

- [ ] **Step 1: Install Vitest**

Run: `npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react`

Add to `package.json` `"scripts"`: `"test": "vitest run"`.

- [ ] **Step 2: Create vitest.config.ts**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Create `vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 3: Write the failing test for buildMetadata**

Create `src/lib/metadata.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { buildMetadata } from "./metadata";

describe("buildMetadata", () => {
  it("builds a title with the site suffix and an absolute canonical path", () => {
    const meta = buildMetadata({
      title: "Maschinenverleih",
      description: "Geprüfte Maschinen zur Miete.",
      path: "/maschinenverleih",
    });

    expect(meta.title).toBe("Maschinenverleih | Vertico – Bremische Spezialtechnik");
    expect(meta.description).toBe("Geprüfte Maschinen zur Miete.");
    expect(meta.alternates?.canonical).toBe("/maschinenverleih");
  });

  it("uses the bare site name for the home page path", () => {
    const meta = buildMetadata({
      title: "Startseite",
      description: "Alles, was hoch hinaus muss.",
      path: "/",
    });

    expect(meta.title).toBe("Vertico – Bremische Spezialtechnik");
  });
});
```

- [ ] **Step 4: Run the test to verify it fails**

Run: `npx vitest run src/lib/metadata.test.ts`
Expected: FAIL — `Cannot find module './metadata'`.

- [ ] **Step 5: Create site-data.ts**

```ts
export const COMPANY = {
  name: "Vertico – Bremische Spezialtechnik",
  owner: "Swantje Lenz",
  street: "Lehnstedter Weg 12",
  zip: "27628",
  city: "Hagen im Bremischen",
  email: "s.lenz@vertico-spezialtechnik.de",
  phone: "+49 1514 0154403",
} as const;

export const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/maschinenverleih", label: "Maschinenverleih" },
  { href: "/baumfaellung-heckenschnitt", label: "Baumfällung & Heckenschnitt" },
  { href: "/kletter-hoehenarbeiten", label: "Kletter- & Höhenarbeiten" },
  { href: "/kontakt", label: "Kontakt" },
];
```

- [ ] **Step 6: Implement buildMetadata to make the test pass**

Create `src/lib/metadata.ts`:

```ts
import type { Metadata } from "next";
import { COMPANY } from "./site-data";

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const title =
    input.path === "/" ? COMPANY.name : `${input.title} | ${COMPANY.name}`;

  return {
    title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
  };
}
```

- [ ] **Step 7: Run the test to verify it passes**

Run: `npx vitest run src/lib/metadata.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vitest.config.ts vitest.setup.ts src/lib/site-data.ts src/lib/metadata.ts src/lib/metadata.test.ts
git commit -m "feat: add site data constants and metadata helper"
```

---

## Task 4: Logo component (inline SVG)

**Files:**
- Create: `src/components/Logo.tsx`

**Interfaces:**
- Produces: `<Logo className?: string; tone?: "dark" | "light" />` — a self-contained SVG recreation (tree over an inverted steel-truss triangle with an upward arrow in the trunk). `tone="dark"` renders in `--color-primary` for light backgrounds (header), `tone="light"` renders in `--color-on-dark` for dark backgrounds (footer).

- [ ] **Step 1: Create the component**

```tsx
type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
};

export function Logo({ className, tone = "dark" }: LogoProps) {
  const color = tone === "dark" ? "var(--color-primary)" : "var(--color-on-dark)";

  return (
    <svg
      viewBox="0 0 120 150"
      role="img"
      aria-label="Vertico Logo: Baum über umgedrehtem Stahlfachwerk-Dreieck mit Pfeil nach oben"
      className={className}
      fill={color}
    >
      <path d="M60 8c-14 0-24 10-24 21 0 3 1 6 2 8-8 1-15 7-15 15 0 6 4 11 10 13-3 3-5 7-5 11 0 9 8 15 18 15h28c10 0 18-6 18-15 0-4-2-8-5-11 6-2 10-7 10-13 0-8-7-14-15-15 1-2 2-5 2-8 0-11-10-21-24-21z" />
      <rect x="55" y="60" width="10" height="30" />
      <path d="M60 82l-6 10h4v18h4V92h4z" fill="var(--color-surface)" />
      <path
        d="M20 60 L60 145 L100 60 L82 60 L60 100 L38 60 Z"
        fill="none"
        stroke={color}
        strokeWidth="4"
      />
      <line x1="42" y1="64" x2="58" y2="94" stroke={color} strokeWidth="3" />
      <line x1="78" y1="64" x2="62" y2="94" stroke={color} strokeWidth="3" />
    </svg>
  );
}
```

- [ ] **Step 2: Verify it type-checks and renders**

Temporarily render `<Logo />` in `src/app/page.tsx`, run `npm run build`, confirm no TypeScript/ESLint errors, then revert `page.tsx` to its Task 1 placeholder content (Task 11 will build the real home page).

- [ ] **Step 3: Commit**

```bash
git add src/components/Logo.tsx
git commit -m "feat: add inline SVG logo component"
```

---

## Task 5: Header with mobile nav (with toggle test)

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Header.test.tsx`

**Interfaces:**
- Consumes: `Logo` from `@/components/Logo`, `NAV_ITEMS` from `@/lib/site-data`.
- Produces: `<Header />` (client component), fixed top nav with logo linking to `/`, desktop links from `NAV_ITEMS`, and a hamburger button (`aria-expanded`, `aria-controls="mobile-nav"`) that toggles a full-screen overlay `<nav id="mobile-nav">` — never wraps on narrow screens.

- [ ] **Step 1: Write the failing test**

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

describe("Header", () => {
  it("toggles the mobile nav open and closed", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const button = screen.getByRole("button", { name: /menü/i });
    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: /mobile/i })).toBeVisible();

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/Header.test.tsx`
Expected: FAIL — `Cannot find module './Header'`.

- [ ] **Step 3: Implement Header**

```tsx
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/Header.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/Header.test.tsx
git commit -m "feat: add header with mobile nav toggle"
```

---

## Task 6: Footer

**Files:**
- Create: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `Logo`, `NAV_ITEMS`, `COMPANY` from `@/lib/site-data`.
- Produces: `<Footer />` — dark surface (`bg-ink`), light logo, address, nav links, Datenschutz/Impressum links.

- [ ] **Step 1: Implement Footer**

```tsx
import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_ITEMS, COMPANY } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-on-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Logo className="h-12 w-auto" tone="light" />
          <p className="mt-4 font-body text-sm">
            {COMPANY.street}
            <br />
            {COMPANY.zip} {COMPANY.city}
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="font-body text-sm hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Rechtliches" className="flex flex-col gap-2">
          <Link href="/datenschutz" className="font-body text-sm hover:underline">
            Datenschutzerklärung
          </Link>
          <Link href="/impressum" className="font-body text-sm hover:underline">
            Impressum
          </Link>
        </nav>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds (Footer is not yet wired into the layout, but must type-check standalone — temporarily import it in `src/app/page.tsx` alongside `Logo` from Task 4 to confirm, then revert).

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add footer component"
```

---

## Task 7: Root layout wiring

**Files:**
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `Header`, `Footer` from `@/components`, `buildMetadata` from `@/lib/metadata`.
- Produces: global `<html lang="de">` shell used by every page; exports root `metadata` via `buildMetadata`.

- [ ] **Step 1: Implement the root layout**

```tsx
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Startseite",
  description:
    "Vertico – Bremische Spezialtechnik: Maschinenverleih, Baumfällung & Heckenschnitt sowie Kletter- und Höhenarbeiten aus Hagen im Bremischen.",
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds; home route renders Header + placeholder main + Footer.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: wire header and footer into root layout"
```

---

## Task 8: Copy and rename image assets

**Files:**
- Create: `public/images/hero-banner.jpg`, `public/images/baumfaellung-winter-1.jpg`, `public/images/baumfaellung-winter-2.jpg`, `public/images/windkraft-seilzugang-1.jpg`, `public/images/logo-referenz.png`

**Interfaces:**
- Produces: these five files under `public/images/`, consumed by Tasks 11, 13, and 14 as `next/image` `src="/images/<name>"`.

- [ ] **Step 1: Copy the source files with descriptive names**

Run (from repo root; source files already exist under `images/`, do not delete them):

```bash
mkdir -p public/images
cp "images/WhatsApp Image 2026-07-11 at 10.27.56.jpeg" public/images/hero-banner.jpg
cp "images/WhatsApp Image 2026-07-11 at 10.32.40 (5).jpeg" public/images/baumfaellung-winter-1.jpg
cp "images/WhatsApp Image 2026-07-11 at 10.32.41.jpeg" public/images/baumfaellung-winter-2.jpg
cp "images/WhatsApp Image 2026-07-11 at 10.32.42.jpeg" public/images/windkraft-seilzugang-1.jpg
cp "images/header_logo_700x280.png" public/images/logo-referenz.png
```

- [ ] **Step 2: Verify the files exist and are non-empty**

Run: `ls -la public/images/`
Expected: 5 files listed, each with a non-zero size matching the corresponding source file in `images/`.

- [ ] **Step 3: Commit**

```bash
git add public/images
git commit -m "chore: add copied and renamed image assets"
```

---

## Task 9: ServiceCard component

**Files:**
- Create: `src/components/ServiceCard.tsx`

**Interfaces:**
- Produces: `<ServiceCard href title description media />` where `media` is either `{ type: "image"; src: string; alt: string }` or `{ type: "icon"; icon: React.ReactNode }` (used for Maschinenverleih on the homepage, since no product photos exist yet) — used by the homepage (Task 11) for the three Leistungs-Teaser tiles.

- [ ] **Step 1: Implement ServiceCard**

```tsx
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "icon"; icon: ReactNode };

type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  media: Media;
};

export function ServiceCard({ href, title, description, media }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col border border-border rounded-[var(--radius-sharp)] overflow-hidden"
    >
      <div className="relative h-48 w-full bg-surface-alt flex items-center justify-center">
        {media.type === "image" ? (
          <Image src={media.src} alt={media.alt} fill className="object-cover" />
        ) : (
          <div className="text-primary h-20 w-20">{media.icon}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-6 border-t-2 border-transparent group-hover:border-primary transition-colors">
        <h3 className="text-xl">{title}</h3>
        <p className="font-body text-sm text-ink">{description}</p>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds (component is exercised directly once Task 11 uses it; until then confirm via a temporary render in `page.tsx` + revert, same pattern as Task 4/6).

- [ ] **Step 3: Commit**

```bash
git add src/components/ServiceCard.tsx
git commit -m "feat: add ServiceCard component"
```

---

## Task 10: Machine icon components

**Files:**
- Create: `src/components/icons/MachineIcons.tsx`

**Interfaces:**
- Produces: `DryerIcon`, `CompressorIcon`, `PlateCompactorIcon` — each `(props: { className?: string }) => JSX.Element`, simple line-art SVGs in `currentColor`, used by Task 12's Geräteliste.

- [ ] **Step 1: Implement the three icons**

```tsx
type IconProps = { className?: string };

export function DryerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="1" />
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="4" />
      <line x1="12" y1="16" x2="16" y2="16" />
    </svg>
  );
}

export function CompressorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="8" y="20" width="28" height="14" rx="1" />
      <circle cx="14" cy="38" r="4" />
      <circle cx="30" cy="38" r="4" />
      <line x1="14" y1="20" x2="14" y2="10" />
      <line x1="26" y1="20" x2="26" y2="10" />
      <rect x="10" y="6" width="20" height="4" />
    </svg>
  );
}

export function PlateCompactorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="6" y="30" width="30" height="6" rx="1" />
      <path d="M14 30 L14 18 L32 18 L32 30" />
      <line x1="32" y1="18" x2="40" y2="12" />
      <line x1="40" y1="12" x2="40" y2="22" />
    </svg>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds (exercised in Task 12).

- [ ] **Step 3: Commit**

```bash
git add src/components/icons/MachineIcons.tsx
git commit -m "feat: add machine line-icon placeholders"
```

---

## Task 11: Homepage assembly

**Files:**
- Create: `src/components/WhyVertico.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `ServiceCard` (Task 9), `DryerIcon` (Task 10), `buildMetadata` (Task 3).
- Produces: the final home page — hero, three service teasers (Maschinenverleih → Baumfällung & Heckenschnitt → Kletter- & Höhenarbeiten), WhyVertico list, compact contact CTA. Exactly one `<h1>`.

- [ ] **Step 1: Create WhyVertico**

```tsx
const REASONS = [
  {
    title: "Nur zertifizierte Mitarbeiter",
    text: "Ausgebildete, zertifizierte Seiltechniker führen jede Kletter- und Höhenarbeit durch.",
  },
  {
    title: "Sicherheit zuerst",
    text: "Fällungen aus Seilzugangstechnik oder mit dem Steiger – nicht „wild“ gefällt.",
  },
  {
    title: "Geprüfte Maschinen",
    text: "Regelmäßig gewartete Technik, sowohl zur Vermietung als auch im eigenen Einsatz.",
  },
  {
    title: "Junges Unternehmen aus Hagen im Bremischen",
    text: "Kurze Wege, persönlicher Kontakt, direkte Absprachen.",
  },
];

export function WhyVertico() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl mb-8">Warum Vertico?</h2>
      <dl className="grid gap-8 md:grid-cols-2">
        {REASONS.map((reason) => (
          <div key={reason.title} className="border-l-2 border-primary pl-4">
            <dt className="font-heading text-lg uppercase">{reason.title}</dt>
            <dd className="font-body text-sm text-ink mt-1">{reason.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
```

- [ ] **Step 2: Assemble the home page**

Replace `src/app/page.tsx` entirely:

```tsx
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyVertico } from "@/components/WhyVertico";
import { DryerIcon } from "@/components/icons/MachineIcons";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Startseite",
  description:
    "Vertico – Bremische Spezialtechnik: Maschinenverleih, Baumfällung & Heckenschnitt sowie Kletter- und Höhenarbeiten aus Hagen im Bremischen.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[420px] w-full flex items-end">
        <Image
          src="/images/hero-banner.jpg"
          alt="Seilzugangstechniker bei der Arbeit an einer Windkraftanlage vor Hügellandschaft mit Windrädern"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-ink/50 -z-10" />
        <div className="mx-auto max-w-6xl px-4 pb-16 text-on-dark">
          <h1 className="text-4xl md:text-6xl max-w-2xl">Alles, was hoch hinaus muss.</h1>
          <p className="font-body mt-4 max-w-xl">
            {COMPANY.name} steht für Maschinenverleih, Baumfällung und Kletter- bzw.
            Höhenarbeiten aus einer Hand – sicher, geprüft und mit kurzen Wegen aus{" "}
            {COMPANY.city}.
          </p>
          <Link
            href="/kontakt"
            className="inline-block mt-6 bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-3">
        <ServiceCard
          href="/maschinenverleih"
          title="Maschinenverleih"
          description="Geprüfte, gewartete Maschinen zur kurz- und langfristigen Miete."
          media={{ type: "icon", icon: <DryerIcon className="h-full w-full" /> }}
        />
        <ServiceCard
          href="/baumfaellung-heckenschnitt"
          title="Baumfällung & Heckenschnitt"
          description="Fällung in Seilzugangstechnik oder mit dem Steiger, plus Grünpflege."
          media={{
            type: "image",
            src: "/images/baumfaellung-winter-1.jpg",
            alt: "Zwei Baumkletterer in Seilzugangstechnik bei der Kronenpflege im Winter",
          }}
        />
        <ServiceCard
          href="/kletter-hoehenarbeiten"
          title="Kletter- & Höhenarbeiten"
          description="Seilzugang an schwer zugänglichen Bauwerken, inklusive Windkraftanlagen."
          media={{
            type: "image",
            src: "/images/windkraft-seilzugang-1.jpg",
            alt: "Seilzugangstechniker bei der Wartung eines Rotorblatts an einer Windkraftanlage",
          }}
        />
      </section>

      <WhyVertico />

      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-start gap-4">
          <h2 className="text-3xl">Kontakt</h2>
          <p className="font-body max-w-xl">
            Sie haben einen Baum, ein Gerät oder eine Anlage, die hoch hinaus muss? Schreiben
            Sie uns – wir melden uns kurzfristig zurück.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors"
          >
            Zum Kontaktformular
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds; home route (`/`) listed in the output with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/WhyVertico.tsx src/app/page.tsx
git commit -m "feat: assemble homepage with hero, service teasers, and why-vertico"
```

---

## Task 12: Maschinenverleih page

**Files:**
- Create: `src/app/maschinenverleih/page.tsx`

**Interfaces:**
- Consumes: `DryerIcon`, `CompressorIcon`, `PlateCompactorIcon` (Task 10), `buildMetadata` (Task 3).
- Produces: `/maschinenverleih` route with one `<h1>`, Geräteliste, USPs, CTA.

- [ ] **Step 1: Implement the page**

```tsx
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { DryerIcon, CompressorIcon, PlateCompactorIcon } from "@/components/icons/MachineIcons";

export const metadata = buildMetadata({
  title: "Maschinenverleih",
  description:
    "Geprüfte, regelmäßig gewartete Maschinen zur kurz- und langfristigen Miete: Großraumtrockner, Kompressor, Rüttelplatte und mehr auf Anfrage.",
  path: "/maschinenverleih",
});

const MACHINES = [
  {
    Icon: DryerIcon,
    name: "Großraumtrockner",
    text: "Für Bautrocknung und nach Wasserschäden – schnelle Trocknungsleistung für größere Flächen.",
  },
  {
    Icon: CompressorIcon,
    name: "Kompressor",
    text: "Für Druckluftwerkzeuge im Baustelleneinsatz.",
  },
  {
    Icon: PlateCompactorIcon,
    name: "Rüttelplatte",
    text: "Für die Bodenverdichtung auf der Baustelle.",
  },
];

export default function MaschinenverleihPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-6">Maschinenverleih</h1>
      <p className="font-body max-w-2xl mb-12">
        Wir vermieten geprüfte und regelmäßig gewartete Maschinen – kurzfristig für den
        einzelnen Einsatz oder langfristig für längere Bauvorhaben. Persönliche Beratung
        gehört immer dazu.
      </p>

      <h2 className="text-2xl mb-6">Unsere Geräte</h2>
      <ul className="grid gap-8 md:grid-cols-3 mb-12">
        {MACHINES.map(({ Icon, name, text }) => (
          <li key={name} className="border border-border rounded-[var(--radius-sharp)] p-6">
            <Icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-lg mb-2">{name}</h3>
            <p className="font-body text-sm">{text}</p>
          </li>
        ))}
      </ul>
      {/* TODO: Fotos der Geräte ergänzen, sobald vorhanden – aktuell Linien-Icons als Platzhalter */}
      <p className="font-body text-sm text-ink mb-12">Weitere Maschinen auf Anfrage.</p>

      <h2 className="text-2xl mb-4">Warum bei uns mieten?</h2>
      <ul className="font-body list-disc list-inside mb-12 space-y-1">
        <li>Geprüft & gewartet</li>
        <li>Kurz- und langfristige Miete</li>
        <li>Persönliche Beratung</li>
      </ul>

      <Link
        href="/kontakt"
        className="inline-block bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors"
      >
        Maschine anfragen
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds; `/maschinenverleih` listed in output.

- [ ] **Step 3: Commit**

```bash
git add src/app/maschinenverleih/page.tsx
git commit -m "feat: add Maschinenverleih page"
```

---

## Task 13: Baumfällung & Heckenschnitt page

**Files:**
- Create: `src/app/baumfaellung-heckenschnitt/page.tsx`

**Interfaces:**
- Consumes: `buildMetadata` (Task 3), `public/images/baumfaellung-winter-2.jpg` (Task 8).
- Produces: `/baumfaellung-heckenschnitt` route with one `<h1>`, at least one real photo, CTA.

- [ ] **Step 1: Implement the page**

```tsx
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Baumfällung & Heckenschnitt",
  description:
    "Baumfällung bevorzugt in Seilzugangstechnik oder mit dem Steiger, dazu Heckenschnitt, Grünpflege sowie Kronensicherung und Kronenpflege.",
  path: "/baumfaellung-heckenschnitt",
});

export default function BaumfaellungPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-6">Baumfällung & Heckenschnitt</h1>
      <p className="font-body max-w-2xl mb-8">
        Wir fällen bevorzugt in Seilzugangstechnik oder mit dem Steiger – dort, wo schwere
        Technik nicht hinkommt oder ein kontrollierter Rückbau nötig ist. Kein „wildes“
        Fällen, sondern geplantes Arbeiten mit zertifizierten Seiltechnikern.
      </p>

      <div className="relative h-72 md:h-96 w-full mb-12">
        <Image
          src="/images/baumfaellung-winter-2.jpg"
          alt="Baumkletterer bei der Fällarbeit hoch oben in einer Fichte im Winter, im Hintergrund ein Wohnhaus"
          fill
          className="object-cover rounded-[var(--radius-sharp)]"
        />
      </div>

      <ul className="font-body list-disc list-inside mb-12 space-y-1">
        <li>Baumfällung in Seilzugangstechnik oder mit der Hubarbeitsbühne</li>
        <li>Heckenschnitt und Grünpflege</li>
        <li>Kronensicherung und Kronenpflege</li>
      </ul>

      <Link
        href="/kontakt"
        className="inline-block bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors"
      >
        Baumarbeiten anfragen
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds; `/baumfaellung-heckenschnitt` listed in output.

- [ ] **Step 3: Commit**

```bash
git add src/app/baumfaellung-heckenschnitt/page.tsx
git commit -m "feat: add Baumfaellung und Heckenschnitt page"
```

---

## Task 14: Kletter- & Höhenarbeiten page

**Files:**
- Create: `src/app/kletter-hoehenarbeiten/page.tsx`

**Interfaces:**
- Consumes: `buildMetadata` (Task 3), `public/images/windkraft-seilzugang-1.jpg` (Task 8).
- Produces: `/kletter-hoehenarbeiten` route with one `<h1>`, at least one real photo, Windkraft mentioned as one bullet among several (not the headline focus), CTA.

- [ ] **Step 1: Implement the page**

```tsx
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Kletter- & Höhenarbeiten",
  description:
    "Kletter- und Höhenarbeiten in Seilzugangstechnik an schwer zugänglichen Bauwerken, inklusive Wartung und Inspektion von Windkraftanlagen.",
  path: "/kletter-hoehenarbeiten",
});

export default function KletterHoehenarbeitenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-6">Kletter- & Höhenarbeiten</h1>
      <p className="font-body max-w-2xl mb-8">
        Für Bauwerke, die schwer zugänglich sind, arbeiten wir in Seilzugangstechnik –
        flexibel, sicher und ohne schweres Gerät vor Ort. Unsere Seiltechniker sind
        ausgebildet und zertifiziert.
      </p>

      <div className="relative h-72 md:h-96 w-full mb-12">
        <Image
          src="/images/windkraft-seilzugang-1.jpg"
          alt="Seilzugangstechniker bei der Wartung eines Rotorblatts an einer Windkraftanlage"
          fill
          className="object-cover rounded-[var(--radius-sharp)]"
        />
      </div>

      <ul className="font-body list-disc list-inside mb-12 space-y-1">
        <li>Allgemeine Kletter- und Höhenarbeiten in Seilzugangstechnik</li>
        <li>Wartung und Inspektion von Windkraftanlagen (Seilzugang an Rotorblatt und Turm)</li>
        <li>Arbeiten an schwer zugänglichen Bauwerken</li>
      </ul>

      <Link
        href="/kontakt"
        className="inline-block bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors"
      >
        Höhenarbeiten anfragen
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds; `/kletter-hoehenarbeiten` listed in output.

- [ ] **Step 3: Commit**

```bash
git add src/app/kletter-hoehenarbeiten/page.tsx
git commit -m "feat: add Kletter- und Hoehenarbeiten page"
```

---

## Task 15: Contact form validation logic (with unit tests)

**Files:**
- Create: `src/lib/contact-validation.ts`
- Create: `src/lib/contact-validation.test.ts`

**Interfaces:**
- Produces: `type ContactFormInput = { name: string; email: string; phone: string; message: string }`, `type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>`, `validateContactForm(input: ContactFormInput): ContactFormErrors` — used by both the client component and the server action in Task 16. An empty `ContactFormErrors` object means the input is valid.

- [ ] **Step 1: Write the failing tests**

```ts
import { describe, it, expect } from "vitest";
import { validateContactForm } from "./contact-validation";

describe("validateContactForm", () => {
  it("returns no errors for valid input with optional phone omitted", () => {
    const errors = validateContactForm({
      name: "Max Mustermann",
      email: "max@example.com",
      phone: "",
      message: "Ich benötige einen Kostenvoranschlag für eine Baumfällung.",
    });
    expect(errors).toEqual({});
  });

  it("requires a name", () => {
    const errors = validateContactForm({
      name: "",
      email: "max@example.com",
      phone: "",
      message: "Testnachricht mit ausreichend Länge.",
    });
    expect(errors.name).toBe("Bitte geben Sie Ihren Namen an.");
  });

  it("rejects an invalid email address", () => {
    const errors = validateContactForm({
      name: "Max Mustermann",
      email: "not-an-email",
      phone: "",
      message: "Testnachricht mit ausreichend Länge.",
    });
    expect(errors.email).toBe("Bitte geben Sie eine gültige E-Mail-Adresse an.");
  });

  it("requires a message of at least 10 characters", () => {
    const errors = validateContactForm({
      name: "Max Mustermann",
      email: "max@example.com",
      phone: "",
      message: "zu kurz",
    });
    expect(errors.message).toBe("Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).");
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/lib/contact-validation.test.ts`
Expected: FAIL — `Cannot find module './contact-validation'`.

- [ ] **Step 3: Implement validateContactForm**

```ts
export type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(input: ContactFormInput): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (input.name.trim().length === 0) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  }

  if (!EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }

  if (input.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).";
  }

  return errors;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run src/lib/contact-validation.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/contact-validation.ts src/lib/contact-validation.test.ts
git commit -m "feat: add contact form validation logic"
```

---

## Task 16: Contact form, server action, and Kontakt page

**Files:**
- Create: `src/app/kontakt/actions.ts`
- Create: `src/app/kontakt/ContactForm.tsx`
- Create: `src/app/kontakt/page.tsx`

**Interfaces:**
- Consumes: `validateContactForm`, `ContactFormInput`, `ContactFormErrors` (Task 15), `buildMetadata` (Task 3), `COMPANY` (Task 3).
- Produces: `/kontakt` route with one `<h1>`, working client-side form wired to a Server Action placeholder that validates and returns a success/error state (no real delivery yet).

- [ ] **Step 1: Implement the Server Action**

```ts
"use server";

import { validateContactForm, type ContactFormInput } from "@/lib/contact-validation";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors: Partial<Record<keyof ContactFormInput, string>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const input: ContactFormInput = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const errors = validateContactForm(input);

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  // TODO: echten Versand anbinden (z. B. E-Mail-Zustellung). Aktuell wird die
  // Anfrage nur validiert und nicht weitergeleitet.

  return { status: "success", errors: {} };
}
```

- [ ] **Step 2: Implement the client form**

```tsx
"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", errors: {} };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <p className="font-body border border-primary p-6 rounded-[var(--radius-sharp)]">
        Danke für Ihre Nachricht. Wir melden uns so schnell wie möglich zurück.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-lg">
      <label className="flex flex-col gap-1">
        <span className="font-body text-sm">Name</span>
        <input name="name" type="text" className="border border-border p-3 rounded-[var(--radius-sharp)]" />
        {state.errors.name && <span className="text-sm text-primary">{state.errors.name}</span>}
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-body text-sm">E-Mail</span>
        <input name="email" type="email" className="border border-border p-3 rounded-[var(--radius-sharp)]" />
        {state.errors.email && <span className="text-sm text-primary">{state.errors.email}</span>}
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-body text-sm">Telefon (optional)</span>
        <input name="phone" type="tel" className="border border-border p-3 rounded-[var(--radius-sharp)]" />
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-body text-sm">Nachricht</span>
        <textarea name="message" rows={5} className="border border-border p-3 rounded-[var(--radius-sharp)]" />
        {state.errors.message && <span className="text-sm text-primary">{state.errors.message}</span>}
      </label>

      <button
        type="submit"
        disabled={pending}
        className="bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors disabled:opacity-50"
      >
        {pending ? "Wird gesendet…" : "Nachricht senden"}
      </button>
    </form>
  );
}
```

- [ ] **Step 3: Implement the Kontakt page**

```tsx
import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site-data";
import { ContactForm } from "./ContactForm";

export const metadata = buildMetadata({
  title: "Kontakt",
  description: "Kontaktieren Sie Vertico – Bremische Spezialtechnik für Maschinenverleih, Baumarbeiten und Höhenarbeiten.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-2">
      <div>
        <h1 className="text-4xl md:text-5xl mb-6">Kontakt</h1>
        <p className="font-body mb-6">
          Rufen Sie an, schreiben Sie eine E-Mail oder nutzen Sie das Formular – wir melden
          uns kurzfristig zurück.
        </p>
        <address className="font-body not-italic space-y-1">
          <p>{COMPANY.owner}</p>
          <p>{COMPANY.street}</p>
          <p>{COMPANY.zip} {COMPANY.city}</p>
          <p>
            <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="hover:underline">
              {COMPANY.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${COMPANY.email}`} className="hover:underline">
              {COMPANY.email}
            </a>
          </p>
        </address>
      </div>
      <ContactForm />
    </div>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: succeeds; `/kontakt` listed in output as a route with a Server Action.

- [ ] **Step 5: Commit**

```bash
git add src/app/kontakt
git commit -m "feat: add Kontakt page with form and server action placeholder"
```

---

## Task 17: Datenschutzerklärung page

**Files:**
- Create: `src/app/datenschutz/page.tsx`

**Interfaces:**
- Consumes: `buildMetadata` (Task 3), `COMPANY` (Task 3).
- Produces: `/datenschutz` route with one `<h1>`, real company data, and content matching what the site actually does (self-hosted fonts, no analytics/cookies, contact form data handling).

- [ ] **Step 1: Implement the page**

```tsx
import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Vertico – Bremische Spezialtechnik.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 font-body">
      <h1 className="text-4xl mb-8">Datenschutzerklärung</h1>

      <h2 className="text-2xl mt-8 mb-3">1. Verantwortlicher</h2>
      <p>
        {COMPANY.owner}
        <br />
        {COMPANY.name}
        <br />
        {COMPANY.street}
        <br />
        {COMPANY.zip} {COMPANY.city}
        <br />
        E-Mail: {COMPANY.email}
        <br />
        Telefon: {COMPANY.phone}
      </p>

      <h2 className="text-2xl mt-8 mb-3">2. Hosting und Server-Logfiles</h2>
      <p>
        Beim Aufruf dieser Website erhebt unser Hosting-Provider automatisch technische
        Informationen (Server-Logfiles), die Ihr Browser übermittelt. Dazu gehören
        beispielsweise IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und das
        angeforderte Dokument. Diese Daten dienen ausschließlich der technischen
        Bereitstellung und Absicherung der Website und werden nicht mit anderen
        Datenquellen zusammengeführt.
      </p>

      <h2 className="text-2xl mt-8 mb-3">3. Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die von
        Ihnen angegebenen Daten (Name, E-Mail-Adresse, optional Telefonnummer, Nachricht)
        ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
        b DSGVO (vorvertragliche Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der Beantwortung von Anfragen).
      </p>

      <h2 className="text-2xl mt-8 mb-3">4. Cookies und Tracking</h2>
      <p>
        Diese Website setzt keine Cookies und keine Analyse- oder Tracking-Dienste ein.
        Es findet keine Erstellung von Nutzerprofilen statt.
      </p>

      <h2 className="text-2xl mt-8 mb-3">5. Schriftarten</h2>
      <p>
        Wir nutzen die Schriftarten Oswald und Work Sans. Diese sind lokal auf unserem
        Server eingebunden (selbst gehostet) – es findet keine Verbindung zu externen
        Anbietern wie Google Fonts statt, und es werden keine Daten an Dritte übertragen.
      </p>

      <h2 className="text-2xl mt-8 mb-3">6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
        Verarbeitung Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht gegen die
        Verarbeitung und ein Recht auf Datenübertragbarkeit. Wenden Sie sich hierzu an{" "}
        {COMPANY.email}. Außerdem steht Ihnen ein Beschwerderecht bei einer
        Datenschutzaufsichtsbehörde zu.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds; `/datenschutz` listed in output.

- [ ] **Step 3: Commit**

```bash
git add src/app/datenschutz/page.tsx
git commit -m "feat: add Datenschutzerklaerung page"
```

---

## Task 18: Impressum page

**Files:**
- Create: `src/app/impressum/page.tsx`

**Interfaces:**
- Consumes: `buildMetadata` (Task 3), `COMPANY` (Task 3).
- Produces: `/impressum` route with one `<h1>` and real company data per § 5 TMG.

- [ ] **Step 1: Implement the page**

```tsx
import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum von Vertico – Bremische Spezialtechnik.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 font-body">
      <h1 className="text-4xl mb-8">Impressum</h1>

      <h2 className="text-2xl mt-8 mb-3">Angaben gemäß § 5 TMG</h2>
      <p>
        {COMPANY.owner}
        <br />
        {COMPANY.name} (Einzelunternehmen)
        <br />
        {COMPANY.street}
        <br />
        {COMPANY.zip} {COMPANY.city}
      </p>

      <h2 className="text-2xl mt-8 mb-3">Kontakt</h2>
      <p>
        Telefon: {COMPANY.phone}
        <br />
        E-Mail: {COMPANY.email}
      </p>

      <h2 className="text-2xl mt-8 mb-3">Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        {/* TODO: USt-IdNr. ergänzen, sobald vorhanden */}
        Wird nach Erteilung ergänzt.
      </p>

      <h2 className="text-2xl mt-8 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {COMPANY.owner}
        <br />
        {COMPANY.street}, {COMPANY.zip} {COMPANY.city}
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds; `/impressum` listed in output.

- [ ] **Step 3: Commit**

```bash
git add src/app/impressum/page.tsx
git commit -m "feat: add Impressum page"
```

---

## Task 19: Final verification pass

**Files:**
- None created; this task only verifies the existing tree.

**Interfaces:**
- N/A — this is the end-to-end acceptance check for the whole plan.

- [ ] **Step 1: Run the full automated check suite**

Run: `npm run lint && npx vitest run && npm run build`
Expected: lint passes with no errors, all Vitest suites pass (Header, metadata, contact-validation), and the production build completes listing all 7 routes (`/`, `/maschinenverleih`, `/baumfaellung-heckenschnitt`, `/kletter-hoehenarbeiten`, `/kontakt`, `/datenschutz`, `/impressum`).

- [ ] **Step 2: Manual browser walkthrough**

Run: `npm run dev -- -p 3100 &`

Using the browser tool, visit each of the 7 routes on `http://localhost:3100` and confirm for each:
- Exactly one visible `<h1>`
- Header nav is present and, at a narrow viewport (375px), the hamburger menu opens a full-screen overlay without any layout overflow
- Images load (no broken `next/image` icons)
- Footer shows the real address and links to `/datenschutz` and `/impressum`

Stop the dev server afterward (`kill %1`).

- [ ] **Step 3: Confirm no stray placeholder text remains**

Run: `grep -rn "Platzhalter" src/app --include=*.tsx`
Expected: no matches outside of the two intentional TODO comments (Maschinenverleih photos, Impressum USt-IdNr.) — review any other hits and resolve them.

- [ ] **Step 4: Commit**

```bash
git add -A -- ':!images'
git commit -m "chore: final verification pass for Vertico website rebuild"
```






