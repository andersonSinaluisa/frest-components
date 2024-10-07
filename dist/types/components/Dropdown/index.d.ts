import React from 'react';
import { ButtonProps } from '../Button';
interface DropdownProps {
    items: {
        children: React.ReactNode;
        onClick: () => void;
        isDivider?: boolean;
    }[];
    button: ButtonProps;
    isWithIcon?: boolean;
    direction: 'up' | 'left' | 'rigth' | 'down';
}
declare const Dropdown: (props: DropdownProps) => React.JSX.Element;
export default Dropdown;
