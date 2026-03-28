# FQL-GUI-Launcher Docs

## 定位

`docs/` 是 `FQL-GUI-Launcher` 的正式工程记录系统。

- 这里承载架构事实、runbook、harness 规则、验证矩阵、ADR、exec plans 和 promotion review。
- 这里替代散落在长 `AGENTS.md`、旧治理长文和聊天上下文中的稳定工程知识。
- 工程执行根固定为 `FQL-GUI-Launcher/`。

## 阅读入口

### 架构事实

- `architecture/monorepo.md`
- `architecture/layering.md`
- `architecture/registry.md`

### Harness

- `harness/agent-workflow.md`
- `harness/verification-matrix.md`
- `harness/promotion-policy.md`
- `harness/cloud-agent.md`
- `harness/artifacts.md`
- `harness/effectiveness.md`
- `harness/templates/verifier.md`
- `harness/templates/reviewer.md`
- `harness/templates/gardener.md`

### Runbooks

- `runbooks/local-dev.md`
- `runbooks/registry.md`
- `runbooks/consumer-acceptance.md`
- `runbooks/doc-gardening.md`

### Structured Records

- `exec-plans/active/README.md`
- `exec-plans/completed/README.md`
- `adr/README.md`
- `reviews/promotion/README.md`
- `reviews/promotion/2026-03-28-phase-5-baseline.md`

## 当前阶段

- Phase 5：首轮定向垃圾回收已完成
- 下一步进入 `semi-automate-writeback`，补齐最小模板化与字段校验
