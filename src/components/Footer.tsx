import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_ITEMS, COMPANY } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-on-dark">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Logo className="h-12 w-auto" tone="light" />
          <p className="mt-4 font-body text-sm font-semibold">{COMPANY.name}</p>
          <p className="font-body text-sm">
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
