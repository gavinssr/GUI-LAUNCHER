# Local Development Runbook

## 端口约定

- design-system：`3001`
- consumer（例如 `project-1`）：默认 `3000`，可独立调整

## Recommended Start Order

1. 进入 `ai-agent-design-system/`
2. 以 `3001` 启动 design-system dev server
3. 验证 `/primitive-preview` 与 `/r/registry.json`
4. 如需 consumer 验证，再进入目标 `projects/*`

## Local Verification Focus

- design-system build / registry build
- consumer build / route access
- preview 与 registry 不漂移
- consumer 不越过 design-system 边界
