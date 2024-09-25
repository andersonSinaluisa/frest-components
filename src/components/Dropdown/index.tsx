import React from 'react'
import Button, { ButtonProps } from '../Button'

interface DropdownProps {
  items: {
    children: React.ReactNode
    onClick: () => void
    isDivider?: boolean
  }[]
  button: ButtonProps
  isWithIcon?: boolean
  direction: 'up' | 'left' | 'rigth' | 'down'

}
const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = React.useState(false)

  const directions = {
    'up': 'dropup',
    'right': 'dropend',
    'left': 'dropstart',
    'down': '',

  }
  const handleClick = (e) => {
    setOpen(!open)
    props.button.onClick && props.button.onClick(e)
  }
  return (
    <div className={"btn-group " + directions[props.direction]}>
      <Button
        {...props.button}
        onClick={handleClick}
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {props.button.children}
        {
          props.isWithIcon ? null : open ?
            <i className="fas fa-chevron-up px-2"></i>
            :
            <i className="fas fa-chevron-down px-2"></i>
        }

      </Button>
      <ul className={`dropdown-menu ${open ? 'show mt-5' : ''}`}>
        {
          props.items.map((item, index) => {
            return (
              item.isDivider ?
                <li key={index}>
                  <hr className="dropdown-divider" />
                </li>
                :
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    onClick={item.onClick}
                  >
                    {item.children}
                  </a>
                </li>
            )
          })
        }

      </ul>
    </div>
  )
}

export default Dropdown