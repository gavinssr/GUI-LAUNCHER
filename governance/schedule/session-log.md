# Session Log

## 说明

本文件承接原 `manage-schedule.md` 的对话级任务日志。旧文件已降级为跳转壳，不再记录正式日志。

## 历史摘要

### 2026-03-24 之前

- 完成管理层 AGENTS 化、写回顺序、执行分工与落盘授权规则固化。
- 完成 `project-1` 三轮页面压测、正式验收归档与统一 promotion candidate 复盘。
- 完成 primitive preview 路由与 preview registry 机制落地。
- 完成整仓迁移到 `GUI-Explore` 仓库并接入远端 `GUI-EXPLORE`。

## 正式日志

### 2026-03-24 / 管理层机制固化与三样本收口

- 本轮目标：完成治理层读取顺序、写回机制、执行分工与落盘授权规则固化，并完成三样本页面验证归档。
- 本轮产出：管理层协议固化完成；`billing-usage`、`member-permissions`、`access-review-flow` 三样本归档完成；promotion candidate 统一结论为 pass（不上推）。
- changed files：`AGENTS.md`、`manage-process.md`、`manage-blueprint.md`、`manage-milestone.md`、`manage-schedule.md` 及 `projects/project-1/app/*` 压测页面（来自测试窗口）。
- package scope：workspace governance + `projects/project-1`
- promotion candidate：pass（实验型样本，不上推）
- 风险/阻塞：若后续不继续推进治理收口，管理真相仍会散落在旧长文和对话中。
- 下一步（P0）：推进 harness-engineering 结构裁决与治理目录迁移。
- 下一步（P1）：为 repo 文档系统与统一命令入口做准备。

### 2026-03-28 / harness-engineering Phase 0A 结构裁决

- 本轮目标：审阅正式实施计划、核对当前仓库状态、识别不确定项，并锁定实施前的关键结构决策。
- 本轮产出：确认 `FQL-GUI-Launcher` 为 engineering root；统一 `package.json` 放在 `FQL-GUI-Launcher/package.json`；`manage-*` 迁移为短期跳转壳；design-system registry 端口统一为 `3001`。
- changed files：无（本轮为分析与裁决，无落盘）
- package scope：workspace governance + harness planning
- promotion candidate：无
- 风险/阻塞：若不先完成 Phase 1，`manage-schedule.md` 过期断点与根目录职责混杂会继续影响后续 phase。
- 下一步（P0）：执行 Phase 1，建立 `governance/` 正式目录与 workspace root rules。
- 下一步（P1）：Phase 1 完成后转入 repo docs 下沉。

### 2026-03-28 / harness-engineering Phase 1 收口

- 本轮目标：建立 workspace 治理目录与 root rules，并把旧 `manage-*` 正式内容迁移到 `governance/*`。
- 本轮产出：新增 `governance/` 目录体系；新增 workspace root `.cursor/rules/workspace-governance.mdc` 与 `.cursor/rules/cloud-agent-bootstrap.mdc`；更新根 `AGENTS.md` 指向新治理目录；旧 `manage-*` 改为跳转壳；当前断点迁入 `governance/schedule/breakpoint.md`。
- changed files：`AGENTS.md`、`governance/**`、`.cursor/rules/*.mdc`、`manage-blueprint.md`、`manage-milestone.md`、`manage-process.md`、`manage-schedule.md`、`.cursor/plans/harness_full_implementation_aa0fb96f.plan.md`
- package scope：workspace governance
- promotion candidate：无
- 风险/阻塞：Phase 2 前，repo 文档系统仍未落位，`FQL-GUI-Launcher/docs` 还不是完整的工程记录入口。
- 下一步（P0）：进入 Phase 2，建立 repo docs 体系与索引入口。
- 下一步（P1）：收敛 repo 各层 `AGENTS.md` 为地图型入口。

### 2026-03-28 / harness-engineering Phase 3 自动化与根级编排

