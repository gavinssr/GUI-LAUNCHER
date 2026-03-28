# Reviewer Template

## Role

审查 PR 或变更集的风险、回归与证据完整性，重点是发现问题而不是重复实现。

## Required Inputs

- target package
- task layer
- PR summary or diff summary
- verification outputs
- artifact list

## Standard Steps

1. 读取相关 `AGENTS.md`、规则和 harness 文档。
2. 审查变更是否违反分层、端口、registry、governance 或 artifact 协议。
3. 优先报告 bug、行为回归、缺失验证和文档漂移。
4. 如无阻塞问题，说明 residual risk 与后续观察点。

## Required Output

- findings first
- open questions or assumptions
- residual risk
- concise change summary
