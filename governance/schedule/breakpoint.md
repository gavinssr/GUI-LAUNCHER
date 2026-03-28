# Breakpoint

## 当前阶段

当前进入 harness-engineering 的 `Writeback Automation：半自动写回模板化准备`。

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
- git root `.github/workflows/harness-verify.yml` 与 `.github/pull_request_template.md` 已建立。
- Cloud Agent verifier / reviewer / gardener 模板已落到 `FQL-GUI-Launcher/docs/harness/templates/*`。
- artifact / PR 协议已固化到 `docs/harness/cloud-agent.md`、`docs/harness/artifacts.md` 与 root PR template。
- 第一轮定向垃圾回收已完成：过期 phase 文案已清理，`doc-gardening` runbook 与 `promotion review` 基线已建立，记录目录入口已从占位升级为正式使用约定。
- `pnpm run harness:verify` 与 `pnpm run check:artifact-presence ...` 已完整通过。
- 下一步断点转入 `semi-automate-writeback`，需要把治理层与 repo 层写回做成最小模板生成与字段完整性校验流程。

## 下一步

### P0

- 为治理层与 repo 层定义统一 write-back 模板
- 让模板覆盖 `changed files`、`package scope`、`promotion candidate`、风险/阻塞、下一步（P0/P1）
- 增加字段完整性校验，避免收口漏项

### P1

- 评估是否为 `exec-plans`、`promotion review`、`ADR` 分别提供模板变体
- 根据远端 CI 首次运行结果补充环境约定（Node / pnpm / secrets / artifact retention）

## 风险 / 依赖

- 过渡期内旧 `manage-*` 与新 `governance/*` 同时存在，若后续继续误写旧文件，可能造成双真相源回流。
- root workflow 尚需推送到远端后才能真正触发 GitHub Actions；当前通过的是本地命令与文件级校验。
- `semi-automate-writeback` 尚未落地，收口记录仍依赖任务结束时人工判断。
