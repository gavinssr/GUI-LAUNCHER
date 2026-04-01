# Primitive Preview Boundary Runbook

## Purpose

`app/primitive-preview/*` is the acceptance stage for `components/ui/*` primitives.
It is not a reusable consumer surface.

## Boundary

- Stage shell: `app/primitive-preview/layout.tsx`, `primitive-preview-nav.tsx`, `_internal/*`, `_shadcn/*`, and stage-only sections in `preview.css`
- Detail container: `app/primitive-preview/[id]/page.tsx`
- Rendered primitive area: `.primitive-preview-detail-body`
- Source of truth for displayed primitives: `app/primitive-preview/registry.tsx`

## Rules

- Use the preview page to provide stage chrome only: page title, nav, drawer, sidebar, and detail frame wrappers.
- Keep stage-specific token overrides and private shadcn usage inside `app/primitive-preview/_internal/*`, `app/primitive-preview/_shadcn/*`, and stage-only selectors in `preview.css`.
- Treat `.primitive-preview-detail-body` as the closest preview equivalent to consumer context. Do not add broad shell selectors that restyle the primitive content rendered inside it.
- When adding a new primitive preview, update `registry.tsx` and the primitive's own render content first. Do not add one-off shell styling in `layout.tsx` or `preview.css` for a single primitive unless the shell itself is changing.
- Do not import preview stage-only components, styles, or private class contracts into `projects/*` or other business/consumer pages. Stage assets exist only to serve the stage.

## Default Change Surface

- Default allowlist: `app/primitive-preview/registry.tsx` and the primitive's own render content.
- Treat `.primitive-preview-detail-body` as the display boundary for new primitive demos.
- Do not add per-primitive stage exceptions in `layout.tsx`, `primitive-preview-nav.tsx`, `_internal/*`, `_shadcn/*`, or `preview.css` unless the stage itself is evolving for all primitives.
- If a new primitive seems to require stage-shell customization, stop and verify whether the requirement actually belongs to the primitive render content instead.

## Mechanical Guardrail

- Run `pnpm run check:primitive-preview-boundary` to ensure preview stage-only assets are not imported outside `app/primitive-preview/**`.
- This check is part of `pnpm run harness:verify:design-system`.

## Review Checklist

- Does the change stay inside stage chrome, or does it affect rendered primitive content?
- If a style starts from a preview shell selector, can it accidentally cascade into `.primitive-preview-detail-body`?
- Is a new preview dependency being added under `_internal/*` or `_shadcn/*` instead of becoming an accidental consumer-facing primitive?
- Is the change being made in `registry.tsx` rather than through a stage-level exception?
