# SEO Audit — Vertico Spezialtechnik

**Audited:** 2026-09-20
**Live URL crawled:** https://galleleo.github.io/vertico-homepage/ (GitHub Pages, static export)
**Intended canonical domain (per code):** https://vertico-spezialtechnik.de (not yet live — see Critical #1)
**Scope:** 9-page static Next.js brochure site. Audited by direct code + rendered-HTML review rather than a full 500-page crawler pass — the site has 9 routes total, so a lightweight review is a better fit than deploying the full multi-agent crawl pipeline.

## SEO Health Score: 54 / 100

| Category | Score | Weight |
|---|---|---|
| Technical SEO | 55 | 22% |
| Content Quality | 45 | 23% |
| On-Page SEO | 60 | 20% |
| Schema / Structured Data | 0 | 10% |
| Performance (CWV) | 55 | 10% |
| AI Search Readiness | 40 | 10% |
| Images | 65 | 5% |

---

## Top 5 Critical Issues

1. **Canonical domain mismatch.** `metadataBase`, `sitemap.ts`, and `robots.ts` all hard-code `https://vertico-spezialtechnik.de`, but the site is actually served from `https://galleleo.github.io/vertico-homepage/`. Every canonical tag, OG URL, and sitemap entry currently points at a domain that isn't serving this content. If `vertico-spezialtechnik.de` isn't live yet, Google will index the GitHub Pages URL while canonicals claim a different, unreachable domain — a classic indexing trap. *(`src/app/layout.tsx:8`, `src/app/sitemap.ts:6`, `src/app/robots.ts:8`)*
2. **Zero structured data.** No JSON-LD anywhere (confirmed via rendered-page scan: 0 schema blocks). A `LocalBusiness`/`HomeAndConstructionBusiness` schema with NAP, service area, and `hasOfferCatalog` is table stakes for a local trades site and directly supports Google Business Profile / Maps visibility.
3. **Every service page is a single H1 + one paragraph + a bullet list — no H2/H3 structure.** Thin content on exactly the pages meant to rank for the money keywords (`kletter-hoehenarbeiten`, `baumfaellung-heckenschnitt`, `maschinenverleih`). No page currently exceeds ~120 words of body copy.
4. **Missing target keywords entirely.** None of the terms the client wants to rank for — Rotorblattinspektion, Rotorblattreparatur, WKP/ZOP, Inbetriebnahmeprüfung, EGL, Blitzschutzsystemprüfung, Bautrockner mieten, Häcksler mieten — appear anywhere in the current site. The current nav/content model (Kletter- & Höhenarbeiten, Maschinenverleih) doesn't map to the business's actual service structure at all.
5. **`.DS_Store` committed to `public/images/`.** Gets deployed and served publicly at `/images/.DS_Store`. Harmless for SEO but sloppy and should be gitignored.

## Top 5 Quick Wins

