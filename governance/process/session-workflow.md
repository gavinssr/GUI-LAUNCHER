# Session Workflow

## 文档定位

本文件是工作区治理流程的正式版本，替代旧 `manage-process.md`。

## 治理边界

- `GUI-Explore/`：治理层、协作协议、断点、阶段记录。
- `FQL-GUI-Launcher/`：engineering root，承载工程文档、命令入口、CI、Cloud Agent 执行。
- 除治理文档外，不在工作区根目录实现业务代码。

## 会话开始

1. 先读 `AGENTS.md`。
2. 再读 `governance/README.md`。
3. 默认任务先读 `governance/schedule/breakpoint.md`，提炼最小治理断点。
4. 然后进入 `FQL-GUI-Launcher/AGENTS.md`、`FQL-GUI-Launcher/docs/index.md` 与目标 package 约束。
5. 仅在以下情况再补读正式治理文档：
   - 任务本身属于 `governance`
   - 当前真相源冲突，需要回溯正式裁决
   - 收口时需要判断是否更新 milestone / blueprint / policy
6. 需要补读时，按以下顺序展开：
   - `governance/process/session-workflow.md`
   - `governance/schedule/session-log.md`
   - `governance/milestones/changelog.md`
   - `governance/milestones/history.md`
   - `governance/strategy/blueprint.md`
   - `governance/strategy/policy-queue.md`

## 会话分工

- 除“用户在独立窗口执行提示词压测”外，其余事项默认由助手执行推进。
- 压测任务中：用户负责执行与回传；助手负责模板、判定、归档与下一步拆解。
- 同一会话同时包含压测与治理动作时，按“先压测回传 -> 后治理落地”执行。
- 任何代码或文档写入落盘前，都必须先获得用户确认；用户点击 `run` 或明确文字同意，视为授权。

## 会话进行中

- 先判断任务归属：design system / consumer / registry / governance。
- 对 design system / consumer / registry 任务，默认推进顺序是：`breakpoint` -> engineering root docs -> target package -> implementation / verification。
- 非 governance task 先回答“真实工程目标、证据、约束与验证”，再决定需要哪些治理写回。
- 发现管理信息冲突时，以 `governance/schedule/breakpoint.md` 为当前真相源。
- 出现新的战略候选或阶段变化候选时，先记录到当前任务上下文，收口时再决定是否写回正式文档。

## 会话结束写回顺序

### 双层视角原则

- 先回答“这轮真实工程推进了什么”，再回答“治理机制如何为这轮任务留痕或兜底”。
- `session-log`、`breakpoint` 等写回记录不得把治理动作写成主角，也不得用治理动作替代工程证据。

1. 必写：更新 `governance/schedule/session-log.md` 与 `governance/schedule/breakpoint.md`。
2. 条件写：阶段状态变化时更新 `governance/milestones/changelog.md`。
3. 条件写：战略、阶段顺序或优先级策略变化时更新 `governance/strategy/blueprint.md` 或 `governance/strategy/policy-queue.md`。

## 半自动写回辅助

在 `FQL-GUI-Launcher/` 可使用：

- `pnpm run writeback:template -- <kind>` 生成草稿
- `pnpm run check:writeback-template -- <kind> <path>` 校验单个草稿
- `pnpm run check:writeback-templates` 校验内置模板集合

模板类型、示例与边界见 `FQL-GUI-Launcher/docs/runbooks/writeback.md`。

## 最小写回字段

### session-log

- 先写本轮真实工程推进与证据，再补治理留痕
- 日期
- 本轮目标
- 本轮产出
- changed files
- package scope
- promotion candidate
- 风险/阻塞
- 下一步（P0/P1）

### breakpoint

- 先写当前工程断点、P0 / P1 与证据状态，再补治理风险或依赖
- 当前所处阶段
- 当前断点
- 当前 P0 / P1
- 风险/依赖

### changelog

- 日期
- 变更类型
- 影响阶段
- 证据
- 对后续计划影响
