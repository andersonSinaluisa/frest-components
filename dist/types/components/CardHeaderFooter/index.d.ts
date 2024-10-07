import React from "react";
interface CardHeaderFooterProps {
    src: string;
    title: string;
    alt: string;
    subtitle: string;
    footerText: string;
    actions: {
        text: string;
        onClick: () => void;
        color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
        isOutline: boolean;
    }[];
}
declare const CardHeaderFooter: (props: CardHeaderFooterProps) => React.JSX.Element;
export default CardHeaderFooter;
