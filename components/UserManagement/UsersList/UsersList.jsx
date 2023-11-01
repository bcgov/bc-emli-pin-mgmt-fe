import {
  useMemo,
  useContext,
} from 'react'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import Table from '../../Table'
import wrap from 'word-wrap'
import contents from '../../../assets/content/content.json'
import styles from './UsersList.module.css'

export default function UsersList() {
  const { setRowSelected, usersList, tabSelected } = useContext(UserManagementContext)
  const showSelectBox = tabSelected === 'active'
  const columnsList = [
    {
      Header: 'User Id',
      accessor: 'userId',
      show: false,
    },
    {
      Header: 'Role Type',
      accessor: 'role',
      width: 10,

    },
    {
      Header: 'Username',
      accessor: 'userName',
      width: 60,
    },
    {
      Header: 'Identity type',
      accessor: 'identityType',
      width: 70,

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
      Header: 'Email',
      accessor: 'email',
      width: 90,
      Cell: props => {
        const email = wrap(props.value, { width: 20,cut:true })
        return email
      }
    },
    {
      Header: 'Organization',
      accessor: 'organization',
      width: 90,
    },
  ]

  if(tabSelected === 'deactivated' ) {
    columnsList.push ({
      Header: 'Reason for deactivation',
      accessor: 'deactivationReason',
      width: 20,
    })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => columnsList, [])
  const initialState = { hiddenColumns: ['userId'] };


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
