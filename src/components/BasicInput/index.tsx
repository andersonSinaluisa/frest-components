import React from "react";

interface BasicInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  type: string;
  error?: string;
  helpText: string;

}

const BasicInput = (props: BasicInputProps) => {

  return (
    <div>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input type={props.type} className={"form-control " + props.className} id={props.id}
        placeholder={props.placeholder} aria-describedby="defaultFormControlHelp" />
      <div id="defaultFormControlHelp" className="form-text">
        {props.helpText}
      </div>
      <div className="invalid-feedback text-danger">
        {props.error}
      </div>
    </div>
  )
}

export default BasicInput;