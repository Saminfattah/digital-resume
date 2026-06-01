# Samin Al Fattah Personal Brand Site

Premium personal branding website for Samin Al Fattah, centered on the message:

> Finance x Data x Research

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui-style local primitives
- Framer Motion
- Lucide React

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Replace Before Publishing

- `src/app/layout.tsx`: update `metadataBase` and canonical domain.
- `src/app/page.tsx`: update LinkedIn and GitHub URLs in structured data.
- `src/components/brand-site.tsx`: update email, LinkedIn, GitHub, and project links.
- `public/resume/Samin-Al-Fattah-Resume.pdf`: replace the placeholder PDF with the final resume.
- `public/images/finance-data-research-hero.png`: generated non-stock hero visual used by the site.

## SEO Included

- Metadata and Open Graph tags
- Twitter card metadata
- JSON-LD structured data
- `robots.ts`
- `sitemap.ts`