- 本轮目标：在 `FQL-GUI-Launcher/` 建立统一命令入口、首批 `check:*` 脚本，并将 design-system `3001` 端口契约落实到脚本与验证流程。
- 本轮产出：新增 `FQL-GUI-Launcher/package.json`；新增 `scripts/harness-checks.mjs`；补齐 `harness:*` 与首批 `check:*` 命令；将 `ai-agent-design-system` 的 `dev` / `start` 固定到 `3001`；`pnpm run harness:verify` 完整通过。
- changed files：`FQL-GUI-Launcher/package.json`、`FQL-GUI-Launcher/scripts/harness-checks.mjs`、`FQL-GUI-Launcher/ai-agent-design-system/package.json`、`governance/schedule/breakpoint.md`、`governance/schedule/session-log.md`、`governance/milestones/changelog.md`、`.cursor/plans/harness_full_implementation_aa0fb96f.plan.md`
- package scope：engineering root + design-system harness infra
- promotion candidate：无
- 风险/阻塞：`check:artifact-presence` 已有本地脚本入口，但尚未真正进入 Cloud Agent / PR artifact 流程。
- 下一步（P0）：进入 Phase 4，接入 GitHub Actions、Cloud Agent 模板和 artifact 协议。
- 下一步（P1）：根据 CI 接入结果细化环境契约与剩余自动化检查。

### 2026-03-28 / harness-engineering Phase 4 CI 与 Cloud Agent 接入

- 本轮目标：新增 GitHub Actions workflow，把 `harness:verify` 接入 CI，补齐 Cloud Agent verifier / reviewer / gardener 模板，并固化 artifact / PR 协议。
- 本轮产出：新增 git root `.github/workflows/harness-verify.yml` 与 `.github/pull_request_template.md`；扩写 `docs/harness/cloud-agent.md` 与 `docs/harness/artifacts.md`；新增 `docs/harness/templates/verifier.md`、`reviewer.md`、`gardener.md`；将 Phase 4 关键文件纳入 `scripts/harness-checks.mjs` 的 docs / governance 校验；完整通过 `pnpm run harness:verify` 与 `pnpm run check:artifact-presence ...`。
- changed files：`.github/workflows/harness-verify.yml`、`.github/pull_request_template.md`、`FQL-GUI-Launcher/docs/harness/cloud-agent.md`、`FQL-GUI-Launcher/docs/harness/artifacts.md`、`FQL-GUI-Launcher/docs/harness/templates/*`、`FQL-GUI-Launcher/docs/harness/verification-matrix.md`、`FQL-GUI-Launcher/docs/index.md`、`FQL-GUI-Launcher/scripts/harness-checks.mjs`、`governance/schedule/breakpoint.md`、`governance/schedule/session-log.md`、`governance/milestones/changelog.md`、`.cursor/plans/harness_full_implementation_aa0fb96f.plan.md`
- package scope：git root CI integration + engineering root harness docs
- promotion candidate：无
- 风险/阻塞：workflow 与 PR 模板已经落盘并被本地校验覆盖，但仍需推送到远端后才能真正触发 GitHub Actions；`semi-automate-writeback` 仍未落地。
- 下一步（P0）：进入 Phase 5，执行第一轮定向垃圾回收并建立 doc-gardening / promotion review 周期。
- 下一步（P1）：评估将 `semi-automate-writeback` 做成模板生成 + 字段完整性校验的最小实现。

### 2026-03-28 / harness-engineering Phase 5 定向垃圾回收与长期治理

