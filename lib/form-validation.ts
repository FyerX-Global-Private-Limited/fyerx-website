import { isValidPhoneNumber } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) return "Please enter your email address.";
  if (!EMAIL_PATTERN.test(trimmed) || trimmed.length > 254) {
    return "Please enter a valid email address.";
  }
  return null;
}

export function validatePhone(phone: string, country: CountryCode): string | null {
  const trimmed = phone.trim();
  if (!trimmed) return "Please enter your phone number.";
  try {
    if (!isValidPhoneNumber(trimmed, country)) {
      return "Please enter a valid phone number for the selected country.";
    }
  } catch {
    return "Please enter a valid phone number.";
  }
  return null;
}
