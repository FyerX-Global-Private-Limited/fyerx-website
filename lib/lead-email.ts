import nodemailer from "nodemailer";
import type { LeadPayload } from "@/lib/leads";
import { leadEmailHtml, leadEmailSubject, leadEmailText } from "@/lib/lead-email-template";

const LOG_PREFIX = "[zeptomail]";

type ZeptoMailFrom = {
  name?: string;
  address: string;
};

type ZeptoMailConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: ZeptoMailFrom;
  to: string;
};

const globalForMail = globalThis as unknown as {
  zeptoTransporter?: nodemailer.Transporter;
  zeptoTransporterKey?: string;
};

function mailLog(message: string, error = false) {
  const line = `${LOG_PREFIX} ${message}`;
  if (error) {
    console.error(line);
    return;
  }
  console.log(line);
  if (process.env.NODE_ENV === "production") {
    console.error(line);
  }
}

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.length >= 2)
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFromAddress(raw: string): ZeptoMailFrom | null {
  const value = stripQuotes(raw);
  if (!value) return null;

  const angled = value.match(/^(.*?)\s*<([^>]+)>$/);
  if (angled) {
    const name = stripQuotes(angled[1].trim());
    const address = angled[2].trim();
    if (!address.includes("@")) return null;
    return name ? { name, address } : { address };
  }

  if (!value.includes("@")) return null;
  return { address: value };
}

function formatFrom(from: ZeptoMailFrom): string {
  return from.name ? `${from.name} <${from.address}>` : from.address;
}

function getZeptoMailConfig(): ZeptoMailConfig | null {
  const host = process.env.ZEPTOMAIL_HOST?.trim() || "smtp.zeptomail.in";
  const port = Number(process.env.ZEPTOMAIL_PORT ?? 587);
  const user = process.env.ZEPTOMAIL_API_USER?.trim() || "emailapikey";
  const pass = process.env.ZEPTOMAIL_API_KEY?.trim();
  const to = process.env.LEAD_EMAIL_TO?.trim();
  const parsedFrom = process.env.ZEPTOMAIL_FROM
    ? parseFromAddress(process.env.ZEPTOMAIL_FROM)
    : null;
  const address = (process.env.ZEPTOMAIL_FROM_EMAIL?.trim() || parsedFrom?.address || "").toLowerCase();
  const name = process.env.ZEPTOMAIL_FROM_NAME?.trim() || parsedFrom?.name || "Fyerx Team";

  if (!pass || !address || !to || Number.isNaN(port)) {
    return null;
  }

  return { host, port, user, pass, from: { name, address }, to };
}

function getTransporter(config: ZeptoMailConfig): nodemailer.Transporter {
  const key = `${config.host}:${config.port}:${config.user}`;
  if (!globalForMail.zeptoTransporter || globalForMail.zeptoTransporterKey !== key) {
    globalForMail.zeptoTransporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
    globalForMail.zeptoTransporterKey = key;
  }
  return globalForMail.zeptoTransporter;
}

export async function sendLeadNotificationEmail(lead: LeadPayload, id: number): Promise<void> {
  const config = getZeptoMailConfig();
  if (!config) {
    mailLog(
      "Skipped: set ZEPTOMAIL_API_KEY, ZEPTOMAIL_FROM_EMAIL, and LEAD_EMAIL_TO.",
      true
    );
    return;
  }

  try {
    const info = await getTransporter(config).sendMail({
      from: config.from,
      envelope: {
        from: config.from.address,
        to: config.to.split(",").map((item) => item.trim()).filter(Boolean),
      },
      to: config.to,
      replyTo: lead.email,
      subject: leadEmailSubject(lead, id),
      text: leadEmailText(lead, id),
      html: leadEmailHtml(lead, id),
    });
    mailLog(`Sent lead #${id} from ${formatFrom(config.from)} to ${config.to} messageId=${info.messageId ?? "n/a"}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    mailLog(`Failed to send lead #${id} from ${formatFrom(config.from)}: ${message}`, true);
  }
}