- 本轮目标：执行第一轮定向垃圾回收，优先清理过期阶段文案、纯占位入口，并建立 `doc-gardening / promotion review` 周期入口。
- 本轮产出：修正 `docs/architecture/monorepo.md` 中的过期 `Phase 3` 计划文案；新增 `docs/runbooks/doc-gardening.md`；扩写 `docs/exec-plans/active/README.md`、`docs/exec-plans/completed/README.md`、`docs/adr/README.md`、`docs/reviews/promotion/README.md`；新增 `docs/reviews/promotion/2026-03-28-phase-5-baseline.md`；将这些入口纳入 `scripts/harness-checks.mjs` 的 docs integrity 校验；完整通过 `pnpm run harness:verify` 与 `pnpm run check:artifact-presence ...`。
- changed files：`FQL-GUI-Launcher/docs/architecture/monorepo.md`、`FQL-GUI-Launcher/docs/runbooks/doc-gardening.md`、`FQL-GUI-Launcher/docs/exec-plans/active/README.md`、`FQL-GUI-Launcher/docs/exec-plans/completed/README.md`、`FQL-GUI-Launcher/docs/adr/README.md`、`FQL-GUI-Launcher/docs/reviews/promotion/README.md`、`FQL-GUI-Launcher/docs/reviews/promotion/2026-03-28-phase-5-baseline.md`、`FQL-GUI-Launcher/docs/harness/effectiveness.md`、`FQL-GUI-Launcher/docs/index.md`、`FQL-GUI-Launcher/scripts/harness-checks.mjs`、`governance/schedule/breakpoint.md`、`governance/schedule/session-log.md`、`governance/milestones/changelog.md`、`.cursor/plans/harness_full_implementation_aa0fb96f.plan.md`
- package scope：engineering root docs gardening + review cadence
- promotion candidate：无
- 风险/阻塞：当前只完成第一轮定向清理，没有做全量历史重写；`semi-automate-writeback` 仍未实现，收口仍依赖人工判断。
- 下一步（P0）：进入 `semi-automate-writeback`，设计最小模板生成与字段校验流程。
- 下一步（P1）：在下一次大 phase 收口时继续追加 promotion baseline 或正式候选项复盘。

### 2026-03-28 / semi-automate-writeback 最小模板化与字段校验

- 本轮目标：为治理层与 repo 层补齐统一写回模板生成与字段完整性校验入口，并把它接入现有 harness 验证链。
- 本轮产出：新增 `scripts/writeback-templates.mjs`；新增六类 writeback 模板；新增 `docs/runbooks/writeback.md`；在 `package.json` 中新增 `writeback:template`、`check:writeback-template`、`check:writeback-templates`；将 `check:writeback-templates` 接入 `harness:verify:governance`；更新 `docs/harness/agent-workflow.md`、`docs/index.md` 与 `governance/process/session-workflow.md` 指向新入口；完整通过 `pnpm run check:writeback-templates`、`pnpm run check:writeback-template -- session-log docs/harness/templates/writeback-session-log.md`、`pnpm run writeback:template -- breakpoint` 与 `pnpm run harness:verify`。
- changed files：`FQL-GUI-Launcher/package.json`、`FQL-GUI-Launcher/scripts/writeback-templates.mjs`、`FQL-GUI-Launcher/scripts/harness-checks.mjs`、`FQL-GUI-Launcher/docs/runbooks/writeback.md`、`FQL-GUI-Launcher/docs/harness/templates/writeback-*.md`、`FQL-GUI-Launcher/docs/harness/agent-workflow.md`、`FQL-GUI-Launcher/docs/index.md`、`governance/process/session-workflow.md`、`governance/schedule/breakpoint.md`、`governance/schedule/session-log.md`、`governance/milestones/changelog.md`、`.cursor/plans/harness_full_implementation_aa0fb96f.plan.md`
- package scope：engineering root writeback tooling + governance workflow
- promotion candidate：无
- 风险/阻塞：模板与校验已落地，但是否写回、写回到哪些正式文档仍需任务收口时人工裁决；远端 GitHub Actions 触发情况仍需 push 后观察。
- 下一步（P0）：将这轮结果提交并推送，观察远端 CI 首次实际执行情况。
- 下一步（P1）：后续真实任务中使用 `writeback:template`，再根据使用摩擦决定是否细分模板变体。

### 2026-03-29 / primitive preview 独立路由与侧边导航

