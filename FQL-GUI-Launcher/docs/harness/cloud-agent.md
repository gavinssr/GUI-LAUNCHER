# Cloud Agent Harness

## Entry Rules

1. 默认先读 `governance/schedule/breakpoint.md`，只提炼当前最小治理断点。
2. 再读 `FQL-GUI-Launcher/AGENTS.md`、`docs/index.md` 与目标 package `AGENTS.md` / `.cursor/rules/*`。
3. 只有在任务本身属于 `governance`，或当前真相源冲突时，才补读其他 workspace governance 文档。
4. 所有命令从 engineering root `FQL-GUI-Launcher/` 执行。

## Default Contract

- 基于远端 `dev` 工作，不依赖本地未推送状态。
- 不并发重构同一批入口文档或同一组治理真相源。
- 非 governance task 先围绕 target package、工程目标、输入证据与验证步骤组织任务，治理写回只在收口阶段处理。
- 一律通过 `FQL-GUI-Launcher/package.json` 暴露的 `harness:*` / `check:*` 入口执行验证。
- GitHub Actions 工作流文件放在 git root `.github/workflows/`，但其执行根仍固定到 `FQL-GUI-Launcher/`。
- PR 说明与 artifact 输出遵守 `.github/pull_request_template.md` 和 `docs/harness/artifacts.md`。

## Standard Task Fields

每个 Cloud Agent 任务都必须明确：

- target package
- task layer
- inputs / evidence
- invariants
- verification steps
- artifacts
- promotion candidate
- write-back targets

补充规则：

- 字段顺序代表任务优先级，必须先写清工程目标、证据与验证，再填写 `write-back targets`。
- `write-back targets` 只用于收口，不得反向驱动非 governance task 的主线叙事。

## Role Templates

- `Verifier`：`docs/harness/templates/verifier.md`
- `Reviewer`：`docs/harness/templates/reviewer.md`
- `Gardener`：`docs/harness/templates/gardener.md`

## Standard Commands

- 全量验证：`pnpm run harness:verify`
- design-system / registry：`pnpm run harness:verify:design-system`
- consumer：`pnpm run harness:verify:consumer`
- governance / harness docs：`pnpm run harness:verify:governance`
- artifact 路径校验：`pnpm run check:artifact-presence <relative-path...>`

## CI Contract

- GitHub Actions 入口：`.github/workflows/harness-verify.yml`
- PR 模板入口：`.github/pull_request_template.md`
- CI 必须至少执行一次 `pnpm run harness:verify`
- CI 必须上传最小 artifact，至少包含 registry 输出或 harness 参考文档
