# Projects Consumer Layer Agent Guide

## Mission
This directory contains business consumer projects inside the FQL-GUI-Launcher monorepo.

- `project-*` directories are real business applications, feature experiments, or delivery projects.
- These projects consume the FQL design system from `../ai-agent-design-system`.
- These projects are not the source of truth for shared primitives or shared semantic design-system components.

## Required reading order
Before changing any project inside this directory, always read in this order:
1. `../AGENTS.md`
2. `./AGENTS.md`
3. project-level `AGENTS.md` if it exists
4. local `.cursor/rules/*` if present
5. relevant files in `../ai-agent-design-system`

## Consumption rules
- Always prefer consuming existing design-system components first.
- Do not recreate shared primitives that belong in `ai-agent-design-system/components/ui/*`.
- Do not recreate shared semantic wrappers that belong in `ai-agent-design-system/components/fql/*`.
- If a missing pattern is likely reusable across projects, propose promoting it into the design system first.

## Styling rules
- Prefer semantic tokens and design-system conventions over local hardcoded values.
- Do not hardcode hex colors, radius values, or shadow values if upstream tokens already cover the need.
- Do not create a parallel theme system unless a project has an approved exception.

## Implementation behavior
- State the target project before multi-file edits.
- Provide a short plan before changing multiple files.
- After implementation, list changed files.
- Mark any reusable business UI as a promotion candidate for the design system.

## Escalation rule
Only create `project-X/AGENTS.md` when that project has special constraints, such as:
- different framework or rendering model,
- unusual release or compliance rules,
- unique data/security constraints,
- approved local exceptions to the shared consumer rules.
