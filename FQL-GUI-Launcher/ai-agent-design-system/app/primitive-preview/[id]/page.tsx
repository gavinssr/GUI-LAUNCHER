import { notFound } from "next/navigation"
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
    <section className="primitive-preview-detail-frame">
      <header className="primitive-preview-detail-header">
        <h2 className="primitive-preview-detail-title">{item.title}</h2>
        <p className="primitive-preview-detail-description">{item.description}</p>
      </header>
      <div className="primitive-preview-detail-body">{item.render()}</div>
    </section>
  )
}
