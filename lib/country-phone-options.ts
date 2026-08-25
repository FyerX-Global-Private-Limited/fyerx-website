import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";

export type CountryPhoneOption = {
  code: CountryCode;
  name: string;
  dialCode: string;
};

export const DEFAULT_PHONE_COUNTRY: CountryCode = "IN";

let cachedOptions: CountryPhoneOption[] | null = null;

export function getCountryPhoneOptions(): CountryPhoneOption[] {
  if (cachedOptions) return cachedOptions;

  const displayNames = new Intl.DisplayNames(["en"], { type: "region" });

  cachedOptions = getCountries()
    .map((code) => ({
      code,
      name: displayNames.of(code) ?? code,
      dialCode: `+${getCountryCallingCode(code)}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return cachedOptions;
}
