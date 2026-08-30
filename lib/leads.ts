import type { ResultSetHeader } from "mysql2";
import type { CountryCode } from "libphonenumber-js";
import { validateEmail, validatePhone } from "@/lib/form-validation";
import { getPool } from "@/lib/db";

export const FORM_TYPES = ["contact", "job", "talent", "marketing", "technology"] as const;
export type LeadFormType = (typeof FORM_TYPES)[number];

export type LeadPayload = {
  formType: LeadFormType;
  firstName: string;
  lastName: string;
  email: string;
  phoneCountry: string;
  phone: string;
  jobTitle: string | null;
  companyName: string | null;
  companySize: string | null;
  yearsOfExperience: string | null;
  linkedinUrl: string | null;
  resumeUrl: string | null;
  monthlyBudget: string | null;
  priority: string | null;
  helpWith: string[];
  expectedStart: string | null;
  message: string | null;
  privacyAccepted: boolean;
};

export type LeadValidationError = {
  field: string;
  message: string;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  return value as Record<string, unknown>;
}

function readString(body: Record<string, unknown>, ...keys: string[]): string | null {
  for (const key of keys) {
    const value = body[key];
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed) return trimmed;
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }
  return null;
}

function readBoolean(body: Record<string, unknown>, ...keys: string[]): boolean | null {
  for (const key of keys) {
    const value = body[key];
    if (typeof value === "boolean") return value;
    if (value === 1 || value === "1" || value === "true") return true;
    if (value === 0 || value === "0" || value === "false") return false;
  }
  return null;
}

function readHelpWith(body: Record<string, unknown>): string[] {
  const raw = body.helpWith ?? body.help_with ?? body.interestedTeam ?? body.interested_team;
  if (Array.isArray(raw)) {
    return raw
      .map((item) => (typeof item === "string" ? item.trim() : String(item).trim()))
      .filter(Boolean);
  }
  if (typeof raw === "string" && raw.trim()) {
    return [raw.trim()];
  }
  return [];
}

function truncate(value: string | null, max: number): string | null {
  if (!value) return null;
  return value.length > max ? value.slice(0, max) : value;
}

