import React from "react";
const BasicInput = ({ label, placeholder, type, error, helpText, ...rest }) => {
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: rest.id, className: "form-label" }, label),
        React.createElement("input", { type: type, className: `form-control  ${rest.className} ${error ? "is-invalid" : ""}`, placeholder: placeholder, ...rest }),
        error ?
            React.createElement("div", { className: " text-danger" }, error)
            : React.createElement("div", { id: "defaultFormControlHelp", className: "form-text" }, helpText)));
};
export default BasicInput;
