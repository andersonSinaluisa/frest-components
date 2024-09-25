import React from 'react';
import Button from '../Button';
const Dropdown = (props) => {
    const [open, setOpen] = React.useState(false);
    const directions = {
        'up': 'dropup',
        'right': 'dropend',
        'left': 'dropstart',
        'down': '',
    };
    const handleClick = (e) => {
        setOpen(!open);
        props.button.onClick && props.button.onClick(e);
    };
    return (React.createElement("div", { className: "btn-group " },
        React.createElement(Button, { ...props.button, onClick: handleClick, "data-bs-toggle": "dropdown", "aria-expanded": "false" },
            props.button.children,
            props.isWithIcon ? null : open ?
                React.createElement("i", { className: "fas fa-chevron-up px-2" })
                :
                    React.createElement("i", { className: "fas fa-chevron-down px-2" })),
        React.createElement("ul", { className: `dropdown-menu ${open ? 'show mt-5' : ''}` }, props.items.map((item, index) => {
            return (item.isDivider ?
                React.createElement("li", { key: index },
                    React.createElement("hr", { className: "dropdown-divider" }))
                :
                    React.createElement("li", { key: index },
                        React.createElement("a", { className: "dropdown-item", href: "javascript:void(0);", onClick: item.onClick }, item.children)));
        }))));
};
export default Dropdown;
