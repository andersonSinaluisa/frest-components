import React from "react";

interface BasicTextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const BasicTextArea = ({label,...props}: BasicTextAreaProps) => {

  return (
    <div>
      <label
        htmlFor={props.id}
        className="form-label">
        {label}
      </label>
      <textarea className="form-control"
        id={props.id} rows={3}
        {...props}
      ></textarea>
    </div>
  )
}

export default BasicTextArea;