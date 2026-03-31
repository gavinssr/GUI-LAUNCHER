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
  function renderClearButton(buttonClassName?: string) {
    return (
      <button
        type="button"
        aria-label="清空搜索"
        className={cn(
          "inline-flex size-4 shrink-0 items-center justify-center rounded-full text-[var(--sys-text-black-h3)] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/50",
          buttonClassName
        )}
      >
        <ClearIcon />
      </button>
    )
  }

  return (
    <div
      data-slot="navbar-search"
      className={cn(
        "flex h-[34px] min-w-0 flex-1 items-center rounded-lg bg-background pl-1.5 pr-[10px] py-1.5 text-foreground ring-1 ring-foreground/8",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-1">
        <SearchIcon className="size-5 text-[var(--sys-text-black-h3)]" />
        <div className="flex min-w-0 items-center gap-px text-xs leading-[14px]">
          <span
            className={cn(
              "truncate",
              hasValue ? "text-foreground" : "text-muted-foreground"
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

      {showClearButton && !ctaLabel ? renderClearButton("ml-2") : null}

      {ctaLabel ? (
        <div className="ml-2 inline-flex shrink-0 items-center justify-end gap-2">
          {showClearButton ? renderClearButton() : null}
          <div aria-hidden className="h-4 w-px bg-border" />
          <span className="text-xs leading-[14px] font-medium tracking-[-0.24px] text-[var(--marketing)]">
            {ctaLabel}
          </span>
        </div>
      ) : null}
    </div>
  )
}

export { NavbarSearchCapsule }
