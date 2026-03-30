import { cn } from "../../lib/utils"
import { ClearIcon, SearchIcon } from "./navbar-icons"

function NavbarSearchCapsule({
  placeholder = "输入文本",
  value,
  ctaLabel,
  showClearButton = false,
  className,
}: {
  placeholder?: string
  value?: string
  ctaLabel?: string
  showClearButton?: boolean
  className?: string
}) {
  const hasValue = Boolean(value)

  return (
    <div
      data-slot="navbar-search"
      className={cn(
        "flex h-[34px] min-w-0 flex-1 items-center rounded-lg bg-background px-1.5 py-1.5 text-foreground ring-1 ring-foreground/8",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-1">
        <SearchIcon className="size-5 text-[var(--sys-text-black-h3)]" />
        <div className="flex min-w-0 items-center gap-px text-xs leading-[14px]">
          <span
            className={cn(
              "truncate",
              hasValue
                ? "text-[var(--sys-text-black-h1)]"
                : "text-muted-foreground"
            )}
          >
            {hasValue ? value : placeholder}
          </span>
          {hasValue ? (
            <span
              aria-hidden
              className="ml-0.5 inline-block h-4 w-0.5 bg-primary"
            />
          ) : null}
        </div>
      </div>

      {showClearButton ? (
        <button
          type="button"
          aria-label="清空搜索"
          className="ml-2 inline-flex size-4 shrink-0 items-center justify-center rounded-full text-[var(--sys-text-black-h3)] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <ClearIcon />
        </button>
      ) : null}

      {ctaLabel ? (
        <div className="ml-2 inline-flex shrink-0 items-center">
          <span className="text-xs leading-[14px] font-medium tracking-[-0.24px] text-[var(--marketing)]">
            {ctaLabel}
          </span>
        </div>
      ) : null}
    </div>
  )
}

export { NavbarSearchCapsule }
