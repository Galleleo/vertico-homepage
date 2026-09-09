import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";

export const metadata = buildMetadata({
  title: "Baumfällung & Heckenschnitt",
  description:
    "Baumfällung bevorzugt in Seilzugangstechnik oder mit dem Steiger, dazu Heckenschnitt, Grünpflege sowie Kronensicherung und Kronenpflege.",
  path: "/baumfaellung-heckenschnitt",
});

export default function BaumfaellungPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-2">Baumfällung & Heckenschnitt</h1>
      <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-4">
        Kontrollierter Abtrag bei engsten Platz- und Zugangsverhältnissen
      </p>
      <p className="font-body max-w-2xl mb-12">
        Steht ein Baum nah an Gebäuden, Leitungen oder schützenswerter Infrastruktur, ist eine
        normale Fällung unmöglich. Mit moderner Seil- und Riggingtechnik tragen wir Bäume
        stückweise millimetergenau ab – ganz ohne Beschädigung an Ihrem Eigentum. Daneben
        übernehmen wir Heckenschnitt, Grünpflege sowie Kronensicherung und Kronenpflege.
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

      <h2 className="text-lg mb-2">Unser technisches Vorgehen</h2>
      <ul className="font-body list-disc list-inside mb-6 space-y-1">
        <li>Gefahrenanalyse – exakte Planung von Lastwegen, Arbeits- und Fallbereichen</li>
        <li>Spezialausrüstung – Einsatz zertifizierter Anschlag- und Riggingmittel</li>
        <li>Sicherer Abtrag – kontrolliertes Abseilen von Stamm- und Kronenteilen Stück für Stück</li>
      </ul>
      <p className="font-body max-w-2xl mb-12">
        Ihr Vorteil: maximale Sicherheit für umliegende Gebäude und Anlagen – selbst dort, wo
        keine Schwerlastkräne oder Hebebühnen Platz finden.
      </p>

      <div className="relative h-72 md:h-96 w-full mb-12">
        <Image
          src="/images/baumfaellung-winter-1.jpg"
          alt="Zwei Baumkletterer in Seilzugangstechnik bei der Kronenpflege im Winter"
          fill
          sizes="(min-width: 768px) 1152px, 100vw"
          className="object-cover rounded-[var(--radius-sharp)]"
        />
      </div>

      <CtaButton href="/kontakt">Baumarbeiten anfragen</CtaButton>
    </div>
  );
}
