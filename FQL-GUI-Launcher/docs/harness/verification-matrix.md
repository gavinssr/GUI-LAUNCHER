# Verification Matrix

## Design System Primitive

- preview 是否补齐
- build 是否通过
- token 是否符合约定

## Semantic / Registry

- build 是否通过
- `registry:build` 是否通过
- `/r/registry.json` 与 item json 是否可访问
- CLI resolution 是否正常

## Consumer Page

- 是否遵守 consumer acceptance runbook
- 目标页面是否可访问
- build 是否通过
- 是否存在 promotion candidate

## Governance Docs

- 读取顺序是否清晰
- breakpoint 是否为唯一真相源
- 旧入口是否仅保留跳转壳

## Harness Infra

- 统一命令入口是否存在
- checks 是否可执行
- `.github/workflows/harness-verify.yml` 是否存在并调用 `pnpm run harness:verify`
- `.github/pull_request_template.md` 是否与 artifact 协议一致
- Cloud Agent 文档、角色模板与命令是否一致
- `check:artifact-presence` 是否能覆盖关键协议文件
