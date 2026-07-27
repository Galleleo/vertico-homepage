export type ContactFormInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(input: ContactFormInput): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (input.name.trim().length === 0) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  }

  if (!EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }

  if (input.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).";
  }

  return errors;
}
