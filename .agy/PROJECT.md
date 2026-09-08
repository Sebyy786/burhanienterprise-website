# Project: Burhani Enterprise Website

## 1. Executive Overview
- **Project Name:** Burhani Enterprise Website
- **Workspace:** `burhanienterprise-website`
- **Purpose:** A high-performance, dark-mode luxury corporate web presence for Burhani Enterprise showcasing premium products and services.

---

## 2. Technology Stack & Infrastructure
- **Framework:** Astro 5
  - Static Site Generation (SSG) with optimized island architecture.
  - Minimal client-side JavaScript to ensure near-instantaneous load times.
- **Styling:** Tailwind CSS 4
  - Modern utility-first styling with custom theme tokens.
  - Native CSS variables for color management.
- **Deployment:** GitHub Pages
  - Automated deployment workflow via GitHub Actions.
- **Domain & DNS:** Cloudflare Custom Domain
  - Edge caching, custom domain routing, SSL/TLS, and security headers.

---

## 3. Brand & Visual Design System
- **Aesthetic:** Premium Dark Luxury
  - High-end dark ambiance with refined typography, subtle glows, and metallic finishes.
- **Color Palette:** Navy + Gold
  - **Primary Navy / Midnight Blue:** Deep obsidian and midnight navy backgrounds, dark card surfaces, and subtle contrast boundaries.
  - **Accent Gold:** Metallic and champagnes/golds (`#D4AF37`, `#F3E5AB`, `#AA771C`) for accents, primary action buttons, key metrics, and border highlights.
  - **Typography & Neutrals:** Warm ivory and crisp whites for readability, muted slate for secondary captions.
- **Asset & Imagery Guidelines:**
  - **Real Product Photography Only:** Strictly authentic product photos; no generic or irrelevant stock images.
  - **No Founder Photos:** Founder and personal executive photos are excluded.
  - **No Logo Until Provided:** Do not use temporary or fictitious logo graphics. Use a refined typographic wordmark until the official brand logo asset is provided.
- **Responsiveness:**
  - Mobile-first responsive design ensuring seamless experience from mobile viewports up to 4K displays.

---

## 4. Performance & Accessibility Standards
- **Accessibility:** WCAG 2.1 AA Compliance
  - Full keyboard navigability with clear visual focus indicators.
  - Strict color contrast ratio adherence against dark backgrounds.
  - Accessible names, proper heading hierarchy (`h1`-`h6`), and ARIA roles where required.
- **Lighthouse Performance Target:**
  - Target score **> 95** across all four categories:
    - **Performance** (> 95)
    - **Accessibility** (> 95)
    - **Best Practices** (> 95)
    - **SEO** (> 95)
- **Asset Optimization:**
  - Optimized image delivery via Astro Image / modern formats (WebP/AVIF).
  - Font optimization with `font-display: swap` and minimal render-blocking resources.

---

## 5. Git & Development Workflow
- **Commit Message Convention:**
  - Sprint-based commit identifiers must be used for all commits (e.g., `BE-004.1`, `BE-004.2`).
  - Format: `<SPRINT_ID>: <Concise description of changes>`
- **Repository Isolation:**
  - **Strict Constraint:** Never modify, create, or delete any files outside this repository directory.
  - All dependencies, scripts, configuration, and assets must stay strictly within this workspace.

---

## 6. Production Design QA Rule
- **No commit may be pushed to `origin/main` until screenshots are reviewed and approved.**
- **Required artifacts for every UI sprint:**
  1. Desktop 1440 screenshot.
  2. Tablet 768 screenshot.
  3. Mobile 320 screenshot.
  4. Lighthouse screenshot.
  5. Git diff summary.
  6. Build + Astro check output.
- **Only after explicit QA approval may Antigravity push.**
