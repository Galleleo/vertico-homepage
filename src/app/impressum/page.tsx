import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum von Vertico – Bremische Spezialtechnik.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 font-body">
      <h1 className="text-4xl mb-8">Impressum</h1>

      <h2 className="text-2xl mt-8 mb-3">Angaben gemäß § 5 TMG</h2>
      <p>
        {COMPANY.owner}
        <br />
        {COMPANY.name} (Einzelunternehmen)
        <br />
        {COMPANY.street}
        <br />
        {COMPANY.zip} {COMPANY.city}
      </p>

      <h2 className="text-2xl mt-8 mb-3">Kontakt</h2>
      <p>
        Telefon: {COMPANY.phone}
        <br />
        E-Mail: {COMPANY.email}
      </p>

      <h2 className="text-2xl mt-8 mb-3">Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        {/* TODO: USt-IdNr. ergänzen, sobald vorhanden */}
        Wird nach Erteilung ergänzt.
      </p>

      <h2 className="text-2xl mt-8 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {COMPANY.owner}
        <br />
        {COMPANY.street}, {COMPANY.zip} {COMPANY.city}
      </p>
    </div>
  );
}
