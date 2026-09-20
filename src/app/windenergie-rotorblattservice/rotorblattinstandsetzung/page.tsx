import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata = buildMetadata({
  title: "Rotorblattinstandsetzung",
  description:
    "Rotorblattreparatur und Rotorblattinstandsetzung: strukturelle Schadeninstandsetzung, Vorderkantenschutzsysteme (LEP), Instandsetzung von Blitzeinschlagschäden und individuelle Instandsetzungslösungen.",
  path: "/windenergie-rotorblattservice/rotorblattinstandsetzung",
});

const REPAIRS = [
  {
    title: "Strukturelle Schadeninstandsetzung",
    text: "Fachgerechte Rotorblattreparaturen zur Wiederherstellung der strukturellen Integrität.",
  },
  {
    title: "Vorderkantenschutzsysteme",
    text: "Nachhaltige Schutzlösungen durch den Einsatz verschiedener, anlagenspezifisch abgestimmter Vorderkantenschutzsysteme (LEP) und Applikationsverfahren, einschließlich Schutzkappen.",
  },
  {
    title: "Instandsetzung von Blitzeinschlagschäden",
    text: "Fachgerechte Instandsetzung schwerwiegender Blitzschäden mit anschließender messtechnischer Verifizierung der Ableitstrecke zur Sicherstellung der Blitzstromableitfähigkeit.",
  },
  {
    title: "Individuelle Instandsetzungslösungen",
    text: "Maßgeschneiderte Instandsetzungsmaßnahmen für komplexe Schadensbilder – von umfangreichen Rotorblattreparaturen am Boden bis zur Rekonstruktion und vollständigen Wiederherstellung stark geschädigter Rotorblätter.",
  },
  {
    title: "Fachkompetenz",
    text: "Langjährige Fachexpertise aus Rotorblattproduktion und Formenbau sowie der Fertigung anspruchsvoller GFK- und CFK-Komponenten bildet die Grundlage unserer Reparaturkompetenz. Qualifiziertes und zertifiziertes Fachpersonal gewährleistet die fachgerechte und qualitätsorientierte Umsetzung auch komplexer Instandsetzungskonzepte.",
  },
];

export default function RotorblattinstandsetzungPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-8">Rotorblattinstandsetzung</h1>

      <ImagePlaceholder
        label="Rotorblattinstandsetzung"
        recommended={["Reparaturfoto", "Detailaufnahme LEP", "Einsatzfoto"]}
      />

      <div className="grid gap-8 md:grid-cols-2">
        {REPAIRS.map((item) => (
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
