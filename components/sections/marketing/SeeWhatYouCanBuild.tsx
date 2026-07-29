"use client";

import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactElement,
} from "react";

/**
 * SeeWhatYouCanBuild
 * ------------------
 * Single-file, self-contained section (rebuild of the "See what you can build"
 * design). Client Component — it needs state (active tab) and pointer handlers
 * (manual drag-to-swipe).
 *
 * • Filter tabs switch the visible cards (the active tab gets the gradient ring).
 * • The card row is manually swipeable: drag with a mouse, or swipe on touch.
 * • Cards are duplicated so there's always more to swipe through.
 *
 * All styling is scoped in the <style> block below (class prefix `swb-`), so it
 * drops in anywhere — no Tailwind config or extra dependencies required.
 */

const TABS = [
  "All",
  "Projects",
  "Sales",
  "Marketing",
  "Operations",
  "Human resources",
] as const;

type Card = {
  key: string;
  title: string;
  desc: string;
  cats: string[];
  variant: "p" | "k";
  Preview: () => ReactElement;
};

/* ----------------------------- preview mockups ---------------------------- */

function OkrPreview() {
  const objectives = [
    { t: "Deliver new feature to drive adoption gains in Q1", tags: [["Engineering", "eng"], ["Innovation", "inn"], ["Q1 2025", "q"]], status: ["On track", "ok"], pct: 60 },
    { t: "Ensure platform can support increased Enterprise usage", tags: [["Engineering", "eng"], ["Infra", "q"], ["Q1 2025", "q"]], status: ["On track", "ok"], pct: 70 },
    { t: "Agent builder launch product maturity", tags: [["Engineering", "eng"], ["Infra", "q"], ["Q1 2025", "q"]], status: ["Stuck", "stk"], pct: 20 },
  ] as const;
  return (
    <div className="swb-frame">
      <div className="swb-fhead">🏆 OKR tracker app <span className="swb-star">☆</span></div>
      <div className="swb-fbody">
        <div className="swb-row">
          <div className="swb-appicon">▦</div>
          <div>
            <div className="swb-t11">OKR tracking center</div>
            <div className="swb-t9">Strategic OKR Dashboard</div>
          </div>
        </div>
        <div className="swb-stats">
          {[["12", "Total OKRs"], ["5", "On Track"], ["3", "At Risk"], ["68%", "Avg Progress"]].map(([n, l]) => (
            <div key={l}><div className="swb-n">{n}</div><div className="swb-l">{l}</div></div>
          ))}
        </div>
        <div className="swb-chips">
          <span className="swb-chip">◱ Quarter · Q1 2025</span>
          <span className="swb-chip">▦ Department · All</span>
          <span className="swb-chip">◎ Outcome Type · All Types</span>
          <span className="swb-chip">⚑ Status · All</span>
        </div>
        <div className="swb-engrow">
          <b>Engineering / 2 OKRs</b>
          <span className="swb-muted">Department Progress <span className="swb-pill">55%</span></span>
        </div>
        <div className="swb-bar"><i style={{ width: "55%" }} /></div>
        <div className="swb-objs">
          {objectives.map((o) => (
            <div className="swb-obj" key={o.t}>
              <div className="swb-ot">{o.t}</div>
              <div className="swb-tags">
                {o.tags.map(([label, cls]) => (
                  <span className={`swb-tag swb-${cls}`} key={label}>{label}</span>
                ))}
              </div>
              <div className="swb-objfoot">
                <span className={`swb-tag swb-${o.status[1]}`}>{o.status[0]}</span>
                <span>Progress {o.pct}%</span>
              </div>
              <div className="swb-minibar"><i style={{ width: `${o.pct}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrgPreview() {
  const people = [
    { i: "ER", c: "#8b5cf6", n: "Emily Rodriguez", r: "CEO & Founder", b: [["Executive", "b-v"], ["Active", "b-e"]], lead: true },
    { i: "JH", c: "#ec4899", n: "Jessica Harries", r: "CMO", b: [["Executive", "b-v"], ["Active", "b-e"]] },
    { i: "JR", c: "#3b82f6", n: "John Robinson", r: "CTO", b: [["Executive", "b-v"], ["On leave", "b-a"]] },
    { i: "BM", c: "#10b981", n: "Bianca Martin", r: "Engineering team lead", b: [["Engineering", "b-eng"], ["Active", "b-e"]] },
    { i: "ES", c: "#f59e0b", n: "Emma Smith", r: "Head of Design", b: [["Executive", "b-v"], ["Active", "b-e"]] },
  ] as const;
  const Person = (p: (typeof people)[number], style?: React.CSSProperties) => (
    <div className="swb-person" style={style}>
      <div className="swb-av" style={{ background: p.c }}>{p.i}</div>
      <div>
        <div className="swb-pname">{p.n}</div>
        <div className="swb-prole">{p.r}</div>
        <div className="swb-pbadges">
          {p.b.map(([label, cls]) => (
            <span className={`swb-pbadge swb-${cls}`} key={label}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <div className="swb-frame">
      <div className="swb-fhead">Organization chart <span className="swb-star">☆</span></div>
      <div className="swb-fbody">
        <div className="swb-search">
          <div className="swb-sbox">🔍 Search employees...</div>
          <span className="swb-chip">All Departments ▾</span>
          <span className="swb-chip">All Statuses ▾</span>
          <span className="swb-badge swb-b-v">Total 402</span>
          <span className="swb-badge swb-b-e">Active 387</span>
          <span className="swb-badge swb-b-a">On leave 15</span>
        </div>
        <div style={{ marginTop: 12 }}>
          {Person(people[0], { maxWidth: "52%" })}
          <div className="swb-grid2">
            {Person(people[1])}
            {Person(people[2])}
            {Person(people[3])}
            {Person(people[4])}
          </div>
        </div>
      </div>
    </div>
  );
}

function SalesPreview() {
  return (
    <div className="swb-frame">
      <div className="swb-fhead">The Sales Oracle <span className="swb-star">☆</span></div>
      <div className="swb-fbody">
        <div className="swb-ctrl">Filters &amp; Analysis Controls</div>
        <div className="swb-grid2" style={{ gridTemplateColumns: "1.4fr 1fr" }}>
          <div>
            {[["◔ Territory", "North America"], ["◍ Sales Team", "All Teams"], ["◈ Forecast Model", "All Models"]].map(([l, v]) => (
              <div className="swb-drop" key={l}>
                <div className="swb-dl">{l}</div>
                <div className="swb-dv">{v} <span>▾</span></div>
              </div>
            ))}
          </div>
          <div className="swb-fore">$<div style={{ fontSize: 14, marginTop: 16 }}>Total<br />$9.2M</div></div>
        </div>
        <div className="swb-ctrl" style={{ marginTop: 10 }}>Revenue Forecast vs Actuals</div>
        <div className="swb-t9">Compare actual performance against multiple models</div>
        <div style={{ marginTop: 8, fontSize: 8, color: "#9ca3af", lineHeight: 2 }}>
          $300,000<br />$250,000<br />$200,000
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- data ----------------------------------- */

const CARDS: Card[] = [
  { key: "okr", title: "OKR monitoring app", desc: "Identify how each department is meeting their OKRs", cats: ["Projects", "Operations"], variant: "p", Preview: OkrPreview },
  { key: "org", title: "Organizational chart", desc: "Create a searchable map of your company's structure", cats: ["Human resources", "Operations"], variant: "k", Preview: OrgPreview },
  { key: "sales", title: "Sales forecasting", desc: "Transform sales data into accurate revenue forecasts", cats: ["Sales", "Marketing"], variant: "k", Preview: SalesPreview },
];

/* ------------------------------- component -------------------------------- */

export default function SeeWhatYouCanBuild() {
  const [active, setActive] = useState<(typeof TABS)[number]>("All");
  const [grabbing, setGrabbing] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });

  const filtered = active === "All" ? CARDS : CARDS.filter((c) => c.cats.includes(active));
  // Duplicate the cards so there's always more to swipe through.
  const shown = [...filtered, ...filtered];

  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return; // touch uses native scrolling
    const el = trackRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft };
    setGrabbing(true);
  };
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };
  const endDrag = () => {
    drag.current.active = false;
    setGrabbing(false);
  };

  return (
    <section className="swb-root">
      <style>{CSS}</style>
      <div className="swb-wrap">
        <h1 className="swb-h1">See what you can build</h1>

        <div className="swb-tabs" role="tablist">
          {TABS.map((tab) =>
            tab === active ? (
              <button key={tab} className="swb-tab swb-active" role="tab" aria-selected="true">
                <span className="swb-inner">{tab}</span>
              </button>
            ) : (
              <button key={tab} className="swb-tab" role="tab" aria-selected="false" onClick={() => setActive(tab)}>
                {tab}
              </button>
            )
          )}
        </div>
      </div>

      <div
        ref={trackRef}
        className={`swb-track ${grabbing ? "swb-grabbing" : ""}`}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {shown.map((card, i) => {
          const { Preview } = card;
          return (
            <article className={`swb-card swb-${card.variant}`} key={`${card.key}-${i}`}>
              <Preview />
              <div className="swb-foot">
                <h3>{card.title}</h3>
                <div className="swb-fr">
                  <div className="swb-desc">{card.desc}</div>
                  <button className="swb-startbtn" type="button">Start building</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* --------------------------------- styles --------------------------------- */

const CSS = `
.swb-root{background:#fff;color:#111827;font-family:"Poppins",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
.swb-root *{box-sizing:border-box}
.swb-wrap{max-width:1142px;margin:0 auto;padding:40px 64px 0}
.swb-h1{color:var(--ink);width:auto;margin-top:0;margin-bottom:0;font-size:46px;font-weight:500;line-height:1.12;letter-spacing:-0.02em}
.swb-tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:26px}
.swb-tab{padding:9px 18px;border-radius:12px;font-size:15px;color:#4b5563;background:#f9fafb;border:1px solid #e5e7eb;cursor:pointer;font-family:inherit;transition:background .15s,color .15s}
.swb-tab:hover{background:#f3f4f6}
.swb-tab.swb-active{color:#111827;background:linear-gradient(90deg,#8b5cf6,#f59e0b);border:none;padding:1.5px}
.swb-tab.swb-active .swb-inner{display:block;background:#fff;border-radius:11px;padding:9px 18px}
.swb-track{display:flex;gap:22px;overflow-x:auto;overflow-y:hidden;padding:0 64px 10px;max-width:1190px;margin:0 auto;cursor:grab;user-select:none;scroll-snap-type:x proximity;-ms-overflow-style:none;scrollbar-width:none}
.swb-track::-webkit-scrollbar{display:none}
.swb-track.swb-grabbing{cursor:grabbing}
.swb-card{flex:0 0 520px;max-width:520px;border-radius:28px;padding:18px;scroll-snap-align:start}
.swb-card.swb-p{background:linear-gradient(135deg,#ece0fb,#f8f0ff)}
.swb-card.swb-k{background:linear-gradient(135deg,#fde3ed,#fef1f6)}
.swb-frame{background:#fff;border:1px solid #eee;border-radius:18px;overflow:hidden;box-shadow:0 6px 20px rgba(80,40,120,.06)}
.swb-fhead{display:flex;align-items:center;gap:6px;padding:12px 14px;border-bottom:1px solid #f1f1f1;font-size:13px;font-weight:600}
.swb-star{margin-left:4px;color:#cbd5e1}
.swb-fbody{padding:12px 14px;height:290px;overflow:hidden}
.swb-row{display:flex;align-items:center;gap:8px}
.swb-appicon{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#d946ef,#7c3aed);display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px}
.swb-t11{font-size:11px;font-weight:600}
.swb-t9{font-size:9px;color:#9ca3af}
.swb-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:#faf9fd;border-radius:12px;padding:10px;margin-top:12px;text-align:center}
.swb-n{font-size:15px;font-weight:700}
.swb-l{font-size:8px;color:#9ca3af;margin-top:2px}
.swb-chips{display:flex;gap:6px;margin-top:12px;flex-wrap:wrap}
.swb-chip{background:#f3f4f6;color:#6b7280;font-size:8px;padding:4px 7px;border-radius:6px;white-space:nowrap}
.swb-engrow{display:flex;justify-content:space-between;align-items:center;margin-top:12px;font-size:10px}
.swb-engrow b{font-weight:700;color:#374151}
.swb-muted{color:#9ca3af}
.swb-pill{background:#dcfce7;color:#16a34a;font-size:8px;padding:2px 6px;border-radius:6px;font-weight:600}
.swb-bar{height:6px;border-radius:99px;background:#eef0f2;margin-top:5px;overflow:hidden}
.swb-bar>i{display:block;height:100%;background:#34d399}
.swb-objs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
.swb-obj{border:1px solid #eee;border-radius:10px;padding:8px}
.swb-ot{font-size:8.5px;font-weight:600;line-height:1.3;color:#374151;height:34px;overflow:hidden}
.swb-tags{display:flex;gap:3px;flex-wrap:wrap;margin-top:6px}
.swb-tag{font-size:6.5px;padding:2px 5px;border-radius:5px;font-weight:600}
.swb-eng{background:#ede9fe;color:#6d28d9}
.swb-inn{background:#fce7f3;color:#be185d}
.swb-q{background:#f3f4f6;color:#6b7280}
.swb-ok{background:#dcfce7;color:#16a34a}
.swb-stk{background:#fee2e2;color:#dc2626}
.swb-objfoot{display:flex;justify-content:space-between;align-items:center;margin-top:6px;font-size:7px;color:#9ca3af}
.swb-minibar{height:4px;border-radius:99px;background:#eef0f2;margin-top:4px;overflow:hidden}
.swb-minibar>i{display:block;height:100%;background:#111827}
.swb-search{display:flex;gap:6px;align-items:center;font-size:8px}
.swb-sbox{flex:1;border:1px solid #eee;border-radius:8px;padding:5px 8px;color:#9ca3af}
.swb-badge{font-size:7.5px;padding:3px 6px;border-radius:6px;font-weight:600}
.swb-b-v{background:#ede9fe;color:#6d28d9}
.swb-b-e{background:#dcfce7;color:#16a34a}
.swb-b-a{background:#fef3c7;color:#d97706}
.swb-b-eng{background:#fce7f3;color:#be185d}
.swb-person{border:1px solid #eee;border-radius:12px;padding:9px;display:flex;gap:8px;align-items:flex-start;background:#fff}
.swb-av{width:26px;height:26px;border-radius:99px;flex:0 0 26px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:9px;font-weight:700}
.swb-pname{font-size:10px;font-weight:700}
.swb-prole{font-size:8px;color:#9ca3af}
.swb-pbadges{display:flex;gap:4px;margin-top:5px}
.swb-pbadge{font-size:7px;padding:2px 6px;border-radius:6px;font-weight:600}
.swb-grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px}
.swb-ctrl{font-size:9px;font-weight:700;color:#374151;margin-bottom:6px}
.swb-drop{border:1px solid #eee;border-radius:8px;padding:6px 8px;margin-bottom:6px;font-size:8px}
.swb-dl{color:#9ca3af;font-size:7px}
.swb-dv{color:#374151;font-weight:600;display:flex;justify-content:space-between}
.swb-fore{background:linear-gradient(180deg,#ddd6fe,#ede9fe);border-radius:12px;padding:10px;font-size:9px;color:#5b21b6;font-weight:700}
.swb-foot{padding:18px 6px 6px}
.swb-foot h3{font-size:21px;font-weight:700;margin:0}
.swb-fr{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:10px}
.swb-desc{font-size:14px;font-weight:500;line-height:1.5;max-width:260px}
.swb-card.swb-p .swb-desc{color:#6d28d9}
.swb-card.swb-k .swb-desc{color:#be185d}
.swb-startbtn{background:#111827;color:#fff;border:none;border-radius:99px;padding:13px 24px;font-size:14px;font-weight:600;white-space:nowrap;cursor:pointer;font-family:inherit}
.swb-startbtn:hover{background:#1f2937}
@media (max-width:560px){.swb-card{flex-basis:86vw;max-width:86vw}.swb-h1{font-size:34px}}
`;