1. Add `LocalBusiness` JSON-LD to `layout.tsx` (name, address, phone, geo, `areaServed`, `openingHoursSpecification` if known) — one component, site-wide win.
2. Fix the canonical/base-URL mismatch once the production domain is decided (see Critical #1) — either point `metadataBase`/sitemap/robots at the real GitHub Pages basePath URL, or confirm the custom domain and set up the CNAME/DNS before launch.
3. `hero-banner.jpg` is 712 KB and loaded with `priority` — this is almost certainly the LCP element. Re-encode as WebP/AVIF and target <150 KB; same for `baumfaellung-winter-2.jpg` (398 KB) and `baumfaellung-winter-1.jpg` (312 KB).
4. Remove `public/images/.DS_Store` and add `.DS_Store` to `.gitignore`.
5. `robots.ts` and `sitemap.ts` are static (`export const dynamic = "force-static"`, correct for `output: "export"`), but the sitemap has no `changefreq`/`priority` fields — low-cost to add once page count grows.

---

## Technical SEO

**What works:**
- `robots.ts` allows all crawling, no accidental blocks.
- `sitemap.ts` lists all 7 real routes with no orphans or 404s.
- Static export (`output: "export"`) means every page is pre-rendered HTML — good for crawlability, no JS-rendering dependency (confirmed `is_spa: false` on render check).
- Clean URLs, no query-string routing, no duplicate-content paths.
- `alternates.canonical` is set per-page via `buildMetadata()` — good pattern, just pointed at the wrong domain (see Critical #1).

**Findings:**
| Severity | Finding | Fix |
|---|---|---|
| Critical | Canonical/sitemap/robots domain ≠ live domain | Decide final domain before go-live, then make `metadataBase`/sitemap/robots derive from one shared constant |
| Medium | No security headers (CSP, X-Frame-Options, etc.) | Platform limitation of GitHub Pages static hosting — only fixable by moving to a host that lets you set headers, or adding a `<meta http-equiv>` CSP fallback. Low priority for a static brochure site with no user auth. |
| Low | `basePath: "/vertico-homepage"` is baked into asset URLs | Fine for the current GH Pages subpath deployment; must be reverted to `""` if/when moving to a custom domain at the root — flag this as a pre-launch checklist item |
| Low | `.DS_Store` in `public/images/` is deployed | Remove + gitignore |

## Content Quality

**What works:**
- Copy is in clean, correct German with no filler/AI-tells.
- Company identity (Swantje Lenz, Hagen im Bremischen) is consistent across pages.

**Findings:**
- Every service page (`kletter-hoehenarbeiten`, `baumfaellung-heckenschnitt`, `maschinenverleih`) is under 130 words with a single H1 and no subheadings — thin by any standard, and far short of what's needed to rank for the ~15 target keywords the client listed.
- No E-E-A-T signals: no certifications named beyond "zertifizierte Seiltechniker", no case studies, no team/about content, no reviews/testimonials.
- No internal linking between related content (e.g., nothing links from the homepage's Windkraft-flavored hero image to the höhenarbeiten page's Windkraftanlagen-Wartung content).
- This is the category the upcoming content rewrite (per the client's two emails) will address almost entirely — new dedicated Windenergie subpages (Rotorblattinspektion, -instandsetzung, Gutachten/Consulting, Zugangstechnik) will resolve both the thinness and the missing-keyword problems at once.

## On-Page SEO

**What works:**
- Every page has a unique `<title>` and meta description via `buildMetadata()`.
- Title pattern (`{Page} | {Company}`) is consistent and reasonable length.
- Single H1 per page, no duplicate/missing H1s.

**Findings:**
- No H2/H3 hierarchy on any service page — everything after the H1 is either a paragraph or a flat `<ul>`. Google has nothing to parse for subtopic relevance.
- Meta descriptions are serviceable but don't include the specific technical terms (WKP, ZOP, EGL, etc.) that the client wants to target.
- Internal anchor text is generic ("Zum Kontaktformular") in a few CTAs rather than descriptive.

## Schema / Structured Data

**Score: 0/100.** No `application/ld+json` blocks anywhere on the site (verified via rendered-page structured-data scan — 0 blocks found). Recommended additions once the content restructure lands:
- `LocalBusiness` (or `HomeAndConstructionBusiness`) on every page via root layout — name, address, telephone, `areaServed`, `sameAs` if social profiles exist.
- `Service` schema per service page (Rotorblattinspektion, Baumfällung, Maschinenvermietung) once those pages exist.
- `BreadcrumbList` once the Windenergie section gets nested subpages (4 new subpages under one parent, per the client's nav spec).

## Performance (Core Web Vitals — estimated, no live CrUX data available)

- `hero-banner.jpg` (712 KB) is the likely LCP element on the homepage, loaded `priority` but not size-optimized. This alone is the single biggest performance lever on the site.
- Two more images are 300–400 KB (`baumfaellung-winter-1.jpg`, `baumfaellung-winter-2.jpg`) — same fix.
- Custom `image-loader.ts` is used because of static export + GH Pages — confirm it's not silently skipping Next's automatic format negotiation (WebP/AVIF); if it just proxies to the original file, pre-optimize source files instead.
- No CrUX field data available for this domain (too low-traffic / not indexed under its intended canonical domain yet — ties back to Critical #1).

## Images

**What works:**
- All existing `<Image>` alt text is descriptive and specific (e.g., "Seilzugangstechniker bei der Wartung eines Rotorblatts an einer Windkraftanlage") — genuinely good, keep this standard for new images.
- Decorative images (`drone-cutout.png`, logo icon overlay) are correctly marked `alt=""` + `aria-hidden`.

**Findings:**
- File sizes are large for web delivery (see Performance above).
- Asset gaps for the planned content rewrite: no photos yet exist in the repo for Rotorblattbefahranlage, Häcksler, Bautrockner, Fassadengerüst, Anhänger, or Rüttelplatte — the client's emails reference "vorhandene Originalfotos" for several of these that aren't in `public/images/` yet. Flagging as a dependency, not a current-site defect.

## AI Search Readiness (GEO)

- No `llms.txt` (optional, low priority for a local trades business — AI Overviews and ChatGPT/Perplexity citations lean more on structured data + clear, extractable service descriptions than on `llms.txt`).
- Thin content and missing schema (see above) are the two things actually suppressing citability here — a well-structured `Service` block with a clear one-sentence definition of e.g. "Was ist eine ZOP-Prüfung?" would be directly quotable by AI answer engines. Worth baking into the new Windenergie subpages' copy structure.

---

## Notes on scope

This audit skipped the full crawler/multi-subagent pipeline (500-page crawl, screenshots, PDF report, Lighthouse/CrUX live data, backlink/local-pack analysis) because the site is 9 static routes with no CMS, no backlink history worth analyzing yet, and no Google Search Console/GA4 access configured in this environment. If/when the site is live on its final domain with GSC connected, a follow-up pass with `seo-google` (real CrUX + indexation data) is worth running.
