# Repository Guidelines

## Project Structure & Module Organization
- Astro 5 project with routes in `src/pages/*.astro`; `BaseLayout.astro` centralizes nav/footer and imports `src/styles/global.css`.
- Brand tokens and utility helpers live in `src/styles/global.css` (Tailwind v4 `@theme`; add new colors/spacing there).
- Project copy and image references are in `src/data/projects.ts`; corresponding assets reside under `src/assets/` (images/logos) while public icons live in `public/`.
- `components/` is available for reusable UI pieces; prefer colocating page-specific fragments near their route when possible.

## Build, Test, and Development Commands
- `npm install` to sync dependencies (lockfile is `package-lock.json`; use npm for consistency).
- `npm run dev` to start the local server (Astro defaults to port 4321) with hot reload.
- `npm run build` to produce a static build in `dist/`; run before publishing changes.
- `npm run preview` to serve the built site for final QA.
- `npm run astro check` for Astro/TypeScript validation when editing layouts or data models.

## Coding Style & Naming Conventions
- Use Astro/TypeScript modules with ES imports; prefer `const` and typed props for layout/page data.
- Keep markup semantic and responsive-first; lean on Tailwind utility classes already used in pages and layout.
- Extend design tokens through `@theme` in `global.css`; reuse CSS utilities like `.section-padding` and `.section-container` for spacing consistency.
- For assets, use descriptive kebab-case filenames; place reusable media in `src/assets/` and route-specific uploads alongside their data entry.

## Testing Guidelines
- No automated tests yet; perform manual sweeps after changes: nav highlighting, responsive layout at mobile/tablet/desktop, and correct rendering of project data cards.
- Run `npm run build` and, when touching data/layout logic, `npm run astro check` to catch template or type errors before opening a PR.

## Commit & Pull Request Guidelines
- Follow the existing history: short, present-tense summaries (`update projects.ts`, `Standardize section padding`); avoid long prefixes.
- Include PR details: what changed, why it’s needed, and any risk areas; attach before/after screenshots for visual updates and link related issues.
- Keep diffs focused; update or add data entries and assets together so reviewers can verify content in context.

## Security & Configuration Tips
- Do not commit secrets; the project currently has no `.env` needs. If API keys are added later, document them and use environment variables.
- Optimize images before adding to `src/assets/images/` to keep the static build lean; prefer `.jpeg` for photos and `.svg` for vector marks.
