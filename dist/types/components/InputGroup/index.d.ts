import React from "react";
interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
}
declare const InputGroup: (props: InputGroupProps) => React.JSX.Element;
export default InputGroup;
