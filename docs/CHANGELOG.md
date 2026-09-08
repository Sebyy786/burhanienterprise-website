# Changelog

All notable changes to the **Burhani Enterprise Website** will be documented in this file.
The project adheres to sprint-based versioning aligned with project tickets.

## [Sprint BE-005.0] — 2026-09-08

### Added
- **GitHub Pages CI/CD Workflow (`.github/workflows/deploy.yml`):** Implemented official Astro GitHub Pages deployment workflow using `withastro/action@v3` with Node 22, explicit `pages: write` and `id-token: write` permissions, static artifact building, and automated deployment trigger on pushes to `main`.

---

## [Sprint BE-004.4] — 2026-09-08

### Added
- **Cinematic Dark Hero Section (`src/sections/hero/Hero.astro`):** Root hero composer combining ambient backdrop, headline content, floating division cards, and core performance stats.
- **Ambient Hero Background (`src/sections/hero/HeroBackground.astro`):** Deep navy radial backdrop, glowing gold ambient orbs, and subtle technical engineering grid with top/bottom edge hairline transitions.
- **Hero Typography & Content (`src/sections/hero/HeroContent.astro`):** High-impact fluid typography featuring `text-display`, gold gradient typography accents, compliance trust badge, and B2B value proposition.
- **Dual Action CTAs (`src/sections/hero/HeroCTA.astro`):** Primary "Request B2B Quote" with interactive hover lift and secondary "Explore Product Divisions" glass button, complemented by material traceability micro-badges.
- **Three Floating Business Cards (`src/sections/hero/HeroDivisionCards.astro`):** Reusable glass cards representing core business verticals (Fasteners & Fixings, Valves & Flanges, Rigging & Heavy Hardware) with authentic technical vector placeholders, specification highlights, and zero founder/unverified photos.
- **Trust & Performance Metrics Bar (`src/sections/hero/HeroStats.astro`):** Responsive 4-metric glass bar highlighting 5,000+ SKUs, 100% MTR Traceability, DIN/ISO Global Compliance, and <24hr Priority Dispatch.
### Changed (QA Patch — Business Content Correction)
- **Business Content Alignment:** Removed all extraneous fastener, piping, flange, and rigging content.
- **Removed Unsupported Claims:** Stripped unverified claims (ISO 9001, DIN / ASTM, ANSI / ASME, MTR Traceability, 5,000+ SKUs, 24hr Dispatch).
- **Core Division Cards Updated:** Sourced the three authentic business divisions in `HeroDivisionCards.astro`:
  1. *Gas Solutions* (Manifold systems, pressure regulation stations, pipeline distribution)
  2. *Weighing Solutions* (Pit & pitless truck weighbridges, digital load cells, automation)
  3. *Software Solutions* (Weighbridge management software, ERP bridges, cloud analytics)
- **Honest Trust Pillars in HeroStats:** Replaced fabricated metrics with genuine pillars (3 Specialized Divisions, Industrial-Grade Engineering, Precision Calibrated Systems, and End-to-End Turnkey Delivery).
- **Updated Business Profile & Architecture:** Refreshed `src/data/business.ts` and `docs/BUSINESS_CONTENT.md` to reflect the company's true technical offerings.

---

## [Sprint BE-004.3] — 2026-09-08

### Added
- **Premium Navigation System (`src/components/layout/Navbar.astro`):** Sticky navigation bar supporting three distinct visual states: `transparent` (page top), `scrolled glass` (backdrop blur with gold hairline border upon scroll), and `mobile-open solid` (solid dark luxury background during mobile menu activation).
- **Data-Driven Menu & Business Modules:**
  - `src/data/navigation.ts`: Centralized menu routing with English and Gujarati (`ગુજરાતી`) labels.
  - `src/data/business.ts`: Corporate identity attributes, WhatsApp inquiry links, and contact parameters.
