# Registry Runbook

## When To Use

- 修改 `registry.json`
- 修改 `components.json`
- 修改 registry-backed semantic components
- 需要验证 `@fql/*` CLI resolution

## Steps

1. 保证 design-system 在 `3001` 运行
2. 执行 `pnpm run registry:build`
3. 检查 `/r/registry.json`
4. 检查目标 item json
5. 必要时执行 `pnpm dlx shadcn@latest view @fql/<item>`

## Failure Hints

- 端口不一致：先检查是否仍在使用 `3001`
- item 缺失：检查 `registry.json` 与 `public/r/*`
- CLI 解析失败：先检查 dev server、路径和 item name
