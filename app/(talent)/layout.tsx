import TalentHeader from "@/components/layout/talent/Header";
import TalentFooter from "@/components/layout/talent/Footer";

export default function TalentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <TalentHeader />
      <main className="flex-1">{children}</main>
      <TalentFooter />
    </div>
  );
}
