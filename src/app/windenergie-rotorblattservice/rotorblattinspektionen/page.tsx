import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";

export const metadata = buildMetadata({
  title: "Rotorblattinspektionen",
  description:
    "Rotorblattinspektion für Windenergieanlagen: WKP (Wiederkehrende Prüfungen), ZOP (Zustandsorientierte Prüfungen), Inbetriebnahmeprüfung (IBN), EGL nach Ablauf der Gewährleistung und Blitzschutzsystemprüfung Rotorblatt.",
  path: "/windenergie-rotorblattservice/rotorblattinspektionen",
});

const INSPECTIONS = [
  {
    title: "Wiederkehrende Prüfungen (WKP)",
    text: "Standsichere Zustandsbewertung gemäß geltender Grundlagen und Normen.",
  },
  {
    title: "Zustandsorientierte Prüfungen (ZOP)",
    text: "Zustandsorientierte Prüfung von Schäden und Mängeln zur Klassifizierung geeigneter Korrekturmaßnahmen.",
  },
  {
    title: "Inbetriebnahmeprüfungen (IBN)",
    text: "Zustands- und Qualitätsprüfung im Rahmen der Inbetriebnahme von Windenergieanlagen.",
  },
  {
    title: "Inspektion nach Ablauf der Gewährleistung (EGL)",
    text: "Detaillierte Schadenaufnahme und monetäre Bewertung erforderlicher Korrekturmaßnahmen zur Anspruchssicherung.",
  },
  {
    title: "Blitzschutzsystemprüfung an Rotorblättern",
    text: "Überprüfung der Ableitfähigkeit des Blitzschutzsystems mittels Durchgangswiderstandsmessung, visueller Kontrolle des Ableitsystems und Hochspannungsmessung.",
  },
];

export default function RotorblattinspektionenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-8">Rotorblattinspektionen</h1>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <div className="relative h-72 w-full">
          <Image
            src="/images/windenergie-anlage-uebersicht.jpg"
            alt="Windenergieanlage in der Totalen vor bewölktem Himmel"
            fill
            sizes="(min-width: 768px) 576px, 100vw"
            className="object-cover rounded-[var(--radius-sharp)]"
          />
        </div>
        <div className="relative h-72 w-full">
          <Image
            src="/images/windenergie-rotorblatt-innenansicht.jpg"
            alt="Blick in das Innere eines Rotorblatts bei der Inspektion"
            fill
            sizes="(min-width: 768px) 576px, 100vw"
            className="object-cover rounded-[var(--radius-sharp)]"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {INSPECTIONS.map((item) => (
          <div key={item.title}>
            <h2 className="text-xl mb-2">{item.title}</h2>
            <p className="font-body max-w-xl">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <CtaButton href="/kontakt">Projekt anfragen</CtaButton>
      </div>
    </div>
  );
}
