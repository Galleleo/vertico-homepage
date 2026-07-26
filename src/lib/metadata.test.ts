import { describe, it, expect } from "vitest";
import { buildMetadata } from "./metadata";

describe("buildMetadata", () => {
  it("builds a title with the site suffix and an absolute canonical path", () => {
    const meta = buildMetadata({
      title: "Maschinenverleih",
      description: "Geprüfte Maschinen zur Miete.",
      path: "/maschinenverleih",
    });

    expect(meta.title).toBe("Maschinenverleih | Vertico – Bremische Spezialtechnik");
    expect(meta.description).toBe("Geprüfte Maschinen zur Miete.");
    expect(meta.alternates?.canonical).toBe("/maschinenverleih");
  });

  it("uses the bare site name for the home page path", () => {
    const meta = buildMetadata({
      title: "Startseite",
      description: "Alles, was hoch hinaus muss.",
      path: "/",
    });

    expect(meta.title).toBe("Vertico – Bremische Spezialtechnik");
  });
});
