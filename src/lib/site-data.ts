export const COMPANY = {
  name: "Vertico – Bremische Spezialtechnik",
  owner: "Swantje Lenz",
  street: "Lehnstedter Weg 12",
  zip: "27628",
  city: "Hagen im Bremischen",
  email: "s.lenz@vertico-spezialtechnik.de",
  phone: "+49 1514 0154403",
} as const;

export const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/maschinenverleih", label: "Maschinenverleih" },
  { href: "/baumfaellung-heckenschnitt", label: "Baumfällung & Heckenschnitt" },
  { href: "/kletter-hoehenarbeiten", label: "Kletter- & Höhenarbeiten" },
  { href: "/kontakt", label: "Kontakt" },
];
