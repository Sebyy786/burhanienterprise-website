# Changelog

All notable changes to the **Burhani Enterprise Website** will be documented in this file.
The project adheres to sprint-based versioning aligned with project tickets.

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
