# Breakpoint

## 当前阶段

当前进入 design-system primitive 的 `正式建设启动：以 Button 作为第一个真实 primitive 收口验收`。

## 当前真实进度

### 已稳定

- `GUI-Explore` 已是整仓 git root，当前功能开发在 `cursor/component-library-preview-page-improvement-0b55` 分支推进。
- `FQL-GUI-Launcher/` 已确定为 engineering root。
- design system、registry、consumer 页面链路已完成多轮验证。
- harness-engineering 的 4 个结构裁决点已锁定：
  1. 工程执行根：`FQL-GUI-Launcher`
  2. 统一 `package.json`：`FQL-GUI-Launcher/package.json`
  3. `manage-*` 迁移：保留为短期跳转壳
  4. design-system registry 端口：`3001`

### 当前断点

- `FQL-GUI-Launcher/package.json` 已建立统一 `harness:*` / `check:*` 入口。
- 首批检查脚本已落地：preview、registry、consumer boundary、token usage、docs integrity、governance consistency、artifact presence、port contract。
- design-system `3001` 端口契约已落到脚本、docs 与 package scripts。
- git root `.github/workflows/harness-verify.yml` 与 `.github/pull_request_template.md` 已建立。
- Cloud Agent verifier / reviewer / gardener 模板已落到 `FQL-GUI-Launcher/docs/harness/templates/*`。
- artifact / PR 协议已固化到 `docs/harness/cloud-agent.md`、`docs/harness/artifacts.md` 与 root PR template。
- 第一轮定向垃圾回收已完成：过期 phase 文案已清理，`doc-gardening` runbook 与 `promotion review` 基线已建立，记录目录入口已从占位升级为正式使用约定。
- 半自动写回已落地：`writeback:template`、`check:writeback-template`、`check:writeback-templates` 已可用，六类模板已就位，并纳入 `harness:verify:governance`。
- `Harness Full Implementation` 计划中的 todos 已全部完成，`pnpm run harness:verify` 已完整通过。
- 当前主线已从“补 harness 结构”切到“正式建设真实 primitive”；`Button` 已作为首个真实 primitive 落地。
- `ai-agent-design-system/app/primitive-preview` 已完成组件级独立路由与侧边导航改造：`/primitive-preview` 默认跳转到首个 primitive，`/primitive-preview/[id]` 只展示单组件，导航与展示继续共用 `primitivePreviewRegistry` 作为单一事实源。
- 本轮已通过 `pnpm run check:primitive-preview-sync`、`pnpm run harness:verify:design-system` 与 `pnpm run harness:verify`，确认预览路由改造未破坏 design-system、consumer 与 governance 闭环。
- `Button` 已对齐 Figma 设计稿，正式建立 `variant / size / status` 三维矩阵；loading SVG 已与设计参考对齐，且内部 loading 指示器已移出 `components/ui/*` 扫描范围，不再阻塞 primitive preview harness。
- `project-1` 与 design-system 内部所有已受影响的 `Button` 调用已完成迁移，并通过 `harness:verify` 与 `harness:lint`。

## 下一步

### P0

- 继续下一个 primitive 的正式建设，保持“先 design-system primitive、后业务消费”的推进顺序
- 决定 `Button` 是否在下一轮补齐“危险语义按钮”正式 API，避免业务页继续依赖 `className` 覆写
- 观察远端 GitHub Actions / PR 对本轮 button primitive 真实落地的首次运行结果

### P1

- 根据真实使用摩擦决定是否细分更多 writeback 模板变体
- 若后续 primitive 数量持续增长，评估是否需要在 `primitivePreviewRegistry` 上增加分组元信息，同时保持 `check:primitive-preview-sync` 兼容
- 当 loading 能力脱离 `Button` 内部实现时，再评估是否把当前内部资产升级为正式独立 primitive

## 风险 / 依赖

- 过渡期内旧 `manage-*` 与新 `governance/*` 同时存在，若后续继续误写旧文件，可能造成双真相源回流。
- 远端 workflow 已具备触发条件，但本轮收口时尚未附带截图或访问录屏类 artifact，UI 可用性仍主要依赖本地命令与静态构建验证。
- 模板与校验只负责减少漏字段，不会替代任务收口时的人为裁决。
- 当前侧边导航直接展示每个 primitive 的描述文案；若 primitive 数量显著上升，导航面板长度和扫描成本可能需要进一步治理。
- 当前 `Button` 的“危险语义”仍停留在页面层覆写，尚未沉淀为 design-system 正式语义能力；若不继续收敛，后续 primitive 一致性会继续受影响。
