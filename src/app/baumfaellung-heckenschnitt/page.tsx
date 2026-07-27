import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Baumfällung & Heckenschnitt",
  description:
    "Baumfällung bevorzugt in Seilzugangstechnik oder mit dem Steiger, dazu Heckenschnitt, Grünpflege sowie Kronensicherung und Kronenpflege.",
  path: "/baumfaellung-heckenschnitt",
});

export default function BaumfaellungPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl md:text-5xl mb-6">Baumfällung & Heckenschnitt</h1>
      <p className="font-body max-w-2xl mb-8">
        Wir fällen bevorzugt in Seilzugangstechnik oder mit dem Steiger – dort, wo schwere
        Technik nicht hinkommt oder ein kontrollierter Rückbau nötig ist. Kein „wildes“
        Fällen, sondern geplantes Arbeiten mit zertifizierten Seiltechnikern.
      </p>

      <div className="relative h-72 md:h-96 w-full mb-12">
        <Image
          src="/images/baumfaellung-winter-2.jpg"
          alt="Baumkletterer in Seilzugangstechnik arbeitet hoch oben an der Krone einer hohen Fichte, darunter ein Mitarbeiter am Boden, mehrere Wohnhäuser im Hintergrund, kahle Winterbäume"
          fill
          sizes="(min-width: 768px) 1152px, 100vw"
          className="object-cover object-[50%_15%] rounded-[var(--radius-sharp)]"
        />
      </div>

      <ul className="font-body list-disc list-inside mb-12 space-y-1">
        <li>Baumfällung in Seilzugangstechnik oder mit der Hubarbeitsbühne</li>
        <li>Heckenschnitt und Grünpflege</li>
        <li>Kronensicherung und Kronenpflege</li>
      </ul>

      <Link
        href="/kontakt"
        className="inline-block bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors"
      >
        Baumarbeiten anfragen
      </Link>
    </div>
  );
}
