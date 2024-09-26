import React from "react";


interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  onShowPassword?: () => void;
  showPassword?: boolean;
  error?:string
}

const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = React.useState(props.showPassword || false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
    props.onShowPassword && props.onShowPassword();
  }
  return (
    <div className="form-password-toggle">
      <label className="form-label" htmlFor={props.id}>
        {props.text}
      </label>
      <div className="input-group">
        <input type={
          showPassword ? 'text' : 'password'
        } className="form-control" {...props} />
        <span id="basic-default-password2" className={`input-group-text cursor-pointer ${props.error?"is-invalid":""}`} onClick={onShowPassword}>
          {
            showPassword ? (
              <i className="bx bx-hide"></i>
            ) : (
              <i className="bx bx-show"></i>
            )
          }
        </span>
      </div>
        {
        props.error &&
          <div className=" text-danger">
            {props.error}
          </div>
          
      }
    </div>
  )
}

export default PasswordInput;