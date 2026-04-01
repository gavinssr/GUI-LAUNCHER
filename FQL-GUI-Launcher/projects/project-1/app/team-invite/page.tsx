import { FqlCard } from "ai-agent-design-system/components/fql/fql-card";
import { Button } from "ai-agent-design-system/components/ui/button";

const pendingInvites = [
  {
    name: "林舒然",
    email: "shuran.lin@fql-demo.com",
    role: "运营管理员",
    statusLabel: "待接受",
  },
  {
    name: "周以衡",
    email: "yiheng.zhou@fql-demo.com",
    role: "数据分析师",
    statusLabel: "待发送",
  },
  {
    name: "陈听晚",
    email: "tingwan.chen@fql-demo.com",
    role: "项目协作成员",
    statusLabel: "已提醒",
  },
  {
    name: "许知行",
    email: "zhixing.xu@fql-demo.com",
    role: "财务查看者",
    statusLabel: "审批中",
  },
];

const inviteRules = [
  "邀请邮箱需使用可接收企业通知的工作邮箱，避免后续权限开通和安全校验失败。",
  "团队角色应按最小权限原则分配，临时协作者优先使用只读或受限角色。",
  "同一成员在原邀请未处理完成前，不建议重复发送多封邀请，避免状态混乱。",
  "如涉及敏感业务数据，请先确认成员已完成组织实名认证与管理员审批流程。",
];

export default function TeamInvitePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8">
        <header className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground">团队成员邀请</p>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              团队成员邀请演练页
            </h1>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              用于验证 consumer app
              是否优先复用上游语义组件完成页面组装，集中处理成员邀请、待处理记录与管理员提醒。
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FqlCard
            title="邀请成员"
            description="已移除旧字段型组件，当前以静态信息块承载邀请表单草稿。"
          >
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-sm font-medium text-foreground">成员姓名</div>
                <div className="mt-1 text-sm text-foreground">王可宁</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  建议填写与企业实名一致的姓名，便于后续权限核验。
                </div>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-sm font-medium text-foreground">工作邮箱</div>
                <div className="mt-1 text-sm text-foreground">kening.wang@fql-demo.com</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  邀请通知将发送到该邮箱，成员需通过邮件完成加入。
                </div>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-sm font-medium text-foreground">团队角色</div>
                <div className="mt-1 text-sm text-foreground">项目管理员</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  如无固定模板，可填写业务职责对应的角色名称。
                </div>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-sm font-medium text-foreground">备注</div>
                <div className="mt-1 text-sm text-foreground">负责本季度华东区域交付协同。</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  可补充所属项目、权限范围或邀请背景，方便管理员复核。
                </div>
              </div>
            </div>
          </FqlCard>

          <FqlCard
            title="待处理邀请"
            description="查看近期尚未完成处理的成员邀请记录。"
          >
            <div className="space-y-4">
              {pendingInvites.map((invite) => (
                <div
                  key={invite.email}
                  className="flex flex-col gap-3 border-b border-border pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{invite.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {invite.email}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {invite.statusLabel}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    角色：{invite.role}
                  </p>
                </div>
              ))}
            </div>
          </FqlCard>

          <FqlCard
            className="lg:col-span-2"
            title="邀请规则与管理员提醒"
            description="以下规则用于业务演练场景下的邀请前检查。"
          >
            <ul className="space-y-3 text-sm text-muted-foreground">
              {inviteRules.map((rule) => (
                <li
                  key={rule}
                  className="border-b border-border pb-3 last:border-b-0 last:pb-0"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </FqlCard>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
          <Button variant="secondary-outline">取消</Button>
          <Button variant="primary-fill">发送邀请</Button>
        </footer>
      </div>
    </main>
  );
}
