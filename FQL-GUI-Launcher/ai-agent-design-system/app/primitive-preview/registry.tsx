import type { ReactNode } from "react"
import { CircleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DisplayField } from "@/components/ui/display-field"
import { HomeIndicator } from "@/components/ui/home-indicator"
import { Navbar } from "@/components/ui/navbar"
import { Separator } from "@/components/ui/separator"
import { StatusBar } from "@/components/ui/status-bar"

export type PrimitivePreviewItem = {
  id: string
  primitiveIds: string[]
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
  { key: "searcher", icon: "searcher" as const, label: "搜索" },
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

function NavbarPreviewSurface({ children }: { children: ReactNode }) {
  return <div className="w-fit overflow-hidden bg-background">{children}</div>
}

function DisplayFieldPreviewSurface({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="space-y-3 rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="w-fit">{children}</div>
    </div>
  )
}

function DisplayFieldPreviewTag() {
  return (
    <div className="flex h-4 items-center justify-center rounded-[2px] border border-[var(--ref-brand-blue3)] px-1 text-[10px] leading-[9px] text-[var(--ref-brand-blue8-base)]">
      标签
    </div>
  )
}

function DisplayFieldPresetWithInfo() {
  return (
    <div className="flex items-center gap-0.5 text-[14px] leading-4 text-[var(--sys-text-black-h2)]">
      <span>预设内容</span>
      <CircleAlert className="size-4" strokeWidth={1.75} />
    </div>
  )
}

export const primitivePreviewRegistry: PrimitivePreviewItem[] = [
  {
    id: "display-field",
    primitiveIds: ["display-field"],
    title: "DisplayField / 展示类",
    description:
      "Mobile display-only field primitives covering the current Figma showcase set. / 移动端表单展示类 primitive，覆盖当前 Figma 节点下全部展示形态。",
    render: () => (
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-4">
          <div className="text-lg font-semibold text-foreground">单行</div>

          <section className="flex flex-col gap-3">
            <div className="text-sm font-medium text-foreground">无预设内容</div>
            <div className="grid gap-4 xl:grid-cols-2">
              <DisplayFieldPreviewSurface label="通栏">
                <DisplayField mainTitle="一级标题" />
              </DisplayFieldPreviewSurface>
              <DisplayFieldPreviewSurface label="卡片式">
                <DisplayField surface="card" mainTitle="一级标题" separator={false} />
              </DisplayFieldPreviewSurface>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <div className="text-sm font-medium text-foreground">有预设内容</div>
            <div className="grid gap-4 xl:grid-cols-2">
              <DisplayFieldPreviewSurface label="通栏">
                <DisplayField mainTitle="一级标题" side={<DisplayFieldPresetWithInfo />} />
              </DisplayFieldPreviewSurface>
              <DisplayFieldPreviewSurface label="卡片式">
                <DisplayField
                  surface="card"
                  mainTitle="一级标题"
                  side={<DisplayFieldPresetWithInfo />}
                  separator={false}
                />
              </DisplayFieldPreviewSurface>
            </div>
          </section>
        </section>

        <section className="flex flex-col gap-4">
          <div className="text-lg font-semibold text-foreground">多行</div>

          <section className="flex flex-col gap-3">
            <div className="text-sm font-medium text-foreground">左对齐 / 无预设</div>
            <div className="grid gap-4 xl:grid-cols-2">
              <DisplayFieldPreviewSurface label="通栏">
                <DisplayField
                  size="multi"
                  mainTitle="一级标题"
                  mainDescription="二级文本"
                />
              </DisplayFieldPreviewSurface>
              <DisplayFieldPreviewSurface label="卡片式">
                <DisplayField
                  surface="card"
                  size="multi"
                  mainTitle="一级标题"
                  mainDescription="二级文本"
                  separator={false}
                />
              </DisplayFieldPreviewSurface>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <div className="text-sm font-medium text-foreground">左对齐 / 有预设</div>
            <div className="grid gap-4 xl:grid-cols-2">
              <DisplayFieldPreviewSurface label="通栏">
                <DisplayField
                  size="multi"
                  mainTitle="一级标题"
                  mainDescription="二级文本"
                  side={<div className="text-[14px] leading-4 text-[var(--sys-text-black-h2)]">预设内容</div>}
                />
              </DisplayFieldPreviewSurface>
              <DisplayFieldPreviewSurface label="卡片式">
                <DisplayField
                  surface="card"
                  size="multi"
                  mainTitle="一级标题"
                  mainDescription="二级文本"
                  side={<div className="text-[14px] leading-4 text-[var(--sys-text-black-h2)]">预设内容</div>}
                  separator={false}
                />
              </DisplayFieldPreviewSurface>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <div className="text-sm font-medium text-foreground">左对齐 / 一二级预设</div>
            <div className="grid gap-4 xl:grid-cols-2">
              <DisplayFieldPreviewSurface label="通栏">
                <DisplayField
                  size="multi"
                  mainTitle="一级标题"
                  mainBadge={<DisplayFieldPreviewTag />}
                  sideTitle="一级标题"
                  sideDescription="二级文本"
                />
              </DisplayFieldPreviewSurface>
              <DisplayFieldPreviewSurface label="卡片式">
                <DisplayField
                  surface="card"
                  size="multi"
                  mainTitle="一级标题"
                  mainBadge={<DisplayFieldPreviewTag />}
                  sideTitle="一级标题"
                  sideDescription="二级文本"
                  separator={false}
                />
              </DisplayFieldPreviewSurface>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <div className="text-sm font-medium text-foreground">左对齐 / 数字标题</div>
            <div className="grid gap-4 xl:grid-cols-2">
              <DisplayFieldPreviewSurface label="通栏">
                <DisplayField
                  size="number"
                  mainEyebrow="二级文本"
                  mainTitle="¥9294.02"
                  mainTitleTone="number"
                  side={<div className="text-[14px] leading-4 text-[var(--sys-text-black-h2)]">预设内容</div>}
                />
              </DisplayFieldPreviewSurface>
              <DisplayFieldPreviewSurface label="卡片式">
                <DisplayField
                  surface="card"
                  size="number"
                  mainEyebrow="二级文本"
                  mainTitle="¥9294.02"
                  mainTitleTone="number"
                  side={<div className="text-[14px] leading-4 text-[var(--sys-text-black-h2)]">预设内容</div>}
                  separator={false}
                />
              </DisplayFieldPreviewSurface>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <div className="text-sm font-medium text-foreground">右对齐 / 有预设</div>
            <div className="grid gap-4 xl:grid-cols-2">
              <DisplayFieldPreviewSurface label="通栏">
                <DisplayField
                  size="multi"
                  reverse
                  mainTitle="一级标题"
                  mainDescription="二级文本"
                  side={<div className="text-[14px] leading-4 text-[var(--sys-text-black-h2)]">预设内容</div>}
                />
              </DisplayFieldPreviewSurface>
              <DisplayFieldPreviewSurface label="卡片式">
                <DisplayField
                  surface="card"
                  size="multi"
                  reverse
                  mainTitle="一级标题"
                  mainDescription="二级文本"
                  side={<div className="text-[14px] leading-4 text-[var(--sys-text-black-h2)]">预设内容</div>}
                  separator={false}
                />
              </DisplayFieldPreviewSurface>
            </div>
          </section>
        </section>
      </div>
    ),
  },
  {
    id: "button",
    primitiveIds: ["button"],
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
    primitiveIds: ["navbar"],
    title: "Navbar / 标题栏",
    description:
      "Full mobile navbar family from the Figma section, including title, tabs, and search patterns. / 覆盖 Figma 中移动端页面头部的标题、Tabs、搜索等完整形态。",
    render: () => (
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Basic Header / 基础头部
          </div>
          <div className="space-y-3 rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
            <NavbarPreviewSurface>
              <Navbar variant="actions" actions={navbarHeaderActions} />
            </NavbarPreviewSurface>
            <NavbarPreviewSurface>
              <Navbar variant="title" title="标题文本" />
            </NavbarPreviewSurface>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Title Variants / 标题类变体
          </div>
          <div className="space-y-3 rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
            <NavbarPreviewSurface>
              <Navbar
                variant="title-actions"
                title="标题文本"
                actions={navbarStackedActions}
              />
            </NavbarPreviewSurface>
            <NavbarPreviewSurface>
              <Navbar
                variant="title-text-action"
                title="标题文本"
                actionText="操作文本"
              />
            </NavbarPreviewSurface>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Tabs Variant / Tabs 变体
          </div>
          <div className="rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
            <NavbarPreviewSurface>
              <Navbar
                variant="tabs"
                tabs={navbarTabs}
                actions={navbarTabsActions}
              />
            </NavbarPreviewSurface>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Search Variants / 搜索类变体
          </div>
          <div className="space-y-3 rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
            <NavbarPreviewSurface>
              <Navbar
                variant="search"
                searchPlaceholder="输入文本"
                searchActionLabel="搜索"
              />
            </NavbarPreviewSurface>
            <NavbarPreviewSurface>
              <Navbar
                variant="search-action"
                searchValue="输入文本"
                showSearchClearButton
                actions={[{ key: "cart", icon: "cart", label: "购物车" }]}
              />
            </NavbarPreviewSurface>
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "iphone-common",
    primitiveIds: ["status-bar", "home-indicator"],
    title: "iPhone Common / iPhone 通用组件",
    description:
      "集中展示 iPhone 系统级基础组件，包括 Status Bar 与 Home Indicator。 / Shared preview for iPhone system primitives, including Status Bar and Home Indicator.",
    render: () => (
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Status Bar / 状态栏
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <div className="space-y-3 rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
              <div className="text-xs text-muted-foreground">Dark foreground</div>
              <div className="w-fit bg-[var(--ref-neutral-white1)]">
                <StatusBar />
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
              <div className="text-xs text-muted-foreground">Light foreground</div>
              <div className="w-fit bg-[var(--sys-text-black-h1)]">
                <StatusBar foreground="light" />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <div className="text-sm font-medium text-foreground">
            Home Indicator / 底部横条
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <div className="space-y-3 rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
              <div className="text-xs text-muted-foreground">Dark foreground</div>
              <div className="w-fit bg-[var(--ref-neutral-white1)]">
                <HomeIndicator />
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-border bg-[var(--sys-page-background-fill)] p-4">
              <div className="text-xs text-muted-foreground">Light foreground</div>
              <div className="w-fit bg-[var(--sys-text-black-h1)]">
                <HomeIndicator foreground="light" />
              </div>
            </div>
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "separator",
    primitiveIds: ["separator"],
    title: "Separator / 分隔线",
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
    primitiveIds: ["card"],
    title: "Card / 卡片",
    description: "开发中。",
    render: () => (
      <div className="text-[clamp(1.25rem,1.8vw,1.75rem)] leading-[1.15] font-bold text-muted-foreground">
        开发中
      </div>
    ),
  },
  {
    id: "dialog",
    primitiveIds: ["dialog"],
    title: "Dialog / 对话框",
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
