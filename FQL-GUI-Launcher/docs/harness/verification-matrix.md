# Verification Matrix

## Design System Primitive

- preview 是否补齐
- `check:primitive-preview-boundary` 是否通过，确保舞台私有资产未越界引用
- build 是否通过
- token 是否符合约定
- 若任务需要视觉 preview 结论，由用户完成人工观察并回传；这类结论不作为默认 harness 自动判据

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
- 若可访问性或视觉验收需要肉眼判断，先询问用户并等待用户完成后再继续依赖该结果的下一步

## Governance Docs

- 读取顺序是否清晰
- breakpoint 是否为唯一真相源
- 旧入口是否仅保留跳转壳
- writeback 是否先能复原工程主线，再看见治理留痕
- 非 governance task 是否避免只有治理写回、没有工程证据

## Harness Infra

- 统一命令入口是否存在
- checks 是否可执行
- `.github/workflows/harness-verify.yml` 是否存在并调用 `pnpm run harness:verify`
- `.github/pull_request_template.md` 是否与 artifact 协议一致
- Cloud Agent 文档、角色模板与命令是否一致
- `check:artifact-presence` 是否能覆盖关键协议文件
