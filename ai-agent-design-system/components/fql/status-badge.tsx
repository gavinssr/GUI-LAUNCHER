import * as React from "react"

import { Badge } from "../ui/badge"
import { cn } from "../../lib/utils"

type StatusBadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "marketing"
  | "neutral"

export interface StatusBadgeProps
  extends React.ComponentProps<typeof Badge> {
  status?: StatusBadgeVariant
}

const statusClassMap: Record<StatusBadgeVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  success: "bg-[var(--success)] text-[var(--success-foreground)] hover:opacity-90",
  warning: "bg-[var(--warning)] text-[var(--warning-foreground)] hover:opacity-90",
  danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  marketing: "bg-[var(--marketing)] text-[var(--marketing-foreground)] hover:opacity-90",
  neutral: "bg-muted text-muted-foreground hover:bg-muted/90",
}

export function StatusBadge({
  className,
  status = "default",
  ...props
}: StatusBadgeProps) {
  return (
    <Badge
      className={cn(statusClassMap[status], className)}
      {...props}
    />
  )
}
