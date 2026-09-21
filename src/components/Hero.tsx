import Image from "next/image";
import { CtaButton } from "./CtaButton";

const BUSINESS_LINES = [
  "Windenergie & Rotorblattservice",
  "Baumfällung & Spezialfällung",
  "Maschinen- & Gerätevermietung",
];

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] mobile-landscape:h-auto mobile-landscape:min-h-0 mobile-landscape:py-10 w-full flex items-end bg-ink overflow-hidden">
      <Image
        src="/images/hero-banner.jpg"
        alt="Seilzugangstechniker bei der Arbeit an einer Windkraftanlage vor Hügellandschaft mit Windrädern"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_38%] mobile-landscape:object-[55%_45%] md:object-[55%_center] lg:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_110%_85%_at_0%_100%,rgba(26,37,47,0.85)_0%,rgba(26,37,47,0.5)_35%,rgba(26,37,47,0)_65%)] mobile-landscape:bg-[radial-gradient(ellipse_200%_200%_at_0%_100%,rgba(26,37,47,0.88)_0%,rgba(26,37,47,0.62)_45%,rgba(26,37,47,0)_80%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 mobile-landscape:pb-4 text-on-dark">
        <h1 className="text-4xl md:text-6xl mobile-landscape:text-3xl max-w-2xl text-balance">
          Spezialtechnik in der Höhe – sicher, präzise und verlässlich.
        </h1>
        <ul className="font-body mt-4 mobile-landscape:mt-2 max-w-xl space-y-1">
          {BUSINESS_LINES.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="mt-6 mobile-landscape:mt-3">
          <CtaButton href="/kontakt">Kontakt aufnehmen</CtaButton>
        </div>
      </div>
    </section>
  );
}
