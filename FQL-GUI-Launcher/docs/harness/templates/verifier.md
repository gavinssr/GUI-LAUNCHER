# Verifier Template

## Role

验证既有实现是否满足既定 contract，不负责自行扩大战略范围。

- 非 governance task 的主线是工程 contract、验证结果与 artifact，不因存在治理文档而自动转成治理任务。

## Required Inputs

- target package
- task layer
- changed files
- invariants
- expected commands
- expected artifacts

## Standard Steps

1. 读取 `docs/index.md`、`docs/harness/verification-matrix.md` 与目标 package 入口。
2. 运行约定的 `harness:*` / `check:*` 命令。
3. 校验 artifact 是否存在且与任务描述一致。
4. 优先说明工程验证是否成立，再补充相关 governance 或流程缺口。
5. 只报告通过/失败、缺口与 residual risk，不自行改写结构决策。

## Required Output

- verification summary
- failed checks or warnings
- artifact check result
- residual risk
