import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vertico-spezialtechnik.de"),
  title: COMPANY.name,
  description: "Maschinenverleih, Baumfällung und Kletter- bzw. Höhenarbeiten aus Hagen im Bremischen.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: COMPANY.name,
  },
};

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
