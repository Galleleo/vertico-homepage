import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";

export const metadata = buildMetadata({
  title: "Baumfällung & Spezialfällung",
  description:
    "Baumfällung und Spezialfällung bei beengten Platzverhältnissen: seilunterstützte Fällarbeiten sowie Häckseln & Aufarbeitung – kontrolliert und projektbezogen geplant.",
  path: "/baumfaellung-spezialfaellung",
});

const LEISTUNGEN = [
  {
    title: "Baumfällung & Spezialfällung",
    text: "Kontrollierte Fällung und abschnittsweises Abtragen von Bäumen – insbesondere dort, wo die örtlichen Gegebenheiten eine konventionelle Fällung erschweren.",
  },
  {
    title: "Seilunterstützte Fällarbeiten",
    text: "Gezieltes Abtragen von Baumteilen mithilfe geeigneter Seil- und Riggingtechnik, wenn eine Fällung in einem Stück nicht möglich oder sinnvoll ist.",
  },
  {
    title: "Häckseln & Aufarbeitung",
    text: "Anfallendes Ast- und Schnittgut kann direkt vor Ort zerkleinert und nach Vereinbarung zur weiteren Verwendung oder Abfuhr vorbereitet werden.",
  },
];

export default function BaumfaellungSpezialfaellungPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-6">Baumfällung & Spezialfällung</h1>
      <p className="font-body max-w-2xl mb-12">
        VERTICO bietet Baumfällungen auch unter anspruchsvollen Bedingungen. Bei beengten
        Platzverhältnissen oder schwer zugänglichen Bereichen können Bäume kontrolliert und
        abschnittsweise abgetragen werden. Je nach Aufgabenstellung kommen geeignete Seil-
        und Riggingverfahren zum Einsatz.
      </p>

      <div className="relative h-72 md:h-96 w-full mb-12">
        <Image
          src="/images/baumfaellung-winter-2.jpg"
          alt="Baumkletterer in Seilzugangstechnik arbeitet hoch oben an der Krone einer hohen Fichte, darunter ein Mitarbeiter am Boden, mehrere Wohnhäuser im Hintergrund, kahle Winterbäume"
          fill
          sizes="(min-width: 768px) 1152px, 100vw"
          className="object-cover object-[50%_15%] rounded-[var(--radius-sharp)]"
        />
      </div>

      <h2 className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-6">
        Unsere Leistungen
      </h2>
      <div className="grid gap-8 md:grid-cols-3 mb-12">
        {LEISTUNGEN.map((item) => (
          <div key={item.title}>
            <h3 className="text-lg mb-2">{item.title}</h3>
            <p className="font-body text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="relative h-72 md:h-96 w-full mb-12">
        <Image
          src="/images/baumfaellung-winter-1.jpg"
          alt="Zwei Baumkletterer in Seilzugangstechnik bei der Kronenpflege im Winter"
          fill
          sizes="(min-width: 768px) 1152px, 100vw"
          className="object-cover rounded-[var(--radius-sharp)]"
        />
      </div>

      <h2 className="text-2xl mb-2">Individuell geplant. Sicher umgesetzt.</h2>
      <p className="font-body max-w-2xl mb-12">
        Die geeignete Vorgehensweise richtet sich nach Baum, Standort und örtlichen
        Gegebenheiten. Umfang und Durchführung stimmen wir projektbezogen ab.
      </p>

      <div className="bg-surface-alt -mx-4 px-4 py-16 rounded-[var(--radius-sharp)] flex flex-col items-start gap-4">
        <h2 className="text-2xl">Sie möchten eine Baumfällung anfragen?</h2>
        <p className="font-body max-w-xl">
          Senden Sie uns gerne die wichtigsten Informationen zum Baum und Standort.
        </p>
        <CtaButton href="/kontakt">Baumfällung anfragen</CtaButton>
      </div>
    </div>
  );
}
