import { Suspense } from "react";
import type { Metadata } from "next";
import ContactPage from "@/components/sections/contact/ContactPage";
import { contactPageMetadata } from "@/lib/seo";

type PageProps = {
  searchParams: Promise<{ form?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  try {
    const params = await searchParams;
    const form = Array.isArray(params?.form) ? params.form[0] : params?.form;
    return contactPageMetadata(typeof form === "string" ? form : undefined);
  } catch {
    return contactPageMetadata();
  }
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}
