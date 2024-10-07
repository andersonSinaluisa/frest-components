import React from "react";

interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  type: string;
  error?: string;
  helpText: string;

}

const BasicInput = ({label, placeholder, type, error, helpText, ...rest}: BasicInputProps) => {



  return (
    <div>
      <label htmlFor={rest.id} className="form-label">
        {label}
      </label>
      <input 
        {...rest}
        type={type} className={`form-control  ${rest.className} ${error?"is-invalid":""}`} 
        placeholder={placeholder} 
        />
      {
        error ?
          <div className=" text-danger">
            {error}
          </div>
          : <div id="defaultFormControlHelp" className="form-text">
            {helpText}
          </div>
      }


    </div>
  )
}

export default BasicInput;