- 本轮目标：将 design-system 的 primitive preview 从单页全量展示升级为“每组件独立 URL + 左侧导航 + 主区只展示当前组件”，同时保持 `primitivePreviewRegistry` 为唯一事实源。
- 本轮产出：`app/primitive-preview/page.tsx` 改为默认组件跳转入口；新增 `app/primitive-preview/layout.tsx` 与 `app/primitive-preview/primitive-preview-nav.tsx` 提供统一侧栏壳层；新增 `app/primitive-preview/[id]/page.tsx` 按 `registry.tsx` 单条渲染组件；`registry.tsx` 补充 `primitivePreviewIds`、`getPrimitivePreviewById` 与默认 id 导出；完整通过 `pnpm run check:primitive-preview-sync`、`pnpm run harness:verify:design-system` 与 `pnpm run harness:verify`。
- changed files：`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/page.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/registry.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/layout.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/primitive-preview-nav.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/[id]/page.tsx`、`governance/schedule/session-log.md`、`governance/schedule/breakpoint.md`
- package scope：`FQL-GUI-Launcher/ai-agent-design-system` + workspace governance write-back
- promotion candidate：无
- 风险/阻塞：当前自动化验证覆盖了 registry 同步、build 与 typecheck，但本轮未附带 3001 端口下的人工截图类 artifact；若后续还要扩到 `components/fql/*`，需要单独再做导航信息架构裁剪。
- 下一步（P0）：观察远端 PR / CI 对这次真实任务的首次执行结果，并在需要时补人工访问记录。
- 下一步（P1）：若后续继续扩展组件库预览范围，再评估是否把 `components/fql/*` 纳入统一预览入口，但保持 primitive registry 不被混用。

### 2026-03-30 / button primitive 正式建设与收尾

- 本轮目标：以 Figma 设计稿为基准，正式落地第一个真实 primitive `Button`，补齐 primitive preview、迁移现有调用方，并完成本轮 harness / writeback 收口。
- 本轮产出：`Button` 已切换为 Figma-first API，建立 `primary-fill | primary-outline | secondary-outline`、`XL | L | M | S | XS | mini` 与 `default | loading | inactive | disable` 组合；`primitive-preview/button` 已改为类型/尺寸/状态矩阵；`project-1` 与 design-system 内部旧用法已迁移到新语义；loading 动画已对齐参考 SVG；私有 loading 指示器已移出 `components/ui/*` 扫描范围，保留为未来 loading primitive 的前置内部资产；完整通过 `pnpm run harness:verify` 与 `pnpm run harness:lint`。
- changed files：`FQL-GUI-Launcher/ai-agent-design-system/components/ui/button.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/button-loading-indicator.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/registry.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/primitive-preview-nav.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/ui/dialog.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/page.tsx`、`FQL-GUI-Launcher/projects/project-1/app/page.tsx`、`FQL-GUI-Launcher/projects/project-1/app/team-invite/page.tsx`、`FQL-GUI-Launcher/projects/project-1/app/member-permissions/page.tsx`、`FQL-GUI-Launcher/projects/project-1/app/billing-usage/page.tsx`、`FQL-GUI-Launcher/projects/project-1/app/api-keys/page.tsx`、`FQL-GUI-Launcher/projects/project-1/app/access-review-flow/page.tsx`、`governance/schedule/session-log.md`、`governance/schedule/breakpoint.md`、`governance/milestones/changelog.md`
- package scope：`FQL-GUI-Launcher/ai-agent-design-system` + `FQL-GUI-Launcher/projects/project-1` + workspace governance write-back
- promotion candidate：无；`Button` 是 design-system primitive 本体，`loading` 仍为 `Button` 内部资产，暂不上推为独立 primitive
- 风险/阻塞：当前“危险语义按钮”仍通过页面级 `className` 覆盖表达，尚未收敛为 `Button` 的正式 design-system 语义；若后续继续扩展 destructive / danger 按钮能力，需要先确定 API 方案再进入下一轮 primitive 演进。
- 下一步（P0）：进入下一个 primitive 的正式建设，或先为 `Button` 补齐“危险语义”正式 API，避免业务页继续覆写样式。
- 下一步（P1）：当 loading 需求脱离 `Button` 内部实现时，再将当前内部资产升级为正式 `loading` / `spinner` primitive，并补对应 preview 与验收矩阵。

