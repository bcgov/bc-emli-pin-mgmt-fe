import { useContext, useEffect, useState } from 'react'
import styles from './PendingRequests.module.css';
import AccessForm from '../AccessForm'
import AccessSearch from '../AccessSearch'
import AccessList from '../AccessList'
import { AccessContext } from '../../../context/accessContext/AccessState'

export default function PendingRequests() {
    const { setRequestList } = useContext(AccessContext)
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
        requestStatus: 'NotGranted',
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
        requestStatus: 'NotGranted',
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
        requestStatus: 'NotGranted',
        createdAt: '2023-10-19 12:37:48.403 -0230',
        requestReason: 'test',
        rejectionReason: ''
      }
    ]
    setRequestList(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadingSection = () => {
      return true;
    }

    return (
      <div className={styles.mainSection}>
        <div className={styles.filterSection}>
          <div className={styles.btnSection}>
            <AccessForm />
          </div>
          <div className={styles.searchSection}>
            <AccessSearch />
          </div>
        </div>
        {isLoading && loadingSection}
        {!isLoading &&
          <div className={styles.tblSection}>
            <AccessList />
          </div>
        }
      </div>
    )
}
