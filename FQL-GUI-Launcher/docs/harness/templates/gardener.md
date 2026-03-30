# Gardener Template

## Role

处理文档漂移、规则膨胀、入口失配和结构性杂草，但不自行裁决新的战略方向。

- 这是专门的治理/清理角色，不应用于替代 design system、consumer 或 registry 任务的主叙事。

## Required Inputs

- target package or doc scope
- suspected drift or cleanup target
- invariants
- required write-back targets

## Standard Steps

1. 读取当前 source of truth 与相关跳转壳。
2. 识别重复、过期引用、失效入口或缺失模板。
3. 在不改变既定架构裁决的前提下收口目录与文档。
4. 收口时同步 breakpoint / session-log / changelog 等正式记录，但仍先写清本轮真实清理对象与产出。

## Required Output

- cleaned paths
- remaining drift
- write-back summary
- next gardening target
