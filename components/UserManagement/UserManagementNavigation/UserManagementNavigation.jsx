import styles from './UserManagementNavigation.module.css';
import Content from '../../../assets/content/content.json'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import TabGroup from '../../TabGroup';
import { useContext, useEffect } from 'react'

export default function UserManagementNavigation() {
    const { tabSelected, selectTab } = useContext(UserManagementContext)
    const options = [
      {label: Content.userManagementTabs.activeUsers, value: 'active'},
      {label: Content.userManagementTabs.deactivatedUsers, value: 'deactivated'},
    ];
    useEffect(() => {
      selectTab(options[0].value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className={`${styles.mainSection}`}>
          <TabGroup
            types={options}
            activeTab={tabSelected}
            setActive={selectTab}
          />
      </div>
    )
}
