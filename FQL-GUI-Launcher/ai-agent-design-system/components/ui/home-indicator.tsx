import * as React from "react"

import { cn } from "../../lib/utils"

type HomeIndicatorForeground = "dark" | "light"

type HomeIndicatorProps = React.ComponentProps<"div"> & {
  foreground?: HomeIndicatorForeground
}

const foregroundClassName: Record<HomeIndicatorForeground, string> = {
  dark: "bg-[var(--sys-text-black-h1)]",
  light: "bg-[var(--sys-text-white-h1)]",
}

/**
 * iPhone home indicator aligned to the Figma mobile primitive.
 */
function HomeIndicator({
  className,
  foreground = "dark",
  ...props
}: HomeIndicatorProps) {
  return (
    <div
      data-slot="home-indicator"
      data-foreground={foreground}
      className={cn("relative h-[34px] w-[375px] shrink-0", className)}
      {...props}
    >
      <div
        className={cn(
          "absolute bottom-[9px] left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full",
          foregroundClassName[foreground]
        )}
      />
    </div>
  )
}

export { HomeIndicator }
export type { HomeIndicatorForeground, HomeIndicatorProps }
