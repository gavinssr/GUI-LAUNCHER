import { FqlCard } from "@/components/fql/fql-card"
import { FqlField } from "@/components/fql/fql-field"
import { StatusBadge } from "@/components/fql/status-badge"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <StatusBadge status="marketing">FQL Design System Demo</StatusBadge>
          <h1 className="text-3xl font-semibold tracking-tight">
            AI Agent 调用组件库的代码级设计样板
          </h1>
          <p className="text-sm text-muted-foreground">
            当前页面用于验证 FQL 语义组件层是否已成功建立。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FqlCard
            title="状态标签"
            description="统一状态表达，避免页面里到处零散写颜色。"
            contentClassName="flex flex-wrap gap-3"
          >
            <StatusBadge>默认</StatusBadge>
            <StatusBadge status="success">成功</StatusBadge>
            <StatusBadge status="warning">警告</StatusBadge>
            <StatusBadge status="danger">危险</StatusBadge>
            <StatusBadge status="marketing">营销</StatusBadge>
            <StatusBadge status="neutral">中性</StatusBadge>
          </FqlCard>

          <FqlCard
            title="表单字段"
            description="验证 FQL Field 对 label、说明和错误态的封装。"
            footer={
              <div className="flex gap-3">
                <Button>提交</Button>
                <Button variant="outline">取消</Button>
              </div>
            }
          >
            <div className="flex flex-col gap-4">
              <FqlField
                label="用户名"
                placeholder="请输入用户名"
                description="建议使用与你的工号系统一致的命名。"
              />
              <FqlField
                label="手机号"
                placeholder="请输入手机号"
                error="手机号格式不正确"
                defaultValue="123"
              />
            </div>
          </FqlCard>
        </div>

        <FqlCard
          title="组件层级检查"
          description="这个页面本身只负责组合，不直接硬编码业务视觉块。"
        >
          <div className="grid gap-3 text-sm text-muted-foreground md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-2 text-foreground font-medium">Primitive 层</div>
              <div>components/ui/*</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-2 text-foreground font-medium">Semantic 层</div>
              <div>components/fql/*</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="mb-2 text-foreground font-medium">Page 层</div>
              <div>app/*</div>
            </div>
          </div>
        </FqlCard>
      </div>
    </main>
  )
}