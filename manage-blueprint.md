# 📐 项目总规划蓝图

## 项目名称
**AI Agent 驱动组件库生成界面工作流**（FQL-GUI-Launcher）

## 核心目标
建立一套「指挥 AI Agent 调用组件库完成代码级界面设计」的完整工作流程，验证：

> **设计师可以用 Cursor Agent + shadcn Registry，像指挥设计系统一样指挥 AI 生成真实可用的业务页面**

> **用于开发此项目的参考文档：**
> https://ui.shadcn.com/docs
> https://cursor.com/cn/docs
---

## 一、项目本质定义

这个项目本质上不是“做几个页面”，而是要搭建一条**可重复、可约束、可扩展、可验收**的 AI 辅助界面生产链路。

目标不是让 Agent 随便生成 UI，而是让 Agent 在明确边界下：
- 优先复用上游设计系统组件；
- 按既定分层消费组件；
- 在 consumer 项目里只做 page composition；
- 输出可以被工程验证和持续复用的页面结果。

换句话说，本项目要证明的是：

**“AI Agent 能否成为设计系统的执行层，而不是失控的代码生成器。”**

---

## 二、项目总目标

围绕项目最终目标，项目需同时达成以下 5 个结果：

### 1. 建立设计系统工程底座
搭建一个可运行、可构建、可维护的 design system package，承载 primitive 层与 semantic 层能力。

### 2. 建立 Agent 可遵守的工作流规则
通过 AGENTS.md、.cursorrules、SOP 文档，把 Agent 的行动边界收敛到可控范围内。

### 3. 建立 Registry 驱动的组件分发链路
让设计系统组件不只是“本地 import”，而是具备 shadcn registry 兼容分发能力，便于 Agent 以标准方式识别、消费与扩展。

### 4. 建立 Consumer 端页面生成闭环
在业务项目中验证 Agent 能否稳定地只通过上游组件完成页面级实现，而不破坏设计系统边界。

### 5. 建立一套可复制的团队 SOP
最终沉淀为以后可以重复执行的工作方法，而不是一次性的试验过程。

---

## 三、技术架构总览

### Monorepo 结构（pnpm workspace）

```text
FQL-GUI-Launcher/
├── ai-agent-design-system/        # 设计系统包（Design System）
│   ├── components/ui/             # Primitive 层（shadcn 原生）
│   │   └── button, card, badge, field, input, dialog, label, separator
│   ├── components/fql/            # Semantic 层（FQL 语义化组件）
│   │   └── fql-card, fql-field, status-badge
│   ├── public/r/                  # Registry JSON 对外服务端点
│   └── AGENTS.md                  # 设计系统 Agent 行为规范
│
├── projects/
│   └── project-1/                 # Consumer 消费端应用
│       ├── app/page.tsx           # Demo 主页
│       ├── app/team-invite/       # 业务页：团队邀请
│       ├── app/api-keys/          # 业务页：API Key 管理
│       └── AGENTS.md              # Consumer Agent 行为规范
│
├── docs/
│   └── project-1-consumer-page-acceptance.md  # Consumer SOP 验收标准
│
├── AGENTS.md                      # 全局 Agent 规范
├── .cursorrules/
│   ├── monorepo-boundary.mdc      # Monorepo 边界规则
│   └── consumer-layer.mdc         # Consumer 层规则
└── pnpm-workspace.yaml
```

---

## 四、分层架构原则

项目采用三层清晰分离的结构：

### 1. Primitive 层
这一层是基于 shadcn/ui 的基础能力层，提供 Button、Card、Badge、Field、Input、Dialog、Label、Separator 等原子级组件能力。

### 2. Semantic 层
这一层在 primitive 之上进行语义包装，形成 FQL 业务设计系统自己的表达层，例如：
- FqlCard
- FqlField
- StatusBadge

这一层的作用不是重复 primitive，而是把“业务语义”封装进去，让 Agent 优先调用高层语义组件，而不是每次重新拼基础组件。

### 3. Consumer Page Composition 层
这一层位于项目业务端（如 project-1），只负责：
- 读取已有语义组件；
- 基于页面需求进行编排；
- 不新增 shared 组件；
- 不复制上游组件；
- 不改写 design system 源文件。

也就是说，consumer 端的职责是“组装页面”，不是“发明组件”。

---

## 五、核心工作流蓝图

整个项目工作流围绕以下闭环建立：

### 阶段 A：设计系统建设
- 建立 monorepo
- 初始化 ai-agent-design-system
- 接入 shadcn/ui
- 完成 primitive 层
- 完成 semantic 层

