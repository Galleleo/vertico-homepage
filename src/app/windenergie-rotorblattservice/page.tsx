import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { WINDENERGIE_SUBPAGES } from "@/lib/site-data";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyVertico } from "@/components/WhyVertico";
import { CtaButton } from "@/components/CtaButton";
import { DocumentCheckIcon } from "@/components/icons/ServiceIcons";

export const metadata = buildMetadata({
  title: "Windenergie & Rotorblattservice",
  description:
    "Rotorblattinspektion, Rotorblattreparatur, technische Gutachten und Consulting für Windenergieanlagen – Seilzugangstechnik und Rotorblattbefahranlagen aus Hagen im Bremischen.",
  path: "/windenergie-rotorblattservice",
});

const SUBPAGE_MEDIA: Record<string, { src: string; alt: string } | undefined> = {
  rotorblattinspektionen: {
    src: "/images/windenergie-anlage-uebersicht.jpg",
    alt: "Windenergieanlage in der Totalen vor bewölktem Himmel",
  },
  rotorblattinstandsetzung: {
    src: "/images/windenergie-blattwurzel-erosion.jpg",
    alt: "Detailaufnahme der Blattwurzel eines Rotorblatts mit sichtbaren Erosionsspuren",
  },
  "zugangstechnik-verfahrensmethoden": {
    src: "/images/windenergie-befahranlage-einsatz.jpg",
    alt: "Rotorblattbefahranlage an einer Windenergieanlage im Einsatz",
  },
};

export default function WindenergieRotorblattservicePage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl mb-2">Windenergie & Rotorblattservice</h1>
        <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-6">
          Rotorblattinspektion · Rotorblattreparatur · Consulting · Technische Gutachten
        </p>
        <p className="font-body text-lg mb-4">
          Spezialtechnik in der Höhe – sicher, präzise und verlässlich.
        </p>
        <p className="font-body max-w-2xl mb-12">
          VERTICO bietet spezialisierte Leistungen rund um die Inspektion, Bewertung und
          Instandsetzung von Rotorblättern an Windenergieanlagen. Abhängig von Anlage und
          Aufgabenstellung kommen Seilzugangstechnik, spezialisierte
          Rotorblattbefahranlagen und ergänzend drohnengestützte Sichtinspektionen zum
          Einsatz.
        </p>

        <div className="relative h-64 md:h-80 w-full mb-12">
          <Image
            src="/images/windenergie-befahranlage-weit.jpg"
            alt="Rotorblattbefahranlage an einer Windenergieanlage, Gesamtansicht"
            fill
            sizes="(min-width: 768px) 1152px, 100vw"
            className="object-cover rounded-[var(--radius-sharp)]"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-4">
          {WINDENERGIE_SUBPAGES.map((sub) => {
            const media = SUBPAGE_MEDIA[sub.slug];
            return (
              <ServiceCard
                key={sub.slug}
                href={`/windenergie-rotorblattservice/${sub.slug}`}
                title={sub.title}
                description={sub.teaser}
                media={
                  media
                    ? { type: "image", src: media.src, alt: media.alt }
                    : { type: "icon", icon: <DocumentCheckIcon className="h-full w-full" /> }
                }
              />
            );
          })}
        </div>
      </div>

      <WhyVertico />

      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="bg-surface-alt px-4 py-16 rounded-[var(--radius-sharp)] flex flex-col items-start gap-4">
          <h2 className="text-2xl">
            Sie haben Fragen zu einer Anlage oder einem konkreten Schadensbild?
          </h2>
          <p className="font-body max-w-xl">
            Sprechen Sie uns an – wir prüfen die Aufgabenstellung und stimmen das geeignete
            Vorgehen mit Ihnen ab.
          </p>
          <CtaButton href="/kontakt">Projekt anfragen</CtaButton>
        </div>
      </div>
    </>
  );
}
