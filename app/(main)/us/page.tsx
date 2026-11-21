import { UsOverview, usMetadata } from "./_components";

export const metadata = usMetadata(
  "/us",
  "Offshore IT Staffing and B2B Marketing for US Companies",
  "FyerX helps US technology companies add dedicated India-based IT talent and launch B2B demand generation pilots."
);

export default function Page() {
  return <UsOverview />;
}