- **Brand Wordmark (`src/components/layout/BrandWordmark.astro`):** Typographic logo placeholder supporting `size` (`sm` | `md` | `lg`), `color` (`gold` | `white` | `monochrome`), and `showSubtitle` flags (adhering strictly to no-logo-until-provided directive).
- **Animated Nav Links (`src/components/layout/NavLink.astro`):** Desktop navigation link with animated gold underline hover effects (`after:w-0 hover:after:w-full`) and touch-optimized mobile links.
- **Accessible Mobile Menu Drawer (`src/components/layout/MobileMenu.astro`):** Full-featured glass drawer including focus trap, ESC key dismissal, backdrop outside-click dismissal, body scroll locking, and focus restoration to the hamburger button.
- **Layout Integration & Offset (`src/layouts/BaseLayout.astro`):** Replaced manual spacers by introducing `--header-height` (`5rem`) and `--header-height-mobile` (`4.25rem`) CSS variables in `src/styles/theme.css` to offset `<main>` automatically.

---

## [Sprint BE-004.2] — 2026-09-08

### Added
- **Global Theme Tokens (`src/styles/theme.css`):** Comprehensive CSS custom properties for Navy + Gold palette, luxury gold gradients, dark navy radial gradients, radius scale (`sm` to `2xl`), and shadow scale (`soft`, `glass`, `gold-glow`).
- **Fluid Typography System (`src/styles/typography.css`):** Clamp-based responsive typography scale featuring Poppins for headings, Inter Variable for body, and Noto Sans Gujarati, plus typography utility classes.
- **Global Stylesheet Enhancements (`src/styles/global.css`):** Full modern CSS reset, smooth scrolling, gold text selection styling, dark luxury custom scrollbars, high-visibility `:focus-visible` keyboard rings, and `prefers-reduced-motion` compliance.
- **Base Layout (`src/layouts/BaseLayout.astro`):** Root HTML5 shell with Open Graph and Twitter metadata, Google Fonts preconnect, skip-to-content accessibility link, ambient glow background layer, and gold monogram favicon placeholder.
- **Accessible UI Component Primitives (`src/components/ui/`):**
  - `Button.astro`: Polymorphic button/link supporting `primary`, `secondary`, `outline`, and `ghost` variants with responsive sizing.
  - `Badge.astro`: Luxury status badges with glowing pulses and multi-variant support.
  - `GlassCard.astro`: Dark glassmorphism card container with backdrop blur, hover elevations, and gold hairline glints.
  - `Container.astro`: Responsive horizontal constraint wrapper with multi-size options.
  - `Section.astro`: Semantic layout section with vertical rhythm and background options.
  - `ThemeToggle.astro`: Accessible toggle element permanently locked to Dark Luxury theme.

---

## [Sprint BE-004.1] — 2026-09-08

### Added
- **Astro 5 Architecture:** Initialized Astro 5 with `output: 'static'` for production static site generation.
- **Tailwind CSS 4:** Configured `@tailwindcss/vite` plugin with custom luxury dark theme tokens (Navy + Gold palette).
- **TypeScript Strict Mode:** Enabled strict null checks and path alias mappings (`@components/*`, `@layouts/*`, `@sections/*`, etc.).
- **Linting & Formatting:** Integrated ESLint 9 (flat config with `eslint-plugin-astro`) and Prettier (`prettier-plugin-astro`).
- **Environment Templates:** Created `.env.example`, `.env.local.example`, and `.env.production.example`.
- **Directory Scaffolding:** Established structured directories across `src/` (`assets`, `components/business`, `components/layout`, `components/ui`, `data`, `layouts`, `lib`, `pages`, `sections`, `styles`, `types`) and `public/` (`brands`, `hero`, `images`, `icons`).
- **Documentation Suite:** Authored `MASTER_PLAN.md`, `BRAND_GUIDELINES.md`, `CHANGELOG.md`, `DEPLOYMENT.md`, `BUSINESS_CONTENT.md`, `SEO_PLAN.md`, and comprehensive `README.md`.
- **Minimal Page Shell:** Added `src/pages/index.astro` as a valid build entry point without premature UI components.

---

## [Sprint BE-003.1] — 2026-09-08

### Added
- **Git Repository Isolation:** Initialized local Git repository on `main` branch.
- **Local Identity Configuration:** Configured repository-specific `user.name = "Sebyy786"` and `user.email = "96887304+Sebyy786@users.noreply.github.com"`.
- **SSH Remote Routing:** Attached remote `origin` to `git@github-sebyy786:Sebyy786/burhanienterprise-website.git` utilizing existing SSH host alias.
- **Security & Integrity:** Verified zero modification to global Git config, Windows Credential Manager, or external repositories.
