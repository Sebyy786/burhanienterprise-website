# Burhani Enterprise Website

A high-performance, dark luxury B2B web platform for **Burhani Enterprise**, engineered to showcase certified industrial supplies, precision fasteners, commercial valves, and heavy engineering hardware.

---

## Technical Stack & Architecture

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Astro 5](https://astro.build/) | Static Site Generation (SSG) with zero-JS island architecture |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) | Integrated via `@tailwindcss/vite` with luxury Navy + Gold tokens |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict mode enabled across all components and scripts |
| **Code Quality** | [ESLint 9](https://eslint.org/) & [Prettier](https://prettier.io/) | Automated linting and formatting with Astro plugins |
| **Hosting & CI/CD** | [GitHub Pages](https://pages.github.com/) | Automated deployment pipeline via GitHub Actions |
| **Edge & CDN** | [Cloudflare](https://www.cloudflare.com/) | Custom domain DNS, edge caching, SSL/TLS, and DDoS mitigation |

---

## Core Project Guidelines & Constraints

- **Theme:** Premium Dark Luxury aesthetic with deep obsidian/midnight navy backgrounds and metallic gold accents.
- **Accessibility:** WCAG 2.1 Level AA compliance (minimum 4.5:1 text contrast ratio, full keyboard navigation).
- **Performance:** Lighthouse score target &ge; 95 across Performance, Accessibility, Best Practices, and SEO.
- **Imagery Rules:**
  - Strict: Real product photography only (no generic stock placeholders).
  - Strict: No founder or personal photos.
  - Strict: No logo graphics until officially approved (use refined typographic wordmarks).

---

## Documentation Suite

Detailed architectural specifications and guides are located in the [`docs/`](./docs/) directory:

- [**Master Plan (`docs/MASTER_PLAN.md`)**](./docs/MASTER_PLAN.md): Full sprint roadmap and milestones.
- [**Brand Guidelines (`docs/BRAND_GUIDELINES.md`)**](./docs/BRAND_GUIDELINES.md): Color palette hex codes, typography, and asset rules.
- [**Deployment Guide (`docs/DEPLOYMENT.md`)**](./docs/DEPLOYMENT.md): GitHub Pages workflow and Cloudflare custom domain runbook.
- [**Business Content Architecture (`docs/BUSINESS_CONTENT.md`)**](./docs/BUSINESS_CONTENT.md): Corporate overview, product catalog specs, and RFQ pathways.
- [**SEO & Performance Strategy (`docs/SEO_PLAN.md`)**](./docs/SEO_PLAN.md): Semantic keyword strategy, structured data (JSON-LD), and CWV targets.
- [**Changelog (`docs/CHANGELOG.md`)**](./docs/CHANGELOG.md): Historical record of all sprint releases.

---

## Getting Started

### Prerequisites
- **Node.js**: `v20.0.0` or higher (tested on `v22.14.0`)
- **npm**: `v10.0.0` or higher

### Installation

```bash
# Clone and enter directory
cd burhanienterprise-website

# Install dependencies
npm install

# Setup environment variables from template
cp .env.local.example .env
```

### Available NPM Scripts

```bash
# Start local development server at http://localhost:4321
npm run dev

# Run TypeScript and Astro type check
npm run check

# Lint files with ESLint
npm run lint

# Format files with Prettier
npm run format

# Compile static production build to dist/
npm run build

# Preview static production build locally
npm run preview
```

---

## Directory Architecture

```text
burhanienterprise-website/
├── .agy/                # Antigravity agent configuration and project rules
├── docs/                # Comprehensive technical and brand documentation
│   ├── BRAND_GUIDELINES.md
│   ├── BUSINESS_CONTENT.md
│   ├── CHANGELOG.md
│   ├── DEPLOYMENT.md
│   ├── MASTER_PLAN.md
│   └── SEO_PLAN.md
├── public/              # Static public assets
│   ├── brands/          # Partner and brand logos
│   ├── hero/            # High-resolution hero media
│   ├── icons/           # Custom SVG icons
│   └── images/          # Real product photography
├── src/                 # Application source code
│   ├── assets/          # Processed images and internal assets
│   ├── components/      # Reusable UI components
│   │   ├── business/    # Domain-specific components (RFQ forms, specs)
│   │   ├── layout/      # Shell components (Header, Footer, Navigation)
│   │   └── ui/          # Primitives (Buttons, Badges, Modals, Cards)
│   ├── data/            # Static data collections (products, categories)
│   ├── layouts/         # Page layout templates (BaseLayout)
│   ├── lib/             # Utility functions and helpers
│   ├── pages/           # File-based routing (Astro pages)
│   ├── sections/        # Composite landing page sections
│   ├── styles/          # Global styles & Tailwind CSS 4 theme setup
│   └── types/           # TypeScript interfaces and type definitions
├── .env.example         # Environment template
├── .env.local.example   # Local development environment template
├── .env.production.example # Production environment template
├── .gitignore           # Git ignore rules with environment protection
├── .prettierignore      # Prettier ignore rules
├── .prettierrc.mjs      # Prettier configuration
├── astro.config.mjs     # Astro configuration with Tailwind Vite plugin
├── eslint.config.mjs    # ESLint flat configuration
├── package.json         # Project manifests and dependencies
├── tsconfig.json        # Strict TypeScript configuration with path aliases
└── README.md
```

---

## Git Workflow & Engineering Rules

- **Sprint Commit Format:** Commit messages must follow the sprint ticket prefix convention:
  ```text
  BE-004.1: <Summary of changes>
  ```
- **Repository Isolation:** Never modify files outside this repository directory.
