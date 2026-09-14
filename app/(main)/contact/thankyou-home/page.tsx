import ThankYouPage from "@/components/sections/contact/ThankYouPage";
import { NOINDEX_METADATA } from "@/lib/seo";

export const metadata = NOINDEX_METADATA;

export default function Page() {
  return <ThankYouPage variant="home" />;
}
