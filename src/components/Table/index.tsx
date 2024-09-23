import React from 'react'


interface TableProps<T> {
  data: T[]
  columns: {
    key: string
    title: string
    render?: (data: T) => React.ReactNode
  }[]
  isSortable?: boolean
  isFilterable?: boolean
}
function Table<T>(props: TableProps<T>) {
  return (<div className="card">
    <div className="card-datatable table-responsive pt-0">
      <table className="datatables-basic table table-bordered">
        <thead>
          <tr>
            {
              props.columns.map((column) => {
                return <th key={column.key}>{column.title}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((data, index) => {
              return <tr key={index}>
                {
                  props.columns.map((column) => {
                    return <td key={column.key}>{column.render ? column.render(data) : data[column.key]}</td>
                  })
                }
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </div>)
}
export default Table