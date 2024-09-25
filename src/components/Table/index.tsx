import React from "react";

interface TableProps<T> {
  data: T[];
  columns: {
    key: string;
    title: string;
    render?: (data: T) => React.ReactNode;
  }[];
  isSortable?: boolean;
  isFilterable?: boolean;
  isSelectable?: boolean;
  onSort?: (key: string) => void;
  from?: number;
  to?: number;
  total?: number;
  currentPage?: number;
  perPage?: number;
  onPageChange?: (page: number) => void;
  onPerPageChange?: (perPage: number) => void;
  onRowSelect?: (row: T) => void;
  totalPage?: number;
  labelSearch?: string;
  onSearch?: (search: string) => void;
  isSearchable?: boolean;
  filters: {
    key: string;
    title: string;
    render?: () => React.ReactNode;
  }[];
  onFilterChange?: (key: string, value: string) => void;
  onChangeLimit?: (limit: number) => void;
  limits: number[];
  isLimitable?: boolean;
}
function Table<T>(props: TableProps<T>) {
  return (
    <div className="card">
      <div className="card-header border-bottom">
        <div className="d-flex justify-content-between align-items-center row py-3 gap-3 gap-md-0">
          {props.isFilterable &&
            props.filters.map((filter) => {
              return (
                <div className="col-md-4">
                  {filter.render && filter.render()}
                </div>
              );
            })}
        </div>
      </div>
      <div className="card-datatable table-responsive pt-0">
        <div className="dataTables_wrapper dt-bootstrap5 no-footer">
          <div className="row mx-2">
            {props.isLimitable ? (
              <div className="col-md-2">
                <div className="me-3">
                  <div
                    className="dataTables_length"
                    id="DataTables_Table_0_length"
                  >
                    <label>
                      <select
                        name="DataTables_Table_0_length"
                        aria-controls="DataTables_Table_0"
                        className="form-select"
                        onChange={(e) =>
                          props.onChangeLimit &&
                          props.onChangeLimit(Number(e.target.value))
                        }
                      >
                        {props.limits.map((limit) => (
                          <option value={limit}>{limit}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-md-2"></div>
            )}

            <div className="col-md-10">
              <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                <div
                  id="DataTables_Table_0_filter"
                  className="dataTables_filter"
                >
                  <label>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search.."
                      aria-controls="DataTables_Table_0"
                    />
                  </label>
                </div>
                <div className="dt-buttons">
                  {" "}
                  <button
                    className="dt-button buttons-collection dropdown-toggle btn btn-label-secondary mx-3"
                    tabIndex={0}
                    aria-controls="DataTables_Table_0"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="bx bx-export me-1"></i>Export
                    </span>
                    <span className="dt-down-arrow">▼</span>
                  </button>{" "}
                  <button
                    className="dt-button add-new btn btn-primary ms-n1"
                    tabIndex={0}
                    aria-controls="DataTables_Table_0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasAddUser"
                  >
                    <span>
                      <i className="bx bx-plus me-0 me-lg-2"></i>
                      <span className="d-none d-lg-inline-block">
                        Add New User
                      </span>
                    </span>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          <table className="datatables-basic table table-bordered dataTable no-footer dtr-column collapsed">
            <thead>
              <tr>
                {props.isSelectable && (
                  <th className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all">
                    <input
                      type="checkbox"
                      className="dt-checkboxes form-check-input"
                    />
                  </th>
                )}
                {props.columns.map((column) => {
                  return (
                    <th
                      className={`${props.isSortable ? "sorting" : ""}`}
                      key={column.key}
                      onClick={() => props.onSort && props.onSort(column.key)}
                    >
                      {column.title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {props.data.map((data, index) => {
                return (
                  <tr className="odd" key={index + "_row"}>
                    {props.isSelectable && (
                      <td className="dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                    )}
                    {props.columns.map((column) => {
                      return (
                        <td key={column.key}>
                          {column.render
                            ? column.render(data)
                            : data[column.key as keyof typeof  data] as string}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {props.totalPage && (
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div
                  className="dataTables_info"
                  id="DataTables_Table_0_info"
                  role="status"
                  aria-live="polite"
                >
                  Mostrando {props.from} a {props.to} de {props.total} registros
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="DataTables_Table_0_paginate"
                >
                  <ul className="pagination">
                    <li
                      className="paginate_button page-item previous disabled"
                      id="DataTables_Table_0_previous"
                    >
                      <a
                        aria-controls="DataTables_Table_0"
                        aria-disabled="true"
                        role="link"
                        data-dt-idx="previous"
                        tabIndex={-1}
                        className="page-link"
                      >
                        Anterior
                      </a>
                    </li>
                    {props.totalPage && props.totalPage > 10 ? (
                      <>
                        {Array.from({ length: 5 }, (_, i) => (
                          <li
                            key={i}
                            className={`paginate_button page-item
                          ${props.currentPage === i + 1 ? "active" : ""}
                        `}
                            onClick={() =>
                              props.onPageChange && props.onPageChange(i + 1)
                            }
                          >
                            <a href="#" className="page-link">
                              {i + 1}
                            </a>
                          </li>
                        ))}
                        <li className="paginate_button page-item disabled">
                          <span className="page-link">...</span>
                        </li>
                        {Array.from({ length: 3 }, (_, i) => (
                          <li
                            key={(props.totalPage || 0) - 2 + i}
                            className="paginate_button page-item"
                            onClick={() =>
                              props.onPageChange &&
                              props.onPageChange((props.totalPage || 0) - 2 + i)
                            }
                          >
                            <a href="#" className="page-link">
                              {(props.totalPage || 0) - 2 + i}
                            </a>
                          </li>
                        ))}
                      </>
                    ) : (
                      Array.from({ length: props.totalPage || 0 }, (_, i) => (
                        <li key={i} className="paginate_button page-item">
                          <a href="#" className="page-link">
                            {i + 1}
                          </a>
                        </li>
                      ))
                    )}
                    <li
                      className="paginate_button page-item previous disabled"
                      id="DataTables_Table_0_previous"
                    >
                      <a
                        aria-controls="DataTables_Table_0"
                        aria-disabled="true"
                        role="link"
                        data-dt-idx="previous"
                        tabIndex={-1}
                        className="page-link"
                      >
                        Siguiente
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Table;
