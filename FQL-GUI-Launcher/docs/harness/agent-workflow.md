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

填写顺序：

- 先写 target package、task layer、inputs / evidence，明确本轮真实工程目标。
- 再写 invariants、verification steps、artifacts，明确如何证明工程推进成立。
- 最后才写 promotion candidate 与 write-back targets，作为收口判断，不反向驱动任务主线。

## Cloud Agent Task

适用于可并行、可验证、劳动密集的子任务。

要求：

- 基于 `dev` 分支拉分支实施
- 使用 engineering root 命令入口
- 输出 artifact 与检查结果
- 非 governance task 先围绕工程目标、证据与验证组织任务
- 不自行裁决结构性问题

## Governance Task

适用于目录、规则、文档、写回流程等治理工作。

要求：

- 只有当主要产出本身是治理目录、规则或正式流程时，才定义为 `Governance Task`
- 优先更新正式文档 source of truth
- 明确是否影响 breakpoint / milestone / blueprint
- 收口时更新 write-back targets

## Default Sequencing

- 对 design system / consumer / registry 任务，默认顺序是：工程目标 -> 证据/约束 -> 验证/artifact -> write-back targets。
- `write-back targets` 只负责记录需要更新哪些正式文档，不得替代工程产出、验证结果或目标描述。

## Writeback Helpers

用于半自动写回的最小命令入口：

- `pnpm run writeback:template -- <kind>`
- `pnpm run check:writeback-template -- <kind> <path>`
- `pnpm run check:writeback-templates`

具体模板类型与示例见 `docs/runbooks/writeback.md` 和 `docs/harness/templates/writeback-*.md`。
