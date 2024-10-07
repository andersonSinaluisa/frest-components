import React from "react";
const PasswordInput = ({ text, onShowPassword, showPassword, ...props }) => {
    const [_showPassword, setShowPassword] = React.useState(showPassword || false);
    const _onShowPassword = () => {
        setShowPassword(!_showPassword);
        onShowPassword && onShowPassword();
    };
    return (React.createElement("div", { className: "form-password-toggle" },
        React.createElement("label", { className: "form-label", htmlFor: props.id }, text),
        React.createElement("div", { className: "input-group" },
            React.createElement("input", { type: _showPassword ? 'text' : 'password', className: "form-control", ...props }),
            React.createElement("span", { id: "basic-default-password2", className: `input-group-text cursor-pointer ${props.error ? "is-invalid" : ""}`, onClick: _onShowPassword }, _showPassword ? (React.createElement("i", { className: "bx bx-hide" })) : (React.createElement("i", { className: "bx bx-show" })))),
        props.error &&
            React.createElement("div", { className: " text-danger" }, props.error)));
};
export default PasswordInput;
