import Link from "next/link";
import type { LocationPage } from "@/data/location-pages";
import { findLocationPage, locationsPath } from "@/data/location-pages";
import { locationPlaybooks, type Playbook } from "@/data/location-playbooks";
import { talentPlaybooks } from "@/data/location-talent-playbooks";

export function playbookFor(page: LocationPage) {
  const playbook = (page.division === "marketing" ? locationPlaybooks : talentPlaybooks)[page.service.slug];
  if (!playbook) throw new Error("Missing landing-page content for " + page.slug);
  return playbook;
}

export function LocalServiceScope({ page, playbook }: { page: LocationPage; playbook: Playbook }) {
  const { copy, service, division } = page;
  const highlight = division + "-gradient-text";
  return (
    <section className="home-section" aria-labelledby="local-service-title">
      <div className="section-shell section-shell--wide">
        <header className="section-header">
          <p className={"text-sm font-semibold " + highlight}>{service.offer}</p>
          <h2 className="section-heading" id="local-service-title">{copy.heading}</h2>
          <p className="section-subheading max-w-4xl">{copy.detail}</p>
        </header>
        <div className="section-body grid gap-4 md:grid-cols-3 md:gap-6">
          {playbook.work.map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-neutral-200 p-5 sm:p-7">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-[#3d4a5c]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocalServiceExample({ page, playbook }: { page: LocationPage; playbook: Playbook }) {
  const [heading, scenario] = playbook.scenarios[page.cityKey];
  const [decisionTitle, decision] = playbook.decision;
  return (
    <section className="home-section" aria-labelledby="market-example">
      <div className="section-shell section-shell--wide">
        <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-6 sm:p-10">
          <p className={"text-sm font-semibold " + page.division + "-gradient-text"}>Example brief</p>
          <h2 id="market-example" className="section-heading section-heading--sm mt-3">{heading}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#3d4a5c]">{scenario}</p>
          <div className="mt-6 border-t border-neutral-200 pt-5">
            <h3 className="text-lg font-semibold">{decisionTitle}</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-[#3d4a5c]">{decision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocalServiceBrief({ page, playbook, actionHref }: { page: LocationPage; playbook: Playbook; actionHref: string }) {
  const { city, cityKey, copy, service } = page;
  const [heading, deliverable] = playbook.delivery;
  const related = findLocationPage(service.related + "-in-" + cityKey);
  return (
    <section className="home-section" aria-labelledby="local-project-brief">
      <div className="section-shell section-shell--wide">
        <h2 className="section-heading" id="local-project-brief">{heading}</h2>
        <div className="section-body grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-2xl border border-neutral-200 p-5 sm:p-7">
            <p className="leading-relaxed text-[#3d4a5c]">{deliverable}</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5 sm:p-7">
            <h3 className="text-lg font-semibold">{service.careers ? "Before you apply" : "What to share with us"}</h3>
            <p className="mt-2 leading-relaxed text-[#3d4a5c]">{copy.brief}</p>
          </div>
        </div>
        <nav aria-label="Related services" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
          <Link href={actionHref} className="underline underline-offset-4">{service.careers ? "Browse current openings" : "Discuss your brief"}</Link>
          {related && <Link href={"/" + related.slug} className="underline underline-offset-4">{related.service.name}</Link>}
          <Link href={locationsPath + "#" + cityKey} className="underline underline-offset-4">Explore services in {city}</Link>
        </nav>
      </div>
    </section>
  );
}

