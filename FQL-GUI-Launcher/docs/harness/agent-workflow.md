# Agent Workflow

## Local Agent Task

适用于本地主对话直接实施的任务。

固定字段：

- target package
- task layer
- inputs / evidence
- invariants
- verification steps
- artifacts
- promotion candidate
- write-back targets

## Cloud Agent Task

适用于可并行、可验证、劳动密集的子任务。

要求：

- 基于 `dev` 分支拉分支实施
- 使用 engineering root 命令入口
- 输出 artifact 与检查结果
- 不自行裁决结构性问题

## Governance Task

适用于目录、规则、文档、写回流程等治理工作。

要求：

- 优先更新正式文档 source of truth
- 明确是否影响 breakpoint / milestone / blueprint
- 收口时更新 write-back targets
