import React from "react";
const CardBody = (props) => (React.createElement("div", { className: "card-body" + (props.classes ? " " + props.classes : "") }, props.children));
export default CardBody;
