import { isValidPhoneNumber } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com", "msn.com",
  "yahoo.com", "ymail.com", "rocketmail.com", "aol.com", "icloud.com", "me.com", "mac.com",
  "proton.me", "protonmail.com", "protonmail.ch", "pm.me", "gmx.com", "gmx.net", "gmx.de",
  "mail.com", "yandex.com", "yandex.ru", "qq.com", "163.com", "rediffmail.com", "tuta.com", "tutanota.com",
]);
const REGIONAL_PERSONAL_EMAIL = /^(?:yahoo|hotmail|outlook|live)\.(?:[a-z]{2}|(?:co|com)\.[a-z]{2})$/;
export const WORK_EMAIL_ERROR = "Please use your company email address.";

export function emailDomain(email: string) {
  const trimmed = email.trim();
  return trimmed.slice(trimmed.lastIndexOf("@") + 1).toLowerCase().replace(/\.+$/, "");
}

export function validateWorkEmail(email: string): string | null {
  const error = validateEmail(email);
  if (error) return error;
  const domain = emailDomain(email);
  return PERSONAL_EMAIL_DOMAINS.has(domain) || REGIONAL_PERSONAL_EMAIL.test(domain) ? WORK_EMAIL_ERROR : null;
}

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
