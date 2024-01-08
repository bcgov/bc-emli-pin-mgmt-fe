import { useContext, useEffect, useState } from 'react'
import styles from './ActiveUsers.module.css';
import UserUpdate from '../UserUpdate'
import UserSearch from '../UserSearch'
import UsersList from '../UsersList'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import LoadingIcon from '../../../assets/svgs/LoadingIcon'
import LoadingScreen from '../../LoadingScreen'
import InfoIcon from '../../../assets/svgs/InfoIcon'
import CloseIcon from '../../../assets/svgs/CloseIcon'
import content from '../../../assets/content/content.json'
import HttpRequest from '../../../apiManager/httpRequestHandler'

export default function ActiveUsers(role) {
    const { setUsersList, setOriginalResult, rowSelected } = useContext(UserManagementContext)
    const [isLoading, setIsLoading] = useState(false);
    const [showWarnMsg, setShowWarnMsg] = useState(true);
    useEffect(() => {
      setIsLoading(true)
      HttpRequest.getUserList('true')
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

    useEffect(() => {
      if(rowSelected.length > 1) {
        setShowWarnMsg(true)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[rowSelected])

    const loadingSection =  (
      <>
        <LoadingScreen
            loadingText=""
            loaderIcon={<LoadingIcon />}
        />
      </>
    )

    const showEditWarning = (
      <>
        {
            showWarnMsg &&
            <div className={styles.editAlert}>
              <div className={styles.leftSection}>
                <InfoIcon />
                <span className={styles.alertText}>
                  {content.userManagement.editWarningMessage}
                </span>
              </div>
              <div className={styles.rightSection}>
              <span className={styles.closeText}>
                  {content.userManagement.closeText}
                </span>
              <button className={styles.closeIcon} onClick={() => setShowWarnMsg(false)}>
                <CloseIcon />
              </button>
              </div>
            </div>
          }
      </>
    )

    return (
      <div className={styles.mainSection}>
        <div className={styles.filterSection}>
          <div className={styles.btnSection}>
            <UserUpdate role={role?.role}/>
          </div>
          <div className={styles.searchSection}>
            <UserSearch />
          </div>
        </div>
        <div className={styles.editWarning}>
            {rowSelected.length > 1 && showEditWarning}
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
