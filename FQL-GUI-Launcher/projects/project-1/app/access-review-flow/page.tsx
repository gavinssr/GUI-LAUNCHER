"use client";

import { useState } from "react";

import { FqlCard } from "ai-agent-design-system/components/fql/fql-card";
import { StatusBadge } from "ai-agent-design-system/components/fql/status-badge";
import { Button } from "ai-agent-design-system/components/ui/button";

type ReviewStatus = "pending" | "approved" | "rejected";

type AccessRequest = {
  id: string;
  applicant: string;
  permissionItem: string;
  submittedAt: string;
  status: ReviewStatus;
};

const initialRequests: AccessRequest[] = [
  {
    id: "ar-001",
    applicant: "林书远",
    permissionItem: "财务中心 / 付款审批权限",
    submittedAt: "今天 09:12",
    status: "pending",
  },
  {
    id: "ar-002",
    applicant: "周可安",
    permissionItem: "组织管理 / 成员角色变更",
    submittedAt: "今天 08:46",
    status: "pending",
  },
  {
    id: "ar-003",
    applicant: "秦语禾",
    permissionItem: "数据平台 / 全量导出权限",
    submittedAt: "昨天 21:18",
    status: "approved",
  },
  {
    id: "ar-004",
    applicant: "陆景行",
    permissionItem: "日志审计 / 敏感操作追踪",
    submittedAt: "昨天 18:05",
    status: "rejected",
  },
  {
    id: "ar-005",
    applicant: "唐知意",
    permissionItem: "发票中心 / 开票与红冲权限",
    submittedAt: "昨天 16:22",
    status: "pending",
  },
  {
    id: "ar-006",
    applicant: "许南舟",
    permissionItem: "资源管控 / 批量停机权限",
    submittedAt: "2 天前",
    status: "approved",
  },
  {
    id: "ar-007",
    applicant: "宋闻溪",
    permissionItem: "账号安全 / 二次验证策略配置",
    submittedAt: "2 天前",
    status: "pending",
  },
  {
    id: "ar-008",
    applicant: "顾言初",
    permissionItem: "项目空间 / 删除归档权限",
    submittedAt: "3 天前",
    status: "rejected",
  },
  {
    id: "ar-009",
    applicant: "王映雪",
    permissionItem: "成本中心 / 预算模板编辑权限",
    submittedAt: "3 天前",
    status: "pending",
  },
];

const statusLabelMap: Record<ReviewStatus, string> = {
  pending: "待审批",
  approved: "已通过",
  rejected: "已拒绝",
};

const statusBadgeMap: Record<ReviewStatus, "warning" | "success" | "danger"> = {
  pending: "warning",
  approved: "success",
  rejected: "danger",
};

