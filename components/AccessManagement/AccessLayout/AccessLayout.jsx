import styles from './AccessLayout.module.css';
import Content from '../../../assets/content/content.json'
import AccessManagement from '../../../assets/svgs/AccessManagement'
import PageBanner from '../../PageBanner'
import PendingRequest from '../PendingRequests'
import CompletedRequests from '../CompletedRequests';
import AccessNavigation from '../AccessNavigation';
import { AccessContext } from '../../../context/accessContext/AccessState'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function AccessLayout(role) {
  const { tabSelected } = useContext(AccessContext)
    return (
      <div className={`${styles.container}`}>
        <div className="banner-section">
          <PageBanner
            title={Content.accessRequestBanner.title}
            description={Content.accessRequestBanner.description}>
              <AccessManagement/>
            </PageBanner>
        </div>
        <div className={`${styles.mainSection}`}>
            <AccessNavigation />
            {tabSelected === 'pending' && <PendingRequest role={role?.role}/>}
            {tabSelected === 'completed' && <CompletedRequests/>}
        </div>
        <ToastContainer
          containerId="access-request"
          hideProgressBar
          draggable={false}
          role="alert"
          autoClose={10000}
        />
      </div>
    )
}
