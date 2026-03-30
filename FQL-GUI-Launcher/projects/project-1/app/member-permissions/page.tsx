"use client";

import { useMemo, useState } from "react";

import { FqlCard } from "ai-agent-design-system/components/fql/fql-card";
import { FqlField } from "ai-agent-design-system/components/fql/fql-field";
import { StatusBadge } from "ai-agent-design-system/components/fql/status-badge";
import { Button } from "ai-agent-design-system/components/ui/button";

type MemberStatus = "active" | "invited" | "suspended" | "inactive";

type MemberItem = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: MemberStatus;
  statusLabel: string;
  lastActiveAt: string;
};

const members: MemberItem[] = [
  {
    id: "m-001",
    name: "林书远",
    email: "shuyuan.lin@project1.fql-demo.com",
    role: "超级管理员",
    status: "active",
    statusLabel: "启用中",
    lastActiveAt: "今天 09:48",
  },
  {
    id: "m-002",
    name: "周可安",
    email: "kean.zhou@project1.fql-demo.com",
    role: "财务管理员",
    status: "active",
    statusLabel: "启用中",
    lastActiveAt: "今天 08:15",
  },
  {
    id: "m-003",
    name: "秦语禾",
    email: "yuhe.qin@project1.fql-demo.com",
    role: "运营管理员",
    status: "invited",
    statusLabel: "待激活",
    lastActiveAt: "邀请已发出 2 小时",
  },
  {
    id: "m-004",
    name: "陆景行",
    email: "jingxing.lu@project1.fql-demo.com",
    role: "数据分析师",
    status: "active",
    statusLabel: "启用中",
    lastActiveAt: "昨天 21:03",
  },
  {
    id: "m-005",
    name: "唐知意",
    email: "zhiyi.tang@project1.fql-demo.com",
    role: "项目协作成员",
    status: "inactive",
    statusLabel: "停用",
    lastActiveAt: "7 天前",
  },
  {
    id: "m-006",
    name: "许南舟",
    email: "nanzhou.xu@project1.fql-demo.com",
    role: "客服主管",
    status: "active",
    statusLabel: "启用中",
    lastActiveAt: "今天 11:20",
  },
  {
    id: "m-007",
    name: "宋闻溪",
    email: "wenxi.song@project1.fql-demo.com",
    role: "审计查看者",
    status: "suspended",
    statusLabel: "已冻结",
    lastActiveAt: "3 天前",
  },
  {
    id: "m-008",
    name: "顾言初",
    email: "yanchu.gu@project1.fql-demo.com",
    role: "项目协作成员",
    status: "active",
    statusLabel: "启用中",
    lastActiveAt: "今天 07:58",
  },
  {
    id: "m-009",
    name: "王映雪",
    email: "yingxue.wang@project1.fql-demo.com",
    role: "财务查看者",
    status: "invited",
    statusLabel: "待激活",
    lastActiveAt: "邀请已发出 1 天",
  },
];

const selectedCount = 3;

const statusToBadgeVariant: Record<
  MemberStatus,
  "success" | "warning" | "danger" | "neutral"
> = {
  active: "success",
  invited: "warning",
  suspended: "danger",
  inactive: "neutral",
};

const statusOptions: { value: MemberStatus; label: string }[] = [
  { value: "active", label: "启用中" },
  { value: "invited", label: "待激活" },
  { value: "suspended", label: "已冻结" },
  { value: "inactive", label: "停用" },
];

