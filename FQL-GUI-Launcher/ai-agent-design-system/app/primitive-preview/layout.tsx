import type { ReactNode } from "react"

import "./preview.css"
import { PreviewMobileNav } from "./_internal/preview-mobile-nav"
import { PrimitivePreviewNav } from "./primitive-preview-nav"

export default function PrimitivePreviewLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <main className="primitive-preview-shell">
      <div className="primitive-preview-container">
        <header className="primitive-preview-header">
          <h1 className="primitive-preview-title">
            FenQiLe Components preview
          </h1>
          <PreviewMobileNav />
        </header>

        <div className="primitive-preview-layout">
          <aside className="primitive-preview-sidebar">
            <div className="primitive-preview-sidebar-card primitive-preview-nav-shell">
              <PrimitivePreviewNav />
            </div>
          </aside>

          <div className="primitive-preview-content">{children}</div>
        </div>
      </div>
    </main>
  )
}
