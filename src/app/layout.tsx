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
