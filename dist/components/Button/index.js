import React from 'react';
const Button = (props) => {
    const { children, color, isOutline, isRounded, isLabel, ...rest } = props;
    return (React.createElement("button", { className: `btn ${props.isOutline ? `btn-outline-${props.color}` :
            props.isLabel ? `btn-label-${props.color}` : `btn-${props.color}`}
      ${props.isRounded ? 'rounded-pill' : ''}`, ...rest }, props.children));
};
export default Button;
