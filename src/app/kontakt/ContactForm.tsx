"use client";

import { useState, type FormEvent } from "react";
import {
  validateContactForm,
  type ContactFormErrors,
} from "@/lib/contact-validation";

export function ContactForm() {
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const input = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const validationErrors = validateContactForm(input);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: echten Versand anbinden (z. B. E-Mail-Zustellung). Aktuell wird die
      // Anfrage nur validiert und nicht weitergeleitet.
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <p
        role="status"
        className="font-body border border-primary p-6 rounded-[var(--radius-sharp)]"
      >
        Danke für Ihre Nachricht. Wir melden uns so schnell wie möglich zurück.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
      <label htmlFor="name" className="flex flex-col gap-1">
        <span className="font-body text-sm">Name</span>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="border border-border p-3 rounded-[var(--radius-sharp)]"
        />
        {errors.name && (
          <span id="name-error" role="alert" className="text-sm text-red-700">
            {errors.name}
          </span>
        )}
      </label>

      <label htmlFor="email" className="flex flex-col gap-1">
        <span className="font-body text-sm">E-Mail</span>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="border border-border p-3 rounded-[var(--radius-sharp)]"
        />
        {errors.email && (
          <span id="email-error" role="alert" className="text-sm text-red-700">
            {errors.email}
          </span>
        )}
      </label>

      <label htmlFor="phone" className="flex flex-col gap-1">
        <span className="font-body text-sm">Telefon (optional)</span>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="border border-border p-3 rounded-[var(--radius-sharp)]"
        />
      </label>

      <label htmlFor="message" className="flex flex-col gap-1">
        <span className="font-body text-sm">Nachricht</span>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="border border-border p-3 rounded-[var(--radius-sharp)]"
        />
        {errors.message && (
          <span id="message-error" role="alert" className="text-sm text-red-700">
            {errors.message}
          </span>
        )}
      </label>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors disabled:opacity-50"
      >
        Nachricht senden
      </button>
    </form>
  );
}
