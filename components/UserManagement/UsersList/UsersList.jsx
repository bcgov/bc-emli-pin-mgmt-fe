import {
  useMemo,
  useContext,
} from 'react'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import Table from '../../Table'
import { getRoleLabel } from '../../../utils/helper'
import contents from '../../../assets/content/content.json'
import styles from './UsersList.module.css'
import { getLocalTime } from '../../../utils/helper';

export default function UsersList(role) {
  const { setRowSelected, usersList, tabSelected } = useContext(UserManagementContext)
  const showSelectBox = tabSelected === 'active'
  const columnsList = [
    {
      Header: 'User Id',
      accessor: 'userId',
      show: false,
    },
    {
      Header: 'First name',
      accessor: 'givenName',
      width: 150,

    },
    {
      Header: 'Last name',
      accessor: 'lastName',
      width: 80,
    },
    {
      Header: 'Username',
      accessor: 'userName',
      width: 60,
    },
    {
      Header: 'Email',
      accessor: 'email',
      width: 90,
    },
    {
      Header: 'Role',
      accessor: 'role',
      width: 10,
      Cell: props => {
        return <span>{getRoleLabel(props.value)}</span>
      }
    },
    {
      Header: 'Organization',
      accessor: 'organization',
      width: 90,
    }
  ]

  if(tabSelected === 'deactivated' ) {
    columnsList.push ({
      Header: 'Reason for deactivation',
      accessor: 'deactivationReason',
      width: 20,
    })
    columnsList.push ({
      Header: 'Deactivated at',
      accessor: 'updatedAt',
      width: 20,
      Cell: props => {
        return getLocalTime(props.value)
      }
    })
    columnsList.push ({
      Header: 'Deactivated by',
      accessor: 'updatedBy',
      width: 20,
    })
    columnsList.push ({
      Header: 'Login type',
      accessor: 'identityType',
      width: 70,

    })
  }
  if(tabSelected === 'active' ) {
    columnsList.push ({
      Header: 'Edited at',
      accessor: 'updatedAt',
      width: 20,
      Cell: props => {
        return getLocalTime(props.value)
      }
    })
    columnsList.push ({
      Header: 'Edited by',
      accessor: 'updatedBy',
      width: 20,
    })
    columnsList.push ({
      Header: 'Login type',
      accessor: 'identityType',
      width: 70,

    })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => columnsList, [])
  const initialState = { hiddenColumns: ['userId'], sortBy: [{id: 'updatedAt', desc: true}] };

    return (
      <div className="list-table">
        {
          usersList.length > 0 &&
          <Table
            columns={columns}
            data={usersList}
            initialState={initialState}
            setSelectedRows={setRowSelected}
            showSelectBox={showSelectBox}
            role={role?.role}
          />
        }
        {
          usersList.length === 0 &&
          <div className={styles.noResultSection}>
            <span className={styles.noResultText}>{contents.userManagement.noResultText}</span>
          </div>
        }
      </div>
    )
}
