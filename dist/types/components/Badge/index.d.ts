import React from "react";
interface BadgeProps {
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    children: React.ReactNode;
    isRounded: boolean;
    isLabel: boolean;
    classes?: string;
}
declare const Badge: ({ color, children, isRounded, isLabel, classes }: BadgeProps) => React.JSX.Element;
export default Badge;
