# Breakpoint

## 当前阶段

当前进入 harness-engineering 的 `Phase 4：CI 与 Cloud Agent 接入准备`。

## 当前真实进度

### 已稳定

- `GUI-Explore` 已是整仓 git root，当前分支为 `dev`，工作树干净。
- `FQL-GUI-Launcher/` 已确定为 engineering root。
- design system、registry、consumer 页面链路已完成多轮验证。
- harness-engineering 的 4 个结构裁决点已锁定：
  1. 工程执行根：`FQL-GUI-Launcher`
  2. 统一 `package.json`：`FQL-GUI-Launcher/package.json`
  3. `manage-*` 迁移：保留为短期跳转壳
  4. design-system registry 端口：`3001`

### 当前断点

- `FQL-GUI-Launcher/package.json` 已建立统一 `harness:*` / `check:*` 入口。
- 首批检查脚本已落地：preview、registry、consumer boundary、token usage、docs integrity、governance consistency、artifact presence、port contract。
- design-system `3001` 端口契约已落到脚本、docs 与 package scripts。
- `pnpm run harness:verify` 已完整通过。
- 下一步断点转入 `Phase 4：CI 与 Cloud Agent 接入`，需要把当前本地 harness 接到 GitHub Actions、Cloud Agent 模板和 artifact 协议。

## 下一步

### P0

- 新增 `.github/workflows/*`
- 将 `harness:verify` 接入 CI
- 为 Cloud Agent 建立 verifier / reviewer / gardener 任务模板
- 固化 artifact 与 PR 协议

### P1

- 评估是否把 `check:artifact-presence` 接入 Cloud Agent / PR 流程
- 根据 CI 落地结果补充环境约定（Node / pnpm / secrets / ports）

## 风险 / 依赖

- 过渡期内旧 `manage-*` 与新 `governance/*` 同时存在，若后续继续误写旧文件，可能造成双真相源回流。
- Cloud Agent 接入前，`check:artifact-presence` 仍未真正进入 PR / artifact 生产链路。
