import React from "react";
interface CardBasicProps {
    src: string;
    title: string;
    text: string;
    haveAction: boolean;
    actionText: string;
    onClick: () => void;
    colorAction: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    isOutline: boolean;
}
declare const CardBasic: (props: CardBasicProps) => React.JSX.Element;
export default CardBasic;
