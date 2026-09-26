export const GOOGLE_ADS_ID = "AW-10818294074";

export const GOOGLE_ADS_ENQUIRY_VARIANTS = [
  "home",
  "marketing",
  "talent",
  "technology",
] as const;

export type GoogleAdsEnquiryVariant = (typeof GOOGLE_ADS_ENQUIRY_VARIANTS)[number];

export type GoogleAdsConversionConfig = {
  path: string;
  sendTo: string;
  value?: number;
  currency?: string;
};

export const GOOGLE_ADS_ENQUIRY_CONVERSIONS: Record<
  GoogleAdsEnquiryVariant,
  GoogleAdsConversionConfig
> = {
  home: {
    path: "/contact/thankyou-home",
    sendTo: "AW-10818294074/TcS1CJb_0YQdELqiyKYo",
  },
  technology: {
    path: "/contact/thankyou-technology",
    sendTo: "AW-10818294074/8nhkCJn_0YQdELqiyKYo",
  },
  talent: {
    path: "/contact/thankyou-talent",
    sendTo: "AW-10818294074/rNWpCJz_0YQdELqiyKYo",
  },
  marketing: {
    path: "/contact/thankyou-marketing",
    sendTo: "AW-10818294074/IpoICJ__0YQdELqiyKYo",
    value: 1.0,
    currency: "INR",
  },
};

export function leadIdFromSearchParams(params: { leadId?: string | string[] }) {
  const value = Array.isArray(params.leadId) ? params.leadId[0] : params.leadId;
  return typeof value === "string" ? value : undefined;
}
