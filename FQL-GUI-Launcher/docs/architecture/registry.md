# Registry Architecture

## Source Of Truth

本地 FQL registry 的 source of truth 位于 `ai-agent-design-system/`：

- `registry.json`
- `components.json`
- `public/r/*`
- `components/fql/*`

## Port Contract

- design-system dev / local registry / primitive preview 统一使用 `3001`
- consumer app 可使用其他端口，但不得污染 registry 契约

## Verification Chain

1. 启动 design-system dev server 于 `http://localhost:3001`
2. 验证 `http://localhost:3001/r/registry.json`
3. 验证某个 item，例如 `http://localhost:3001/r/fql-card.json`
4. 验证 CLI resolution：`pnpm dlx shadcn@latest view @fql/fql-card`

## Publication Policy

- 仅稳定、可复用、API 清晰的 semantic component 才进入 `@fql` registry
- page-level composition 不进入 registry
