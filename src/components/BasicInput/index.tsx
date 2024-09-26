import React from "react";

interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
      <input type={props.type} className={`form-control  ${props.className} ${props.error?"is-invalid":""}`} id={props.id}
        placeholder={props.placeholder} aria-describedby="defaultFormControlHelp" />
      {
        props.error ?
          <div className=" text-danger">
            {props.error}
          </div>
          : <div id="defaultFormControlHelp" className="form-text">
            {props.helpText}
          </div>
      }


    </div>
  )
}

export default BasicInput;