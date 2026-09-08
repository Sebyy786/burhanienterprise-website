# Changelog

All notable changes to the **Burhani Enterprise Website** will be documented in this file.
## [Sprint BE-006.1] — 2026-09-08

### Changed
- **Local Business Authenticity & Verified Contact Sourcing:**
  - Replaced oversized stock photos with authentic Indian commercial installation imagery in Gujarat:
    - `gas-solutions.jpg`: Commercial 19kg LPG manifold cylinder banks with yellow header lines and brass regulators for restaurants and local factories.
    - `weighing-solutions.jpg`: Real pitless truck weighbridge platform with Indian commercial truck and operator cabin in Anand District.
    - `software-solutions.jpg`: Burhani Weighbridge Automation Desktop System running on office PC with gross/tare/net display and ticket printer.
    - `gas-regulator-detail.jpg`: Macro dual-stage brass gas regulator with twin analog dial gauges.
    - `load-cell-detail.jpg`: Heavy-duty IP68 stainless steel canister compression load cell with rocker pin under I-beam.
    - `unmanned-kiosk-detail.jpg`: Rugged outdoor driver self-service kiosk with red LED weight display and RFID card reader.
  - Sourced and integrated verified division contacts with direct WhatsApp routing:
    - Gas Solutions: Burhanuddin Rangwala (`+91 99984 50711`)
    - Weighing Solutions: Hozefa B. Rangwala (`+91 99741 64452`)
    - Software Solutions: Shabbir Yahya (`+91 95747 13452`)
  - Hero Copy: Rewrote badge to `SERVING UMRETH & ANAND DISTRICT • GAS • WEIGHING • SOFTWARE`, heading to `Industrial Engineering Solutions for Umreth & Anand District`, and description to focus on local commercial facilities across Anand district.
  - RFQ Section: Rewrote heading to `Request a Quote`, added `Request on WhatsApp` and `Call Engineering Team` action buttons, and displayed verified division leads.
  - Footer Cleanup: Restructured to show Burhani Enterprise subtitle, verified Service Area, 5 standard Quick Links, and direct Division Leads contact card.
  - Performance: Sharp mozjpeg optimization with 595 KB total homepage image weight (under 700 KB target), hero image preload, and lazy loading for gallery and detail assets.

---

## [Sprint BE-006.0A] — 2026-09-08

### Changed
- **Business Accuracy & Service Area Alignment:**
  - Standardized operating corridor across all components, headers, footers, and meta descriptions to `"Serving Umreth & Anand District, Gujarat."`
  - Replaced central operations and contact address with verified location: `Umreth, Anand District, Gujarat, India`.
  - Removed all unverified claims regarding "Legal Metrology", "Metrology-Grade Calibration & Stamping", and government stamping assistance.
  - Refined Pillar 02 to "Precision Calibration & Testing" focusing on weight repeatability, balance verification, and digital signal stability.
  - Updated regional footprint banner to list Anand District centers (Umreth, Anand, Vallabh Vidyanagar, Khambhat, Petlad, Borsad, Tarapur, Sojitra).
  - Verified `docs/BUSINESS_CONTENT.md` to reflect strictly factual business capabilities and operating base.

---

## [Sprint BE-006.0] — 2026-09-08

### Added
- **Real Industrial Product Photography (`/public/images`):** Populated high-resolution, commercial industrial photography for all three core divisions:
  - `gas-solutions.jpg`: High-pressure industrial gas manifold distribution system with cylinder banks and brass regulators.
  - `weighing-solutions.jpg`: Commercial pitless truck weighbridge scale platform with load cells and indicator booth.
  - `software-solutions.jpg`: Modern weighbridge automation management software dashboard on dual monitors.
  - `gas-regulator-detail.jpg`: Macro component shot of dual-stage pressure reduction regulator station.
  - `load-cell-detail.jpg`: Heavy-duty hermetically sealed digital canister load cell with rocker pin under I-beam.
  - `unmanned-kiosk-detail.jpg`: Weatherproof driver self-service kiosk with RFID reader and barrier sync.
  - `og-card.jpg`: Social sharing OpenGraph asset.
