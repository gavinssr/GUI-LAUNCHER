# Writeback Runbook

## 目的

为治理层与 repo 层收口提供统一模板生成与字段完整性校验入口。

## 可用命令

```bash
pnpm run writeback:template -- session-log
pnpm run writeback:template -- breakpoint --output ../governance/schedule/_draft-breakpoint.md
pnpm run check:writeback-template -- session-log docs/harness/templates/writeback-session-log.md
pnpm run check:writeback-templates
```

## 支持的模板类型

- `session-log`
- `breakpoint`
- `changelog`
- `exec-plan`
- `promotion-review`
- `adr`

## 使用顺序

1. 先判断本轮需要写回哪些正式文档。
2. 用 `pnpm run writeback:template -- <kind>` 生成草稿。
3. 按实际任务补充内容。
4. 用 `pnpm run check:writeback-template -- <kind> <path>` 校验字段完整性。
5. 再把内容写入正式目标文件。

## 适用边界

- 这是“半自动写回”，不是自动决定是否写回。
- 是否更新 `breakpoint`、`session-log`、`changelog`、`promotion review`、`ADR` 仍由任务收口时裁决。
- 模板负责减少漏字段，不负责替代人工判断。
