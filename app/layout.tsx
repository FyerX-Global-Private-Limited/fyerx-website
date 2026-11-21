import type { Metadata } from "next";
import { geistSans, geistMono, inter, interTight, poppins } from "./fonts";
import "./globals.css";
import StyledJsxRegistry from "./registry";
import { RecaptchaProvider } from "@/components/RecaptchaProvider";
import { editorialMode } from "@/lib/editorial/config";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { SITE_OG_IMAGE, SITE_OG_IMAGE_META, SITE_URL } from "@/data/seo-metadata";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FyerX",
  openGraph: {
    siteName: "FyerX",
    locale: "en_IN",
    type: "website",
    images: [SITE_OG_IMAGE_META],
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE_OG_IMAGE],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} ${inter.variable} ${poppins.variable} h-full antialiased light`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-white text-[#171717]">
        {editorialMode() !== "isolated" && <GoogleAnalytics />}
        <SiteJsonLd />
        <RecaptchaProvider>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </RecaptchaProvider>
      </body>
    </html>
  );
}
