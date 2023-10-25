import styles from './UserManagementLayout.module.css';
import Content from '../../../assets/content/content.json'
import UserManagement from '../../../assets/svgs/UserManagement'
import PageBanner from '../../PageBanner'
import ActiveUsers from '../ActiveUsers'
import DeactivatedUsers from '../DeactivatedUsers';
import AccessNavigation from '../UserManagementNavigation';
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import { useContext } from 'react'


export default function UserManagementLayout() {
  const { tabSelected } = useContext(UserManagementContext)
    return (
      <div className={`${styles.container}`}>
        <div className="banner-section">
          <PageBanner
            title={Content.userManagementBanner.title}
            description={Content.userManagementBanner.description}>
              <UserManagement/>
            </PageBanner>
        </div>
        <div className={`${styles.mainSection}`}>
            <AccessNavigation />
            {tabSelected === 'active' && <ActiveUsers/>}
            {tabSelected === 'deactivated' && <DeactivatedUsers/>}
        </div>
      </div>
    )
}
