"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle", errors: {} };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <p className="font-body border border-primary p-6 rounded-[var(--radius-sharp)]">
        Danke für Ihre Nachricht. Wir melden uns so schnell wie möglich zurück.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-lg">
      <label className="flex flex-col gap-1">
        <span className="font-body text-sm">Name</span>
        <input name="name" type="text" className="border border-border p-3 rounded-[var(--radius-sharp)]" />
        {state.errors.name && <span className="text-sm text-primary">{state.errors.name}</span>}
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-body text-sm">E-Mail</span>
        <input name="email" type="email" className="border border-border p-3 rounded-[var(--radius-sharp)]" />
        {state.errors.email && <span className="text-sm text-primary">{state.errors.email}</span>}
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-body text-sm">Telefon (optional)</span>
        <input name="phone" type="tel" className="border border-border p-3 rounded-[var(--radius-sharp)]" />
      </label>

      <label className="flex flex-col gap-1">
        <span className="font-body text-sm">Nachricht</span>
        <textarea name="message" rows={5} className="border border-border p-3 rounded-[var(--radius-sharp)]" />
        {state.errors.message && <span className="text-sm text-primary">{state.errors.message}</span>}
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
