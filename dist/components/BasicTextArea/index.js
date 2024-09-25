import React from "react";
const BasicTextArea = (props) => {
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: props.id, className: "form-label" }, props.label),
        React.createElement("textarea", { className: "form-control", id: props.id, rows: 3, ...props })));
};
export default BasicTextArea;
