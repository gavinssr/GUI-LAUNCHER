import type { ReactNode } from "react"

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
import { Navbar } from "@/components/ui/navbar"
import { Separator } from "@/components/ui/separator"

export type PrimitivePreviewItem = {
  id: string
  title: string
  description: string
  render: () => ReactNode
}

const buttonPreviewVariants = [
  { variant: "primary-fill" as const, label: "primary-fill" },
  { variant: "primary-outline" as const, label: "primary-outline" },
  { variant: "secondary-outline" as const, label: "secondary-outline" },
]

const buttonPreviewSizes = [
  { size: "XL" as const, label: "XL" },
  { size: "L" as const, label: "L" },
  { size: "M" as const, label: "M" },
  { size: "S" as const, label: "S" },
  { size: "XS" as const, label: "XS" },
  { size: "mini" as const, label: "mini" },
]

const buttonPreviewStatuses = [
  { status: "default" as const, label: "default" },
  { status: "loading" as const, label: "loading" },
  { status: "inactive" as const, label: "inactive" },
  { status: "disable" as const, label: "disable" },
]

const navbarHeaderActions = [
  { key: "searcher", icon: "searcher" as const, label: "搜索" },
  { key: "cart", icon: "cart" as const, label: "购物车" },
  { key: "more", icon: "more" as const, label: "更多" },
]

const navbarTabsActions = [
  { key: "search", icon: "search" as const, label: "搜索" },
  { key: "cart", icon: "cart" as const, label: "购物车" },
  { key: "more", icon: "more" as const, label: "更多" },
]

const navbarStackedActions = [
  { key: "support", icon: "support" as const, label: "文本" },
  { key: "calendar", icon: "calendar" as const, label: "文本" },
  { key: "bag", icon: "bag" as const, label: "文本" },
]

const navbarTabs = [
  { key: "option-1", label: "选项", active: true },
  { key: "option-2", label: "选项" },
  { key: "option-3", label: "选项" },
]

export const primitivePreviewRegistry: PrimitivePreviewItem[] = [
  {
    id: "button",
    title: "Button / 按钮",
    description:
      "Bilingual preview for the Figma-aligned button matrix across type, size, and status. / 按 Figma 展示类型、尺寸、状态三维矩阵。",
    render: () => (
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Variants / 类型
          </div>
          <div className="flex flex-wrap gap-3">
            {buttonPreviewVariants.map((item) => (
              <Button key={item.variant} variant={item.variant}>
                {item.label}
              </Button>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Sizes / 尺寸
          </div>
          <div className="flex flex-wrap items-end gap-4">
            {buttonPreviewSizes.map((item) => (
              <div
                key={item.size}
                className="flex min-w-20 flex-col items-center gap-2"
              >
                <Button size={item.size} variant="primary-fill">
                  操作文本
                </Button>
                <span className="text-xs text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Status Matrix / 状态矩阵
          </div>
          <div className="grid gap-4 xl:grid-cols-3">
            {buttonPreviewVariants.map((variantItem) => (
              <div
                key={variantItem.variant}
                className="flex flex-col gap-3 rounded-lg border border-border bg-muted/20 p-4"
              >
                <div className="text-sm font-medium text-foreground">
                  {variantItem.label}
                </div>
                {buttonPreviewStatuses.map((statusItem) => (
                  <div
                    key={statusItem.status}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-xs text-muted-foreground">
                      {statusItem.label}
                    </span>
                    <Button
                      variant={variantItem.variant}
                      size="L"
                      status={statusItem.status}
                      className="min-w-32"
                    >
                      操作文本
                    </Button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Compact Loading / 小尺寸 loading 对照
          </div>
          <div className="flex flex-wrap items-end gap-4">
            {buttonPreviewSizes.slice(2).map((item) => (
              <div
                key={`loading-${item.size}`}
                className="flex min-w-20 flex-col items-center gap-2"
              >
                <Button
                  variant="primary-outline"
                  size={item.size}
                  status="loading"
                >
                  操作文本
                </Button>
                <span className="text-xs text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "navbar",
    title: "Navbar / 标题栏",
    description:
      "Full mobile navbar family from the Figma section, including title, tabs, and search patterns. / 覆盖 Figma 中移动端页面头部的标题、Tabs、搜索等完整形态。",
    render: () => (
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Basic Header / 基础头部
          </div>
          <div className="space-y-3 rounded-xl border border-border bg-muted/20 p-4">
            <Navbar variant="actions" actions={navbarHeaderActions} />
            <Navbar variant="title" title="标题文本" />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Title Variants / 标题类变体
          </div>
          <div className="space-y-3 rounded-xl border border-border bg-muted/20 p-4">
            <Navbar
              variant="title-actions"
              title="标题文本"
              actions={navbarStackedActions}
            />
            <Navbar
              variant="title-text-action"
              title="标题文本"
              actionText="操作文本"
            />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Tabs Variant / Tabs 变体
          </div>
          <div className="rounded-xl border border-border bg-muted/20 p-4">
            <Navbar variant="tabs" tabs={navbarTabs} actions={navbarTabsActions} />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Search Variants / 搜索类变体
          </div>
          <div className="space-y-3 rounded-xl border border-border bg-muted/20 p-4">
            <Navbar
              variant="search"
              searchPlaceholder="输入文本"
              searchActionLabel="搜索"
            />
            <Navbar
              variant="search-action"
              searchValue="输入文本"
              showSearchClearButton
              actions={[{ key: "cart", icon: "cart", label: "购物车" }]}
            />
          </div>
        </section>
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
              <Button size="S" variant="secondary-outline">
                操作
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>内容区示例</CardContent>
          <CardFooter>
            <Button size="S" variant="primary-fill">
              提交
            </Button>
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
          <Button variant="secondary-outline">打开 Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>确认操作</DialogTitle>
            <DialogDescription>
              这是 primitive dialog 的预览示例，用于验收交互与结构表现。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter showCloseButton>
            <Button variant="primary-fill">确认</Button>
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
