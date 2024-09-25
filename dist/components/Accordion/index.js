import React from 'react';
const Accordion = (props) => {
    const [active, setActive] = React.useState(0);
    return (React.createElement("div", { className: "accordion mt-3 accordion-header-primary", id: props.id || "accordionWithIcon" }, props.items.map((e, index) => (React.createElement("div", { className: `card accordion-item ${active === index ? 'active' : ''}`, key: index },
        React.createElement("h2", { className: "accordion-header d-flex align-items-center" },
            React.createElement("button", { type: "button", className: "accordion-button", onClick: () => setActive(index) },
                e.icon && e.icon(),
                e.title)),
        React.createElement("div", { id: "accordionWithIcon-1", className: `accordion-collapse collapse 
            ${active === index ? 'show' : ''}`, "data-bs-parent": "#accordionWithIcon" },
            React.createElement("div", { className: "accordion-body" }, e.render())))))));
};
export default Accordion;
