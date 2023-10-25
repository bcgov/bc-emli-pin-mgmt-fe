import {
  useState,
  useEffect,
  useMemo,
  useContext,
} from 'react'
import styles from './AccessList.module.css';
import { AccessContext } from '../../../context/accessContext/AccessState'
import Table from '../../Table';


export default function AccessList() {
  const { setRowSelected, requestList, tabSelected } = useContext(AccessContext)
  const showSelectBox = tabSelected === 'pending'
  const columnsList = [
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
      accessor: 'givenName',
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
      Cell: props => {
        const email = props.value.split('@')
        return `${email[0]+' @'+email[1]}`
      }
    },
    {
      Header: 'Access status',
      accessor: 'requestStatus',
      width: 20,
      Cell: props => {
        const statusStyle = props.value === 'Granted' ?
          styles.granted : (props.value === 'Denied' ? styles.rejected : '')
        return <span className={statusStyle}>{props.value}</span>
      }

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
  ]

  if(tabSelected === 'completed' ) {
    columnsList.push ({
      Header: 'Reason for  access rejection',
      accessor: 'rejectionReason',
      width: 20,
    })
  }
  const columns = useMemo(() => columnsList, [])
  const initialState = { hiddenColumns: ['requestId'] };


    return (
      <div className={styles.requestTable}>
        <Table
          columns={columns}
          data={requestList}
          initialState={initialState}
          setSelectedRows={setRowSelected}
          showSelectBox={showSelectBox}
        />
      </div>
    )
}
