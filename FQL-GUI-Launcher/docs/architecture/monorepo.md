# Monorepo Architecture

## Workspace Structure

```text
FQL-GUI-Launcher/
├── AGENTS.md
├── docs/
├── ai-agent-design-system/
├── projects/
├── pnpm-workspace.yaml
└── package.json   # unified harness entrypoint
```

## Role Split

- `ai-agent-design-system/`：design system source of truth
- `projects/*`：consumer apps / business projects
- `docs/`：正式工程记录系统
- `AGENTS.md` / `.cursor/rules/*`：行为入口与边界约束

## Engineering Root Contract

- engineering root 固定为 `FQL-GUI-Launcher/`
- 统一命令入口、CI、Cloud Agent、artifact 约定均围绕本目录设计
- workspace 根 `GUI-Explore/` 只承载治理与会话管理，不承载工程级命令入口
