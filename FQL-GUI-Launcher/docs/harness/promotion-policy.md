# Promotion Policy

## 基本原则

- 实验型样本默认不上推
- 只有真实需求或明确设计证据驱动的稳定模式才考虑上推
- 优先 local composition，其次 semantic extraction，最后 registry publication

## Promotion Decision Levels

### No Promotion

- 一次性页面组装
- 仅在单页出现的业务片段
- 实验型压测样本

### Promote To Semantic Layer

- 已在多个页面复现
- 语义边界清晰
- 能显著减少重复组装成本

### Promote To Registry

- 跨项目或跨仓可复用
- API 稳定且可文档化
- 不属于页面级组装
