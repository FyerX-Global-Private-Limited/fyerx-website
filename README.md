# FyerX Website

A [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS site.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

## Folder Structure

```
app/                       Routes (App Router). "/" is app/page.tsx.
  (main)/                  About and Contact pages — share the main Header/Footer.
  (marketing)/              /marketing micro-site — its own Header/Footer.
  (consulting)/             /consulting micro-site — its own Header/Footer.
components/
  layout/main/              Header.tsx and Footer.tsx used on the homepage.
  layout/marketing/, consulting/   Headers/Footers for those micro-sites.
  sections/main/            One file per homepage section (Hero, Capabilities, ...).
  ui/                        Small shared building blocks (Button, Card, Reveal, CapabilityIcon).
data/
  capabilities.ts            The single source of truth for "what FyerX does".
```

## How the capabilities data works

The homepage's "What We Do" section (`components/sections/main/Capabilities.tsx`)
and the footer's Capabilities column (`components/layout/main/Footer.tsx`) both
render from the **same array**: `data/capabilities.ts`.

This means adding, renaming, or reordering a capability is a one-file change —
you do not need to touch the section component or the footer.

To add a new capability card, open `data/capabilities.ts` and add an entry:

```ts
{
  slug: "new-capability",       // unique, used as the React key
  title: "New Capability",       // card heading / footer link text
  description: "One sentence describing what this capability delivers.",
  icon: "signal",                 // one of the icon names in CapabilityIcon.tsx
  href: "/new-capability",       // where "Learn More" / the footer link points
}
```

If none of the existing icons fit, add a new `case` to
`components/ui/CapabilityIcon.tsx` and reference its name from your new entry.
Keep the line weight (`strokeWidth={1.5}`) consistent with the existing icons.

There is intentionally no "new" vs. "old" flag on capability entries — every
item in the array is displayed the same way, in array order.

## Content that needs verification before launch

A few pieces of content in the homepage are placeholders and are marked with
`// VERIFY BEFORE LAUNCH` comments in the code. Search for that string to find
all of them. As of this build, that includes:

- `components/sections/main/TrackRecord.tsx` — the `[XX]` stat values.
- `components/sections/main/Leadership.tsx` — the geometric portrait placeholder.
- `components/sections/main/TestimonialsCTA.tsx` — placeholder testimonial
  quotes; remove this section entirely if no verified client testimonials
  exist at launch.

## Design tokens

The homepage uses a strict, fixed blue palette defined once in
`app/globals.css` (`--color-deep-blue`, `--color-mid-blue`, `--color-pale-blue`,
`--color-slate`), exposed as Tailwind utilities (`bg-deep-blue`, `text-mid-blue`,
etc.). Typography defaults to Calibri, falling back to Inter (loaded via
`next/font/google`) via the `font-calibri` utility class.
