"use client";

import { useEffect, useMemo, useState } from "react";
import type { CountryCode } from "libphonenumber-js";
import {
  DEFAULT_PHONE_COUNTRY,
  getCountryPhoneOptions,
} from "@/lib/country-phone-options";

const fieldShell =
  "flex h-10 w-full min-w-0 overflow-hidden rounded-[8px] border bg-white transition-colors duration-150 focus-within:border-[#6161ff]";

const telInput =
  "h-full min-w-0 flex-1 border-0 bg-white px-3 text-[13px] text-[#333333] placeholder-[#676879] outline-none";

type PhoneInputProps = {
  country: CountryCode;
  onCountryChange: (country: CountryCode) => void;
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
  placeholder?: string;
  required?: boolean;
  name?: string;
  countryName?: string;
};

export function PhoneInput({
  country,
  onCountryChange,
  value,
  onChange,
  error,
  placeholder = "Phone number*",
  required = true,
  name = "phone",
  countryName = "phoneCountry",
}: PhoneInputProps) {
  const options = useMemo(() => getCountryPhoneOptions(), []);
  const selected = options.find((opt) => opt.code === country);
  const borderColor = error ? "#730031" : "#c3c6d4";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-w-0 w-full">
      <div className={fieldShell} style={{ borderColor }}>
        <div className="relative flex h-full shrink-0 items-center border-r border-[#c3c6d4] bg-white pl-2 pr-1">
          <img
            src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
            alt=""
            className="pointer-events-none relative z-10 h-3 w-[18px] shrink-0 object-cover"
            aria-hidden="true"
          />
          <span className="pointer-events-none relative z-10 ml-1.5 shrink-0 text-[13px] font-medium leading-none text-[#333333]">
            {selected?.dialCode ?? "+91"}
          </span>
          <svg
            className="pointer-events-none relative z-10 ml-1 h-2.5 w-2.5 shrink-0 text-[#676879]"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <select
            name={countryName}
            value={country}
            onChange={(e) => onCountryChange(e.target.value as CountryCode)}
            aria-label="Country code"
            className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
            suppressHydrationWarning
          >
            {mounted ? (
              options.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.dialCode} {opt.name}
                </option>
              ))
            ) : (
              <option value={country}>{selected?.dialCode ?? "+91"}</option>
            )}
          </select>
        </div>
        <input
          type="tel"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          inputMode="tel"
          autoComplete="tel-national"
          className={telInput}
          aria-invalid={error ? true : undefined}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-[#730031]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export { DEFAULT_PHONE_COUNTRY };
