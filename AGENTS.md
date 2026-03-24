# FQL-GUI-Launcher Monorepo Agent Guide

## Mission
This repository is the monorepo orchestrator for the FQL GUI system.

- `ai-agent-design-system` is the design system source of truth.
- `projects/*` are consumer applications and business implementation projects.
- Do not treat `ai-agent-design-system/app/*` as a real business application.
- Use `ai-agent-design-system/app/*` only for demo, playground, docs, and component verification.

## Required reading order
When working in any subproject, always read in this order:
1. Monorepo root `AGENTS.md`
2. `manage-blueprint.md` (overall strategy and phase blueprint)
3. `manage-schedule.md` (current breakpoint, P0/P1, live status)
4. `manage-milestone.md` (phase completion and pending milestones)
5. Target package `AGENTS.md`
6. Target package `.cursor/rules/*`
7. Relevant theme, component, and registry files

## Architecture rules
- Reusable primitives go to `ai-agent-design-system/components/ui/*`.
- Reusable semantic wrappers go to `ai-agent-design-system/components/fql/*`.
- Theme tokens and semantic theme mapping live in `ai-agent-design-system/app/globals.css`.
- Registry-related files stay in `ai-agent-design-system`.
- Real business pages, routes, feature flows, and app wiring belong in `projects/*`.

## Decision rules
- If a UI pattern may be reused across multiple projects, propose implementing it in the design system first.
- If a task is business-specific, implement it in the target consumer project and consume existing design-system components.
- Do not duplicate base primitives inside `projects/*`.
- Do not hardcode design tokens in consumer projects if equivalent semantic tokens already exist in the design system.

## Workflow
Before editing multiple files or multiple packages:
1. State the target package.
2. State whether the task belongs to the design system, a consumer project, or both.
3. Provide a short plan.
4. Then implement.

## Conversation lifecycle governance
Use the three `manage-*` files as the project continuity baseline in every conversation.

### At conversation start
- Read `manage-blueprint.md`, `manage-schedule.md`, and `manage-milestone.md`.
- Restate current phase, breakpoint, and current P0/P1 before implementation.

### During execution
- Use `manage-schedule.md` as the live source of truth for progress, risks, and next actions.
- Keep implementation aligned with current phase and milestone boundaries.

### At task end (mandatory write-back order)
1. Update `manage-schedule.md` with the progress node for this conversation.
2. Update `manage-milestone.md` only if a phase state changed or a phase was completed.
3. Update `manage-blueprint.md` only if overall strategy, phase order, or priority policy changed.

### Task-end checklist
- Confirm all three `manage-*` files were read before coding.
- Confirm the latest breakpoint is explicitly identified.
- Confirm `manage-schedule.md` received an end-of-task update.
- Confirm whether `manage-milestone.md` and/or `manage-blueprint.md` required conditional updates.

## Output expectations
When finishing a task, always list:
- changed files
- package scope
- whether anything should be promoted back into the design system
