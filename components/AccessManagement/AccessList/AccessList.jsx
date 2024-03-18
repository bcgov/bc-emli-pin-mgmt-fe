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
      Header: 'Access status',
      accessor: 'requestStatus',
      width: 20,
      Cell: props => {
        const statusStyle = props.value === 'Granted' ?
          styles.granted : (props.value === 'Rejected' ? styles.rejected : '')
        return <span className={statusStyle}>{getAccessStatusLabel(props.value)}</span>
      }

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
    {
      Header: 'Login type',
      accessor: 'identityType',
      width: 20,
    },
    {
      Header: 'Email',
      accessor: 'email',
      width: 20,
      Cell: props => {
        const email = wrap(props.value, { width: 20,cut:true })
        return email
      }
    },
    {
      Header: 'Role type',
      accessor: 'requestedRole',
      width: 20,
      Cell: props => {
        return <span>{getRoleLabel(props.value)}</span>
      }
    },
    {
      Header: 'Organization',
      accessor: 'organization',
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => columnsList, [])
  const initialState = { hiddenColumns: ['requestId'] };

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
