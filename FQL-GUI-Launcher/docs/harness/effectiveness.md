# Harness Effectiveness

## 结构信号

- 新会话或新 Agent 不依赖聊天上下文也能找到断点与阅读顺序

## 约束信号

- preview 漏同步、registry 漂移、consumer 越层能被脚本或流程发现
- preview 舞台私有资产若被 `projects/*` 或其他非 preview 区域误引，能被 harness 脚本直接发现

## 执行信号

- Agent 进入 engineering root 即可运行统一命令，而不是手工拼命令

## 运维信号

- 文档漂移、规则膨胀、promotion candidate 漂移能被定期巡检发现
- `doc-gardening` 与 `promotion review` 已有固定入口，不再只靠聊天记忆驱动
