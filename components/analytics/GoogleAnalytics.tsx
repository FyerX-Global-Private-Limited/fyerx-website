import Script from "next/script";
import { GOOGLE_ADS_ID } from "@/lib/google-ads";

export const GA_MEASUREMENT_ID = "G-W14RWG185F";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}');
gtag('config','${GOOGLE_ADS_ID}');`}
      </Script>
    </>
  );
}
