import React from "react"
import Button, { ButtonProps } from "../Button"

interface ButtonGroupProps {
  items: ButtonProps[]

}

const ButtonGroup = (props: ButtonGroupProps) => {

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {
        props.items.map((item, index) => {
          return (
            <Button
              key={index}
              {...item}
            >
              {item.children}
            </Button>
          )
        })
      }
    </div>
  )

}

export default ButtonGroup