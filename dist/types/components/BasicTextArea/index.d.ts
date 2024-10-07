import React from "react";
interface BasicTextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}
declare const BasicTextArea: ({ label, ...props }: BasicTextAreaProps) => React.JSX.Element;
export default BasicTextArea;
