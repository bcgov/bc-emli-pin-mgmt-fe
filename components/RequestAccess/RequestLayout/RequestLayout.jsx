import styles from './RequestLayout.module.css';
import Content from '../../../assets/content/content.json'
import AccessRequest from '../../../assets/svgs/AccessRequest'
import PageBanner from '../../PageBanner'
import RequestForm from '../RequestForm'
import { useState } from 'react';

export default function RequestLayout(props) {
    const {
      userInfo
    } = props;

    const [showForm, setShowForm] = useState(true)

    function handleShowForm(childData) {
      setShowForm(childData)
    }

    return (
      <div className={`${styles.container}`}>
        <div className="banner-section">
          {
            showForm && 
            <PageBanner
              title={Content.requestAccessBanner.title}
              description={""}
            >
              <AccessRequest/>
            </PageBanner>
          }
          {
            !showForm && 
            <PageBanner
              title={Content.requestAccessBanner.title}
              description={""}>
              <AccessRequest/>
            </PageBanner>
          }
        </div>
        <div className={`${styles.formSection}`}>
            <RequestForm
              userInfo={userInfo}
              setShowForm={handleShowForm}
              showForm={showForm}
            />
        </div>
      </div>
    )
}
