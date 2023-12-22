import { useContext, useEffect, useState } from 'react'
import styles from './PendingRequests.module.css';
import AccessForm from '../AccessForm'
import AccessSearch from '../AccessSearch'
import AccessList from '../AccessList'
import { AccessContext } from '../../../context/accessContext/AccessState'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import LoadingIcon from '../../../assets/svgs/LoadingIcon'
import LoadingScreen from '../../LoadingScreen'

export default function PendingRequests(role) {
    const { setRequestList, setOriginalResult } = useContext(AccessContext)
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true)
      HttpRequest.getRequestList('pending')
        .then((response) => {
          const result = response?.data
          setRequestList(result)
          setOriginalResult(result)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error(error)
          setIsLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadingSection =  (
      <>
        <LoadingScreen
            loadingText=""
            loaderIcon={<LoadingIcon />}
        />
      </>
    )

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
            <AccessList role={role?.role}/>
          </div>
        }
      </div>
    )
}
