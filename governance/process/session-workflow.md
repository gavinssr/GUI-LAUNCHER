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
3. 再读以下正式文档：
   - `governance/strategy/blueprint.md`
   - `governance/strategy/policy-queue.md`
   - `governance/milestones/history.md`
   - `governance/milestones/changelog.md`
   - `governance/schedule/breakpoint.md`
   - `governance/schedule/session-log.md`
4. 然后进入 `FQL-GUI-Launcher/AGENTS.md` 与目标 package 约束。

## 会话分工

- 除“用户在独立窗口执行提示词压测”外，其余事项默认由助手执行推进。
- 压测任务中：用户负责执行与回传；助手负责模板、判定、归档与下一步拆解。
- 同一会话同时包含压测与治理动作时，按“先压测回传 -> 后治理落地”执行。
- 任何代码或文档写入落盘前，都必须先获得用户确认；用户点击 `run` 或明确文字同意，视为授权。

## 会话进行中

- 先判断任务归属：design system / consumer / registry / governance。
- 发现管理信息冲突时，以 `governance/schedule/breakpoint.md` 为当前真相源。
- 出现新的战略候选或阶段变化候选时，先记录到当前任务上下文，收口时再决定是否写回正式文档。

## 会话结束写回顺序

1. 必写：更新 `governance/schedule/session-log.md` 与 `governance/schedule/breakpoint.md`。
2. 条件写：阶段状态变化时更新 `governance/milestones/changelog.md`。
3. 条件写：战略、阶段顺序或优先级策略变化时更新 `governance/strategy/blueprint.md` 或 `governance/strategy/policy-queue.md`。

## 最小写回字段

### session-log

- 日期
- 本轮目标
- 本轮产出
- changed files
- package scope
- promotion candidate
- 风险/阻塞
- 下一步（P0/P1）

### breakpoint

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
