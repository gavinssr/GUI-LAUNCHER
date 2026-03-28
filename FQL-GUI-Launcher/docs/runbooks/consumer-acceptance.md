# Consumer Acceptance Runbook

## 适用范围

适用于 `projects/*` consumer app 的页面级实现验收。

- 面向业务页、路由页、页面组装结果
- 不适用于 design system primitive / semantic 开发本身

## 验收清单

- [ ] 已按顺序阅读根级与项目级 `AGENTS.md` / `.cursor/rules/*`
- [ ] 已先检查上游 design system 是否已有可复用组件
- [ ] 页面优先复用 `components/fql/*` 与 `components/ui/*`
- [ ] 未在 consumer 内新建 shared primitive 或 shared semantic component
- [ ] 未复制 registry-backed 组件到 consumer
- [ ] 样式未硬编码 hex、阴影、圆角
- [ ] 交付中已明确列出 `changed files`
- [ ] 交付中已明确列出 `package scope`
- [ ] 交付中已明确说明 `promotion candidate`
- [ ] 已完成运行验证，确保目标页面可访问
- [ ] 已判断是否存在红线问题并处理或明确阻塞

## 一票否决项

- 未先阅读约束文件就直接实现
- 未检查上游可复用组件就在 consumer 新建 shared abstraction
- 复制或变相复制 registry-backed 组件
- 大量硬编码 token 值绕开 design system
- 未完成最基本运行验证却提交
