# Enaryx Labs

Marketing site for Enaryx Labs — a technology and innovation company building
digital products, AI solutions, and automation for startups and businesses.

**Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lenis**

Dark-first deep-tech visual identity: near-black background, glass cards, a
canvas particle network in the hero, an SVG "technology ecosystem" diagram, a
custom cursor, and word-by-word headline reveals. See **Design system** below.

---

## Run it

```bash
npm install
cp .env.example .env.local   # optional — site runs fine without any keys
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
npm run lint
```

## Deploy

Built for **Vercel** — push to GitHub and import, or `npx vercel`. Set the env
vars from `.env.example` in the Vercel dashboard. Point `enaryxlabs.com` at it
(Cloudflare DNS → CNAME to Vercel).

---

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata, theme script, providers
    page.tsx               home — What We Do, Why Enaryx Labs, Mission & Vision,
                            Who We Work With, For Startups/Businesses, work, FAQ
    services/              What We Do (6, sticky-nav'd) + Our Technology +
                            Innovation & R&D + Products & Solutions + live AI demo
    process/                Our Approach — Discover → Design → Build → Test →
                            Launch → Scale
    about/                  Mission, Vision, About narrative, Our Values
    work/                  case study index + [slug] detail
    careers/                hiring philosophy + shortlist roles
    contact/  privacy/  terms/
    not-found.tsx
    sitemap.ts  robots.ts
    api/
      contact/route.ts    contact form → Resend (or console log)
      demo/route.ts        "Ask what we do" assistant → Claude (or rule-based fallback)
  components/
    modal.tsx              ModalProvider + useContactModal() — the animated
                            popup, wraps <ContactForm compact />
    cta-button.tsx         magnetic pill button that opens the modal (use this
                            instead of a link to /contact)
    gradient-card.tsx      brand-tinted gradient surface, used across card grids
    service-nav.tsx        sticky, scroll-synced pill nav for the 6 services
    marquee.tsx  faq.tsx    supporting sections
    header, footer, reveal, magnetic, ticker, cursor-glow…
  lib/
    site.ts               name, email, domain, Cal.com link, social links  ← EDIT
    content.ts            services, approach steps, why-us, values, mission,
                           vision, audiences, case studies, FAQ  ← EDIT THIS
    contact-schema.ts     shared Zod schema for the contact form
```

## The "Start a project" popup

Every primary CTA (`CtaButton`) opens an animated modal — spring-in panel,
backdrop blur, focus trap, Esc to close — containing the same contact form as
`/contact`. It's mounted once in `layout.tsx` via `<ModalProvider>`; open it from
any client component with `useContactModal().open()`. The `/contact` page stays
as a full, no-JS-friendly fallback and for direct links/SEO.

**No CMS.** Everything is typed data in `src/lib/`. Leads go to email; your inbox
is the CRM. Add a CMS (Sanity) or MDX only when editing code becomes the bottleneck.

## Design system

**Dark is the default identity**, not a `prefers-color-scheme` fallback — every
new visitor sees the deep-tech dark palette regardless of OS setting. The header
toggle offers an explicit light escape hatch, persisted to `localStorage`.
Tokens live in `src/app/globals.css`: bare `:root` *is* the dark palette,
`:root[data-theme="light"]` is the opt-in variant, both exposed to Tailwind via
`@theme inline` (`bg-brand`, `text-muted`, `border-line`, `bg-glass`, …).

Signature pieces, each its own component:

| Component | What it does |
|---|---|
| `hero-network.tsx` | Canvas particle network in the hero — skipped below 768px, on touch devices, and under reduced motion (the glow orb still renders) |
| `constellation.tsx` | The "technology ecosystem" — animated SVG lines from a center node to 8 hoverable topic nodes |
| `word-reveal.tsx` | Word-by-word headline animation, reserved for the hero and the two big-statement sections |
| `cursor.tsx` | Custom dot + lagging ring cursor, desktop + motion-ok only; expands with a label via `data-cursor-text="…"` on any element |
| `timeline.tsx` | The 6-step process — horizontal rail with an animated progress line on desktop, vertical on mobile |
| `featured-product.tsx` | The "From Idea to Reality" dashboard mockup — animated bars, a count-up stat, floating status chips |
| `gradient-card.tsx` (`GradientCard`) | The one glass-card primitive used everywhere; tracks the cursor for a radial hover glow via CSS custom properties (desktop only) |

All of the above respect `prefers-reduced-motion` and disable their heavier
effects on touch/small screens, per the brief.

**Radius scale**: buttons `14px`, cards `24px`, small icon-only controls stay
circular. Small metadata chips (tech-stack tags, product-idea tiles) are the
one place pill/rounded shapes remain, kept deliberately minor.

## Environment variables

| Variable | Effect if unset |
|---|---|
| `RESEND_API_KEY` | Contact submissions are logged to the server console, not emailed |
| `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` | Falls back to `hello@enaryxlabs.com` / Resend's onboarding sender |
| `ANTHROPIC_API_KEY` | The demo assistant answers from a deterministic fallback instead of Claude |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics script is not loaded |

---

## Before launch — replace the placeholders

Search the repo for `TODO` and `PLACEHOLDER`. The main ones:

1. **`src/lib/site.ts`** — real Cal.com link, real social URLs (`social` array).
2. **Logo** — `src/components/logo.tsx` is a stand-in SVG. Drop `logo.svg` /
   `logo-silver.svg` into `public/` and replace it.
3. **`src/lib/content.ts`** — the `furniture-bookings` case study is
   `PLACEHOLDER` copy. Fill in real details or set `published: false`.
4. **Legal pages** — `privacy` and `terms` are plain-language drafts. Have them
   reviewed and add your legal entity details.
5. **OG image** — add `src/app/opengraph-image.tsx` (or a static file) for social
   sharing previews.
6. **Cal.com** — the contact page links out to scheduling. To embed it inline,
   add `@calcom/embed-react` and swap the link in `src/app/contact/page.tsx`.

## Deferred (not built yet)

- shadcn/ui — primitives are currently hand-rolled; add the CLI if you want its
  component set.
- MDX / Sanity for a blog — `content.ts` is enough for now.
- Streaming responses in the AI demo — currently a single request/response.
- Custom device-framed screenshots of real work.

## Reference

`reference/legacy-static-site.html` is the earliest single-file static version of
this site, kept for its layout ideas. Not part of the build.
