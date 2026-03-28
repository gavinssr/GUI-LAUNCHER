# Cloud Agent Harness

## Entry Rules

1. 先读 workspace governance 文档
2. 再读 `FQL-GUI-Launcher/AGENTS.md`
3. 再读目标 package `AGENTS.md` 与 `.cursor/rules/*`
4. 进入 engineering root 后执行命令

## Default Contract

- 基于远端 `dev` 工作
- 不依赖本地未推送状态
- 不并发重构同一批入口文档
- 使用统一 harness 命令与 artifact 协议

## Roles

- `Verifier`
- `Reviewer`
- `Gardener`
