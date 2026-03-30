import type { ReactNode } from "react"

import { ArrowRight, Download, Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export type PrimitivePreviewItem = {
  id: string
  title: string
  description: string
  render: () => ReactNode
}

export const primitivePreviewRegistry: PrimitivePreviewItem[] = [
  {
    id: "button",
    title: "Button",
    description: "展示主次按钮、危险态、图标尺寸、禁用与链接语义。",
    render: () => (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 text-sm font-medium text-foreground">
              主操作层级
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>确认提交</Button>
              <Button variant="secondary">保存草稿</Button>
              <Button variant="outline">稍后处理</Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 text-sm font-medium text-foreground">
              弱操作与文本动作
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost">更多操作</Button>
              <Button variant="link">查看详情</Button>
              <Button asChild variant="link">
                <a href="#primitive-button-link">文档跳转</a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 text-sm font-medium text-foreground">
              危险与禁用状态
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="destructive">删除成员</Button>
              <Button disabled>提交中</Button>
              <Button variant="outline" disabled>
                无权限编辑
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-3 text-sm font-medium text-foreground">
              尺寸与图标
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="xs">
                <Plus />
                新建
              </Button>
              <Button size="sm" variant="secondary">
                <Download />
                导出
              </Button>
              <Button>
                查看报告
                <ArrowRight />
              </Button>
              <Button size="lg" variant="outline">
                批量同步
                <ArrowRight />
              </Button>
              <Button size="icon-xs" variant="ghost" aria-label="新增">
                <Plus />
              </Button>
              <Button size="icon-sm" variant="secondary" aria-label="下载">
                <Download />
              </Button>
              <Button size="icon" aria-label="下一步">
                <ArrowRight />
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="mb-2 text-sm font-medium text-foreground">
              推荐组合
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>default：页面首要确认动作</p>
              <p>secondary / outline：次级操作与并列选择</p>
              <p>ghost / link：工具条或低强调操作</p>
              <p>destructive：删除、解绑、不可逆动作</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "badge",
    title: "Badge",
    description: "展示所有 badge 语义变体。",
    render: () => (
      <div className="flex flex-wrap items-center gap-3">
        <Badge>default</Badge>
        <Badge variant="secondary">secondary</Badge>
        <Badge variant="outline">outline</Badge>
        <Badge variant="destructive">destructive</Badge>
        <Badge variant="ghost">ghost</Badge>
        <Badge variant="link">link</Badge>
      </div>
    ),
  },
  {
    id: "input",
    title: "Input",
    description: "展示默认、禁用和错误态。",
    render: () => (
      <div className="grid gap-3 md:grid-cols-2">
        <Input placeholder="默认输入框" />
        <Input disabled value="disabled" readOnly />
        <Input aria-invalid defaultValue="invalid@example" />
      </div>
    ),
  },
  {
    id: "label",
    title: "Label",
    description: "展示与 input 的基础组合。",
    render: () => (
      <div className="grid gap-2 md:max-w-sm">
        <Label htmlFor="primitive-preview-label-input">账号名</Label>
        <Input id="primitive-preview-label-input" placeholder="请输入账号名" />
      </div>
    ),
  },
  {
    id: "separator",
    title: "Separator",
    description: "展示 horizontal 与 vertical 两种方向。",
    render: () => (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">horizontal</div>
          <Separator />
        </div>
        <div className="flex h-10 items-center gap-3">
          <span className="text-sm text-muted-foreground">A</span>
          <Separator orientation="vertical" />
          <span className="text-sm text-muted-foreground">B</span>
        </div>
      </div>
    ),
  },
  {
    id: "card",
    title: "Card",
    description: "展示 default/sm 尺寸和 header/action/footer 结构。",
    render: () => (
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>默认尺寸</CardTitle>
            <CardDescription>Card default size</CardDescription>
            <CardAction>
              <Button size="sm" variant="outline">
                操作
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>内容区示例</CardContent>
          <CardFooter>
            <Button size="sm">提交</Button>
          </CardFooter>
        </Card>
        <Card size="sm">
          <CardHeader>
            <CardTitle>小尺寸</CardTitle>
            <CardDescription>Card small size</CardDescription>
          </CardHeader>
          <CardContent>紧凑内容示例</CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "field",
    title: "Field",
    description: "展示 vertical 与 horizontal 布局和错误信息。",
    render: () => (
      <FieldSet className="gap-4">
        <Field>
          <FieldContent>
            <FieldTitle>用户名</FieldTitle>
            <Input placeholder="请输入用户名" />
            <FieldDescription>建议与工号系统保持一致。</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal" data-invalid="true">
          <FieldLabel htmlFor="primitive-preview-phone">手机号</FieldLabel>
          <FieldContent>
            <Input id="primitive-preview-phone" defaultValue="123" aria-invalid />
            <FieldError>手机号格式不正确</FieldError>
          </FieldContent>
        </Field>
      </FieldSet>
    ),
  },
  {
    id: "dialog",
    title: "Dialog",
    description: "通过 trigger 打开对话框，验证基础交互和布局。",
    render: () => (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">打开 Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>确认操作</DialogTitle>
            <DialogDescription>
              这是 primitive dialog 的预览示例，用于验收交互与结构表现。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter showCloseButton>
            <Button>确认</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },
]

export const primitivePreviewIds = primitivePreviewRegistry.map((item) => item.id)

export function getPrimitivePreviewById(id: string) {
  return primitivePreviewRegistry.find((item) => item.id === id)
}

export const defaultPrimitivePreviewId = primitivePreviewIds[0]
