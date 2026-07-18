import ConsultingHeader from "@/components/layout/consulting/Header";
import ConsultingFooter from "@/components/layout/consulting/Footer";

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ConsultingHeader />
      <main className="flex-1">{children}</main>
      <ConsultingFooter />
    </>
  );
}
