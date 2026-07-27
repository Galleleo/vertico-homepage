import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Vertico – Bremische Spezialtechnik.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 font-body">
      <h1 className="text-4xl mb-8 break-words">Datenschutzerklärung</h1>

      <h2 className="text-2xl mt-8 mb-3">1. Verantwortlicher</h2>
      <p>
        {COMPANY.owner}
        <br />
        {COMPANY.name}
        <br />
        {COMPANY.street}
        <br />
        {COMPANY.zip} {COMPANY.city}
        <br />
        E-Mail: {COMPANY.email}
        <br />
        Telefon: {COMPANY.phone}
      </p>

      <h2 className="text-2xl mt-8 mb-3">2. Hosting und Server-Logfiles</h2>
      <p>
        Beim Aufruf dieser Website erhebt unser Hosting-Provider automatisch technische
        Informationen (Server-Logfiles), die Ihr Browser übermittelt. Dazu gehören
        beispielsweise IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp und das
        angeforderte Dokument. Diese Daten dienen ausschließlich der technischen
        Bereitstellung und Absicherung der Website und werden nicht mit anderen
        Datenquellen zusammengeführt.
      </p>

      <h2 className="text-2xl mt-8 mb-3">3. Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten wir die von
        Ihnen angegebenen Daten (Name, E-Mail-Adresse, optional Telefonnummer, Nachricht)
        ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
        b DSGVO (vorvertragliche Anfrage) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der Beantwortung von Anfragen).
      </p>

      <h2 className="text-2xl mt-8 mb-3">4. Cookies und Tracking</h2>
      <p>
        Diese Website setzt keine Cookies und keine Analyse- oder Tracking-Dienste ein.
        Es findet keine Erstellung von Nutzerprofilen statt.
      </p>

      <h2 className="text-2xl mt-8 mb-3">5. Schriftarten</h2>
      <p>
        Wir nutzen die Schriftarten Oswald und Work Sans. Diese sind lokal auf unserem
        Server eingebunden (selbst gehostet) – es findet keine Verbindung zu externen
        Anbietern wie Google Fonts statt, und es werden keine Daten an Dritte übertragen.
      </p>

      <h2 className="text-2xl mt-8 mb-3">6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
        Verarbeitung Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht gegen die
        Verarbeitung und ein Recht auf Datenübertragbarkeit. Wenden Sie sich hierzu an{" "}
        {COMPANY.email}. Außerdem steht Ihnen ein Beschwerderecht bei einer
        Datenschutzaufsichtsbehörde zu.
      </p>
    </div>
  );
}
