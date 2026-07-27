import { describe, it, expect } from "vitest";
import { validateContactForm } from "./contact-validation";

describe("validateContactForm", () => {
  it("returns no errors for valid input with optional phone omitted", () => {
    const errors = validateContactForm({
      name: "Max Mustermann",
      email: "max@example.com",
      phone: "",
      message: "Ich benötige einen Kostenvoranschlag für eine Baumfällung.",
    });
    expect(errors).toEqual({});
  });

  it("requires a name", () => {
    const errors = validateContactForm({
      name: "",
      email: "max@example.com",
      phone: "",
      message: "Testnachricht mit ausreichend Länge.",
    });
    expect(errors.name).toBe("Bitte geben Sie Ihren Namen an.");
  });

  it("rejects an invalid email address", () => {
    const errors = validateContactForm({
      name: "Max Mustermann",
      email: "not-an-email",
      phone: "",
      message: "Testnachricht mit ausreichend Länge.",
    });
    expect(errors.email).toBe("Bitte geben Sie eine gültige E-Mail-Adresse an.");
  });

  it("requires a message of at least 10 characters", () => {
    const errors = validateContactForm({
      name: "Max Mustermann",
      email: "max@example.com",
      phone: "",
      message: "zu kurz",
    });
    expect(errors.message).toBe("Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).");
  });
});
