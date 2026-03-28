# Blueprint

## 项目名称

AI Agent 驱动组件库生成界面工作流（`FQL-GUI-Launcher`）

## 核心目标

建立一套“指挥 AI Agent 调用设计系统完成代码级界面设计”的工程化工作流，验证：

- Agent 能在设计系统边界内工作，而不是失控地生成 UI。
- consumer 项目只做 page composition，不重新发明 shared abstraction。
- 设计系统、registry、consumer 页面、验收与归档可以形成长期复用的闭环。

## 当前分层真相

- governance root：`GUI-Explore/`
- engineering root：`FQL-GUI-Launcher/`
- design system source of truth：`FQL-GUI-Launcher/ai-agent-design-system`
- consumer projects：`FQL-GUI-Launcher/projects/*`

## 架构原则

### 1. 三层 UI 分层

- Primitive：`components/ui/*`
- Semantic：`components/fql/*`
- Consumer page composition：`projects/*`

### 2. 上游优先复用

- 若 design system 已有能力，consumer 不得重复实现。
- 可跨项目复用的模式优先考虑上推到 design system。

### 3. 规则优先于 prompt

稳定性主要依赖：

- `AGENTS.md`
- `.cursor/rules/*`
- registry source of truth
- runbook / acceptance / harness 文档

### 4. token 统一

- 不在 consumer 中硬编码 hex、radius、shadow。
- 优先复用 design system 语义 token 与现有样式约定。

### 5. 验证工程化

任何页面或组件是否成立，以工程验证和边界校验为准，而不是“看起来差不多”。

## 当前阶段总判断

项目已经完成基础 monorepo、design system、registry 与多轮 consumer 页面验证，当前重心从“跑通链路”切换为“治理收口 + harness 化 + 长期可维护性”。

## 战略主线

1. 先完成 harness-engineering 改造。
2. 再把稳定知识下沉到 repo 文档系统。
3. 再统一工程命令、检查、CI 与 Cloud Agent 流程。
4. 结构收口后再做第一轮定向垃圾回收。

## 成功标准

- workspace 与 repo 的职责清晰。
- `breakpoint.md` 成为唯一当前真相源。
- engineering root 能提供统一命令与验证入口。
- Cloud Agent 可以按阶段独立实施并产出 artifact。
- 文档漂移、规则膨胀、registry/preview 漏同步能够被持续发现。

## 战略变更记录

### 2026-03-24 / 优先队列与缺口闭环收敛

- 变更前：未明确 P0/P1/P2 执行队列；缺口组件来源策略存在歧义。
- 变更后：新增优先队列与组件缺口闭环机制；明确来源 C 非当前能力。
- 变更原因：避免 consumer 边界与缺口处理冲突。
- 影响范围：design system / consumer / workflow

### 2026-03-24 / P1 执行顺序修正（primitive 先行）

- 变更前：primitive 与 semantic 容易并行扩展，语义层可能架空。
- 变更后：P1 改为“两段式”，先 primitive，后 semantic。
- 变更原因：保证抽象可追溯、可验证、可复用。
- 影响范围：design system / workflow

### 2026-03-28 / harness-engineering 结构裁决

- 变更前：workspace / repo 根定义、统一命令入口位置、端口契约与旧管理文件迁移策略尚未锁定。
- 变更后：固定 `GUI-Explore` 为 governance root、`FQL-GUI-Launcher` 为 engineering root；统一 `package.json` 放在 `FQL-GUI-Launcher/`；旧 `manage-*` 迁移为跳转壳；design-system registry 端口统一为 `3001`。
- 变更原因：为正式实施 harness 改造提供稳定结构前提。
- 影响范围：governance / engineering workflow / harness infra
