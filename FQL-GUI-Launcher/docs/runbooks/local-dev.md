# Local Development Runbook

## 端口约定

- design-system：`3001`
- consumer（例如 `project-1`）：默认 `3000`，可独立调整

## Recommended Start Order

1. 进入 `ai-agent-design-system/`
2. 以 `3001` 启动 design-system dev server
3. 先完成 `/r/registry.json`、build、typecheck、preview 覆盖等机械校验
4. 若任务确实需要视觉 preview 验收，再询问用户并等待用户完成 `/primitive-preview/*` 观察后回传
5. 如需 consumer 验证，再进入目标 `projects/*`

## Local Verification Focus

- design-system build / registry build
- consumer build / route access
- preview 与 registry 不漂移
- consumer 不越过 design-system 边界

## Preview Visual Validation

- 视觉 preview 校验不属于默认 harness 自动判据。
- 当任务需要“看起来是否正确”的结论时，由用户执行肉眼观察、截图或录屏确认。
- 助手只能先给出待观察的路由与检查点，不能自行把本地访问结果当作最终视觉结论。
- 在用户回传前，助手应继续处理不依赖视觉结论的机械校验；若后续步骤依赖该视觉结果，则必须暂停并等待用户反馈。