### 2026-03-30 / navbar primitive 正式建设与双语 preview 收口

- 本轮目标：按 Figma `25062:7451` 正式落地移动端页面头部 `Navbar` primitive，覆盖 header / title / tabs / search family，并把 preview 命名升级为中英双语，同时完成本轮 harness 与治理写回收口。
- 本轮产出：新增 `components/ui/navbar.tsx`，以单一 variant-driven API 覆盖无标题图标栏、标题栏、标题+图标、标题+文字按钮、Tabs、搜索、搜索+按钮 7 类形态；新增 `_internal` 的 `navbar-icons`、`navbar-tabs`、`navbar-search` 作为私有配套原件与独立 icon 资产；`primitive-preview/navbar` 已接入并纳入静态路由；`primitivePreviewRegistry` 中的 `Navbar` 与历史 `Button` 已补齐中英双语标题、说明与关键分组命名；完整通过 `pnpm run harness:lint`、`pnpm run harness:verify`，并完成本地 `primitive-preview/navbar` 访问确认。
- changed files：`FQL-GUI-Launcher/ai-agent-design-system/components/ui/navbar.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/navbar-icons.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/navbar-tabs.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/navbar-search.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/registry.tsx`、`governance/schedule/session-log.md`、`governance/schedule/breakpoint.md`
- package scope：`FQL-GUI-Launcher/ai-agent-design-system` + workspace governance write-back
- promotion candidate：无；`Navbar` 为 design-system primitive 本体，`_internal/navbar-*` 仍为私有配套资产，暂不上推为独立 primitive
- 风险/阻塞：当前 `Navbar` 通过单一 variant API 承接 7 类页面头部形态，若后续真实页面对 tabs / search / action icon 的交互语义继续分化，可能需要基于复用证据再决定是否把部分 `_internal` 能力上推；其余历史 preview 组件尚未完成双语补齐，后续若要统一导航体验仍需继续回补。
- 下一步（P0）：继续下一个 primitive 的正式建设，保持“先 design-system primitive、后业务消费”的顺序；并观察远端 CI / PR 对本轮 navbar 落地的首次执行结果。
- 下一步（P1）：根据真实页面复用摩擦，评估是否将 `Navbar` 的 tabs / search / icon action 中某些 `_internal` 能力升级为正式 primitive；同时视需要继续为其余历史 preview 项补齐双语命名。

### 2026-03-30 / navbar 样式修复与 icon 资产阻塞确认

- 本轮目标：修复 `Navbar` 与 Figma 设计稿之间的关键样式偏差，优先收敛固定宽度、右侧操作区位置、搜索框按钮细节与输入态光标表现，并确认原始 icon 资产获取路径是否可直接落地。
- 本轮产出：`Navbar` 已取消自适应宽度，收敛为 Figma 对齐的 `375 x 44` 固定头部；`title-actions`、`title-text-action`、`tabs` 与 `search-action` 的右侧操作区已改回严格右对齐；搜索框右侧 CTA 前的竖线已删除，输入态光标已改为直角竖条；本地页面确认上述布局修复已生效；重新通过 `pnpm run harness:lint` 与 `pnpm run harness:verify`。同时已验证 Figma MCP 当前只能返回 icon asset URL，无法在现有环境中直接下载为可落盘的本地 SVG，因此“必须使用设计稿原始 icon 资产”暂时卡在用户待补 SVG 的输入上。
- changed files：`FQL-GUI-Launcher/ai-agent-design-system/components/ui/navbar.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/navbar-search.tsx`、`governance/schedule/session-log.md`、`governance/schedule/breakpoint.md`
- package scope：`FQL-GUI-Launcher/ai-agent-design-system` + workspace governance write-back
- promotion candidate：无；本轮为已落地 `Navbar` primitive 的样式纠偏，不新增上推对象
- 风险/阻塞：当前 `Navbar` 的布局与交互细节已更贴近 Figma，但返回箭头、搜索 icon、右侧 icon 按钮与删除按钮仍未替换为设计稿原始 SVG 资产；若没有用户补充 SVG 或新的可下载路径，本轮只能保留现有近似 icon 实现。
- 下一步（P0）：等待用户提供 `Navbar` 相关原始 SVG 资产，收到后替换当前近似 icon，并再次执行 preview 验证与 harness 收口。
- 下一步（P1）：在原始 icon 资产补齐后，再决定是否为其他已落地 primitive 追加同等级别的 Figma 资产回填策略。

