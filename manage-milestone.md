# 里程碑记录

## Phase 1：项目启动与基础工作流搭建
### 已完成
- 明确项目方向：用 Cursor + shadcn + AI Agent 建立“组件驱动的界面生成工作流”。
- 建立初始工程策略：primitive → semantic → consumer page composition。
- 输出早期规则文档与操作指导。

### 阶段价值
- 定义了项目不是“随便生成页面”，而是“让 AI 在设计系统边界内工作”。

---

## Phase 2：Monorepo 与 consumer/design-system 基础成型
### 已完成
- 建立 pnpm workspace monorepo。
- 明确 packages 为 `ai-agent-design-system` 与 `projects`。
- 明确 `project-1` 是 consumer app，不是设计系统源头。
- 初步建立 project-1 的 AGENTS.md 消费规则。
- 确定 consumer 使用 `transpilePackages` 连接上游 design system。

### 阶段价值
- 工程边界首次清晰化，为后续“禁止 consumer 越权”打下基础。

---

## Phase 3：Design System + Registry 基础打通
### 已完成
- ai-agent-design-system 成为 source of truth。
- 建立 shadcn primitive 层。
- 建立 FQL semantic 层核心组件：
  - FqlCard
  - FqlField
  - StatusBadge
- 建立本地 registry 机制。
- 明确本地 registry 验证链路：
  - dev server
  - `/r/registry.json`
  - `/r/fql-card.json`
  - shadcn CLI view

### 阶段价值
- 证明“组件可以作为可分发能力被 Agent 依赖”，而不是仅存在于本地文件里。

---

## Phase 4：Consumer 首个业务页演练
### 已完成
- 在 `projects/project-1` 中完成首个 consumer 页面生成演练。
- 验证 Agent 能优先复用：
  - FqlCard
  - FqlField
  - StatusBadge
  - Button
- 确认 consumer 页面遵循 page composition only 原则。
- 形成早期 consumer SOP 闭环。

### 阶段价值
- 证明 Agent 不只是能“写页面”，而是能在已有 design system 上组合页面。

---

## Phase 5：Consumer SOP 固化 + 第二业务页验证
### 已完成
- 强化 `docs/project-1-consumer-page-acceptance.md` 的验收规则。
- 固化 changed files / package scope / promotion candidate 输出要求。
- 完成 `/team-invite` 页面生成与本地运行验证。
- 再次验证 consumer 不复制上游 semantic component。

### 阶段价值
- consumer 规则从“建议”升级为“可检查 SOP”。

---

## Phase 6：关键类型问题修复 + 第三业务页生成
### 已完成
- 发现 FqlCard 的 `title` props 与原生 div title 属性冲突。
- 修复方式：`Omit<React.ComponentPropsWithoutRef<'div'>, 'title'>`。
- design system build 恢复通过。
- 完成 `/api-keys` 页面生成。
- `ai-agent-design-system` 与 `project-1` 双 build 成功。

### 阶段价值
- 这是一次关键工程修复，证明该工作流不仅会生成页面，也能反向修正设计系统 API。

---

## Phase 7：Registry 端到端验证
### 已完成
- `pnpm run registrybuild` 成功。
- 本地 design system dev server 跑在 `localhost:3001`。
- `r/registry.json` 可访问。
- `r/fql-card.json` 可访问。
- shadcn CLI 能查看 `fql/fql-card`。
- 完成 props 审查与 build 验证。
- project-1 中 team-invite / api-keys 路由 build 成功。

### 阶段价值
- 至此，registry 链路、组件 API 链路、consumer 消费链路都已打通。

---

## Phase 8：Consumer smoke test + Cursor shell 环境修复
### 已完成
- 排查并修复 Cursor Agent Terminal 的 PATH 问题。
- 修复后 Cursor shell 可以正确识别 curl / pnpm / node。
- 启动 `project-1` dev server 成功。
- `/team-invite` smoke test 返回 200。
- `/api-keys` smoke test 返回 200。
- 核查页面输出为 Next.js HTML。
- 复查 consumer 页面代码，确认仍以 design system 组件组合为主。

### 阶段价值
- 解决了“规则没问题，但 Agent 执行环境不稳定”的真实工程问题。
- 这一步让工作流从“理论可行”提升为“实际可操作”。

---

## 当前已完成的整体里程碑汇总
### 已完成的大里程碑
- [x] Monorepo 基础完成
- [x] Design System 基础完成
- [x] Primitive 层完成
- [x] Semantic 层首批组件完成
- [x] Local Registry 基础完成
- [x] Consumer 侧 project-1 建立完成
- [x] 首个业务页演练完成
- [x] 第二个业务页 team-invite 完成
- [x] 第三个业务页 api-keys 完成
- [x] Registry build + CLI view 验证完成
- [x] 双包 build 验证完成
- [x] Consumer dev smoke test 完成
- [x] Cursor PATH 环境修复完成

---

## 尚未完成的目标与事项
### 近期待完成
- [ ] 按 SOP 输出更正式的 consumer 验收归档结果。
- [ ] 对 project-1 当前三个页面做统一的 promotion candidate 复盘。
- [ ] 继续梳理哪些页面模式应上升为 FQL 语义组件。
- [ ] 补齐当前阶段的标准项目管理文档与长期执行清单。

### 中期待完成
- [ ] 扩展更多语义组件，而不是只依赖当前 FqlCard / FqlField / StatusBadge。
- [ ] 建立第二个 consumer 项目，用于验证跨项目复用。
- [ ] 把本地 registry 工作流进一步整理为可迁移 SOP。

### 远期待完成
- [ ] 评估远程 registry 发布方案。
- [ ] 形成团队可协作的“设计系统 + Agent 工作流模板”。