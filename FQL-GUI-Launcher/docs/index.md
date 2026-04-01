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
- `harness/templates/writeback-session-log.md`
- `harness/templates/writeback-breakpoint.md`
- `harness/templates/writeback-changelog.md`
- `harness/templates/writeback-exec-plan.md`
- `harness/templates/writeback-promotion-review.md`
- `harness/templates/writeback-adr.md`

### Runbooks

- `runbooks/local-dev.md`
- `runbooks/primitive-preview.md`
- `runbooks/registry.md`
- `runbooks/consumer-acceptance.md`
- `runbooks/doc-gardening.md`
- `runbooks/writeback.md`

### Structured Records

- `exec-plans/active/README.md`
- `exec-plans/completed/README.md`
- `adr/README.md`
- `reviews/promotion/README.md`
- `reviews/promotion/2026-03-28-phase-5-baseline.md`

## 当前阶段

- Harness full implementation 已完成
- 后续以周期性 `doc-gardening`、`promotion review` 与远端 CI 观测为主
