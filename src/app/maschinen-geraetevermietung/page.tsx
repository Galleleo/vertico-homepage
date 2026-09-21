import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";
import {
  DryerIcon,
  CompressorIcon,
  PlateCompactorIcon,
  ChipperIcon,
  TrailerIcon,
  ScaffoldIcon,
} from "@/components/icons/MachineIcons";

export const metadata = buildMetadata({
  title: "Maschinen- & Gerätevermietung",
  description:
    "Bautrockner mieten, Häcksler mieten, Anhänger mieten und Fassadengerüst mieten – Maschinen- und Gerätevermietung für Gewerbe und Privatkunden in Hagen im Bremischen.",
  path: "/maschinen-geraetevermietung",
});

const CATEGORIES = [
  {
    Icon: DryerIcon,
    name: "Bautrockner / Trocknungstechnik",
    exampleImage: "/images/mietpark-bautrockner-beispiel.png",
  },
  { Icon: ChipperIcon, name: "Häcksler" },
  {
    Icon: TrailerIcon,
    name: "Anhänger",
    exampleImage: "/images/mietpark-anhaenger-beispiel.png",
  },
  {
    Icon: ScaffoldIcon,
    name: "Fassadengerüst bis ca. 100 m²",
    exampleImage: "/images/mietpark-fassadengeruest-beispiel.png",
  },
  { Icon: CompressorIcon, name: "Kompressoren" },
  { Icon: PlateCompactorIcon, name: "Rüttelplatten / Verdichtungstechnik" },
];

export default function MaschinenGeraetevermietungPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-2">Maschinen- & Gerätevermietung</h1>
      <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-4">
        Technik, die Sie brauchen – flexibel und unkompliziert gemietet.
      </p>
      <p className="font-body max-w-2xl mb-8">
        VERTICO erweitert sein Leistungsspektrum um die Vermietung ausgewählter Maschinen,
        Geräte und Baustellentechnik. Unser Mietangebot richtet sich an Gewerbekunden ebenso
        wie an private Anwender und wird kontinuierlich erweitert.
      </p>

      <p className="font-body bg-surface-alt border-l-2 border-primary px-4 py-3 mb-12 max-w-2xl">
        Unser Mietpark befindet sich derzeit im Aufbau. Verfügbarkeit und Mietkonditionen
        erhalten Sie auf Anfrage.
      </p>

      <h2 className="text-2xl mb-6">Mietangebot</h2>
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-4">
        {CATEGORIES.map(({ Icon, name, exampleImage }) => (
          <li key={name} className="border border-border rounded-[var(--radius-sharp)] p-5">
            {exampleImage ? (
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0 rounded-[var(--radius-sharp)] overflow-hidden bg-surface-alt">
                  <Image src={exampleImage} alt="" fill sizes="56px" className="object-contain" />
                </div>
                <div>
                  <span className="font-body text-sm">{name}</span>
                  <p className="font-body text-xs text-ink/50">Beispielabbildung</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Icon className="h-9 w-9 text-primary shrink-0" />
                <span className="font-body text-sm">{name}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
      <p className="font-body text-sm text-ink/70 mb-16">
        Weitere Maschinen und Geräte im Aufbau.
      </p>

      <h2 className="text-2xl mb-2">Einfach. Flexibel. Persönlich.</h2>
      <p className="font-body max-w-2xl mb-16">
        Kurze Abstimmungswege, transparente Mietbedingungen und persönliche Ansprechpartner –
        passend zum jeweiligen Projekt und tatsächlichen Bedarf.
      </p>

      <div className="bg-surface-alt -mx-4 px-4 py-16 rounded-[var(--radius-sharp)] flex flex-col items-start gap-4">
        <h2 className="text-2xl">Sie benötigen eine Maschine oder ein Gerät?</h2>
        <p className="font-body max-w-xl">
          Fragen Sie die aktuelle Verfügbarkeit und die entsprechenden Mietkonditionen direkt
          bei uns an.
        </p>
        <CtaButton href="/kontakt">Verfügbarkeit anfragen</CtaButton>
      </div>
    </div>
  );
}
