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
declare function Table<T>(props: TableProps<T>): React.JSX.Element;
export default Table;
