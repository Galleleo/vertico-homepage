import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";

export const metadata = buildMetadata({
  title: "Kletter- & Höhenarbeiten",
  description:
    "Kletter- und Höhenarbeiten in Seilzugangstechnik an schwer zugänglichen Bauwerken, inklusive Wartung und Inspektion von Windkraftanlagen.",
  path: "/kletter-hoehenarbeiten",
});

export default function KletterHoehenarbeitenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-6">Kletter- & Höhenarbeiten</h1>
      <p className="font-body max-w-2xl mb-8">
        Für Bauwerke, die schwer zugänglich sind, arbeiten wir in Seilzugangstechnik –
        flexibel, sicher und ohne schweres Gerät vor Ort. Unsere Seiltechniker sind
        ausgebildet und zertifiziert.
      </p>

      <div className="relative h-72 md:h-96 w-full mb-12">
        <Image
          src="/images/windkraft-seilzugang-2.jpg"
          alt="Vollständige Windkraftanlage mit Turm und Rotorblatt vor klarem blauem Himmel, ein Seilzugangstechniker seilt sich nahe der Rotorblattspitze ab"
          fill
          sizes="(min-width: 768px) 1152px, 100vw"
          className="object-cover rounded-[var(--radius-sharp)]"
        />
      </div>

      <ul className="font-body list-disc list-inside mb-12 space-y-1">
        <li>Allgemeine Kletter- und Höhenarbeiten in Seilzugangstechnik</li>
        <li>Wartung und Inspektion von Windkraftanlagen (Seilzugang an Rotorblatt und Turm)</li>
        <li>Rotorblatt-Reparatur</li>
        <li>Arbeiten an schwer zugänglichen Bauwerken</li>
      </ul>

      <h2 className="text-3xl mb-2">Industrieklettern & Seilzugangstechnik</h2>
      <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-4">
        Flexibler Zugang zu schwer erreichbaren Arbeitsbereichen
      </p>
      <p className="font-body max-w-2xl mb-6">
        Wo Kräne, Hebebühnen oder Gerüste an ihre Grenzen stoßen oder enorme Kosten
        verursachen, bietet die Seilzugangstechnik die perfekte Alternative: schnell, sicher
        und wirtschaftlich.
      </p>
      <h3 className="text-lg mb-2">Typische Einsatzbereiche</h3>
      <ul className="font-body list-disc list-inside mb-6 space-y-1">
        <li>Industrie und Produktionsanlagen</li>
        <li>Windenergieanlagen</li>
        <li>Türme, Masten und Schornsteine</li>
        <li>Fassaden, Brücken und Tragwerke</li>
      </ul>
      <h3 className="text-lg mb-2">Ihre Vorteile</h3>
      <ul className="font-body list-disc list-inside mb-6 space-y-1">
        <li>Minimaler Rüstaufwand – kein tagelanger Gerüstbau nötig</li>
        <li>Geringer Platzbedarf – ideal für enge Räume und laufenden Betrieb</li>
        <li>Schnelle Einsatzbereitschaft – der Zugang steht in kürzester Zeit</li>
        <li>Maximale Flexibilität – punktgenaues Arbeiten selbst an verwinkelten Strukturen</li>
      </ul>
      <p className="font-body max-w-2xl mb-12">
        Ihr Ergebnis: Sie sparen erhebliche Rüstkosten, minimieren Ausfallzeiten und erhalten
        höchste Sicherheit bei allen Einsätzen.
      </p>

      <h2 className="text-3xl mb-2">Rotorblattservice für Windenergieanlagen</h2>
      <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-4">
        Inspektion, Zustandsbewertung und Instandsetzung
      </p>
      <p className="font-body max-w-2xl mb-4">
        Rotorblätter gehören zu den höchstbeanspruchten Komponenten einer Windenergieanlage.
        Während ihrer Betriebsdauer wirken zyklische Belastungen durch Wind, Eigengewicht und
        aerodynamische Kräfte sowie wechselnde Umwelt- und Witterungseinflüsse.
      </p>
      <h3 className="text-lg mb-2">Relevante Schadensmechanismen</h3>
      <ul className="font-body list-disc list-inside mb-6 space-y-1">
        <li>Erosion und Materialabtrag</li>
        <li>Materialermüdung und Rissbildung</li>
        <li>Delaminationen</li>
        <li>Feuchtigkeitseintrag</li>
        <li>Blitzschäden</li>
        <li>Beschädigungen von Oberflächenschutzsystemen</li>
      </ul>
      <p className="font-body max-w-2xl mb-12">
        Unsere Sachverständigen und erfahrenen Fachkräfte greifen bei Schadensbewertung und
        Klassifizierung auf jahrzehntelange praktische Expertise zurück. So werden
        Instandhaltungsmaßnahmen zielgerichtet priorisiert und unnötige Kosten vermieden – für
        eine nachhaltige, kosteneffiziente und transparente Bewertung, die die technische
        Integrität und Standsicherheit Ihrer Windenergieanlage sichert.
      </p>

      <h3 className="text-xl mb-2">Rotorblattinspektion</h3>
      <p className="font-body max-w-2xl mb-2">
        Eine regelmäßige Zustandskontrolle sichert den wirtschaftlichen und ertragreichen
        Betrieb Ihrer Anlage. Untersucht werden je nach Aufgabenstellung:
      </p>
      <ul className="font-body list-disc list-inside mb-4 space-y-1">
        <li>Leading Edge und Trailing Edge</li>
        <li>Blattober- und Blattunterseite</li>
        <li>Blattspitze und Blattwurzelbereich</li>
        <li>Klebeverbindungen und Laminatbereiche</li>
        <li>Blitzschutzsysteme</li>
        <li>Serrations und Vortex-Generatoren</li>
      </ul>
      <p className="font-body max-w-2xl mb-8">
        Auffälligkeiten dokumentieren wir präzise nach Lage, Art und technischer Relevanz – für
        eine glasklare Entscheidungsgrundlage, damit Sie zielgerichtet investieren und
        unnötige Kosten vermeiden.
      </p>

      <h3 className="text-xl mb-2">Leading-Edge-Reparatur</h3>
      <p className="font-body max-w-2xl mb-2">
        Witterung, Staub und Partikel führen an der Vorderkante der Rotorblätter mit der Zeit
        zu erheblichem Materialabtrag. Wir setzen beschädigte Rotorblattbereiche fachgerecht
        und nachhaltig instand.
      </p>
      <h4 className="font-heading text-base uppercase mb-1">Typische Schadensbilder</h4>
      <ul className="font-body list-disc list-inside mb-4 space-y-1">
        <li>Abtrag von Beschichtung & Erosionsschutz</li>
        <li>Freiliegende Laminate, Risse & Feuchtigkeitseintritt</li>
        <li>Strukturelle Beschädigungen</li>
      </ul>
      <p className="font-body max-w-2xl mb-8">
        Von der Schadenevaluierung bis zum erneuten Oberflächenschutz: Unsere Sachverständigen
        unterscheiden präzise zwischen optischen Mängeln und echtem Handlungsbedarf – für eine
        kosteneffiziente, langlebige Reparatur mit maximaler Standsicherheit.
      </p>

      <h3 className="text-xl mb-2">Blitzschäden an Rotorblättern</h3>
      <p className="font-body max-w-2xl mb-2">
        Durch die exponierte Lage und Bauhöhe von Windenergieanlagen sind Blitzschäden ein
        häufiges Risiko. Wir bewerten die Auswirkungen präzise und leiten die nötigen
        Instandsetzungen ein.
      </p>
      <h4 className="font-heading text-base uppercase mb-1">Mögliche Folgen von Blitzeinschlägen</h4>
      <ul className="font-body list-disc list-inside mb-4 space-y-1">
        <li>Oberflächenschäden – Beschädigungen, Abplatzungen und Ausbrüche</li>
        <li>Strukturelle Mängel – Delaminationen und tieferliegende Schäden in der Laminatstruktur</li>
        <li>Blitzschutzsystem – Schäden an Rezeptoren und Ableitern</li>
      </ul>
      <p className="font-body max-w-2xl mb-8">
        Unsere Experten bewerten Schadensursache und technische Relevanz mit jahrzehntelanger
        Gutachtererfahrung. So priorisieren wir Reparaturen sinnvoll, vermeiden unnötige
        Kosten und sichern die langfristige Standsicherheit Ihrer Anlage.
      </p>

      <h3 className="text-xl mb-2">Technische Gutachten & Consulting</h3>
      <p className="font-body max-w-2xl mb-2">
        Fundierte Entscheidungen in Betrieb und Instandhaltung erfordern verlässliche Fakten.
        Unsere Sachverständigen unterstützen Sie mit präzisen Analysen, objektiven Gutachten
        und jahrzehntelanger Expertise.
      </p>
      <h4 className="font-heading text-base uppercase mb-1">Technische Gutachten</h4>
      <ul className="font-body list-disc list-inside mb-4 space-y-1">
        <li>Schadens- und Zustandsgutachten – umfassende Bewertung von Rotorblatt-, Erosions-, Laminat- und Blitzschäden</li>
        <li>Priorisierung – klare Einstufung von Dringlichkeit und Reparaturbedarf</li>
        <li>Dokumentation – nachvollziehbare Entscheidungsgrundlage für Betreiber und Versicherungen</li>
      </ul>
      <p className="font-body max-w-2xl mb-12">
        Technisches Consulting: Wir beraten Betreiber, Serviceunternehmen und
        Projektbeteiligte unabhängig bei allen technischen Fragen rund um Rotorblätter und
        deren Instandhaltung – mit dem Ziel maximaler Transparenz, damit Maßnahmen nur dort
        umgesetzt werden, wo sie technisch erforderlich und wirtschaftlich sinnvoll sind.
      </p>

      <h2 className="text-3xl mb-2">Montage, Wartung & Reparatur</h2>
      <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-4">
        Facharbeiten an schwer zugänglichen Konstruktionen und Anlagen
      </p>
      <p className="font-body max-w-2xl mb-4">
        Wo die Erreichbarkeit die größte Herausforderung ist, sorgen wir für einen sicheren
        und effizienten Ablauf. Wir übernehmen anspruchsvolle Handwerks- und
        Instandhaltungsleistungen an hochgelegenen Bauwerken und technischen Anlagen.
      </p>
      <h3 className="text-lg mb-2">Unser Leistungsspektrum</h3>
      <ul className="font-body list-disc list-inside mb-6 space-y-1">
        <li>Montage und Installation – fachgerechte De- und Remontage sowie Austausch von Komponenten</li>
        <li>Wartung und Reparatur – regelmäßige Instandhaltung, Inspektionen und mechanische Arbeiten</li>
        <li>Oberflächenschutz – professionelle Reinigungs-, Beschichtungs- und Korrosionsschutzarbeiten</li>
        <li>Technische Sonderarbeiten – individuelle Handwerksleistungen in extremer Höhe</li>
      </ul>
      <p className="font-body max-w-2xl mb-12">
        Ihr Vorteil: Wir integrieren die optimale Zugangstechnik direkt in die Arbeitsplanung.
        Das spart wertvolle Zeit, senkt Ihre Ausfallzeiten und garantiert maximale Sicherheit.
      </p>

      <CtaButton href="/kontakt">Höhenarbeiten anfragen</CtaButton>
    </div>
  );
}
