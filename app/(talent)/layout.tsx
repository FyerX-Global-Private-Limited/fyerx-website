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
      <main className="home-main home-main--site home-main--talent min-w-0 flex-1 overflow-x-clip">{children}</main>
      <TalentFooter />
    </div>
  );
}
