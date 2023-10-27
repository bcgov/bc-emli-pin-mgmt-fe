import styles from './AccessNavigation.module.css';
import Content from '../../../assets/content/content.json'
import { AccessContext } from '../../../context/accessContext/AccessState'
import TabGroup from '../../TabGroup';
import { useContext, useEffect } from 'react'

export default function AccessNavigation() {
    const { tabSelected, selectTab } = useContext(AccessContext)
    const options = [
      {label: Content.accessRequestDetails.pendingRequest, value: 'pending'},
      {label: Content.accessRequestDetails.completedRequest, value: 'completed'},
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
