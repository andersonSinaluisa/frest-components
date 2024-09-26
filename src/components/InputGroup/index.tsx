import React from "react";


interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const InputGroup = (props: InputGroupProps) => {
  return (
    <div className="input-group">
      <span className="input-group-text" id={props.id}>
        {props.text}
      </span>
      <input type="text" className="form-control" aria-describedby={props.id} {...props} />
    </div>
  )
}

export default InputGroup;