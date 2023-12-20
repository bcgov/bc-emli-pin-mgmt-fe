import { useEffect, useState } from 'react'
import styles from './DashboardLayout.module.css';
import HttpRequest from '../../apiManager/httpRequestHandler';

export default function DashboardLayout() {
  const [iframeUrl, setIframeUrl] = useState('')
  useEffect(() => {
    HttpRequest.getDashboardUrl().then((response) => {
        const result = response?.data?.url
        setIframeUrl(result)
        //setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        //setIsLoading(false)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.mainSection}`}>
          {
              <iframe
                src={iframeUrl}
                height={600}
            />
          }

        </div>
      </div>
    )
}
