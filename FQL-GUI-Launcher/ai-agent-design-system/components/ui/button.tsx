import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { ButtonLoadingIndicator } from "../_internal/button-loading-indicator"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border font-medium transition-[background-color,border-color,color,box-shadow,transform] outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none data-[disabled=true]:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        "primary-fill": "border-transparent",
        "primary-outline": "bg-background",
        "secondary-outline": "bg-background",
      },
      size: {
        XL: "h-12 gap-2 rounded-lg px-4 text-base leading-[18px] [&_svg:not([class*='size-'])]:size-5",
        L: "h-11 gap-2 rounded-lg px-4 text-base leading-[18px] [&_svg:not([class*='size-'])]:size-5",
        M: "h-9 gap-1.5 rounded-md px-4 text-sm leading-4 [&_svg:not([class*='size-'])]:size-4",
        S: "h-7 gap-1 rounded-md px-3 text-xs leading-[14px] [&_svg:not([class*='size-'])]:size-3",
        XS: "h-6 gap-1 rounded-md px-2.5 text-xs leading-[14px] [&_svg:not([class*='size-'])]:size-3",
        mini: "h-4 gap-1 rounded-sm px-1.5 text-[10px] leading-[11px] [&_svg:not([class*='size-'])]:size-2.5",
      },
      status: {
        default: "",
        loading: "",
        inactive: "",
        disable: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary-fill",
        status: "default",
        className:
          "bg-primary text-primary-foreground hover:bg-[var(--sys-primary-hover)] active:translate-y-px active:bg-[var(--sys-primary-active)]",
      },
      {
        variant: "primary-fill",
        status: "loading",
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "primary-fill",
        status: "inactive",
        className:
          "bg-[var(--sys-primary-inactive)] text-primary-foreground",
      },
      {
        variant: "primary-fill",
        status: "disable",
        className:
          "bg-[var(--sys-primary-disable)] text-[var(--sys-text-black-h4)]",
      },
      {
        variant: "primary-outline",
        status: "default",
        className:
          "border-[0.5px] border-primary bg-background text-primary hover:bg-[var(--ref-brand-blue1)] active:translate-y-px active:bg-[var(--ref-brand-blue2)]",
      },
      {
        variant: "primary-outline",
        status: "loading",
        className: "border-[0.5px] border-primary bg-background text-primary",
      },
      {
        variant: "primary-outline",
        status: "inactive",
        className:
          "border-[0.5px] border-[var(--sys-primary-inactive)] bg-background text-[var(--sys-primary-inactive)]",
      },
      {
        variant: "primary-outline",
        status: "disable",
        className:
          "border-[0.5px] border-[var(--sys-text-black-h4)] bg-background text-[var(--sys-text-black-h4)]",
      },
      {
        variant: "secondary-outline",
        status: "default",
        className:
          "border-[0.5px] border-border bg-background text-foreground hover:bg-muted/60 active:translate-y-px active:bg-muted",
      },
      {
        variant: "secondary-outline",
        status: "loading",
        className:
          "border-[0.5px] border-border bg-background text-foreground",
      },
      {
        variant: "secondary-outline",
        status: "inactive",
        className:
          "border-[0.5px] border-border bg-background text-[var(--sys-text-black-h3)]",
      },
      {
        variant: "secondary-outline",
        status: "disable",
        className:
          "border-[0.5px] border-border bg-[var(--sys-primary-disable)] text-[var(--sys-text-black-h4)]",
      },
    ],
    defaultVariants: {
      variant: "primary-fill",
      size: "L",
      status: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

/**
 * FQL primitive button aligned to the Figma button matrix.
 */
function Button({
  className,
  variant = "primary-fill",
  size = "L",
  status = "default",
  asChild = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"
  const resolvedStatus = disabled ? "disable" : status
  const isDisabled =
    disabled || resolvedStatus === "disable" || resolvedStatus === "loading"
  const showLoadingIcon =
    !asChild &&
    resolvedStatus === "loading" &&
    (size === "XL" || size === "L")

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-status={resolvedStatus}
      data-disabled={isDisabled ? "true" : undefined}
      className={cn(
        buttonVariants({ variant, size, status: resolvedStatus, className })
      )}
      disabled={asChild ? undefined : isDisabled}
      aria-disabled={asChild && isDisabled ? true : undefined}
      {...props}
    >
      {showLoadingIcon ? (
        <ButtonLoadingIndicator onPrimary={variant === "primary-fill"} />
      ) : null}
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
