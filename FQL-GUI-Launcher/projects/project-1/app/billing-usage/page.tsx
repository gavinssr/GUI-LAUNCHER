import { FqlCard } from "ai-agent-design-system/components/fql/fql-card";
import { FqlField } from "ai-agent-design-system/components/fql/fql-field";
import { StatusBadge } from "ai-agent-design-system/components/fql/status-badge";
import { Button } from "ai-agent-design-system/components/ui/button";

const cycleMetrics = [
  {
    label: "本月费用",
    value: "¥ 24,860",
    detail: "较上月 +12.4%，主要来自夜间批处理任务。",
    status: "neutral" as const,
    statusLabel: "周期内",
  },
  {
    label: "API 调用量",
    value: "3,920,140",
    detail: "已使用套餐配额 78%，峰值出现在周一 10:00-12:00。",
    status: "success" as const,
    statusLabel: "正常",
  },
  {
    label: "超限预警",
    value: "2 项",
    detail: "支付回调与导出任务接近阈值，建议提前扩容。",
    status: "warning" as const,
    statusLabel: "需关注",
  },
];

const recentBills = [
  {
    billNo: "INV-202603-1801",
    amount: "¥ 9,420",
    status: "success" as const,
    statusLabel: "已支付",
    issuedAt: "2026-03-18 09:25",
  },
  {
    billNo: "INV-202603-1503",
    amount: "¥ 6,780",
    status: "warning" as const,
    statusLabel: "待支付",
    issuedAt: "2026-03-15 14:10",
  },
  {
    billNo: "INV-202603-1108",
    amount: "¥ 4,960",
    status: "neutral" as const,
    statusLabel: "审核中",
    issuedAt: "2026-03-11 19:42",
  },
  {
    billNo: "INV-202603-0605",
    amount: "¥ 3,700",
    status: "danger" as const,
    statusLabel: "已逾期",
    issuedAt: "2026-03-06 08:56",
  },
];

export default function BillingUsagePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 lg:px-8">
        <header className="space-y-3">
          <StatusBadge status="marketing" className="w-fit">
            Billing & Usage Center
          </StatusBadge>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              账单与用量中心
            </h1>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              面向财务与平台运维的账单治理页面，统一查看本周期费用与调用压力，追踪近期账单状态，并配置阈值预警策略降低超限风险。
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <FqlCard
            title="本周期概览"
            description="快速识别费用趋势、调用规模和超限风险。"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
              {cycleMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-border bg-muted/40 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {metric.label}
                    </p>
                    <StatusBadge status={metric.status} className="w-fit">
                      {metric.statusLabel}
                    </StatusBadge>
                  </div>
                  <p className="mt-3 text-xl font-semibold sm:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </FqlCard>

          <FqlCard
            title="告警阈值配置"
            description="配置费用预警阈值和通知通道，异常时自动触达责任人。"
          >
            <form className="space-y-5">
              <FqlField
                label="告警阈值"
                type="number"
                defaultValue="85"
                placeholder="请输入告警阈值"
                description="建议按套餐上限百分比设置，推荐区间 70-90。"
              />
              <FqlField
                label="通知邮箱"
                type="email"
                defaultValue="billing-alert@project1.fql-demo.com"
                placeholder="请输入通知邮箱"
                description="用于接收阈值超限、账单失败与对账异常通知。"
              />
              <FqlField
                label="回调备注"
                defaultValue="工作日 09:00-20:00 由财务值班组处理；夜间告警同步抄送运维。"
                placeholder="请输入回调备注"
                description="记录升级策略、责任班次和联动系统信息。"
              />
            </form>
          </FqlCard>
        </section>

        <section>
          <FqlCard
            title="最近账单记录"
            description="展示最近开票记录，用于支付跟踪与状态核验。"
          >
            <div className="space-y-3">
              {recentBills.map((bill) => (
                <article
                  key={bill.billNo}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium sm:text-base">
                        {bill.billNo}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        出账时间：{bill.issuedAt}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-semibold sm:text-base">
                        {bill.amount}
                      </p>
                      <StatusBadge status={bill.status} className="w-fit">
                        {bill.statusLabel}
                      </StatusBadge>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </FqlCard>
        </section>

        <footer className="sticky bottom-0 z-10 -mx-4 border-t border-border bg-background/95 px-4 py-4 backdrop-blur-sm sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button variant="outline">取消</Button>
            <Button variant="secondary">导出账单</Button>
            <Button>保存配置</Button>
          </div>
        </footer>
      </div>
    </main>
  );
}
