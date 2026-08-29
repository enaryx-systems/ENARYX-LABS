# Enaryx Labs — website

Single-file static marketing site for Enaryx Labs (product engineering studio).
No build step. Everything lives in `index.html` (HTML + CSS + JS inline).

## Run locally

Just open `index.html` in a browser, or serve the folder:

```
npx serve .
# or
python -m http.server 8000
```

## Deploy

Any static host works — drag the folder into **Netlify**, or:

```
npm i -g vercel && vercel      # from this folder
```

Point `enaryxlabs.com` at the host once deployed.

## What's in the page

| Section  | Anchor      | Notes |
|----------|-------------|-------|
| Hero     | `#hero`     | Headline, rotating build() ticker, trust strip |
| Services | `#services` | 5 practices as a spec-sheet list |
| Process  | `#process`  | Think / Build / Scale — numbered because it's a real sequence |
| Work     | `#work`     | Smart Med Records case study + architecture layer diagram |
| About    | `#about`    | Studio positioning + principles |
| Contact  | `#contact`  | Violet CTA band, mailto link |

Design tokens (violet brand palette, light + dark themes) are defined at the top
of the `<style>` block in `:root` / `@media (prefers-color-scheme: dark)` /
`:root[data-theme]`. Theme toggle is in the header and persists to `localStorage`.

## Before going live — replace the placeholders

1. **Logo** — the header/footer mark is a plain SVG stand-in. Drop in the real
   Enaryx logo: save the light-violet version as `logo.svg`, the silver version
   as `logo-silver.svg`, and swap the two inline `<svg class="logo-mark">` blocks
   for `<img>` tags.
2. **Email** — `hello@enaryxlabs.com` is assumed. Update the two `mailto:` links
   in `#contact` if the real address differs.
3. **Case studies** — only Smart Med Records is shown. Add more `.case` blocks in
   `#work`, or real client names/logos once you can share them.
4. **Copy** — About section states positioning (small senior team, weekly
   releases). Adjust to match how you actually want to present the studio.
5. **Meta / SEO** — add `og:` tags, a favicon file, and a `sitemap.xml` when the
   domain is settled.

## Fonts

Loaded from Google Fonts: Bricolage Grotesque (display), IBM Plex Sans (body),
IBM Plex Mono (labels/code). Requires a network connection; falls back to system
fonts otherwise.
