import React from "react";
const Card = (props) => {
    return React.createElement("div", { className: "card mb-4" + (props.classes ? " " + props.classes : "") }, props.children);
};
export default Card;
