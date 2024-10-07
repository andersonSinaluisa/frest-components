import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
export interface NavbarProps {
    isSearchable: boolean;
    onSearch?: (text: string) => void;
    optionsMenuProfile: {
        children: React.ReactNode;
        onClick: () => void;
        isDivider?: boolean;
    }[];
    notification: ItemsNotification[];
    title: string;
    viewMoreText: string;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}
export interface ItemsNotification {
    leftIcon: React.ReactNode;
    title: string;
    subtitle: string;
    time: string;
    isNew: boolean;
}
declare const Navbar: (props: NavbarProps) => React.JSX.Element;
export default Navbar;
