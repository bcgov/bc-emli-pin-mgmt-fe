import { useEffect, useState } from 'react'
import styles from './DashboardLayout.module.css';
import HttpRequest from '../../apiManager/httpRequestHandler';
import LoadingScreen from '../LoadingScreen';
import LoadingIcon from '../../assets/svgs/LoadingIcon';

export default function DashboardLayout() {
  const [iframeUrl, setIframeUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    HttpRequest.getDashboardUrl().then((response) => {
        const result = response?.data?.url
        setIframeUrl(result)
      })
      .catch((error) => {
        console.error(error)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.mainSection}`}>
          {
            isLoading ?
            <div className={`${styles.loadingIcon}`}>
              <LoadingScreen 
                loadingText=""
                loaderIcon={<LoadingIcon />}
              />
            </div>
            : ""
          }
          <iframe
              src={iframeUrl}
              height={875}
              onLoad={() => setIsLoading(false)}
          />

        </div>
      </div>
    )
}
