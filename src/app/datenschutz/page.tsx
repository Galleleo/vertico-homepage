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
        Ihnen stehen bezüglich Ihrer personenbezogenen Daten folgende Rechte zu. Wenden Sie
        sich hierzu an {COMPANY.email}.
      </p>
      <ul className="list-disc list-inside mt-3 space-y-1">
        <li>Art. 15 DSGVO – Recht auf Auskunft</li>
        <li>Art. 16 DSGVO – Recht auf Berichtigung</li>
        <li>Art. 17 DSGVO – Recht auf Löschung</li>
        <li>Art. 18 DSGVO – Recht auf Einschränkung der Verarbeitung</li>
        <li>Art. 20 DSGVO – Recht auf Datenübertragbarkeit</li>
        <li>Art. 21 DSGVO – Widerspruchsrecht</li>
      </ul>

      <h2 className="text-2xl mt-8 mb-3">7. Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
        Rechtsbehelfs steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde
        zu, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes
        oder des Orts des mutmaßlichen Verstoßes. Zuständige Aufsichtsbehörde ist:
      </p>
      <p className="mt-3">
        Die Landesbeauftragte für Datenschutz und Informationsfreiheit der Freien
        Hansestadt Bremen
      </p>
    </div>
  );
}
