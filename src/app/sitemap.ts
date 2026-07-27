import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vertico-spezialtechnik.de";
  const routes = [
    "",
    "/maschinenverleih",
    "/baumfaellung-heckenschnitt",
    "/kletter-hoehenarbeiten",
    "/kontakt",
    "/datenschutz",
    "/impressum",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
