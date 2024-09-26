import React from "react";
import { ButtonProps } from "../Button";
interface ButtonGroupProps {
    items: ButtonProps[];
}
declare const ButtonGroup: (props: ButtonGroupProps) => React.JSX.Element;
export default ButtonGroup;
