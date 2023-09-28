import styles from './RequestLayout.module.css';
import Content from '../../../assets/content/content.json'
import AccessRequest from '../../../assets/svgs/AccessRequest';
import PageBanner from '../../PageBanner';

export default function RequestLayout(props) {
    const {
      userInfo
    } = props;

    return (
      <div className={`${styles.container}`}>
        <div className="banner-section">
          <PageBanner
            title={Content.requestAccessBanner.title}
            description={Content.requestAccessBanner.description}>
              <AccessRequest/>
            </PageBanner>
        </div>
        <div className={`${styles.formSection}`}>

        </div>
      </div>
    )
}
