# Breakpoint

## 当前阶段

当前进入 design-system primitive 的 `正式建设启动：Button 已落地，Navbar 作为第二个真实 primitive 完成收口验收`。

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
- `Navbar` 已按 Figma `25062:7451` 正式落地为第二个真实 primitive：`components/ui/navbar.tsx` 通过单一 variant-driven API 覆盖 header、title、title-actions、title-text-action、tabs、search、search-action 7 类移动端页面头部形态。
- `Navbar` 所需的返回图标、右侧 icon action、tabs item、search capsule 与独立 icon 已以下沉 `_internal/navbar-*` 的方式收口，保持 public primitive 层只暴露 `Navbar` 本体。
- `primitive-preview/navbar` 已接入独立路由并通过本地访问确认；`primitivePreviewRegistry` 中的 `Navbar` 与历史 `Button` 已补齐中英双语标题、说明与关键分组命名。
- 本轮已完整通过 `pnpm run harness:lint` 与 `pnpm run harness:verify`，确认 `Navbar` 新增、preview 双语命名与治理校验链保持闭环。
- 根据最新样式回归，`Navbar` 已取消自适应宽度并收敛为 Figma 对齐的 `375 x 44` 固定头部；`title-actions`、`title-text-action`、`tabs` 与 `search-action` 的右侧操作区已改回严格右对齐。
- 搜索框右侧 CTA 前多余的竖线已移除，输入态光标已改为直角竖条；相关修复已通过本地页面确认，并再次完整通过 `pnpm run harness:lint` 与 `pnpm run harness:verify`。
- `Navbar` 所需 icon 资产已完成替换，不再存在“等待原始 SVG 补齐后再收口”的阻塞项。
- `StatusBar` 与 `HomeIndicator` 已作为 iPhone 通用 primitive 落地到 `components/ui/*`，并通过 `primitivePreviewRegistry` 以 `iphone-common` 分组统一接入 preview。
- `primitive-preview` 本轮已完成框架与样式收口：移动端导航壳层、共享 preview 样式与 iPhone 通用组件展示区已落地；`check:primitive-preview-sync` 已从单纯 `id` 比对升级为基于 `primitiveIds` 的覆盖校验。
- 针对 `fdc7281` 之后的 3 个提交，已按“跳过肉眼 preview 校验、仅保留机械 harness 校验”的口径补完执行 `pnpm install --frozen-lockfile`、`check:primitive-preview-sync`、`harness:registry`、`harness:lint`、`harness:verify:consumer`、`harness:verify:governance`、`harness:verify:harness` 与 `harness:verify`，确认 design-system、consumer、governance 与 harness 链路继续闭环。
- 视觉 preview 校验的长期口径已正式收敛：凡需肉眼观察、截图或录屏确认的 preview / 页面验收，统一由用户执行并回传；助手必须先询问并等待用户反馈，再继续依赖该结果的下一步。

## 下一步

### P0

- 继续下一个 primitive 的正式建设，保持“先 design-system primitive、后业务消费”的推进顺序
- 观察远端 GitHub Actions / PR 对本轮 iPhone 通用 primitive 与 preview 框架收口后的首次运行结果

### P1

- 根据真实使用摩擦决定是否细分更多 writeback 模板变体
- 若后续 primitive 数量持续增长，评估是否需要在 `primitivePreviewRegistry` 上增加分组元信息，同时保持 `check:primitive-preview-sync` 兼容
- 视需要继续为其余历史 preview 项补齐中英双语命名，保持导航与展示口径一致
- 结合真实页面复用证据，再判断 `Navbar` 的 tabs / search / action icon 是否仍应停留在 `_internal`，还是具备正式上推条件
- 当 loading 能力脱离 `Button` 内部实现时，再评估是否把当前内部资产升级为正式独立 primitive

## 风险 / 依赖

- 过渡期内旧 `manage-*` 与新 `governance/*` 同时存在，若后续继续误写旧文件，可能造成双真相源回流。
- 远端 workflow 已具备触发条件，但本轮收口时尚未附带截图或访问录屏类 artifact，UI 可用性仍主要依赖本地命令与静态构建验证。
- 模板与校验只负责减少漏字段，不会替代任务收口时的人为裁决。
- 当前侧边导航直接展示每个 primitive 的描述文案；若 primitive 数量显著上升，导航面板长度和扫描成本可能需要进一步治理。
- `Navbar` 当前以单一 variant API 承接 7 类页面头部形态；若后续真实页面的 tabs / search / action icon 语义继续分化，可能需要基于复用证据再拆分正式 primitive，而不是长期停留在 `_internal`。
- 当前本地执行环境为 `Node 22` / `pnpm 10`，虽已完整通过本轮 `install --frozen-lockfile` 与全套 harness，但仓库正式契约仍是 `Node 20` / `pnpm 9`，需继续以 CI 结果作为最终环境基线。
- 视觉 preview 校验已从“本轮临时跳过”升级为“用户执行、助手等待回传”的固定流程；若后续任务需要人工视觉结论，仍会引入额外等待成本，但可避免 agent 在本地预览判断上自循环。
- “危险语义”能力当前按你的裁决暂不进入上推范围；需等真实业务页跑通后，再决定是否进入正式 design-system API 收敛。
