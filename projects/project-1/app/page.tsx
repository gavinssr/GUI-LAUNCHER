import { FqlCard } from "ai-agent-design-system/components/fql/fql-card";
import { FqlField } from "ai-agent-design-system/components/fql/fql-field";
import { StatusBadge } from "ai-agent-design-system/components/fql/status-badge";
import { Button } from "ai-agent-design-system/components/ui/button";

const accountStatusItems = [
  {
    label: "登录保护",
    status: "success" as const,
    value: "已开启",
    description: "已启用异常设备识别与二次验证。",
  },
  {
    label: "密码强度",
    status: "success" as const,
    value: "高强度",
    description: "当前密码符合复杂度策略与轮换要求。",
  },
  {
    label: "备用联系渠道",
    status: "warning" as const,
    value: "待确认",
    description: "备用邮箱尚未完成最近一次验证。",
  },
  {
    label: "最近风险扫描",
    status: "neutral" as const,
    value: "今日完成",
    description: "未发现异常登录位置或可疑会话。",
  },
];

const riskRecommendations = [
  "确认备用邮箱可正常接收安全通知，避免重置密码时无法找回账户。",
  "为高频使用设备保留可信标记，仅在私人设备上启用自动登录。",
  "定期检查近 30 天登录记录，发现陌生地点或终端时立即下线全部会话。",
  "如需共享账户访问，请改用团队成员邀请，不要直接共享手机号或验证码。",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
        <header className="space-y-4">
          <StatusBadge status="marketing" className="w-fit">
            账户安全设置
          </StatusBadge>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              账户安全设置演练页
            </h1>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              用于演示业务页面如何在 consumer project
              中复用上游语义组件，集中查看账户状态、维护安全联系信息，并根据风险提醒完成必要操作。
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FqlCard
            title="账户状态"
            description="当前账户保护策略与近期安全体检概览。"
          >
            <div className="space-y-4">
              {accountStatusItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium">{item.label}</p>
                    <StatusBadge status={item.status}>{item.value}</StatusBadge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FqlCard>

          <FqlCard
            title="安全信息"
            description="维护账户恢复渠道与关键联系信息。"
          >
            <form className="space-y-5">
              <FqlField
                label="登录手机号"
                defaultValue="+86 138 0000 2468"
                description="用于登录验证、风险提醒和密码找回。"
                placeholder="请输入登录手机号"
              />
              <FqlField
                label="备用邮箱"
                type="email"
                defaultValue="security-contact@exampl"
                description="建议使用个人长期可访问邮箱。"
                error="邮箱格式不完整，请补全域名后再保存。"
                placeholder="请输入备用邮箱"
              />
              <FqlField
                label="紧急联系人手机号"
                defaultValue="+86 139 0000 1357"
                description="仅在高风险账户恢复场景下使用。"
                placeholder="请输入紧急联系人手机号"
              />
            </form>
          </FqlCard>

          <FqlCard
            className="lg:col-span-2"
            title="风险提醒与操作建议"
            description="以下建议适用于近期有密码重置、设备更换或多地登录的账户。"
          >
            <ul className="space-y-3 text-sm text-muted-foreground">
              {riskRecommendations.map((item) => (
                <li
                  key={item}
                  className="border-b border-border pb-3 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FqlCard>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
          <Button variant="outline">取消</Button>
          <Button>保存设置</Button>
        </footer>
      </div>
    </main>
  );
}