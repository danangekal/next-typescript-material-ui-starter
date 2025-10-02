# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15 + React 19 + TypeScript 5 + Material UI 7 starter template with PWA support, configured with strict TypeScript settings, Biome for linting/formatting, and Husky pre-commit hooks.

## Common Commands

### Development
- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server

### Code Quality
- `pnpm lint` - Run Biome linter (check only)
- `pnpm lint:fix` - Run Biome and auto-fix issues
- `pnpm format` - Format code with Biome
- `pnpm check` - Run Biome check and auto-fix (linting + formatting)

### Docker
- `docker build -t next-typescript-material-ui-starter .` - Build optimized multi-stage Docker image
- `docker run --rm -it -p 3000:3000 next-typescript-material-ui-starter` - Run container
- Multi-stage build with pnpm, Node.js 22, and non-root user for security

### CI/CD
- **CI Workflow**: Runs on push/PR to main - linting, type-checking, and building
- **Docker Workflow**: Builds and pushes Docker image to Docker Hub
- Uses pnpm v9, Node.js 22, and Biome for fast, reliable builds

## Architecture

### Emotion Cache Setup (Critical for SSR)
The project uses Emotion for CSS-in-JS with Material UI. The integration requires careful setup to avoid hydration mismatches:

1. **Client-side cache** (`utility/createEmotionCache.ts`): Creates Emotion cache with `key: 'css'` and `prepend: true` for proper style ordering
2. **_app.tsx**: Wraps app with `CacheProvider` → `ThemeProvider` → `CssBaseline`
3. **_document.tsx**: Server-side rendering extracts critical CSS chunks using `createEmotionServer` and injects them as style tags to prevent FOUC
4. **Theme configuration** (`components/theme.ts`): CSS variables are disabled (`cssVariables: false`) to prevent `ThemeProviderNoVars` hydration warnings with MUI v7

**Important**: Never wrap `<Head>` component inside other HTML elements (like `<nav>`) as it causes hydration mismatches. `<Head>` contents are hoisted to document `<head>` while wrappers stay in body.

### Path Aliases
TypeScript configured with `@/*` alias mapping to project root (tsconfig.json paths). Use `@/components/...`, `@/utility/...`, etc.

### Theme Configuration
Material UI theme defined in `components/theme.ts`. Modify this file to change global colors, typography, or component defaults.

### PWA Configuration
PWA configured via Serwist (`@serwist/next`) in `next.config.js`:
- Service worker source: `app/sw.ts`
- Compiled to: `public/sw.js`
- Disabled in development (`NODE_ENV === 'development'`)
- Advanced caching strategies for fonts, images, API calls, and static assets
- Supports offline functionality with Network-First and Cache-First strategies

### TypeScript Settings
Strict mode enabled with additional checks:
- `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`
- `strict: true` with all sub-flags enabled
- Module resolution: `Bundler`

### Code Quality Tools
Biome (`biome.json`) - Fast, all-in-one linter and formatter:
- Replaces ESLint + Prettier with a single tool
- Configured with 2-space indentation, single quotes, and semicolons
- Custom rules: `noConsole: error`, `noUnusedVariables: error`, `noExplicitAny: warn`
- Line width: 80 characters
- Automatically organizes imports and formats code

Pre-commit hooks (Husky + lint-staged):
- Biome checks and auto-fixes all staged files (JS/TS/TSX/JSON/CSS/etc)
- Configured via `.lintstagedrc.json`

## Requirements
- **Node.js**: >= 22.0.0
- **pnpm**: >= 10.0.0 (enforced via `packageManager` field in package.json)