### 阶段 B：Agent 规则建设
- 建立根级 AGENTS.md
- 建立 design-system 层 AGENTS.md
- 建立 projects 层 AGENTS.md
- 建立 project-1 层 AGENTS.md
- 建立 .cursorrules 规则边界
- 建立 consumer SOP 验收文档

### 阶段 C：Registry 建设
- 生成 registry.json
- 暴露 public/r/*
- 验证 localhost:3001/r/registry.json
- 验证 localhost:3001/r/fql-card.json
- 验证 shadcn CLI 是否能读取 registry item

### 阶段 D：Consumer 页面演练
- 在 project-1 中让 Agent 生成页面
- 限制 Agent 只能复用上游组件
- 验证页面运行成功
- 验证页面符合 SOP
- 验证构建通过

### 阶段 E：方法论沉淀
- 把页面演练转化为团队 SOP
- 识别哪些页面结构可沉淀上游
- 识别哪些组件应晋升为 design system 资产
- 为后续更多 consumer 项目复用做好准备

---

## 六、核心设计原则

### 1. 先分层，后生成
Agent 不能直接跳到页面开发，必须先明确页面属于哪一层：
- primitive 问题；
- semantic 问题；
- consumer composition 问题。

### 2. 上游优先复用
如果 design system 已有能力，consumer 不得重复造轮子。

### 3. consumer 只做 page composition
业务页允许“组装”，不允许“发明公共组件”。

### 4. 规则比 prompt 更重要
真正保证稳定性的不是一次 prompt 写得多漂亮，而是：
- AGENTS.md
- .cursorrules
- registry source of truth
- SOP acceptance checklist

### 5. token 必须统一
颜色、背景、边框、文本等必须走 design token / semantic utility class，不能在 consumer 中硬编码 hex、radius、shadow。

### 6. 验证必须工程化
一个页面是否成立，不以“看起来差不多”为准，而以这些结果为准：
- pnpm dev 可运行
- 页面 GET 200
- pnpm build 通过
- 结构符合边界
- 验收文档可核对

---

## 七、技术栈规划

### 框架层
- Next.js 16.2.1
- React
- Turbopack

### 样式层
- Tailwind CSS v4
- design token 驱动
- 语义 utility class

### 组件层
- shadcn/ui
- Radix UI
- FQL semantic components

### 工程层
- pnpm workspace
- monorepo
- transpilePackages
- @source 扫描 design system token source

### Agent 层
- Cursor Agent
- Plan / Agent 工作模式
- AGENTS.md 规则链
- .cursorrules 边界控制

### 分发层
- shadcn registry
- registry.json
- registry item json
- localhost:3001 本地 registry 服务

---

## 八、项目成功标准

项目成功不是“做完了”，而是至少满足以下标准：

### 工程成功标准
- design system 可运行、可 build
- consumer project 可运行、可 build
- registry 可构建、可访问、可被 CLI 读取

### 组件成功标准
- primitive 层清晰
- semantic 层清晰
- consumer 无越层污染

### Agent 成功标准
- Agent 能按规则行动
- Agent 能优先复用已有组件
- Agent 能稳定生成多个业务页面
- Agent 不擅自新增 shared abstraction

### 工作流成功标准
- SOP 可重复执行
- 新页面可沿用同一方法开发
- 后续可扩展到更多项目和更多业务场景

---

## 九、当前阶段性总蓝图

当前项目的大图景可以概括为：

### 第一阶段：打地基
完成 monorepo、design system、rules、registry 的基础搭建。

### 第二阶段：做通一条最小闭环
用 project-1 验证 Agent 是否能调用 design system 完成真实页面。

### 第三阶段：做通多个页面
通过首页、team-invite、api-keys 等页面，验证这条链路不是偶然成功，而是具备复现性。

### 第四阶段：把成功经验沉淀成 SOP
让未来每次新页面开发，都能复用同一套方法和检查机制。

### 第五阶段：进入规模化阶段
后续再扩展到：
- 更多 semantic 组件；
- 更多 consumer 项目；
- 真实远程 registry；
- 团队级协作流程。

---

## 十、后续总方向

从整个项目战略来看，后续最重要的不是“继续堆页面”，而是按顺序推进以下方向：

1. 完成 consumer 页面验收闭环；
2. 规范 page header 和通用页面骨架；
3. 识别可晋升到 semantic 层的新组件；
4. 发布远程 registry；
5. 用第二个 consumer 项目验证跨项目复用；
6. 最终形成一套可交给团队复制执行的标准工作流。

---

## 十一、一句话定义本项目

**本项目是在搭建一套让设计系统真正指挥 AI 产出业务界面的工程化工作流，而不是一次性的 AI 生图式前端试验。**
