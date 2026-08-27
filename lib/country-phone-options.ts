import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";

export type CountryPhoneOption = {
  code: CountryCode;
  name: string;
  dialCode: string;
};

export const DEFAULT_PHONE_COUNTRY: CountryCode = "IN";

let cachedOptions: CountryPhoneOption[] | null = null;

/** Stable English labels — Intl.DisplayNames differs between Node and browsers (e.g. FK). */
const REGION_NAME_OVERRIDES: Partial<Record<CountryCode, string>> = {
  FK: "Falkland Islands",
};

export function getCountryPhoneOptions(): CountryPhoneOption[] {
  if (cachedOptions) return cachedOptions;

  const displayNames = new Intl.DisplayNames(["en"], { type: "region" });

  cachedOptions = getCountries()
    .map((code) => ({
      code,
      name: REGION_NAME_OVERRIDES[code] ?? displayNames.of(code) ?? code,
      dialCode: `+${getCountryCallingCode(code)}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return cachedOptions;
}
