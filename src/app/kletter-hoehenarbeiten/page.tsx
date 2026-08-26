import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";

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
          src="/images/windkraft-seilzugang-2.jpg"
          alt="Vollständige Windkraftanlage mit Turm und Rotorblatt vor klarem blauem Himmel, ein Seilzugangstechniker seilt sich nahe der Rotorblattspitze ab"
          fill
          sizes="(min-width: 768px) 1152px, 100vw"
          className="object-cover rounded-[var(--radius-sharp)]"
        />
      </div>

      <ul className="font-body list-disc list-inside mb-12 space-y-1">
        <li>Allgemeine Kletter- und Höhenarbeiten in Seilzugangstechnik</li>
        <li>Wartung und Inspektion von Windkraftanlagen (Seilzugang an Rotorblatt und Turm)</li>
        <li>Rotorblatt-Reparatur</li>
        <li>Arbeiten an schwer zugänglichen Bauwerken</li>
      </ul>

      <CtaButton href="/kontakt">Höhenarbeiten anfragen</CtaButton>
    </div>
  );
}
