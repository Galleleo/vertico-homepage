import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/site-data";
import "./globals.css";

const SITE_URL = "https://www.vertico-spezialtechnik.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: COMPANY.name,
  description:
    "Windenergie & Rotorblattservice, Baumfällung & Spezialfällung sowie Maschinen- & Gerätevermietung aus Hagen im Bremischen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: COMPANY.name,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: COMPANY.name,
  url: SITE_URL,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.street,
    postalCode: COMPANY.zip,
    addressLocality: COMPANY.city,
    addressCountry: "DE",
  },
  areaServed: "DE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="pt-20 lg:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