### 2026-03-31 / iPhone 通用 primitive 与 preview 框架收口后的 harness 执行补完

- 本轮目标：对照最近一次正式写回后的 git 提交，补完本轮真实变动所需的 harness 执行动作，并以机械校验方式确认 design-system / consumer / governance / harness 链路仍然闭环。
- 本轮产出：已确认 `fdc7281` 之后新增 3 个未写回提交，覆盖 `Navbar` 收尾、`StatusBar` / `HomeIndicator` 新增、`primitive-preview` 框架与样式优化，以及 `primitive-preview-sync` 校验逻辑调整；按“跳过肉眼预览校验、仅保留机械校验”的口径，完整执行并通过 `pnpm install --frozen-lockfile`、`pnpm run check:primitive-preview-sync`、`pnpm run harness:registry`、`pnpm run harness:lint`、`pnpm run harness:verify:consumer`、`pnpm run harness:verify:governance`、`pnpm run harness:verify:harness` 与 `pnpm run harness:verify`，确认 design-system build、consumer build、typecheck、registry、governance consistency 与 writeback template 校验均保持通过。

- changed files：`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/[id]/page.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/_internal/preview-mobile-nav.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/_shadcn/button.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/_shadcn/drawer.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/_shadcn/separator.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/layout.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/preview.css`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/primitive-preview-nav.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/registry.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/.icon/**`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/navbar-icons.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/navbar-search.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/_internal/status-bar-icons.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/ui/home-indicator.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/ui/navbar.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/components/ui/status-bar.tsx`、`FQL-GUI-Launcher/ai-agent-design-system/package.json`、`FQL-GUI-Launcher/pnpm-lock.yaml`、`FQL-GUI-Launcher/scripts/harness-checks.mjs`
- package scope：`FQL-GUI-Launcher/ai-agent-design-system` + `FQL-GUI-Launcher/projects/project-1` harness 回归 + workspace governance / harness verification
- promotion candidate：无；`StatusBar`、`HomeIndicator` 已直接作为 design-system primitive 落地，本轮不新增额外上推对象
- 风险/阻塞：当前本地执行环境仍为 `Node 22` / `pnpm 10`，与仓库约定的 `Node 20` / `pnpm 9` 不一致；虽然本轮 `install --frozen-lockfile` 与全套 harness 已通过，但远端 CI 仍应以仓库约定环境为准。另按本轮裁决，所有等同于肉眼观测 preview 效果的校验已显式跳过，不再作为 harness 通过与否的判据。
- 下一步（P0）：将本轮 harness 执行结果写回 `breakpoint.md`，把 `StatusBar` / `HomeIndicator` 与 preview 框架收口后的机械验证通过状态纳入当前真相源。
- 下一步（P1）：如后续继续推进新的 primitive，延续“先机械 harness，再决定是否需要额外治理写回”的口径，并保持跳过肉眼 preview 校验，避免重复自循环。

### 2026-03-31 / preview 肉眼校验职责正式收敛

- 本轮目标：把“肉眼 preview 校验由人执行，agent 先询问并等待用户回传后再继续”的口径，从本轮临时裁决升级为正式流程规则。
- 本轮产出：已更新 `governance/process/session-workflow.md`、`docs/runbooks/local-dev.md`、`docs/harness/verification-matrix.md` 与 `docs/harness/artifacts.md`，明确 preview / 页面视觉类观察、截图与录屏确认默认由用户执行与回传；助手负责先给出待观察路由、检查点与回传要求，并在用户回传前暂停依赖该视觉结论的后续动作。

- changed files：`governance/process/session-workflow.md`、`FQL-GUI-Launcher/docs/runbooks/local-dev.md`、`FQL-GUI-Launcher/docs/harness/verification-matrix.md`、`FQL-GUI-Launcher/docs/harness/artifacts.md`、`governance/schedule/session-log.md`、`governance/schedule/breakpoint.md`
- package scope：workspace governance + engineering root harness / runbook docs
- promotion candidate：无
- 风险/阻塞：该规则能避免 agent 因本地 preview 主观判断进入自循环，但凡是确实依赖视觉结论的任务，都会引入“等待用户观察并回传”的人工同步点。
- 下一步（P0）：在后续首次遇到需要视觉 preview 结论的任务时，严格按“先询问用户、等待回传、再继续”的新规则执行。
- 下一步（P1）：如后续人工视觉验收场景持续增多，再评估是否补统一的用户回传模板，减少每次临时描述观察点的成本。

### 2026-04-01 / primitive-preview 舞台层边界治理补全

- 本轮目标：把 `primitive-preview` 舞台层与右侧详情展示区之间的边界从实现约定升级为正式治理与工程规则，避免后续新增 primitive 时出现舞台样式污染详情内容，或舞台私有资产反向渗透到 consumer 层。
- 本轮产出：已将以下 4 条规则正式写回治理层与 engineering 层：1）`preview` 页是 primitive 展示的舞台层；2）舞台层导航、网站标题栏与详情展示容器外壳统一使用 `app/primitive-preview/_internal/*` 与 `app/primitive-preview/_shadcn/*` 私有实现；3）右侧详情区组件内容不得受舞台层样式污染，`detail-body` 视为接近真实消费环境的展示落点；4）舞台层私有组件、样式与类名只服务于舞台，不得被 `projects/*` 或其他 consumer / 业务页面复用调用。同时已补充 `primitive-preview` 边界 runbook 与 docs 入口，形成治理真相源、包级规则与可链接工程文档三层闭环。
- changed files：`governance/schedule/session-log.md`、`governance/schedule/breakpoint.md`、`FQL-GUI-Launcher/ai-agent-design-system/.cursor/rules/ui-system.mdc`、`FQL-GUI-Launcher/ai-agent-design-system/AGENTS.md`、`FQL-GUI-Launcher/ai-agent-design-system/app/primitive-preview/preview.css`、`FQL-GUI-Launcher/docs/runbooks/primitive-preview.md`、`FQL-GUI-Launcher/docs/index.md`
- package scope：workspace governance + `FQL-GUI-Launcher/ai-agent-design-system` + engineering root docs
- promotion candidate：无；本轮为 preview 舞台层边界治理与文档固化，不新增 design-system 上推对象
- 风险/阻塞：本轮补齐的是文档与规则边界，不会自动阻止未来有人在 `primitive-preview` 外层追加宽泛样式或误引用舞台私有组件；后续新增 preview 舞台能力时，仍需按本轮规则人工审查 selector 范围与包边界。
- 下一步（P0）：后续每新增一个 primitive preview 展示时，默认只改 `registry.tsx` 与详情内容本身，不在 layout / stage shell 上为单个 primitive 添加特例样式。
- 下一步（P1）：若后续舞台层私有资产继续增长，可再评估是否增加针对 `app/primitive-preview/_internal/*` 与 `_shadcn/*` 的边界校验脚本，进一步减少误用空间。
