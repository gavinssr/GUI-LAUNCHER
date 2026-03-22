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
2. Target package `AGENTS.md`
3. Target package `.cursor/rules/*`
4. Relevant theme, component, and registry files

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

## Output expectations
When finishing a task, always list:
- changed files
- package scope
- whether anything should be promoted back into the design system
