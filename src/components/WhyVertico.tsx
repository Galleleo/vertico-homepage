const REASONS = [
  {
    title: "Nur zertifizierte Mitarbeiter",
    text: "Ausgebildete, zertifizierte Seiltechniker führen jede Kletter- und Höhenarbeit durch.",
  },
  {
    title: "Sicherheit zuerst",
    text: "Fällungen aus Seilzugangstechnik oder mit dem Steiger – nicht „wild“ gefällt.",
  },
  {
    title: "Geprüfte Maschinen",
    text: "Regelmäßig gewartete Technik, sowohl zur Vermietung als auch im eigenen Einsatz.",
  },
  {
    title: "Junges Unternehmen aus Hagen im Bremischen",
    text: "Kurze Wege, persönlicher Kontakt, direkte Absprachen.",
  },
];

export function WhyVertico() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl mb-8">Warum Vertico?</h2>
      <dl className="grid gap-8 md:grid-cols-2">
        {REASONS.map((reason) => (
          <div key={reason.title} className="border-l-2 border-primary pl-4">
            <dt className="font-heading text-lg uppercase">{reason.title}</dt>
            <dd className="font-body text-sm text-ink mt-1">{reason.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
