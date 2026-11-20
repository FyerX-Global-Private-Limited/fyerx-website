import { ServiceDetail, serviceMetadata, type ServicePageProps } from "@/components/services/ServiceDetail";
import { paramsFor } from "@/lib/service-articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return paramsFor("marketing");
}

export async function generateMetadata({ params }: ServicePageProps) {
  return serviceMetadata("marketing", await params);
}

export default async function Page({ params }: ServicePageProps) {
  return <ServiceDetail division="marketing" params={await params} />;
}
