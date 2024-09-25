import React from "react";
function Table(props) {
    return (React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card-header border-bottom" },
            React.createElement("div", { className: "d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0" }, props.isFilterable &&
                props.filters.map((filter) => {
                    return (React.createElement("div", { className: "col-md-4" }, filter.render && filter.render()));
                }))),
        React.createElement("div", { className: "card-datatable table-responsive pt-0" },
            React.createElement("div", { className: "dataTables_wrapper dt-bootstrap5 no-footer" },
                React.createElement("div", { className: "row mx-2" },
                    props.isLimitable ? (React.createElement("div", { className: "col-md-2" },
                        React.createElement("div", { className: "me-3" },
                            React.createElement("div", { className: "dataTables_length", id: "DataTables_Table_0_length" },
                                React.createElement("label", null,
                                    React.createElement("select", { name: "DataTables_Table_0_length", "aria-controls": "DataTables_Table_0", className: "form-select", onChange: (e) => props.onChangeLimit &&
                                            props.onChangeLimit(Number(e.target.value)) }, props.limits.map((limit) => (React.createElement("option", { value: limit }, limit))))))))) : (React.createElement("div", { className: "col-md-2" })),
                    React.createElement("div", { className: "col-md-10" },
                        React.createElement("div", { className: "dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0" },
                            React.createElement("div", { id: "DataTables_Table_0_filter", className: "dataTables_filter" },
                                React.createElement("label", null,
                                    React.createElement("input", { type: "search", className: "form-control", placeholder: "Search..", "aria-controls": "DataTables_Table_0" }))),
                            React.createElement("div", { className: "dt-buttons" },
                                " ",
                                React.createElement("button", { className: "dt-button buttons-collection dropdown-toggle btn btn-label-secondary mx-3", tabIndex: 0, "aria-controls": "DataTables_Table_0", type: "button", "aria-haspopup": "dialog", "aria-expanded": "false" },
                                    React.createElement("span", null,
                                        React.createElement("i", { className: "bx bx-export me-1" }),
                                        "Export"),
                                    React.createElement("span", { className: "dt-down-arrow" }, "\u25BC")),
                                " ",
                                React.createElement("button", { className: "dt-button add-new btn btn-primary ms-n1", tabIndex: 0, "aria-controls": "DataTables_Table_0", type: "button", "data-bs-toggle": "offcanvas", "data-bs-target": "#offcanvasAddUser" },
                                    React.createElement("span", null,
                                        React.createElement("i", { className: "bx bx-plus me-0 me-lg-2" }),
                                        React.createElement("span", { className: "d-none d-lg-inline-block" }, "Add New User"))),
                                " ")))),
                React.createElement("table", { className: "datatables-basic table table-bordered dataTable no-footer dtr-column collapsed" },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            props.isSelectable && (React.createElement("th", { className: "sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" },
                                React.createElement("input", { type: "checkbox", className: "dt-checkboxes form-check-input" }))),
                            props.columns.map((column) => {
                                return (React.createElement("th", { className: `${props.isSortable ? "sorting" : ""}`, key: column.key, onClick: () => props.onSort && props.onSort(column.key) }, column.title));
                            }))),
                    React.createElement("tbody", null, props.data.map((data, index) => {
                        return (React.createElement("tr", { className: "odd", key: index + "_row" },
                            props.isSelectable && (React.createElement("td", { className: "dt-checkboxes-cell" },
                                React.createElement("input", { type: "checkbox", className: "dt-checkboxes form-check-input" }))),
                            props.columns.map((column) => {
                                return (React.createElement("td", { key: column.key }, column.render
                                    ? column.render(data)
                                    : data[column.key]));
                            })));
                    }))),
                props.totalPage && (React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-sm-12 col-md-6" },
                        React.createElement("div", { className: "dataTables_info", id: "DataTables_Table_0_info", role: "status", "aria-live": "polite" },
                            "Mostrando ",
                            props.from,
                            " a ",
                            props.to,
                            " de ",
                            props.total,
                            " registros")),
                    React.createElement("div", { className: "col-sm-12 col-md-6" },
                        React.createElement("div", { className: "dataTables_paginate paging_simple_numbers", id: "DataTables_Table_0_paginate" },
                            React.createElement("ul", { className: "pagination" },
                                React.createElement("li", { className: "paginate_button page-item previous disabled", id: "DataTables_Table_0_previous" },
                                    React.createElement("a", { "aria-controls": "DataTables_Table_0", "aria-disabled": "true", role: "link", "data-dt-idx": "previous", tabIndex: -1, className: "page-link" }, "Anterior")),
                                props.totalPage && props.totalPage > 10 ? (React.createElement(React.Fragment, null,
                                    Array.from({ length: 5 }, (_, i) => (React.createElement("li", { key: i, className: `paginate_button page-item
                          ${props.currentPage === i + 1 ? "active" : ""}
                        `, onClick: () => props.onPageChange && props.onPageChange(i + 1) },
                                        React.createElement("a", { href: "#", className: "page-link" }, i + 1)))),
                                    React.createElement("li", { className: "paginate_button page-item disabled" },
                                        React.createElement("span", { className: "page-link" }, "...")),
                                    Array.from({ length: 3 }, (_, i) => (React.createElement("li", { key: (props.totalPage || 0) - 2 + i, className: "paginate_button page-item", onClick: () => props.onPageChange &&
                                            props.onPageChange((props.totalPage || 0) - 2 + i) },
                                        React.createElement("a", { href: "#", className: "page-link" }, (props.totalPage || 0) - 2 + i)))))) : (Array.from({ length: props.totalPage || 0 }, (_, i) => (React.createElement("li", { key: i, className: "paginate_button page-item" },
                                    React.createElement("a", { href: "#", className: "page-link" }, i + 1))))),
                                React.createElement("li", { className: "paginate_button page-item previous disabled", id: "DataTables_Table_0_previous" },
                                    React.createElement("a", { "aria-controls": "DataTables_Table_0", "aria-disabled": "true", role: "link", "data-dt-idx": "previous", tabIndex: -1, className: "page-link" }, "Siguiente")))))))))));
}
export default Table;
