import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Inter_Tight, Poppins } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "./registry";
import { RecaptchaProvider } from "@/components/RecaptchaProvider";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/analytics/GoogleTagManager";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { SITE_OG_IMAGE, SITE_URL } from "@/data/seo-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

// Web-font fallback for Calibri (not distributable as a web font) on the homepage.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "FyerX",
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp" }],
    shortcut: ["/favicon.webp"],
    apple: [{ url: "/favicon.webp", type: "image/webp" }],
  },
  openGraph: {
    siteName: "FyerX",
    locale: "en_IN",
    type: "website",
    images: [{ url: SITE_OG_IMAGE }],
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
        <GoogleTagManagerNoscript />
        <GoogleTagManager />
        <SiteJsonLd />
        <RecaptchaProvider>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </RecaptchaProvider>
      </body>
    </html>
  );
}
