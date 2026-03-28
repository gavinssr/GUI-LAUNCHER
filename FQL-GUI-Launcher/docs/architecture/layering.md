# Layering

## UI Layers

### Primitive Layer

- 路径：`ai-agent-design-system/components/ui/*`
- 角色：shadcn primitive 与基础交互原件

### Semantic Layer

- 路径：`ai-agent-design-system/components/fql/*`
- 角色：FQL 语义包装与可复用设计系统表达

### Page Composition Layer

- 路径：`projects/*`
- 角色：真实业务页面、路由、组装与项目特定交互

## Key Rules

- consumer 只做 page composition，不沉淀 shared abstraction
- 可跨项目复用的模式优先回推 design system
- theme token source of truth 固定在 `ai-agent-design-system/app/globals.css`
- `ai-agent-design-system/app/*` 只用于 demo、preview、docs、verification
