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

      <h2 className="text-2xl mt-8 mb-3">Dienstleistungsinformationen gemäß DL-InfoV</h2>
      <p>
        Angaben zu unserem Berufshaftpflichtversicherer sowie zum geografischen
        Geltungsbereich des Versicherungsschutzes finden Sie auf der Serviceseite unseres
        Versicherers.{" "}
        {/* TODO: Link/Formulierung mit Swantje und dem Versicherungsbüro final abstimmen, sobald verfügbar */}
        Den entsprechenden Link ergänzen wir, sobald er mit unserem Versicherungsbüro final
        abgestimmt ist.
      </p>

      <h2 className="text-2xl mt-8 mb-3">EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
        bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2 className="text-2xl mt-8 mb-3">Haftungsausschluss</h2>
      <h3 className="text-xl mt-6 mb-2">Haftung für Inhalte</h3>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
        Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind
        jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>
      <h3 className="text-xl mt-6 mb-2">Haftung für Links</h3>
      <p>
        Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir daher keine
        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
        Anbieter oder Betreiber verantwortlich. Eine permanente inhaltliche Kontrolle der
        verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
        zumutbar.
      </p>
      <h3 className="text-xl mt-6 mb-2">Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
        bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. des jeweiligen
        Autors.
      </p>
    </div>
  );
}
