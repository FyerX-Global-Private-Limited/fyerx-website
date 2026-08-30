import TechnologyHeader from "@/components/layout/technology/Header";
import TechnologyFooter from "@/components/layout/technology/Footer";

export default function TechnologyLayout({
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
      <TechnologyHeader />
      <main className="home-main home-main--site home-main--technology min-w-0 flex-1 overflow-x-clip">{children}</main>
      <TechnologyFooter />
    </div>
  );
}
