import * as React from "react"

import { cn } from "../../lib/utils"
import {
  NavbarBackButton,
  NavbarIconButton,
  NavbarStackedAction,
  NavbarTextAction,
  type NavbarIconName,
} from "../_internal/navbar-icons"
import { NavbarSearchCapsule } from "../_internal/navbar-search"
import { NavbarTabs, type NavbarTabItem } from "../_internal/navbar-tabs"

type NavbarVariant =
  | "actions"
  | "title"
  | "title-actions"
  | "title-text-action"
  | "tabs"
  | "search"
  | "search-action"

type NavbarActionItem = {
  key: string
  icon: NavbarIconName
  label: string
}

type NavbarProps = React.ComponentProps<"div"> & {
  variant?: NavbarVariant
  title?: string
  leading?: React.ReactNode
  actions?: NavbarActionItem[]
  actionText?: string
  tabs?: NavbarTabItem[]
  searchPlaceholder?: string
  searchValue?: string
  searchActionLabel?: string
  showSearchClearButton?: boolean
}

const navbarPaddingByVariant: Record<NavbarVariant, string> = {
  actions: "pl-2 pr-2.5",
  title: "px-2",
  "title-actions": "pl-2 pr-2.5",
  "title-text-action": "pl-2 pr-3",
  tabs: "pl-2 pr-2.5",
  search: "pl-2 pr-2.5",
  "search-action": "pl-2 pr-2.5",
}

const navbarLayoutByVariant: Record<NavbarVariant, string> = {
  actions: "justify-between",
  title: "",
  "title-actions": "justify-between",
  "title-text-action": "justify-between",
  tabs: "justify-between",
  search: "",
  "search-action": "",
}

function Navbar({
  className,
  variant = "title",
  title = "标题文本",
  leading,
  actions = [],
  actionText = "操作文本",
  tabs = [],
  searchPlaceholder = "输入文本",
  searchValue,
  searchActionLabel = "搜索",
  showSearchClearButton = false,
  ...props
}: NavbarProps) {
  const resolvedLeading = leading ?? <NavbarBackButton />

  return (
    <div
      data-slot="navbar"
      data-variant={variant}
      className={cn(
        "flex h-11 w-[375px] shrink-0 items-center bg-background text-foreground",
        navbarPaddingByVariant[variant],
        navbarLayoutByVariant[variant],
        className
      )}
      {...props}
    >
      {variant === "actions" ? (
        <>
          {resolvedLeading}
          <NavbarInlineActions items={actions} />
        </>
      ) : null}

      {variant === "title" ? (
        <NavbarTitleGroup title={title} leading={resolvedLeading} />
      ) : null}

      {variant === "title-actions" ? (
        <>
          <NavbarTitleGroup title={title} leading={resolvedLeading} />
          <NavbarStackedActions items={actions} />
        </>
      ) : null}

      {variant === "title-text-action" ? (
        <>
          <NavbarTitleGroup title={title} leading={resolvedLeading} />
          <NavbarTextAction>{actionText}</NavbarTextAction>
        </>
      ) : null}

      {variant === "tabs" ? (
        <>
          <div className="flex min-w-0 items-center pr-1">
            <div className="mr-[-4px]">{resolvedLeading}</div>
            <NavbarTabs items={tabs} className="mr-[-4px]" />
          </div>
          <NavbarInlineActions items={actions} />
        </>
      ) : null}

      {variant === "search" ? (
        <div className="flex min-w-0 w-full items-center gap-1">
          {resolvedLeading}
          <NavbarSearchCapsule
            placeholder={searchPlaceholder}
            value={searchValue}
            ctaLabel={searchActionLabel}
          />
        </div>
      ) : null}

      {variant === "search-action" ? (
        <div className="flex min-w-0 w-full items-center justify-between gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-1">
            {resolvedLeading}
            <NavbarSearchCapsule
              placeholder={searchPlaceholder}
              value={searchValue}
              showClearButton={showSearchClearButton}
            />
          </div>
          <NavbarInlineActions items={actions} />
        </div>
      ) : null}
    </div>
  )
}

function NavbarTitleGroup({
  title,
  leading,
}: {
  title: string
  leading: React.ReactNode
}) {
  return (
    <div className="flex min-w-0 items-center gap-1">
      {leading}
      <div className="truncate text-lg leading-5 font-medium text-[var(--sys-text-black-h1)]">
        {title}
      </div>
    </div>
  )
}

function NavbarInlineActions({ items }: { items: NavbarActionItem[] }) {
  return (
    <div className="flex shrink-0 items-center gap-4">
      {items.map((item) => (
        <NavbarIconButton
          key={item.key}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  )
}

function NavbarStackedActions({ items }: { items: NavbarActionItem[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <NavbarStackedAction
          key={item.key}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  )
}

export { Navbar }
export type { NavbarActionItem, NavbarProps, NavbarVariant }
