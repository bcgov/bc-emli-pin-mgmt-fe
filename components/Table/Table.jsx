/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import {
  useEffect,
  forwardRef,
  useRef,
} from 'react'
import { useTable, useSortBy, useRowSelect } from 'react-table'
import styles from './Table.module.css';


export default function Table(props) {
  const {
    columns,
    data,
    initialState,
    setSelectedRows,
    showSelectBox,
  } = props

  const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef()
      const resolvedRef = ref || defaultRef

      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
  )


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    { columns, data, initialState},
    useSortBy,
    useRowSelect,
    hooks =>{
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: showSelectBox ?  ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ) : '',
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: showSelectBox ? ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ): '',
        },
        ...columns,
      ])
    }
    )

  useEffect(() => {
    let selectedRows=[]
    selectedFlatRows.map(row =>{
      selectedRows.push(row.original)
    })

    setSelectedRows(selectedRows)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFlatRows]);

    return (
      <div className={`${styles.tblSection}`}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                        return (
                            <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        );
                    })}
                </tr>
                  );
              })}
          </tbody>
        </table>
      </div>
    )
}
