import * as React from "react"

function ButtonLoadingIndicator({
  onPrimary,
}: {
  onPrimary: boolean
}) {
  const clipPathId = React.useId().replace(/:/g, "")
  const gradient = onPrimary
    ? "conic-gradient(from 90deg, rgba(211, 224, 255, 0.7576) 0deg, rgba(255, 255, 255, 1) 86.4deg, rgba(77, 131, 255, 0) 90deg, rgba(211, 224, 255, 0.7576) 360deg)"
    : "conic-gradient(from 90deg, rgba(119, 160, 255, 0.7576) 0deg, rgba(76, 130, 255, 1) 86.4deg, rgba(255, 255, 255, 0) 90deg, rgba(119, 160, 255, 0.7576) 360deg)"
  const xhtmlDivProps = {
    xmlns: "http://www.w3.org/1999/xhtml",
  } as React.HTMLAttributes<HTMLDivElement> & { xmlns: string }

  return (
    <span
      aria-hidden
      className="inline-flex size-5 shrink-0 animate-spin items-center justify-center [animation-duration:1s] [animation-timing-function:linear] [animation-iteration-count:infinite]"
    >
      <svg
        className="size-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(#${clipPathId})`}>
          <g transform="matrix(0.008125 0 0 0.008125 10 10)">
            <foreignObject x={-1000} y={-1000} width={2000} height={2000}>
              <div
                {...xhtmlDivProps}
                style={{
                  background: gradient,
                  width: "100%",
                  height: "100%",
                  opacity: 1,
                }}
              />
            </foreignObject>
          </g>
        </g>
        <defs>
          <clipPath id={clipPathId}>
            <path d="M10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10C1.875 5.51269 5.51269 1.875 10 1.875ZM10 4.375C6.8934 4.375 4.375 6.8934 4.375 10C4.375 13.1066 6.8934 15.625 10 15.625C13.1066 15.625 15.625 13.1066 15.625 10C15.625 6.8934 13.1066 4.375 10 4.375Z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  )
}

export { ButtonLoadingIndicator }
