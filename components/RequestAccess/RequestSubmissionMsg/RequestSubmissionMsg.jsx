import styles from './RequestSubmissionMsg.module.css';
import Content from '../../../assets/content/content.json'
import SuccessIcon from '../../../assets/svgs/SuccessIcon'
import FailureIcon from '../../../assets/svgs/FailureIcon'
import EmailIcon from '../../../assets/svgs/EmailIcon'
import { Button } from '../../Button'

export default function RequestLayout(props) {
    const {
      showSuccess,
      message,
      handleBack,
    } = props;

    const successMessage = () => (
      <div className={`${styles.section}`}>
        <div className={`${styles.msgHeader}`}>
          <div className={`${styles.msgIcon}`}>
            <SuccessIcon/>
          </div>
          <span  className={`${styles.headerText}  ${styles.headerTextSuccess}`}>{Content.requestSubmitMessage.successHeader}</span>
        </div>
        <div className={`${styles.messageSection}`}>
          <span className={`${styles.message}`}>{message}</span>
        </div>
      </div>
    )

    const failureMessage = () => (
      <div className={`${styles.section}`}>
        <div className={`${styles.msgHeader}`}>
          <div className={`${styles.msgIcon}`}>
            <FailureIcon/>
          </div>
          <div className={`${styles.headerText} ${styles.headerTextFailure}`}>{Content.requestSubmitMessage.failureHeader}</div>
        </div>
        <div className={`${styles.messageSection}`}>
          <span className={`${styles.message}`}>{message}</span>
        </div>
        <div className={`${styles.contactSection}`}>
          <span className={`${styles.contactHeader}`}>{Content.requestSubmitMessage.systemAdministrator}</span>
          <div className={`${styles.contactEmail}`}>
            <div className={`${styles.msgIcon}`}><EmailIcon/>  </div>
              <a
                href={`mailto:${Content.requestSubmitMessage.systemAdminEmail}`}
                className={`${styles.emailText}`}
              >
                {Content.requestSubmitMessage.systemAdminEmail}
              </a>
          </div>
          <div className={`${styles.navSection}`}>
            <Button
                variant="primary"
                handleOnClick={handleBack}
                isDarkBackground={true}
            >
                {Content.back}
            </Button>
          </div>
        </div>
      </div>
    )


    return (
      <div className={`${styles.container}`}>
        {showSuccess ? successMessage() : failureMessage ()}
      </div>
    )
}
