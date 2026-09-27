# Heritage at Stonebridge Homes

Real estate landing page for Summerlin's premier gated community. Built with Next.js 14, Tailwind CSS, and TypeScript.

**Agent:** Dr. Jan Duffy | **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties

## About

Heritage at Stonebridge Homes showcases luxury real estate in Heritage at Stonebridge, a premium gated community in Summerlin, Las Vegas. The site supports lead capture, community information, and contact for buyers and sellers.

## Features

Developer experience first:

- [Next.js](https://nextjs.org) for static site generation
- [Tailwind CSS](https://tailwindcss.com)
- PostCSS for processing Tailwind CSS, integrated with `styled-jsx`
- Type checking with [TypeScript](https://www.typescriptlang.org)
- Strict Mode for TypeScript and React 18
- Linter with [ESLint](https://eslint.org) (Next.js Core Web Vitals)
- Code formatter with [Prettier](https://prettier.io)
- [Husky](https://husky.run) for Git hooks
- Lint-staged for running linters on staged files
- VSCode configuration: Debug, Settings, Tasks, extensions for PostCSS, ESLint, Prettier, TypeScript
- SEO metadata, JSON-LD and Open Graph with [Next SEO](https://github.com/garmeeh/next-seo)
- [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) (run with `ANALYZE=true npm run build`)
- One-click deployment with Netlify or manual deploy to any host

Heritage-specific:

- LocalBusiness / RealEstateAgent JSON-LD schema
- FAQ schema (FAQPage) for Heritage at Stonebridge questions
- Lead capture form and API route (`/api/leads/submit`)
- Google Business Profile: NAP, Call, Directions, Reviews links
- `robots.txt` and `sitemap.xml`
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy)

Built-in from Next.js:

- Minify HTML & CSS
- Live reload
- Cache busting

## Included Components

- Navbar
- Hero
- Community highlights
- Vertical features
- Lead capture form and map (Call, Directions, Reviews)
- FAQ section
- CTA banner
- Footer

## Philosophy

- Minimal code
- SEO-friendly
- Production-ready

## Project Structure

```
.
├── README.md
├── next.config.js
├── public
│   ├── assets/images
│   ├── robots.txt
│   └── sitemap.xml
├── src
│   ├── background
│   ├── button
│   ├── components      # FAQSection, LeadCaptureForm, MapEmbed, CommunityHighlights
│   ├── cta
│   ├── feature
│   ├── footer
│   ├── hero
│   ├── layout
│   ├── navigation
│   ├── pages
│   │   └── api/leads    # Lead submission endpoint
│   ├── styles
│   ├── templates
│   └── utils
├── tailwind.config.js
└── tsconfig.json
```

## Requirements

- Node.js and npm

## Getting Started

```bash
cd heritageatstonebridgehomes
npm install
npm run dev
```

Open http://localhost:3000. Next.js may take a moment to compile on first run.

## Customization

Key files:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png` — favicon ([generate at favicon.io](https://favicon.io/favicon-converter/))
- `src/styles/global.css` — global CSS (Tailwind)
- `src/utils/AppConfig.ts` — site config and NAP (phone, address, GBP URLs)
- `src/pages/index.tsx` — entry page (uses Base template)
- `src/templates/Base.tsx` — Base layout and component blocks
- `src/templates/*` — section blocks (Hero, Footer, Banner, etc.)
- `src/*` — atomic components used by templates

Layer:

- Entry: `index.tsx` in `src/pages`
- Base template: `Base.tsx` in `src/templates`
- Component blocks: `src/templates/*`
- Atomic components: `src/*`

**Important:** NAP (Name, Address, Phone) in AppConfig must exactly match your Google Business Profile. Verify monthly.

## Deploy to production

Run locally in production mode:

```bash
npm run build
npm run start
```

HTML and CSS are minified; unused Tailwind CSS is removed.

Optimized production build (clean + build):

```bash
npm run build-prod
```

Output is in the `.next` folder (or `out` if using static export). Deploy with any hosting service.

### Netlify

`netlify.toml` is configured. Clone the repo on your GitHub account and connect to Netlify for one-click deploy.

### Vercel

Import the project in [Vercel](https://vercel.com) and deploy.

## VSCode (optional)

Install suggested extensions from `.vscode/extension.json`. Settings and Debug configuration are included for PostCSS, ESLint, Prettier, and TypeScript. For project-wide type checking, run a build with **Cmd + Shift + B** (Mac).

## License

MIT License. See [LICENSE](LICENSE).

Based on [Next-JS-Landing-Page-Starter-Template](https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template).
