import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ContactEnquiryForm } from "@/components/sections/contact/ContactEnquiryForm";
import { SITE_URL } from "@/data/seo-metadata";
import { usOffers, usPaths, type UsOfferKey } from "@/data/us-offers";
import { buildMetadata } from "@/lib/seo";

export function usMetadata(path: string, title: string, description: string): Metadata {
  const metadata = buildMetadata({ path, title: title + " | FyerX", description, canonical: SITE_URL + path, robots: "index,follow", ogType: "website" });
  return { ...metadata, openGraph: { ...metadata.openGraph, locale: "en_US" } };
}

const shell = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const heading = "max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl";
const action = "inline-flex w-fit max-w-full items-center gap-3 rounded-full bg-[#ffcf41] px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-[#ffdf77] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcf41]";
const overview = [
  { title: "Offshore IT staffing", detail: "Add an India-based specialist to a defined US delivery workstream, with technical screening and agreed working-hour overlap.", href: usPaths.staffing, image: "/contact/contact-talent.webp" },
  { title: "B2B marketing for IT services", detail: "Test one offer, one buyer segment, and one channel in a 60-day demand generation pilot.", href: usPaths.marketing, image: "/contact/contact-marketing.webp" },
];

export function UsOverview() {
  return (
    <>
      <section lang="en-US" className="bg-[#17162c] text-white">
        <div className={shell + " py-14 sm:py-24"}>
          <p className="font-semibold text-[#ffcf41]">US client services · India-based delivery</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">Offshore IT staffing and B2B marketing for US companies</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">FyerX helps US technology firms add delivery capacity and build sales pipeline. Start with a dedicated IT specialist or a focused demand generation pilot.</p>
        </div>
      </section>
      <section lang="en-US" aria-labelledby="us-services" className={shell + " py-12 sm:py-16"}>
        <h2 id="us-services" className={heading}>How we can help</h2>
        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {overview.map((item) => (
            <article key={item.href} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[17/8] bg-slate-100">
                <Image src={item.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.detail}</p>
                <Link className="mt-4 inline-flex items-center gap-2 font-semibold text-[#630235] underline-offset-4 hover:underline" href={item.href}>Explore {item.title.toLowerCase()} <ArrowUpRight size={17} aria-hidden /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function UsOfferPage({ offerKey }: { offerKey: UsOfferKey }) {
  const offer = usOffers[offerKey];
  return (
    <div lang="en-US">
      <section className="bg-[#17162c] text-white">
        <div className={shell + " grid items-center gap-8 py-12 lg:grid-cols-[1.12fr_0.88fr] lg:py-18"}>
          <div>
            <Link href={usPaths.home} className="text-sm text-slate-200 underline underline-offset-4">US client services</Link>
            <p className="mt-6 font-semibold text-[#ffcf41]">{offer.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{offer.heading}</h1>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-200 sm:text-lg">{offer.description}</p>
            <Link href="#enquiry" className={action + " mt-7"}>{offer.action} <ArrowDown size={17} aria-hidden /></Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-800">
            <Image src={offer.image} alt={offer.alt} fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section aria-labelledby="scope" className={shell + " py-12 sm:py-16"}>
        <h2 id="scope" className={heading}>{offer.scopeTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {offer.scope.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="process" className="bg-slate-50">
        <div className={shell + " py-12 sm:py-16"}>
          <h2 id="process" className={heading}>{offer.processTitle}</h2>
          <ol className="mt-7 grid list-decimal gap-7 pl-6 marker:font-bold marker:text-[#630235] md:grid-cols-3 md:gap-10">
            {offer.process.map((item) => (
              <li key={item.title}>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section aria-labelledby="questions" className={shell + " py-12 sm:py-16"}>
        <h2 id="questions" className={heading}>Common questions</h2>
        <div className="mt-5 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {offer.faqs.map((item) => (
            <details key={item.title} className="py-4">
              <summary className="cursor-pointer font-semibold text-slate-950">{item.title}</summary>
              <p className="mt-3 leading-relaxed text-slate-600">{item.detail}</p>
            </details>
          ))}
        </div>
        <Link className="mt-6 inline-flex items-center gap-2 font-semibold text-[#630235] underline underline-offset-4" href={offer.related.href}>{offer.related.label} <ArrowUpRight size={17} aria-hidden /></Link>
      </section>
      <section id="enquiry" aria-labelledby="enquiry-title" className="scroll-mt-24 bg-[#f6f4fa]">
        <div className={shell + " grid gap-6 py-12 sm:py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-10"}>
          <div>
            <h2 id="enquiry-title" className={heading}>{offer.action}</h2>
            <p className="mt-3 max-w-md leading-relaxed text-slate-600">{offer.division === "talent" ? "Share the role, target start date, and the US hours your team needs covered." : "Tell us what you sell, who buys it, and what your sales team wants to improve."}</p>
          </div>
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <ContactEnquiryForm formKey={offer.division} usOffer={offerKey} submitLabel={offer.action} nameGridClassName="grid gap-3 sm:grid-cols-2" />
          </div>
        </div>
      </section>
    </div>
  );
}
