import { buildMetadata } from "@/lib/metadata";
import { CtaButton } from "@/components/CtaButton";

export const metadata = buildMetadata({
  title: "Seite nicht gefunden",
  description: "Die aufgerufene Seite konnte nicht gefunden werden.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-start gap-4">
      <h1 className="text-4xl md:text-5xl">Seite nicht gefunden</h1>
      <p className="font-body max-w-xl">
        Die von Ihnen aufgerufene Seite existiert leider nicht oder wurde verschoben.
      </p>
      <CtaButton href="/">Zurück zur Startseite</CtaButton>
    </div>
  );
}
