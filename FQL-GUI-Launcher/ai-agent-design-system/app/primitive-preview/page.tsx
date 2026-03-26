import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { primitivePreviewRegistry } from "./registry"

export default function PrimitivePreviewPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Primitive Preview
          </h1>
          <p className="text-sm text-muted-foreground">
            该页面用于验收 `components/ui/*`。后续新增 primitive 组件，必须同步追加到
            registry 才算完成交付。
          </p>
        </header>

        <div className="grid gap-4">
          {primitivePreviewRegistry.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>{item.render()}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
