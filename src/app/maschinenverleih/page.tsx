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
