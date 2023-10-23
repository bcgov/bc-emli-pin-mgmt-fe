import styles from './AccessLayout.module.css';
import Content from '../../../assets/content/content.json'
import AccessManagement from '../../../assets/svgs/AccessManagement'
import PageBanner from '../../PageBanner'
import PendingRequest from '../PendingRequests'
import AccessNavigation from '../AccessNavigation';
import { AccessContext } from '../../../context/accessContext/AccessState'
import { useContext } from 'react'


export default function AccessLayout() {
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
            {tabSelected === 'pending' && <PendingRequest/>}
        </div>
      </div>
    )
}