export default function MemberPermissionsPage() {
  const [keyword, setKeyword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const roleOptions = useMemo(
    () =>
      Array.from(new Set(members.map((member) => member.role))).map((item) => ({
        value: item,
        label: item,
      })),
    []
  );

  const filteredMembers = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();
    return members.filter((member) => {
      const keywordMatch =
        normalizedKeyword.length === 0 ||
        member.name.toLowerCase().includes(normalizedKeyword) ||
        member.email.toLowerCase().includes(normalizedKeyword);

      const roleMatch = role.length === 0 || member.role === role;
      const statusMatch = status.length === 0 || member.status === status;

      return keywordMatch && roleMatch && statusMatch;
    });
  }, [keyword, role, status]);

  const handleResetFilters = () => {
    setKeyword("");
    setRole("");
    setStatus("");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 lg:px-8">
        <header className="space-y-3">
          <StatusBadge status="marketing" className="w-fit">
            Member Permissions
          </StatusBadge>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              成员权限管理
            </h1>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              统一管理团队成员角色、账户状态与最近活跃记录。页面按移动端优先设计，在 iPhone
              17 Pro 下优先保障筛选、批量操作与单成员操作可点击与可读性。
            </p>
          </div>
        </header>

        <section>
          <FqlCard
            title="筛选条件"
            description="支持按成员姓名/邮箱、角色和状态快速筛选，便于批量治理。"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <FqlField
                label="关键词"
                placeholder="输入姓名或邮箱"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />

              <div className="space-y-2">
                <label
                  htmlFor="role-filter"
                  className="text-sm leading-snug font-medium"
                >
                  角色筛选
                </label>
                <select
                  id="role-filter"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <option value="">全部角色</option>
                  {roleOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="status-filter"
                  className="text-sm leading-snug font-medium"
                >
                  状态筛选
                </label>
                <select
                  id="status-filter"
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <option value="">全部状态</option>
                  {statusOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="secondary-outline"
                  size="M"
                  className="w-full"
                  onClick={handleResetFilters}
                >
                  重置筛选
                </Button>
              </div>
            </div>
          </FqlCard>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
          <FqlCard
            title="成员列表"
            description={`共 ${filteredMembers.length} 条记录，展示姓名、邮箱、角色、状态和最近活跃时间。`}
          >
            <div className="space-y-3">
              {filteredMembers.length === 0 ? (
                <div className="rounded-md border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                  当前筛选条件下无匹配成员，请调整关键词、角色或状态后重试。
                </div>
              ) : (
                filteredMembers.map((member) => (
                  <article
                    key={member.id}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <div className="space-y-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium sm:text-base">
                            {member.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {member.email}
                          </p>
                        </div>
                        <StatusBadge
                          status={statusToBadgeVariant[member.status]}
                          className="w-fit"
                        >
                          {member.statusLabel}
                        </StatusBadge>
                      </div>

                      <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                        <p>
                          <span className="font-medium text-foreground">
                            角色：
                          </span>{" "}
                          {member.role}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            最近活跃：
                          </span>{" "}
                          {member.lastActiveAt}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button variant="secondary-outline" size="S">
                          查看详情
                        </Button>
                        <Button variant="primary-outline" size="S">
                          调整角色
                        </Button>
                        <Button
                          variant={
                            member.status === "inactive"
                              ? "primary-outline"
                              : "primary-fill"
                          }
                          size="S"
                          className={
                            member.status === "inactive"
                              ? undefined
                              : "bg-destructive text-destructive-foreground hover:bg-[var(--sys-error-hover)] active:bg-[var(--sys-error-active)]"
                          }
                        >
                          {member.status === "inactive" ? "恢复" : "停用"}
                        </Button>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>
          </FqlCard>

          <aside className="lg:sticky lg:top-6">
            <FqlCard
              title="批量操作区"
              description="用于批量治理成员权限与状态。"
            >
              <div className="space-y-4">
                <div className="rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
                  已选择{" "}
                  <span className="font-medium text-foreground">
                    {selectedCount}
                  </span>{" "}
                  项（演示状态）
                </div>
                <div className="flex flex-col gap-2">
                  <Button variant="primary-fill">批量启用</Button>
                  <Button
                    variant="primary-fill"
                    className="bg-destructive text-destructive-foreground hover:bg-[var(--sys-error-hover)] active:bg-[var(--sys-error-active)]"
                  >
                    批量禁用
                  </Button>
                  <Button variant="secondary-outline">导出列表</Button>
                </div>
              </div>
            </FqlCard>
          </aside>
        </section>
      </div>
    </main>
  );
}
