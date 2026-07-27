"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", errors: {} };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
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
    <form action={formAction} className="flex flex-col gap-4 max-w-lg">
      <label htmlFor="name" className="flex flex-col gap-1">
        <span className="font-body text-sm">Name</span>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={Boolean(state.errors.name)}
          aria-describedby={state.errors.name ? "name-error" : undefined}
          className="border border-border p-3 rounded-[var(--radius-sharp)]"
        />
        {state.errors.name && (
          <span id="name-error" role="alert" className="text-sm text-red-700">
            {state.errors.name}
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
          aria-invalid={Boolean(state.errors.email)}
          aria-describedby={state.errors.email ? "email-error" : undefined}
          className="border border-border p-3 rounded-[var(--radius-sharp)]"
        />
        {state.errors.email && (
          <span id="email-error" role="alert" className="text-sm text-red-700">
            {state.errors.email}
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
          aria-invalid={Boolean(state.errors.message)}
          aria-describedby={state.errors.message ? "message-error" : undefined}
          className="border border-border p-3 rounded-[var(--radius-sharp)]"
        />
        {state.errors.message && (
          <span id="message-error" role="alert" className="text-sm text-red-700">
            {state.errors.message}
          </span>
        )}
      </label>

      <button
        type="submit"
        disabled={pending}
        className="bg-primary hover:bg-primary-hover text-on-dark font-body px-6 py-3 rounded-[var(--radius-sharp)] transition-colors disabled:opacity-50"
      >
        {pending ? "Wird gesendet…" : "Nachricht senden"}
      </button>
    </form>
  );
}
