"use client"

import * as React from "react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface FqlFieldProps extends React.ComponentProps<typeof Input> {
  label?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  orientation?: "vertical" | "horizontal" | "responsive"
  labelClassName?: string
  contentClassName?: string
}

export function FqlField({
  id,
  label,
  description,
  error,
  className,
  orientation = "vertical",
  labelClassName,
  contentClassName,
  ...props
}: FqlFieldProps) {
  const reactId = React.useId()
  const inputId = id ?? `fql-field-${reactId}`
  const descriptionId = `${inputId}-description`
  const errorId = `${inputId}-error`
  const hasError = Boolean(error)

  return (
    <Field
      orientation={orientation}
      data-invalid={hasError ? true : undefined}
    >
      {label ? (
        <FieldLabel htmlFor={inputId} className={cn(labelClassName)}>
          {label}
        </FieldLabel>
      ) : null}

      <FieldContent className={cn(contentClassName)}>
        <Input
          id={inputId}
          aria-invalid={hasError}
          aria-describedby={[
            description ? descriptionId : null,
            error ? errorId : null,
          ]
            .filter(Boolean)
            .join(" ") || undefined}
          className={cn(className)}
          {...props}
        />

        {description ? (
          <FieldDescription id={descriptionId}>
            {description}
          </FieldDescription>
        ) : null}

        {error ? <FieldError id={errorId}>{error}</FieldError> : null}
      </FieldContent>
    </Field>
  )
}
