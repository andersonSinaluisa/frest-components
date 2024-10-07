import React from "react";
interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    type: string;
    error?: string;
    helpText: string;
}
declare const BasicInput: ({ label, placeholder, type, error, helpText, ...rest }: BasicInputProps) => React.JSX.Element;
export default BasicInput;
