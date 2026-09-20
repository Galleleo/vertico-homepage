import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";

export const metadata = buildMetadata({
  title: "Technische Gutachten & Consulting",
  description:
    "Technische Gutachten Windenergie: technisches Consulting, Schadenklassifizierung und Ursachenanalyse sowie technische Gutachtenerstellung für Rotorblätter.",
  path: "/windenergie-rotorblattservice/technische-gutachten-consulting",
});

const ITEMS = [
  {
    title: "Technisches Consulting",
    text: "Fachkundige Unterstützung bei der Zustandsbewertung von Rotorblättern sowie bei der Beurteilung von Schäden und deren Einfluss auf strukturelle Integrität und Betriebssicherheit.",
  },
  {
    title: "Schadenklassifizierung & Ursachenanalyse",
    text: "Fundierte Bewertung und Klassifizierung von Schäden und Mängeln mit modernen Analyseverfahren. Eine kontinuierliche Dokumentation schafft belastbare Anlagenhistorien und macht Schadensentwicklungen langfristig nachvollziehbar.",
  },
  {
    title: "Technische Gutachtenerstellung",
    text: "Fundierte Gutachten auf Basis langjähriger Fachexpertise, präziser Analysen und hoher Qualitätsstandards.",
  },
];

export default function TechnischeGutachtenConsultingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-12">
        Technische Gutachtenerstellung & individuelles Consulting
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {ITEMS.map((item) => (
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