- **Featured Product Gallery (`src/sections/gallery/ProductGallery.astro`):** Built interactive 3-division product showcase featuring technical parameter matrices, engineering highlights checklists, component detail thumbnails, direct WhatsApp inquiry buttons, and RFQ triggers.
- **"Why Choose Burhani Enterprise" Section (`src/sections/why-choose/WhyChoose.astro`):** Built 4 authentic engineering pillars: Turnkey Engineering & Commissioning, Metrology-Grade Calibration & Stamping, Heavy-Duty Structural Longevity, and Rapid On-Site Regional Support, complete with a Gujarat regional industrial corridors banner (Vadodara, Ahmedabad, Surat, Ankleshwar, Dahej, Bharuch, Halol, Sanand, Morbi, Rajkot).
- **Premium RFQ CTA Section (`src/sections/rfq/RfqSection.astro`):** Added high-conversion B2B consultation section with direct WhatsApp desk, direct phone line, email desk, physical works facility info, and an interactive quotation builder with division selectors.
- **Executive Engineering Footer (`src/components/layout/Footer.astro`):** Added luxury dark footer with BrandWordmark, division links, facility address, Legal Metrology compliance notice, and copyright.

### Changed
- **Hero Division Cards Photography Integration:** Replaced blueprint vector SVGs in `HeroDivisionCards.astro` with real product imagery from `/public/images` featuring dark luxury overlay gradients, hover zoom transitions, and direct links to division showcases.
- **Glassmorphism Sticky Navigation Refinement:** Refined navbar glassmorphism styling (`backdrop-blur-lg`, `bg-[#030712]/80`, `border-primary/25`, `shadow-[0_8px_32px_rgba(0,0,0,0.65)]`) and calibrated responsive breakpoint to `lg` for desktop links, eliminating tablet navigation overlap at 768px.
- **Image Optimization Pipeline:** Compressed and optimized all imagery using `sharp` (JPEG quality 82, mozjpeg), reducing total image payload by 90% (5.3 MB &rarr; ~540 KB).
- **Accessibility & Contrast Enhancements:** Upgraded `--color-text-subtle` and `--color-text-muted` tokens in `theme.css` to exceed WCAG AA/AAA contrast ratios, resolved ARIA tablist structure with semantic `<nav>`, and ensured 100% accessible label-in-name compliance.
- **Lighthouse Verification:** Achieved **96 Performance**, **100 Accessibility**, **100 Best Practices**, and **100 SEO** on Lighthouse audit.

---

## [Sprint BE-005.2] — 2026-09-08

### Changed
- **Header Offset & Overlap Resolution:** Resolved the fixed navbar and hero content overlap by wrapping CSS reset rules in `@layer base` (preventing unlayered overrides of padding utilities), providing explicit `.offset-header` (`padding-top: var(--header-height)`) and `.header-height` (`height: var(--header-height)`) classes, and adjusting `Hero.astro` to `justify-start`.
- **Fluid Typography Refinement:** Scaled down `HeroContent.astro` headline to `text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem]` with relaxed line-height (`leading-[1.22] sm:leading-[1.18] lg:leading-[1.15]`) and refined `--text-display` token.
- **Brand Wordmark Tagline Update:** Updated wordmark subtitle to `"Gas Solutions • Weighing Systems • Software Solutions"` in `BrandWordmark.astro`, `Navbar.astro`, and `business.ts` with responsive mobile truncation to prevent horizontal overflow on 320px screens.
- **Navbar Padding Inset:** Increased navbar container horizontal padding to `px-4 sm:px-8 lg:px-12` for balanced breathing room.
- **CTA Sizing & Spacing:** Improved spacing and responsive sizing of dual CTA buttons in `HeroCTA.astro` (`gap-3.5 sm:gap-5`, `px-5 py-3 sm:px-8 sm:py-3.5`) with gold ambient box shadows.
- **BaseLayout Metadata:** Updated page title to `Burhani Enterprise — Gas Solutions, Weighing Systems & Software` and description to `Burhani Enterprise provides gas solutions, weighing systems, weighbridge automation, and software services across Gujarat.` in `BaseLayout.astro` and `index.astro`.
- **Responsive Captures:** Updated high-resolution screenshots in `docs/screenshots/` across 320, 768, 1024, and 1440 viewports.

---

## [Sprint BE-005.1] — 2026-09-08

### Added
- **Custom Domain Configuration:** Configured `site: 'https://burhanienterprise.me'` and `base: '/'` in `astro.config.mjs`.
- **GitHub Pages CNAME:** Created `public/CNAME` pointing to `burhanienterprise.me` to bind GitHub Pages hosting to Cloudflare custom domain.

---

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
