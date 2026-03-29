# GUI-Explore Workspace Management AGENTS

## Mission
`/Users/gavinss/Desktop/GUI-Explore` 是 FQL 项目的管理层目录，不是业务代码实现目录。

- 被开发项目固定为 `./FQL-GUI-Launcher/`。
- 本目录用于维护会话治理、进度追踪、里程碑和战略文档。
- 除管理文档外，不在本目录实现业务代码。

## Required reading order (every new session)
1. `./AGENTS.md`（本文件）
2. `./manage-blueprint.md`
3. `./manage-milestone.md`
4. `./manage-schedule.md`
5. `./manage-process.md`
6. `./FQL-GUI-Launcher/AGENTS.md`
7. 目标子包 `AGENTS.md` 与对应 `.cursor/rules/*`

## Management file responsibilities
- `manage-blueprint.md`: 项目战略与阶段蓝图（方向级）。
- `manage-milestone.md`: 阶段状态与里程碑变更（阶段级）。
- `manage-schedule.md`: 对话进度、断点、下一步（会话级）。
- `manage-process.md`: 管理写回流程、触发条件、收口检查。

## Session workflow
### Session start
- 先完成管理文档阅读与断点提炼，再进入 `FQL-GUI-Launcher` 代码工作。
- 如管理信息冲突，以 `manage-schedule.md` 的“最新断点/下一步”为当前真相源。

### Session in progress
- 先判断任务归属：design system / consumer / registry / governance。
- 开发必须发生在 `FQL-GUI-Launcher`，管理目录只承载治理文档。

### Session close (write-back order)
1. 必写：更新 `manage-schedule.md`（任务日志 + 最新断点/下一步）。
2. 条件写：阶段状态变化时更新 `manage-milestone.md`。
3. 条件写：战略或优先级变化时更新 `manage-blueprint.md`。

## Execution ownership
- 默认执行口径：除“用户在独立窗口进行提示词压测（指挥 Cursor 调用 shadcn 组件生成界面）”外，其余事项由助手执行推进（分析、方案、验证与落地）。
- 压测类任务分工：用户负责在独立测试窗口执行并回传结果；助手负责提供模板、判定结果、完成归档与后续推进建议。
- 若任务同时包含“压测执行 + 非压测治理动作”，先由用户完成压测回传，再由助手完成剩余治理与文档更新。
- 落盘授权规则（强制）：无论代码文件还是文档文件，写入落盘前必须先向用户确认。  
- Agent 模式授权口径：当助手给出待执行动作后，用户点击 `run`（或明确文字同意）即视为授权执行本次落盘。

## Output expectations for each task
- changed files
- package scope
- promotion candidate（可为“无”）
- 风险/阻塞
- 下一步（P0/P1）

## Cursor Cloud specific instructions

### Monorepo structure
- Workspace root: `/workspace`（管理层文档）
- 代码 monorepo: `/workspace/FQL-GUI-Launcher`（pnpm workspace）
- Design system: `FQL-GUI-Launcher/ai-agent-design-system` — Next.js 16 app, port **3001**
- Consumer app: `FQL-GUI-Launcher/projects/project-1` — Next.js 16 app, port **3000**

### Running dev servers
- **Design system 必须运行在 port 3001**，因为 `@fql` 本地 registry URL 硬编码为 `http://localhost:3001/r/{name}.json`。
- 启动命令: `cd FQL-GUI-Launcher/ai-agent-design-system && npx next dev --port 3001`
- Consumer app: `cd FQL-GUI-Launcher/projects/project-1 && npx next dev --port 3000`
- 注意: `pnpm dev` 不支持直接传 `--port` 参数给 Next.js，需使用 `npx next dev --port <port>`。

### Lint / Build / Test
- Lint: `pnpm lint`（在各子包中运行）
- Build: `pnpm build`（在各子包中运行）
- 无自动化测试框架配置，验证以 lint + dev server 启动 + 浏览器手动检查为准。

### Dependencies
- Node.js >= 18（VM 已安装 v22）
- pnpm >= 9（VM 已安装 v10）
- 无数据库、无 Docker、无外部服务依赖
- `pnpm install` 从 `FQL-GUI-Launcher/` 根目录运行即可安装所有 workspace 依赖
