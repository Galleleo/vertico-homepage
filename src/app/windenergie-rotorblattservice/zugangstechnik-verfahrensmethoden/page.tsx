import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";
import { DroneIcon } from "@/components/icons/ServiceIcons";

export const metadata = buildMetadata({
  title: "Zugangstechnik & Verfahrensmethoden",
  description:
    "Seilzugangstechnik und Rotorblattbefahranlage für Windenergieanlagen, ergänzt durch drohnengestützte Sichtinspektion – das passende Zugangsverfahren für jede Anlage.",
  path: "/windenergie-rotorblattservice/zugangstechnik-verfahrensmethoden",
});

export default function ZugangstechnikVerfahrensmethodenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-2">Zugangstechnik & Verfahrensmethoden</h1>
      <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-4">
        Für jede Anlage das passende Zugangsverfahren.
      </p>
      <p className="font-body max-w-2xl mb-12">
        Abhängig von Einsatzanforderung und Anlagengegebenheiten wählen wir die geeignete
        Zugangsmethode – von flexibler Seilzugangstechnik bis zum Einsatz spezialisierter
        Rotorblattbefahranlagen.
      </p>

      <div className="grid gap-12 md:grid-cols-2 mb-12">
        <div>
          <div className="relative h-64 w-full mb-4">
            <Image
              src="/images/windkraft-seilzugang-1.jpg"
              alt="Seilzugangstechniker bei der Wartung eines Rotorblatts an einer Windkraftanlage"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover rounded-[var(--radius-sharp)]"
            />
          </div>
          <h2 className="text-xl mb-2">Seilzugangstechnik</h2>
          <p className="font-body">
            Flexibler Zugang auch zu schwer erreichbaren Bereichen – mit kurzen Rüstzeiten
            und hoher Einsatzeffizienz.
          </p>
        </div>

        <div>
          <div className="relative h-64 w-full mb-4">
            <Image
              src="/images/windenergie-befahranlage-detail.jpg"
              alt="Rotorblattbefahranlage an einer Windenergieanlage im Einsatz"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover rounded-[var(--radius-sharp)]"
            />
          </div>
          <h2 className="text-xl mb-2">Rotorblattbefahranlagen</h2>
          <p className="font-body">
            Anlagenspezifische Befahrtechnik für unterschiedliche Windenergieanlagentypen –
            flexibel einsetzbar für Inspektions- und Instandsetzungsarbeiten.
          </p>
        </div>
      </div>

      <div className="max-w-xl border border-border rounded-[var(--radius-sharp)] p-6 flex gap-4 items-start">
        <DroneIcon className="h-8 w-8 shrink-0 text-primary" />
        <div>
          <h2 className="text-lg mb-2">Drohnengestützte Sichtinspektion</h2>
          <p className="font-body text-sm">
            Schnelle und flexible visuelle Schadenserfassung direkt an der Anlage.
            Drohnengestützte Aufnahmen ermöglichen eine kurzfristige Zustandsbewertung
            einschließlich fachlicher Analyse, Schadenklassifizierung und
            Handlungsempfehlung.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <CtaButton href="/kontakt">Projekt anfragen</CtaButton>
      </div>
    </div>
  );
}
