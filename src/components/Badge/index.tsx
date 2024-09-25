import React from "react"

interface BadgeProps {
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  children: React.ReactNode
  isRounded: boolean
  isLabel: boolean
  classes?: string

}

const Badge = ({ color, children, isRounded, isLabel, classes }: BadgeProps) => {
  return (
    <span className={`badge
      ${isRounded ? 'rounded-pill' : ''}
      ${isLabel ? 'bg-label-' + color : 'bg-' + color}
      ${classes}
      `}>{children}</span>
  )
}
export default Badge