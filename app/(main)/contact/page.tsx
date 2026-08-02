import { Suspense } from "react";
import ContactPage from "@/components/sections/contact/ContactPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}
