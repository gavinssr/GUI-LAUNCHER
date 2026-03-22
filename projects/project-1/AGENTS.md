<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project-1 Consumer App Instructions

## Mission
This project is a business consumer app inside the FQL-GUI-Launcher monorepo.

- It consumes shared UI from `../../ai-agent-design-system`.
- It is used for real pages, flows, features, and app composition.
- It is not the source of truth for shared primitives, semantic wrappers, or token mapping.

## Required reading order
Before editing code in this project, always read in this order:
1. `../../AGENTS.md`
2. `../AGENTS.md`
3. `./AGENTS.md`
4. relevant files in `../../ai-agent-design-system`
5. local project files

## Consumer rules
- Prefer existing components from `../../ai-agent-design-system` before creating local UI.
- Do not recreate shared primitives that belong in `ai-agent-design-system/components/ui/*`.
- Do not recreate shared semantic wrappers that belong in `ai-agent-design-system/components/fql/*`.
- If a missing pattern looks reusable across projects, propose promoting it into the design system first.

## Styling rules
- Treat this project as a consumer of upstream styling decisions.
- Do not create a second design-system theme here unless explicitly approved.
- Do not hardcode hex colors, radius values, or shadow values when upstream semantic tokens should be used.
- Keep local styling focused on page assembly and business-specific layout.

## Implementation behavior
- Before multi-file edits, state the target package and a short plan.
- After implementation, list changed files.
- Explicitly mark any reusable UI as a promotion candidate for the design system.

## What belongs here
- Business pages
- Feature composition
- Route-level assembly
- Project-specific data flow and interaction logic

## What does not belong here
- Shared primitives
- Shared semantic wrappers
- Registry source files
- Global token source of truth