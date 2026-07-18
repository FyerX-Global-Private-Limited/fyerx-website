import MainHeader from "@/components/layout/main/Header";
import MainFooter from "@/components/layout/main/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />
      <main className="flex-1">{children}</main>
      <MainFooter />
    </>
  );
}
