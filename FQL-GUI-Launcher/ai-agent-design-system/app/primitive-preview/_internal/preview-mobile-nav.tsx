"use client"

import * as React from "react"
import { PanelLeftIcon } from "lucide-react"

import { Button } from "../_shadcn/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../_shadcn/drawer"
import { PrimitivePreviewNav } from "../primitive-preview-nav"

export function PreviewMobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Open components navigation"
          className="primitive-preview-nav-shell primitive-preview-mobile-nav-trigger"
        >
          <PanelLeftIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="primitive-preview-nav-shell primitive-preview-drawer-content">
        <DrawerHeader className="sr-only">
          <DrawerTitle>Components navigation</DrawerTitle>
          <DrawerDescription>
            Select a component preview from the bottom sheet navigation.
          </DrawerDescription>
        </DrawerHeader>
        <PrimitivePreviewNav onSelect={() => setOpen(false)} />
      </DrawerContent>
    </Drawer>
  )
}
