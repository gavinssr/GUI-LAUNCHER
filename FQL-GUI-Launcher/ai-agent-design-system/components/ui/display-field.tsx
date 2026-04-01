import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const displayFieldVariants = cva("flex flex-col items-start bg-background", {
  variants: {
    surface: {
      plain: "w-[375px] px-4",
      card: "w-[355px] overflow-hidden rounded-[4px] px-2.5",
    },
    size: {
      single: "h-[52px]",
      multi: "h-[68px]",
      number: "h-[72px]",
    },
  },
  defaultVariants: {
    surface: "plain",
    size: "single",
  },
})

type DisplayFieldTone = "primary" | "secondary" | "tertiary" | "number"
type DisplayFieldAlign = "start" | "end"

type DisplayFieldTextBlockProps = {
  align?: DisplayFieldAlign
  eyebrow?: React.ReactNode
  eyebrowTone?: DisplayFieldTone
  title?: React.ReactNode
  titleTone?: DisplayFieldTone
  badge?: React.ReactNode
  description?: React.ReactNode
  descriptionTone?: DisplayFieldTone
  descriptionSuffix?: React.ReactNode
}

type DisplayFieldProps = React.ComponentProps<"div"> &
  VariantProps<typeof displayFieldVariants> & {
    leading?: React.ReactNode
    mainAlign?: DisplayFieldAlign
    mainEyebrow?: React.ReactNode
    mainEyebrowTone?: DisplayFieldTone
    mainTitle?: React.ReactNode
    mainTitleTone?: DisplayFieldTone
    mainBadge?: React.ReactNode
    mainDescription?: React.ReactNode
    mainDescriptionTone?: DisplayFieldTone
    mainDescriptionSuffix?: React.ReactNode
    side?: React.ReactNode
    sideAlign?: DisplayFieldAlign
    sideTitle?: React.ReactNode
    sideTitleTone?: DisplayFieldTone
    sideDescription?: React.ReactNode
    sideDescriptionTone?: DisplayFieldTone
    sideDescriptionSuffix?: React.ReactNode
    reverse?: boolean
    separator?: boolean
  }

function toneClassName(tone: DisplayFieldTone) {
  switch (tone) {
    case "secondary":
      return "text-[14px] leading-4 text-[var(--sys-text-black-h2)]"
    case "tertiary":
      return "text-[12px] leading-[14px] text-[var(--sys-text-black-h3)]"
    case "number":
      return "[font-family:var(--font-number)] text-[18px] leading-5 font-medium text-[var(--sys-text-black-h1)]"
    case "primary":
    default:
      return "text-[14px] leading-4 text-[var(--sys-text-black-h1)]"
  }
}

function DisplayFieldTextBlock({
  align = "start",
  eyebrow,
  eyebrowTone = "tertiary",
  title,
  titleTone = "primary",
  badge,
  description,
  descriptionTone = "tertiary",
  descriptionSuffix,
}: DisplayFieldTextBlockProps) {
  if (!eyebrow && !title && !badge && !description && !descriptionSuffix) {
    return null
  }

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1.5",
        align === "end" && "items-end text-right"
      )}
    >
      {eyebrow ? (
        <div className={cn("truncate", toneClassName(eyebrowTone))}>{eyebrow}</div>
      ) : null}

      {title || badge ? (
        <div
          className={cn(
            "flex min-w-0 items-center gap-0.5",
            align === "end" && "justify-end self-stretch"
          )}
        >
          {title ? (
            <div className={cn("truncate", toneClassName(titleTone))}>{title}</div>
          ) : null}
          {badge ? <div className="shrink-0">{badge}</div> : null}
        </div>
      ) : null}

      {description || descriptionSuffix ? (
        <div
          className={cn(
            "flex min-w-0 items-center gap-1",
            align === "end" && "justify-end self-stretch"
          )}
        >
          {description ? (
            <div className={cn("truncate", toneClassName(descriptionTone))}>
              {description}
            </div>
          ) : null}
          {descriptionSuffix ? (
            <div className="shrink-0 text-[var(--sys-text-black-h3)]">
              {descriptionSuffix}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

/**
 * Mobile display-only field primitive aligned to the Figma showcase matrix.
 */
function DisplayField({
  className,
  surface = "plain",
  size = "single",
  leading,
  mainAlign,
  mainEyebrow,
  mainEyebrowTone = "tertiary",
  mainTitle,
  mainTitleTone = "primary",
  mainBadge,
  mainDescription,
  mainDescriptionTone = "tertiary",
  mainDescriptionSuffix,
  side,
  sideAlign,
  sideTitle,
  sideTitleTone = "primary",
  sideDescription,
  sideDescriptionTone = "tertiary",
  sideDescriptionSuffix,
  reverse = false,
  separator = true,
  ...props
}: DisplayFieldProps) {
  const hasSideText = Boolean(sideTitle || sideDescription || sideDescriptionSuffix)
  const hasSide = Boolean(side || hasSideText)
  const resolvedMainAlign = mainAlign ?? (reverse ? "end" : "start")
  const resolvedSideAlign = sideAlign ?? (reverse ? "start" : "end")

  const mainContent = (
    <div
      className={cn(
        "flex min-w-0 items-center gap-2",
        resolvedMainAlign === "end" && "justify-end"
      )}
    >
      {leading ? <div className="shrink-0">{leading}</div> : null}
      <DisplayFieldTextBlock
        align={resolvedMainAlign}
        eyebrow={mainEyebrow}
        eyebrowTone={mainEyebrowTone}
        title={mainTitle}
        titleTone={mainTitleTone}
        badge={mainBadge}
        description={mainDescription}
        descriptionTone={mainDescriptionTone}
        descriptionSuffix={mainDescriptionSuffix}
      />
    </div>
  )

  const sideContent = side ? (
    <div
      className={cn(
        "flex min-w-0 items-center gap-2",
        resolvedSideAlign === "end" && "justify-end text-right"
      )}
    >
      {side}
    </div>
  ) : (
    <DisplayFieldTextBlock
      align={resolvedSideAlign}
      title={sideTitle}
      titleTone={sideTitleTone}
      description={sideDescription}
      descriptionTone={sideDescriptionTone}
      descriptionSuffix={sideDescriptionSuffix}
    />
  )

  return (
    <div
      data-slot="display-field"
      data-surface={surface}
      data-size={size}
      className={cn(displayFieldVariants({ surface, size }), className)}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full",
          surface === "plain" &&
            separator &&
            "shadow-[inset_0_-0.5px_0_0_var(--sys-wire-divider-dark)]"
        )}
      >
        <div
          className={cn(
            "grid h-full w-full items-center gap-3",
            hasSide
              ? reverse
                ? "grid-cols-[auto_minmax(0,1fr)]"
                : "grid-cols-[minmax(0,1fr)_auto]"
              : "grid-cols-[minmax(0,1fr)]"
          )}
        >
          {reverse ? (
            <>
              {hasSide ? sideContent : null}
              {mainContent}
            </>
          ) : (
            <>
              {mainContent}
              {hasSide ? sideContent : null}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export { DisplayField, displayFieldVariants }
export type {
  DisplayFieldAlign,
  DisplayFieldProps,
  DisplayFieldTextBlockProps,
  DisplayFieldTone,
}
