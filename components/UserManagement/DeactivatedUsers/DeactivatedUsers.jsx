import { useContext, useEffect, useState } from 'react'
import styles from './DeactivatedUsers.module.css';
import UserSearch from '../UserSearch'
import UsersList from '../UsersList'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import HttpRequest from '../../../apiManager/httpRequestHandler'

export default function CompletedRequests() {
    const { setUsersList, setOriginalResult } = useContext(UserManagementContext)
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true)
      HttpRequest.getUserList('false')
      .then((response) => {
        const result = response?.data
        setUsersList(result)
        setOriginalResult(result)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
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