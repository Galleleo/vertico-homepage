import { buildMetadata } from "@/lib/metadata";
import { WhyVertico } from "@/components/WhyVertico";
import { PersonalPromise } from "@/components/PersonalPromise";
import { CtaButton } from "@/components/CtaButton";
import { COMPANY } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Über VERTICO",
  description:
    "VERTICO Spezialtechnik aus Hagen im Bremischen: Fachkompetenz, individuelle Lösungen und persönlicher Kontakt in Windenergie, Baumfällung und Maschinenvermietung.",
  path: "/ueber-vertico",
});

export default function UeberVerticoPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl md:text-5xl mb-2">VERTICO Spezialtechnik</h1>
        <p className="font-heading uppercase tracking-wide text-sm text-ink/70 mb-6">
          Spezialtechnik. Fachkompetenz. Individuelle Lösungen.
        </p>
        <p className="font-body max-w-2xl mb-16">
          VERTICO steht für spezialisierte technische Dienstleistungen, fundierte
          Fachkompetenz und individuelle Lösungen. Unser Schwerpunkt liegt im Bereich
          Windenergie und Rotorblattservice. Ergänzend bieten wir ausgewählte Leistungen in
          den Bereichen Baumfällung und Spezialfällung sowie Maschinen- und
          Gerätevermietung.
        </p>

        <div className="mb-16">
          <PersonalPromise />
        </div>

        <address className="font-body not-italic mb-16 space-y-1">
          <p className="font-heading text-sm uppercase text-ink/70 mb-2">Kontakt</p>
          <p>{COMPANY.owner}</p>
          <p>{COMPANY.street}</p>
          <p>
            {COMPANY.zip} {COMPANY.city}
          </p>
          <p>
            <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="hover:underline">
              {COMPANY.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${COMPANY.email}`} className="hover:underline">
              {COMPANY.email}
            </a>
          </p>
        </address>

        <CtaButton href="/kontakt">Zum Kontaktformular</CtaButton>
      </div>

      <WhyVertico />
    </>
  );
}
