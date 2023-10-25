import { useContext, useEffect, useState } from 'react'
import styles from './DeactivatedUsers.module.css';
import UserSearch from '../UserSearch'
import UsersList from '../UsersList'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'

export default function CompletedRequests() {
    const { setUsersList, setOriginalResult } = useContext(UserManagementContext)
    const [isLoading, setIsLoading] = useState(false);
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
        requestStatus: 'Granted',
        createdAt: '2023-10-18 22:03:29.271 -0230',
        requestReason: 'test',
        rejectionReason: ''
      },
      {
        requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
        identityType: 'Standard',
        requestedRole: 'Super Cool Definitely Real Business',
        organization: '',
        email: 'alex.parker456@example.com',
        userName: 'AParker',
        firstName:'Alex Parker',
        lastName: '',
        requestStatus: 'Denied',
        createdAt: '2023-10-19 12:37:48.403 -0230',
        requestReason: 'test',
        rejectionReason: ''
      },
      {
        requestId: '0554fb61-d874-4849-97b0-cb4439c9c33c',
        identityType: 'Standard',
        requestedRole: 'Super Cool Definitely Real Business',
        organization: '',
        email: 'alex.parker456@example.com',
        userName: 'AParker',
        firstName:'Alex Parker',
        lastName: '',
        requestStatus: 'Granted',
        createdAt: '2023-10-19 12:37:48.403 -0230',
        requestReason: 'test',
        rejectionReason: ''
      }
    ]
    setUsersList(result);
    setOriginalResult(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadingSection = () => {
      return true;
    }

    return (
      <div className={styles.mainSection}>
        <div className={styles.filterSection}>
          <div className={styles.searchSection}>
            <UserSearch />
          </div>
        </div>
        {isLoading && loadingSection}
        {!isLoading &&
          <div className={styles.tblSection}>
            <UsersList />
          </div>
        }
      </div>
    )
}