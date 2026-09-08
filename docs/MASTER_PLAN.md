# Burhani Enterprise Website — Master Plan

## 1. Executive Summary
The Burhani Enterprise web platform is designed as an ultra-fast, premium dark luxury B2B website showcasing the brand's products, engineering supplies, and commercial solutions. The platform is engineered for zero runtime overhead, sub-second load times, mobile-first responsiveness, and flawless visual craftsmanship.

---

## 2. Core Architecture & Technology Stack
- **Framework:** [Astro 5](https://astro.build/) — Island architecture, static-site generation (`output: 'static'`).
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) — Integrated via `@tailwindcss/vite` with native CSS variables and `@theme` tokens.
- **Language:** TypeScript 5 (Strict Mode enabled).
- **Code Quality:** ESLint 9 (Flat Config with `eslint-plugin-astro`), Prettier with `prettier-plugin-astro`.
- **Hosting & CI/CD:** GitHub Pages via automated GitHub Actions pipeline.
- **DNS, Edge & CDN:** Cloudflare Custom Domain (SSL/TLS Full/Strict, Brotli, edge caching, DDoS mitigation).

---

## 3. Sprint Roadmap

### Sprint BE-003.1: Git Repository Isolation (Completed)
- Local Git repository initialization with `main` branch.
- Repository-local identity mapping (`Sebyy786` / `96887304+Sebyy786@users.noreply.github.com`).
- Dedicated SSH remote configuration using alias `github-sebyy786`.
- Verified push safety and total isolation from global machine configurations.

### Sprint BE-004.1: Astro & Tailwind Foundation (Current)
- Initialize Astro 5 project skeleton with static output.
- Configure Tailwind CSS 4 with `@tailwindcss/vite` and Navy + Gold theme tokens.
- Establish strict TypeScript configuration and path aliases.
- Setup ESLint, Prettier, and environment variable templates.
- Scaffold production directory architecture and author core engineering documentation.

### Sprint BE-004.2: Design Tokens & Core Layout Infrastructure
- Establish responsive layout shell (`BaseLayout.astro`).
- Implement accessible luxury Header and Navigation with mobile drawer.
- Implement comprehensive corporate Footer with contact references and sitemap links.
- Define typographic hierarchy (Serif accents for headlines, clean Sans-serif for body).

### Sprint BE-004.3: Hero Section & Luxury Brand Aesthetics
- Build high-impact Hero section with dark navy gradients, subtle ambient glows, and gold accent borders.
- Typographic brand wordmark implementation (adhering to no-logo-until-provided constraint).
- Clear primary call-to-actions (Product Inquiries, Catalog exploration).

### Sprint BE-004.4: Business Capabilities & Product Categories
- Architecture for real product catalog data (`src/data/products.ts`).
- Interactive product category cards with gold micro-interactions.
- Strict adherence to real product photography only (no founder photos, no generic stock).

### Sprint BE-004.5: Contact & Inquiries Architecture
- Inquiry modal / contact form component with accessible form fields.
- Direct communication channels (WhatsApp, phone, direct email).
- Client-side form validation with accessible error states.

### Sprint BE-004.6: Accessibility (WCAG 2.1 AA) & Performance Audit
- Full keyboard navigation and visible focus ring audits.
- Color contrast validation across all dark surfaces (minimum 4.5:1 for body, 3:1 for large text).
- Lighthouse optimization targeting >95 across Performance, Accessibility, Best Practices, and SEO.

### Sprint BE-004.7: GitHub Pages & Cloudflare Production Deployment
- Configure automated GitHub Actions deployment workflow.
- Setup Cloudflare custom domain DNS, SSL/TLS, and edge caching rules.
- Production verification and handover.

---

## 4. Key Project Constraints & Rules
- **No Founder Photos:** Exclude all founder and personal imagery.
- **No Logo Until Provided:** Use elegant typographic wordmarks only.
- **Real Product Photography Only:** Unverified or generic stock images are strictly forbidden.
- **Zero Global Pollution:** All Git commits must use repository-local identity.
- **Sprint Commit Format:** Commit messages must strictly follow the format `BE-004.1: <Summary>`.
