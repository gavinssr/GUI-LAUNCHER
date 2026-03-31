import * as React from "react"

import { cn } from "../../lib/utils"
import {
  StatusBarBatteryIcon,
  StatusBarCellularIcon,
  StatusBarWifiIcon,
} from "../_internal/status-bar-icons"

type StatusBarForeground = "dark" | "light"

type StatusBarProps = React.ComponentProps<"div"> & {
  foreground?: StatusBarForeground
  time?: string
}

const foregroundClassName: Record<StatusBarForeground, string> = {
  dark: "text-[var(--sys-text-black-h1)]",
  light: "text-[var(--sys-text-white-h1)]",
}

/**
 * iPhone system status bar aligned to the Figma mobile primitive.
 */
function StatusBar({
  className,
  foreground = "dark",
  time = "9:41",
  ...props
}: StatusBarProps) {
  return (
    <div
      data-slot="status-bar"
      data-foreground={foreground}
      className={cn(
        "relative h-11 w-[375px] shrink-0",
        foregroundClassName[foreground],
        className
      )}
      {...props}
    >
      <div className="absolute bottom-3 w-[54px] text-center text-sm leading-4 font-medium tracking-[0]">
        {time}
      </div>

      <div className="absolute right-[14.672px] bottom-[15.333px] flex items-center gap-[5px]">
        <StatusBarCellularIcon foreground={foreground} className="h-[11px] w-[17px]" />
        <StatusBarWifiIcon foreground={foreground} className="h-[11px] w-[15px]" />
        <StatusBarBatteryIcon
          foreground={foreground}
          className="h-[11.333px] w-[24.328px]"
        />
      </div>
    </div>
  )
}

export { StatusBar }
export type { StatusBarForeground, StatusBarProps }
