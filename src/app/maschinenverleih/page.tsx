import { buildMetadata } from "@/lib/metadata";
import { DryerIcon, CompressorIcon, PlateCompactorIcon } from "@/components/icons/MachineIcons";
import { CtaButton } from "@/components/CtaButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { COMPANY } from "@/lib/site-data";

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
      <p className="font-body max-w-2xl mb-4">
        Wir vermieten geprüfte und regelmäßig gewartete Maschinen – kurzfristig für den
        einzelnen Einsatz oder langfristig für längere Bauvorhaben. Persönliche Beratung
        gehört immer dazu.
      </p>
      <p className="font-body max-w-2xl mb-12">
        Mieten statt kaufen – flexibel und wirtschaftlich: Nicht jedes Projekt erfordert den
        Kauf teurer Geräte. Wir vermieten professionelle Kompaktmaschinen für Ihr Vorhaben
        rund um Haus, Hof und Baustelle.
      </p>

      <ImagePlaceholder
        label="Maschinenverleih in Hagen im Bremischen"
        recommended={["Maschinenfoto", "Einsatzfoto", "Detailaufnahme"]}
      />

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
      <p className="font-body text-sm text-ink mb-12">
        Weitere Kategorien auf Anfrage: Verdichtung (Rüttelplatten und Grabenstampfer),
        Gartenbau (Bodenfräsen, Vertikutierer, Hochgrasmäher und Häcksler) sowie Gerüstbau
        (Fassadengerüst für Häuser und hohe Gebäude).
      </p>

      <h2 className="text-2xl mb-4">Für wen?</h2>
      <p className="font-body max-w-2xl mb-12">
        Privatpersonen, Gewerbe, Handwerk und Galabau – jetzt die passenden Geräte in{" "}
        {COMPANY.city} anfragen.
      </p>

      <h2 className="text-2xl mb-4">Warum bei uns mieten?</h2>
      <ul className="font-body list-disc list-inside mb-4 space-y-1">
        <li>Geprüft & gewartet</li>
        <li>Kurz- und langfristige Miete</li>
        <li>Persönliche Beratung</li>
      </ul>
      <p className="font-body text-sm text-ink mb-12">
        Bitte beachten Sie: Wir erheben 100 € Kaution in bar sowie die Vorlage eines gültigen
        Personalausweises.
      </p>

      <CtaButton href="/kontakt">Maschine anfragen</CtaButton>
    </div>
  );
}
