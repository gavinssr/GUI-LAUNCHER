# GUI-Explore Workspace Management AGENTS

## Mission
`/Users/gavinss/Desktop/GUI-Explore` 是 FQL 项目的治理层目录，不是业务代码实现目录。

- engineering root 固定为 `./FQL-GUI-Launcher/`
- 本目录用于维护会话治理、进度追踪、里程碑和战略文档
- 除治理文档外，不在本目录实现业务代码

## Required Reading Order
1. `./AGENTS.md`（本文件）
2. `./governance/README.md`
3. `./governance/strategy/blueprint.md`
4. `./governance/strategy/policy-queue.md`
5. `./governance/milestones/history.md`
6. `./governance/milestones/changelog.md`
7. `./governance/schedule/breakpoint.md`
8. `./governance/schedule/session-log.md`
9. `./FQL-GUI-Launcher/AGENTS.md`
10. 目标子包 `AGENTS.md` 与对应 `.cursor/rules/*`

## Governance File Responsibilities
- `governance/strategy/blueprint.md`：项目战略与阶段蓝图（方向级）
- `governance/strategy/policy-queue.md`：当前优先队列、策略门槛与闭环政策
- `governance/milestones/history.md`：已完成阶段与里程碑历史（阶段级）
- `governance/milestones/changelog.md`：阶段状态变更记录（阶段级）
- `governance/schedule/breakpoint.md`：当前断点与下一步（会话级真相源）
- `governance/schedule/session-log.md`：会话级任务日志
- `governance/process/session-workflow.md`：治理写回流程、触发条件、收口检查

## Session Workflow
### Session start
- 先完成治理文档阅读与断点提炼，再进入 `FQL-GUI-Launcher` 代码工作。
- 如治理信息冲突，以 `governance/schedule/breakpoint.md` 为当前真相源。

### Session in progress
- 先判断任务归属：design system / consumer / registry / governance。
- 开发必须发生在 `FQL-GUI-Launcher`，治理目录只承载文档。

### Session close (write-back order)
1. 必写：更新 `governance/schedule/session-log.md` 与 `governance/schedule/breakpoint.md`
2. 条件写：阶段状态变化时更新 `governance/milestones/changelog.md`
3. 条件写：战略或优先级变化时更新 `governance/strategy/*.md`

## Execution Ownership
- 默认执行口径：除“用户在独立窗口进行提示词压测”外，其余事项由助手执行推进。
- 压测类任务分工：用户负责执行并回传结果；助手负责模板、判定、归档与后续推进建议。
- 若任务同时包含“压测执行 + 非压测治理动作”，先由用户完成压测回传，再由助手完成其余动作。
- 落盘授权规则（强制）：无论代码文件还是文档文件，写入落盘前必须先向用户确认。
- Agent 模式授权口径：当助手给出待执行动作后，用户点击 `run`（或明确文字同意）即视为授权执行本次落盘。

## Output Expectations For Each Task
- changed files
- package scope
- promotion candidate（可为“无”）
- 风险/阻塞
- 下一步（P0/P1）

## Cursor Cloud specific instructions

### Environment

- **Node.js 20** and **pnpm 9** are required (matching CI in `.github/workflows/harness-verify.yml`).
- Engineering root is `FQL-GUI-Launcher/`. All `pnpm` commands run from there.
- No external services, databases, Docker, or `.env` files are needed — this is a purely front-end monorepo.

### Key commands (all from `FQL-GUI-Launcher/`)

| Task | Command |
|---|---|
| Install deps | `pnpm install --frozen-lockfile` |
| Lint | `pnpm run harness:lint` |
| Typecheck | `pnpm run harness:typecheck` |
| Build | `pnpm run harness:build` |
| Full CI verification | `pnpm run harness:verify` |
| Design system dev | `pnpm --dir ai-agent-design-system dev` (port 3001) |
| Consumer app dev | `pnpm --dir projects/project-1 dev` (port 3000) |
| Registry build | `pnpm run harness:registry` |

### Non-obvious notes

- The lockfile is pinned to **pnpm v9 format** (`lockfileVersion: '9.0'`). Using pnpm 10+ will cause `--frozen-lockfile` to fail.
- `primitive-preview` at `/primitive-preview` on port 3001 redirects (307) to `/primitive-preview/button` by default.
- The registry JSON is served at `/r/registry.json` on the design system dev server.
- `project-1` depends on `ai-agent-design-system` via `workspace:*` and uses `transpilePackages` in Next.js config — both dev servers can run independently; the consumer app does not need the design system server running.
- `harness:verify` is the same check that CI runs; always run it before pushing.
