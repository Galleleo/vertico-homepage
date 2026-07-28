import Image from "next/image";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyVertico } from "@/components/WhyVertico";
import { CtaButton } from "@/components/CtaButton";
import { DryerIcon } from "@/components/icons/MachineIcons";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Startseite",
  description:
    "Vertico – Bremische Spezialtechnik: Maschinenverleih, Baumfällung & Heckenschnitt sowie Kletter- und Höhenarbeiten aus Hagen im Bremischen.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[420px] w-full flex items-end bg-ink">
        <Image
          src="/images/hero-banner.jpg"
          alt="Seilzugangstechniker bei der Arbeit an einer Windkraftanlage vor Hügellandschaft mit Windrädern"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/25 z-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 text-on-dark">
          <h1 className="text-4xl md:text-6xl max-w-2xl">Alles, was hoch hinaus muss.</h1>
          <p className="font-body mt-4 max-w-xl">
            {COMPANY.name} steht für Maschinenverleih, Baumfällung und Kletter- bzw.
            Höhenarbeiten aus einer Hand – sicher, geprüft und mit kurzen Wegen aus{" "}
            {COMPANY.city}.
          </p>
          <div className="mt-6">
            <CtaButton href="/kontakt">Kontakt aufnehmen</CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-3">
        <ServiceCard
          href="/maschinenverleih"
          title="Maschinenverleih"
          description="Geprüfte, gewartete Maschinen zur kurz- und langfristigen Miete."
          media={{ type: "icon", icon: <DryerIcon className="h-full w-full" /> }}
        />
        <ServiceCard
          href="/baumfaellung-heckenschnitt"
          title="Baumfällung & Heckenschnitt"
          description="Fällung in Seilzugangstechnik oder mit dem Steiger, plus Grünpflege."
          media={{
            type: "image",
            src: "/images/baumfaellung-winter-1.jpg",
            alt: "Zwei Baumkletterer in Seilzugangstechnik bei der Kronenpflege im Winter",
          }}
        />
        <ServiceCard
          href="/kletter-hoehenarbeiten"
          title="Kletter- & Höhenarbeiten"
          description="Seilzugang an schwer zugänglichen Bauwerken, inklusive Windkraftanlagen."
          media={{
            type: "image",
            src: "/images/windkraft-seilzugang-1.jpg",
            alt: "Seilzugangstechniker bei der Wartung eines Rotorblatts an einer Windkraftanlage",
          }}
        />
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
