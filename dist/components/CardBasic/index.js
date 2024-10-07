import React from "react";
const CardBasic = (props) => {
    return (React.createElement("div", { className: "col-md-6 col-lg-4 mb-3" },
        React.createElement("div", { className: "card h-100" },
            React.createElement("img", { className: "card-img-top", src: props.src, alt: "Card image cap" }),
            React.createElement("div", { className: "card-body" },
                React.createElement("h5", { className: "card-title" }, props.title),
                React.createElement("p", { className: "card-text" }, props.text),
                props.haveAction && (React.createElement("a", { href: "javascript:void(0)", className: `btn ${props.isOutline ? `btn-outline-${props.colorAction}` : `btn-${props.colorAction}`}`, onClick: props.onClick }, props.actionText))))));
};
export default CardBasic;
