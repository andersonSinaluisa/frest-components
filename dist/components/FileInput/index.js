import React from "react";
const FileInput = (props) => {
    return (React.createElement("div", { className: "mb-3" },
        React.createElement("label", { htmlFor: "formFile", className: "form-label" }, props.label),
        React.createElement("input", { className: "form-control", type: "file", ...props }),
        React.createElement("div", { className: "form-text" }, props.helpText),
        React.createElement("div", { className: "invalid-feedback text-danger" }, props.error)));
};
export default FileInput;
