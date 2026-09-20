const REASONS = [
  {
    title: "Zertifizierte Befahr- & Seilzugangstechnik",
    text: "Qualifizierte Fachkräfte und spezialisierte Zugangssysteme für sichere und effiziente Einsätze.",
  },
  {
    title: "Fundierte Rotorblattkompetenz",
    text: "Langjährige Fachkenntnisse in Inspektion, Bewertung und Instandsetzung von Rotorblättern.",
  },
  {
    title: "Individuelle & wirtschaftliche Lösungen",
    text: "Bedarfsgerechte Konzepte mit konsequentem Blick auf Qualität, technische Erfordernisse und Wirtschaftlichkeit.",
  },
];

export function WhyVertico() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl mb-8">Warum VERTICO?</h2>
      <dl className="grid gap-8 md:grid-cols-3">
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
