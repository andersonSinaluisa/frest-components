import React from 'react';
interface AlertProps {
    title: string;
    message: string;
    isCloseable: boolean;
    onClose: () => void;
    icon: React.ReactNode;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    isSolid: boolean;
}
declare const Alert: ({ title, message, isCloseable, onClose, icon, isSolid, color }: AlertProps) => React.JSX.Element;
export default Alert;
