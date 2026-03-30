# Writeback Runbook

## 目的

为治理层与 repo 层收口提供统一模板生成与字段完整性校验入口。

默认采用“双层视角”收口：

- 第一层先写清本轮真实工程推进了什么、证据是什么。
- 第二层再写清需要哪些治理留痕、流程更新或正式文档同步。
- 治理动作不能替代工程产出描述。

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

1. 先判断本轮真实工程目标、产出、证据与验证结果是什么。
2. 用 `pnpm run writeback:template -- <kind>` 生成草稿。
3. 先补工程主线，再补治理写回与流程痕迹。
4. 用 `pnpm run check:writeback-template -- <kind> <path>` 校验字段完整性。
5. 再把内容写入正式目标文件。

## 适用边界

- 这是“半自动写回”，不是自动决定是否写回。
- 是否更新 `breakpoint`、`session-log`、`changelog`、`promotion review`、`ADR` 仍由任务收口时裁决。
- 模板负责减少漏字段，不负责替代人工判断。
- 非 governance task 即使需要写回，也应先能从草稿中复原工程主线，而不是只看到治理动作。
