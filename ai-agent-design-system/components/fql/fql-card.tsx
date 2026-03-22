import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface FqlCardProps extends React.ComponentProps<"div"> {
  title?: React.ReactNode
  description?: React.ReactNode
  contentClassName?: string
  footer?: React.ReactNode
}

export function FqlCard({
  className,
  title,
  description,
  children,
  contentClassName,
  footer,
  ...props
}: FqlCardProps) {
  return (
    <Card
      className={cn(
        "rounded-lg border-border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      {(title || description) && (
        <CardHeader className="gap-1.5">
          {title ? <CardTitle className="text-base font-medium">{title}</CardTitle> : null}
          {description ? (
            <CardDescription className="text-sm text-muted-foreground">
              {description}
            </CardDescription>
          ) : null}
        </CardHeader>
      )}

      <CardContent className={cn("pt-0", contentClassName)}>
        {children}
      </CardContent>

      {footer ? <CardFooter>{footer}</CardFooter> : null}
    </Card>
  )
}
