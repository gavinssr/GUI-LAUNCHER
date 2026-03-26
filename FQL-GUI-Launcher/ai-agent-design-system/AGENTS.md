<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project-level agent instructions

## Mission
This repository is used to build an internal FQL design system on top of shadcn/ui for AI-assisted UI implementation.

## Required reading order
1. Read `AGENTS.md`.
2. Read `.cursor/rules/ui-system.mdc`.
3. Read `app/globals.css`.
4. Inspect `components/ui/*` before proposing new primitives.
5. Inspect `components/fql/*` before composing pages.

## UI architecture
- `components/ui/*` is the shadcn primitive layer.
- `components/fql/*` is the FQL semantic component layer.
- `app/*` is the page composition layer.
- Business-specific UI should not be implemented inside `components/ui/*`.

## Styling rules
- Use semantic theme tokens from `app/globals.css`.
- Do not hardcode hex colors, shadow values, or radius values in TSX/JSX.
- Prefer semantic utilities such as `bg-background`, `text-foreground`, `border-border`, `bg-primary`, `text-primary-foreground`, `bg-muted`, `text-muted-foreground`, `bg-accent`, and `text-accent-foreground`.
- Use destructive tokens for dangerous actions.
- Do not create another theme file.

## shadcn workflow
- Prefer existing shadcn primitives from `@/components/ui/*`.
- If a missing primitive is needed, propose the exact shadcn CLI command before implementation.
- Prefer composition and wrapper components instead of modifying base primitives directly.
- Keep accessibility behavior from shadcn and Radix intact.

## Implementation behavior
- Before writing code across multiple files, provide a short plan.
- After editing, list changed files.
- Use Server Components by default.
- Add `"use client"` only when browser interaction is required.
- Keep components focused and small.

## Output expectations
When implementing UI, the agent should:
1. identify reusable primitives,
2. identify FQL semantic components,
3. state file changes,
4. then generate code.

## Local registry workflow
- This package is the source of truth for local FQL registry definitions and registry build output.
- When working on reusable FQL semantic components, inspect `components/fql/*`, `components.json`, `registry.json`, and `public/r/*` before proposing new registry items.
- When a semantic component is stable and intended for cross-project reuse, prefer exposing it through the local `@fql` registry instead of copying code into consumer apps.
- For local registry verification, prefer these checks in order:
  1. ensure the design-system dev server is running on `http://localhost:3001`,
  2. verify `http://localhost:3001/r/registry.json`,
  3. verify an item such as `http://localhost:3001/r/fql-card.json`,
  4. verify CLI resolution with `pnpm dlx shadcn@latest view @fql/fql-card`.
- After changing `registry.json`, `components.json`, or reusable registry-backed components, run `pnpm run registry:build`.
- Do not publish page-level compositions as registry items.
- Prefer registry publication only for stable, reusable semantic components with clear APIs.

## Primitive preview acceptance
- The canonical primitive preview route is `app/primitive-preview/page.tsx` (`/primitive-preview`).
- All primitive previews are registered in `app/primitive-preview/registry.tsx`.
- Any new file added under `components/ui/*` must add a corresponding preview block to `primitivePreviewRegistry` in the same task.
- A primitive change is not considered complete until it is visible in `/primitive-preview`.
