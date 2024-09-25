import React from "react";
import { ButtonProps } from "../Button";
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ButtonProps[];
}
declare const ButtonGroup: (props: ButtonGroupProps) => React.JSX.Element;
export default ButtonGroup;
