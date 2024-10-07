import React from "react";


interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  onShowPassword?: () => void;
  showPassword?: boolean;
  error?:string
}

const PasswordInput = ({
  text,
  onShowPassword,
  showPassword,
  ...props
}: PasswordInputProps) => {
  const [_showPassword, setShowPassword] = React.useState(showPassword || false);

  const _onShowPassword = () => {
    setShowPassword(!_showPassword);
    onShowPassword && onShowPassword();
  }
  return (
    <div className="form-password-toggle">
      <label className="form-label" htmlFor={props.id}>
        {text}
      </label>
      <div className="input-group">
        <input type={
          _showPassword ? 'text' : 'password'
        } className="form-control" {...props} />
        <span id="basic-default-password2" className={`input-group-text cursor-pointer ${props.error?"is-invalid":""}`} onClick={_onShowPassword}>
          {
            _showPassword ? (
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