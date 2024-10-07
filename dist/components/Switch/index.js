import React from "react";
const Switch = (props) => {
    return (React.createElement("label", { className: `switch switch-${props.color} ${props.isSquared ? "switch-square" : ""} 
   switch-${props.size_}
   ` },
        React.createElement("input", { type: "checkbox", className: "switch-input", ...props }),
        React.createElement("span", { className: "switch-toggle-slider" }, props.withIcon && React.createElement(React.Fragment, null,
            React.createElement("span", { className: "switch-on" }, props.positiveIcon),
            React.createElement("span", { className: "switch-off" }, props.negativeIcon))),
        React.createElement("span", { className: "switch-label" }, "Success")));
};
export default Switch;
