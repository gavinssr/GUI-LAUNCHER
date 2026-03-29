import type { ReactNode } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { PrimitivePreviewNav } from "./primitive-preview-nav"

export default function PrimitivePreviewLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Primitive Preview
          </h1>
          <p className="max-w-3xl text-sm text-muted-foreground">
            该页面用于验收 `components/ui/*`。导航与展示内容均来自
            `primitivePreviewRegistry`，后续新增或删除 primitive 时，只需同步维护
            registry。
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Card className="h-fit lg:sticky lg:top-6">
            <CardHeader>
              <CardTitle>Primitive 目录</CardTitle>
            </CardHeader>
            <CardContent>
              <PrimitivePreviewNav />
            </CardContent>
          </Card>

          <div>{children}</div>
        </div>
      </div>
    </main>
  )
}
