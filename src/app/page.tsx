import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyVertico } from "@/components/WhyVertico";
import { PersonalPromise } from "@/components/PersonalPromise";
import { CtaButton } from "@/components/CtaButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Startseite",
  description:
    "VERTICO Spezialtechnik: Windenergie & Rotorblattservice, Baumfällung & Spezialfällung sowie Maschinen- & Gerätevermietung aus Hagen im Bremischen.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 flex flex-col gap-10">
        <div>
          <h2 className="text-3xl mb-2">VERTICO Spezialtechnik</h2>
          <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-4">
            Spezialtechnik. Fachkompetenz. Individuelle Lösungen.
          </p>
          <p className="font-body max-w-2xl">
            VERTICO steht für spezialisierte technische Dienstleistungen, fundierte
            Fachkompetenz und individuelle Lösungen. Unser Schwerpunkt liegt im Bereich
            Windenergie und Rotorblattservice. Ergänzend bieten wir ausgewählte Leistungen in
            den Bereichen Baumfällung und Spezialfällung sowie Maschinen- und
            Gerätevermietung.
          </p>
        </div>

        <PersonalPromise />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 grid gap-8 md:grid-cols-2">
        <div className="md:col-span-2">
          <ServiceCard
            href="/windenergie-rotorblattservice"
            title="Windenergie & Rotorblattservice"
            description="Inspektion, Instandsetzung, technisches Consulting und Gutachtenerstellung rund um Rotorblätter von Windenergieanlagen."
            media={{
              type: "image",
              src: "/images/windkraft-seilzugang-1.jpg",
              alt: "Seilzugangstechniker bei der Wartung eines Rotorblatts an einer Windkraftanlage",
            }}
          />
          <div className="mt-4">
            <CtaButton href="/windenergie-rotorblattservice">Windenergie entdecken</CtaButton>
          </div>
        </div>

        <div>
          <ServiceCard
            href="/baumfaellung-spezialfaellung"
            title="Baumfällung & Spezialfällung"
            description="Kontrollierte Baumfällungen und seilunterstützte Fällarbeiten – auch unter anspruchsvollen Bedingungen."
            media={{
              type: "image",
              src: "/images/baumfaellung-kevin-1.jpg",
              alt: "Baumkletterer in Seilzugangstechnik bei der Arbeit hoch oben in einem Baum",
            }}
          />
          <div className="mt-4">
            <CtaButton href="/baumfaellung-spezialfaellung">Baumfällung entdecken</CtaButton>
          </div>
        </div>

        <div>
          <ServiceCard
            href="/maschinen-geraetevermietung"
            title="Maschinen- & Gerätevermietung"
            description="Ausgewählte Maschinen, Geräte, Anhänger und Baustellentechnik flexibel und unkompliziert mieten."
            media={{
              type: "image",
              src: "/images/haecksler.jpg",
              alt: "Häcksler von VERTICO",
            }}
          />
          <div className="mt-4">
            <CtaButton href="/maschinen-geraetevermietung">Mietpark entdecken</CtaButton>
          </div>
        </div>
      </section>

      <WhyVertico />

      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-start gap-4">
          <h2 className="text-3xl">Kontakt</h2>
          <p className="font-body max-w-xl">
            Sie haben einen Baum, ein Gerät oder eine Anlage, die hoch hinaus muss? Schreiben
            Sie uns – wir melden uns kurzfristig zurück.
          </p>
          <CtaButton href="/kontakt">Zum Kontaktformular</CtaButton>
        </div>
      </section>
    </>
  );
}
