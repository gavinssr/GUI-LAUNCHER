<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Agent Design System Guide

## Mission
This repository is used to build an internal FQL design system on top of shadcn/ui for AI-assisted UI implementation.

## Read This First

1. `../docs/index.md`
2. `../docs/architecture/layering.md`
3. `../docs/architecture/registry.md` if the task touches registry or distribution
4. `../docs/runbooks/local-dev.md`
5. `.cursor/rules/ui-system.mdc`
6. `app/globals.css`
7. relevant files in `components/ui/*`, `components/fql/*`, `app/primitive-preview/*`

## Package Boundary

- `components/ui/*` is the shadcn primitive layer.
- `components/fql/*` is the FQL semantic component layer.
- `app/*` is the page composition layer.
- Business-specific UI should not be implemented inside `components/ui/*`.

## Non-Negotiables

- Use semantic theme tokens from `app/globals.css`.
- Do not hardcode hex colors, shadow values, or radius values in TSX/JSX.
- Prefer existing shadcn primitives from `@/components/ui/*`.
- If a missing primitive is needed, propose the exact shadcn CLI command before implementation.
- Do not create another theme file.
- Keep accessibility behavior from shadcn and Radix intact.
- Any new file under `components/ui/*` must add a matching preview block to `app/primitive-preview/registry.tsx`.

## Docs Map

- local development: `../docs/runbooks/local-dev.md`
- registry workflow: `../docs/runbooks/registry.md`
- verification expectations: `../docs/harness/verification-matrix.md`
- promotion policy: `../docs/harness/promotion-policy.md`

## Output Expectations

- changed files
- package scope
- promotion candidate
