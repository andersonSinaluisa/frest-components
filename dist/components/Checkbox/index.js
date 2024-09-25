import React from "react";
const Checkbox = (props) => {
    return (React.createElement("div", { className: "form-check mt-3 form-check-" + props.color },
        React.createElement("input", { className: "form-check-input", ...props }),
        React.createElement("label", { className: "form-check-label", htmlFor: props.id },
            " ",
            props.label,
            " ")));
};
export default Checkbox;
