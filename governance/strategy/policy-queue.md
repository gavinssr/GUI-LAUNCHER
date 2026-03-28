# Policy Queue

## 当前优先队列

### P0

1. 完成 workspace 治理层收口，建立 `governance/` 正式目录与 root rules。
2. 完成 repo 文档系统下沉，建立 `FQL-GUI-Launcher/docs` 的 architecture / harness / runbooks / adr / exec-plans / reviews 体系。
3. 建立 `FQL-GUI-Launcher/package.json` 与统一 `harness:*` / `check:*` 入口。
4. 固化 design-system `3001` 端口契约，避免脚本、文档、registry 漂移。

### P1

1. P1-A：先补齐 primitive 能力与预览验收机制。
2. P1-B：仅在真实需求或设计证据出现后再进行 semantic 封装。
3. 把本地 registry、consumer acceptance、artifact 规范整理为标准 runbook。

### P2

1. 第二 consumer 项目验证跨项目复用。
2. 远程 registry 与团队 SOP 扩展。
3. Cloud Agent / CI / artifact 流程稳定后，再进入规模化治理。

## 组件缺口闭环机制

### 当前生效规则

1. consumer 不直接发明新的 shared 组件。
2. 缺口组件来源只允许走 design-system 主线：
   - 先补 `components/ui/*` primitive
   - 再做 `components/fql/*` semantic 封装
   - 最后回到 consumer 做页面组装

### 执行流程

1. 在 consumer 发现缺口。
2. 暂停 consumer 页面实现，记录需求与约束。
3. 切回 design-system 实现 primitive / semantic。
4. 完成 design-system 验证与必要 registry 检查。
5. 回到 consumer 继续组装。

## Harness 实施阶段

### Phase 0

- 建立旧路径到新路径映射
- 锁定工程根、命令入口、端口契约、跳转壳策略

### Phase 1

- root `.cursor/rules`
- `governance/` 目录
- `manage-*` 正式内容迁移 + 跳转壳
- `breakpoint.md` 成为唯一真相源

### Phase 2

- `FQL-GUI-Launcher/docs` 文档体系
- 工程事实 / runbook / harness 文档下沉
- 各层 `AGENTS.md` 缩短为地图入口

### Phase 3

- `FQL-GUI-Launcher/package.json`
- `harness:*`、`check:*`
- typecheck、registry、docs、governance 机械校验
- 对齐 `3001` 端口契约

### Phase 4

- GitHub Actions
- Cloud Agent verifier / reviewer / gardener 模板
- artifact 与 PR 协议

### Phase 5

- 第一轮定向垃圾回收
- doc-gardening / promotion review 周期化
