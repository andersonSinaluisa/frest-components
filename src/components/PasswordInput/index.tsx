import React from "react";


interface PasswordInputProps extends React.HTMLAttributes<HTMLInputElement> {
  text: string;
  onShowPassword?: () => void;
  showPassword?: boolean;
}

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <div className="form-password-toggle">
      <label className="form-label" htmlFor={props.id}>
        {props.text}
      </label>
      <div className="input-group">
        <input type={
          props.showPassword ? 'text' : 'password'
        } className="form-control" {...props} />
        <span id="basic-default-password2" className="input-group-text cursor-pointer">
          {
            props.showPassword ? (
              <i className="bx bx-hide" onClick={props.onShowPassword}></i>
            ) : (
              <i className="bx bx-show" onClick={props.onShowPassword}></i>
            )
          }
        </span>
      </div>
    </div>
  )
}

export default PasswordInput;