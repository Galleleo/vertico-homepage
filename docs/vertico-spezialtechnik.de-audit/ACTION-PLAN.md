# SEO Action Plan — Vertico Spezialtechnik

## Phase 1: Critical fixes (before/at launch)
- [ ] Decide the final production domain and make `metadataBase` (`src/app/layout.tsx`), `sitemap.ts`, and `robots.ts` agree with it and with the actual deployed URL.
- [ ] Add `LocalBusiness` JSON-LD to the root layout (NAP, `areaServed`, `hasOfferCatalog` once the 3 business lines are finalized).
- [ ] Remove `public/images/.DS_Store`, add `.DS_Store` to `.gitignore`.

## Phase 2: High-impact (ties directly into the content rewrite from the client's emails)
- [ ] Rebuild nav + page structure per client spec: Startseite | Windenergie & Rotorblattservice (+ 4 subpages) | Baumfällung & Spezialfällung | Maschinen- & Gerätevermietung | Über VERTICO | Kontakt.
- [ ] Give every new page a unique H1, H2/H3 structure, individual title, meta description, clean URL, and image alt text (client explicitly asked for this per page).
- [ ] Naturally work the target keyword list into headings/body copy: Rotorblattinspektion, Rotorblattreparatur, Rotorblattinstandsetzung, WKP, ZOP, Inbetriebnahmeprüfung, EGL, Blitzschutzsystemprüfung Rotorblatt, Seilzugangstechnik, Rotorblattbefahranlage, technische Gutachten Windenergie, Baumfällung, Spezialfällung, Maschinenvermietung, Bautrockner mieten, Häcksler mieten, Anhänger mieten, Fassadengerüst mieten.
- [ ] Re-encode `hero-banner.jpg` and the two baumfällung images to WebP/AVIF, well under current file sizes.

## Phase 3: Structured data & authority
- [ ] Add `Service` schema per service page once the new Windenergie/Baumfällung/Maschinen pages exist.
- [ ] Add `BreadcrumbList` schema for the 4 nested Windenergie subpages.
- [ ] Add Impressum DL-InfoV section (client explicitly requested this — item 10 of their first email).

## Phase 4: Monitoring
- [ ] Set up Google Search Console + GA4 once the production domain is live, then re-run the `seo-google` check for real CrUX/indexation data.
- [ ] Re-audit after the content rewrite ships to confirm the content-quality and on-page scores moved.

---
See `FULL-AUDIT-REPORT.md` for full findings and rationale.
