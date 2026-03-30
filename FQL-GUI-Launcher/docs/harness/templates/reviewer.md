# Reviewer Template

## Role

审查 PR 或变更集的风险、回归与证据完整性，重点是发现问题而不是重复实现。

- 非 governance task 优先审查工程行为、回归与证据完整性；governance 协议是约束，不是默认主角。

## Required Inputs

- target package
- task layer
- PR summary or diff summary
- verification outputs
- artifact list

## Standard Steps

1. 读取相关 `AGENTS.md`、规则和 harness 文档。
2. 先审查变更是否造成 bug、行为回归、缺失验证或证据不足。
3. 再审查是否违反分层、端口、registry、governance 或 artifact 协议。
4. 如无阻塞问题，说明 residual risk 与后续观察点。

## Required Output

- findings first
- open questions or assumptions
- residual risk
- concise change summary
