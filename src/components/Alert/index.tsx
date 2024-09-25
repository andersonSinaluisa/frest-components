
import React from 'react'

interface AlertProps {
  title: string
  message: string
  isCloseable: boolean
  onClose: () => void
  icon: React.ReactNode
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  isSolid: boolean
}
const Alert = ({ title, message, isCloseable, onClose, icon, isSolid, color }: AlertProps) => {

  const [show, setShow] = React.useState(true)


  const handleClose = () => {
    setShow(false)
    onClose()
  }

  return (
    <div className={`alert 
      ${isSolid ? `alert-solid-${color}` : `alert-${color}`}
      alert-dismissible 
      ${show ? 'd-block' : 'd-none'}
      `}
      role="alert">
      <h6 className="alert-heading mb-1">
        {icon}
        {title}
      </h6>
      {message}
      {
        isCloseable && (
          <button type="button" className="btn-close" onClick={handleClose}></button>
        )
      }
    </div>
  )
}


export default Alert