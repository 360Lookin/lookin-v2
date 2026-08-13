# Repository Guidelines

If you can perform an action yourself, do so—including starting required apps and verifying the result.

## Project Structure & Module Organization

This is a Next.js App Router project. Routes, metadata, and global styles live in `app/`; reusable UI lives in `components/`. Store all supplied and generated site media under [`public/assets/`](public/assets/) in descriptive subfolders such as `illustrations/`. Keep launch decisions and missing inputs in `BUILD_NOTES.md`. Add automated tests under `tests/` or co-locate component tests when a test runner is introduced.

## Build, Test, and Development Commands

Use the committed `package.json` scripts:

- `npm install` installs dependencies from the lockfile.
- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run typecheck` validates TypeScript without emitting files.
- `npm run lint` runs the Next.js ESLint rules.

Do not document or depend on a command until its script is committed.

## Coding Style & Naming Conventions

Use two-space indentation for JavaScript, TypeScript, JSON, CSS, and Markdown. Name UI components in `PascalCase` (for example, `CampaignCard.tsx`), functions and variables in `camelCase`, and asset files in lowercase kebab-case (`hero-background.webp`). Favor small, focused modules and semantic HTML. Once formatting and linting tools are introduced, commit their configuration and run them before opening a pull request.

## Asset & Icon Guidelines

Use `@phosphor-icons/react` for interface icons. Keep icon weights consistent within a context, use `regular` by default and `bold` for emphasized actions, and give icon-only controls accessible labels. Do not introduce another icon library, icon fonts, raw icon PNGs, or emojis unless Phosphor lacks the required symbol.

Use WebP for opaque raster artwork and PNG only when transparency is required. Optimise dimensions before integration and provide meaningful alt text. Do not add permanent remote stock-image dependencies unless explicitly approved; the current hero image is the only approved exception.

## Testing Guidelines

No unit-test framework or coverage threshold exists yet. Until one is selected, every change must pass `npm run lint`, `npm run typecheck`, and `npm run build`, followed by desktop and mobile browser checks. Use descriptive future test names such as `LookinHome.test.tsx`. Cover navigation, enquiry links, responsive behaviour, accessibility, and animation fallbacks.

## Commit & Pull Request Guidelines

There is no existing Git history from which to infer a convention. Use concise, imperative commit subjects, optionally following Conventional Commits: `feat: add services landing page` or `fix: prevent empty contact submissions`. Keep each commit scoped to one logical change.

Pull requests should explain the purpose and implementation, identify testing performed, and link relevant issues. Include before-and-after screenshots for visual changes and note any new environment variables, dependencies, accessibility implications, or follow-up work.

## Security & Configuration

Never commit credentials, API keys, analytics secrets, or production customer data. Store local values in ignored `.env` files and commit a sanitized `.env.example` when configuration is introduced.
