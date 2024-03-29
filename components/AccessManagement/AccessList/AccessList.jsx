import {
  useMemo,
  useContext,
} from 'react'
import styles from './AccessList.module.css';
import { AccessContext } from '../../../context/accessContext/AccessState'
import Table from '../../Table';
import wrap from 'word-wrap'
import { getAccessStatusLabel, getRoleLabel } from '../../../utils/helper'
import contents from '../../../assets/content/content.json'
import { getLocalTime } from '../../../utils/helper';

export default function AccessList(role) {
  const { setRowSelected, requestList, tabSelected } = useContext(AccessContext)
  const showSelectBox = tabSelected === 'pending'
  const columnsList = [
    {
      Header: 'Request Id',
      accessor: 'requestId',
      show: false,
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
      Header: 'Username',
      accessor: 'userName',
      width: 150,
    },
    {
      Header: 'Reason for requesting access',
      accessor: 'requestReason',
      width: 20,

    },
    {
      Header: 'Request date',
      accessor: 'createdAt',
      width: 20,
      Cell: props => {
        return getLocalTime(props.value)
      }
    },
  ]

  if(tabSelected === 'completed' ) {
    columnsList.push ({
      Header: 'Access status',
      accessor: 'requestStatus',
      width: 20,
      Cell: props => {
        const statusStyle = props.value === 'Granted' ?
          styles.granted : (props.value === 'Rejected' ? styles.rejected : '')
        return <span className={statusStyle}>{getAccessStatusLabel(props.value)}</span>
      }
    })
    columnsList.push ({
      Header: 'Date of approval or rejection',
      accessor: 'updatedAt',
      width: 20,
      Cell: props => {
        return getLocalTime(props.value)
      }
    })
    columnsList.push ({
      Header: 'Reason for access rejection',
      accessor: 'rejectionReason',
      width: 20,
      Cell: props => {
        return <span>{props.value ? props.value : "Not applicable"}</span>
      }
    })
    columnsList.push ({
      Header: 'Approved or rejected by',
      accessor: 'updatedBy',
      width: 20,
    })
    columnsList.push({
      Header: 'Role',
      accessor: 'requestedRole',
      width: 20,
      Cell: props => {
        return <span>{getRoleLabel(props.value)}</span>
      }
    })
    columnsList.push({
      Header: 'Email',
      accessor: 'email',
      width: 20,
      Cell: props => {
        const email = wrap(props.value, { width: 20,cut:true })
        return email
      }
    })
    columnsList.push({
      Header: 'Organization',
      accessor: 'organization',
      width: 20,
    })
    columnsList.push ({
      Header: 'Login type',
      accessor: 'identityType',
      width: 20,
    })

  } else {
    columnsList.push({
      Header: 'Role',
      accessor: 'requestedRole',
      width: 20,
      Cell: props => {
        return <span>{getRoleLabel(props.value)}</span>
      }
    })
    columnsList.push({
      Header: 'Email',
      accessor: 'email',
      width: 20,
      Cell: props => {
        const email = wrap(props.value, { width: 20,cut:true })
        return email
      }
    })
    columnsList.push({
      Header: 'Organization',
      accessor: 'organization',
      width: 20,
    })
    columnsList.push ({
      Header: 'Login type',
      accessor: 'identityType',
      width: 20,
    })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => columnsList, [])
  const initialState = { hiddenColumns: ['requestId'], sortBy: [{id: 'updatedAt', desc: true}] };

    return (
      <div className={styles.requestTable}>
        {
          requestList.length > 0 &&
            <Table
              columns={columns}
              data={requestList}
              initialState={initialState}
              setSelectedRows={setRowSelected}
              showSelectBox={showSelectBox}
              role={role?.role}
            />
        }
        {
          requestList.length === 0 &&
            <div className={styles.noResultSection}>
                <span className={styles.noResultText}>{contents.accessRequest.noResultText}</span>
            </div>

        }
      </div>
    )
}
