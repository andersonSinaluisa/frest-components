import React from "react";
const BasicInput = (props) => {
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: props.id, className: "form-label" }, props.label),
        React.createElement("input", { type: props.type, className: "form-control " + props.className, id: props.id, placeholder: props.placeholder, "aria-describedby": "defaultFormControlHelp" }),
        props.error ?
            React.createElement("div", { className: " text-danger" }, props.error)
            : React.createElement("div", { id: "defaultFormControlHelp", className: "form-text" }, props.helpText)));
};
export default BasicInput;
