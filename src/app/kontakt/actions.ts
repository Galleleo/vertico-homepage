"use server";

import {
  validateContactForm,
  type ContactFormInput,
  type ContactFormErrors,
} from "@/lib/contact-validation";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors: ContactFormErrors;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const input: ContactFormInput = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const errors = validateContactForm(input);

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  // TODO: echten Versand anbinden (z. B. E-Mail-Zustellung). Aktuell wird die
  // Anfrage nur validiert und nicht weitergeleitet.

  return { status: "success", errors: {} };
}
