import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isOutline?: boolean;
    isRounded?: boolean;
    isLabel?: boolean;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
