"use client"

import { Fragment } from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/lib/utils"

import { Separator } from "./_shadcn/separator"
import { primitivePreviewRegistry } from "./registry"

type PrimitivePreviewNavProps = {
  onSelect?: () => void
}

export function PrimitivePreviewNav({ onSelect }: PrimitivePreviewNavProps) {
  const selectedId = useSelectedLayoutSegment()

  return (
    <nav
      aria-label="Primitive components"
      className="primitive-preview-nav primitive-preview-nav-shell"
    >
      {primitivePreviewRegistry.map((item, index) => {
        const isActive = item.id === selectedId

        return (
          <Fragment key={item.id}>
            <Link
              href={`/primitive-preview/${item.id}`}
              onClick={onSelect}
              className={cn(
                "primitive-preview-nav-link",
                isActive && "is-active"
              )}
            >
              <span className="primitive-preview-nav-link-label">
                {item.title}
              </span>
            </Link>
            {index < primitivePreviewRegistry.length - 1 ? <Separator /> : null}
          </Fragment>
        )
      })}
    </nav>
  )
}
