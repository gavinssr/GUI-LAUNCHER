# Active Exec Plans

本目录存放仍在执行中的实施计划与阶段性任务说明。

## 何时写入

- 多阶段任务仍未完成
- 需要把当前目标、约束与验证步骤固定下来
- 需要让后续会话或 Cloud Agent 接手时有稳定入口

## 最小字段

- target package
- task layer
- inputs / evidence
- invariants
- verification steps
- artifacts
- promotion candidate
- write-back targets

## 归档规则

- 完成后移入 `../completed/`
- 若只是引用 `.cursor/plans/*`，这里至少保留一条索引说明
