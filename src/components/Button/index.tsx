
import React from 'react'


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isOutline?: boolean
  isRounded?: boolean
  isLabel?: boolean
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
}
const Button = (props: ButtonProps) => {

  const {
    children,
    color,
    isOutline,
    isRounded,
    isLabel,
    ...rest } = props
  return (
    <button className={`btn ${props.isOutline ? `btn-outline-${props.color}` :
      props.isLabel ? `btn-label-${props.color}` : `btn-${props.color}`}
      ${props.isRounded ? 'rounded-pill' : ''}`}
      {...rest}
    >

      {props.children}

    </button>
  )
}

export default Button