import type { LeadFormType, LeadPayload } from "@/lib/leads";

/** Inline attachment CID used by nodemailer for the header logo. */
export const LEAD_EMAIL_LOGO_CID = "fyerx-logo";

const FORM_LABELS: Record<LeadFormType, string> = {
  contact: "Contact our team",
  job: "Job application",
  talent: "Talent enquiry",
  marketing: "Marketing enquiry",
  technology: "Technology enquiry",
};

const PRIORITY_LABELS: Record<string, string> = {
  "generate-demand": "Generate demand",
  "hire-talent": "Hire talent",
  "modernise-technology": "Modernise technology",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPriority(value: string | null): string | null {
  if (!value) return null;
  return PRIORITY_LABELS[value] ?? value.replace(/-/g, " ");
}

function row(label: string, value: string | null | undefined): string {
  if (!value?.trim()) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e8eef5;width:38%;vertical-align:top;font-size:13px;color:#5a6a7d;font-family:Arial,Helvetica,sans-serif;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #e8eef5;vertical-align:top;font-size:14px;color:#101014;font-family:Arial,Helvetica,sans-serif;word-break:break-word;">
        ${escapeHtml(value)}
      </td>
    </tr>`;
}

function linkRow(label: string, href: string | null): string {
  if (!href?.trim()) return "";
  const safeHref = escapeHtml(href);
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e8eef5;width:38%;vertical-align:top;font-size:13px;color:#5a6a7d;font-family:Arial,Helvetica,sans-serif;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #e8eef5;vertical-align:top;font-size:14px;font-family:Arial,Helvetica,sans-serif;word-break:break-word;">
        <a href="${safeHref}" style="color:#1f5c99;text-decoration:underline;">${safeHref}</a>
      </td>
    </tr>`;
}

export function leadEmailSubject(lead: LeadPayload, id: number): string {
  return `New ${FORM_LABELS[lead.formType]} #${id} — ${lead.firstName} ${lead.lastName}`;
}

export function leadEmailHtml(lead: LeadPayload, id: number): string {
  const formLabel = FORM_LABELS[lead.formType];
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
  const helpWith = lead.helpWith.length > 0 ? lead.helpWith.join(", ") : null;
  const phone = `${lead.phoneCountry} ${lead.phone}`.trim();
  const year = new Date().getFullYear();
  const websiteUrl = "https://fyerx.com/";

  const rows = [
    row("Lead ID", String(id)),
    row("Form", formLabel),
    row("Submitted", `${submittedAt} IST`),
    row("First name", lead.firstName),
    row("Last name", lead.lastName),
    row("Email", lead.email),
    row("Phone", phone),
    row("Job title", lead.jobTitle),
    row("Company", lead.companyName),
    row("Company size", lead.companySize),
    row("Years of experience", lead.yearsOfExperience),
    linkRow("LinkedIn", lead.linkedinUrl),
    linkRow("Resume", lead.resumeUrl),
    row("Monthly budget", lead.monthlyBudget),
    row("Priority", formatPriority(lead.priority)),
    row("Help with", helpWith),
    row("Expected start", lead.expectedStart),
    row("Message", lead.message),
  ].join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(leadEmailSubject(lead, id))}</title>
  <style>
    @media only screen and (max-width: 620px) {
      .container { width: 100% !important; }
      .px { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#ffffff;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" class="container" width="600" cellspacing="0" cellpadding="0" style="width:600px;max-width:600px;background:#ffffff;border:2px solid #730031;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(115,0,49,0.12);">
          <tr>
            <td style="background:#ffffff;padding:20px 28px 16px;border-bottom:1px solid #e8eef5;">
              <a href="${websiteUrl}" style="text-decoration:none;">
                <img
                  src="cid:${LEAD_EMAIL_LOGO_CID}"
                  alt="FyerX"
                  width="140"
                  height="32"
                  style="display:block;width:140px;max-width:50%;height:auto;border:0;outline:none;"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td style="background:#730031;padding:22px 28px;">
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.3;color:#ffffff;font-weight:700;">
                New lead received
              </h1>
            </td>
          </tr>
          <tr>
            <td class="px" style="padding:20px 28px 8px;">
              <span style="display:inline-block;background:#e8f1fb;color:#0b2e59;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;padding:6px 10px;border-radius:999px;">
                ${escapeHtml(formLabel)}
              </span>
              <p style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#3d4a5c;">
                ${escapeHtml(lead.firstName)} ${escapeHtml(lead.lastName)} submitted the ${escapeHtml(formLabel.toLowerCase())} form.
              </p>
            </td>
          </tr>
          <tr>
            <td class="px" style="padding:8px 28px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f7fafc;padding:16px 28px;border-top:1px solid #e8eef5;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#5a6a7d;">
                This notification was sent automatically from the FyerX website. Reply to this email to contact the lead.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#730031;padding:18px 28px;text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#f5d0dc;">
                &copy; ${year} FyerX Global Private Limited. All rights reserved.
              </p>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;">
                <a href="${websiteUrl}" style="color:#ffffff;text-decoration:underline;">${websiteUrl}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function leadEmailText(lead: LeadPayload, id: number): string {
  const lines: Array<[string, string | null | undefined]> = [
    ["Lead ID", String(id)],
    ["Form", FORM_LABELS[lead.formType]],
    ["Name", `${lead.firstName} ${lead.lastName}`],
    ["Email", lead.email],
    ["Phone", `${lead.phoneCountry} ${lead.phone}`],
    ["Job title", lead.jobTitle],
    ["Company", lead.companyName],
    ["Company size", lead.companySize],
    ["Experience", lead.yearsOfExperience],
    ["LinkedIn", lead.linkedinUrl],
    ["Resume", lead.resumeUrl],
    ["Budget", lead.monthlyBudget],
    ["Priority", formatPriority(lead.priority)],
    ["Help with", lead.helpWith.join(", ") || null],
    ["Expected start", lead.expectedStart],
    ["Message", lead.message],
  ];

  return `${lines
    .filter(([, value]) => Boolean(value?.trim()))
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n")}

© ${new Date().getFullYear()} FyerX Global Private Limited. All rights reserved.
https://fyerx.com/`;
}
