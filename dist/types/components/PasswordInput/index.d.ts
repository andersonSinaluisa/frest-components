import React from "react";
interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
    onShowPassword?: () => void;
    showPassword?: boolean;
}
declare const PasswordInput: (props: PasswordInputProps) => React.JSX.Element;
export default PasswordInput;
