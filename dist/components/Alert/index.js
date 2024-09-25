import React from 'react';
const Alert = ({ title, message, isCloseable, onClose, icon, isSolid, color }) => {
    const [show, setShow] = React.useState(true);
    const handleClose = () => {
        setShow(false);
        onClose();
    };
    return (React.createElement("div", { className: `alert 
      ${isSolid ? `alert-solid-${color}` : `alert-${color}`}
      alert-dismissible 
      ${show ? 'd-block' : 'd-none'}
      `, role: "alert" },
        React.createElement("h6", { className: "alert-heading mb-1" },
            icon,
            title),
        message,
        isCloseable && (React.createElement("button", { type: "button", className: "btn-close", onClick: handleClose }))));
};
export default Alert;
