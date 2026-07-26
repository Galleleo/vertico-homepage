# Vertico – Bremische Spezialtechnik: Website-Neubau (Design-Spec)

Datum: 2026-07-26

## 1. Ziel

Neubau der Website für **Vertico – Bremische Spezialtechnik** (Inhaberin: Swantje Lenz, Hagen im Bremischen) als moderne, lokale Version — Ablösung der bestehenden WordPress-Seite (https://vertico-spezialtechnik.de/). Ziel ist ein hochwertiger, unverwechselbarer Eindruck ("technisch-präzise", Handwerkerbetrieb, kein Startup-Bla), kein generisches Template-Ergebnis.

Claim: **"Alles, was hoch hinaus muss."**

## 2. Unternehmensdaten (echt, für Impressum/Kontakt/Datenschutz)

- Vollständiger Name: Vertico – Bremische Spezialtechnik
- Inhaberin: Swantje Lenz
- Adresse: Lehnstedter Weg 12, 27628 Hagen im Bremischen
- E-Mail (auch für Datenschutzanfragen): s.lenz@vertico-spezialtechnik.de
- Telefon: +49 1514 0154403

Diese Daten werden real ins Impressum, in die Kontaktseite und in die Datenschutzerklärung eingetragen — keine Platzhalter mehr für diese Felder. Offene Platzhalter bleiben ausschließlich:
- Finales transparentes Logo (PNG/SVG) — bis dahin nachgebaute Inline-SVG-Variante
- Fotos für Maschinenverleih-Geräte (Großraumtrockner, Kompressor, Rüttelplatte) — bis dahin Linien-Icons
- Echter Formularversand im Kontaktformular — bis dahin Server-Action-Platzhalter mit UI-Erfolgsstatus

## 3. Tech-Stack

- **Next.js 15**, App Router, TypeScript, statisch generierte Seiten (keine echte Backend-Anbindung nötig)
- **Tailwind CSS 4** mit eigenen Design-Tokens (keine Standardfarben/-radien)
- **Fonts selbst gehostet**: Oswald (600/700) + Work Sans (400/500/600) als lokale `woff2`-Dateien über `next/font/local` — keine Laufzeitanfrage an Google/Bunny
- **Bilder**: aus `images/` nach `public/images/` übernommen, sprechend umbenannt, über `next/image` mit Pflicht-Alt-Texten
- **Git**: Repo wird initialisiert, dieser Spec ist der erste Commit
- **Kontaktformular**: Next.js Server Action als Platzhalter (Validierung + UI-Erfolgsstatus, kein echter Versand — im Code klar kommentiert)

## 4. Design-System

**Farben:**
- `--color-ink: #1a252f` — Haupttext
- `--color-primary: #2c3e50` — Buttons/Akzente/Icons
- `--color-primary-hover: #1a252f`
- `--color-surface: #ffffff`, `--color-surface-alt: #f4f5f6`
- `--color-border: #d8dce0`
- `--color-on-dark: #eef1f3` — Text auf dunklen Flächen (z. B. Footer in `#1f2d3a`)
- Keine Gelb/Orange-, keine Grün-Akzente — ausschließlich Schiefer-/Marineblau-Abstufungen

**Typografie:**
- Oswald für H1–H3, groß geschrieben, enger Zeilenabstand
- Work Sans für Fließtext/Labels/Formulare
- Genau eine H1 pro Seite

**Look & Feel:**
- Kantige Buttons/Karten (max. 2px Radius), dünne 1px-Trennlinien statt Schatten-Karten
- Leistungs-Kacheln: Foto/Icon → Oswald-Titel → kurze Beschreibung → unterer Rand wird bei Hover zur Primärfarbe
- Sparsame Motion: Hover-Farbwechsel, sanftes Fade-in beim Scrollen — keine verspielten Bounce-Effekte
- Fixierte Header-Navigation, auf Mobile Hamburger mit Vollbild-Overlay (Nav bricht nie um)

**Logo-Strategie:**
Nachgebautes Inline-SVG (Baum + umgedrehtes Stahlfachwerk-Dreieck + Pfeil im Stamm) für Header/Footer/Favicon, da noch keine transparente Originaldatei existiert. Vorhandene Rasterversion (`header_logo_700x280.png`) dient als visuelle Referenz und optional als Bildvariante an geeigneten Stellen (z. B. Startseiten-Hero-Ecke).

## 5. Seitenstruktur & Routen

```
/                              Startseite
/maschinenverleih               Leistungsseite 1
/baumfaellung-heckenschnitt      Leistungsseite 2
/kletter-hoehenarbeiten          Leistungsseite 3
/kontakt                        Kontaktformular
/datenschutz                    Datenschutzerklärung
/impressum                      Impressum
```

**Startseite:**
1. Hero: KI-generiertes Banner-Bild, H1 = Claim, kurzer Intro-Text, CTA "Kontakt aufnehmen" → `/kontakt`
2. Drei Leistungs-Teaser in Priorität: Maschinenverleih → Baumfällung & Heckenschnitt → Kletter- & Höhenarbeiten
3. "Warum Vertico?" — zertifizierte Mitarbeiter, Sicherheit zuerst (Seilzugang/Steiger statt "wild" gefällt), geprüfte Maschinen, junges Unternehmen aus Hagen im Bremischen
4. Kompakter Kontakt-Bereich mit Link zur Kontaktseite

**Leistungsseiten** (gleiche Grundstruktur, eigenes Meta/H1):
- Maschinenverleih: Einleitung, Geräteliste (Großraumtrockner, Kompressor, Rüttelplatte, "weitere auf Anfrage") mit Linien-Icons, USPs (geprüft & gewartet, kurz-/langfristige Miete, persönliche Beratung), CTA
- Baumfällung & Heckenschnitt: Einleitung mit Betonung Seilzugangstechnik/Steiger, Heckenschnitt/Grünpflege, Kronensicherung/-pflege, mind. 1 reales Winterfoto eines Kletterers, CTA
- Kletter- & Höhenarbeiten: Einleitung allgemein zu Seilzugang/Höhenarbeiten, Windkraftwartung als ein Punkt unter mehreren (dezent, kein Windkraft-Schwerpunkt), Arbeiten an schwer zugänglichen Bauwerken, mind. 1 reales Foto vom Windrad-Seilzugang, CTA

**Kontakt:** Formular (Name, E-Mail, Telefon optional, Nachricht), echte Kontaktdaten aus Abschnitt 2, Server-Action-Platzhalter mit UI-Erfolgsstatus

**Datenschutz/Impressum:** Vollständige Struktur mit echten Unternehmensdaten; Abschnitte zu Serverlogs, Kontaktformular-Datenverarbeitung, Cookies, selbst gehostete Schriftarten, Betroffenenrechte

**Footer (global):** Logo (SVG), Adresse, Nav-Links, Datenschutz/Impressum

## 6. Bildmaterial (aus `images/`)

- Hero: KI-generiertes Banner (Kletterer + Drohne + Windräder vor Hügellandschaft) → `hero-banner.jpg`
- Baumfällung-Seite: Winterfoto Kletterer im kahlen Baum → `baumfaellung-winter-1.jpg` (+ 1–2 weitere Kletterfotos als Ergänzung möglich)
- Kletter-/Höhenarbeiten-Seite: Foto Seilzugangstechniker am Rotorblatt → `windkraft-seilzugang-1.jpg`
- Maschinenverleih: keine Fotos vorhanden → Linien-Icons pro Gerät (TODO-Kommentar im Code: "Fotos folgen")
- Logo-Referenz: `header_logo_700x280.png` als Bildvariante, primäre Nutzung über nachgebautes Inline-SVG

## 7. SEO & Barrierefreiheit

- Pro Seite eigener `<title>` und Meta-Description über Next.js `generateMetadata`
- Genau eine H1 pro Seite, saubere Heading-Hierarchie
- Alt-Texte für alle Bilder (inhaltlich beschreibend, z. B. "Baumkletterer in Seilzugangstechnik bei winterlicher Kronenpflege")
- Ausreichender Kontrast (dunkle Buttons `#2c3e50`/`#1a252f` auf hellem Grund geprüft)
- Kein Cookie-Banner nötig (keine Analytics/Tracking-Skripte eingebunden)

## 8. Offene Punkte (im Code als TODO markiert)

- Finales transparentes Logo (PNG/SVG) einsetzen, sobald geliefert
- Echte Fotos für Maschinenverleih-Geräte einbinden, sobald vorhanden
- Echten Formularversand (E-Mail-Zustellung o. ä.) an die Server-Action anschließen
