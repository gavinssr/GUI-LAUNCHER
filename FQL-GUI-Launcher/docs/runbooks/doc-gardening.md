# Doc Gardening Runbook

## 适用范围

适用于 `docs/`、`AGENTS.md`、`.cursor/rules/*` 与 governance 跳转壳的定向清理。

## 触发时机

- 某个 phase 完成后，入口文档仍有“计划中”或过期表述
- 新增了 source of truth，但旧入口还没有正确降级
- 目录存在只有一句话的占位文件，需要补成可执行约定
- review 过程中发现重复说明、失效路径或阶段漂移

## 本轮优先清理对象

1. 过期阶段文案
2. 旧路径残留引用
3. 只有占位、没有字段约定的记录目录入口
4. promotion review / exec plan / ADR 缺少使用规则

## 收口步骤

1. 先确认当前 source of truth。
2. 删除或改写过期表述，不制造第二份事实。
3. 把纯占位入口补成“何时使用 + 最小字段 + 归档规则”。
4. 如影响阶段状态，同步更新 `breakpoint.md`、`session-log.md`、必要时 `milestones/changelog.md`。
5. 运行 `pnpm run harness:verify`。

## 交付最少输出

- cleaned paths
- remaining drift
- residual risk
- next gardening target