export function parseLeadPayload(input: unknown): { data?: LeadPayload; errors: LeadValidationError[] } {
  const body = asRecord(input);
  if (!body) {
    return { errors: [{ field: "body", message: "Request body must be a JSON object." }] };
  }

  const errors: LeadValidationError[] = [];
  const formTypeRaw = readString(body, "formType", "form_type");
  const formType = FORM_TYPES.includes(formTypeRaw as LeadFormType)
    ? (formTypeRaw as LeadFormType)
    : null;

  if (!formType) {
    errors.push({
      field: "formType",
      message: `formType is required and must be one of: ${FORM_TYPES.join(", ")}.`,
    });
  }

  const firstName = readString(body, "firstName", "first_name");
  const lastName = readString(body, "lastName", "last_name");
  const email = readString(body, "email", "workEmail", "work_email");
  const phone = readString(body, "phone", "phoneNumber", "phone_number");
  const phoneCountry = (readString(body, "phoneCountry", "phone_country") ?? "IN").toUpperCase();

  if (!firstName) errors.push({ field: "firstName", message: "firstName is required." });
  if (!lastName) errors.push({ field: "lastName", message: "lastName is required." });
  if (!email) {
    errors.push({ field: "email", message: "email is required." });
  } else {
    const emailError = validateEmail(email);
    if (emailError) errors.push({ field: "email", message: emailError });
  }

  if (!phone) {
    errors.push({ field: "phone", message: "phone is required." });
  } else {
    const phoneError = validatePhone(phone, phoneCountry as CountryCode);
    if (phoneError) errors.push({ field: "phone", message: phoneError });
  }

  if (phoneCountry.length !== 2) {
    errors.push({ field: "phoneCountry", message: "phoneCountry must be a 2-letter ISO country code." });
  }

  const jobTitle = readString(body, "jobTitle", "job_title");
  const companyName = readString(body, "companyName", "company_name");
  const companySize = readString(body, "companySize", "company_size");
  const yearsOfExperience = readString(body, "yearsOfExperience", "years_of_experience", "experience");
  const linkedinUrl = readString(body, "linkedinUrl", "linkedin_url", "linkedin");
  const resumeUrl = readString(body, "resumeUrl", "resume_url");
  const monthlyBudget = readString(body, "monthlyBudget", "monthly_budget");
  const priority = readString(body, "priority");
  const expectedStart = readString(body, "expectedStart", "expected_start");
  const message = readString(body, "message");
  const helpWith = readHelpWith(body);
  const privacyAccepted = readBoolean(body, "privacyAccepted", "privacy_accepted") ?? true;

  if (formType === "contact") {
    if (!companyName) errors.push({ field: "companyName", message: "companyName is required for contact." });
    if (helpWith.length === 0) errors.push({ field: "helpWith", message: "helpWith is required for contact." });
    if (!priority) errors.push({ field: "priority", message: "priority is required for contact." });
  }

  if (formType === "job") {
    if (!jobTitle) errors.push({ field: "jobTitle", message: "jobTitle is required for job." });
    if (!yearsOfExperience) {
      errors.push({ field: "yearsOfExperience", message: "yearsOfExperience is required for job." });
    }
    if (!linkedinUrl) errors.push({ field: "linkedinUrl", message: "linkedinUrl is required for job." });
    if (!resumeUrl) errors.push({ field: "resumeUrl", message: "resumeUrl is required for job." });
    if (helpWith.length === 0) {
      errors.push({ field: "helpWith", message: "helpWith (interested team) is required for job." });
    }
    if (!expectedStart) {
      errors.push({ field: "expectedStart", message: "expectedStart is required for job." });
    }
  }

  if (formType === "talent" || formType === "technology") {
    if (!companyName) {
      errors.push({ field: "companyName", message: `companyName is required for ${formType}.` });
    }
    if (helpWith.length === 0) {
      errors.push({ field: "helpWith", message: `helpWith is required for ${formType}.` });
    }
    if (!expectedStart) {
      errors.push({ field: "expectedStart", message: `expectedStart is required for ${formType}.` });
    }
  }

  // Marketing ContactEnquiryForm requires budget/start; marketing homepage CTA uses priority instead.
  if (formType === "marketing") {
    if (!companyName) {
      errors.push({ field: "companyName", message: "companyName is required for marketing." });
    }
    if (helpWith.length === 0) {
      errors.push({ field: "helpWith", message: "helpWith is required for marketing." });
    }
    if (!expectedStart && !priority) {
      errors.push({
        field: "expectedStart",
        message: "expectedStart or priority is required for marketing.",
      });
    }
  }

  if (errors.length > 0 || !formType || !firstName || !lastName || !email || !phone) {
    return { errors };
  }

  return {
    data: {
      formType,
      firstName: truncate(firstName, 100)!,
      lastName: truncate(lastName, 100)!,
      email: truncate(email, 254)!,
      phoneCountry,
      phone: truncate(phone, 20)!,
      jobTitle: truncate(jobTitle, 150),
      companyName: truncate(companyName, 200),
      companySize: truncate(companySize, 20),
      yearsOfExperience: truncate(yearsOfExperience, 50),
      linkedinUrl: truncate(linkedinUrl, 500),
      resumeUrl: truncate(resumeUrl, 1000),
      monthlyBudget: truncate(monthlyBudget, 50),
      priority: truncate(priority, 100),
      helpWith,
      expectedStart: truncate(expectedStart, 50),
      message,
      privacyAccepted,
    },
    errors: [],
  };
}

export async function insertLead(lead: LeadPayload): Promise<number> {
  const pool = await getPool();
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO leads (
      form_type,
      first_name,
      last_name,
      email,
      phone_country,
      phone,
      job_title,
      company_name,
      company_size,
      years_of_experience,
      linkedin_url,
      resume_url,
      monthly_budget,
      priority,
      help_with,
      expected_start,
      message,
      privacy_accepted
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      lead.formType,
      lead.firstName,
      lead.lastName,
      lead.email,
      lead.phoneCountry,
      lead.phone,
      lead.jobTitle,
      lead.companyName,
      lead.companySize,
      lead.yearsOfExperience,
      lead.linkedinUrl,
      lead.resumeUrl,
      lead.monthlyBudget,
      lead.priority,
      JSON.stringify(lead.helpWith),
      lead.expectedStart,
      lead.message,
      lead.privacyAccepted ? 1 : 0,
    ]
  );

  return result.insertId;
}
