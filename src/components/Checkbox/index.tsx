import React from "react";


interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

const Checkbox = (props: CheckboxProps) => {
  
  return (
    <div className={"form-check mt-3 form-check-" + props.color}>
      <input className={"form-check-input"}
        {...props}
      />
      <label className="form-check-label" htmlFor={props.id}> {props.label} </label>
    </div>
  )
}

export default Checkbox;