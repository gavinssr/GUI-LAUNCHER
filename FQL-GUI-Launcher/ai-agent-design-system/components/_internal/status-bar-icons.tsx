import * as React from "react"

import { cn } from "../../lib/utils"

type StatusBarIconForeground = "dark" | "light"

type IconProps = React.ComponentProps<"svg"> & {
  foreground?: StatusBarIconForeground
}

function iconClassName(className?: string) {
  return cn("shrink-0", className)
}

function iconFill(foreground: StatusBarIconForeground) {
  return foreground === "light" ? "#FFFFFF" : "#000000"
}

function StatusBarCellularIcon({
  className,
  foreground = "dark",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 17 11"
      fill="none"
      aria-hidden="true"
      className={iconClassName(className)}
      {...props}
    >
      <path
        d="M2 6.875C2.55228 6.875 3 7.33671 3 7.90625V9.96875C3 10.5383 2.55228 11 2 11H1C0.447715 11 0 10.5383 0 9.96875V7.90625C0 7.33671 0.447715 6.875 1 6.875H2ZM6.66699 4.8125C7.21913 4.81268 7.66699 5.27432 7.66699 5.84375V9.96875C7.66699 10.5382 7.21913 10.9998 6.66699 11H5.66699C5.11471 11 4.66699 10.5383 4.66699 9.96875V5.84375C4.66699 5.27421 5.11471 4.8125 5.66699 4.8125H6.66699ZM11.333 2.40625C11.8853 2.40625 12.333 2.86796 12.333 3.4375V9.96875C12.333 10.5383 11.8853 11 11.333 11H10.333C9.78087 10.9998 9.33301 10.5382 9.33301 9.96875V3.4375C9.33301 2.86807 9.78087 2.40643 10.333 2.40625H11.333ZM16 0C16.5523 0 17 0.461706 17 1.03125V9.96875C17 10.5383 16.5523 11 16 11H15C14.4477 11 14 10.5383 14 9.96875V1.03125C14 0.461706 14.4477 0 15 0H16Z"
        fill={iconFill(foreground)}
      />
    </svg>
  )
}

function StatusBarWifiIcon({
  className,
  foreground = "dark",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 15 11"
      fill="none"
      aria-hidden="true"
      className={iconClassName(className)}
      {...props}
    >
      <path
        d="M5.33008 8.42669C6.58291 7.34442 8.41808 7.34442 9.6709 8.42669C9.73384 8.4849 9.77073 8.56752 9.77247 8.65423C9.77409 8.74081 9.74018 8.824 9.67969 8.8847L7.71778 10.9072C7.66029 10.9664 7.58171 10.9999 7.5 10.9999C7.41835 10.9998 7.33964 10.9665 7.28223 10.9072L5.32032 8.8847C5.26004 8.82399 5.22686 8.74067 5.22852 8.65423C5.23032 8.56748 5.26705 8.48485 5.33008 8.42669ZM2.71192 5.72942C5.4111 3.16501 9.59183 3.16501 12.291 5.72942C12.3518 5.78954 12.3868 5.87249 12.3877 5.95891C12.3884 6.04527 12.3545 6.12811 12.2949 6.18938L11.1611 7.36028C11.0443 7.47956 10.8552 7.48143 10.7354 7.36516C9.84904 6.54563 8.6956 6.09165 7.5 6.09173C6.3053 6.09234 5.15323 6.5462 4.26758 7.36516C4.14774 7.48146 3.95868 7.47965 3.8418 7.36028L2.70801 6.18938C2.64836 6.1282 2.61553 6.04525 2.61622 5.95891C2.61701 5.87251 2.65116 5.78953 2.71192 5.72942ZM0.0947315 3.03899C4.23459 -1.01302 10.7654 -1.01297 14.9053 3.03899C14.9652 3.09919 14.9995 3.18166 15 3.26751C15.0004 3.35327 14.9674 3.43614 14.9082 3.497L13.7725 4.66692C13.6555 4.78679 13.4664 4.78799 13.3477 4.66985C11.7704 3.13826 9.67638 2.28421 7.5 2.28411C5.32374 2.28421 3.23069 3.13849 1.65333 4.66985C1.53467 4.78823 1.34446 4.78706 1.22754 4.66692L0.0918018 3.497C0.0326847 3.43612 -0.000465493 3.35324 4.93949e-06 3.26751C0.000557927 3.18166 0.0347619 3.09915 0.0947315 3.03899Z"
        fill={iconFill(foreground)}
      />
    </svg>
  )
}

function StatusBarBatteryIcon({
  className,
  foreground = "dark",
  ...props
}: IconProps) {
  const clipPathId = React.useId()

  return (
    <svg
      viewBox="0 0 25 12"
      fill="none"
      aria-hidden="true"
      className={iconClassName(className)}
      {...props}
    >
      <g clipPath={`url(#${clipPathId})`}>
        <g opacity="0.4">
          <path
            d="M19.333 10.333V11.333H2.66699V10.333H19.333ZM21 8.66699V2.66699C21 1.74652 20.2535 1 19.333 1H2.66699C1.74652 1 1 1.74652 1 2.66699V8.66699C1.00018 9.58732 1.74663 10.333 2.66699 10.333V11.333L2.39355 11.3193C1.13878 11.1917 0.141165 10.1943 0.0136719 8.93945L0 8.66699V2.66699C0 1.28643 1.04909 0.150438 2.39355 0.0136719L2.66699 0H19.333C20.8058 0 22 1.19423 22 2.66699V8.66699L21.9863 8.93945C21.8497 10.2841 20.7137 11.333 19.333 11.333V10.333C20.2534 10.333 20.9998 9.58732 21 8.66699Z"
            fill={iconFill(foreground)}
          />
          <path
            d="M23 3.66667V7.66667C23.8047 7.32789 24.328 6.5398 24.328 5.66667C24.328 4.79353 23.8047 4.00544 23 3.66667Z"
            fill={iconFill(foreground)}
          />
        </g>
        <rect
          x="2"
          y="2"
          width="18"
          height="7.33333"
          rx="1.33333"
          fill={iconFill(foreground)}
        />
      </g>
      <defs>
        <clipPath id={clipPathId}>
          <rect width="24.328" height="11.3333" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export {
  StatusBarBatteryIcon,
  StatusBarCellularIcon,
  StatusBarWifiIcon,
}
