import React from "react";
import Button from "../Button";
const ButtonGroup = (props) => {
    return (React.createElement("div", { className: "btn-group", role: "group", "aria-label": "Basic example" }, props.items.map((item, index) => {
        return (React.createElement(Button, { key: index, ...item }, item.children));
    })));
};
export default ButtonGroup;
