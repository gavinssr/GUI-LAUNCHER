import { cn } from "../../lib/utils"

type NavbarTabItem = {
  key: string
  label: string
  badge?: string | number
  active?: boolean
}

function NavbarTabs({
  items,
  className,
}: {
  items: NavbarTabItem[]
  className?: string
}) {
  return (
    <div className={cn("flex items-center", className)}>
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          aria-pressed={item.active}
          className={cn(
            "relative inline-flex h-[38px] shrink-0 items-center justify-center rounded-lg px-2 text-center outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/50",
            item.active
              ? "py-[11px] text-base leading-[18px] font-medium text-primary"
              : "py-3 text-sm leading-4 font-medium text-foreground"
          )}
        >
          <span>{item.label}</span>
          {item.badge !== undefined ? (
            <span className="absolute -top-1.5 -right-3 inline-flex min-w-4 items-center justify-center rounded-2xl bg-[var(--marketing)] px-1 py-0.5 text-[10px] leading-[11px] font-medium text-[var(--marketing-foreground)]">
              {item.badge}
            </span>
          ) : null}
        </button>
      ))}
    </div>
  )
}

export { NavbarTabs }
export type { NavbarTabItem }
