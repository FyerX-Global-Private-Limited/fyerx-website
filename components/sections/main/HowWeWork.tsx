"use client";

/**
 * HowWeWork — "Get more done with agents" tabbed hero section.
 *
 * Path: components/sections/main/HowWeWork.tsx
 *
 * Usage (App Router):
 *   import HowWeWork from "@/components/sections/main/HowWeWork";
 *   export default function Page() { return <HowWeWork />; }
 *
 * Self-contained: styles are embedded, no external CSS or dependencies.
 * Clicking a tab swaps ONLY the text content and board mockup data —
 * layout, spacing, typography, colors and animations stay identical.
 */

import { useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
type PillColor = "green" | "orange" | "pink" | "blue";
type Pill = [label: string, color: PillColor];
type IconText = [icon: string, text: string];
type Row = [name: string, second: string, status: Pill, fourth: IconText, fifth: Pill];

interface TabData {
  label: string;
  headingStart: string;
  para: string;
  /** Optional: path to a video in /public. When set, the right side
   *  shows this video instead of the board mockup. */
  video?: string;
  boardTitle: string;
  groupName: string;
  cols: [string, string, string, string, string];
  rows: Row[];
}

/* ------------------------------------------------------------------ */
/* Data per tab — only content changes; layout stays identical.        */
/* ------------------------------------------------------------------ */
const TABS: TabData[] = [
  {
    label: "Marketing",
    headingStart: "Posts, campaigns and ads.",
    para: "Marketing agents write posts, run campaigns, and drive insights while your team can focus on strategy.",
    video: "/whowe.mp4",
    boardTitle: "Global marketing event",
    groupName: "Incoming leads",
    cols: ["", "Email", "Status", "Phone", "RSVP"],
    rows: [
      ["Elian Warren", "Warren@brus.com", ["Email sent", "green"], ["🇺🇸", "+1 (209) 555 0104"], ["Confirmed", "green"]],
      ["Sam Spillberg", "Sam@tss.com", ["Email sent", "green"], ["🇺🇸", "+1 (646) 555 0198"], ["Pending", "orange"]],
      ["Hannah Gluck", "Gluck@dmll.com", ["Email sent", "green"], ["🇬🇧", "+44 7700 900077"], ["Confirmed", "green"]],
      ["Aaron Shishler", "shishler@sunday.c...", ["Email sent", "green"], ["🇬🇧", "+44 7700 900110"], ["Declined", "pink"]],
      ["Rachel Hakoune", "Rachel@gmail.com", ["Email sent", "green"], ["🇫🇷", "+33 6 12 34 56 78"], ["Confirmed", "green"]],
      ["Jamal Ayers", "Ayers@radwar.com", ["Email sent", "green"], ["🇩🇪", "+49 170 555 0145"], ["Confirmed", "green"]],
      ["Claire El-Khoury", "Claire@max.org", ["Email sent", "green"], ["🇳🇱", "+31 6 555 0182"], ["Declined", "pink"]],
      ["Luciana Almeida", "Luciana@gmail.com", ["Email sent", "green"], ["🇪🇸", "+34 91 555 0111"], ["Confirmed", "green"]],
      ["Jacob Butler", "Butler@amazom.c...", ["Email sent", "green"], ["🇺🇸", "+1 (415) 555 0132"], ["Pending", "orange"]],
    ],
  },
  {
    label: "IT",
    headingStart: "Tickets, requests and fixes.",
    para: "IT agents triage tickets, resolve requests, and keep systems secure while your team can focus on what's next.",
    boardTitle: "IT service desk",
    groupName: "Incoming tickets",
    cols: ["", "Requester", "Status", "Device", "Priority"],
    rows: [
      ["Reset VPN access", "Warren@brus.com", ["In progress", "blue"], ["💻", "MacBook Pro 14”"], ["High", "orange"]],
      ["Laptop won't boot", "Sam@tss.com", ["In progress", "blue"], ["💻", "ThinkPad X1"], ["Critical", "pink"]],
      ["New hire setup", "Gluck@dmll.com", ["Resolved", "green"], ["🖥️", "iMac 24”"], ["Low", "green"]],
      ["Email sync error", "shishler@sunday.c...", ["In progress", "blue"], ["📱", "iPhone 15"], ["Medium", "orange"]],
      ["Software license", "Rachel@gmail.com", ["Resolved", "green"], ["💻", "MacBook Air"], ["Low", "green"]],
      ["Server downtime", "Ayers@radwar.com", ["Escalated", "pink"], ["🗄️", "AWS us-east-1"], ["Critical", "pink"]],
      ["Printer offline", "Claire@max.org", ["Resolved", "green"], ["🖨️", "HP LaserJet"], ["Low", "green"]],
      ["2FA not working", "Luciana@gmail.com", ["In progress", "blue"], ["📱", "Pixel 9"], ["High", "orange"]],
      ["Access request", "Butler@amazom.c...", ["Resolved", "green"], ["🔑", "Admin panel"], ["Medium", "orange"]],
    ],
  },
  {
    label: "Product",
    headingStart: "Roadmaps, specs and sprints.",
    para: "Product agents draft specs, prioritize roadmaps, and surface user insights while your team can focus on building.",
    boardTitle: "Product roadmap",
    groupName: "Feature requests",
    cols: ["", "Owner", "Status", "Release", "Impact"],
    rows: [
      ["Dark mode", "Elian Warren", ["In dev", "blue"], ["🚀", "v2.4 — Aug"], ["High", "green"]],
      ["Mobile widgets", "Sam Spillberg", ["Planned", "orange"], ["🚀", "v2.5 — Sep"], ["High", "green"]],
      ["SSO login", "Hannah Gluck", ["In dev", "blue"], ["🚀", "v2.4 — Aug"], ["Critical", "pink"]],
      ["CSV export", "Aaron Shishler", ["Shipped", "green"], ["🚀", "v2.3 — Jul"], ["Medium", "orange"]],
      ["API webhooks", "Rachel Hakoune", ["In dev", "blue"], ["🚀", "v2.5 — Sep"], ["High", "green"]],
      ["Offline mode", "Jamal Ayers", ["Planned", "orange"], ["🚀", "v2.6 — Oct"], ["Low", "orange"]],
      ["Custom fields", "Claire El-Khoury", ["Shipped", "green"], ["🚀", "v2.3 — Jul"], ["High", "green"]],
      ["Audit log", "Luciana Almeida", ["In dev", "blue"], ["🚀", "v2.4 — Aug"], ["Medium", "orange"]],
      ["AI summaries", "Jacob Butler", ["Planned", "orange"], ["🚀", "v2.6 — Oct"], ["Critical", "pink"]],
    ],
  },
  {
    label: "Sales",
    headingStart: "Leads, deals and pipelines.",
    para: "Sales agents qualify leads, update your CRM, and move deals forward while your team can focus on closing.",
    boardTitle: "Sales pipeline",
    groupName: "Open deals",
    cols: ["", "Contact", "Stage", "Value", "Forecast"],
    rows: [
      ["Brus Media", "Warren@brus.com", ["Negotiation", "blue"], ["💰", "$48,000"], ["Likely", "green"]],
      ["TSS Group", "Sam@tss.com", ["Discovery", "orange"], ["💰", "$12,500"], ["Open", "orange"]],
      ["DMLL Ltd", "Gluck@dmll.com", ["Proposal", "blue"], ["💰", "$86,000"], ["Likely", "green"]],
      ["Sunday Corp", "shishler@sunday.c...", ["Closed lost", "pink"], ["💰", "$23,000"], ["Lost", "pink"]],
      ["Hakoune SARL", "Rachel@gmail.com", ["Closed won", "green"], ["💰", "$64,200"], ["Won", "green"]],
      ["Radwar GmbH", "Ayers@radwar.com", ["Negotiation", "blue"], ["💰", "$150,000"], ["Likely", "green"]],
      ["Max B.V.", "Claire@max.org", ["Discovery", "orange"], ["💰", "$9,800"], ["Open", "orange"]],
      ["Almeida S.A.", "Luciana@gmail.com", ["Proposal", "blue"], ["💰", "$41,700"], ["Likely", "green"]],
      ["Amazom Inc", "Butler@amazom.c...", ["Closed won", "green"], ["💰", "$210,000"], ["Won", "green"]],
    ],
  },
  {
    label: "HR",
    headingStart: "Hiring, onboarding and reviews.",
    para: "HR agents screen candidates, schedule interviews, and run onboarding while your team can focus on people.",
    boardTitle: "Talent pipeline",
    groupName: "New candidates",
    cols: ["", "Email", "Stage", "Phone", "Decision"],
    rows: [
      ["Elian Warren", "Warren@brus.com", ["Interview", "blue"], ["🇺🇸", "+1 (209) 555 0104"], ["Advance", "green"]],
      ["Sam Spillberg", "Sam@tss.com", ["Screening", "orange"], ["🇺🇸", "+1 (646) 555 0198"], ["Pending", "orange"]],
      ["Hannah Gluck", "Gluck@dmll.com", ["Offer sent", "green"], ["🇬🇧", "+44 7700 900077"], ["Advance", "green"]],
      ["Aaron Shishler", "shishler@sunday.c...", ["Interview", "blue"], ["🇬🇧", "+44 7700 900110"], ["Rejected", "pink"]],
      ["Rachel Hakoune", "Rachel@gmail.com", ["Offer sent", "green"], ["🇫🇷", "+33 6 12 34 56 78"], ["Advance", "green"]],
      ["Jamal Ayers", "Ayers@radwar.com", ["Onboarding", "green"], ["🇩🇪", "+49 170 555 0145"], ["Hired", "green"]],
      ["Claire El-Khoury", "Claire@max.org", ["Screening", "orange"], ["🇳🇱", "+31 6 555 0182"], ["Rejected", "pink"]],
      ["Luciana Almeida", "Luciana@gmail.com", ["Interview", "blue"], ["🇪🇸", "+34 91 555 0111"], ["Advance", "green"]],
      ["Jacob Butler", "Butler@amazom.c...", ["Screening", "orange"], ["🇺🇸", "+1 (415) 555 0132"], ["Pending", "orange"]],
    ],
  },
  {
    label: "PMO",
    headingStart: "Projects, timelines and reports.",
    para: "PMO agents track milestones, flag risks, and compile reports while your team can focus on delivery.",
    boardTitle: "Portfolio overview",
    groupName: "Active projects",
    cols: ["", "Lead", "Status", "Deadline", "Health"],
    rows: [
      ["Website relaunch", "Elian Warren", ["On track", "green"], ["📅", "Aug 14, 2026"], ["Good", "green"]],
      ["ERP migration", "Sam Spillberg", ["At risk", "orange"], ["📅", "Sep 30, 2026"], ["Watch", "orange"]],
      ["Brand refresh", "Hannah Gluck", ["On track", "green"], ["📅", "Jul 28, 2026"], ["Good", "green"]],
      ["Data warehouse", "Aaron Shishler", ["Blocked", "pink"], ["📅", "Oct 12, 2026"], ["Critical", "pink"]],
      ["Mobile app v3", "Rachel Hakoune", ["On track", "green"], ["📅", "Aug 21, 2026"], ["Good", "green"]],
      ["Office move", "Jamal Ayers", ["On track", "green"], ["📅", "Nov 2, 2026"], ["Good", "green"]],
      ["Security audit", "Claire El-Khoury", ["At risk", "orange"], ["📅", "Jul 31, 2026"], ["Watch", "orange"]],
      ["Vendor RFP", "Luciana Almeida", ["On track", "green"], ["📅", "Sep 9, 2026"], ["Good", "green"]],
      ["Q3 planning", "Jacob Butler", ["Blocked", "pink"], ["📅", "Jul 25, 2026"], ["Critical", "pink"]],
    ],
  },
  {
    label: "Create any agent",
    headingStart: "Any workflow, any team.",
    para: "Build a custom agent for any process — it handles the busywork end to end while your team can focus on the big picture.",
    boardTitle: "Custom agent builder",
    groupName: "Agent tasks",
    cols: ["", "Owner", "Status", "Trigger", "Result"],
    rows: [
      ["Summarize inbox", "Elian Warren", ["Running", "blue"], ["⚡", "Every morning 8am"], ["Done", "green"]],
      ["Draft weekly report", "Sam Spillberg", ["Running", "blue"], ["⚡", "Fridays 4pm"], ["Done", "green"]],
      ["Sync CRM contacts", "Hannah Gluck", ["Paused", "orange"], ["⚡", "On new lead"], ["Pending", "orange"]],
      ["Translate docs", "Aaron Shishler", ["Running", "blue"], ["⚡", "On file upload"], ["Done", "green"]],
      ["Flag overdue tasks", "Rachel Hakoune", ["Running", "blue"], ["⚡", "Daily 9am"], ["Done", "green"]],
      ["Route support chats", "Jamal Ayers", ["Error", "pink"], ["⚡", "On new message"], ["Failed", "pink"]],
      ["Enrich lead data", "Claire El-Khoury", ["Running", "blue"], ["⚡", "On form submit"], ["Done", "green"]],
      ["Post standup notes", "Luciana Almeida", ["Paused", "orange"], ["⚡", "Weekdays 10am"], ["Pending", "orange"]],
      ["Archive old boards", "Jacob Butler", ["Running", "blue"], ["⚡", "Monthly"], ["Done", "green"]],
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Small inline-SVG helper (board sidebar icons)                       */
/* ------------------------------------------------------------------ */
function SideIcon({ d, children }: { d?: string; children?: ReactNode }) {
  return (
    <svg className="side-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {d ? <path d={d} /> : children}
    </svg>
  );
}

export default function HowWeWork() {
  const [active, setActive] = useState<number>(0);
  const t = TABS[active];

  return (
    <section className="hww-hero">
      <h1 className="hero-title">Get more done with agents</h1>

      {/* ---------- Tab bar ---------- */}
      <div className="tabbar-wrap">
        <div className="tabbar" role="tablist">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={i === active}
              className={`tab${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        {/* ---------- Left column (key remounts to replay fade) ---------- */}
        <div className="panel-left fade-swap" key={`left-${active}`}>
          <h2>
            {t.headingStart} <span className="accent">Done.</span>
          </h2>
          <p>{t.para}</p>
          <button className="cta" type="button">
            Get Started{" "}
            <span className="arrow">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M1 6h13M10 1l5 5-5 5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        {/* ---------- Right column: video (if set) or board mockup ---------- */}
        <div className="board-card">
          {t.video ? (
            <div className="board video-board fade-swap" key={`video-${active}`}>
              <video
                className="board-video"
                src={t.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          ) : (
          <div className="board">
            <div className="board-side">
              <div className="logo-dots"><span /><span /><span /></div>
              <SideIcon d="M3 10.5L12 3l9 7.5V21H3z" />
              <SideIcon>
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </SideIcon>
              <div className="side-divider" />
              <SideIcon d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 6.7 5.5 5.5 0 0121.5 12c-2.5 4.4-9.5 9-9.5 9z" />
              <SideIcon>
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
              </SideIcon>
              <SideIcon d="M4 18V8m6 10V4m6 14v-7" />
              <div className="side-divider" />
              <SideIcon>
                <circle cx="12" cy="5" r="1.6" />
                <circle cx="12" cy="12" r="1.6" />
                <circle cx="12" cy="19" r="1.6" />
              </SideIcon>
            </div>

            <div className="board-main fade-swap" key={`board-${active}`}>
              <div className="board-title">{t.boardTitle}</div>

              <div className="board-toolbar">
                <div className="views">
                  <span className="view active">Main table</span>
                  <span className="view">Gantt</span>
                  <span className="view">Kanban</span>
                  <span className="view plus">+</span>
                </div>
                <div className="toolbar-right">
                  <svg className="bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M10.3 21a2 2 0 003.4 0" />
                  </svg>
                  <span className="integrate-label">Integrate</span>
                  <div className="int-icons">
                    <span className="int-icon i1">◆</span>
                    <span className="int-icon i2">M</span>
                    <span className="int-icon i3">z</span>
                    <span className="int-icon more">+2</span>
                  </div>
                </div>
              </div>

              <div className="group-name">{t.groupName}</div>

              <table className="tbl">
                <colgroup>
                  <col className="c1" /><col className="c2" /><col className="c3" /><col className="c4" /><col className="c5" />
                </colgroup>
                <thead>
                  <tr>{t.cols.map((c, i) => <th key={i}>{c}</th>)}</tr>
                </thead>
                <tbody>
                  {t.rows.map(([name, second, status, fourth, fifth], i) => (
                    <tr key={i}>
                      <td>{name}</td>
                      <td>{second}</td>
                      <td className={`cell-status bg-${status[1]}`}>{status[0]}</td>
                      <td className="cell-phone">
                        <span className="flag">{fourth[0]}</span>
                        <a href="#" onClick={(e) => e.preventDefault()}>{fourth[1]}</a>
                      </td>
                      <td className={`cell-rsvp bg-${fifth[1]}`}>{fifth[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* collaborator cursor */}
              <div className="cursor-tag">
                <svg className="pointer" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M5 3l14 8-6.5 1.5L10 19 5 3z" fill="#fff" stroke="#CE7BB0" strokeWidth="1.5" />
                </svg>
                <div className="avatar">
                  <svg viewBox="0 0 44 44" width="44" height="44">
                    <rect width="44" height="44" fill="#F8A9DC" />
                    <circle cx="22" cy="26" r="12" fill="#8C5A3C" />
                    <path d="M10 24c0-8 5-13 12-13s12 5 12 13H10z" fill="#3B2A22" />
                    <rect x="12" y="14" width="20" height="6" rx="3" fill="#FF6FA5" opacity="0.9" />
                    <circle cx="18" cy="26" r="1.6" fill="#2b1a12" />
                    <circle cx="26" cy="26" r="1.6" fill="#2b1a12" />
                    <path d="M19 31c1.8 1.4 4.2 1.4 6 0" stroke="#2b1a12" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Embedded styles — self-contained, no external CSS needed.
          (Move into a CSS Module or globals.css if you prefer.) */}
      <style>{css}</style>
    </section>
  );
}

const css = `
  .hww-hero{
    --primary:#6161FF; --primary-dark:#5151d5; --text-dark:#323338;
    --lavender:#D9D6F1; --green:#00C875; --orange:#FDAB3D; --pink:#FA2A8F;
    --blue-link:#1F76C2; --border:#E6E9EF; --card-bg:#F5F6F8; --black:#000;
    font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    color:#333; -webkit-font-smoothing:antialiased;
    max-width:1240px; margin:0 auto; padding:64px 40px 80px;
  }
  .hww-hero *{margin:0;padding:0;box-sizing:border-box;}
  .hww-hero .hero-title{
    text-align:center;
    justify-content:flex-start;
    align-items:center;
    display:flex;
    flex-flow:column;
    color:rgb(0, 0, 0);
    width:auto;
    margin-top:0px;
    margin-bottom:40px;
    letter-spacing:-0.03em;
    font-size:3.5rem;
    line-height:1.2;
    font-weight:400;
  }
  /* ---------- Tab bar ---------- */
  .hww-hero .tabbar-wrap{display:flex;justify-content:center;margin-bottom:56px;}
  .hww-hero .tabbar{
    display:inline-flex;align-items:center;background:#fff;border-radius:999px;
    padding:8px;box-shadow:0 6px 24px rgba(29,37,45,0.10);
  }
  .hww-hero .tab{
    position:relative;appearance:none;border:none;background:transparent;
    font-family:inherit;font-weight:400;color:var(--text-dark);cursor:pointer;
    display:inline-flex;justify-content:center;align-items:center;flex:0 0 auto;
    white-space:nowrap;font-size:0.875rem;border-radius:100rem;padding:0.5rem 1.5rem;
    transition:background-color .25s ease-in-out,color .25s ease-in-out;
  }
  .hww-hero .tab + .tab::before{
    content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);
    width:1px;height:22px;background:var(--border);transition:opacity .2s ease;
  }
  .hww-hero .tab:hover{background:#F0F1F4;}
  .hww-hero .tab.active{background:var(--lavender);font-weight:500;}
  .hww-hero .tab.active::before,.hww-hero .tab.active + .tab::before{opacity:0;}
  /* ---------- Content grid ---------- */
  .hww-hero .panel{display:grid;grid-template-columns:340px 1fr;gap:72px;align-items:center;}
  .hww-hero .panel-left h2{
    line-height:1.3;
    margin-top:0px;
    margin-bottom:1rem;
    font-size:1.75rem;
    font-weight:400;
    color:#333;
  }
  .hww-hero .panel-left h2 .accent{color:var(--primary);}
  .hww-hero .panel-left p{
    color:var(--black);
    margin-bottom:0px;
    font-size:1rem;
    line-height:150%;
  }
  .hww-hero .cta{
    display:inline-flex;align-items:center;gap:10px;background:var(--primary);
    color:#fff;font-family:inherit;font-size:16px;font-weight:400;border:none;
    border-radius:999px;padding:14px 28px;cursor:pointer;transition:background-color .25s ease;
    margin-top:32px;
  }
  .hww-hero .cta:hover{background:var(--primary-dark);}
  .hww-hero .cta .arrow{transition:transform .25s ease;display:inline-flex;}
  .hww-hero .cta:hover .arrow{transform:translateX(4px);}
  /* ---------- Board card ---------- */
  .hww-hero .board-card{
    background:var(--card-bg);border-radius:16px;padding:28px; /* equal border on all 4 sides */
    box-shadow:0 10px 30px rgba(29,37,45,0.06);overflow:hidden;position:relative;
  }
  .hww-hero .board{
    background:#fff;border-radius:8px;
    box-shadow:0 4px 18px rgba(29,37,45,0.08);display:flex;min-height:440px;
    overflow:hidden;
  }
  .hww-hero .board.video-board{
    display:block;overflow:hidden;
  }
  .hww-hero .board-video{
    display:block;width:100%;height:100%;min-height:440px;
    object-fit:cover;border-radius:8px;
  }
  .hww-hero .board-side{
    width:44px;border-right:1px solid var(--border);padding:14px 0;
    display:flex;flex-direction:column;align-items:center;gap:18px;flex-shrink:0;
  }
  .hww-hero .logo-dots{display:flex;gap:2.5px;margin-bottom:6px;}
  .hww-hero .logo-dots span{width:5px;height:12px;border-radius:3px;display:block;}
  .hww-hero .logo-dots span:nth-child(1){background:#F62B54;}
  .hww-hero .logo-dots span:nth-child(2){background:#FFCC00;}
  .hww-hero .logo-dots span:nth-child(3){background:#00CA72;}
  .hww-hero .side-icon{width:16px;height:16px;color:#9699A6;}
  .hww-hero .side-divider{width:20px;height:1px;background:var(--border);}
  .hww-hero .board-main{flex:1;padding:22px 26px 18px;overflow:hidden;position:relative;}
  .hww-hero .board-title{font-size:22px;font-weight:500;color:var(--text-dark);margin-bottom:16px;}
  .hww-hero .board-toolbar{
    display:flex;align-items:center;justify-content:space-between;
    border-bottom:1px solid var(--border);padding-right:22px;
  }
  .hww-hero .views{display:flex;align-items:center;gap:26px;}
  .hww-hero .view{font-size:14px;color:var(--text-dark);padding-bottom:10px;border-bottom:2px solid transparent;}
  .hww-hero .view.active{color:#1C6FC9;border-bottom-color:#1C6FC9;font-weight:500;}
  .hww-hero .view.plus{color:#676879;font-size:16px;}
  .hww-hero .toolbar-right{display:flex;align-items:center;gap:8px;padding-bottom:10px;}
  .hww-hero .bell{width:15px;height:15px;color:#676879;}
  .hww-hero .integrate-label{font-size:13px;color:#676879;margin-right:2px;}
  .hww-hero .int-icons{display:flex;align-items:center;}
  .hww-hero .int-icon{
    width:20px;height:20px;border-radius:6px;display:flex;align-items:center;
    justify-content:center;font-size:10px;color:#fff;font-weight:600;
    margin-left:-4px;border:2px solid #fff;
  }
  .hww-hero .int-icon.i1{background:#5B2C87;margin-left:0;}
  .hww-hero .int-icon.i2{background:#EA4335;}
  .hww-hero .int-icon.i3{background:#2D9CDB;}
  .hww-hero .int-icon.more{background:#4B4E69;font-size:8px;}
  .hww-hero .group-name{font-size:15px;font-weight:500;color:#4B9FE1;margin:18px 0 10px;}
  .hww-hero .tbl{width:100%;border-collapse:collapse;table-layout:fixed;}
  .hww-hero .tbl thead th{font-size:12.5px;font-weight:400;color:#676879;text-align:left;padding:0 10px 8px;}
  .hww-hero .tbl thead th:first-child{padding-left:14px;}
  .hww-hero .tbl tbody tr{border-top:1px solid var(--border);}
  .hww-hero .tbl tbody td{
    font-size:12.5px;color:var(--text-dark);padding:0 10px;height:30px;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    border-right:1px solid var(--border);
  }
  .hww-hero .tbl tbody td:last-child{border-right:none;}
  .hww-hero .tbl tbody td:first-child{border-left:4px solid #579BFC;padding-left:10px;}
  .hww-hero .tbl col.c1{width:22%;} .hww-hero .tbl col.c2{width:24%;}
  .hww-hero .tbl col.c3{width:16%;} .hww-hero .tbl col.c4{width:22%;}
  .hww-hero .tbl col.c5{width:16%;}
  .hww-hero td.cell-status,.hww-hero td.cell-rsvp{color:#fff;text-align:center;padding:0 4px;font-size:12px;}
  .hww-hero td.cell-phone .flag{margin-right:6px;}
  .hww-hero td.cell-phone a{color:var(--blue-link);text-decoration:underline;text-decoration-color:rgba(31,118,194,.5);}
  .hww-hero .bg-green{background:var(--green);} .hww-hero .bg-orange{background:var(--orange);}
  .hww-hero .bg-pink{background:var(--pink);} .hww-hero .bg-blue{background:#579BFC;}
  /* collaborator cursor */
  .hww-hero .cursor-tag{position:absolute;right:24%;top:52%;z-index:5;pointer-events:none;}
  .hww-hero .cursor-tag svg.pointer{position:absolute;top:-14px;right:-6px;}
  .hww-hero .avatar{
    width:44px;height:44px;border-radius:12px;background:#F8A9DC;
    overflow:hidden;box-shadow:0 4px 12px rgba(29,37,45,.18);
  }
  /* content switch animation */
  .hww-hero .fade-swap{animation:hwwFadeUp .35s ease;}
  @keyframes hwwFadeUp{
    from{opacity:0;transform:translateY(10px);}
    to{opacity:1;transform:translateY(0);}
  }
  @media (max-width:1024px){
    .hww-hero .panel{grid-template-columns:1fr;gap:40px;}
    .hww-hero .hero-title{font-size:40px;}
    .hww-hero .tabbar{flex-wrap:wrap;justify-content:center;border-radius:24px;}
  }
`;
