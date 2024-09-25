import React from "react";
const InputGroup = (props) => {
    return (React.createElement("div", { className: "input-group" },
        React.createElement("span", { className: "input-group-text", id: props.id }, props.text),
        React.createElement("input", { type: "text", className: "form-control", "aria-describedby": props.id, ...props })));
};
export default InputGroup;
