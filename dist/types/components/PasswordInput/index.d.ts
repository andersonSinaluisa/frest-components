import React from "react";
interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
    onShowPassword?: () => void;
    showPassword?: boolean;
    error?: string;
}
declare const PasswordInput: ({ text, onShowPassword, showPassword, ...props }: PasswordInputProps) => React.JSX.Element;
export default PasswordInput;
