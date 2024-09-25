import React from "react";
const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = React.useState(props.showPassword || false);
    const onShowPassword = () => {
        setShowPassword(!showPassword);
        props.onShowPassword && props.onShowPassword();
    };
    return (React.createElement("div", { className: "form-password-toggle" },
        React.createElement("label", { className: "form-label", htmlFor: props.id }, props.text),
        React.createElement("div", { className: "input-group" },
            React.createElement("input", { type: showPassword ? 'text' : 'password', className: "form-control", ...props }),
            React.createElement("span", { id: "basic-default-password2", className: "input-group-text cursor-pointer", onClick: onShowPassword }, showPassword ? (React.createElement("i", { className: "bx bx-hide" })) : (React.createElement("i", { className: "bx bx-show" }))))));
};
export default PasswordInput;
