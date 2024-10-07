import React from "react";
const BasicTextArea = ({ label, ...props }) => {
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: props.id, className: "form-label" }, label),
        React.createElement("textarea", { className: "form-control", id: props.id, rows: 3, ...props })));
};
export default BasicTextArea;
