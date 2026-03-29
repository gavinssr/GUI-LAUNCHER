"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { primitivePreviewRegistry } from "./registry"

export function PrimitivePreviewNav() {
  const selectedId = useSelectedLayoutSegment()

  return (
    <nav aria-label="Primitive components" className="flex flex-col gap-2">
      {primitivePreviewRegistry.map((item) => {
        const isActive = item.id === selectedId

        return (
          <Link
            key={item.id}
            href={`/primitive-preview/${item.id}`}
            className={cn(
              buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
              "h-auto justify-start px-3 py-2 text-left whitespace-normal"
            )}
          >
            <span className="flex flex-col items-start gap-1">
              <span className="font-medium">{item.title}</span>
              <span className="text-xs text-muted-foreground">
                {item.description}
              </span>
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
