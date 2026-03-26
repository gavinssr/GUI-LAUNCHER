import { FqlCard } from "ai-agent-design-system/components/fql/fql-card";
import { FqlField } from "ai-agent-design-system/components/fql/fql-field";
import { StatusBadge } from "ai-agent-design-system/components/fql/status-badge";
import { Button } from "ai-agent-design-system/components/ui/button";

const apiKeyOverview = [
  {
    label: "启用中 Key",
    value: "08",
    detail: "覆盖生产、灰度与内部自动化任务。",
  },
  {
    label: "7 天内触发轮换",
    value: "02",
    detail: "建议优先处理高权限、长周期未更换 Key。",
  },
  {
    label: "受限访问策略",
    value: "04",
    detail: "已绑定 IP 白名单或回调备注要求。",
  },
];

const existingKeys = [
  {
    name: "Billing Service Prod",
    snippet: "sk_live_51hK••••••Q8pL",
    owner: "支付平台组",
    lastUsedAt: "今天 09:42",
    scope: "账单读取 / 对账回调 / 发票同步",
    status: "success" as const,
    statusLabel: "正常",
  },
  {
    name: "CRM Webhook Sync",
    snippet: "sk_test_92Qa••••••vN2x",
    owner: "增长运营组",
    lastUsedAt: "昨天 18:15",
    scope: "客户同步 / 线索打标",
    status: "warning" as const,
    statusLabel: "待轮换",
  },
  {
    name: "Warehouse Robot Gateway",
    snippet: "sk_live_88Tc••••••mP4r",
    owner: "智能仓配组",
    lastUsedAt: "3 天前",
    scope: "库存查询 / 波次推送 / 异常告警",
    status: "neutral" as const,
    statusLabel: "低频使用",
  },
  {
    name: "Partner Sandbox Access",
    snippet: "sk_test_13Lm••••••cX7d",
    owner: "生态合作组",
    lastUsedAt: "已停用 12 天",
    scope: "沙箱联调 / 限流验证",
    status: "danger" as const,
    statusLabel: "已停用",
  },
];

const riskGuidelines = [
  "API Key 创建后仅展示一次完整明文，需立即进入受控密码库或密钥托管系统，不要通过群聊或工单评论传播。",
  "生产环境 Key 应按最小权限原则拆分访问范围，避免多个系统复用同一高权限凭证。",
  "若 Key 绑定了回调说明，请确保接入方联系人、用途和变更窗口信息完整，便于安全审计与异常回溯。",
  "发现疑似泄露、异常高频调用或长期无人维护的 Key，应先停用再重新生成，不建议直接覆盖原配置。",
];

export default function ApiKeysPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
        <header className="grid gap-6 border-b border-border pb-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-end">
          <div className="space-y-4">
            <StatusBadge status="marketing" className="w-fit">
              API 凭证治理
            </StatusBadge>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                API Key 管理演练页
              </h1>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                面向内部接入方与外部合作系统的凭证管理场景，统一演示 Key
                创建、状态巡检、风险提示与后续治理动作，验证 consumer route
                是否仅通过上游语义组件完成页面组装。
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {apiKeyOverview.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-muted/40 p-4"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <FqlCard
            title="创建新 API Key"
            description="填写用途、访问范围与生命周期策略，供管理员复核后发放。"
            footer={
              <div className="flex w-full flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
                <Button variant="outline">取消</Button>
                <Button>创建 Key</Button>
              </div>
            }
          >
            <form className="space-y-5">
              <div className="rounded-lg border border-border bg-accent/40 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">当前审批策略</p>
                    <p className="text-sm text-muted-foreground">
                      生产级别 Key 需安全管理员与系统负责人双人确认。
                    </p>
                  </div>
                  <StatusBadge status="warning" className="w-fit">
                    审批中发放
                  </StatusBadge>
                </div>
              </div>

              <FqlField
                label="Key 名称"
                defaultValue="Order Sync Worker - Prod"
                placeholder="请输入 Key 名称"
                description="建议用“系统 / 环境 / 任务”命名，便于后续审计与轮换。"
              />
              <FqlField
                label="访问范围"
                defaultValue="订单读取、物流回传、失败重试回调"
                placeholder="请输入访问范围"
                description="请按最小权限原则填写所需接口与操作范围。"
              />
              <FqlField
                label="回调备注"
                defaultValue="仅用于生产订单同步，负责人：赵庭安，变更窗口：工作日 20:00 后。"
                placeholder="请输入回调备注"
                description="记录负责人、接入背景或回调约束，方便排查异常请求。"
              />
              <FqlField
                label="过期策略"
                defaultValue="90 天自动失效，提前 7 天通知轮换"
                placeholder="请输入过期策略"
                description="推荐短周期轮换；如需长期使用，应额外说明风控措施。"
              />
            </form>
          </FqlCard>

          <div className="space-y-6">
            <FqlCard
              title="现有 Key"
              description="查看已发放凭证的使用状态、最近调用与后续治理动作。"
            >
              <div className="space-y-4">
                {existingKeys.map((key) => (
                  <div
                    key={key.name}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-3">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <p className="text-sm font-medium sm:text-base">
                            {key.name}
                          </p>
                          <StatusBadge status={key.status} className="w-fit">
                            {key.statusLabel}
                          </StatusBadge>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                              Key 片段：
                            </span>{" "}
                            {key.snippet}
                          </div>
                          <div className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                              所属人：
                            </span>{" "}
                            {key.owner}
                          </div>
                          <div className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                              最近使用：
                            </span>{" "}
                            {key.lastUsedAt}
                          </div>
                          <div className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">
                              Scope：
                            </span>{" "}
                            {key.scope}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 lg:max-w-[220px] lg:justify-end">
                        <Button variant="outline" size="sm">
                          复制
                        </Button>
                        <Button variant="ghost" size="sm">
                          重新生成
                        </Button>
                        <Button
                          variant={
                            key.status === "danger" ? "outline" : "destructive"
                          }
                          size="sm"
                        >
                          {key.status === "danger" ? "查看记录" : "停用"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FqlCard>

            <FqlCard
              title="风险提醒 / 使用规范"
              description="以下内容适用于生产与合作方接入场景，建议在发放前完成复核。"
            >
              <ul className="space-y-3">
                {riskGuidelines.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-destructive/10 px-4 py-3 text-sm leading-6 text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FqlCard>
          </div>
        </section>
      </div>
    </main>
  );
}
