import MarketingHeader from "@/components/layout/marketing/Header";
import MarketingFooter from "@/components/layout/marketing/Footer";

export default function MarketingLayout({
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
      <MarketingHeader />
      <main className="home-main home-main--site min-w-0 flex-1 overflow-x-clip">{children}</main>
      <MarketingFooter />
    </div>
  );
}
