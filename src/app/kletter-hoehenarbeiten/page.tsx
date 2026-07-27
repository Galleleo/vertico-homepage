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
