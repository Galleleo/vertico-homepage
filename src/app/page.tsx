import Image from "next/image";
import { ServiceCard } from "@/components/ServiceCard";
import { WhyVertico } from "@/components/WhyVertico";
import { CtaButton } from "@/components/CtaButton";
import { DryerIcon } from "@/components/icons/MachineIcons";
import { DocumentCheckIcon, DroneIcon } from "@/components/icons/ServiceIcons";
import { buildMetadata } from "@/lib/metadata";

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
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/80 via-ink/35 to-transparent z-0" />
        <div className="absolute inset-x-0 top-[6%] z-[5] hidden md:block">
          <div className="mx-auto max-w-6xl px-4 flex justify-start">
            <div
              className="h-20 w-auto opacity-85 drop-shadow-md md:h-24 lg:h-28"
              style={{ aspectRatio: "3799 / 1322" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/vertico-logo-text-only.png"
                  alt="Vertico – Bremische Spezialtechnik"
                  fill
                  sizes="320px"
                  className="object-contain"
                />
                <Image
                  src="/images/vertico-logo-icon-hero.png"
                  alt=""
                  aria-hidden="true"
                  width={863}
                  height={1136}
                  className="animate-float-logo-icon absolute left-0 top-0 h-[85.93%] w-[22.72%]"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/drone-cutout.png"
          alt=""
          aria-hidden="true"
          width={160}
          height={70}
          className="animate-float-drone absolute left-[63%] top-[28%] z-[5] hidden h-10 w-auto drop-shadow-md sm:block md:h-14"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 text-on-dark">
          <h1 className="text-4xl md:text-6xl max-w-2xl">
            Spezialtechnik in der Höhe – sicher, präzise und verlässlich
          </h1>
          <p className="font-heading uppercase tracking-wide text-sm md:text-base mt-4 text-on-dark/80">
            Ihr Experte für
          </p>
          <ul className="font-body mt-2 max-w-xl space-y-1">
            <li>Windenergie</li>
            <li>Seilzugangstechnik</li>
            <li>Spezialbaumarbeiten</li>
            <li>Drohnenaufnahmen und Spezialmaschinenverleih</li>
          </ul>
          <div className="mt-6">
            <CtaButton href="/kontakt">Kontakt aufnehmen</CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl mb-2">Sicher in der Höhe, stark im Ergebnis</h2>
        <p className="font-body max-w-2xl mb-8">
          Manche Projekte erfordern mehr als nur Standardlösungen. Wir haben uns auf
          technische Arbeiten dort spezialisiert, wo gewöhnlich Zugänge an ihre Grenzen
          stoßen. Mit Erfahrung, Expertise, professioneller Seilzugangstechnik und
          Spezialgeräten sorgen wir für reibungslosen Ablauf.
        </p>
        <h3 className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-6">
          Das leisten wir für Sie
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            href="/maschinenverleih"
            title="Maschinenverleih"
            description="Verleih von professionellen Spezialgeräten."
            media={{ type: "icon", icon: <DryerIcon className="h-full w-full" /> }}
          />
          <ServiceCard
            href="/baumfaellung-heckenschnitt"
            title="Baumfällung & Heckenschnitt"
            description="Spezialbaumarbeiten und kontrollierte Fällungen in Seilzugangstechnik oder mit dem Steiger."
            media={{
              type: "image",
              src: "/images/baumfaellung-winter-1.jpg",
              alt: "Zwei Baumkletterer in Seilzugangstechnik bei der Kronenpflege im Winter",
            }}
          />
          <ServiceCard
            href="/kletter-hoehenarbeiten"
            title="Kletter- & Höhenarbeiten"
            description="Sicherer Zugang an schwer erreichbaren Orten – inklusive Rotorblattservice an Windenergieanlagen."
            media={{
              type: "image",
              src: "/images/windkraft-seilzugang-1.jpg",
              alt: "Seilzugangstechniker bei der Wartung eines Rotorblatts an einer Windkraftanlage",
            }}
          />
          <ServiceCard
            href="/kletter-hoehenarbeiten#gutachten-consulting"
            title="Technische Gutachten & Consulting"
            description="Gutachtenerstellung und unabhängige technische Beratung für Betreiber und Serviceunternehmen."
            media={{ type: "icon", icon: <DocumentCheckIcon className="h-full w-full" /> }}
          />
          <ServiceCard
            href="/kontakt"
            title="Drohnenservice"
            description="Effiziente Sichtprüfungen und Dokumentationen aus der Luft."
            media={{ type: "icon", icon: <DroneIcon className="h-full w-full" /> }}
          />
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl mb-2">Unser technischer Ansatz</h2>
          <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-6">
            Sicherheit und Effizienz aus einer Hand
          </p>
          <p className="font-body max-w-2xl mb-8">
            Für uns ist die Zugangstechnik nur ein Baustein des Gesamterfolgs. Wir betrachten
            jedes Projekt ganzheitlich und stimmen alle Arbeitsschritte perfekt aufeinander ab –
            aus dem optimalen Zusammenspiel von:
          </p>
          <ol className="font-body list-decimal list-inside max-w-2xl mb-8 space-y-1">
            <li>Technische Aufgabenstellung – präzise Analyse Ihres Bedarfs</li>
            <li>Zugangskonzept und Gefährdungsbeurteilung – maximale Sicherheit für Mensch und Anlage</li>
            <li>Arbeitsverfahren und Ausrüstung – Einsatz modernster Spezialtechnik</li>
            <li>Fachgerechte Ausführung – professionelle Umsetzung durch zertifizierte Expertise</li>
          </ol>
          <p className="font-body max-w-2xl">
            Ihr Nutzen: Sie erhalten technisch durchdachte Lösungen, die Ausfallzeiten
            minimieren, die Sicherheit maximieren und Ihre Kosten nachhaltig senken.
          </p>
        </div>
      </section>

      <WhyVertico />

      <section className="bg-surface-alt">
        <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-start gap-4">
          <h2 className="text-3xl">Ihr Projekt ist anspruchsvoll? Wir haben die passende Lösung.</h2>
          <p className="font-body max-w-2xl">
            Ob Spezialarbeiten in der Höhe, Inspektionen aus der Luft oder das passende
            Mietgerät für Ihr Bauvorhaben: Wir entwickeln maßgeschneiderte Konzepte und
            unterstützen Sie fachgerecht bei der Umsetzung mit der passenden Spezialtechnik.
          </p>
          <dl className="grid gap-6 sm:grid-cols-3 max-w-3xl mb-2">
            <div>
              <dt className="font-heading text-sm uppercase">Spezialarbeit in der Höhe</dt>
              <dd className="font-body text-sm text-ink mt-1">
                Windenergie (Inspektion und Reparatur von Rotorblättern), Spezialbaumarbeiten
                (Fällung und Pflege), Industrieklettern (Montage/Demontage, Reinigung)
              </dd>
            </div>
            <div>
              <dt className="font-heading text-sm uppercase">Inspektionen aus der Luft</dt>
              <dd className="font-body text-sm text-ink mt-1">
                Hochauflösende Drohnenaufnahmen und Inspektionen
              </dd>
            </div>
            <div>
              <dt className="font-heading text-sm uppercase">Mietgeräte</dt>
              <dd className="font-body text-sm text-ink mt-1">
                Vermietung von Spezialtechnik und Baumaschinen
              </dd>
            </div>
          </dl>
          <p className="font-body max-w-xl">
            Sprechen Sie uns einfach an – wir beraten Sie gerne persönlich und unverbindlich.
          </p>
          <CtaButton href="/kontakt">Zum Kontaktformular</CtaButton>
        </div>
      </section>
    </>
  );
}
