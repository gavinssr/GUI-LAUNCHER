import { notFound } from "next/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { getPrimitivePreviewById, primitivePreviewIds } from "../registry"

type PrimitivePreviewDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return primitivePreviewIds.map((id) => ({ id }))
}

export default async function PrimitivePreviewDetailPage({
  params,
}: PrimitivePreviewDetailPageProps) {
  const { id } = await params
  const item = getPrimitivePreviewById(id)

  if (!item) {
    notFound()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>{item.render()}</CardContent>
    </Card>
  )
}
