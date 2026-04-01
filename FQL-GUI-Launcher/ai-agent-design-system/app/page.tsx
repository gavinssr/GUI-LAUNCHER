import { FqlCard } from "@/components/fql/fql-card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-muted-foreground">FQL Design System Demo</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            AI Agent 调用组件库的代码级设计样板
          </h1>
          <p className="text-sm text-muted-foreground">
            当前页面用于验证 FQL 语义组件层是否已成功建立。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FqlCard
            title="语义卡片"
            description="保留 FQL 语义层中的卡片封装，作为当前 design-system demo 的主体示例。"
          >
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>当前 demo 已移除旧的 Badge / Input / Label / Field 系列 primitive。</p>
              <p>页面继续保留 `FqlCard` 与 `Button` 作为现阶段可用的组合示例。</p>
            </div>
          </FqlCard>

          <FqlCard
            title="静态信息块"
            description="用页面级结构替代已下线的字段型语义封装，避免继续依赖被移除的 primitive。"
            footer={
              <div className="flex gap-3">
                <Button variant="primary-fill">提交</Button>
                <Button variant="secondary-outline">取消</Button>
              </div>
            }
          >
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-sm font-medium text-foreground">用户名</div>
                <div className="mt-1 text-sm text-muted-foreground">建议使用与你的工号系统一致的命名。</div>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="text-sm font-medium text-foreground">手机号</div>
                <div className="mt-1 text-sm text-muted-foreground">旧字段组件已下线，后续待新的输入体系接管。</div>
              </div>
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