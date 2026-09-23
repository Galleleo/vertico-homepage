export const COMPANY = {
  name: "Vertico – Bremische Spezialtechnik",
  owner: "Swantje Lenz",
  street: "Lehnstedter Weg 12",
  zip: "27628",
  city: "Hagen im Bremischen",
  email: "info@vertico-spezialtechnik.de",
  phone: "+49 1514 0154403",
} as const;

export const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/windenergie-rotorblattservice", label: "Windenergie & Rotorblattservice" },
  { href: "/baumfaellung-spezialfaellung", label: "Baumfällung & Spezialfällung" },
  { href: "/maschinen-geraetevermietung", label: "Maschinen- & Gerätevermietung" },
  { href: "/ueber-vertico", label: "Über VERTICO" },
  { href: "/kontakt", label: "Kontakt" },
];

export const WINDENERGIE_SUBPAGES: { slug: string; title: string; teaser: string }[] = [
  {
    slug: "rotorblattinspektionen",
    title: "Rotorblattinspektionen",
    teaser:
      "WKP, ZOP, IBN, EGL und Blitzschutzsystemprüfung – die wiederkehrenden und anlassbezogenen Prüfungen für Ihre Rotorblätter.",
  },
  {
    slug: "rotorblattinstandsetzung",
    title: "Rotorblattinstandsetzung",
    teaser:
      "Strukturelle Reparaturen, Vorderkantenschutzsysteme, Blitzschadeninstandsetzung und individuelle Instandsetzungslösungen.",
  },
  {
    slug: "technische-gutachten-consulting",
    title: "Technische Gutachten & Consulting",
    teaser:
      "Technisches Consulting, Schadenklassifizierung, Ursachenanalyse und fundierte technische Gutachtenerstellung.",
  },
  {
    slug: "zugangstechnik-verfahrensmethoden",
    title: "Zugangstechnik & Verfahrensmethoden",
    teaser:
      "Seilzugangstechnik, Rotorblattbefahranlagen und ergänzend drohnengestützte Sichtinspektion.",
  },
];
