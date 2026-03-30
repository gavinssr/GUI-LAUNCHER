import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--button-radius)] border text-sm font-medium whitespace-nowrap select-none outline-none transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/25 active:translate-y-px disabled:pointer-events-none disabled:[background-color:var(--button-disabled-bg)] disabled:[border-color:var(--button-disabled-border)] disabled:[color:var(--button-disabled-fg)] disabled:[box-shadow:none] aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "[background-color:var(--button-primary-bg)] [border-color:var(--button-primary-border)] [color:var(--button-primary-fg)] [box-shadow:var(--button-primary-shadow)] hover:[background-color:var(--button-primary-hover-bg)] hover:[border-color:var(--button-primary-hover-border)] hover:[box-shadow:var(--button-primary-shadow)] active:[background-color:var(--button-primary-active-bg)] active:[border-color:var(--button-primary-active-border)] active:[box-shadow:none]",
        outline:
          "[background-color:var(--button-outline-bg)] [border-color:var(--button-outline-border)] [color:var(--button-outline-fg)] [box-shadow:var(--button-outline-shadow)] hover:[background-color:var(--button-outline-hover-bg)] hover:[border-color:var(--button-outline-hover-border)] active:[background-color:var(--button-outline-active-bg)] active:[border-color:var(--button-outline-active-border)] active:[box-shadow:none] aria-expanded:[background-color:var(--button-outline-hover-bg)] aria-expanded:[border-color:var(--button-outline-hover-border)]",
        secondary:
          "[background-color:var(--button-secondary-bg)] [border-color:var(--button-secondary-border)] [color:var(--button-secondary-fg)] [box-shadow:var(--button-secondary-shadow)] hover:[background-color:var(--button-secondary-hover-bg)] hover:[border-color:var(--button-secondary-hover-border)] active:[background-color:var(--button-secondary-active-bg)] active:[border-color:var(--button-secondary-active-border)] active:[box-shadow:none] aria-expanded:[background-color:var(--button-secondary-hover-bg)] aria-expanded:[border-color:var(--button-secondary-hover-border)]",
        ghost:
          "[background-color:var(--button-ghost-bg)] [border-color:var(--button-ghost-border)] [color:var(--button-ghost-fg)] [box-shadow:none] hover:[background-color:var(--button-ghost-hover-bg)] hover:[border-color:var(--button-ghost-hover-border)] active:[background-color:var(--button-ghost-active-bg)] active:[border-color:var(--button-ghost-active-border)] aria-expanded:[background-color:var(--button-ghost-hover-bg)]",
        destructive:
          "[background-color:var(--button-destructive-bg)] [border-color:var(--button-destructive-border)] [color:var(--button-destructive-fg)] [box-shadow:var(--button-destructive-shadow)] hover:[background-color:var(--button-destructive-hover-bg)] hover:[border-color:var(--button-destructive-hover-border)] active:[background-color:var(--button-destructive-active-bg)] active:[border-color:var(--button-destructive-active-border)] active:[box-shadow:none] focus-visible:border-destructive focus-visible:ring-destructive/20",
        link:
          "rounded-none border-transparent bg-transparent font-medium text-[color:var(--button-link-fg)] [box-shadow:none] hover:text-[color:var(--button-link-hover-fg)] hover:underline active:text-[color:var(--button-link-hover-fg)]",
      },
      size: {
        default:
          "h-10 px-4 py-2 data-[variant=link]:h-auto data-[variant=link]:px-0 data-[variant=link]:py-0",
        xs: "h-8 rounded-[var(--button-radius-compact)] px-3 text-xs data-[variant=link]:h-auto data-[variant=link]:px-0 data-[variant=link]:py-0 [&_svg:not([class*='size-'])]:size-3.5",
        sm: "h-9 rounded-[var(--button-radius-compact)] px-3.5 text-sm data-[variant=link]:h-auto data-[variant=link]:px-0 data-[variant=link]:py-0",
        lg: "h-11 px-5 text-sm data-[variant=link]:h-auto data-[variant=link]:px-0 data-[variant=link]:py-0 [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10 px-0",
        "icon-xs":
          "size-8 rounded-[var(--button-radius-compact)] px-0 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-sm":
          "size-9 rounded-[var(--button-radius-compact)] px-0",
        "icon-lg": "size-11 px-0 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
