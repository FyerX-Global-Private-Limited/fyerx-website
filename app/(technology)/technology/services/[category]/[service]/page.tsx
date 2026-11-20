import { ServiceDetail, serviceMetadata, type ServicePageProps } from "@/components/services/ServiceDetail";
import { paramsFor } from "@/lib/service-articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return paramsFor("technology");
}

export async function generateMetadata({ params }: ServicePageProps) {
  return serviceMetadata("technology", await params);
}

export default async function Page({ params }: ServicePageProps) {
  return <ServiceDetail division="technology" params={await params} />;
}
