import React from "react";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}
declare const Checkbox: (props: CheckboxProps) => React.JSX.Element;
export default Checkbox;
