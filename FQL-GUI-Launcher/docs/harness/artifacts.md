# Artifact Protocol

## 每次任务最少输出

- changed files
- package scope
- promotion candidate
- 风险/阻塞
- 下一步（P0/P1）

## Required Verification Summary

每次任务至少补充：

- 关键命令结果摘要
- 已执行的 verification steps
- 未验证项与 residual risk

## Recommended Artifact Types

- build / lint / typecheck / registry 检查摘要
- 访问结果、截图或 smoke test 说明
- `ai-agent-design-system/public/r/*` 等生成物路径
- 相关文档或 review 路径，例如 `docs/exec-plans/*`、`docs/reviews/promotion/*`

## Manual Visual Artifact Rule

- 当 artifact 依赖 preview 肉眼观察、截图或录屏时，由用户执行并回传。
- 助手负责在执行前明确需要用户检查的路由、观察点与回传格式，并在收到用户结果后再把摘要写入任务结论或治理记录。
- 未收到用户回传前，不应把视觉 artifact 标记为“已完成”。

## Cloud Agent PR Expectations

- 使用 `.github/pull_request_template.md`
- 说明 target package 与 task layer
- 说明 verification steps 与 artifacts
- 说明是否存在 promotion candidate
- 说明是否需要写回 governance / repo 记录

## check:artifact-presence Usage

当任务依赖特定文档、生成物或模板时，使用：

```bash
pnpm run check:artifact-presence docs/harness/cloud-agent.md docs/harness/artifacts.md
```

路径以 engineering root `FQL-GUI-Launcher/` 为基准；如需检查 git root 文件，可显式传入 `../.github/...`。

## CI Upload Minimum

`Phase 4` 起，CI 至少上传：

- design-system registry 输出
- Cloud Agent / artifact 协议参考文档
