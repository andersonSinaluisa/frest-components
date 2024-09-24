import React from "react";

interface BasicTextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const BasicTextArea = (props: BasicTextAreaProps) => {

  return (
    <div>
      <label
        htmlFor={props.id}
        className="form-label">
        {props.label}
      </label>
      <textarea className="form-control"
        id={props.id} rows={3}
        {...props}
      ></textarea>
    </div>
  )
}

export default BasicTextArea;