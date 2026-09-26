import ThankYouPage from "@/components/sections/contact/ThankYouPage";
import { GoogleAdsConversion } from "@/components/analytics/GoogleAdsConversion";
import { leadIdFromSearchParams } from "@/lib/google-ads";
import { NOINDEX_METADATA } from "@/lib/seo";

export const metadata = NOINDEX_METADATA;

type PageProps = {
  searchParams: Promise<{ leadId?: string | string[] }>;
};

export default async function Page({ searchParams }: PageProps) {
  let leadId: string | undefined;
  try {
    leadId = leadIdFromSearchParams(await searchParams);
  } catch {
    leadId = undefined;
  }

  return (
    <>
      <GoogleAdsConversion variant="talent" transactionId={leadId} />
      <ThankYouPage variant="talent" />
    </>
  );
}
