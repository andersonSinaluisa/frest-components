import React from 'react';
const Sidebar = () => {
    return (React.createElement("aside", { id: "layout-menu", className: "layout-menu menu-vertical menu bg-menu-theme" },
        React.createElement("div", { className: "app-brand demo" },
            React.createElement("a", { href: "index.html", className: "app-brand-link" },
                React.createElement("span", { className: "app-brand-logo demo" }),
                React.createElement("span", { className: "app-brand-text demo menu-text fw-bold ms-2" }, "Frest")),
            React.createElement("a", { href: "javascript:void(0);", className: "layout-menu-toggle menu-link text-large ms-auto" },
                React.createElement("i", { className: "bx menu-toggle-icon d-none d-xl-block fs-4 align-middle" }),
                React.createElement("i", { className: "bx bx-x d-block d-xl-none bx-sm align-middle" }))),
        React.createElement("div", { className: "menu-divider mt-0" }),
        React.createElement("div", { className: "menu-inner-shadow" }),
        React.createElement("ul", { className: "menu-inner py-1" },
            React.createElement("li", { className: "menu-item active" },
                React.createElement("a", { href: "index.html", className: "menu-link" },
                    React.createElement("i", { className: "menu-icon tf-icons bx bx-home-circle" }),
                    React.createElement("div", { "data-i18n": "Page 1" }, "Page 1"))),
            React.createElement("li", { className: "menu-item" },
                React.createElement("a", { href: "page-2.html", className: "menu-link" },
                    React.createElement("i", { className: "menu-icon tf-icons bx bx-detail" }),
                    React.createElement("div", { "data-i18n": "Page 2" }, "Page 2"))))));
};
export default Sidebar;
