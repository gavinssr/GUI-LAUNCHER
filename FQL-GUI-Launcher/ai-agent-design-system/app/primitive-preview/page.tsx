import { redirect } from "next/navigation"

import { defaultPrimitivePreviewId } from "./registry"

export default function PrimitivePreviewPage() {
  if (defaultPrimitivePreviewId) {
    redirect(`/primitive-preview/${defaultPrimitivePreviewId}`)
  }

  return null
}
