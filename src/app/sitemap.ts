import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vertico-spezialtechnik.de";
  const routes = [
    "",
    "/windenergie-rotorblattservice",
    "/windenergie-rotorblattservice/rotorblattinspektionen",
    "/windenergie-rotorblattservice/rotorblattinstandsetzung",
    "/windenergie-rotorblattservice/technische-gutachten-consulting",
    "/windenergie-rotorblattservice/zugangstechnik-verfahrensmethoden",
    "/baumfaellung-spezialfaellung",
    "/maschinen-geraetevermietung",
    "/ueber-vertico",
    "/kontakt",
    "/datenschutz",
    "/impressum",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
