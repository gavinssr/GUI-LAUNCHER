# FQL-GUI-Launcher Monorepo Agent Guide

## Mission
This repository is the engineering root for the FQL GUI system.

- `ai-agent-design-system` is the design system source of truth.
- `projects/*` are consumer applications and business implementation projects.
- `docs/` is the formal engineering record system.

## Read This First

1. `docs/index.md`
2. `docs/architecture/monorepo.md`
3. `docs/architecture/layering.md`
4. `docs/architecture/registry.md` if the task touches registry or local distribution
5. target package `AGENTS.md`
6. target package `.cursor/rules/*`

## Package Boundaries

- Reusable primitives go to `ai-agent-design-system/components/ui/*`.
- Reusable semantic wrappers go to `ai-agent-design-system/components/fql/*`.
- Theme tokens and semantic theme mapping live in `ai-agent-design-system/app/globals.css`.
- Registry-related files stay in `ai-agent-design-system`.
- Real business pages, routes, feature flows, and app wiring belong in `projects/*`.

## Working Rules

- If a UI pattern may be reused across multiple projects, propose implementing it in the design system first.
- If a task is business-specific, implement it in the target consumer project and consume existing design-system components.
- Do not duplicate base primitives inside `projects/*`.
- Do not hardcode design tokens in consumer projects if equivalent semantic tokens already exist in the design system.

## Docs Map

- architecture: `docs/architecture/*`
- harness rules: `docs/harness/*`
- runbooks: `docs/runbooks/*`
- execution archives: `docs/exec-plans/*`
- long-lived decisions: `docs/adr/*`
- promotion reviews: `docs/reviews/promotion/*`

## Output Expectations

When finishing a task, always list:
- changed files
- package scope
- whether anything should be promoted back into the design system
