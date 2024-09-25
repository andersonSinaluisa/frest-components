import React from "react";
const Badge = ({ color, children, isRounded, isLabel, classes }) => {
    return (React.createElement("span", { className: `badge
      ${isRounded ? 'rounded-pill' : ''}
      ${isLabel ? 'bg-label-' + color : 'bg-' + color}
      ${classes}
      ` }, children));
};
export default Badge;
