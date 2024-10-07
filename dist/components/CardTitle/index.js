import React from "react";
const CardTitle = (props) => {
    return (React.createElement("div", { className: "card-title" + (props.classes ? " " + props.classes : "") }, props.children));
};
export default CardTitle;
