# Project-1 Consumer 页面验收清单

## 适用范围

适用于 `projects/project-1` 这类 consumer app 的页面级实现验收。

- 面向业务页、路由页、页面组装结果。
- 不适用于 `ai-agent-design-system` 的组件开发、registry 维护或 design system SOP。

## 验收清单

- [ ] 已按顺序阅读并遵守相关约束文件：根级 `AGENTS.md`、`projects/AGENTS.md`、`projects/project-1/AGENTS.md`，以及必要的上游 design system 规则与相关文件。
- [ ] 开始实现前，已先检查上游 `ai-agent-design-system` 是否已有可复用组件或模式。
- [ ] 页面实现已优先复用 `components/fql/*` 与 `components/ui/*`，而不是在 consumer 内重复造轮子。
- [ ] 未在 `project-1` 新建 shared primitive 或 shared semantic component。
- [ ] 未把 registry-backed 组件直接复制到 consumer 项目中。
- [ ] 业务逻辑与 UI 仅在 `page` / `route` 层做组装，没有把共享抽象错误地下沉到 consumer 本地公共层。
- [ ] 样式未硬编码 hex、阴影、圆角，优先使用语义 token 类与 design system 约定。
- [ ] 交付说明中已明确列出 `changed files`。
- [ ] 交付说明中已明确列出 `package scope`。
- [ ] 交付说明中已明确说明 `promotion candidate`，即使结论为“无”也要写明。
- [ ] 已完成运行验证，至少确认本地可启动且目标页面可访问，例如 `pnpm dev` 后页面能正常打开。
- [ ] 已检查本次实现是否存在需要立即修复的红线问题，并在交付前处理或明确阻塞。

## 一票否决项

- 未先阅读规定的 `AGENTS` / 规则文件就直接实现。
- 未检查上游可复用组件，直接在 consumer 内新建 shared primitive 或 shared semantic component。
- 复制或变相复制 registry-backed 组件到 `project-1`。
- 在 consumer 页面中大量硬编码 hex、阴影、圆角，绕开上游语义 token。
- 将本应属于 design system 的共享能力实现在 `project-1`。
- 未完成最基本运行验证，页面无法访问或明显报错仍提交。
- 存在明显红线问题却未在交付说明中指出。

## 交付输出要求

最终交付时至少包含以下三项：

- `changed files`：列出本次新增或修改的文件。
- `package scope`：明确写 `projects/project-1`。
- `promotion candidate`：明确是否存在应回推到 design system 的复用候选；若无，写“无”。