export default function AccessReviewFlowPage() {
  const [requests, setRequests] = useState<AccessRequest[]>(initialRequests);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const summary = requests.reduce(
    (accumulator, item) => {
      accumulator[item.status] += 1;
      return accumulator;
    },
    { pending: 0, approved: 0, rejected: 0 } as Record<ReviewStatus, number>
  );

  const selectedCount = selectedIds.length;
  const isAllSelected = requests.length > 0 && selectedCount === requests.length;

  const handleToggleOne = (id: string) => {
    setSelectedIds((previous) =>
      previous.includes(id)
        ? previous.filter((currentId) => currentId !== id)
        : [...previous, id]
    );
  };

  const handleToggleAll = () => {
    setSelectedIds((previous) =>
      previous.length === requests.length ? [] : requests.map((item) => item.id)
    );
  };

  const handleBulkUpdate = (nextStatus: ReviewStatus) => {
    if (selectedIds.length === 0) {
      return;
    }
    setRequests((previous) =>
      previous.map((item) =>
        selectedIds.includes(item.id) ? { ...item, status: nextStatus } : item
      )
    );
    setSelectedIds([]);
  };

  const handleSingleUpdate = (id: string, nextStatus: ReviewStatus) => {
    setRequests((previous) =>
      previous.map((item) =>
        item.id === id
          ? item.status === nextStatus
            ? item
            : { ...item, status: nextStatus }
          : item
      )
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 lg:px-8">
        <header className="space-y-3">
          <StatusBadge status="marketing" className="w-fit">
            Access Review Flow
          </StatusBadge>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              权限审批流
            </h1>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              移动端优先展示权限审批全流程，覆盖待审批、已通过、已拒绝三个状态，并支持批量与单项处理动作。
            </p>
          </div>
        </header>

        <section>
          <FqlCard
            title="流程概览"
            description="按状态聚合本批审批请求数量，便于快速识别待处理压力。"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <article className="border border-border bg-muted/30 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">待审批</p>
                  <StatusBadge status="warning" className="w-fit">
                    待处理
                  </StatusBadge>
                </div>
                <p className="mt-3 text-2xl font-semibold">{summary.pending}</p>
              </article>

              <article className="border border-border bg-muted/30 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">已通过</p>
                  <StatusBadge status="success" className="w-fit">
                    已生效
                  </StatusBadge>
                </div>
                <p className="mt-3 text-2xl font-semibold">{summary.approved}</p>
              </article>

              <article className="border border-border bg-muted/30 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">已拒绝</p>
                  <StatusBadge status="danger" className="w-fit">
                    已结束
                  </StatusBadge>
                </div>
                <p className="mt-3 text-2xl font-semibold">{summary.rejected}</p>
              </article>
            </div>
          </FqlCard>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:items-start">
          <FqlCard
            title="审批列表"
            description={`共 ${requests.length} 条申请，支持多选后批量处理。`}
          >
            <div className="space-y-4">
              <div className="flex flex-col gap-3 border border-border bg-muted/30 p-3 sm:flex-row sm:items-center sm:justify-between">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleToggleAll}
                    className="h-4 w-4 border border-input bg-background text-primary"
                  />
                  全选当前列表
                </label>
                <p className="text-sm text-muted-foreground">
                  已选择{" "}
                  <span className="font-medium text-foreground">
                    {selectedCount}
                  </span>{" "}
                  项
                </p>
              </div>

              <div className="space-y-3">
                {requests.map((item) => (
                  <article key={item.id} className="border border-border bg-card p-4">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(item.id)}
                            onChange={() => handleToggleOne(item.id)}
                            className="mt-0.5 h-4 w-4 border border-input bg-background text-primary"
                          />
                          选择
                        </label>
                        <StatusBadge status={statusBadgeMap[item.status]} className="w-fit">
                          {statusLabelMap[item.status]}
                        </StatusBadge>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium sm:text-base">
                          申请人：{item.applicant}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          权限项：{item.permissionItem}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          提交时间：{item.submittedAt}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button type="button" variant="outline" size="sm">
                          查看详情
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          disabled={item.status === "approved"}
                          onClick={() => handleSingleUpdate(item.id, "approved")}
                        >
                          通过
                        </Button>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          disabled={item.status === "rejected"}
                          onClick={() => handleSingleUpdate(item.id, "rejected")}
                        >
                          拒绝
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </FqlCard>

          <aside className="lg:sticky lg:top-6">
            <FqlCard
              title="批量操作"
              description="面向选中申请执行批量通过、拒绝和导出。"
            >
              <div className="space-y-4">
                <div className="border border-border bg-muted/30 px-3 py-2 text-sm text-muted-foreground">
                  已选择{" "}
                  <span className="font-medium text-foreground">{selectedCount}</span>{" "}
                  条申请
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    type="button"
                    disabled={selectedCount === 0}
                    onClick={() => handleBulkUpdate("approved")}
                  >
                    批量通过
                  </Button>
                  <Button
                    type="button"
                    variant="destructive"
                    disabled={selectedCount === 0}
                    onClick={() => handleBulkUpdate("rejected")}
                  >
                    批量拒绝
                  </Button>
                  <Button type="button" variant="secondary">
                    导出
                  </Button>
                </div>
              </div>
            </FqlCard>
          </aside>
        </section>
      </div>
    </main>
  );
}
