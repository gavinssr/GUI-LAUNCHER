# Governance Directory

## 定位

`governance/` 是 `GUI-Explore` 工作区的正式治理目录。

- 这里只承载协作协议、治理流程、阶段记录、当前断点与会话日志。
- 这里不是业务代码实现层。
- 工程执行根固定为 `FQL-GUI-Launcher/`。

## Source Of Truth

- 当前断点：`governance/schedule/breakpoint.md`
- 会话日志：`governance/schedule/session-log.md`
- 治理流程：`governance/process/session-workflow.md`
- 战略蓝图：`governance/strategy/blueprint.md`
- 优先队列与政策：`governance/strategy/policy-queue.md`
- 里程碑历史：`governance/milestones/history.md`
- 阶段变更：`governance/milestones/changelog.md`

如旧 `manage-*` 文件与本目录冲突，以本目录为准。

## 迁移映射

- `manage-process.md` -> `governance/process/session-workflow.md`
- `manage-blueprint.md` -> `governance/strategy/blueprint.md`
- `manage-blueprint.md` 的优先队列 / 缺口闭环 -> `governance/strategy/policy-queue.md`
- `manage-milestone.md` -> `governance/milestones/history.md`
- `manage-milestone.md` 的阶段状态变更 -> `governance/milestones/changelog.md`
- `manage-schedule.md` 的当前断点 -> `governance/schedule/breakpoint.md`
- `manage-schedule.md` 的任务日志 -> `governance/schedule/session-log.md`

## 过渡期规则

- 旧 `manage-*` 文件仅保留跳转说明与新路径索引。
- 新的正式事实、任务日志、断点不得继续写回旧 `manage-*`。
- 任何工程级命令、CI、Cloud Agent 入口都以 `FQL-GUI-Launcher/` 为准。
