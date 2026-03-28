# Milestone History

## 已完成阶段

### Phase 1：项目启动与基础工作流搭建

- 明确项目方向：用 Cursor + shadcn + AI Agent 建立“组件驱动的界面生成工作流”。
- 建立 primitive -> semantic -> consumer page composition 的分层策略。

### Phase 2：Monorepo 与 consumer/design-system 基础成型

- 建立 pnpm workspace monorepo。
- 明确 `ai-agent-design-system` 与 `projects/*` 边界。
- 建立 consumer 使用 design-system 的基本约束。

### Phase 3：Design System + Registry 基础打通

- 建立 shadcn primitive 层。
- 建立 `FqlCard`、`FqlField`、`StatusBadge` 等首批 semantic 组件。
- 打通本地 registry 机制与基础校验链路。

### Phase 4：Consumer 首个业务页演练

- 在 `project-1` 中完成首个 consumer 页面演练。
- 验证 Agent 可以优先复用 design-system 组件完成页面组装。

### Phase 5：Consumer SOP 固化 + 第二业务页验证

- 强化 consumer 页面验收清单。
- 完成 `/team-invite` 页面与边界复核。

### Phase 6：关键类型问题修复 + 第三业务页生成

- 修复 `FqlCard` props 类型冲突。
- 完成 `/api-keys` 页面并恢复双包 build。

### Phase 7：Registry 端到端验证

- 完成 registry build、本地访问验证与 shadcn CLI view 验证。

### Phase 8：Consumer smoke test + Cursor shell 环境修复

- 修复 Cursor shell PATH 问题。
- 完成 consumer 路由访问与 smoke test。

### Phase 9：提示词驱动三样本复现验证

- 在 `project-1` 完成 `billing-usage`、`member-permissions`、`access-review-flow` 三轮页面压测。
- build / dev / 边界核查均通过。
- promotion candidate 统一结论为“实验型样本，当前阶段不上推”。

## 当前未完成重点

- harness-engineering 结构化改造
- repo 文档系统下沉
- engineering root 统一命令入口
- 自动化检查与 CI / Cloud Agent 接入
