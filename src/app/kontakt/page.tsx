import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site-data";
import { ContactForm } from "./ContactForm";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktieren Sie VERTICO Spezialtechnik für Windenergie & Rotorblattservice, Baumfällung & Spezialfällung sowie Maschinen- & Gerätevermietung.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-2">
      <div>
        <h1 className="text-4xl md:text-5xl mb-6">Kontakt</h1>
        <p className="font-body mb-6">
          Rufen Sie an, schreiben Sie eine E-Mail oder nutzen Sie das Formular – wir melden
          uns kurzfristig zurück.
        </p>
        <address className="font-body not-italic space-y-1">
          <p>{COMPANY.owner}</p>
          <p>{COMPANY.street}</p>
          <p>{COMPANY.zip} {COMPANY.city}</p>
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
      </div>
      <ContactForm />
    </div>
  );
}
