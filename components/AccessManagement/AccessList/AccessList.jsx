/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import {
  useState,
  useEffect,
  useMemo,
  useContext,
  forwardRef,
  useRef,
} from 'react'
import { useTable, useSortBy, useRowSelect } from 'react-table'
import styles from './AccessList.module.css';
import Content from '../../../assets/content/content.json'
import { AccessContext } from '../../../context/accessContext/AccessState'


export default function AccessList() {
  const { setRowSelected } = useContext(AccessContext)
  const [data, setData] = useState([])
  const columns = useMemo(() => [
    {
      Header: 'Request Id',
      accessor: 'requestId',
      show: false,
    },
    {
      Header: 'Username',
      accessor: 'userName',
      width: 150,
    },
    {
      Header: 'Identity type',
      accessor: 'identityType',
      width: 20,

    },
    {
      Header: 'First name',
      accessor: 'firstName',
      width: 20,

    },
    {
      Header: 'Last name',
      accessor: 'lastName',
      width: 20,
    },
    {
      Header: 'Organization',
      accessor: 'organization',
      width: 20,
    },
    {
      Header: 'Email',
      accessor: 'email',
      width: 20,
    },
    {
      Header: 'Access status',
      accessor: 'requestStatus',
      width: 20,

    },
    {
      Header: 'Role Type',
      accessor: 'requestedRole',
      width: 20,

    },
    {
      Header: 'Created at',
      accessor: 'createdAt',
      width: 20,

    },
    {
      Header: 'Reason for requesting access',
      accessor: 'requestReason',
      width: 20,

    }
  ], [])
  const initialState = { hiddenColumns: ['requestId'] };

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
    state: { selectedRowIds },
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
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
    )

  useEffect(() => {
    const result = [{
      requestId: '64d8d906-6e62-435f-9fc2-6e23fde91373',
      identityType: 'idir',
      requestedRole: 'Admin',
      organization: 'test',
      email: 'hzaman@deloitte.ca',
      userName: 'HZAMAN',
      firstName:'Habiba',
      lastName: 'Zaman',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-18 22:03:29.271 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    },
    {
      requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
      identityType: 'bceidbusiness',
      requestedRole: 'Standard',
      organization: 'Super Cool Definitely Real Business',
      email: 'alex.parker456@example.com',
      userName: 'AParker',
      firstName:'Alex Parker',
      lastName: '',
      requestStatus: 'NotGranted',
      createdAt: '2023-10-19 12:37:48.403 -0230',
      requestReason: 'test',
      rejectionReason: ''
    }
  ]

  setData(result);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let selectedRows=[]
    selectedFlatRows.map(row =>{
      selectedRows.push(row.original)
    })

    setRowSelected(selectedRows)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFlatRows]);



  const handleSubmitForm = () => {
    console.log('one modal')
  }
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
