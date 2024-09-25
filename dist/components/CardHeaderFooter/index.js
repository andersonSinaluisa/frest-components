import React from "react";
const CardHeaderFooter = (props) => {
    return (React.createElement("div", { className: "col-md-6 col-lg-4 mb-3" },
        React.createElement("div", { className: "card h-100" },
            React.createElement("div", { className: "card-body" },
                React.createElement("h5", { className: "card-title" }, props.title),
                React.createElement("h6", { className: "card-subtitle text-muted" }, props.subtitle)),
            React.createElement("img", { className: "img-fluid", src: props.src, alt: props.alt }),
            React.createElement("div", { className: "card-body" },
                React.createElement("p", { className: "card-text" }, props.footerText),
                React.createElement("div", { className: "d-flex  justify-content-between" }, props.actions.map((action, index) => (React.createElement("a", { key: index, href: "javascript:void(0)", className: `btn ${action.isOutline ? `btn-outline-${action.color}` : `btn-${action.color}`}`, onClick: action.onClick }, action.text))))))));
};
export default CardHeaderFooter;
