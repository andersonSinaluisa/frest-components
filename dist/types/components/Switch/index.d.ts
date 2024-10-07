import React, { InputHTMLAttributes } from "react";
interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    withIcon?: boolean;
    positiveIcon?: React.ReactNode;
    negativeIcon?: React.ReactNode;
    isSquared: boolean;
    size_?: 'lg' | 'sm' | 'default';
}
declare const Switch: (props: SwitchProps) => React.JSX.Element;
export default Switch;
